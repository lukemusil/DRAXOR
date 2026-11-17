/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion, useScroll, useTransform, AnimatePresence } from "motion/react";
import {
  Menu,
  X,
  ArrowRight,
  Instagram,
  Mail,
  MapPin,
  Phone,
  ChevronRight,
  Hammer,
  TreeDeciduous,
  Ruler,
  Clock,
  CheckCircle2,
  CircleAlert,
  ShieldCheck,
  Download,
  ExternalLink,
} from "lucide-react";
import React, { useState, useEffect } from "react";
import { ConfigValue } from "./components/ConfigValue";
import { ResponsiveImage, type ResponsiveAsset } from "./components/ResponsiveImage";
import { images } from "./image-manifest";
import { PrivacyPolicy } from "./pages/PrivacyPolicy";
import {
  budgetRanges,
  buildingTypes,
  formspreeEndpoint,
  normalizePath,
  pageKind,
  priceFromLabel,
  routes,
  siteConfig,
} from "./site.config";

function sectionHref(onHome: boolean, id: string) {
  return onHome ? `#${id}` : `/#${id}`;
}

// --- Types ---
interface Product {
  id: string;
  title: string;
  description: string;
  category: string;
  image: ResponsiveAsset;
  tag?: string;
  buildingType: (typeof buildingTypes)[number];
}

interface Material {
  title: string;
  desc: string;
  img: ResponsiveAsset;
}

interface BlogPost {
  id: string;
  title: string;
  date: string;
  image: ResponsiveAsset;
  excerpt: string;
}

interface GalleryItem {
  image: ResponsiveAsset;
  title: string;
  category: string;
}

// --- Logo Component ---
const DraxorLogo = ({ className = "h-9 w-auto" }: { className?: string }) => (
  <svg
    viewBox="0 18 202 112"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
    className={`${className} flex-shrink-0 drop-shadow-[0_2px_10px_rgba(216,168,118,0.25)]`}
  >
    <polygon points="12,118 72,30 190,118 172,118 72,52 30,118" fill="#d8a876" />
  </svg>
);

// --- Layout Components ---
const Navbar = ({ onHome }: { onHome: boolean }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Produkty", id: "produkty" },
    { name: "Spolupráce", id: "spoluprace" },
    { name: "Materiály", id: "materialy" },
    { name: "Galerie", id: "galerie" },
    ...(siteConfig.showBlog ? [{ name: "Blog", id: "blog" }] : []),
    { name: "Poptávka", id: "poptavka" },
  ];

  return (
    <nav
      id="navbar"
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-black/95 backdrop-blur-md py-3 shadow-lg border-b border-[#221c16]"
          : "bg-gradient-to-b from-black/90 to-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center space-x-3.5">
          <a
            href={sectionHref(onHome, "loga")}
            title="Loga ke stažení"
            className="flex items-center space-x-3.5 group text-left"
          >
            <DraxorLogo className="h-9 w-auto group-hover:scale-105 transition-transform" />
            <span className="text-3xl font-black tracking-tighter text-[#f5f2ed] font-headline group-hover:text-[#d8a876] transition-colors">
              DRAXOR
            </span>
          </a>
        </div>

        {/* Desktop Nav */}
        <div className="hidden lg:flex space-x-4 xl:space-x-5 items-center">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={sectionHref(onHome, item.id)}
              className="text-[11px] uppercase tracking-widest font-bold text-[#b8aea2] hover:text-[#d8a876] transition-colors"
            >
              {item.name}
            </a>
          ))}

          <a
            href={siteConfig.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            title="Sledujte nás na Instagramu @draxor.cz"
            className="flex items-center space-x-1.5 px-3 py-1.5 rounded-full bg-[#121212] border border-[#221c16] hover:border-[#c59b6d]/50 text-[11px] uppercase tracking-wider font-bold text-[#b8aea2] hover:text-[#d8a876] transition-all"
          >
            <Instagram size={13} className="text-[#d8a876]" />
            <span>@draxor.cz</span>
          </a>

          <a
            href={sectionHref(onHome, "poptavka")}
            className="bg-[#c59b6d] text-[#120e0b] hover:bg-[#d8a876] px-6 py-2.5 rounded-full text-xs font-bold transition-all shadow-[#c59b6d]/15 shadow-lg uppercase tracking-wider flex items-center space-x-1.5"
          >
            <span>Poptat</span>
            <ChevronRight size={14} />
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          id="mobile-menu-toggle"
          aria-label="Menu"
          className="lg:hidden text-[#f5f2ed] p-2 focus:outline-none"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-black/98 backdrop-blur-xl border-t border-[#221c16] flex flex-col px-6 py-8 space-y-5"
          >
            {navItems.map((item) => (
              <a
                key={item.id}
                href={sectionHref(onHome, item.id)}
                onClick={() => setMobileMenuOpen(false)}
                className="text-lg font-bold text-[#d6cec3] hover:text-[#d8a876] uppercase tracking-wider font-headline transition-colors"
              >
                {item.name}
              </a>
            ))}

            <div className="pt-2">
              <a
                href={sectionHref(onHome, "poptavka")}
                onClick={() => setMobileMenuOpen(false)}
                className="block text-center bg-[#c59b6d] text-[#120e0b] py-3 rounded-xl font-bold uppercase tracking-wider text-xs"
              >
                Poptat nabídku
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 600], [0, 180]);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black text-[#f5f2ed] pt-20 pb-16">
      <motion.div style={{ y: y1 }} className="absolute inset-0 z-0">
        <ResponsiveImage
          image={images.hero}
          alt="Designová A-frame chata v přírodě"
          sizes="100vw"
          priority
          className="w-full h-full object-cover opacity-50"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/85 via-black/45 to-black" />
      </motion.div>

      <div className="container mx-auto px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <div className="inline-flex items-center space-x-2 bg-[#c59b6d]/15 backdrop-blur-md border border-[#c59b6d]/30 px-4 py-1.5 rounded-full mb-6">
            <ShieldCheck size={14} className="text-[#d8a876]" />
            <span className="text-xs uppercase tracking-[0.25em] font-semibold text-[#ecd7be]">
              {siteConfig.tagline}
            </span>
          </div>

          <h1 className="text-5xl sm:text-6xl md:text-8xl font-extrabold tracking-tighter mb-8 leading-[0.95] text-[#fbf8f5]">
            Tvoříme vaši vizi ve <span className="text-[#d8a876]">dřevě a kovu</span>
          </h1>

          <p className="text-lg md:text-xl text-[#d6cec3] max-w-2xl mx-auto mb-10 font-light leading-relaxed">
            Od nadčasových A-frame chat a srubů po moderní dřevostavby a hliníkové konstrukce. Přinášíme architektonické sny k životu s důrazem na kvalitu a detail.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="#produkty"
              className="bg-[#f5eee6] text-[#15110d] px-8 sm:px-10 py-4 sm:py-5 rounded-full text-sm font-bold flex items-center space-x-2 group hover:bg-[#e8dcce] transition-all shadow-xl shadow-black/80"
            >
              <span>Prozkoumat produkty</span>
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform text-[#8f5d2b]" />
            </a>
            <a
              href="#poptavka"
              className="bg-[#121212]/80 backdrop-blur-md text-[#f5f2ed] border border-[#c59b6d]/35 hover:border-[#c59b6d]/60 px-8 sm:px-10 py-4 sm:py-5 rounded-full text-sm font-bold hover:bg-[#c59b6d]/15 transition-all"
            >
              Poptat nabídku
            </a>
          </div>
        </motion.div>
      </div>

      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 2.2, ease: "easeInOut" }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center pointer-events-none"
      >
        <span className="text-[10px] uppercase tracking-widest text-[#b8aea2]/60 mb-2">Dolů</span>
        <div className="w-px h-10 bg-gradient-to-b from-[#c59b6d]/60 to-transparent" />
      </motion.div>
    </section>
  );
};

