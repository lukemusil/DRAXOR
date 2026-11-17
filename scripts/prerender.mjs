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
  ["úvod", home, "[DOPLNIT: obchodní jméno]"],
  ["úvod", home, "application/ld+json"],
  ["zásady", privacy, "Zásady ochrany osobních údajů"],
  ["zásady", privacy, "Formspree"],
];

for (const [label, html, needle] of required) {
  if (!html.includes(needle)) {
    console.error(`V prerenderu „${label}“ chybí: ${needle}`);
    process.exit(1);
  }
}

if (home.includes("Poptávka byla úspěšně odeslána")) {
  console.error("Úvodní HTML nesmí před odesláním hlásit úspěch formuláře.");
  process.exit(1);
}

if (!fs.existsSync(path.join(root, "dist/CNAME"))) {
  console.error("V dist chybí CNAME. Nasazení na draxor.cz by přišlo o vlastní doménu.");
  process.exit(1);
}
