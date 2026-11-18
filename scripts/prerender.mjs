import fs from "node:fs";
import path from "node:path";
import { pathToFileURL } from "node:url";

const root = process.cwd();
const templatePath = path.join(root, "dist/index.html");
const template = fs.readFileSync(templatePath, "utf8");
const serverEntry = path.join(root, "dist-ssr/entry-server.js");
const { render, documentMeta, htmlRoutes, sitemapPaths } = await import(pathToFileURL(serverEntry).href);

function escapeAttr(value) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll('"', "&quot;")
    .replaceAll("<", "&lt;");
}

function applyMeta(html, meta) {
  const replaceAttr = (name, value) => {
    const pattern = new RegExp(`(data-seo="${name}"[^>]*content=")[^"]*(")`);
    const linkPattern = new RegExp(`(data-seo="${name}"[^>]*href=")[^"]*(")`);
    if (html.includes(`data-seo="${name}"`) && pattern.test(html)) {
      html = html.replace(pattern, `$1${escapeAttr(value)}$2`);
    } else if (linkPattern.test(html)) {
      html = html.replace(linkPattern, `$1${escapeAttr(value)}$2`);
    }
    return html;
  };

  html = html.replace(/<title>[^<]*<\/title>/, `<title>${escapeAttr(meta.title)}</title>`);
  html = replaceAttr("description", meta.description);
  html = replaceAttr("canonical", meta.canonical);
  html = replaceAttr("robots", meta.robots);
  html = replaceAttr("og-url", meta.canonical);
  html = replaceAttr("og-title", meta.title);
  html = replaceAttr("og-description", meta.description);
  html = replaceAttr("twitter-title", meta.title);
  html = replaceAttr("twitter-description", meta.description);
  if (meta.ogImage) {
    html = replaceAttr("og-image", meta.ogImage);
    html = replaceAttr("twitter-image", meta.ogImage);
  }

  const jsonLdItems = !meta.jsonLd ? [] : Array.isArray(meta.jsonLd) ? meta.jsonLd : [meta.jsonLd];
  const jsonLd = jsonLdItems
    .map(
      (item) =>
        `<script type="application/ld+json">${JSON.stringify(item).replaceAll("<", "\\u003c")}</script>`,
    )
    .join("\n");
  html = html.replace("<!--jsonld-->", jsonLd);

  const preload = meta.preloadHero
    ? `<link rel="preload" as="image" href="${escapeAttr(meta.preloadHero.href)}" type="image/avif" imagesrcset="${escapeAttr(meta.preloadHero.imagesrcset)}" imagesizes="${escapeAttr(meta.preloadHero.imagesizes)}" fetchpriority="high" />`
    : "";
  html = html.replace("<!--hero-preload-->", preload);
  html = html.replace("<!--extra-head-->", meta.extraHead || "");
  return html;
}

const routes = htmlRoutes().map((route) => ({
  ...route,
  out: path.join(root, route.file),
}));

for (const route of routes) {
  const appHtml = render(route.url);
  const meta = documentMeta(route.url);
  let html = template.replace('<div id="root"></div>', `<div id="root">${appHtml}</div>`);
  html = applyMeta(html, meta);
  const h1Count = html.match(/<h1[\s>]/g)?.length ?? 0;
  if (!html.includes(route.title) || !html.includes(route.h1) || h1Count !== 1) {
    console.error(`Trasa ${route.url} nemá vlastní title nebo právě jedno H1 (${route.title} / ${route.h1}, h1=${h1Count}).`);
    process.exit(1);
  }
  const jsonLdItems = !meta.jsonLd ? [] : Array.isArray(meta.jsonLd) ? meta.jsonLd : [meta.jsonLd];
  const faqLd = jsonLdItems.find((item) => item["@type"] === "FAQPage");
  if (faqLd) {
    const questions = faqLd.mainEntity ?? [];
    if (!questions.length) {
      console.error(`Trasa ${route.url} má prázdné FAQ.`);
      process.exit(1);
    }
    for (const question of questions) {
      if (!html.includes(question.name) || !html.includes(question.acceptedAnswer.text.slice(0, 40))) {
        console.error(`Trasa ${route.url} nevykreslila otázku: ${question.name}`);
        process.exit(1);
      }
    }
  }
  if (route.url.startsWith("/blog/") && !jsonLdItems.some((item) => item["@type"] === "Article")) {
    console.error(`Článek ${route.url} nemá Article JSON-LD.`);
    process.exit(1);
  }
  fs.mkdirSync(path.dirname(route.out), { recursive: true });
  fs.writeFileSync(route.out, html);
  console.log(`prerender ${route.url} → ${path.relative(root, route.out)} (${appHtml.length} znaků HTML)`);
}

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${sitemapPaths()
  .map((loc) => `  <url><loc>${loc}</loc></url>`)
  .join("\n")}
