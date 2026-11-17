/**
 * Jediné místo pro údaje, které má vlastník webu doplnit, a pro zveřejněný kontakt.
 *
 * Text ve tvaru „[DOPLNIT: …]“ nechte, dokud neznáte skutečnou hodnotu.
 * Nevymýšlejte obchodní jméno, IČO ani sídlo — na webu se mají objevit až reálné údaje.
 * Dokud hodnota obsahuje „[DOPLNIT“, do strukturovaných dat (JSON-LD) se nepropíše.
 */

export const siteConfig = {
  siteUrl: "https://draxor.cz",
  brandName: "DRAXOR",
  tagline: "Řemeslo ze dřeva a kovu",
  email: "musillukas@icloud.com",
  phoneDisplay: "+420 732 527 871",
  phoneTel: "+420732527871",
  instagramUrl: "https://www.instagram.com/draxor.cz/?__pwa=1",
  instagramProfile: "https://www.instagram.com/draxor.cz/",
  instagramHandle: "@draxor.cz",
  city: "Brno",
  country: "Česká republika",
  openingHours: "Pondělí – Pátek: 9:00 – 17:00",

  /** Obchodní jméno podnikatele. */
  businessName: "Lukáš Musil",

  /** Identifikační číslo osoby. */
  ico: "13999508",

  /** Sídlo. Vlastník chce zveřejnit jen obec, bez ulice. */
  address: "Brno",

  /**
   * ID formuláře Formspree — část adresy za https://formspree.io/f/
   * Formulář mwloonzl doručuje zprávy na musillukas@icloud.com.
   */
  formspreeId: "mwloonzl",

  /**
   * Jak dlouho se uchovávají údaje z poptávky.
   * Příklad: „24 měsíců od posledního kontaktu“.
   * Prázdný řetězec = lhůta není doplněná a zásady použijí neutrální větu.
   */
  dataRetention: "",

  /** false skryje blog i odkaz v menu. Sekce v kódu zůstává a jde znovu zapnout. */
  showBlog: false,

  /**
   * Analytika bez cookies. Prázdné = vypnuto a v zásadách se nezmíní.
   * analyticsProvider: "goatcounter" nebo "plausible"
   * analyticsSite: u GoatCounter kód webu (část před .goatcounter.com), u Plausible doména draxor.cz
   */
  analyticsProvider: "",
  analyticsSite: "",

  /** Hodnota z Google Search Console pro meta google-site-verification. Prázdné = tag se nevloží. */
  googleSiteVerification: "YNWUaKvkK9oNrjp3PTRLnifsecp-HhG2qrwIAZo1Evk",

  /** Hodnota ze Seznam Webmasteru pro meta seznam-wmt. Prázdné = tag se nevloží. */
  seznamSiteVerification: "",
} as const;

/**
 * Orientační „cena od“ v Kč, jen číslice (mezery lze). Prázdný řetězec = cena se nezobrazí.
 * Nevypisujte částku, dokud ji vlastník nedodá.
 */
export const productPrices: Record<string, string> = {
  "prod-aframe": "",
  "prod-5": "",
  "prod-1": "",
  "prod-2": "",
};

export const buildingTypes = [
  "Dřevostavba",
  "A-frame chata",
  "Srub",
  "Hliníková pergola",
  "Akustické panely",
  "Altán",
  "Terasa",
  "Jiné",
] as const;

/** Rozmezí, která si volí zákazník. Nejsou to ceníkové ceny DRAXOR. */
export const budgetRanges = [
  "Do 500 000 Kč",
  "500 000 – 1 000 000 Kč",
  "1 000 000 – 2 000 000 Kč",
  "2 000 000 – 5 000 000 Kč",
  "Nad 5 000 000 Kč",
] as const;

/** Text doby uchování, když v konfiguraci ještě není konkrétní lhůta. */
export const defaultRetentionWording = "po dobu nezbytnou k vyřízení poptávky a následné komunikace";

export const routes = {
  home: "/",
  privacy: "/ochrana-osobnich-udaju",
} as const;

export const seo = {
  home: {
    title: "DRAXOR – Dřevostavby, A-frame chaty, sruby a pergoly",
    description:
      "DRAXOR z Brna navrhuje a staví dřevostavby, A-frame chaty, sruby, hliníkové pergoly a akustické dřevěné panely. Nezávazná kalkulace na míru.",
  },
  privacy: {
    title: "Zásady ochrany osobních údajů | DRAXOR",
    description:
      "Jak DRAXOR zpracovává jméno, e-mail, telefon a zprávu z poptávkového formuláře, komu je předává, jak dlouho je uchovává a jaká máte práva.",
  },
  notFound: {
    title: "Stránka nenalezena | DRAXOR",
    description: "Tato adresa na webu DRAXOR neexistuje.",
  },
} as const;