const Features = () => {
  const features = [
    {
      icon: <Hammer size={30} />,
      title: "Precizní zpracování",
      desc: "Každý detail je pro nás zásadní. Používáme moderní technologie CNC i tradiční truhlářské postupy.",
    },
    {
      icon: <TreeDeciduous size={30} />,
      title: "Přírodní materiály",
      desc: "Pracujeme výhradně s certifikovaným severským dřevem z udržitelných a obnovitelných zdrojů.",
    },
    {
      icon: <Ruler size={30} />,
      title: "Návrhy na míru",
      desc: "Vytvoříme individuální 3D architektonický projekt přesně podle vašich představ a pozemku.",
    },
    {
      icon: <Clock size={30} />,
      title: "Rychlá realizace",
      desc: "Díky efektivní prefabrikaci a sehranému týmu dodáváme stavby vždy v přesně dohodnutých termínech.",
    },
  ];

  return (
    <section className="py-20 bg-black text-[#f5f2ed] border-y border-[#1f1914]">
      <div className="container mx-auto px-6">
        <h2 className="sr-only">Naše přednosti</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
          {features.map((f, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="flex flex-col space-y-3 p-6 rounded-2xl bg-[#0c0c0c] border border-[#221c16] hover:border-[#c59b6d]/40 transition-colors shadow-sm"
            >
              <div className="text-[#d8a876] mb-1">{f.icon}</div>
              <h3 className="text-lg font-bold font-headline tracking-tight text-[#fbf8f5]">{f.title}</h3>
              <p className="text-[#b8aea2] text-sm leading-relaxed font-light">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const FeaturedProducts = ({ onInquire }: { onInquire: (buildingType: string) => void }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  const products: Product[] = [
    {
      id: "prod-aframe",
      title: "Designová A-frame chata Alpin",
      description: "Ikonická architektura na kompaktní ploše ~50 m². Štítové prosklení, obytné podkroví, masivní dřevěné trámy a terasa pro moderní glamping či rekreaci.",
      category: "Stavby",
      image: images.aframe,
      tag: "50 m²",
      buildingType: "A-frame chata",
    },
    {
      id: "prod-5",
      title: "Moderní srubový dům Harmonie",
      description: "Kompaktní luxusní srub o výměře ~50 m² z poctivé severské kulatiny s panoramatickým prosklením, krbem a krytou vyhlídkovou terasou.",
      category: "Stavby",
      image: images.srub,
      tag: "50 m²",
      buildingType: "Srub",
    },
    {
      id: "prod-1",
      title: "Moderní dřevostavba na míru",
      description: "Zakázková nízkoenergetická dřevostavba s precizní falcovanou střechou, modřínovou fasádou a velkoformátovým prosklením.",
      category: "Stavby",
      image: images.timberHouse,
      buildingType: "Dřevostavba",
    },
    {
      id: "prod-2",
      title: "Dubové akustické panely",
      description: "Zlepšete akustiku a estetiku svého interiéru s prémiovými lamelovými panely na akustickém filcu.",
      category: "Interiér",
      image: images.acoustic,
      tag: "Design",
      buildingType: "Akustické panely",
    },
  ];

  const filtered = selectedCategory === "all" ? products : products.filter((p) => p.category === selectedCategory);

  return (
    <section className="py-24 bg-black text-[#f5f2ed]" id="produkty">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-6">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl"
          >
            <span className="text-xs uppercase tracking-[0.2em] text-[#d8a876] font-bold block mb-2">
              Katalog staveb a prvků
            </span>
            <h2 className="text-4xl md:text-6xl font-bold tracking-tighter mb-4 font-headline uppercase text-[#fbf8f5]">
              Doporučené produkty
            </h2>
            <p className="text-[#b8aea2] text-lg font-light">
              Objevte výběr naší nejlepší práce, která spojuje poctivé přírodní materiály s výjimečným současným designem.
            </p>
          </motion.div>

          <div className="flex items-center space-x-3">
            <button
              onClick={() => setSelectedCategory("all")}
              aria-pressed={selectedCategory === "all"}
              className={`px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all ${
                selectedCategory === "all"
                  ? "bg-[#c59b6d] text-[#120e0b]"
                  : "bg-[#121212] text-[#b8aea2] hover:text-[#f5f2ed] border border-[#261d14]"
              }`}
            >
              Vše
            </button>
            <button
              onClick={() => setSelectedCategory("Stavby")}
              aria-pressed={selectedCategory === "Stavby"}
              className={`px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all ${
                selectedCategory === "Stavby"
                  ? "bg-[#c59b6d] text-[#120e0b]"
                  : "bg-[#121212] text-[#b8aea2] hover:text-[#f5f2ed] border border-[#261d14]"
              }`}
            >
              Stavby
            </button>
            <button
              onClick={() => setSelectedCategory("Interiér")}
              aria-pressed={selectedCategory === "Interiér"}
              className={`px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all ${
                selectedCategory === "Interiér"
                  ? "bg-[#c59b6d] text-[#120e0b]"
                  : "bg-[#121212] text-[#b8aea2] hover:text-[#f5f2ed] border border-[#261d14]"
              }`}
            >
              Interiér
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {filtered.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group flex flex-col"
            >
              <div className="relative aspect-[4/5] overflow-hidden rounded-3xl mb-6 bg-[#0c0c0c] border border-[#221c16] group-hover:border-[#c59b6d]/40 transition-colors shadow-2xl">
                <ResponsiveImage
                  image={product.image}
                  alt={product.title}
                  sizes="(min-width: 1024px) 25vw, (min-width: 768px) 50vw, 100vw"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute top-5 left-5 flex space-x-2">
                  <span className="bg-black/85 backdrop-blur-md px-3.5 py-1.5 rounded-full text-[10px] uppercase font-bold tracking-widest border border-[#c59b6d]/30 text-[#ecd7be]">
                    {product.category}
                  </span>
                  {product.tag && (
                    <span className="bg-[#c59b6d] text-[#120e0b] px-3 py-1.5 rounded-full text-[10px] uppercase font-bold tracking-widest">
                      {product.tag}
                    </span>
                  )}
                </div>
              </div>
              <h3 className="text-xl font-bold mb-2 font-headline text-[#fbf8f5] group-hover:text-[#d8a876] transition-colors uppercase tracking-tight">
                {product.title}
              </h3>
              {priceFromLabel(product.id) && (
                <p className="text-sm font-semibold text-[#d8a876] mb-2">{priceFromLabel(product.id)}</p>
              )}
              <p className="text-[#b8aea2] text-sm leading-relaxed font-light mb-4 flex-grow">
                {product.description}
              </p>
              <a
                href="#poptavka"
                onClick={() => onInquire(product.buildingType)}
                className="inline-flex items-center space-x-2 text-xs uppercase font-bold tracking-widest text-[#d8a876] hover:text-[#f5eee6] transition-colors group-hover:translate-x-1 duration-300"
              >
                <span>Poptat tento model</span>
                <ArrowRight size={14} />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const ProcessSection = () => {
  const steps = [
    {
      title: "Konzultace",
      text: "Probereme pozemek, účel stavby a vaše představy. Stačí nezávazný hovor nebo schůzka.",
    },
    {
      title: "Návrh a nabídka",
      text: "Připravíme návrh řešení a nezávaznou nabídku. Termíny upřesníme v nabídce.",
    },
    {
      title: "Výroba",
      text: "Po odsouhlasení vyrábíme konstrukci a prvky s důrazem na přesnost a zvolený materiál.",
    },
    {
      title: "Montáž",
      text: "Stavbu složíme na místě a navážeme na připravené základy podle domluveného rozsahu.",
    },
    {
      title: "Předání",
      text: "Hotové dílo spolu projdeme, předáme podklady a domluvíme, co bude dál.",
    },
  ];

  return (
    <section className="py-24 bg-black text-[#f5f2ed] border-t border-[#1f1914]" id="spoluprace">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mb-14">
          <span className="text-xs uppercase tracking-[0.2em] text-[#d8a876] font-bold block mb-2">
            Od první schůzky po klíče
          </span>
          <h2 className="text-4xl md:text-6xl font-bold tracking-tighter mb-4 font-headline uppercase text-[#fbf8f5]">
            Jak spolupráce probíhá
          </h2>
          <p className="text-[#b8aea2] text-lg font-light">
            Každá zakázka je jiná. Postup je pořád stejný: nejdřív si rozumíme, pak teprve stavíme.
          </p>
        </div>
        <ol className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {steps.map((step, index) => (
            <li
              key={step.title}
              className="flex flex-col p-6 rounded-2xl bg-[#0c0c0c] border border-[#221c16] hover:border-[#c59b6d]/40 transition-colors"
            >
              <span className="w-10 h-10 mb-4 rounded-full bg-[#c59b6d] text-[#120e0b] text-sm font-bold flex items-center justify-center">
                {index + 1}
              </span>
              <h3 className="text-lg font-bold font-headline tracking-tight text-[#fbf8f5] mb-2">{step.title}</h3>
              <p className="text-[#d6cec3] text-sm leading-relaxed font-light">{step.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
};

const MaterialsSection = () => {
  const materials: Material[] = [
    {
      title: "Severské dřevo & Krovy",
      desc: "Využíváme borovici, modřín a severský smrk z certifikovaných udržitelných zdrojů. Ideální volba pro sruby, roubenky a nosné tesařské konstrukce.",
      img: images.wood,
    },
    {
      title: "Hliník & Kovové střechy",
      desc: "Moderní bioklimatické pergoly, falcované plechové krytiny a nosné ocelové prvky. Maximální odolnost vůči počasí s nulovou údržbou.",
      img: images.pergola,
    },
    {
      title: "Kartáčované povrchy",
      desc: "Speciální úprava fasádních palubek a trámů pro zvýraznění přirozené 3D textury a hloubky kresby dřeva s přírodními oleji.",
      img: images.brushed,
    },
  ];

  return (
    <section className="py-24 bg-black text-[#f5f2ed] border-t border-[#1f1914]" id="materialy">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20 max-w-3xl mx-auto">
          <span className="text-xs uppercase tracking-[0.2em] text-[#d8a876] font-bold block mb-2">
            Základ každé stavby
          </span>
          <h2 className="text-4xl md:text-6xl font-bold tracking-tighter mb-4 font-headline uppercase text-[#fbf8f5]">
            Prémiové materiály
          </h2>
          <p className="text-[#b8aea2] text-lg font-light leading-relaxed">
            Kvalita bez kompromisů. Každý kus suroviny pečlivě vybíráme pro jeho trvanlivost, konstrukční pevnost a estetickou hodnotu.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {materials.map((mat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="group bg-[#0c0c0c] p-6 rounded-3xl border border-[#221c16] hover:border-[#c59b6d]/40 transition-all shadow-md"
            >
              <div className="aspect-[16/10] overflow-hidden rounded-2xl mb-6 border border-[#261d14] shadow-2xl bg-black">
                <ResponsiveImage
                  image={mat.img}
                  alt={mat.title}
                  sizes="(min-width: 768px) 33vw, 100vw"
                  className="w-full h-full object-cover grayscale-[0.2] transition-all duration-700 group-hover:grayscale-0 group-hover:scale-105"
                />
              </div>
              <h3 className="text-2xl font-bold mb-3 font-headline uppercase tracking-tight text-[#fbf8f5] group-hover:text-[#d8a876] transition-colors">
                {mat.title}
              </h3>
              <p className="text-[#b8aea2] text-sm leading-relaxed font-light">{mat.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const GallerySection = () => {
  const [activeImage, setActiveImage] = useState<GalleryItem | null>(null);

  const gallery: GalleryItem[] = [
    {
      image: images.aframe,
      title: "Designová A-frame chata Alpin (50 m²)",
      category: "A-Frame & Chaty",
    },
    {
      image: images.srub,
      title: "Moderní srubový dům Harmonie (50 m²)",
      category: "Sruby",
    },
    {
      image: images.timberHouse,
      title: "Moderní dřevostavba s falcovanou střechou",
      category: "Dřevostavby",
    },
    {
      image: images.pergola,
      title: "Bioklimatická pergola a stínění",
      category: "Pergoly & Kov",
    },
    {
      image: images.roof,
      title: "Stavba dřevostavby a tesařský krov",
      category: "Krovy & Střechy",
    },
    {
      image: images.acoustic,
      title: "Dubové akustické lamelové panely",
      category: "Interiéry",
    },
  ];

  return (
    <section className="py-24 bg-black text-[#f5f2ed] border-t border-[#1f1914]" id="galerie">
      <div className="container mx-auto px-6 text-center mb-16 max-w-3xl">
        <span className="text-xs uppercase tracking-[0.2em] text-[#d8a876] font-bold block mb-2">
          Portfolio realizací
        </span>
        <h2 className="text-4xl md:text-6xl font-bold tracking-tighter mb-4 font-headline uppercase text-[#fbf8f5]">
          Naše řemeslo
        </h2>
        <p className="text-[#b8aea2] text-lg font-light">
          Nahlédnutí do kvality, detailů a vášně, kterou vkládáme do každého jednotlivého projektu.
        </p>
      </div>

      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {gallery.map((img, i) => (
            <motion.button
              type="button"
              key={i}
              whileHover={{ y: -4 }}
              onClick={() => setActiveImage(img)}
              className="relative aspect-[4/3] overflow-hidden rounded-2xl group cursor-pointer border border-[#221c16] hover:border-[#c59b6d]/50 bg-[#0c0c0c] transition-colors text-left w-full"
            >
              <ResponsiveImage
                image={img.image}
                alt={img.title}
                sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="gallery-caption absolute inset-0 bg-gradient-to-t from-black/95 via-black/40 to-transparent transition-opacity flex flex-col justify-end p-6">
                <span className="text-[10px] uppercase tracking-widest text-[#d8a876] mb-1 font-semibold">
                  {img.category}
                </span>
                <span className="font-bold text-base text-[#f5f2ed]">{img.title}</span>
              </div>
            </motion.button>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {activeImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/96 backdrop-blur-md flex items-center justify-center p-4 sm:p-8"
            onClick={() => setActiveImage(null)}
          >
            <div
              className="relative max-w-4xl w-full max-h-[90vh] flex flex-col items-center"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setActiveImage(null)}
                className="absolute -top-12 right-0 text-[#b8aea2] hover:text-[#f5f2ed] p-2"
                aria-label="Zavřít"
              >
                <X size={28} />
              </button>
              <ResponsiveImage
                image={activeImage.image}
                alt={activeImage.title}
                sizes="90vw"
                pictureClassName="block max-w-full"
                className="max-h-[75vh] w-auto object-contain rounded-2xl border border-[#261d14]"
              />
              <div className="mt-4 text-center">
                <span className="text-xs uppercase tracking-widest text-[#d8a876] font-semibold">
                  {activeImage.category}
                </span>
                <h3 className="text-xl font-bold text-[#f5f2ed] mt-1">{activeImage.title}</h3>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

const InstagramFeed = () => {
  return (
    <section className="py-20 bg-black text-[#f5f2ed] border-t border-[#1f1914]" id="instagram">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#120f0c] via-[#090909] to-[#16120e] border border-[#261f18] p-8 md:p-14 shadow-2xl flex flex-col md:flex-row justify-between items-center gap-8"
        >
          <div className="absolute -right-16 -top-16 w-72 h-72 bg-[#c59b6d]/10 rounded-full blur-3xl pointer-events-none" />
          <div className="relative z-10 max-w-2xl text-center md:text-left">
            <div className="inline-flex items-center space-x-2 bg-[#c59b6d]/15 border border-[#c59b6d]/30 px-3.5 py-1 rounded-full text-xs font-semibold uppercase tracking-wider mb-4 text-[#ecd7be]">
              <Instagram size={14} className="text-[#d8a876]" />
              <span>@draxor.cz</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tighter mb-4 font-headline uppercase text-[#fbf8f5]">
              Sledujte nás na Instagramu
            </h2>
            <p className="text-[#b8aea2] text-base md:text-lg font-light leading-relaxed">
              Zákulisí našich staveb, videa z výroby, čerstvé realizace z terénu a inspirace ze světa poctivého dřeva a kovu.
            </p>
          </div>

          <div className="relative z-10 flex flex-col sm:flex-row items-center gap-4 shrink-0">
            <a
              href={siteConfig.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-[#d8a876] to-[#c59b6d] hover:from-[#e0b483] hover:to-[#d0a475] text-[#120e0b] px-8 py-4 rounded-full text-sm font-bold uppercase tracking-wider flex items-center space-x-2.5 transition-all shadow-xl shadow-[#c59b6d]/20 hover:scale-105"
            >
              <Instagram size={18} />
              <span>Sledovat @draxor.cz</span>
              <ExternalLink size={16} />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const BlogSection = () => {
  const posts: BlogPost[] = [
    {
      id: "blog-1",
      title: "Kouzlo kartáčovaného dřeva: Proč zvolit tento obklad?",
      date: "10. května 2024",
      image: images.brushed,
      excerpt:
        "Zvýrazněte duši dřeva ve svém interiéru či exteriéru. Kartáčované palubky nabízejí nezaměnitelnou 3D strukturu a vysokou odolnost.",
    },
    {
      id: "blog-2",
      title: "Vylepšete svůj prostor s akustickými dřevěnými obklady",
      date: "1. března 2024",
      image: images.acoustic,
      excerpt:
        "Správná akustika je klíčem k domácí pohodě i soustředění v kanceláři. Zjistěte, jak lamelové dřevěné panely dokáží transformovat váš prostor.",
    },
  ];

  return (
    <section className="py-24 bg-black text-[#f5f2ed] border-t border-[#1f1914]" id="blog">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <span className="text-xs uppercase tracking-[0.2em] text-[#d8a876] font-bold block mb-2">
            Inspirace & Rady
          </span>
          <h2 className="text-4xl md:text-6xl font-bold tracking-tighter mb-4 font-headline uppercase text-[#fbf8f5]">
            Z našeho blogu
          </h2>
          <p className="text-[#b8aea2] text-lg font-light">
            Postřehy, praktické příběhy z realizací a tipy od našeho týmu odborníků na dřevostavby.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl mx-auto">
          {posts.map((post) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="group bg-[#0c0c0c] p-6 rounded-3xl border border-[#221c16] hover:border-[#c59b6d]/40 transition-all flex flex-col shadow-md"
            >
              <div className="aspect-video overflow-hidden rounded-2xl mb-6 relative bg-black">
                <ResponsiveImage
                  image={post.image}
                  alt={post.title}
                  sizes="(min-width: 768px) 45vw, 100vw"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <span className="text-[10px] uppercase tracking-widest text-[#d8a876] mb-2 block font-semibold">
                {post.date}
              </span>
              <h3 className="text-2xl font-bold mb-3 text-[#fbf8f5] group-hover:text-[#d8a876] transition-colors font-headline uppercase tracking-tight">
                {post.title}
              </h3>
              <p className="text-[#b8aea2] text-sm leading-relaxed mb-6 line-clamp-2 font-light flex-grow">
                {post.excerpt}
              </p>
              <a
                href="#poptavka"
                className="inline-flex items-center space-x-2 text-xs font-bold uppercase tracking-widest text-[#f5f2ed] border-b border-[#c59b6d]/40 pb-1 hover:border-[#c59b6d] hover:text-[#d8a876] transition-all self-start"
              >
                <span>Číst více / Konzultovat</span>
                <ArrowRight size={14} />
              </a>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

const fieldClass =
  "w-full bg-[#121212] border border-[#221c16] rounded-xl p-4 text-sm text-[#f5f2ed] placeholder-[#8f8274] focus:outline-none focus:border-[#c59b6d] focus:bg-[#181818] transition-colors";

const QuoteSection = ({ preferredType }: { preferredType: string }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    buildingType: preferredType,
    location: "",
    budget: "",
  });
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error" | "mailto">("idle");

  useEffect(() => {
    if (!preferredType) return;
    setFormData((current) => ({ ...current, buildingType: preferredType }));
  }, [preferredType]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email) return;

    const endpoint = formspreeEndpoint();
    const subject = `Poptávka DRAXOR – ${formData.name}`;
    const body = [
      `Jméno: ${formData.name}`,
      `E-mail: ${formData.email}`,
      `Telefon: ${formData.phone || "Neuvedeno"}`,
      `Typ stavby: ${formData.buildingType || "Neuvedeno"}`,
      `Lokalita stavby: ${formData.location || "Neuvedeno"}`,
      `Orientační rozpočet: ${formData.budget || "Neuvedeno"}`,
      "",
      "Zpráva k projektu:",
      formData.message,
    ].join("\n");

    if (!endpoint) {
      window.location.href = `mailto:${siteConfig.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
      setStatus("mailto");
      return;
    }

    setStatus("submitting");
    try {
      const response = await fetch(endpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          message: formData.message,
          typ_stavby: formData.buildingType,
          lokalita_stavby: formData.location,
          orientacni_rozpocet: formData.budget,
          _subject: subject,
        }),
      });

      if (!response.ok) {
        setStatus("error");
        return;
      }

      setStatus("success");
      setFormData({
        name: "",
        email: "",
        phone: "",
        message: "",
        buildingType: "",
        location: "",
        budget: "",
      });
    } catch {
      setStatus("error");
    }
  };

  return (
    <section className="py-24 bg-black text-[#f5f2ed] border-t border-[#1f1914]" id="poptavka">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto bg-[#0c0c0c] text-[#f5f2ed] rounded-[2.5rem] p-8 md:p-16 relative overflow-hidden shadow-[0_40px_100px_-20px_rgba(0,0,0,0.9)] border border-[#221c16]">
          <div className="absolute top-0 right-0 w-80 h-80 bg-[#c59b6d]/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />

          <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center space-x-2 bg-[#c59b6d]/15 border border-[#c59b6d]/30 px-3.5 py-1 rounded-full text-xs font-semibold uppercase tracking-wider mb-4 text-[#ecd7be]">
                <ShieldCheck size={13} className="text-[#d8a876]" />
                <span>Nezávazná kalkulace na míru</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-extrabold tracking-tighter mb-6 font-headline uppercase leading-none text-[#fbf8f5]">
                Poptat nabídku
              </h2>
              <p className="text-[#b8aea2] text-base md:text-lg mb-8 font-light leading-relaxed">
                Máte vizi? My máme špičkové nástroje a letité zkušenosti. Napište nám o svém projektu a my se vám obratem ozveme s kalkulací a možnostmi řešení.
              </p>

              <div className="space-y-3">
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="flex items-center space-x-4 p-4 rounded-xl border border-[#221c16] hover:border-[#c59b6d]/40 bg-[#121212] hover:bg-[#181818] transition-colors group cursor-pointer"
                >
                  <div className="w-10 h-10 rounded-lg bg-[#1c1611] flex items-center justify-center text-[#d8a876] group-hover:text-white transition-colors">
                    <Mail size={20} />
                  </div>
                  <div>
                    <span className="text-[10px] uppercase tracking-widest text-[#8f8274] block font-semibold">
                      Napište nám
                    </span>
                    <span className="text-sm font-medium text-[#f5f2ed]">{siteConfig.email}</span>
                  </div>
                </a>
                <a
                  href={`tel:${siteConfig.phoneTel}`}
                  className="flex items-center space-x-4 p-4 rounded-xl border border-[#221c16] hover:border-[#c59b6d]/40 bg-[#121212] hover:bg-[#181818] transition-colors group cursor-pointer"
                >
                  <div className="w-10 h-10 rounded-lg bg-[#1c1611] flex items-center justify-center text-[#d8a876] group-hover:text-white transition-colors">
                    <Phone size={20} />
                  </div>
                  <div>
                    <span className="text-[10px] uppercase tracking-widest text-[#8f8274] block font-semibold">
                      Zavolejte nám
                    </span>
                    <span className="text-sm font-medium text-[#f5f2ed]">{siteConfig.phoneDisplay}</span>
                  </div>
                </a>
                <a
                  href={siteConfig.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-4 p-4 rounded-xl border border-[#221c16] hover:border-[#c59b6d]/40 bg-[#121212] hover:bg-[#181818] transition-colors group cursor-pointer"
                >
                  <div className="w-10 h-10 rounded-lg bg-[#1c1611] flex items-center justify-center text-[#d8a876] group-hover:text-white transition-colors">
                    <Instagram size={20} />
                  </div>
                  <div>
                    <span className="text-[10px] uppercase tracking-widest text-[#8f8274] block font-semibold">
                      Instagram
                    </span>
                    <span className="text-sm font-medium text-[#f5f2ed]">{siteConfig.instagramHandle}</span>
                  </div>
                </a>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4" noValidate={false}>
              {status === "success" ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  role="status"
                  className="bg-[#121212] border border-[#c59b6d]/40 rounded-2xl p-8 text-center space-y-3"
                >
                  <CheckCircle2 size={48} className="mx-auto text-[#d8a876]" />
                  <h3 className="text-xl font-bold font-headline text-[#fbf8f5]">Poptávka byla úspěšně odeslána</h3>
                  <p className="text-[#b8aea2] text-sm leading-relaxed">
                    Děkujeme za váš zájem. Náš tým se vám ozve do 24 hodin s kalkulací a možnostmi realizace.
                  </p>
                  <button
                    type="button"
                    onClick={() => setStatus("idle")}
                    className="mt-4 inline-block text-xs font-bold uppercase tracking-wider text-[#d8a876] hover:text-[#f5f2ed] underline underline-offset-4"
                  >
                    Odeslat další poptávku
                  </button>
                </motion.div>
              ) : (
                <>
                  {status === "error" && (
                    <div role="alert" className="bg-[#121212] border border-[#c59b6d]/40 rounded-xl p-4 text-sm text-[#ecd7be] space-y-2">
                      <p className="flex items-start gap-2 font-semibold text-[#fbf8f5]">
                        <CircleAlert size={18} className="mt-0.5 shrink-0 text-[#d8a876]" />
                        Poptávku se nepodařilo odeslat.
                      </p>
                      <p className="text-[#b8aea2] leading-relaxed">
                        Zkuste to prosím znovu, nebo napište na{" "}
                        <a className="text-[#d8a876] underline underline-offset-4" href={`mailto:${siteConfig.email}`}>
                          {siteConfig.email}
                        </a>{" "}
                        či zavolejte na{" "}
                        <a className="text-[#d8a876] underline underline-offset-4" href={`tel:${siteConfig.phoneTel}`}>
                          {siteConfig.phoneDisplay}
                        </a>
                        .
                      </p>
                    </div>
                  )}
                  {status === "mailto" && (
                    <div role="status" className="bg-[#121212] border border-[#c59b6d]/40 rounded-xl p-4 text-sm space-y-2">
                      <p className="flex items-start gap-2 font-semibold text-[#fbf8f5]">
                        <Mail size={18} className="mt-0.5 shrink-0 text-[#d8a876]" />
                        Zpráva se z webu neodeslala.
                      </p>
                      <p className="text-[#b8aea2] leading-relaxed">
                        Otevřeli jsme e-mail ve vašem programu s předvyplněnou poptávkou. Je potřeba ji ještě ručně odeslat.
                        Když se e-mail neotevře, napište na{" "}
                        <a className="text-[#d8a876] underline underline-offset-4" href={`mailto:${siteConfig.email}`}>
                          {siteConfig.email}
                        </a>{" "}
                        nebo zavolejte na{" "}
                        <a className="text-[#d8a876] underline underline-offset-4" href={`tel:${siteConfig.phoneTel}`}>
                          {siteConfig.phoneDisplay}
                        </a>
                        .
                      </p>
                    </div>
                  )}
                  <div>
                    <label htmlFor="quote-name" className="sr-only">
                      Jméno a příjmení
                    </label>
                    <input
                      id="quote-name"
                      name="name"
                      type="text"
                      required
                      autoComplete="name"
                      placeholder="Vaše jméno a příjmení *"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className={fieldClass}
                    />
                  </div>
                  <div>
                    <label htmlFor="quote-email" className="sr-only">
                      E-mail
                    </label>
                    <input
                      id="quote-email"
                      name="email"
                      type="email"
                      required
                      autoComplete="email"
                      placeholder="Váš e-mail *"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className={fieldClass}
                    />
                  </div>
                  <div>
                    <label htmlFor="quote-phone" className="sr-only">
                      Telefon
                    </label>
                    <input
                      id="quote-phone"
                      name="phone"
                      type="tel"
                      autoComplete="tel"
                      placeholder="Telefon (volitelné)"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className={fieldClass}
                    />
                  </div>
                  <div>
                    <label htmlFor="quote-type" className="block text-[10px] uppercase tracking-widest text-[#d6cec3] font-semibold mb-1.5">
                      Typ stavby
                    </label>
                    <select
                      id="quote-type"
                      name="typ_stavby"
                      value={formData.buildingType}
                      onChange={(e) => setFormData({ ...formData, buildingType: e.target.value })}
                      className={fieldClass}
                    >
                      <option value="">Vyberte typ</option>
                      {buildingTypes.map((type) => (
                        <option key={type} value={type}>
                          {type}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label htmlFor="quote-location" className="block text-[10px] uppercase tracking-widest text-[#d6cec3] font-semibold mb-1.5">
                      Lokalita stavby
                    </label>
                    <input
                      id="quote-location"
                      name="lokalita_stavby"
                      type="text"
                      autoComplete="address-level2"
                      placeholder="Obec nebo katastr"
                      value={formData.location}
                      onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                      className={fieldClass}
                    />
                  </div>
                  <div>
                    <label htmlFor="quote-budget" className="block text-[10px] uppercase tracking-widest text-[#d6cec3] font-semibold mb-1.5">
                      Orientační rozpočet
                    </label>
                    <select
                      id="quote-budget"
                      name="orientacni_rozpocet"
                      value={formData.budget}
                      onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                      className={fieldClass}
                    >
                      <option value="">Nechci uvádět</option>
                      {budgetRanges.map((range) => (
                        <option key={range} value={range}>
                          {range}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label htmlFor="quote-message" className="sr-only">
                      Zpráva
                    </label>
                    <textarea
                      id="quote-message"
                      name="message"
                      placeholder="Popište stručně váš projekt nebo představu..."
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className={`${fieldClass} resize-none`}
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={status === "submitting"}
                    aria-busy={status === "submitting"}
                    className="w-full bg-[#c59b6d] text-[#120e0b] hover:bg-[#d8a876] disabled:opacity-50 py-4 rounded-xl font-bold text-sm uppercase tracking-widest transition-all flex items-center justify-center space-x-3 shadow-lg shadow-black/60 cursor-pointer"
                  >
                    <span>{status === "submitting" ? "Odesílám…" : "Odeslat poptávku"}</span>
                    <ArrowRight size={18} />
                  </button>
                  <p className="text-[11px] leading-relaxed text-[#8f8274]">
                    Odesláním berete na vědomí zpracování jména, e-mailu, telefonu, typu stavby, lokality, případného
                    rozpočtu a textu zprávy za účelem vyřízení poptávky. Více v{" "}
                    <a href={routes.privacy} className="text-[#d8a876] underline underline-offset-4">
                      Zásadách ochrany osobních údajů
                    </a>
                    .
                  </p>
                </>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

const MapSection = () => {
  const [mapReady, setMapReady] = useState(false);

  return (
    <section className="py-24 bg-black border-t border-[#1f1914]" id="kontakt">
      <div className="container mx-auto px-6">
        <div className="rounded-3xl overflow-hidden border border-[#221c16] shadow-2xl h-[520px] relative bg-black">
          {mapReady ? (
            <iframe
              className="w-full h-full grayscale invert opacity-70 contrast-125"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d83560.16483259941!2d16.5711625!3d49.20235335!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471294320875e46f%3A0x400af0f6614b280!2sBrno%2C%20Czechia!5e0!3m2!1scs!2scz!4v1689000000000"
              style={{ border: 0 }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Mapa: DRAXOR v Brně"
            />
          ) : (
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_40%,#2a2118,transparent_42%),linear-gradient(#12100e,#000)]">
              <div className="absolute bottom-8 right-8 left-8 sm:left-auto sm:max-w-xs text-left sm:text-right space-y-3">
                <p className="text-xs leading-relaxed text-[#b8aea2]">
                  Mapa se načte ze služby Google až po kliknutí. Do té doby se Googlu z této stránky nic neposílá.
                </p>
                <button
                  type="button"
                  onClick={() => setMapReady(true)}
                  className="bg-[#c59b6d] text-[#120e0b] hover:bg-[#d8a876] px-5 py-3 rounded-full text-xs font-bold uppercase tracking-wider"
                >
                  Zobrazit mapu
                </button>
              </div>
            </div>
          )}
          <div className="absolute top-8 left-8 p-8 bg-black/92 backdrop-blur-xl border border-[#221c16] rounded-2xl max-w-sm text-[#f5f2ed] shadow-2xl">
            <div className="flex items-center space-x-3.5 mb-4">
              <DraxorLogo className="h-8 w-auto" />
              <h2 className="text-2xl font-black font-headline tracking-tight text-[#fbf8f5]">Navštivte nás</h2>
            </div>
            <p className="text-[#b8aea2] text-sm mb-6 leading-relaxed font-light">
              Najdete nás v srdci jižní Moravy v Brně. Zastavte se na kávu a proberme váš projekt osobně s naším architektem.
            </p>
            <div className="space-y-3 text-sm">
              <p className="flex items-center space-x-3 text-[#e6decb]">
                <MapPin size={18} className="text-[#d8a876] flex-shrink-0" />
                <span>
                  {siteConfig.city}, {siteConfig.country}
                </span>
              </p>
              <p className="flex items-center space-x-3 text-[#e6decb]">
                <Clock size={18} className="text-[#d8a876] flex-shrink-0" />
                <span>{siteConfig.openingHours}</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const logoLinkClass =
  "inline-flex items-center gap-1 rounded-lg border border-[#c59b6d]/30 px-2 py-1 text-[10px] font-bold uppercase tracking-wider text-[#d8a876] hover:border-[#c59b6d] hover:text-[#f5eee6]";

const LogoFileLinks = ({ hrefBase, downloadBase }: { hrefBase: string; downloadBase: string }) => (
  <div className="mt-2 flex gap-2">
    <a className={logoLinkClass} href={`${hrefBase}.svg`} download={`${downloadBase}.svg`}>
      <Download size={12} />
      SVG
    </a>
    <a className={logoLinkClass} href={`${hrefBase}.png`} download={`${downloadBase}.png`}>
      <Download size={12} />
      PNG
    </a>
  </div>
);

const LogoVariant = ({
  label,
  color,
  src,
  frame,
  hrefBase,
  downloadBase,
  previewClass,
}: {
  label: string;
  color: string;
  src: string;
  frame: string;
  hrefBase: string;
  downloadBase: string;
  previewClass: string;
}) => (
  <div className="rounded-xl border border-[#221c16] bg-[#0c0c0c] p-3">
    <div className={`flex h-16 items-center justify-center rounded-lg px-3 ${frame}`}>
      <img src={src} alt="" className={previewClass} />
    </div>
    <p className="mt-2 text-sm font-bold text-[#f5f2ed]">{label}</p>
    <p className="text-[11px] text-[#b8aea2]">{color}</p>
    <LogoFileLinks hrefBase={hrefBase} downloadBase={downloadBase} />
  </div>
);

const LogoDownloads = () => (
  <section id="loga" className="mt-16 border-t border-[#1a140f] pt-10">
    <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
      <div>
        <h2 className={footerHeading}>Loga ke stažení</h2>
        <p className="max-w-xl text-xs leading-relaxed text-[#b8aea2]">
          Stříška a nápis DRAXOR jsou oddělené soubory. zlatá #d8a876
        </p>
      </div>
      <a
        href="/downloads/draxor-logo-balicek.zip"
        download="draxor-logo-balicek.zip"
        className="inline-flex items-center justify-center gap-2 rounded-full bg-[#c59b6d] px-5 py-3 text-xs font-bold uppercase tracking-wider text-[#120e0b] hover:bg-[#d8a876]"
      >
        <Download size={14} />
        Stáhnout celý balíček (ZIP)
      </a>
    </div>

    <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
      <div>
        <h3 className="mb-3 text-xs font-bold uppercase tracking-widest text-[#d8a876]">Stříška</h3>
        <LogoVariant
          label="Zlatá"
          color="zlatá #d8a876"
          src="/logo-zlate.svg"
          frame="bg-[#121212]"
          hrefBase="/logo-zlate"
          downloadBase="draxor-strecha-gold"
          previewClass="h-10 w-full object-contain"
        />
      </div>
      <div>
        <h3 className="mb-3 text-xs font-bold uppercase tracking-widest text-[#d8a876]">Nápis DRAXOR</h3>
        <LogoVariant
          label="Zlatá"
          color="zlatá #d8a876"
          src="/draxor-text-gold.svg"
          frame="bg-[#121212]"
          hrefBase="/draxor-text-gold"
          downloadBase="draxor-text-gold"
          previewClass="h-8 w-full object-contain"
        />
      </div>
      <div>
        <h3 className="mb-3 text-xs font-bold uppercase tracking-widest text-[#d8a876]">Ikona</h3>
        <LogoVariant
          label="Ikona"
          color="zlatá #d8a876"
          src="/logo-ikona.svg"
          frame="bg-[#121212]"
          hrefBase="/logo-ikona"
          downloadBase="draxor-ikona"
          previewClass="h-14 w-14 object-contain"
        />
      </div>
    </div>
  </section>
);

const footerHeading = "text-sm font-bold mb-6 font-headline uppercase tracking-widest text-[#d8a876]";

const Footer = ({ onHome }: { onHome: boolean }) => (
  <footer className="bg-black text-[#f5f2ed] py-16 border-t border-[#1a140f]">
    <div className="container mx-auto px-6">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="space-y-4">
          <div className="flex items-center space-x-3.5">
            <DraxorLogo className="h-8 w-auto" />
            <span className="text-2xl font-black tracking-tighter text-[#fbf8f5]">DRAXOR</span>
          </div>
          <p className="text-[#b8aea2] text-sm leading-relaxed font-light">
            Tvoříme vaši vizi ve dřevě a kovu s precizností a vášní. Od nadčasových dřevostaveb po moderní hliníkové konstrukce a akustické prvky.
          </p>
          <div className="flex space-x-4 pt-2">
            <a
              href={siteConfig.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Instagram Draxor ${siteConfig.instagramHandle}`}
              className="w-9 h-9 rounded-full bg-[#121212] border border-[#221c16] flex items-center justify-center text-[#b8aea2] hover:text-[#d8a876] hover:border-[#c59b6d]/40 transition-colors"
            >
              <Instagram size={16} />
            </a>
          </div>
        </div>

        <div>
          <h2 className={footerHeading}>Navigace</h2>
          <ul className="space-y-3 text-sm text-[#b8aea2] font-light">
            <li>
              <a href={sectionHref(onHome, "produkty")} className="hover:text-[#d8a876] transition-colors">
                Produkty
              </a>
            </li>
            <li>
              <a href={sectionHref(onHome, "galerie")} className="hover:text-[#d8a876] transition-colors">
                Galerie
              </a>
            </li>
            <li>
              <a href={sectionHref(onHome, "materialy")} className="hover:text-[#d8a876] transition-colors">
                Materiály
              </a>
            </li>
            <li>
              <a
                href={siteConfig.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#d8a876] transition-colors inline-flex items-center space-x-1"
              >
                <span>Instagram ({siteConfig.instagramHandle})</span>
                <ExternalLink size={12} />
              </a>
            </li>
            <li>
              <a href={sectionHref(onHome, "spoluprace")} className="hover:text-[#d8a876] transition-colors">
                Jak spolupráce probíhá
              </a>
            </li>
            {siteConfig.showBlog && (
              <li>
                <a href={sectionHref(onHome, "blog")} className="hover:text-[#d8a876] transition-colors">
                  Blog & Tipy
                </a>
              </li>
            )}
            <li>
              <a href={sectionHref(onHome, "poptavka")} className="hover:text-[#d8a876] transition-colors">
                Nezávazná poptávka
              </a>
            </li>
            <li>
              <a href={routes.privacy} className="hover:text-[#d8a876] transition-colors">
                Ochrana osobních údajů
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h2 className={footerHeading}>Služby</h2>
          <ul className="space-y-3 text-sm text-[#b8aea2] font-light">
            <li>
              <a href={sectionHref(onHome, "produkty")} className="hover:text-[#d8a876] transition-colors">
                Dřevostavby na klíč
              </a>
            </li>
            <li>
              <a href={sectionHref(onHome, "produkty")} className="hover:text-[#d8a876] transition-colors">
                Sruby a roubenky
              </a>
            </li>
            <li>
              <a href={sectionHref(onHome, "materialy")} className="hover:text-[#d8a876] transition-colors">
                Hliníkové bioklimatické pergoly
              </a>
            </li>
            <li>
              <a href={sectionHref(onHome, "materialy")} className="hover:text-[#d8a876] transition-colors">
                Kartáčované akustické panely
              </a>
            </li>
            <li>
              <a href={sectionHref(onHome, "poptavka")} className="hover:text-[#d8a876] transition-colors">
                Architektonické 3D návrhy
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h2 className={footerHeading}>Kontakt</h2>
          <ul className="space-y-3 text-sm text-[#b8aea2] font-light">
            <li className="flex items-center space-x-3">
              <MapPin size={16} className="text-[#d8a876]" />
              <span>
                {siteConfig.city}, {siteConfig.country}
              </span>
            </li>
            <li className="flex items-center space-x-3">
              <Phone size={16} className="text-[#d8a876]" />
              <a href={`tel:${siteConfig.phoneTel}`} className="hover:text-[#d8a876] transition-colors">
                {siteConfig.phoneDisplay}
              </a>
            </li>
            <li className="flex items-center space-x-3">
              <Mail size={16} className="text-[#d8a876]" />
              <a href={`mailto:${siteConfig.email}`} className="hover:text-[#d8a876] transition-colors">
                {siteConfig.email}
              </a>
            </li>
            <li className="flex items-center space-x-3">
              <Instagram size={16} className="text-[#d8a876]" />
              <a
                href={siteConfig.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#d8a876] transition-colors"
              >
                {siteConfig.instagramHandle}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <LogoDownloads />

      <div className="mt-16 pt-8 border-t border-[#1a140f] space-y-6">
        <div className="space-y-2 text-sm text-[#b8aea2] font-light">
          <h2 className={footerHeading}>Identifikace podnikatele</h2>
          <p>
            Obchodní jméno: <ConfigValue value={siteConfig.businessName} />
          </p>
          <p>
            IČO: <ConfigValue value={siteConfig.ico} />
          </p>
          <p>
            Sídlo: <ConfigValue value={siteConfig.address} />
          </p>
        </div>
        <div className="flex flex-col sm:flex-row justify-between items-center text-xs text-[#8f8274] gap-4">
          <span>© {new Date().getFullYear()} DRAXOR.cz. Všechna práva vyhrazena.</span>
          <a href={routes.privacy} className="text-[#d8a876] underline underline-offset-4 hover:text-[#f5f2ed]">
            Zásady ochrany osobních údajů
          </a>
        </div>
      </div>
    </div>
  </footer>
);

function NotFound() {
  return (
    <section className="min-h-[70vh] flex items-center px-6 pt-32 pb-24">
      <div className="container mx-auto max-w-2xl text-center">
        <h1 className="text-4xl md:text-6xl font-bold font-headline uppercase tracking-tight text-[#fbf8f5] mb-4">
          Stránka nenalezena
        </h1>
        <p className="text-[#b8aea2] font-light mb-8">Tato adresa na webu DRAXOR neexistuje.</p>
        <a
          href={routes.home}
          className="inline-flex bg-[#c59b6d] text-[#120e0b] hover:bg-[#d8a876] px-8 py-4 rounded-full text-sm font-bold uppercase tracking-wider"
        >
          Zpět na úvod
        </a>
      </div>
    </section>
  );
}

function MobileCallButton() {
  const [hide, setHide] = useState(false);

  useEffect(() => {
    const targets = [document.getElementById("poptavka"), document.querySelector("footer")].filter(
      (node): node is HTMLElement => node instanceof HTMLElement,
    );
    const visible = new Set<Element>();
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) visible.add(entry.target);
          else visible.delete(entry.target);
        }
        setHide(visible.size > 0);
      },
      { threshold: 0.12 },
    );
    targets.forEach((target) => observer.observe(target));
    return () => observer.disconnect();
  }, []);

  return (
    <a
      href={`tel:${siteConfig.phoneTel}`}
      className={`${hide ? "hidden" : "inline-flex md:hidden"} fixed bottom-4 right-4 z-40 items-center gap-2 bg-[#c59b6d] text-[#120e0b] hover:bg-[#d8a876] px-5 py-3 rounded-full text-sm font-bold uppercase tracking-wider shadow-lg shadow-black/70 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#f5eee6]`}
    >
      <Phone size={16} />
      Zavolat
    </a>
  );
}

export default function App({ initialPath }: { initialPath?: string }) {
  const [inquiryType, setInquiryType] = useState("");
  const path = normalizePath(initialPath ?? (typeof window !== "undefined" ? window.location.pathname : "/"));
  const kind = pageKind(path);
  const onHome = kind === "home";

  useEffect(() => {
    if (!onHome || typeof window === "undefined" || !window.location.hash) return;
    const target = document.querySelector(window.location.hash);
    if (target) target.scrollIntoView();
  }, [onHome]);

  return (
    <div className="bg-black min-h-screen selection:bg-[#c59b6d] selection:text-[#120e0b] font-sans antialiased text-[#f5f2ed]">
      <Navbar onHome={onHome} />
      <main>
        {kind === "home" && (
          <>
            <Hero />
            <Features />
            <FeaturedProducts onInquire={setInquiryType} />
            <ProcessSection />
            <MaterialsSection />
            <GallerySection />
            <InstagramFeed />
            {siteConfig.showBlog && <BlogSection />}
            <QuoteSection preferredType={inquiryType} />
            <MapSection />
          </>
        )}
        {kind === "privacy" && <PrivacyPolicy />}
        {kind === "notFound" && <NotFound />}
      </main>
      <Footer onHome={onHome} />
      <MobileCallButton />
    </div>
  );
}
