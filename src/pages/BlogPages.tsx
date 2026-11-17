import type { Article } from "../content/articles";
import { articles } from "../content/articles";

export function BlogIndex() {
  return (
    <article className="pt-32 pb-20">
      <div className="container mx-auto px-6 max-w-3xl">
        <p className="text-xs uppercase tracking-[0.2em] text-[#d8a876] font-bold mb-3">DRAXOR</p>
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight font-headline uppercase text-[#fbf8f5] mb-6">
          Blog
        </h1>
        {articles.length === 0 ? (
          <p className="text-[#d6cec3] text-base leading-relaxed font-light">
            Články připravujeme. Brzy sem přibudou texty o chatách, srubech a dřevostavbách na jižní Moravě.
          </p>
        ) : (
          <ul className="space-y-6">
            {articles.map((article) => (
              <li key={article.slug}>
                <a href={`/blog/${article.slug}`} className="text-[#fbf8f5] hover:text-[#d8a876] font-bold">
                  {article.title}
                </a>
                <p className="text-sm text-[#b8aea2] mt-1">{article.description}</p>
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
        <p className="text-xs uppercase tracking-[0.2em] text-[#d8a876] font-bold mb-3">{article.date}</p>
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight font-headline uppercase text-[#fbf8f5] mb-8">
          {article.title}
        </h1>
        <div className="space-y-5 text-[#d6cec3] text-base leading-relaxed font-light">
          {article.paragraphs.map((paragraph) => (
            <p key={paragraph.slice(0, 32)}>{paragraph}</p>
          ))}
        </div>
      </div>
    </article>
  );
}
