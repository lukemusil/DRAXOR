import fs from "node:fs";
import path from "node:path";
import { pathToFileURL } from "node:url";

const root = process.cwd();
const templatePath = path.join(root, "dist/index.html");
const template = fs.readFileSync(templatePath, "utf8");
const serverEntry = path.join(root, "dist-ssr/entry-server.js");
const { render, documentMeta } = await import(pathToFileURL(serverEntry).href);

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

  const jsonLd = meta.jsonLd
    ? `<script type="application/ld+json">${JSON.stringify(meta.jsonLd).replaceAll("<", "\\u003c")}</script>`
    : "";
  html = html.replace("<!--jsonld-->", jsonLd);

  const preload = meta.preloadHero
    ? `<link rel="preload" as="image" href="${escapeAttr(meta.preloadHero.href)}" type="image/avif" imagesrcset="${escapeAttr(meta.preloadHero.imagesrcset)}" imagesizes="${escapeAttr(meta.preloadHero.imagesizes)}" fetchpriority="high" />`
    : "";
  html = html.replace("<!--hero-preload-->", preload);
  html = html.replace("<!--extra-head-->", meta.extraHead || "");
  return html;
}

const routes = [
  { url: "/", out: path.join(root, "dist/index.html") },
  { url: "/ochrana-osobnich-udaju", out: path.join(root, "dist/ochrana-osobnich-udaju/index.html") },
  { url: "/404", out: path.join(root, "dist/404.html") },
];

for (const route of routes) {
  const appHtml = render(route.url);
  const meta = documentMeta(route.url);
  let html = template.replace('<div id="root"></div>', `<div id="root">${appHtml}</div>`);
  html = applyMeta(html, meta);
  fs.mkdirSync(path.dirname(route.out), { recursive: true });
  fs.writeFileSync(route.out, html);
  console.log(`prerender ${route.url} → ${path.relative(root, route.out)} (${appHtml.length} znaků HTML)`);
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

if (homeMeta.googleVerification) {
  if (!home.includes(`name="google-site-verification" content="${homeMeta.googleVerification}"`)) {
    console.error("Chybí meta tag Google Search Console.");
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

for (const [label, html] of [
  ["úvod", home],
  ["zásady", privacy],
]) {
  if (html.includes("[DOPLNIT")) {
    console.error(`V prerenderu „${label}“ je vidět zástupný text [DOPLNIT].`);
    process.exit(1);
  }
}

const jsonLdMatch = home.match(/<script type="application\/ld\+json">(.*?)<\/script>/);
if (!jsonLdMatch) {
  console.error("V úvodu chybí JSON-LD.");
  process.exit(1);
}
const jsonLd = JSON.parse(jsonLdMatch[1]);
if (jsonLd.name !== "Lukáš Musil" || jsonLd.legalName !== "Lukáš Musil" || jsonLd.taxID !== "13999508") {
  console.error("JSON-LD neobsahuje obchodní jméno nebo IČO.");
  process.exit(1);
}
if (jsonLd.address?.addressLocality !== "Brno" || jsonLd.address?.streetAddress) {
  console.error("JSON-LD musí mít sídlo jen jako Brno, bez ulice.");
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
