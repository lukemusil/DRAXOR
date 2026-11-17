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
   * Dokud tu je zástupný text, na webu se neukáže — zásady použijí neutrální větu.
   */
  dataRetention: "[DOPLNIT: doba uchování]",
} as const;

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
  return trimmed.length === 0 || trimmed.includes("[DOPLNIT");
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

/** LocalBusiness JSON-LD. Pole bez skutečné hodnoty se vynechají. */
export function buildLocalBusinessJsonLd(): Record<string, unknown> {
  const data: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: isPlaceholder(siteConfig.businessName) ? siteConfig.brandName : siteConfig.businessName,
    url: `${siteConfig.siteUrl}/`,
    image: `${siteConfig.siteUrl}/og-image.jpg`,
    telephone: siteConfig.phoneTel,
    email: siteConfig.email,
    description: seo.home.description,
    areaServed: {
      "@type": "City",
      name: siteConfig.city,
    },
    openingHours: "Mo-Fr 09:00-17:00",
    sameAs: [siteConfig.instagramProfile],
  };

  if (!isPlaceholder(siteConfig.businessName)) {
    data.legalName = siteConfig.businessName;
  }

  if (!isPlaceholder(siteConfig.ico)) {
    data.taxID = siteConfig.ico;
  }

  if (!isPlaceholder(siteConfig.address)) {
    const postal: Record<string, string> = {
      "@type": "PostalAddress",
      addressCountry: "CZ",
    };
    // Sídlo „Brno“ je jen obec, ne ulice. Do streetAddress se proto nedává.
    if (siteConfig.address.trim().toLowerCase() === siteConfig.city.trim().toLowerCase()) {
      postal.addressLocality = siteConfig.address;
    } else {
      postal.streetAddress = siteConfig.address;
      postal.addressLocality = siteConfig.city;
    }
    data.address = postal;
  }

  return data;
}
