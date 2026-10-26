import type { Language } from "@/i18n/LanguageContext";
import type { CaseStudyId } from "@/content/caseStudies";

type Localized<T> = Record<Language, T>;

export type RelatedWork =
  | { caseStudy: CaseStudyId; note: Localized<string> }
  | { name: string; url?: string; note: Localized<string> };

export type ServiceContent = {
  metaTitle: string;
  metaDescription: string;
  h1: string;
  intro: string[];
  offers: string[];
};

export type Service = {
  slug: Localized<string>;
  /** "local" pages target Benin; "worldwide" pages carry no geographic mention in their URL or H1. */
  scope: "local" | "worldwide";
  serviceType: Localized<string>;
  stack: string[];
  related: RelatedWork[];
  content: Localized<ServiceContent>;
};

export type ServiceId = "web" | "django" | "flutter" | "react-nextjs";

const AFRIRENT_URL = "https://afrirent.netlify.app";

export const SERVICES: Record<ServiceId, Service> = {
  // Formerly "web-benin" (/services/creation-site-web-benin): old URLs 301 to the new ones in netlify.toml.
  web: {
    slug: { fr: "creation-site-web", en: "website-development" },
    scope: "worldwide",
    serviceType: { fr: "Création de site web", en: "Website development" },
    stack: ["Next.js", "React", "Django", "PostgreSQL"],
    related: [
      {
        caseStudy: "sd-international-group",
        note: { fr: "Site corporate bilingue FR/EN, Cotonou", en: "Bilingual FR/EN corporate website, Cotonou" },
      },
      {
        caseStudy: "axis-transport",
        note: {
          fr: "Plateforme de billetterie, colis et location sur l'axe Parakou – Cotonou",
          en: "Ticketing, parcel and rental platform on the Parakou – Cotonou route",
        },
      },
    ],
    content: {
      fr: {
        metaTitle: "Création de site web et landing page | Eddy Boni, développeur",
        metaDescription:
          "Développeur full-stack freelance : sites web d'entreprise, landing pages et applications web avec Next.js, React et Django. Projets menés à distance.",
        h1: "Création de site web et landing page",
        intro: [
          "Je crée des sites web d'entreprise, des landing pages et des applications web : sites vitrines, plateformes de réservation, espaces clients.",
          "J'ai notamment réalisé le site de SD International Group et la plateforme Axis Transport.",
        ],
        offers: [
          "Sites web d'entreprise, bilingues français / anglais si besoin",
          "Landing pages pour lancer une offre et générer des demandes de contact",
          "Applications web sur mesure : réservation, espace client, back-office",
          "SEO technique : balises meta, Open Graph, sitemap",
          "Mise en ligne du site",
        ],
      },
      en: {
        metaTitle: "Website and landing page development | Eddy Boni, developer",
        metaDescription:
          "Freelance full-stack developer: corporate websites, landing pages and web applications built with Next.js, React and Django. Fully remote projects.",
        h1: "Website and landing page development",
        intro: [
          "I build corporate websites, landing pages and web applications: business websites, booking platforms, customer portals.",
          "Past work includes the SD International Group website and the Axis Transport platform.",
        ],
        offers: [
          "Corporate websites, bilingual French / English when needed",
          "Landing pages to launch an offer and generate leads",
          "Custom web applications: booking, customer accounts, back office",
          "Technical SEO: meta tags, Open Graph, sitemap",
          "Going live with your website",
        ],
      },
    },
  },
  django: {
    slug: { fr: "developpeur-django-freelance", en: "freelance-django-developer" },
    scope: "worldwide",
    serviceType: { fr: "Développement back-end Django", en: "Django back-end development" },
    stack: ["Python", "Django", "Django REST Framework", "PostgreSQL", "Docker", "Nginx"],
    related: [
      {
        caseStudy: "axis-transport",
        note: { fr: "Backend Django / Django REST Framework", en: "Django / Django REST Framework back end" },
      },
      {
        name: "AfriRent Marketplace",
        url: AFRIRENT_URL,
        note: { fr: "Marketplace de location : API Django REST", en: "Rental marketplace: Django REST API" },
      },
      {
        name: "Luxury Élégance Garage",
        note: {
          fr: "Système de gestion de garage (stage) : réservation en ligne et tableau de bord admin, Django REST Framework, React et PostgreSQL",
          en: "Garage management system (internship): online booking and admin dashboard, Django REST Framework, React and PostgreSQL",
        },
      },
    ],
    content: {
      fr: {
        metaTitle: "Développeur Django freelance (Django REST Framework) | Eddy Boni",
        metaDescription:
          "Développeur Django freelance : API REST avec Django REST Framework, back-ends d'applications web et mobiles, PostgreSQL. 100 % à distance.",
        h1: "Développeur Django freelance",
        intro: [
          "Je développe des back-ends et des API REST avec Python, Django et Django REST Framework, pour des applications web et mobiles.",
          "Je travaille 100 % à distance, en français ; échanges écrits possibles en anglais.",
        ],
        offers: [
          "API REST avec Django REST Framework",
          "Back-ends d'applications web et mobiles : authentification, permissions, back-office",
          "Modélisation de données et bases PostgreSQL",
          "Déploiement avec Docker et Nginx",
        ],
      },
      en: {
        metaTitle: "Freelance Django developer (Django REST Framework) | Eddy Boni",
        metaDescription:
          "Freelance Django developer: REST APIs with Django REST Framework, back ends for web and mobile apps, PostgreSQL. Fully remote.",
        h1: "Freelance Django developer",
        intro: [
          "I build back ends and REST APIs with Python, Django and Django REST Framework, for web and mobile applications.",
          "I work fully remotely, in French; written communication in English is possible.",
        ],
        offers: [
          "REST APIs with Django REST Framework",
          "Back ends for web and mobile apps: authentication, permissions, back office",
          "Data modeling and PostgreSQL databases",
          "Deployment with Docker and Nginx",
        ],
      },
    },
  },
  flutter: {
    slug: { fr: "developpeur-flutter-freelance", en: "freelance-flutter-developer" },
    scope: "worldwide",
    serviceType: { fr: "Développement d'applications mobiles Flutter", en: "Flutter mobile app development" },
    stack: ["Flutter", "Dart", "Django REST Framework"],
    related: [
      {
        caseStudy: "axis-transport",
        note: {
          fr: "Application mobile Flutter (Android et iOS)",
          en: "Flutter mobile app (Android and iOS)",
        },
      },
    ],
    content: {
      fr: {
        metaTitle: "Développeur Flutter freelance, apps iOS et Android | Eddy Boni",
        metaDescription:
          "Développeur Flutter freelance : applications mobiles iOS et Android à partir d'une seule base de code, connectées à une API REST. 100 % à distance.",
        h1: "Développeur Flutter freelance",
        intro: [
          "Je développe des applications mobiles iOS et Android avec Flutter, à partir d'une seule base de code, connectées à un back-end Django REST Framework ou à votre API existante.",
          "Je travaille 100 % à distance, en français ; échanges écrits possibles en anglais.",
        ],
        offers: [
          "Applications mobiles iOS et Android avec Flutter",
          "Connexion à une API REST",
          "Authentification et espace utilisateur",
          "Accompagnement jusqu'à la publication sur les stores",
        ],
      },
      en: {
        metaTitle: "Freelance Flutter developer, iOS and Android apps | Eddy Boni",
        metaDescription:
          "Freelance Flutter developer: iOS and Android mobile apps from a single codebase, connected to a REST API. Fully remote.",
        h1: "Freelance Flutter developer",
        intro: [
          "I build iOS and Android mobile apps with Flutter from a single codebase, connected to a Django REST Framework back end or to your existing API.",
          "I work fully remotely, in French; written communication in English is possible.",
        ],
        offers: [
          "iOS and Android mobile apps with Flutter",
          "REST API integration",
          "Authentication and user accounts",
          "Support through to app store release",
        ],
      },
    },
  },
  "react-nextjs": {
    slug: { fr: "developpeur-react-nextjs-freelance", en: "freelance-react-nextjs-developer" },
    scope: "worldwide",
    serviceType: { fr: "Développement front-end React et Next.js", en: "React and Next.js front-end development" },
    stack: ["React", "Next.js", "TypeScript", "Prisma", "PostgreSQL"],
    related: [
      {
        caseStudy: "sd-international-group",
        note: { fr: "Site corporate bilingue en Next.js", en: "Bilingual corporate website in Next.js" },
      },
      {
        name: "TalenexPro",
        url: "https://talenexpro.com",
        note: {
          fr: "Partenaire technique en remote pour Talenex Inc. (Montréal) : développement backend, intégration de paiements et mise en production.",
          en: "Remote technical partner for Talenex Inc. (Montreal): back-end development, payment integration and production deployment.",
        },
      },
      {
        name: "AfriRent Marketplace",
        url: AFRIRENT_URL,
        note: { fr: "Front-end React et TypeScript", en: "React and TypeScript front end" },
      },
    ],
    content: {
      fr: {
        metaTitle: "Développeur React et Next.js freelance | Eddy Boni",
        metaDescription:
          "Développeur React et Next.js freelance : applications web en TypeScript, sites Next.js optimisés pour le SEO, sites multilingues. 100 % à distance.",
        h1: "Développeur React et Next.js freelance",
        intro: [
          "Je développe des applications web avec React, Next.js et TypeScript : interfaces rapides, sites optimisés pour le SEO, sites multilingues.",
          "Je travaille 100 % à distance, en français ; échanges écrits possibles en anglais.",
        ],
        offers: [
          "Applications web avec React et TypeScript",
          "Sites et applications Next.js optimisés pour le SEO",
          "Sites multilingues (i18n)",
          "Intégration avec une API REST ou un back-end Django",
        ],
      },
      en: {
        metaTitle: "Freelance React and Next.js developer | Eddy Boni",
        metaDescription:
          "Freelance React and Next.js developer: TypeScript web apps, SEO-friendly Next.js websites, multilingual sites. Fully remote.",
        h1: "Freelance React and Next.js developer",
        intro: [
          "I build web applications with React, Next.js and TypeScript: fast interfaces, SEO-friendly websites, multilingual sites.",
          "I work fully remotely, in French; written communication in English is possible.",
        ],
        offers: [
          "Web applications with React and TypeScript",
          "SEO-friendly Next.js websites and apps",
          "Multilingual websites (i18n)",
          "Integration with a REST API or a Django back end",
        ],
      },
    },
  },
};
