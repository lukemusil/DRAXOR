import { StrictMode } from "react";
import { renderToString } from "react-dom/server";
import App from "./App";
import { images } from "./image-manifest";
import { buildLocalBusinessJsonLd, normalizePath, pageKind, seo, siteConfig } from "./site.config";

export function render(url: string): string {
  const path = normalizePath(url);
  return renderToString(
    <StrictMode>
      <App initialPath={path} />
    </StrictMode>,
  );
}

export function documentMeta(url: string) {
  const path = normalizePath(url);
  const kind = pageKind(path);
  const meta = kind === "privacy" ? seo.privacy : kind === "home" ? seo.home : seo.notFound;
  const canonical =
    kind === "privacy" ? `${siteConfig.siteUrl}${path}` : kind === "home" ? `${siteConfig.siteUrl}/` : `${siteConfig.siteUrl}/`;

  const hero = images.hero;
  const preload = {
    href: hero.avif[hero.avif.length - 1]?.src ?? "/og-image.jpg",
    imagesrcset: hero.avif.map((variant) => `${variant.src} ${variant.width}w`).join(", "),
    imagesizes: "100vw",
  };

  return {
    title: meta.title,
    description: meta.description,
    canonical,
    robots: kind === "notFound" ? "noindex, follow" : "index, follow",
    jsonLd: kind === "home" ? buildLocalBusinessJsonLd() : null,
    preloadHero: kind === "home" ? preload : null,
  };
}
