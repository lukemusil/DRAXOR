import type { images } from "../image-manifest";
import { productCopy, type CopyBlock } from "./product-bodies";

export type ImageKey = keyof typeof images;
export type Block = CopyBlock;
export type Faq = { q: string; a: string };

export type ProductPageData = {
  path: string;
  buildingType: string;
  title: string;
  description: string;
  h1: string;
  eyebrow: string;
  lead: Block[];
  faqs: Faq[];
  closing: Block[];
  gallery: { image: ImageKey; alt: string }[];
};

const extras: Record<string, Pick<ProductPageData, "buildingType" | "eyebrow" | "gallery">> = {
  "/a-frame-chata": {
    buildingType: "A-frame chata",
    eyebrow: "Chata se štítem",
    gallery: [
      { image: "aframe", alt: "A-frame chata Alpin se strmým štítem a prosklením" },
    ],
  },
  "/srub": {
    buildingType: "Srub",
    eyebrow: "Srub Harmonie",
    gallery: [{ image: "srub", alt: "Srub Harmonie ze severské kulatiny s prosklením" }],
  },
  "/drevostavby": {
    buildingType: "Dřevostavba",
    eyebrow: "Dřevostavby",
    gallery: [
      { image: "timberHouse", alt: "Moderní dřevostavba s falcovanou střechou a modřínovou fasádou" },
      { image: "roof", alt: "Tesařský krov při stavbě dřevostavby" },
    ],
  },
  "/bioklimaticke-pergoly": {
    buildingType: "Hliníková pergola",
    eyebrow: "Pergoly",
    gallery: [{ image: "pergola", alt: "Hliníková bioklimatická pergola s natáčecími lamelami" }],
  },
  "/altany": {
    buildingType: "Altán",
    eyebrow: "Altány",
    gallery: [],
  },
  "/terasy": {
    buildingType: "Terasa",
    eyebrow: "Terasy",
    gallery: [],
  },
  "/akusticke-panely": {
    buildingType: "Akustické panely",
    eyebrow: "Interiér",
    gallery: [{ image: "acoustic", alt: "Dřevěné akustické lamelové panely na akustickém filcu" }],
  },
};

const fromCopy: ProductPageData[] = productCopy.map((copy) => {
  const extra = extras[copy.path];
  if (!extra) throw new Error(`Chybí údaje ke stránce ${copy.path}`);
  return { ...copy, ...extra };
});

export const productPages: ProductPageData[] = fromCopy;

export function productByPath(path: string): ProductPageData | undefined {
  return productPages.find((product) => product.path === path);
}
