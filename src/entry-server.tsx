import { StrictMode } from "react";
import { renderToString } from "react-dom/server";
import App from "./App";
import { images } from "./image-manifest";
import { articles } from "./content/articles";
import { htmlRoutes, resolvePage, sitemapPaths } from "./content/routes";
import {
  analyticsHeadHtml,
  buildLocalBusinessJsonLd,
  enabledAnalytics,
  googleVerificationToken,
  normalizePath,
  priceFromLabel,
  productPrices,
  seo,
  seznamVerificationToken,
  siteConfig,
} from "./site.config";

export { htmlRoutes, sitemapPaths };

export function render(url: string): string {
  const path = normalizePath(url);
  return renderToString(
    <StrictMode>
      <App initialPath={path} />
    </StrictMode>,
  );
}

function faqJsonLd(product: { faqs: { q: string; a: string }[] }) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: product.faqs.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: { "@type": "Answer", text: faq.a },
    })),
  };
}

export function documentMeta(url: string) {
  const path = normalizePath(url);
  const page = resolvePage(path);
  const product = page.kind === "product" ? page.product : null;
  const article = page.kind === "article" ? page.article : null;
  const meta =
    page.kind === "privacy"
      ? seo.privacy
      : page.kind === "home"
        ? seo.home
        : product
          ? { title: product.title, description: product.description }
          : page.kind === "blog"
            ? {
                title: "Blog | DRAXOR",
                description: "Články DRAXOR o chatách, srubech a dřevostavbách. Zatím je připravujeme.",
              }
            : article
              ? { title: `${article.title} | DRAXOR`, description: article.description }
              : seo.notFound;
  const canonical =
    page.kind === "home" ? `${siteConfig.siteUrl}/` : `${siteConfig.siteUrl}${path === "/404" ? "/" : path}`;

  const hero = images.hero;
  const preload = {
    href: hero.avif[hero.avif.length - 1]?.src ?? "/og-image.jpg",
    imagesrcset: hero.avif.map((variant) => `${variant.src} ${variant.width}w`).join(", "),
    imagesizes: "100vw",
  };

  const galleryImage = product?.gallery[0] ? images[product.gallery[0].image].jpg.at(-1)?.src : null;
  const ogImage = galleryImage ? `${siteConfig.siteUrl}${galleryImage}` : `${siteConfig.siteUrl}/og-image.jpg`;

  return {
    title: meta.title,
    description: meta.description,
    canonical,
    ogImage,
    robots: page.kind === "notFound" || (page.kind === "blog" && articles.length === 0) ? "noindex, follow" : "index, follow",
    jsonLd:
      page.kind === "home" ? buildLocalBusinessJsonLd() : product ? faqJsonLd(product) : null,
    preloadHero: page.kind === "home" ? preload : null,
    extraHead: [
      googleVerificationToken()
        ? `<meta name="google-site-verification" content="${googleVerificationToken()}" />`
        : "",
      seznamVerificationToken()
        ? `<meta name="seznam-wmt" content="${seznamVerificationToken()}" />`
        : "",
      analyticsHeadHtml(),
    ]
      .filter(Boolean)
      .join("\n"),
    analyticsEnabled: Boolean(enabledAnalytics()),
    googleVerification: googleVerificationToken(),
    showBlog: siteConfig.showBlog,
    hasPrices: Object.keys(productPrices).some((id) => priceFromLabel(id) !== null),
  };
}
