import type { Translations } from "./fr";

export const en: Translations = {
  nav: {
    about: "About",
    experience: "Experience",
    skills: "Skills",
    projects: "Projects",
    process: "Process",
    contact: "Contact",
    contactCta: "Get in touch",
    home: "Home",
    label: "Main navigation",
    openMenu: "Open menu",
    closeMenu: "Close menu",
  },
  hero: {
    badge: "Available for Freelance",
    name: "Eddy Boni",
    role: "Full-Stack Developer",
    description:
      "I design and build high-performance, scalable, user-centered web and mobile applications for businesses and startups.",
    descriptionStrong: "Based in Cotonou, available remotely.",
    geoSentence:
      "Eddy Boni (BONI Adjé Oladjidé Kenneth Eddy) is a full-stack developer based in Cotonou, Benin. He builds web applications with Django/DRF, React and Next.js, and mobile apps with Flutter. He holds a Professional Bachelor's degree in Business Computing (IUT de Parakou, 2026) and works as a freelancer under the EdDigital brand.",
    ctaProjects: "View my projects",
    ctaContact: "Get in touch",
    ctaComeup: "Book on ComeUp",
    imageAlt: "Portrait of Eddy Boni",
    headlinePrefix: "I build",
    headlineHighlight: "digital products",
    headlineSuffix: "that are useful and built to last.",
  },
  about: {
    badge: "About me",
    title: "I build web and mobile applications and take them to production for businesses in Benin and abroad.",
    facts: {
      location: "Cotonou, Benin · available remotely",
      experience: "2 years of development experience",
      availability: "Open to opportunities",
      languages: "French; written communication in English is possible",
    },
    cta: "See my experience",
    education: {
      title: "Education",
      text: "Professional Bachelor's degree in Business Computing — IUT de Parakou, 2026 (graduated with highest honors)",
    },
  },
  stack: {
    titlePrefix: "My",
    titleHighlight: "skills",
    subtitle: "Grouped by how much I actually use them.",
    tiers: [
      {
        level: "mastered",
        title: "Core technologies",
        caption: "Used daily, on projects in production",
        items: ["React", "TypeScript / JavaScript", "HTML / CSS", "Python", "Django and Django REST Framework", "REST APIs", "PostgreSQL / MySQL", "Git and GitHub", "Linux (Ubuntu)"],
      },
      {
        level: "practice",
        title: "Used in practice",
        caption: "Applied on real projects",
        items: [
          "Next.js and Prisma",
          "Flutter (mobile app)",
          "Docker and Nginx",
          "Dashboards and back offices",
          "Online payments (Stripe, Mobile Money)",
          "AI chatbot (Gemini)",
          "UML and requirements analysis",
          "Deployment (Railway, Netlify, PythonAnywhere, AWS EC2)",
        ],
      },
      {
        level: "learning",
        title: "Currently learning",
        caption: "Building up through practice",
        items: ["React Native", "Pandas", "Scikit-learn"],
      },
    ],
  },
  experience: {
    titlePrefix: "Professional",
    titleHighlight: "experience",
    subtitle: "Hands-on experience on real projects, in companies and as a freelancer.",
    caseStudyLink: "Read the case study",
    items: [
      {
        role: "Technical partner",
        company: "Talenex Inc.",
        location: "Montreal, Canada (remote)",
        type: "Technical partnership",
        period: "2026 — present",
        status: "Ongoing",
        current: true,
        description:
          "Remote technical partner for Talenex Inc. (Montreal): back-end development, payment integration and production deployment.",
        skills: [],
        caseStudy: null,
      },
      {
        // TODO: exact role title to confirm with Eddy.
        role: "Developer",
        company: "Axis Transport",
        location: "Parakou, Benin",
        type: "Freelance",
        period: "2026",
        status: "Web live in production · mobile (Flutter) in testing",
        current: true,
        description: "Web platform live in production, Flutter app in testing.",
        skills: ["Django", "Django REST Framework", "Flutter", "Next.js"],
        caseStudy: "axis-transport",
      },
      {
        // TODO: exact role title to confirm with Eddy.
        role: "Developer",
        company: "SD International Group",
        location: "Cotonou, Benin",
        type: "",
        period: "2026",
        status: "Live",
        current: false,
        description: "Bilingual FR/EN corporate website built with Next.js.",
        skills: ["Next.js", "TypeScript", "Tailwind CSS"],
        caseStudy: "sd-international-group",
      },
      {
        role: "Intern Developer — Garage Management System (LUXEL-G)",
        company: "Luxury Élégance Garage",
        location: "Parakou, Benin",
        type: "Internship and final-year project",
        period: "2025 – 2026",
        status: "Completed",
        current: false,
        description:
          "Requirements analysis and full UML design (use case, sequence, and class diagrams) for a customer tracking and service history system. Built an online booking system and a role-secured admin dashboard using Django and PostgreSQL.",
        skills: ["Django", "Django REST Framework", "React", "TypeScript", "PostgreSQL", "UML"],
        caseStudy: null,
      },
      {
        role: "Freelance work",
        company: "EdDigital",
        location: "",
        type: "Freelance",
        period: "2024",
        status: "",
        current: false,
        description: "First web projects for clients.",
        skills: [],
        caseStudy: null,
      },
    ],
  },
  process: {
    titlePrefix: "How I",
    titleHighlight: "work",
    subtitle: "A structured 4-step approach to ensure your project's success, from idea to deployment.",
    steps: [
      {
        title: "1. Discovery & Audit",
        description: "In-depth analysis of your needs, goal-setting, and technical feasibility study.",
      },
      {
        title: "2. Architecture & Design",
        description: "Data modeling (UML), software architecture design, and interface mockups.",
      },
      {
        title: "3. Development & Testing",
        description: "Writing clean, performant code, followed by thorough testing to ensure stability.",
      },
      {
        title: "4. Deployment & Follow-up",
        description: "Production deployment (CI/CD, Docker) and support for onboarding or maintenance.",
      },
    ],
  },
  projects: {
    titlePrefix: "My",
    titleHighlight: "projects",
    subtitle: "Real projects that show what I can do.",
    allProjects: "All my repositories on GitHub",
    inProgressTitle: "In development",
    statusLive: "Live",
    statusDone: "Completed",
    statusInProgress: "In Progress",
    statusMobileTesting: "Mobile (Flutter) in testing",
    caseStudy: "Case study",
    liveDemo: "Visit the site",
    demoSoon: "Demo coming soon",
    code: "Code",
    items: [
      {
        title: "Axis Transport",
        description:
          "Transport platform on the Parakou – Savè – Kétou – Porto-Novo – Cotonou route: bus ticketing, parcel shipping and tracking, vehicle rental. Django/DRF back end, web live in production, Flutter mobile app in testing.",
      },
      {
        title: "SD International Group",
        description:
          "Bilingual FR/EN Next.js corporate website for a multi-sector group in Cotonou (construction, energy, logistics, import-export): service pages, HSE & quality, contact, SEO and Open Graph.",
      },
      {
        title: "AfriRent Marketplace",
        description:
          "A Leboncoin-style marketplace for peer-to-peer rentals with authentication, listings, favorites, cart, and a secure backend API.",
      },
      {
        title: "LUXEL-G",
        description:
          "Management system for a garage in Parakou (internship and final-year project): online booking, role-based dashboard, Mobile Money payment, SMS verification and an AI assistant.",
      },
      {
        title: "Mobile E-commerce App",
        description: "Mobile MVP in development featuring a product catalog, cart, and a checkout flow still being finalized.",
      },
      {
        title: "RentBoard",
        description: "Analytics dashboard in progress for tracking SaaS KPIs and product performance.",
      },
      {
        title: "HR Management REST API",
        description: "HR API in progress with leave management, scheduling, authentication modules, and a scalability-focused architecture.",
      },
    ],
  },
  services: {
    titlePrefix: "My",
    titleHighlight: "services",
    intro:
      "I support companies from initial concept through to production launch of their digital products. My full-stack approach ensures technical consistency across your entire project.",
    bullets: [
      "Custom technical architecture",
      "Clean, documented, and tested code",
      "Transparent, agile communication",
      "Deployment and continuous integration (CI/CD)",
    ],
    learnMore: "Learn more",
    items: [
      {
        title: "Full-Stack Web Development",
        description: "Building robust, responsive web applications using the React ecosystem paired with the power of Django.",
      },
      {
        title: "Mobile Applications",
        description: "Building iOS and Android mobile apps with Flutter from a single codebase.",
      },
      {
        title: "REST API & Backend",
        description: "Architecting and building secure, scalable APIs with Django REST Framework and PostgreSQL.",
      },
      {
        title: "Consulting & Architecture",
        description: "Technical guidance on architecture decisions, data modeling, and performance optimization.",
      },
    ],
  },
  contact: {
    titlePrefix: "Let's work",
    titleHighlight: "together",
    subtitle: "Have a project, an opportunity or just a question? Feel free to reach out.",
    githubTitle: "GitHub",
    githubCta: "See my GitHub",
    linkedinTitle: "LinkedIn",
    formTitle: "Send me a message",
    emailTitle: "Email",
    emailDesc: "Reach me directly at the following address:",
    locationTitle: "Location",
    locationDesc: "Based in Cotonou (Benin, UTC+1). Available remotely, anywhere in the world.",
    remoteFirst: "Remote First",
    form: {
      nameLabel: "Full name",
      namePlaceholder: "John Doe",
      emailLabel: "Email address",
      emailPlaceholder: "john@company.com",
      messageLabel: "Your message",
      messagePlaceholder: "Tell me about your project...",
      honeypotLabel: "Do not fill in this field:",
      submit: "Send message",
      submitting: "Sending...",
      successTitle: "Message sent!",
      successDesc: "Thanks for reaching out. I'll get back to you as soon as possible.",
      errorTitle: "Unable to send",
      errorDesc: "Something went wrong. Please try again shortly or reach me by email.",
    },
  },
  footer: {
    description:
      "BONI Adjé Oladjidé Kenneth Eddy.\nFull-stack developer based in Cotonou: web apps with Django, React and Next.js, and mobile apps with Flutter. Freelancing under the EdDigital brand.",
    navTitle: "Navigation",
    servicesTitle: "Services",
    socialTitle: "Social",
    availableForWork: "Available for new projects",
    rights: "All rights reserved.",
  },
  faq: {
    titlePrefix: "Frequently asked",
    titleHighlight: "questions",
    subtitle: "What to know before we start a project together.",
    items: [
      {
        question: "What services do you offer?",
        answer:
          "I build web applications with Django/DRF, React and Next.js, mobile apps with Flutter, REST APIs, and corporate websites for businesses.",
      },
      {
        question: "What is your tech stack?",
        answer:
          "Back end: Python, Django, Django REST Framework and PostgreSQL. Front end: React, Next.js and TypeScript. Mobile: Flutter. Deployment: Docker and Nginx.",
      },
      {
        question: "Do you work remotely?",
        answer:
          "Yes. I am based in Cotonou, Benin (UTC+1), and work fully remotely with clients in Benin and abroad. I work in French; written communication in English is possible.",
      },
      {
        question: "How does a collaboration work, and what are the timelines?",
        answer:
          "In four steps: discovery, architecture and mockups, development and testing, then deployment and follow-up. Timelines depend on the scope and are agreed together after the discovery phase.",
      },
      {
        question: "How can I contact you?",
        answer:
          "Through the contact form on this site, by email at eddybaoke@gmail.com, or via my ComeUp profile. Once we are in touch, I am also available on WhatsApp and by phone.",
      },
    ],
  },
  caseStudy: {
    breadcrumbHome: "Home",
    breadcrumbSection: "Projects",
    backToProjects: "Back to projects",
    context: "Client context",
    problem: "Problem",
    role: "My role",
    stack: "Tech stack",
    features: "Features",
    screenshots: "Screenshots",
    live: "Visit the live site",
    ctaTitle: "Working on something similar?",
    ctaText: "Let's talk about your needs and the best way to meet them.",
    ctaButton: "Get in touch",
  },
  servicePage: {
    breadcrumbHome: "Home",
    breadcrumbSection: "Services",
    offers: "What I offer",
    stack: "Technologies",
    howTitle: "How I work",
    remoteHighlights: [
      "Fully remote work",
      "I work in French; written communication in English is possible",
      "UTC+1 time zone",
      "Clear communication via WhatsApp, email and calls",
    ],
    localHighlights: [
      "Based in Cotonou, Benin",
      "Websites in French, or bilingual French / English",
      "UTC+1 time zone",
      "Clear communication via WhatsApp, email and calls",
    ],
    related: "Related projects",
    caseStudy: "Read the case study",
    visit: "Visit the site",
    ctaTitle: "Let's talk about your project",
    ctaText: "Tell me what you need: I'll get back to you with a clear proposal.",
    ctaButton: "Get in touch",
  },
  notFound: {
    code: "404",
    title: "Page not found",
    description: "The page you're looking for doesn't exist or has been moved.",
    cta: "Back to home",
  },
};
