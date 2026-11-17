export type Article = {
  slug: string;
  title: string;
  description: string;
  date: string;
  paragraphs: string[];
};

/** Zatím žádné články. Dokud je pole prázdné, blog není v navigaci ani v sitemapě. */
export const articles: Article[] = [];
