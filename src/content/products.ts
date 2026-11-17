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
};

const fromCopy: ProductPageData[] = productCopy.map((copy) => {
  const extra = extras[copy.path];
  if (!extra) throw new Error(`Chybí údaje ke stránce ${copy.path}`);
  return { ...copy, ...extra };
});

const acoustic: ProductPageData = {
  path: "/akusticke-panely",
  buildingType: "Akustické panely",
  title: "Akustické dřevěné panely | DRAXOR",
  description:
    "Akustické dřevěné panely pro interiér v Brně a na jižní Moravě. Lamelový obklad, který zklidní dozvuk a nechá vyniknout dřevu.",
  h1: "Akustické panely – Brno a jižní Morava",
  eyebrow: "Interiér",
  lead: [
    {
      t: "p",
      text: "Akustické panely jsou dřevěný obklad, který zkracuje dozvuk v místnosti. Lamely a podklad za nimi pohltí část zvuku, takže obývák, pracovna nebo společenská místnost zní klidněji. Není to ozvučení a není to izolace proti hluku z ulice. Je to úprava vnitřního povrchu.",
    },
    {
      t: "p",
      text: "Vzhled drží dřevo. Rozteč lamel a jejich hloubka rozhodují o tom, jak panel působí zblízka i přes místnost. Barvu a směr kladení sladíme se stropem a s nábytkem. Panely vyrábíme jako prvky, které se na rovnou stěnu osadí v domluveném rastru. Vypínače a krabice je potřeba znát předem.",
    },
    {
      t: "p",
      text: "Poptávka začíná rozměrem stěny a tím, co v místnosti vadí. Připravíme návrh a nabídku. Termíny upřesníme v nabídce. Osazení domluvíme, až jsou panely hotové. Pracujeme v Brně a v Jihomoravském kraji. Konzultaci domluvíme po telefonu, větší stěnu chceme vidět na místě.",
    },
  ],
  faqs: [
    {
      q: "Ztlumí panely hluk od sousedů?",
      a: "Ne. Řeší dozvuk uvnitř místnosti. Vzduchovou neprůzvučnost stěny nenahradí.",
    },
    {
      q: "Z jakého dřeva panely jsou?",
      a: "Pohledová vrstva je dřevěná. Konkrétní podobu a povrch vybereme podle místnosti a světla.",
    },
    {
      q: "Montujete panely v Brně?",
      a: "Ano, v Brně a v Jihomoravském kraji. Menší stěnu někdy stačí domluvit po telefonu, větší chceme vidět.",
    },
    {
      q: "Dá se obložit jen část stěny?",
      a: "Ano. Často stačí plocha naproti tvrdému povrchu, třeba oknu nebo holé zdi. Rozsah je v návrhu.",
    },
  ],
  closing: [
    {
      t: "h2",
      text: "Napište nám",
    },
    {
      t: "p",
      text: "Ve formuláři zvolte Akustické panely a napište přibližný rozměr stěny a obec. Ozveme se. Zavolejte na +420 732 527 871 nebo vyplňte poptávkový formulář.",
    },
  ],
  gallery: [{ image: "acoustic", alt: "Akustické dřevěné lamelové panely na stěně interiéru" }],
};

export const productPages: ProductPageData[] = [...fromCopy, acoustic];

export function productByPath(path: string): ProductPageData | undefined {
  return productPages.find((product) => product.path === path);
}
