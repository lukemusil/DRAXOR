import { ArrowRight } from "lucide-react";
import { ResponsiveImage } from "../components/ResponsiveImage";
import type { Block, ProductPageData } from "../content/products";
import { images } from "../image-manifest";
import { siteConfig } from "../site.config";

function Rich({ text, inquiryHref }: { text: string; inquiryHref: string }) {
  const phone = siteConfig.phoneDisplay;
  const chunks = text.split(/(\*\*[^*]+\*\*)/g);
  return (
    <>
      {chunks.map((chunk, index) => {
        const plain = chunk.startsWith("**") && chunk.endsWith("**") ? chunk.slice(2, -2) : chunk;
        const strong = chunk !== plain;
        const withPhone = plain.includes(phone) ? (
          <>
            {plain.split(phone)[0]}
            <a href={`tel:${siteConfig.phoneTel}`} className="text-[#d8a876] underline underline-offset-4">
              {phone}
            </a>
            {plain.split(phone)[1]}
          </>
        ) : plain.includes("poptávkový formulář") ? (
          <>
            {plain.split("poptávkový formulář")[0]}
            <a href={inquiryHref} className="text-[#d8a876] underline underline-offset-4">
              poptávkový formulář
            </a>
            {plain.split("poptávkový formulář")[1]}
          </>
        ) : (
          plain
        );
        return strong ? (
          <strong key={index} className="font-semibold text-[#f5eee6]">
            {withPhone}
          </strong>
        ) : (
          <span key={index}>{withPhone}</span>
        );
      })}
    </>
  );
}

function Blocks({ blocks, inquiryHref }: { blocks: Block[]; inquiryHref: string }) {
  return (
    <div className="space-y-5 text-[#d6cec3] text-base leading-relaxed font-light">
      {blocks.map((block, index) => {
        if (block.t === "h2") {
          return (
            <h2
              key={index}
              className="pt-4 text-2xl font-bold font-headline uppercase tracking-tight text-[#fbf8f5]"
            >
              {block.text}
            </h2>
          );
        }
        if (block.t === "p") {
          return (
            <p key={index}>
              <Rich text={block.text} inquiryHref={inquiryHref} />
            </p>
          );
        }
        if (block.t === "ul") {
          return (
            <ul key={index} className="list-disc space-y-2 pl-5">
              {block.items.map((item) => (
                <li key={item}>
                  <Rich text={item} inquiryHref={inquiryHref} />
                </li>
              ))}
            </ul>
          );
        }
        return (
          <ol key={index} className="list-decimal space-y-2 pl-5">
            {block.items.map((item) => (
              <li key={item}>
                <Rich text={item} inquiryHref={inquiryHref} />
              </li>
            ))}
          </ol>
        );
      })}
    </div>
  );
}

export function ProductPage({ product }: { product: ProductPageData }) {
  const inquiryHref = `/?typ=${encodeURIComponent(product.buildingType)}#poptavka`;

  return (
    <article className="pt-32 pb-20">
      <div className="container mx-auto px-6 max-w-3xl">
        <p className="text-xs uppercase tracking-[0.2em] text-[#d8a876] font-bold mb-3">{product.eyebrow}</p>
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight font-headline text-[#fbf8f5] mb-8">
          {product.h1}
        </h1>
        <Blocks blocks={product.lead} inquiryHref={inquiryHref} />
      </div>

      {product.gallery.length > 0 && (
        <div className="container mx-auto px-6 mt-16">
          <h2 className="text-2xl font-bold font-headline uppercase tracking-tight text-[#fbf8f5] mb-6">Galerie</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {product.gallery.map((item) => (
              <div key={item.alt} className="overflow-hidden rounded-2xl border border-[#221c16] bg-[#0c0c0c]">
                <ResponsiveImage
                  image={images[item.image]}
                  alt={item.alt}
                  sizes="(min-width: 640px) 50vw, 100vw"
                  className="aspect-[4/3] w-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      )}

      <div className="container mx-auto px-6 max-w-3xl mt-16">
        <h2 className="text-2xl font-bold font-headline uppercase tracking-tight text-[#fbf8f5] mb-6">Časté otázky</h2>
        <div className="space-y-6">
          {product.faqs.map((faq) => (
            <section key={faq.q}>
              <h3 className="text-lg font-bold text-[#fbf8f5] mb-2">{faq.q}</h3>
              <p className="text-[#d6cec3] text-sm leading-relaxed font-light">{faq.a}</p>
            </section>
          ))}
        </div>
        <div className="mt-14">
          <Blocks blocks={product.closing} inquiryHref={inquiryHref} />
          <a
            href={inquiryHref}
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-[#c59b6d] px-6 py-3 text-sm font-bold uppercase tracking-wider text-[#120e0b] hover:bg-[#d8a876]"
          >
            Poptat {product.buildingType.toLowerCase()}
            <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </article>
  );
}