export function isPlaceholder(value: string): boolean {
  const trimmed = value.trim();
  if (trimmed.length === 0) return true;
  return trimmed.charCodeAt(0) === 91 && trimmed.includes("DOPL") && trimmed.includes("NIT]");
}

export function normalizePath(pathname: string): string {
  const withoutQuery = pathname.split("?")[0]?.split("#")[0] ?? "/";
  if (withoutQuery.length > 1 && withoutQuery.endsWith("/")) {
    return withoutQuery.slice(0, -1);
  }
  return withoutQuery || "/";
}

/** Konkrétní lhůta, nebo neutrální věta, pokud lhůta ještě není doplněná. */
export function retentionWording(): string {
  if (isPlaceholder(siteConfig.dataRetention)) return defaultRetentionWording;
  return siteConfig.dataRetention;
}

export function priceFromLabel(productId: string): string | null {
  const raw = productPrices[productId]?.trim() ?? "";
  if (!raw || isPlaceholder(raw)) return null;
  const digits = raw.replace(/\s/g, "").replace(/kč/i, "");
  if (!/^\d+$/.test(digits)) return null;
  const formatted = new Intl.NumberFormat("cs-CZ").format(Number(digits));
  return `Cena od ${formatted} Kč`;
}

export function enabledAnalytics(): { provider: "goatcounter" | "plausible"; site: string } | null {
  const provider = String(siteConfig.analyticsProvider);
  const site = String(siteConfig.analyticsSite).trim();
  if (!site || isPlaceholder(site)) return null;
  if (provider === "goatcounter") {
    const code = site.replace(/^https?:\/\//, "").replace(/\.goatcounter\.com.*$/i, "").replace(/\/$/, "");
    if (!/^[a-z0-9-]+$/i.test(code)) return null;
    return { provider, site: code };
  }
  if (provider === "plausible") {
    if (!/^[a-z0-9.-]+$/i.test(site)) return null;
    return { provider, site };
  }
  return null;
}

/** Skript do hlavičky. GoatCounter i Plausible v tomto zapojení neukládají cookies. */
export function analyticsHeadHtml(): string {
  const analytics = enabledAnalytics();
  if (!analytics) return "";
  if (analytics.provider === "goatcounter") {
    return `<script data-goatcounter="https://${analytics.site}.goatcounter.com/count" async src="https://gc.zgo.at/count.js"></script>`;
  }
  return `<script defer data-domain="${analytics.site}" src="https://plausible.io/js/script.js"></script>`;
}

export function googleVerificationToken(): string | null {
  const value = String(siteConfig.googleSiteVerification).trim();
  if (!value || isPlaceholder(value) || /[<>"']/.test(value)) return null;
  return value;
}

export function formspreeEndpoint(): string | null {
  const id = siteConfig.formspreeId.trim();
  if (isPlaceholder(id)) return null;
  if (!/^[a-zA-Z0-9]+$/.test(id)) return null;
  return `https://formspree.io/f/${id}`;
}

export function pageKind(pathname: string): "home" | "privacy" | "notFound" {
  const path = normalizePath(pathname);
  if (path === routes.home) return "home";
  if (path === routes.privacy) return "privacy";
  return "notFound";
}

export function seznamVerificationToken(): string | null {
  const value = String(siteConfig.seznamSiteVerification).trim();
  if (!value || isPlaceholder(value) || /[<>"']/.test(value)) return null;
  return value;
}

/** HomeAndConstructionBusiness bez ulice. Jméno značky je DRAXOR, ne sídlo. */
export function buildLocalBusinessJsonLd(): Record<string, unknown> {
  const data: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "HomeAndConstructionBusiness",
    name: siteConfig.brandName,
    url: `${siteConfig.siteUrl}/`,
    logo: `${siteConfig.siteUrl}/apple-touch-icon.png`,
    image: `${siteConfig.siteUrl}/og-image.jpg`,
    telephone: siteConfig.phoneTel,
    email: siteConfig.email,
    description: seo.home.description,
    areaServed: [
      { "@type": "City", name: "Brno" },
      { "@type": "AdministrativeArea", name: "Jihomoravský kraj" },
    ],
    sameAs: [siteConfig.instagramProfile],
  };

  if (!isPlaceholder(siteConfig.businessName)) {
    data.legalName = siteConfig.businessName;
  }

  if (!isPlaceholder(siteConfig.ico)) {
    data.identifier = {
      "@type": "PropertyValue",
      name: "IČO",
      value: siteConfig.ico,
    };
  }

  return data;
}
