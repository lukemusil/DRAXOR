import { RichText } from "../components/RichText";
import type { Article, ArticleBlock } from "../content/articles";
import { articles } from "../content/articles";

function Blocks({ blocks }: { blocks: ArticleBlock[] }) {
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
        if (block.t === "ul") {
          return (
            <ul key={index} className="list-disc space-y-2 pl-5">
              {block.items.map((item) => (
                <li key={item}>
                  <RichText text={item} />
                </li>
              ))}
            </ul>
          );
        }
        if (block.t === "ol") {
          return (
            <ol key={index} className="list-decimal space-y-2 pl-5">
              {block.items.map((item) => (
                <li key={item}>
                  <RichText text={item} />
                </li>
              ))}
            </ol>
          );
        }
        return (
          <p key={index}>
            <RichText text={block.text} />
          </p>
        );
      })}
    </div>
  );
}

export function BlogIndex() {
  const listed = [...articles].sort(
    (a, b) => b.date.localeCompare(a.date) || a.slug.localeCompare(b.slug, "cs"),
  );
  return (
    <article className="pt-32 pb-20">
      <div className="container mx-auto px-6 max-w-3xl">
        <p className="text-xs uppercase tracking-[0.2em] text-[#d8a876] font-bold mb-3">DRAXOR</p>
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight font-headline text-[#fbf8f5] mb-6">Blog</h1>
        {articles.length === 0 ? (
          <p className="text-[#d6cec3] text-base leading-relaxed font-light">
            Články připravujeme. Brzy sem přibudou texty o chatách, srubech a dřevostavbách na jižní Moravě.
          </p>
        ) : (
          <ul className="space-y-8">
            {listed.map((article) => (
              <li key={article.slug}>
                <p className="text-xs uppercase tracking-[0.16em] text-[#d8a876] mb-2">{article.date}</p>
                <a href={`/blog/${article.slug}`} className="text-2xl font-bold text-[#fbf8f5] hover:text-[#d8a876]">
                  {article.h1}
                </a>
                <p className="text-[#b8aea2] mt-2 font-light leading-relaxed">{article.description}</p>
              </li>
            ))}
          </ul>
        )}
      </div>
    </article>
  );
}

export function BlogArticle({ article }: { article: Article }) {
  return (
    <article className="pt-32 pb-20">
      <div className="container mx-auto px-6 max-w-3xl">
        <p className="text-xs uppercase tracking-[0.2em] text-[#d8a876] font-bold mb-3">
          <a href="/blog" className="hover:text-[#f5eee6]">
            Blog
          </a>
          <span className="mx-2 text-[#8a7d70]">/</span>
          {article.date}
        </p>
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight font-headline text-[#fbf8f5] mb-6">{article.h1}</h1>
        <p className="text-lg text-[#e6d9c8] leading-relaxed font-light mb-10">
          <RichText text={article.perex} />
        </p>
        <Blocks blocks={article.lead} />
        <h2 className="pt-8 text-2xl font-bold font-headline uppercase tracking-tight text-[#fbf8f5] mb-6">
          Časté otázky
        </h2>
        <div className="space-y-6">
          {article.faqs.map((faq) => (
            <section key={faq.q}>
              <h3 className="text-lg font-bold text-[#fbf8f5] mb-2">{faq.q}</h3>
              <p className="text-[#d6cec3] text-sm leading-relaxed font-light">
                <RichText text={faq.a} />
              </p>
            </section>
          ))}
        </div>
        <div className="mt-12">
          <Blocks blocks={article.closing} />
        </div>
      </div>
    </article>
  );
}
