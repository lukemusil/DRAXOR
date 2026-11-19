import { siteConfig } from "../site.config";

const TOKEN = /(\*\*[^*]+\*\*|\[[^\]]+\]\([^)\s]+\))/g;

function withPhone(text: string) {
  const phone = siteConfig.phoneDisplay;
  if (!text.includes(phone)) return text;
  const [before, after] = text.split(phone);
  return (
    <>
      {before}
      <a href={`tel:${siteConfig.phoneTel}`} className="text-[#d8a876] underline underline-offset-4">
        {phone}
      </a>
      {after}
    </>
  );
}

/** Tučný text, telefon a interní odkazy ve tvaru [text](/cesta). */
export function RichText({ text }: { text: string }) {
  const parts = text.split(TOKEN);
  return (
    <>
      {parts.map((part, index) => {
        if (part.startsWith("**") && part.endsWith("**")) {
          return (
            <strong key={index} className="font-semibold text-[#f5eee6]">
              {withPhone(part.slice(2, -2))}
            </strong>
          );
        }
        const link = part.match(/^\[([^\]]+)\]\(([^)]+)\)$/);
        if (link) {
          return (
            <a key={index} href={link[2]} className="text-[#d8a876] underline underline-offset-4">
              {link[1]}
            </a>
          );
        }
        return <span key={index}>{withPhone(part)}</span>;
      })}
    </>
  );
}
