import { articles } from "./articles";
import { productByPath, productPages, type ProductPageData } from "./products";
import type { Article } from "./articles";
import { normalizePath, seo, siteConfig } from "../site.config";

export type ResolvedPage =
  | { kind: "home" }
  | { kind: "privacy" }
  | { kind: "product"; product: ProductPageData }
  | { kind: "blog" }
  | { kind: "article"; article: Article }
  | { kind: "notFound" };

export function resolvePage(pathname: string): ResolvedPage {
  const path = normalizePath(pathname);
  if (path === "/" || path === "") return { kind: "home" };
  if (path === "/ochrana-osobnich-udaju") return { kind: "privacy" };
  if (path === "/blog") return { kind: "blog" };
  if (path.startsWith("/blog/")) {
    const slug = path.slice("/blog/".length);
    const article = articles.find((item) => item.slug === slug);
    if (article) return { kind: "article", article };
    return { kind: "notFound" };
  }
  const product = productByPath(path);
  if (product) return { kind: "product", product };
  return { kind: "notFound" };
}

export function sitemapPaths(): string[] {
  const paths = ["/", "/ochrana-osobnich-udaju", ...productPages.map((product) => product.path)];
  if (articles.length > 0) {
    paths.push("/blog", ...articles.map((article) => `/blog/${article.slug}`));
  }
  return paths.map((path) => (path === "/" ? `${siteConfig.siteUrl}/` : `${siteConfig.siteUrl}${path}`));
}

export function htmlRoutes(): { url: string; file: string; title: string; h1: string }[] {
  const routes = [
    {
      url: "/",
      file: "dist/index.html",
      title: seo.home.title,
      h1: "Tvoříme vaši vizi ve",
    },
    {
      url: "/ochrana-osobnich-udaju",
      file: "dist/ochrana-osobnich-udaju/index.html",
      title: seo.privacy.title,
      h1: "Zásady ochrany osobních údajů",
    },
    ...productPages.map((product) => ({
      url: product.path,
      file: `dist${product.path}/index.html`,
      title: product.title,
      h1: product.h1,
    })),
    {
      url: "/blog",
      file: "dist/blog/index.html",
      title: "Blog | DRAXOR",
      h1: "Blog",
    },
    ...articles.map((article) => ({
      url: `/blog/${article.slug}`,
      file: `dist/blog/${article.slug}/index.html`,
      title: `${article.title} | DRAXOR`,
      h1: article.title,
    })),
    {
      url: "/404",
      file: "dist/404.html",
      title: seo.notFound.title,
      h1: "Stránka nenalezena",
    },
  ];
  return routes;
}