</urlset>
`;
fs.writeFileSync(path.join(root, "dist/sitemap.xml"), sitemap);
fs.writeFileSync(
  path.join(root, "dist/robots.txt"),
  "User-agent: *\nAllow: /\n\nSitemap: https://draxor.cz/sitemap.xml\n",
);
const blogArticles = routes.filter((route) => route.url.startsWith("/blog/"));
const sitemapLocs = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map((match) => match[1]);
if (blogArticles.length === 0) {
  if (sitemap.includes("/blog")) {
    console.error("Prázdný blog nesmí být v sitemapě.");
    process.exit(1);
  }
} else if (
  !sitemapLocs.includes("https://draxor.cz/blog") ||
  blogArticles.some((route) => !sitemapLocs.includes(`https://draxor.cz${route.url}`))
) {
  console.error("Sitemap neobsahuje blog nebo některý článek.");
  process.exit(1);
}

const home = fs.readFileSync(path.join(root, "dist/index.html"), "utf8");
const privacy = fs.readFileSync(path.join(root, "dist/ochrana-osobnich-udaju/index.html"), "utf8");
const required = [
  ["úvod", home, "Tvoříme vaši vizi"],
  ["úvod", home, "Zásady ochrany osobních údajů"],
  ["úvod", home, "Lukáš Musil"],
  ["úvod", home, "13999508"],
  ["úvod", home, "application/ld+json"],
  ["zásady", privacy, "Zásady ochrany osobních údajů"],
  ["zásady", privacy, "Lukáš Musil"],
  ["zásady", privacy, "po dobu nezbytnou k vyřízení poptávky a následné komunikace"],
  ["zásady", privacy, "Formspree je zpracovatelem"],
  ["úvod", home, "Loga ke stažení"],
  ["úvod", home, "Stáhnout celý balíček (ZIP)"],
  ["úvod", home, "draxor-text-gold.svg"],
  ["úvod", home, "draxor-text-gold.png"],
  ["úvod", home, "Jak spolupráce probíhá"],
  ["úvod", home, "Termíny upřesníme v nabídce"],
  ["úvod", home, "Typ stavby"],
  ["úvod", home, "Lokalita stavby"],
  ["úvod", home, "Orientační rozpočet"],
  ["úvod", home, "Zavolat"],
];

for (const [label, html, needle] of required) {
  if (!html.includes(needle)) {
    console.error(`V prerenderu „${label}“ chybí: ${needle}`);
    process.exit(1);
  }
}

if (
  home.includes("draxor-text-white") ||
  home.includes("draxor-text-black") ||
  home.includes("draxor-strecha") ||
  home.includes("draxor-ikona") ||
  home.includes("logo-zlate") ||
  home.includes("logo-svetle") ||
  home.includes("logo-tmave") ||
  home.includes("logo-ikona")
) {
  console.error("Patička má nabízet jen zlatý nápis DRAXOR.");
  process.exit(1);
}

const homeMeta = documentMeta("/");
if (homeMeta.showBlog) {
  if (!home.includes("Z našeho blogu")) {
    console.error("showBlog je zapnuté, ale blog v HTML chybí.");
    process.exit(1);
  }
} else if (home.includes("Z našeho blogu")) {
  console.error("Blog má být skrytý, dokud není showBlog zapnuté.");
  process.exit(1);
}
if (homeMeta.hasPrices) {
  if (!home.includes("Cena od")) {
    console.error("Vyplněná cena se v HTML neobjevila.");
    process.exit(1);
  }
} else if (home.includes("Cena od")) {
  console.error("Cena se nesmí vypsat, dokud není v productPrices vyplněná.");
  process.exit(1);
}

const googleVerificationTag =
  '<meta name="google-site-verification" content="YNWUaKvkK9oNrjp3PTRLnifsecp-HhG2qrwIAZo1Evk" />';
