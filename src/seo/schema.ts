import type { Language } from "@/i18n/LanguageContext";
import { fr } from "@/i18n/fr";
import { en } from "@/i18n/en";
import { CASE_STUDIES } from "@/content/caseStudies";
import { SERVICES } from "@/content/services";
import { OFFER_LINKS } from "@/content/offers";
import { breadcrumbsFor } from "@/seo/breadcrumbs";
import { absoluteUrl, pathFor, SITE_URL, type Page } from "@/seo/routes";

type Node = Record<string, unknown>;

const PERSON_ID = `${SITE_URL}/#person`;
const ADDRESS = { "@type": "PostalAddress", addressLocality: "Cotonou", addressCountry: "BJ" };

function person(language: Language): Node {
  return {
    "@type": "Person",
    "@id": PERSON_ID,
    name: "Eddy Boni",
    alternateName: "BONI Adjé Oladjidé Kenneth Eddy",
    jobTitle: language === "fr" ? "Développeur Full-Stack" : "Full-Stack Developer",
    url: absoluteUrl(pathFor({ kind: "home" }, language)),
    email: "mailto:eddybaoke@gmail.com",
    image: `${SITE_URL}/opengraph.jpg`,
    address: ADDRESS,
    knowsAbout: [
      "Django",
      "Django REST Framework",
      "Python",
      "React",
      "Next.js",
      "TypeScript",
      "PostgreSQL",
      "Flutter",
    ],
    knowsLanguage: ["fr", "en"],
    // Occupation rather than worksFor: the Talenex relationship is a technical partnership, not employment.
    hasOccupation: {
      "@type": "Occupation",
      name: language === "fr" ? "Développeur Full-Stack" : "Full-Stack Developer",
      occupationLocation: { "@type": "City", name: "Cotonou" },
      skills: "Django, Django REST Framework, React, Next.js, TypeScript, PostgreSQL, Flutter",
    },
    hasCredential: {
      "@type": "EducationalOccupationalCredential",
      credentialCategory: "degree",
      name:
        language === "fr"
          ? "Licence Professionnelle Informatique de Gestion"
          : "Professional Bachelor's degree in Business Computing",
      recognizedBy: { "@type": "CollegeOrUniversity", name: "IUT de Parakou" },
      dateCreated: "2026",
    },
    alumniOf: {
      "@type": "CollegeOrUniversity",
      name: "IUT de Parakou",
      parentOrganization: { "@type": "CollegeOrUniversity", name: "Université de Parakou" },
    },
    brand: { "@type": "Brand", name: "EdDigital" },
    sameAs: [
      "https://github.com/Oluwafemi006",
      "https://www.linkedin.com/in/adjé-oladjidé-kenneth-eddy-boni-6794512b3/",
    ],
  };
}

const AUTHOR = { "@type": "Person", "@id": PERSON_ID, name: "Eddy Boni" };

function breadcrumbList(page: Page, language: Language): Node {
  return {
    "@type": "BreadcrumbList",
    itemListElement: breadcrumbsFor(page, language).map((crumb, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: crumb.name,
      item: crumb.href ? absoluteUrl(crumb.href) : absoluteUrl(pathFor(page, language)),
    })),
  };
}

function homeNodes(language: Language): Node[] {
  const t = language === "fr" ? fr : en;
  const url = absoluteUrl(pathFor({ kind: "home" }, language));
  return [
    {
      "@type": "WebSite",
      "@id": `${url}#website`,
      url,
      name: "Eddy Boni",
      inLanguage: language,
      author: { "@id": PERSON_ID },
    },
    {
      "@type": "ProfessionalService",
      name: "EdDigital",
      url,
      image: `${SITE_URL}/opengraph.jpg`,
      founder: { "@id": PERSON_ID },
      address: ADDRESS,
      email: "mailto:eddybaoke@gmail.com",
      areaServed: "Worldwide",
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: `${t.services.titlePrefix} ${t.services.titleHighlight}`,
        itemListElement: t.services.items.map((offer) => ({
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: offer.title,
            description: offer.outcome,
            url: absoluteUrl(pathFor({ kind: "service", id: OFFER_LINKS[offer.id].page }, language)),
          },
        })),
      },
    },
    {
      "@type": "FAQPage",
      inLanguage: language,
      mainEntity: t.faq.items.map((item) => ({
        "@type": "Question",
        name: item.question,
        acceptedAnswer: { "@type": "Answer", text: item.answer },
      })),
    },
  ];
}

export function structuredData(page: Page, language: Language): Node | null {
  if (page.kind === "notFound") return null;

  const nodes: Node[] = [person(language)];
  const url = absoluteUrl(pathFor(page, language));

  if (page.kind === "home") {
    nodes.push(...homeNodes(language));
  } else if (page.kind === "project") {
    const study = CASE_STUDIES[page.id];
    const content = study.content[language];
    nodes.push(
      {
        "@type": "CreativeWork",
        name: study.name,
        headline: content.h1,
        description: content.summary,
        url: study.liveUrl,
        mainEntityOfPage: url,
        author: AUTHOR,
        inLanguage: language,
        keywords: study.stack.join(", "),
        creativeWorkStatus: content.status,
        ...(study.ogImage && { image: absoluteUrl(study.ogImage) }),
      },
      breadcrumbList(page, language),
    );
  } else {
    const service = SERVICES[page.id];
    const content = service.content[language];
    nodes.push(
      {
        "@type": "ProfessionalService",
        name: content.h1,
        description: content.metaDescription,
        url,
        image: `${SITE_URL}/opengraph.jpg`,
        serviceType: service.serviceType[language],
        provider: AUTHOR,
        address: ADDRESS,
        areaServed: service.scope === "local" ? { "@type": "Country", name: "Bénin" } : "Worldwide",
        availableLanguage: ["fr", "en"],
      },
      breadcrumbList(page, language),
    );
  }

  return { "@context": "https://schema.org", "@graph": nodes };
}
