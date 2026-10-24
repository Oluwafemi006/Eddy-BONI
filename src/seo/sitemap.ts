import { absoluteUrl, allPages, LANGUAGES, pathFor } from "@/seo/routes";

export function buildSitemap(lastmod: string): string {
  const urls = allPages().map(({ page, path }) => {
    const alternates = [
      ...LANGUAGES.map((lang) => ({ hreflang: lang, href: absoluteUrl(pathFor(page, lang)) })),
      { hreflang: "x-default", href: absoluteUrl(pathFor(page, "fr")) },
    ];
    return [
      "  <url>",
      `    <loc>${absoluteUrl(path)}</loc>`,
      `    <lastmod>${lastmod}</lastmod>`,
      ...alternates.map((alt) => `    <xhtml:link rel="alternate" hreflang="${alt.hreflang}" href="${alt.href}" />`),
      "  </url>",
    ].join("\n");
  });

  return [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">',
    ...urls,
    "</urlset>",
    "",
  ].join("\n");
}
