import type { Language } from "@/i18n/LanguageContext";

type Localized<T> = Record<Language, T>;

export type Screenshot = {
  /** Path under /public, e.g. "/projets/axis-transport/accueil.webp" */
  src: string;
  width: number;
  height: number;
  alt: Localized<string>;
};

export type CaseStudyContent = {
  metaTitle: string;
  metaDescription: string;
  h1: string;
  summary: string;
  status: string;
  context: string[];
  /** null = not written yet: the section is hidden on the page. */
  problem: string[] | null;
  role: string[] | null;
  features: string[];
};

export type CaseStudy = {
  slug: string;
  name: string;
  liveUrl: string;
  stack: string[];
  /** Dedicated 1200x630 JPG/PNG for social sharing; falls back to /opengraph.jpg. */
  ogImage?: string;
  /** The first screenshot is the main image (loaded eagerly), the others are lazy-loaded. */
  screenshots: Screenshot[];
  content: Localized<CaseStudyContent>;
};

export type CaseStudyId = "axis-transport" | "sd-international-group";

export const CASE_STUDIES: Record<CaseStudyId, CaseStudy> = {
  "axis-transport": {
    slug: "axis-transport",
    name: "Axis Transport",
    liveUrl: "https://axistransportlogistique.com/",
    // TODO: confirm Next.js for the web front-end (detected from the live site's x-powered-by header) and add the database.
    stack: ["Django", "Django REST Framework", "Flutter", "Next.js"],
    // TODO: add og-image.jpg (1200x630) to /public/projets/axis-transport/ and set ogImage.
    // TODO: add WebP screenshots to /public/projets/axis-transport/, e.g.:
    //   { src: "/projets/axis-transport/accueil.webp", width: 1440, height: 900, alt: { fr: "Page d'accueil d'Axis Transport", en: "Axis Transport home page" } },
    //   { src: "/projets/axis-transport/reservation.webp", ... }, { src: "/projets/axis-transport/suivi-colis.webp", ... },
    //   { src: "/projets/axis-transport/app-mobile.webp", ... }
    screenshots: [],
    content: {
      fr: {
        metaTitle: "Axis Transport : plateforme web Django et app mobile Flutter | Eddy Boni",
        metaDescription:
          "Étude de cas : plateforme de transport sur l'axe Parakou – Cotonou (Bénin). Billetterie de bus, envoi et suivi de colis, location. Django/DRF et Flutter.",
        h1: "Axis Transport : billetterie, colis et location de véhicules",
        summary:
          "Plateforme de transport sur l'axe Parakou – Cotonou : billetterie de bus, envoi et suivi de colis, location de véhicules. Backend Django/DRF, application web en production et application mobile Flutter en phase de test.",
        status: "Web en production · Mobile (Flutter) en phase de test",
        context: [
          "Axis Transport est une compagnie de transport qui opère sur l'axe Parakou – Savè – Kétou – Porto-Novo – Cotonou, au Bénin.",
          "Son activité réunit trois services : le transport de voyageurs en bus, l'envoi de colis et la location de véhicules.",
        ],
        // TODO: describe the client's problem before the project.
        problem: null,
        // TODO: describe my role on the project.
        role: null,
        features: [
          "Billetterie de bus : réservation de billets en ligne",
          "Envoi de colis avec suivi",
          "Location de véhicules",
          "Espace client avec connexion et profil",
          "Backend Django / Django REST Framework",
          "Application mobile Flutter, actuellement en phase de test",
        ],
      },
      en: {
        metaTitle: "Axis Transport: Django web platform and Flutter mobile app | Eddy Boni",
        metaDescription:
          "Case study: transport platform on the Parakou – Cotonou route in Benin. Bus ticketing, parcel shipping and tracking, vehicle rental. Django/DRF and Flutter.",
        h1: "Axis Transport: bus tickets, parcels and vehicle rental",
        summary:
          "Transport platform on the Parakou – Cotonou route: bus ticketing, parcel shipping and tracking, and vehicle rental. Django/DRF back end, web app live in production, Flutter mobile app in testing.",
        status: "Web live in production · Mobile (Flutter) in testing",
        context: [
          "Axis Transport is a transport company operating on the Parakou – Savè – Kétou – Porto-Novo – Cotonou route in Benin.",
          "The business combines three services: bus passenger transport, parcel shipping, and vehicle rental.",
        ],
        problem: null,
        role: null,
        features: [
          "Bus ticketing: online ticket booking",
          "Parcel shipping with tracking",
          "Vehicle rental",
          "Customer accounts with login and profile",
          "Django / Django REST Framework back end",
          "Flutter mobile app, currently in testing",
        ],
      },
    },
  },
  "sd-international-group": {
    slug: "sd-international-group",
    name: "SD International Group",
    liveUrl: "https://www.sd-internationalgroup.com/",
    stack: ["Next.js", "i18n FR/EN", "SEO", "Open Graph"],
    // TODO: add og-image.jpg (1200x630) to /public/projets/sd-international-group/ and set ogImage.
    // TODO: add WebP screenshots to /public/projets/sd-international-group/, e.g.:
    //   { src: "/projets/sd-international-group/accueil.webp", width: 1440, height: 900, alt: { fr: "Page d'accueil de SD International Group", en: "SD International Group home page" } },
    //   { src: "/projets/sd-international-group/services.webp", ... }, { src: "/projets/sd-international-group/mobile.webp", ... }
    screenshots: [],
    content: {
      fr: {
        metaTitle: "SD International Group : site corporate Next.js bilingue | Eddy Boni",
        metaDescription:
          "Étude de cas : site vitrine Next.js bilingue FR/EN pour SD International Group, groupe multisectoriel basé à Cotonou (BTP, énergie, logistique).",
        h1: "SD International Group : site corporate bilingue FR/EN",
        summary:
          "Site vitrine bilingue FR/EN développé avec Next.js pour un groupe multisectoriel basé à Cotonou : BTP, énergie, logistique et import-export.",
        status: "En production",
        context: [
          "SD International Group est une entreprise multisectorielle basée à Cotonou, au Bénin.",
          "Ses activités couvrent le BTP et le génie civil, les réseaux électriques, l'énergie solaire, la logistique et l'import-export.",
        ],
        // TODO: describe the client's problem before the project.
        problem: null,
        // TODO: describe my role on the project.
        role: null,
        features: [
          "Site vitrine développé avec Next.js",
          "Contenu bilingue français / anglais avec sélecteur de langue",
          "Pages dédiées à chaque pôle de services",
          "Pages HSE & qualité et contact",
          "SEO on-page : balises meta et Open Graph",
          "Image Open Graph générée pour le partage sur les réseaux sociaux",
        ],
      },
      en: {
        metaTitle: "SD International Group: bilingual Next.js corporate website | Eddy Boni",
        metaDescription:
          "Case study: bilingual FR/EN Next.js corporate website for SD International Group, a multi-sector group based in Cotonou (construction, energy, logistics).",
        h1: "SD International Group: bilingual FR/EN corporate website",
        summary:
          "Bilingual FR/EN corporate website built with Next.js for a multi-sector group based in Cotonou: construction, energy, logistics, and import-export.",
        status: "Live",
        context: [
          "SD International Group is a multi-sector company based in Cotonou, Benin.",
          "Its activities span construction and civil engineering, electrical networks, solar energy, logistics, and import-export.",
        ],
        problem: null,
        role: null,
        features: [
          "Corporate website built with Next.js",
          "Bilingual French / English content with a language switcher",
          "Dedicated pages for each business line",
          "HSE & quality and contact pages",
          "On-page SEO: meta tags and Open Graph",
          "Generated Open Graph image for social sharing",
        ],
      },
    },
  },
};
