/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion, useScroll, useTransform, AnimatePresence } from "motion/react";
import {
  Menu,
  X,
  ArrowRight,
  Facebook,
  Instagram,
  Twitter,
  Mail,
  MapPin,
  Phone,
  ChevronRight,
  Hammer,
  TreeDeciduous,
  Ruler,
  Clock,
  CheckCircle2,
  ShieldCheck,
  Download,
} from "lucide-react";
import React, { useState, useEffect } from "react";
import aluminumPergolaImg from "./assets/images/aluminum_pergola_1787994901750.jpg";
import woodConstructionImg from "./assets/images/wood_construction_1787995128643.jpg";

// --- Types ---
interface Product {
  id: string;
  title: string;
  description: string;
  category: string;
  image: string;
  tag?: string;
}

interface Material {
  title: string;
  desc: string;
  img: string;
}

interface BlogPost {
  id: string;
  title: string;
  date: string;
  image: string;
  excerpt: string;
}

interface GalleryItem {
  src: string;
  title: string;
  category: string;
}

// --- Logo Component ---
const DraxorLogo = ({ className = "w-10 h-10" }: { className?: string }) => (
  <div
    className={`${className} relative rounded-xl bg-[#18130e] p-2 flex items-center justify-center border border-[#c59b6d]/40 shadow-md group-hover:border-[#d8a876] transition-all flex-shrink-0`}
  >
    <svg
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-full"
    >
      {/* Clean, Simple Minimalist Roof (Stříška) */}
      <path
        d="M16 66 L50 26 L84 66"
        stroke="#d8a876"
        strokeWidth="9"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  </div>
);

