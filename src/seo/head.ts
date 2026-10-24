import type { Language } from "@/i18n/LanguageContext";
import { fr } from "@/i18n/fr";
import { CASE_STUDIES } from "@/content/caseStudies";
import { SERVICES } from "@/content/services";
import { structuredData } from "@/seo/schema";
import { PORTRAIT } from "@/content/portrait";
import { absoluteUrl, LANGUAGES, pathFor, SITE_URL, type Page } from "@/seo/routes";

const HOME_META: Record<Language, { title: string; description: string }> = {
  fr: {
    title: "Eddy Boni | Développeur Full-Stack Django, React & Flutter — Bénin",
    description:
      "Eddy Boni, développeur full-stack basé à Cotonou (Bénin). Applications web avec Django/DRF, React et Next.js, et mobiles avec Flutter. Disponible en freelance et en remote.",
  },
  en: {
    title: "Eddy Boni | Full-Stack Developer — Django, React & Flutter — Benin",
    description:
      "Eddy Boni, full-stack developer based in Cotonou, Benin. Web apps with Django/DRF, React and Next.js, and mobile apps with Flutter. Available for freelance and remote work.",
  },
};

const OG_LOCALES: Record<Language, string> = { fr: "fr_FR", en: "en_US" };
// Default share image per language. Bump OG_VERSION when the images change: the new URL makes
// LinkedIn, Facebook and WhatsApp fetch the image again instead of showing their cached copy.
const OG_VERSION = "2";
const DEFAULT_OG_IMAGES: Record<Language, string> = {
  fr: `/opengraph.jpg?v=${OG_VERSION}`,
  en: `/opengraph-en.jpg?v=${OG_VERSION}`,
};

function pageMeta(page: Page, language: Language) {
  switch (page.kind) {
    case "home":
      return { ...HOME_META[language], image: DEFAULT_OG_IMAGES[language] };
    case "project": {
      const study = CASE_STUDIES[page.id];
      const content = study.content[language];
      return { title: content.metaTitle, description: content.metaDescription, image: study.ogImage ?? DEFAULT_OG_IMAGES[language] };
    }
    case "service": {
      const content = SERVICES[page.id].content[language];
      return { title: content.metaTitle, description: content.metaDescription, image: DEFAULT_OG_IMAGES[language] };
    }
    case "notFound":
      return { title: `${fr.notFound.title} | Eddy Boni`, description: fr.notFound.description, image: DEFAULT_OG_IMAGES.fr };
  }
}

function escapeHtml(value: string): string {
  return value.replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}

const meta = (attr: "name" | "property", key: string, content: string) =>
  `<meta ${attr}="${key}" content="${escapeHtml(content)}" />`;

/** All page-specific <head> tags: title, description, canonical, hreflang, Open Graph, Twitter and JSON-LD. */
export function buildHead(page: Page, language: Language): string {
  const { title, description, image } = pageMeta(page, language);
  const indexable = page.kind !== "notFound";
  const url = absoluteUrl(pathFor(page, language));
  const imageUrl = image.startsWith("http") ? image : `${SITE_URL}${image}`;

  const tags = [
    `<title>${escapeHtml(title)}</title>`,
    meta("name", "description", description),
    meta("name", "robots", indexable ? "index, follow, max-image-preview:large" : "noindex, follow"),
  ];

  if (indexable) {
    tags.push(`<link rel="canonical" href="${url}" />`);
    for (const lang of LANGUAGES) {
      tags.push(`<link rel="alternate" hreflang="${lang}" href="${absoluteUrl(pathFor(page, lang))}" />`);
    }
    tags.push(`<link rel="alternate" hreflang="x-default" href="${absoluteUrl(pathFor(page, "fr"))}" />`);
  }

  tags.push(
    meta("property", "og:type", page.kind === "project" ? "article" : "website"),
    meta("property", "og:site_name", "Eddy Boni"),
    meta("property", "og:locale", OG_LOCALES[language]),
    ...LANGUAGES.filter((lang) => lang !== language).map((lang) => meta("property", "og:locale:alternate", OG_LOCALES[lang])),
    meta("property", "og:title", title),
    meta("property", "og:description", description),
    meta("property", "og:image", imageUrl),
    meta("property", "og:image:width", "1200"),
    meta("property", "og:image:height", "630"),
    meta("property", "og:image:alt", title),
    meta("name", "twitter:card", "summary_large_image"),
    meta("name", "twitter:title", title),
    meta("name", "twitter:description", description),
    meta("name", "twitter:image", imageUrl),
  );
  if (indexable) tags.push(meta("property", "og:url", url));

  if (page.kind === "home") {
    // The portrait is the largest image above the fold: start downloading it with the HTML.
    tags.push(
      `<link rel="preload" as="image" type="image/avif" imagesrcset="${PORTRAIT.avif}" imagesizes="${PORTRAIT.sizes}" fetchpriority="high" />`,
    );
  }

  const data = structuredData(page, language);
  if (data) {
    // Escape "<" so the JSON can never close the <script> tag early.
    tags.push(`<script type="application/ld+json">${JSON.stringify(data).replace(/</g, "\\u003c")}</script>`);
  }

  return tags.map((tag) => `    ${tag}`).join("\n");
}
