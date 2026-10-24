import type { Language } from "@/i18n/LanguageContext";
import { CASE_STUDIES, type CaseStudyId } from "@/content/caseStudies";
import { SERVICES, type ServiceId } from "@/content/services";

export const SITE_URL = "https://bonieddy.netlify.app";
export const LANGUAGES: Language[] = ["fr", "en"];

export type Page =
  | { kind: "home" }
  | { kind: "project"; id: CaseStudyId }
  | { kind: "service"; id: ServiceId }
  | { kind: "notFound" };

const SECTION_SEGMENTS = {
  project: { fr: "projets", en: "projects" },
  service: { fr: "services", en: "services" },
} as const;

const HOME_PATHS: Record<Language, string> = { fr: "/", en: "/en/" };

export function pathFor(page: Page, language: Language): string {
  const prefix = language === "en" ? "/en" : "";
  switch (page.kind) {
    case "home":
    case "notFound":
      return HOME_PATHS[language];
    case "project":
      return `${prefix}/${SECTION_SEGMENTS.project[language]}/${CASE_STUDIES[page.id].slug}`;
    case "service":
      return `${prefix}/${SECTION_SEGMENTS.service[language]}/${SERVICES[page.id].slug[language]}`;
  }
}

export function absoluteUrl(path: string): string {
  return `${SITE_URL}${path}`;
}

/** Every indexable page, in both languages. Used by the prerender script and the sitemap. */
export function allPages(): { page: Page; language: Language; path: string }[] {
  const pages: Page[] = [
    { kind: "home" },
    ...(Object.keys(CASE_STUDIES) as CaseStudyId[]).map((id) => ({ kind: "project" as const, id })),
    ...(Object.keys(SERVICES) as ServiceId[]).map((id) => ({ kind: "service" as const, id })),
  ];
  return pages.flatMap((page) =>
    LANGUAGES.map((language) => ({ page, language, path: pathFor(page, language) })),
  );
}

function normalize(pathname: string): string {
  let path = pathname.replace(/\.html$/, "").replace(/\/index$/, "/");
  if (path.length > 1 && path.endsWith("/")) path = path.slice(0, -1);
  return path || "/";
}

export function matchPath(pathname: string): { page: Page; language: Language } {
  const path = normalize(pathname);
  for (const entry of allPages()) {
    if (normalize(entry.path) === path) return { page: entry.page, language: entry.language };
  }
  // 404.html is a single French file, so unmatched paths always render in French.
  return { page: { kind: "notFound" }, language: "fr" };
}