// --- Layout Components ---
const Navbar = ({ onOpenLogoDownload }: { onOpenLogoDownload?: () => void }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Produkty", id: "produkty" },
    { name: "Materiály", id: "materialy" },
    { name: "Galerie", id: "galerie" },
    { name: "Blog", id: "blog" },
    { name: "Poptávka", id: "poptavka" },
  ];

  return (
    <nav
      id="navbar"
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-[#0d0b09]/92 backdrop-blur-md py-3 shadow-lg border-b border-[#3d2e1e]/50"
          : "bg-gradient-to-b from-[#0d0b09]/85 to-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center space-x-3">
          <button
            onClick={onOpenLogoDownload}
            title="Klikněte pro stažení loga (SVG / PNG)"
            className="flex items-center space-x-3 group text-left focus:outline-none"
          >
            <DraxorLogo className="w-10 h-10 group-hover:scale-105 transition-transform" />
            <span className="text-2xl font-black tracking-tighter text-[#f5f2ed] font-headline group-hover:text-[#d8a876] transition-colors">
              DRAXOR
            </span>
          </button>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex space-x-7 items-center">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className="text-[11px] uppercase tracking-widest font-bold text-[#b8aea2] hover:text-[#d8a876] transition-colors"
            >
              {item.name}
            </a>
          ))}

          <a
            href="#poptavka"
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
          className="md:hidden text-[#f5f2ed] p-2 focus:outline-none"
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
            className="md:hidden bg-[#0d0b09]/98 backdrop-blur-xl border-t border-[#3d2e1e]/60 flex flex-col px-6 py-8 space-y-5"
          >
            {navItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={() => setMobileMenuOpen(false)}
                className="text-lg font-bold text-[#d6cec3] hover:text-[#d8a876] uppercase tracking-wider font-headline transition-colors"
              >
                {item.name}
              </a>
            ))}

            <div className="pt-2">
              <a
                href="#poptavka"
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
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0d0b09] text-[#f5f2ed] pt-20 pb-16">
      <motion.div style={{ y: y1 }} className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1703782997454-8eb0d4d94e9c?auto=format&fit=crop&q=80&w=2000"
          alt="Hero Background - Moderní dřevostavba"
          className="w-full h-full object-cover opacity-45"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0d0b09]/85 via-[#120e0b]/45 to-[#0d0b09]" />
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
              WOOD AND METAL CRAFT
            </span>
          </div>

          <h1 className="text-5xl sm:text-6xl md:text-8xl font-extrabold tracking-tighter mb-8 leading-[0.95] text-[#fbf8f5]">
            Tvoříme vaši vizi ve <span className="text-[#d8a876]">dřevě a kovu</span>
          </h1>

          <p className="text-lg md:text-xl text-[#d6cec3] max-w-2xl mx-auto mb-10 font-light leading-relaxed">
            Od nadčasových dřevěných domů po moderní hliníkové konstrukce. Přinášíme architektonické sny k životu s důrazem na kvalitu a detail.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="#produkty"
              className="bg-[#f5eee6] text-[#15110d] px-8 sm:px-10 py-4 sm:py-5 rounded-full text-sm font-bold flex items-center space-x-2 group hover:bg-[#e8dcce] transition-all shadow-xl shadow-black/40"
            >
              <span>Prozkoumat produkty</span>
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform text-[#8f5d2b]" />
            </a>
            <a
              href="#poptavka"
              className="bg-[#1e1711]/60 backdrop-blur-md text-[#f5f2ed] border border-[#c59b6d]/35 hover:border-[#c59b6d]/60 px-8 sm:px-10 py-4 sm:py-5 rounded-full text-sm font-bold hover:bg-[#c59b6d]/15 transition-all"
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
        <span className="text-[10px] uppercase tracking-widest text-[#b8aea2]/60 mb-2">Scroll</span>
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
    <section className="py-20 bg-[#120e0b] text-[#f5f2ed] border-y border-[#3d2e1e]/40">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
          {features.map((f, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="flex flex-col space-y-3 p-6 rounded-2xl bg-[#19140f] border border-[#3d2e1e]/50 hover:border-[#c59b6d]/40 transition-colors shadow-sm"
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

const FeaturedProducts = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  const products: Product[] = [
    {
      id: "prod-5",
      title: "Srubový klenot Harmonie",
      description: "Luxusní a útulná celoroční rekreační chata s duší severské přírody a masivní konstrukcí.",
      category: "Dřevo",
      image: "https://firebasestorage.googleapis.com/v0/b/studio-602750919-65399.firebasestorage.app/o/D626B423-6CBF-4669-A8DE-58D2E44EC6ED_4_5005_c.jpeg?alt=media&token=d8df64b4-837a-47a3-9e19-f3b6779000ae",
      tag: "Bestseller",
    },
    {
      id: "prod-1",
      title: "Moderní borovicová chata",
      description: "Kompaktní, energeticky úsporná a stylová chata navržená pro klidné víkendové úniky.",
      category: "Dřevo",
      image: "https://images.unsplash.com/photo-1768846317240-1f14abd59513?auto=format&fit=crop&q=80&w=800",
      tag: "Novinka",
    },
    {
      id: "prod-2",
      title: "Dubové akustické panely",
      description: "Zlepšete akustiku a estetiku svého interiéru s prémiovými lamelovými panely tlumícími hluk.",
      category: "Interiér",
      image: "https://storage.googleapis.com/studio-602750919-65399.appspot.com/83024806-c819-4b72-88b5-5c911b333a57",
      tag: "Design",
    },
  ];

  const filtered = selectedCategory === "all" ? products : products.filter((p) => p.category === selectedCategory);

  return (
    <section className="py-24 bg-[#0d0b09] text-[#f5f2ed]" id="produkty">
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
              className={`px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all ${
                selectedCategory === "all"
                  ? "bg-[#c59b6d] text-[#120e0b]"
                  : "bg-[#18130e] text-[#b8aea2] hover:text-[#f5f2ed] border border-[#3d2e1e]/60"
              }`}
            >
              Vše
            </button>
            <button
              onClick={() => setSelectedCategory("Dřevo")}
              className={`px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all ${
                selectedCategory === "Dřevo"
                  ? "bg-[#c59b6d] text-[#120e0b]"
                  : "bg-[#18130e] text-[#b8aea2] hover:text-[#f5f2ed] border border-[#3d2e1e]/60"
              }`}
            >
              Stavby
            </button>
            <button
              onClick={() => setSelectedCategory("Interiér")}
              className={`px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all ${
                selectedCategory === "Interiér"
                  ? "bg-[#c59b6d] text-[#120e0b]"
                  : "bg-[#18130e] text-[#b8aea2] hover:text-[#f5f2ed] border border-[#3d2e1e]/60"
              }`}
            >
              Interiér
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {filtered.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group flex flex-col"
            >
              <div className="relative aspect-[4/5] overflow-hidden rounded-3xl mb-6 bg-[#16120e] border border-[#3d2e1e]/60 group-hover:border-[#c59b6d]/40 transition-colors shadow-2xl">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  onError={(e) => {
                    e.currentTarget.src = "https://images.unsplash.com/photo-1542621334-a254cf47733d?auto=format&fit=crop&q=80&w=800";
                  }}
                />
                <div className="absolute top-5 left-5 flex space-x-2">
                  <span className="bg-[#0d0b09]/85 backdrop-blur-md px-3.5 py-1.5 rounded-full text-[10px] uppercase font-bold tracking-widest border border-[#c59b6d]/30 text-[#ecd7be]">
                    {product.category}
                  </span>
                  {product.tag && (
                    <span className="bg-[#c59b6d] text-[#120e0b] px-3 py-1.5 rounded-full text-[10px] uppercase font-bold tracking-widest">
                      {product.tag}
                    </span>
                  )}
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-2 font-headline text-[#fbf8f5] group-hover:text-[#d8a876] transition-colors uppercase tracking-tight">
                {product.title}
              </h3>
              <p className="text-[#b8aea2] text-sm leading-relaxed font-light mb-4 flex-grow">
                {product.description}
              </p>
              <a
                href="#poptavka"
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

const MaterialsSection = () => {
  const materials: Material[] = [
    {
      title: "Severské dřevo",
      desc: "Využíváme borovici a severský smrk z certifikovaných udržitelných zdrojů. Ideální volba pro sruby, roubenky a masivní konstrukce.",
      img: woodConstructionImg,
    },
    {
      title: "Hliník & Kov",
      desc: "Moderní bioklimatické pergoly, nosné ocelové prvky a detaily z prémiového hliníku. Maximální odolnost vůči počasí bez nutnosti údržby.",
      img: aluminumPergolaImg,
    },
    {
      title: "Kartáčované povrchy",
      desc: "Speciální úprava palubek a trámů pro zvýraznění přirozené 3D textury a hloubky kresby dřeva s ekologickými oleji.",
      img: "https://images.unsplash.com/photo-1516455590571-18256e5bb9ff?auto=format&fit=crop&q=80&w=600",
    },
  ];

  return (
    <section className="py-24 bg-[#100c09] text-[#f5f2ed] border-t border-[#3d2e1e]/40" id="materialy">
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
              className="group bg-[#16120e] p-6 rounded-3xl border border-[#3d2e1e]/50 hover:border-[#c59b6d]/40 transition-all shadow-md"
            >
              <div className="aspect-[16/10] overflow-hidden rounded-2xl mb-6 border border-[#3d2e1e]/60 shadow-2xl bg-[#0d0b09]">
                <img
                  src={mat.img}
                  alt={mat.title}
                  className="w-full h-full object-cover grayscale-[0.35] transition-all duration-700 group-hover:grayscale-0 group-hover:scale-105"
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

  const images: GalleryItem[] = [
    {
      src: "https://images.unsplash.com/photo-1542621334-a254cf47733d?auto=format&fit=crop&q=80&w=1200",
      title: "Srubový dům v Krkonoších",
      category: "Sruby",
    },
    {
      src: "https://images.unsplash.com/photo-1703782997454-8eb0d4d94e9c?auto=format&fit=crop&q=80&w=1200",
      title: "Moderní dřevostavba u Brna",
      category: "Dřevostavby",
    },
    {
      src: aluminumPergolaImg,
      title: "Hliníková pergola s integrovaným LED osvětlením",
      category: "Pergoly",
    },
    {
      src: "https://images.unsplash.com/photo-1516455590571-18256e5bb9ff?auto=format&fit=crop&q=80&w=1200",
      title: "Kartáčovaný fasádní a interiérový obklad",
      category: "Obklady",
    },
  ];

  return (
    <section className="py-24 bg-[#0d0b09] text-[#f5f2ed]" id="galerie">
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
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {images.map((img, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -4 }}
              onClick={() => setActiveImage(img)}
              className="relative aspect-square overflow-hidden rounded-2xl group cursor-pointer border border-[#3d2e1e]/60 hover:border-[#c59b6d]/50 bg-[#16120e] transition-colors"
            >
              <img
                src={img.src}
                alt={img.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0d0b09]/95 via-[#0d0b09]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-6">
                <span className="text-[10px] uppercase tracking-widest text-[#d8a876] mb-1 font-semibold">
                  {img.category}
                </span>
                <span className="font-bold text-base text-[#f5f2ed]">{img.title}</span>
              </div>
            </motion.div>
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
            className="fixed inset-0 z-50 bg-[#0d0b09]/96 backdrop-blur-md flex items-center justify-center p-4 sm:p-8"
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
              <img
                src={activeImage.src}
                alt={activeImage.title}
                className="max-h-[75vh] w-auto object-contain rounded-2xl border border-[#3d2e1e]/70"
              />
              <div className="mt-4 text-center">
                <span className="text-xs uppercase tracking-widest text-[#d8a876] font-semibold">
                  {activeImage.category}
                </span>
                <h4 className="text-xl font-bold text-[#f5f2ed] mt-1">{activeImage.title}</h4>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

const BlogSection = () => {
  const posts: BlogPost[] = [
    {
      id: "blog-1",
      title: "Kouzlo kartáčovaného dřeva: Proč zvolit tento obklad?",
      date: "10. května 2024",
      image: "https://images.unsplash.com/photo-1516455590571-18256e5bb9ff?auto=format&fit=crop&q=80&w=800",
      excerpt:
        "Zvýrazněte duši dřeva ve svém interiéru či exteriéru. Kartáčované palubky nabízejí nezaměnitelnou 3D strukturu a vysokou odolnost.",
    },
    {
      id: "blog-2",
      title: "Vylepšete svůj prostor s akustickými dřevěnými obklady",
      date: "1. března 2024",
      image: "https://storage.googleapis.com/studio-602750919-65399.appspot.com/83024806-c819-4b72-88b5-5c911b333a57",
      excerpt:
        "Správná akustika je klíčem k domácí pohodě i soustředění v kanceláři. Zjistěte, jak lamelové dřevěné panely dokáží transformovat váš prostor.",
    },
  ];

  return (
    <section className="py-24 bg-[#120e0b] text-[#f5f2ed] border-t border-[#3d2e1e]/40" id="blog">
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
              className="group bg-[#17130f] p-6 rounded-3xl border border-[#3d2e1e]/50 hover:border-[#c59b6d]/40 transition-all flex flex-col shadow-md"
            >
              <div className="aspect-video overflow-hidden rounded-2xl mb-6 relative bg-[#0d0b09]">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  onError={(e) => {
                    e.currentTarget.src =
                      "https://images.unsplash.com/photo-1542621334-a254cf47733d?auto=format&fit=crop&q=80&w=800";
                  }}
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

const QuoteSection = () => {
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email) return;

    setIsSubmitting(true);

    const subject = `Poptávka Draxor – ${formData.name}`;
    const body = `Jméno: ${formData.name}\nEmail: ${formData.email}\nTelefon: ${formData.phone || "Neuvedeno"}\n\nZpráva k projektu:\n${formData.message}`;

    try {
      window.open(`mailto:musillukas@icloud.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`, "_blank");
    } catch {
      // safe fallback
    }

    setSubmitted(true);
    setIsSubmitting(false);
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  return (
    <section className="py-24 bg-[#f6efe9] text-[#15110d]" id="poptavka">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto bg-[#120e0b] text-[#f5f2ed] rounded-[2.5rem] p-8 md:p-16 relative overflow-hidden shadow-[0_40px_100px_-20px_rgba(26,18,12,0.6)] border border-[#3d2e1e]/60">
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
                  href="mailto:musillukas@icloud.com"
                  className="flex items-center space-x-4 p-4 rounded-xl border border-[#3d2e1e]/60 hover:border-[#c59b6d]/40 bg-[#18130e] hover:bg-[#201913] transition-colors group cursor-pointer"
                >
                  <div className="w-10 h-10 rounded-lg bg-[#261d15] flex items-center justify-center text-[#d8a876] group-hover:text-white transition-colors">
                    <Mail size={20} />
                  </div>
                  <div>
                    <span className="text-[10px] uppercase tracking-widest text-[#8f8274] block font-semibold">
                      Napište nám
                    </span>
                    <span className="text-sm font-medium text-[#f5f2ed]">musillukas@icloud.com</span>
                  </div>
                </a>
                <a
                  href="tel:+420732527871"
                  className="flex items-center space-x-4 p-4 rounded-xl border border-[#3d2e1e]/60 hover:border-[#c59b6d]/40 bg-[#18130e] hover:bg-[#201913] transition-colors group cursor-pointer"
                >
                  <div className="w-10 h-10 rounded-lg bg-[#261d15] flex items-center justify-center text-[#d8a876] group-hover:text-white transition-colors">
                    <Phone size={20} />
                  </div>
                  <div>
                    <span className="text-[10px] uppercase tracking-widest text-[#8f8274] block font-semibold">
                      Zavolejte nám
                    </span>
                    <span className="text-sm font-medium text-[#f5f2ed]">+420 732 527 871</span>
                  </div>
                </a>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="bg-[#18130e] border border-[#c59b6d]/40 rounded-2xl p-8 text-center space-y-3"
                >
                  <CheckCircle2 size={48} className="mx-auto text-[#d8a876]" />
                  <h4 className="text-xl font-bold font-headline text-[#fbf8f5]">Poptávka byla úspěšně odeslána</h4>
                  <p className="text-[#b8aea2] text-sm leading-relaxed">
                    Děkujeme za váš zájem. Náš tým se vám ozve do 24 hodin s kalkulací a možnostmi realizace.
                  </p>
                  <button
                    type="button"
                    onClick={() => setSubmitted(false)}
                    className="mt-4 inline-block text-xs font-bold uppercase tracking-wider text-[#d8a876] hover:text-[#f5f2ed] underline underline-offset-4"
                  >
                    Odeslat další poptávku
                  </button>
                </motion.div>
              ) : (
                <>
                  <input
                    type="text"
                    required
                    placeholder="Vaše jméno a příjmení *"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-[#18130e] border border-[#3d2e1e]/70 rounded-xl p-4 text-sm text-[#f5f2ed] placeholder-[#8f8274] focus:outline-none focus:border-[#c59b6d] focus:bg-[#201913] transition-colors"
                  />
                  <input
                    type="email"
                    required
                    placeholder="Váš e-mail *"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-[#18130e] border border-[#3d2e1e]/70 rounded-xl p-4 text-sm text-[#f5f2ed] placeholder-[#8f8274] focus:outline-none focus:border-[#c59b6d] focus:bg-[#201913] transition-colors"
                  />
                  <input
                    type="tel"
                    placeholder="Telefon (volitelné)"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full bg-[#18130e] border border-[#3d2e1e]/70 rounded-xl p-4 text-sm text-[#f5f2ed] placeholder-[#8f8274] focus:outline-none focus:border-[#c59b6d] focus:bg-[#201913] transition-colors"
                  />
                  <textarea
                    placeholder="Popište stručně váš projekt nebo představu..."
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full bg-[#18130e] border border-[#3d2e1e]/70 rounded-xl p-4 text-sm text-[#f5f2ed] placeholder-[#8f8274] focus:outline-none focus:border-[#c59b6d] focus:bg-[#201913] transition-colors resize-none"
                  />
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-[#c59b6d] text-[#120e0b] hover:bg-[#d8a876] disabled:opacity-50 py-4 rounded-xl font-bold text-sm uppercase tracking-widest transition-all flex items-center justify-center space-x-3 shadow-lg shadow-black/40 cursor-pointer"
                  >
                    <span>Odeslat poptávku</span>
                    <ArrowRight size={18} />
                  </button>
                </>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

const MapSection = () => (
  <section className="py-24 bg-[#0d0b09] border-t border-[#3d2e1e]/40" id="kontakt">
    <div className="container mx-auto px-6">
      <div className="rounded-3xl overflow-hidden border border-[#3d2e1e]/60 shadow-2xl h-[520px] relative bg-[#120e0b]">
        <iframe
          className="w-full h-full grayscale invert opacity-70 contrast-125"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d83560.16483259941!2d16.5711625!3d49.20235335!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471294320875e46f%3A0x400af0f6614b280!2sBrno%2C%20Czechia!5e0!3m2!1sen!2scz!4v1689000000000"
          style={{ border: 0 }}
          allowFullScreen={false}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Draxor Location Brno"
        />
        <div className="absolute top-8 left-8 p-8 bg-[#120e0b]/92 backdrop-blur-xl border border-[#3d2e1e]/70 rounded-2xl max-w-sm text-[#f5f2ed] shadow-2xl">
          <div className="flex items-center space-x-3 mb-4">
            <DraxorLogo className="w-8 h-8" />
            <h3 className="text-2xl font-black font-headline tracking-tight text-[#fbf8f5]">Navštivte nás</h3>
          </div>
          <p className="text-[#b8aea2] text-sm mb-6 leading-relaxed font-light">
            Najdete nás v srdci jižní Moravy v Brně. Zastavte se na kávu a proberme váš projekt osobně s naším architektem.
          </p>
          <div className="space-y-3 text-sm">
            <p className="flex items-center space-x-3 text-[#e6decb]">
              <MapPin size={18} className="text-[#d8a876] flex-shrink-0" />
              <span>Brno, Česká republika</span>
            </p>
            <p className="flex items-center space-x-3 text-[#e6decb]">
              <Clock size={18} className="text-[#d8a876] flex-shrink-0" />
              <span>Pondělí – Pátek: 9:00 – 17:00</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const LogoDownloadModal = ({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) => {
  if (!isOpen) return null;

  const downloadFile = (path: string, filename: string) => {
    const link = document.createElement("a");
    link.href = path;
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const downloadPNG = (color: string, filename: string, isFull = false) => {
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    if (isFull) {
      canvas.width = 1600;
      canvas.height = 480;
      ctx.strokeStyle = color;
      ctx.lineWidth = 36;
      ctx.lineCap = "round";
      ctx.lineJoin = "round";
      ctx.beginPath();
      ctx.moveTo(80, 320);
      ctx.lineTo(200, 160);
      ctx.lineTo(320, 320);
      ctx.stroke();

      ctx.fillStyle = "#ffffff";
      ctx.font = "900 152px 'Outfit', sans-serif";
      ctx.fillText("DRAXOR", 400, 290);
      ctx.fillStyle = color;
      ctx.font = "600 32px 'Inter', sans-serif";
      ctx.fillText("WOOD AND METAL CRAFT", 408, 370);
    } else {
      canvas.width = 1024;
      canvas.height = 1024;
      ctx.strokeStyle = color;
      ctx.lineWidth = 92;
      ctx.lineCap = "round";
      ctx.lineJoin = "round";
      ctx.beginPath();
      ctx.moveTo(160, 680);
      ctx.lineTo(512, 272);
      ctx.lineTo(864, 680);
      ctx.stroke();
    }

    const pngUrl = canvas.toDataURL("image/png");
    const link = document.createElement("a");
    link.href = pngUrl;
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 bg-[#0d0b09]/95 backdrop-blur-md flex items-center justify-center p-4 sm:p-6"
        onClick={onClose}
      >
        <div
          className="relative max-w-2xl w-full bg-[#16120e] border border-[#3d2e1e]/80 rounded-3xl p-6 sm:p-8 text-[#f5f2ed] shadow-2xl space-y-6"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex justify-between items-center border-b border-[#3d2e1e]/60 pb-4">
            <div className="flex items-center space-x-3">
              <DraxorLogo className="w-9 h-9" />
              <div>
                <h3 className="text-xl font-bold font-headline uppercase text-[#fbf8f5]">Stáhnout logo DRAXOR</h3>
                <p className="text-xs text-[#b8aea2]">Vektorové formáty (SVG) a vysoké rozlišení (PNG)</p>
              </div>
            </div>
            <button
              onClick={onClose}
              className="p-2 text-[#b8aea2] hover:text-[#f5f2ed] rounded-lg hover:bg-[#201913] transition-colors"
              aria-label="Zavřít"
            >
              <X size={22} />
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Gold Roof */}
            <div className="bg-[#100c09] p-4 rounded-2xl border border-[#3d2e1e]/60 flex flex-col items-center text-center">
              <div className="w-24 h-24 flex items-center justify-center mb-3">
                <svg viewBox="0 0 100 100" className="w-16 h-16">
                  <path
                    d="M16 66 L50 26 L84 66"
                    stroke="#d8a876"
                    strokeWidth="9"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    fill="none"
                  />
                </svg>
              </div>
              <span className="font-bold text-sm text-[#f5f2ed] mb-1">Zlatá stříška</span>
              <span className="text-[11px] text-[#8f8274] mb-3">Základní verze značky</span>
              <div className="flex space-x-2 w-full mt-auto">
                <button
                  onClick={() => downloadFile("/draxor-logo-gold.svg", "draxor-střiška-gold.svg")}
                  className="flex-1 py-2 px-3 bg-[#221a14] hover:bg-[#2e231b] border border-[#c59b6d]/30 text-xs font-bold text-[#d8a876] rounded-xl flex items-center justify-center space-x-1 transition-colors"
                >
                  <Download size={13} />
                  <span>SVG</span>
                </button>
                <button
                  onClick={() => downloadPNG("#d8a876", "draxor-střiška-gold.png")}
                  className="flex-1 py-2 px-3 bg-[#c59b6d] hover:bg-[#d8a876] text-xs font-bold text-[#120e0b] rounded-xl flex items-center justify-center space-x-1 transition-colors"
                >
                  <Download size={13} />
                  <span>PNG</span>
                </button>
              </div>
            </div>

            {/* White Roof */}
            <div className="bg-[#100c09] p-4 rounded-2xl border border-[#3d2e1e]/60 flex flex-col items-center text-center">
              <div className="w-24 h-24 flex items-center justify-center mb-3">
                <svg viewBox="0 0 100 100" className="w-16 h-16">
                  <path
                    d="M16 66 L50 26 L84 66"
                    stroke="#ffffff"
                    strokeWidth="9"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    fill="none"
                  />
                </svg>
              </div>
              <span className="font-bold text-sm text-[#f5f2ed] mb-1">Bílá stříška</span>
              <span className="text-[11px] text-[#8f8274] mb-3">Jednobarevná světlá</span>
              <div className="flex space-x-2 w-full mt-auto">
                <button
                  onClick={() => downloadFile("/draxor-logo-white.svg", "draxor-střiška-white.svg")}
                  className="flex-1 py-2 px-3 bg-[#221a14] hover:bg-[#2e231b] border border-[#3d2e1e] text-xs font-bold text-[#f5f2ed] rounded-xl flex items-center justify-center space-x-1 transition-colors"
                >
                  <Download size={13} />
                  <span>SVG</span>
                </button>
                <button
                  onClick={() => downloadPNG("#ffffff", "draxor-střiška-white.png")}
                  className="flex-1 py-2 px-3 bg-[#f5f2ed] hover:bg-white text-xs font-bold text-[#120e0b] rounded-xl flex items-center justify-center space-x-1 transition-colors"
                >
                  <Download size={13} />
                  <span>PNG</span>
                </button>
              </div>
            </div>

            {/* Black Roof */}
            <div className="bg-[#f5f2ed] p-4 rounded-2xl border border-[#3d2e1e]/60 flex flex-col items-center text-center">
              <div className="w-24 h-24 flex items-center justify-center mb-3">
                <svg viewBox="0 0 100 100" className="w-16 h-16">
                  <path
                    d="M16 66 L50 26 L84 66"
                    stroke="#120e0b"
                    strokeWidth="9"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    fill="none"
                  />
                </svg>
              </div>
              <span className="font-bold text-sm text-[#120e0b] mb-1">Černá stříška</span>
              <span className="text-[11px] text-[#6b6259] mb-3">Pro světlé tiskoviny</span>
              <div className="flex space-x-2 w-full mt-auto">
                <button
                  onClick={() => downloadFile("/draxor-logo-black.svg", "draxor-střiška-black.svg")}
                  className="flex-1 py-2 px-3 bg-[#e2dad1] hover:bg-[#d4cbbf] text-xs font-bold text-[#120e0b] rounded-xl flex items-center justify-center space-x-1 transition-colors"
                >
                  <Download size={13} />
                  <span>SVG</span>
                </button>
                <button
                  onClick={() => downloadPNG("#120e0b", "draxor-střiška-black.png")}
                  className="flex-1 py-2 px-3 bg-[#120e0b] hover:bg-[#201913] text-xs font-bold text-[#f5f2ed] rounded-xl flex items-center justify-center space-x-1 transition-colors"
                >
                  <Download size={13} />
                  <span>PNG</span>
                </button>
              </div>
            </div>

            {/* Full Logo with Typography */}
            <div className="bg-[#100c09] p-4 rounded-2xl border border-[#3d2e1e]/60 flex flex-col items-center text-center">
              <div className="w-full h-24 flex items-center justify-center px-2 mb-3">
                <div className="flex items-center space-x-2">
                  <svg viewBox="0 0 100 100" className="w-8 h-8 flex-shrink-0">
                    <path
                      d="M16 66 L50 26 L84 66"
                      stroke="#d8a876"
                      strokeWidth="9"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      fill="none"
                    />
                  </svg>
                  <span className="font-black text-xl tracking-tight text-[#fbf8f5]">DRAXOR</span>
                </div>
              </div>
              <span className="font-bold text-sm text-[#f5f2ed] mb-1">Logo s nápisem</span>
              <span className="text-[11px] text-[#8f8274] mb-3">Kompletní značka</span>
              <div className="flex space-x-2 w-full mt-auto">
                <button
                  onClick={() => downloadFile("/draxor-full-logo.svg", "draxor-kompletni-logo.svg")}
                  className="flex-1 py-2 px-3 bg-[#221a14] hover:bg-[#2e231b] border border-[#c59b6d]/30 text-xs font-bold text-[#d8a876] rounded-xl flex items-center justify-center space-x-1 transition-colors"
                >
                  <Download size={13} />
                  <span>SVG</span>
                </button>
                <button
                  onClick={() => downloadPNG("#d8a876", "draxor-kompletni-logo.png", true)}
                  className="flex-1 py-2 px-3 bg-[#c59b6d] hover:bg-[#d8a876] text-xs font-bold text-[#120e0b] rounded-xl flex items-center justify-center space-x-1 transition-colors"
                >
                  <Download size={13} />
                  <span>PNG</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

const Footer = ({ onOpenLogoDownload }: { onOpenLogoDownload: () => void }) => (
  <footer className="bg-[#0a0806] text-[#f5f2ed] py-16 border-t border-[#261d14]">
    <div className="container mx-auto px-6">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="space-y-4">
          <div className="flex items-center space-x-3">
            <DraxorLogo className="w-8 h-8" />
            <span className="text-xl font-black tracking-tighter text-[#fbf8f5]">DRAXOR</span>
          </div>
          <p className="text-[#b8aea2] text-sm leading-relaxed font-light">
            Tvoříme vaši vizi ve dřevě a kovu s precizností a vášní. Od nadčasových dřevostaveb po moderní hliníkové konstrukce a akustické prvky.
          </p>
          <div className="pt-2 flex flex-wrap gap-2">
            <button
              onClick={onOpenLogoDownload}
              className="inline-flex items-center space-x-2 bg-[#18130e] hover:bg-[#241c14] border border-[#c59b6d]/35 hover:border-[#c59b6d] px-3.5 py-2 rounded-xl text-xs font-bold text-[#d8a876] transition-all"
            >
              <Download size={13} />
              <span>Stáhnout logo</span>
            </button>
          </div>
          <div className="flex space-x-4 pt-2">
            <a
              href="#"
              aria-label="Facebook"
              className="w-9 h-9 rounded-full bg-[#18130e] border border-[#3d2e1e]/60 flex items-center justify-center text-[#b8aea2] hover:text-[#d8a876] hover:border-[#c59b6d]/40 transition-colors"
            >
              <Facebook size={16} />
            </a>
            <a
              href="#"
              aria-label="Instagram"
              className="w-9 h-9 rounded-full bg-[#18130e] border border-[#3d2e1e]/60 flex items-center justify-center text-[#b8aea2] hover:text-[#d8a876] hover:border-[#c59b6d]/40 transition-colors"
            >
              <Instagram size={16} />
            </a>
            <a
              href="#"
              aria-label="Twitter"
              className="w-9 h-9 rounded-full bg-[#18130e] border border-[#3d2e1e]/60 flex items-center justify-center text-[#b8aea2] hover:text-[#d8a876] hover:border-[#c59b6d]/40 transition-colors"
            >
              <Twitter size={16} />
            </a>
          </div>
        </div>

        <div>
          <h4 className="text-sm font-bold mb-6 font-headline uppercase tracking-widest text-[#d8a876]">Navigace</h4>
          <ul className="space-y-3 text-sm text-[#b8aea2] font-light">
            <li>
              <a href="#produkty" className="hover:text-[#d8a876] transition-colors">
                Produkty
              </a>
            </li>
            <li>
              <a href="#galerie" className="hover:text-[#d8a876] transition-colors">
                Galerie
              </a>
            </li>
            <li>
              <a href="#materialy" className="hover:text-[#d8a876] transition-colors">
                Materiály
              </a>
            </li>
            <li>
              <a href="#blog" className="hover:text-[#d8a876] transition-colors">
                Blog & Tipy
              </a>
            </li>
            <li>
              <a href="#poptavka" className="hover:text-[#d8a876] transition-colors">
                Nezávazná poptávka
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-bold mb-6 font-headline uppercase tracking-widest text-[#d8a876]">Služby</h4>
          <ul className="space-y-3 text-sm text-[#b8aea2] font-light">
            <li>
              <a href="#produkty" className="hover:text-[#d8a876] transition-colors">
                Dřevostavby na klíč
              </a>
            </li>
            <li>
              <a href="#produkty" className="hover:text-[#d8a876] transition-colors">
                Sruby a roubenky
              </a>
            </li>
            <li>
              <a href="#materialy" className="hover:text-[#d8a876] transition-colors">
                Hliníkové bioklimatické pergoly
              </a>
            </li>
            <li>
              <a href="#materialy" className="hover:text-[#d8a876] transition-colors">
                Kartáčované akustické panely
              </a>
            </li>
            <li>
              <a href="#poptavka" className="hover:text-[#d8a876] transition-colors">
                Architektonické 3D návrhy
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-bold mb-6 font-headline uppercase tracking-widest text-[#d8a876]">Kontakt</h4>
          <ul className="space-y-3 text-sm text-[#b8aea2] font-light">
            <li className="flex items-center space-x-3">
              <MapPin size={16} className="text-[#d8a876]" />
              <span>Brno, Česká republika</span>
            </li>
            <li className="flex items-center space-x-3">
              <Phone size={16} className="text-[#d8a876]" />
              <a href="tel:+420732527871" className="hover:text-[#d8a876] transition-colors">
                +420 732 527 871
              </a>
            </li>
            <li className="flex items-center space-x-3">
              <Mail size={16} className="text-[#d8a876]" />
              <a href="mailto:musillukas@icloud.com" className="hover:text-[#d8a876] transition-colors">
                musillukas@icloud.com
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="mt-16 pt-8 border-t border-[#261d14] flex flex-col sm:flex-row justify-between items-center text-xs text-[#8f8274] gap-4">
        <span>© {new Date().getFullYear()} DRAXOR.cz. Všechna práva vyhrazena.</span>
      </div>
    </div>
  </footer>
);

// --- Main App ---
export default function App() {
  const [logoModalOpen, setLogoModalOpen] = useState(false);

  return (
    <div className="bg-[#0d0b09] min-h-screen selection:bg-[#c59b6d] selection:text-[#120e0b] font-sans antialiased text-[#f5f2ed]">
      <Navbar onOpenLogoDownload={() => setLogoModalOpen(true)} />
      <main>
        <Hero />
        <Features />
        <FeaturedProducts />
        <MaterialsSection />
        <GallerySection />
        <BlogSection />
        <QuoteSection />
        <MapSection />
      </main>
      <Footer onOpenLogoDownload={() => setLogoModalOpen(true)} />
      <LogoDownloadModal isOpen={logoModalOpen} onClose={() => setLogoModalOpen(false)} />
    </div>
  );
}
