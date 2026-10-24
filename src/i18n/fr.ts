export const fr = {
  nav: {
    about: "À propos",
    experience: "Expérience",
    skills: "Compétences",
    projects: "Projets",
    process: "Process",
    contact: "Contact",
    contactCta: "Me contacter",
  },
  hero: {
    badge: "Disponible en Freelance",
    name: "Eddy Boni",
    role: "Développeur Full-Stack",
    description:
      "Je conçois et développe des applications web et mobiles performantes, scalables et centrées sur l'utilisateur pour les entreprises et startups.",
    descriptionStrong: "Basé en remote.",
    ctaProjects: "Voir mes projets",
    ctaContact: "Me contacter",
    ctaComeup: "Commander sur ComeUp",
    imageAlt: "Eddy Boni",
  },
  stats: {
    items: [
      { value: "3+", label: "Années d'expérience" },
      { value: "20+", label: "Projets réalisés" },
      { value: "100%", label: "Satisfaction client" },
      { value: "10k+", label: "Lignes de code" },
    ],
  },
  stack: {
    titlePrefix: "Ma",
    titleHighlight: "Stack Technique",
    subtitle:
      "Un écosystème d'outils modernes et performants pour construire des solutions de bout en bout.",
    showMore: "Voir plus",
    showLess: "Voir moins",
    items: [
      { name: "Next.js", desc: "Front-end & Full-stack SSR" },
      { name: "React JS / Native", desc: "SPA & Apps mobiles" },
      { name: "Django", desc: "Framework backend robuste" },
      { name: "Docker", desc: "Conteneurisation" },
      { name: "PostgreSQL", desc: "Base de données relationnelle" },
      { name: "Prisma", desc: "ORM type-safe" },
      { name: "TypeScript", desc: "Typage statique" },
      { name: "Nginx", desc: "Serveur web & Reverse Proxy" },
      { name: "JavaScript", desc: "Logique dynamique" },
      { name: "API REST", desc: "Architecture d'intégration" },
      { name: "Git", desc: "Version control" },
    ],
  },
  experience: {
    titlePrefix: "Expérience",
    titleHighlight: "Professionnelle",
    subtitle: "Mon parcours technique à travers des projets réels en entreprise.",
    items: [
      {
        role: "Développeur Full-Stack",
        company: "Talenex Inc.",
        location: "Montréal, Canada (Remote)",
        type: "Partenariat technique",
        period: "2026 – Présent",
        description:
          "Contribution en tant que développeur full-stack sur TalenexPro, une plateforme d'échange de compétences bilingue. Configuration de l'infrastructure PostgreSQL sur AWS EC2, mise en place de l'envoi d'emails transactionnels, intégration d'analytics pour le suivi produit, et travail en cours sur le système de crédits et l'intégration de paiements internationaux (Flutterwave, Stripe).",
        skills: ["Next.js", "TypeScript", "Prisma", "PostgreSQL", "Docker", "AWS EC2"],
      },
      {
        role: "Développeur Stagiaire — Système de Gestion de Garage",
        company: "Luxury Élégance Garage",
        location: "Parakou, Bénin",
        type: "Stage",
        period: "2025 – 2026",
        description:
          "Analyse des besoins et conception UML complète (cas d'utilisation, séquence, classes) pour un système de suivi client et d'historique de services. Développement d'un système de réservation en ligne et d'un tableau de bord administrateur sécurisé par rôles, avec Django et PostgreSQL.",
        skills: ["Django", "PostgreSQL", "UML", "Auth/Permissions"],
      },
    ],
  },
  process: {
    titlePrefix: "Méthodologie de",
    titleHighlight: "Travail",
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
    titlePrefix: "Projets",
    titleHighlight: "Récents",
    subtitle:
      "Une sélection de mes dernières réalisations alliant design moderne et ingénierie back-end solide.",
    showMore: "Voir plus",
    showLess: "Voir moins",
    statusDone: "Terminé",
    statusInProgress: "En cours",
    statusMobileTesting: "App mobile en test",
    liveDemo: "Live Demo",
    demoSoon: "Demo bientôt",
    code: "Code",
    items: [
      {
        title: "Axis Transport",
        description:
          "Plateforme web et mobile d'une compagnie de transport sur l'axe Parakou – Cotonou (Bénin) : réservation de billets, envoi et suivi de colis, location de véhicules et espace client. Site web en production, application mobile en phase de test.",
      },
      {
        title: "SD International Group",
        description:
          "Site corporate bilingue FR/EN d'un groupe multisectoriel béninois (BTP, énergie, import-export & logistique) : pages services, HSE & qualité et parcours de demande de devis.",
      },
      {
        title: "TalenexPro",
        description:
          "Plateforme B2B d'échange de compétences entre professionnels : gagnez des crédits en partageant votre expertise, dépensez-les pour apprendre auprès d'autres experts.",
      },
      {
        title: "AfriRent Marketplace",
        description:
          "Marketplace type Leboncoin pour la location entre particuliers avec authentification, annonces, favoris, panier et API backend sécurisée.",
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
    titleHighlight: "Services",
    intro:
      "J'accompagne les entreprises de la conception à la mise en production de leurs produits digitaux. Mon approche Full-Stack garantit une cohérence technique sur l'ensemble de votre projet.",
    bullets: [
      "Architecture technique sur-mesure",
      "Code propre, documenté et testé",
      "Communication transparente et agile",
      "Déploiement et intégration continue (CI/CD)",
    ],
    items: [
      {
        title: "Développement Web Full-Stack",
        description: "Création d'applications web robustes et réactives en utilisant l'écosystème React couplé à la puissance de Django.",
      },
      {
        title: "Applications Mobiles",
        description: "Développement d'applications natives iOS et Android avec React Native, partageant le code pour une livraison rapide.",
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
    titleHighlight: "Ensemble",
    subtitle: "Vous avez un projet en tête ou vous recherchez un développeur freelance ? Discutons de vos besoins.",
    emailTitle: "Email",
    emailDesc: "Contactez-moi directement à l'adresse suivante :",
    locationTitle: "Localisation",
    locationDesc: "Disponible en 100% remote partout dans le monde.",
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
      "BONI Adjé Oladjidé Kenneth Eddy.\nDéveloppeur Full-Stack expert en React, React Native et Django. Création d'applications performantes en freelance.",
    navTitle: "Navigation",
    socialTitle: "Réseaux",
    availableForWork: "Disponible pour de nouvelles missions",
    rights: "Tous droits réservés.",
  },
  notFound: {
    code: "404",
    title: "Page introuvable",
    description: "La page que vous cherchez n'existe pas ou a été déplacée.",
    cta: "Retour à l'accueil",
  },
} satisfies Record<string, unknown>;

export type Translations = typeof fr;
