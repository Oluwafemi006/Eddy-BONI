import type { Language } from "@/i18n/LanguageContext";
import { fr } from "@/i18n/fr";
import { en } from "@/i18n/en";
import { CASE_STUDIES } from "@/content/caseStudies";
import { SERVICES } from "@/content/services";
import { pathFor, type Page } from "@/seo/routes";
import type { Crumb } from "@/components/layout/Breadcrumbs";

/** Breadcrumb trail shared by the visible navigation and the BreadcrumbList JSON-LD. */
export function breadcrumbsFor(page: Page, language: Language): Crumb[] {
  const t = language === "fr" ? fr : en;
  const home = pathFor({ kind: "home" }, language);
  switch (page.kind) {
    case "project":
      return [
        { name: t.caseStudy.breadcrumbHome, href: home },
        { name: t.caseStudy.breadcrumbSection, href: `${home}#projects` },
        { name: CASE_STUDIES[page.id].name },
      ];
    case "service":
      return [
        { name: t.servicePage.breadcrumbHome, href: home },
        { name: t.servicePage.breadcrumbSection, href: `${home}#services` },
        { name: SERVICES[page.id].content[language].h1 },
      ];
    default:
      return [];
  }
}