if (homeMeta.googleVerification) {
  if (!home.includes(googleVerificationTag)) {
    console.error("Chybí přesný meta tag Google Search Console.");
    process.exit(1);
  }
  if (home.includes("seznam-wmt")) {
    console.error("Slot Seznamu má zůstat prázdný.");
    process.exit(1);
  }
} else if (home.includes("google-site-verification")) {
  console.error("Ověření Search Console se vložilo, přestože je prázdné.");
  process.exit(1);
}
if (homeMeta.analyticsEnabled) {
  if (!privacy.includes("Návštěvnost webu")) {
    console.error("Zapnutá analytika musí být v zásadách.");
    process.exit(1);
  }
} else if (privacy.includes("Návštěvnost webu") || home.includes("gc.zgo.at") || home.includes("plausible.io/js")) {
  console.error("Vypnutá analytika se nesmí objevit na webu ani v zásadách.");
  process.exit(1);
}

if (home.includes("Poptávka byla úspěšně odeslána")) {
  console.error("Úvodní HTML nesmí před odesláním hlásit úspěch formuláře.");
  process.exit(1);
}

function walk(dir) {
  const found = [];
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) found.push(...walk(full));
    else found.push(full);
  }
  return found;
}

const marker = "[DOPL" + "NIT";
for (const file of walk(path.join(root, "dist"))) {
  if (!/\.(html|js|css|txt|xml|json|svg)$/.test(file)) continue;
  const text = fs.readFileSync(file, "utf8");
  if (text.includes(marker)) {
    console.error(`V buildu je nepublikovaný zástupný text: ${path.relative(root, file)}`);
    process.exit(1);
  }
}
if (home.includes("Zastavte se na kávu") || home.includes("Cena od")) {
  console.error("Úvod nesmí zvát na návštěvu provozovny ani vypisovat cenu.");
  process.exit(1);
}

const jsonLdMatch = home.match(/<script type="application\/ld\+json">(.*?)<\/script>/);
if (!jsonLdMatch) {
  console.error("V úvodu chybí JSON-LD.");
  process.exit(1);
}
const jsonLd = JSON.parse(jsonLdMatch[1]);
if (jsonLd["@type"] !== "HomeAndConstructionBusiness" || jsonLd.name !== "DRAXOR") {
  console.error("JSON-LD musí být HomeAndConstructionBusiness se jménem DRAXOR.");
  process.exit(1);
}
if (jsonLd.legalName !== "Lukáš Musil" || jsonLd.identifier?.value !== "13999508") {
  console.error("JSON-LD neobsahuje legalName nebo IČO.");
  process.exit(1);
}
if (jsonLd.address || jsonLd.telephone !== "+420732527871") {
  console.error("JSON-LD nesmí mít ulici a musí mít telefon.");
  process.exit(1);
}
const areas = JSON.stringify(jsonLd.areaServed || {});
if (!areas.includes("Brno") || !areas.includes("Jihomoravský kraj")) {
  console.error("JSON-LD nemá oblast Brno a Jihomoravský kraj.");
  process.exit(1);
}

const clientJs = fs
  .readdirSync(path.join(root, "dist/assets"))
  .filter((name) => name.endsWith(".js"))
  .map((name) => fs.readFileSync(path.join(root, "dist/assets", name), "utf8"))
  .join("\n");
if (!clientJs.includes('formspreeId:"mwloonzl"') || !clientJs.includes("https://formspree.io/f/")) {
  console.error("Klient neposílá poptávku na https://formspree.io/f/mwloonzl.");
  process.exit(1);
}
if (!clientJs.includes('Accept:"application/json"')) {
  console.error("Klient neposílá hlavičku Accept: application/json.");
  process.exit(1);
}
if (!clientJs.includes("typ_stavby") || !clientJs.includes("lokalita_stavby") || !clientJs.includes("orientacni_rozpocet")) {
  console.error("Formulář neposílá typ stavby, lokalitu nebo rozpočet.");
  process.exit(1);
}
if (!clientJs.includes(".ok")) {
  console.error("Klient neukazuje úspěch jen při odpovědi 2xx.");
  process.exit(1);
}

if (!fs.existsSync(path.join(root, "dist/CNAME"))) {
  console.error("V dist chybí CNAME. Nasazení na draxor.cz by přišlo o vlastní doménu.");
  process.exit(1);
}
