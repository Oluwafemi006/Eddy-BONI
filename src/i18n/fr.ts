export const fr = {
  nav: {
    about: "À propos",
    experience: "Expérience",
    skills: "Compétences",
    projects: "Projets",
    process: "Process",
    contact: "Contact",
    contactCta: "Me contacter",
    home: "Accueil",
    label: "Navigation principale",
    openMenu: "Ouvrir le menu",
    closeMenu: "Fermer le menu",
  },
  hero: {
    badge: "Disponible en Freelance",
    name: "Eddy Boni",
    role: "Développeur Full-Stack",
    description:
      "Je conçois et développe des applications web et mobiles performantes, scalables et centrées sur l'utilisateur pour les entreprises et startups.",
    descriptionStrong: "Basé à Cotonou, disponible en remote.",
    geoSentence:
      "Eddy Boni (BONI Adjé Oladjidé Kenneth Eddy) est un développeur full-stack basé à Cotonou, au Bénin. Il conçoit des applications web avec Django/DRF, React et Next.js, et des applications mobiles avec Flutter. Titulaire d'une Licence Professionnelle en Informatique de Gestion (IUT de Parakou, 2026), il travaille en freelance sous la marque EdDigital.",
    ctaProjects: "Voir mes projets",
    ctaContact: "Me contacter",
    ctaComeup: "Commander sur ComeUp",
    imageAlt: "Portrait d'Eddy Boni",
    headlinePrefix: "Je construis des",
    headlineHighlight: "produits numériques",
    headlineSuffix: "utiles et durables.",
  },
  about: {
    badge: "À propos de moi",
    title: "Je construis et je mets en production des applications web et mobiles pour des entreprises au Bénin et à l'étranger.",
    facts: {
      location: "Cotonou, Bénin · disponible en remote",
      experience: "2 ans d'expérience en développement",
      availability: "Disponible pour des opportunités",
      languages: "Français ; échanges écrits possibles en anglais",
    },
    cta: "Voir mon expérience",
    education: {
      title: "Formation",
      text: "Licence Professionnelle Informatique de Gestion — IUT de Parakou, 2026 (mention très bien)",
    },
  },
  stack: {
    titlePrefix: "Mes",
    titleHighlight: "compétences",
    subtitle: "Classées selon mon niveau réel d'utilisation.",
    tiers: [
      {
        level: "mastered",
        title: "Technologies maîtrisées",
        caption: "Utilisées au quotidien, sur des projets en production",
        items: ["React", "TypeScript / JavaScript", "HTML / CSS", "Python", "Django et Django REST Framework", "API REST", "PostgreSQL / MySQL", "Git et GitHub", "Linux (Ubuntu)"],
      },
      {
        level: "practice",
        title: "Utilisées en pratique",
        caption: "Mises en œuvre sur des projets réels",
        items: [
          "Next.js et Prisma",
          "Flutter (application mobile)",
          "Docker et Nginx",
          "Tableaux de bord et back-offices",
          "Paiements en ligne (Stripe, Mobile Money)",
          "Chatbot IA (Gemini)",
          "UML et analyse des besoins",
          "Déploiement (Railway, Netlify, PythonAnywhere, AWS EC2)",
        ],
      },
      {
        level: "learning",
        title: "En apprentissage",
        caption: "En cours d'approfondissement",
        items: ["React Native", "Pandas", "Scikit-learn"],
      },
    ],
  },
  experience: {
    titlePrefix: "Expérience",
    titleHighlight: "professionnelle",
    subtitle: "Une expérience pratique sur des projets réels, en entreprise et en freelance.",
    caseStudyLink: "Voir l'étude de cas",
    // Most recent first. Single source for professional experience (the About section only shows education).
    items: [
      {
        role: "Partenaire technique",
        company: "Talenex Inc.",
        location: "Montréal, Canada (remote)",
        type: "Partenariat technique",
        period: "2026 — aujourd'hui",
        status: "En cours",
        current: true,
        description:
          "Partenaire technique en remote pour Talenex Inc. (Montréal) : développement backend, intégration de paiements et mise en production.",
        skills: [],
        caseStudy: null,
      },
      {
        // TODO: exact role title to confirm with Eddy.
        role: "Développeur",
        company: "Axis Transport",
        location: "Parakou, Bénin",
        type: "Freelance",
        period: "2026",
        status: "Web en production · mobile (Flutter) en test",
        current: true,
        description: "Plateforme web en production, application Flutter en test.",
        skills: ["Django", "Django REST Framework", "Flutter", "Next.js"],
        caseStudy: "axis-transport",
      },
      {
        // TODO: exact role title to confirm with Eddy.
        role: "Développeur",
        company: "SD International Group",
        location: "Cotonou, Bénin",
        type: "",
        period: "2026",
        status: "En production",
        current: false,
        description: "Site vitrine bilingue FR/EN en Next.js.",
        skills: ["Next.js", "TypeScript", "Tailwind CSS"],
        caseStudy: "sd-international-group",
      },
      {
        role: "Développeur stagiaire — Système de gestion de garage (LUXEL-G)",
        company: "Luxury Élégance Garage",
        location: "Parakou, Bénin",
        type: "Stage et projet de fin d'études",
        period: "2025 – 2026",
        status: "Terminé",
        current: false,
        description:
          "Analyse des besoins et conception UML complète (cas d'utilisation, séquence, classes) pour un système de suivi client et d'historique de services. Développement d'un système de réservation en ligne et d'un tableau de bord administrateur sécurisé par rôles, avec Django et PostgreSQL.",
        skills: ["Django", "Django REST Framework", "React", "TypeScript", "PostgreSQL", "UML"],
        caseStudy: null,
      },
      {
        role: "Missions freelance",
        company: "EdDigital",
        location: "",
        type: "Freelance",
        period: "2024",
        status: "",
        current: false,
        description: "Premiers projets web pour des clients.",
        skills: [],
        caseStudy: null,
      },
    ],
  },
  process: {
    titlePrefix: "Méthodologie de",
    titleHighlight: "travail",
    subtitle:
      "Une approche structurée en 4 étapes pour garantir la réussite de vos projets, de l'idée au déploiement.",
    steps: [
      {
        title: "1. Découverte & Audit",
        description: "Analyse approfondie de vos besoins, définition des objectifs et étude de faisabilité technique.",
      },
      {
        title: "2. Architecture & Design",
        description: "Modélisation des données (UML), conception de l'architecture logicielle et maquettage de l'interface.",
      },
      {
        title: "3. Développement & Tests",
        description: "Écriture d'un code propre et performant, suivi d'une batterie de tests pour garantir la stabilité.",
      },
      {
        title: "4. Déploiement & Suivi",
        description: "Mise en production (CI/CD, Docker) et accompagnement pour la prise en main ou la maintenance.",
      },
    ],
  },
  projects: {
    titlePrefix: "Mes",
    titleHighlight: "projets",
    subtitle: "Des projets concrets qui montrent mon savoir-faire.",
    allProjects: "Tous mes dépôts sur GitHub",
    inProgressTitle: "En cours de développement",
    statusLive: "En ligne",
    statusDone: "Terminé",
    statusInProgress: "En cours",
    statusMobileTesting: "Mobile (Flutter) en test",
    caseStudy: "Étude de cas",
    liveDemo: "Voir le site",
    demoSoon: "Démo bientôt",
    code: "Code",
    items: [
      {
        title: "Axis Transport",
        description:
          "Plateforme de transport sur l'axe Parakou – Savè – Kétou – Porto-Novo – Cotonou : billetterie de bus, envoi et suivi de colis, location de véhicules. Backend Django/DRF, web en production, mobile Flutter en phase de test.",
      },
      {
        title: "SD International Group",
        description:
          "Site vitrine Next.js bilingue FR/EN pour un groupe multisectoriel de Cotonou (BTP, énergie, logistique, import-export) : pages services, HSE & qualité, contact, SEO et Open Graph.",
      },
      {
        title: "AfriRent Marketplace",
        description:
          "Marketplace type Leboncoin pour la location entre particuliers avec authentification, annonces, favoris, panier et API backend sécurisée.",
      },
      {
        title: "LUXEL-G",
        description:
          "Système de gestion pour un garage de Parakou (stage et projet de fin d'études) : réservation en ligne, tableau de bord par rôles, paiement Mobile Money, vérification par SMS et assistant IA.",
      },
      {
        title: "App E-commerce Mobile",
        description: "MVP mobile en cours de développement avec catalogue produit, panier et tunnel de paiement à finaliser.",
      },
      {
        title: "RentBoard",
        description: "Dashboard analytique en cours de construction pour le suivi de KPIs SaaS et de la performance produit.",
      },
      {
        title: "API REST Gestion RH",
        description: "API RH en cours avec modules congés, plannings, authentification et architecture orientée scalabilité.",
      },
    ],
  },
  services: {
    titlePrefix: "Mes",
    titleHighlight: "services",
    intro:
      "J'accompagne les entreprises de la conception à la mise en production de leurs produits digitaux. Mon approche Full-Stack garantit une cohérence technique sur l'ensemble de votre projet.",
    bullets: [
      "Architecture technique sur-mesure",
      "Code propre, documenté et testé",
      "Communication transparente et agile",
      "Déploiement et intégration continue (CI/CD)",
    ],
    learnMore: "En savoir plus",
    items: [
      {
        title: "Développement Web Full-Stack",
        description: "Création d'applications web robustes et réactives en utilisant l'écosystème React couplé à la puissance de Django.",
      },
      {
        title: "Applications Mobiles",
        description: "Développement d'applications mobiles iOS et Android avec Flutter, à partir d'une seule base de code.",
      },
      {
        title: "API REST & Back-end",
        description: "Architecture et développement d'APIs sécurisées et scalables avec Django REST Framework et PostgreSQL.",
      },
      {
        title: "Consulting & Architecture",
        description: "Accompagnement technique sur les choix d'architecture, la modélisation de données et l'optimisation des performances.",
      },
    ],
  },
  contact: {
    titlePrefix: "Travaillons",
    titleHighlight: "ensemble",
    subtitle: "Vous avez un projet, une opportunité ou simplement une question ? N'hésitez pas à me contacter.",
    githubTitle: "GitHub",
    githubCta: "Voir mon GitHub",
    linkedinTitle: "LinkedIn",
    formTitle: "Écrivez-moi",
    emailTitle: "Email",
    emailDesc: "Contactez-moi directement à l'adresse suivante :",
    locationTitle: "Localisation",
    locationDesc: "Basé à Cotonou (Bénin, UTC+1). Disponible en remote partout dans le monde.",
    remoteFirst: "Remote First",
    form: {
      nameLabel: "Nom complet",
      namePlaceholder: "Jean Dupont",
      emailLabel: "Adresse email",
      emailPlaceholder: "jean@entreprise.com",
      messageLabel: "Votre message",
      messagePlaceholder: "Décrivez-moi votre projet...",
      honeypotLabel: "Ne pas remplir ce champ:",
      submit: "Envoyer le message",
      submitting: "Envoi en cours...",
      successTitle: "Message envoyé !",
      successDesc: "Merci de m'avoir contacté. Je vous répondrai dans les plus brefs délais.",
      errorTitle: "Envoi impossible",
      errorDesc: "Une erreur est survenue. Réessaie dans quelques instants ou contacte-moi par email.",
    },
  },
  footer: {
    description:
      "BONI Adjé Oladjidé Kenneth Eddy.\nDéveloppeur full-stack basé à Cotonou : applications web avec Django, React et Next.js, et mobiles avec Flutter. Freelance sous la marque EdDigital.",
    navTitle: "Navigation",
    servicesTitle: "Services",
    socialTitle: "Réseaux",
    availableForWork: "Disponible pour de nouvelles missions",
    rights: "Tous droits réservés.",
  },
  faq: {
    titlePrefix: "Questions",
    titleHighlight: "fréquentes",
    subtitle: "L'essentiel à savoir avant de démarrer un projet ensemble.",
    items: [
      {
        question: "Quels services proposez-vous ?",
        answer:
          "Je développe des applications web avec Django/DRF, React et Next.js, des applications mobiles avec Flutter, des API REST et des sites vitrines pour les entreprises.",
      },
      {
        question: "Quelle est votre stack technique ?",
        answer:
          "Back-end : Python, Django, Django REST Framework et PostgreSQL. Front-end : React, Next.js et TypeScript. Mobile : Flutter. Déploiement : Docker et Nginx.",
      },
      {
        question: "Travaillez-vous à distance ?",
        answer:
          "Oui. Je suis basé à Cotonou, au Bénin (UTC+1), et je travaille 100 % à distance avec des clients au Bénin et à l'international. Je travaille en français ; échanges écrits possibles en anglais.",
      },
      {
        question: "Comment se déroule une collaboration, et quels sont les délais ?",
        answer:
          "En quatre étapes : découverte des besoins, architecture et maquettes, développement et tests, puis mise en production et suivi. Les délais dépendent du périmètre et sont fixés ensemble à l'issue de la phase de découverte.",
      },
      {
        question: "Comment vous contacter ?",
        answer:
          "Par le formulaire de contact de ce site, par email à eddybaoke@gmail.com, ou via mon profil ComeUp. Je réponds aussi sur WhatsApp et par appel une fois le premier contact établi.",
      },
    ],
  },
  caseStudy: {
    breadcrumbHome: "Accueil",
    breadcrumbSection: "Projets",
    backToProjects: "Retour aux projets",
    context: "Contexte client",
    problem: "Problème",
    role: "Mon rôle",
    stack: "Stack technique",
    features: "Fonctionnalités",
    screenshots: "Captures d'écran",
    live: "Voir le site en ligne",
    ctaTitle: "Un projet similaire ?",
    ctaText: "Parlons de vos besoins et de la meilleure façon d'y répondre.",
    ctaButton: "Me contacter",
  },
  servicePage: {
    breadcrumbHome: "Accueil",
    breadcrumbSection: "Services",
    offers: "Ce que je propose",
    stack: "Technologies",
    howTitle: "Comment je travaille",
    remoteHighlights: [
      "Travail 100 % à distance",
      "En français ; échanges écrits possibles en anglais",
      "Fuseau horaire UTC+1",
      "Communication claire par WhatsApp, email et appels",
    ],
    localHighlights: [
      "Basé à Cotonou, au Bénin",
      "Sites en français, ou bilingues français / anglais",
      "Fuseau horaire UTC+1",
      "Communication claire par WhatsApp, email et appels",
    ],
    related: "Projets liés",
    caseStudy: "Voir l'étude de cas",
    visit: "Voir le site",
    ctaTitle: "Parlons de votre projet",
    ctaText: "Décrivez-moi votre besoin : je reviens vers vous avec une proposition claire.",
    ctaButton: "Me contacter",
  },
  notFound: {
    code: "404",
    title: "Page introuvable",
    description: "La page que vous cherchez n'existe pas ou a été déplacée.",
    cta: "Retour à l'accueil",
  },
} satisfies Record<string, unknown>;

export type Translations = typeof fr;
