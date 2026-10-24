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
  },
  hero: {
    badge: "Available for Freelance",
    name: "Eddy Boni",
    role: "Full-Stack Developer",
    description:
      "I design and build high-performance, scalable, user-centered web and mobile applications for businesses and startups.",
    descriptionStrong: "Remote-based.",
    ctaProjects: "View my projects",
    ctaContact: "Get in touch",
    ctaComeup: "Book on ComeUp",
    imageAlt: "Eddy Boni",
  },
  stats: {
    items: [
      { value: "3+", label: "Years of experience" },
      { value: "20+", label: "Projects delivered" },
      { value: "100%", label: "Client satisfaction" },
      { value: "10k+", label: "Lines of code" },
    ],
  },
  stack: {
    titlePrefix: "My",
    titleHighlight: "Tech Stack",
    subtitle: "A modern, high-performance toolkit for building end-to-end solutions.",
    showMore: "Show more",
    showLess: "Show less",
    items: [
      { name: "Next.js", desc: "Front-end & full-stack SSR" },
      { name: "React JS / Native", desc: "SPAs & mobile apps" },
      { name: "Django", desc: "Robust backend framework" },
      { name: "Docker", desc: "Containerization" },
      { name: "PostgreSQL", desc: "Relational database" },
      { name: "Prisma", desc: "Type-safe ORM" },
      { name: "TypeScript", desc: "Static typing" },
      { name: "Nginx", desc: "Web server & reverse proxy" },
      { name: "JavaScript", desc: "Dynamic logic" },
      { name: "API REST", desc: "Integration architecture" },
      { name: "Git", desc: "Version control" },
    ],
  },
  experience: {
    titlePrefix: "Professional",
    titleHighlight: "Experience",
    subtitle: "My technical journey through real-world projects in the field.",
    items: [
      {
        role: "Full-Stack Developer",
        company: "Talenex Inc.",
        location: "Montreal, Canada (Remote)",
        type: "Technical partnership",
        period: "2026 – Present",
        description:
          "Contributing as a full-stack developer on TalenexPro, a bilingual skill-exchange platform. Set up PostgreSQL infrastructure on AWS EC2, implemented transactional email delivery, integrated product analytics, and currently working on the credit system and international payment integration (Flutterwave, Stripe).",
        skills: ["Next.js", "TypeScript", "Prisma", "PostgreSQL", "Docker", "AWS EC2"],
      },
      {
        role: "Intern Developer — Garage Management System",
        company: "Luxury Élégance Garage",
        location: "Parakou, Benin",
        type: "Internship",
        period: "2025 – 2026",
        description:
          "Requirements analysis and full UML design (use case, sequence, and class diagrams) for a customer tracking and service history system. Built an online booking system and a role-secured admin dashboard using Django and PostgreSQL.",
        skills: ["Django", "PostgreSQL", "UML", "Auth/Permissions"],
      },
    ],
  },
  process: {
    titlePrefix: "Working",
    titleHighlight: "Methodology",
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
    titlePrefix: "Recent",
    titleHighlight: "Projects",
    subtitle: "A selection of my latest work combining modern design with solid back-end engineering.",
    showMore: "Show more",
    showLess: "Show less",
    statusDone: "Completed",
    statusInProgress: "In Progress",
    statusMobileTesting: "Mobile app in testing",
    liveDemo: "Live Demo",
    demoSoon: "Demo coming soon",
    code: "Code",
    items: [
      {
        title: "Axis Transport",
        description:
          "Web and mobile platform for a transport company on the Parakou – Cotonou route (Benin): ticket booking, parcel shipping and tracking, vehicle rental, and customer accounts. Website live in production, mobile app currently in testing.",
      },
      {
        title: "SD International Group",
        description:
          "Bilingual FR/EN corporate website for a multi-sector Beninese group (construction, energy, import-export & logistics): service pages, HSE & quality, and a quote request flow.",
      },
      {
        title: "TalenexPro",
        description:
          "A B2B platform where professionals trade expertise: earn credits by sharing your skills, spend them to learn from other experts.",
      },
      {
        title: "AfriRent Marketplace",
        description:
          "A Leboncoin-style marketplace for peer-to-peer rentals with authentication, listings, favorites, cart, and a secure backend API.",
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
    titleHighlight: "Services",
    intro:
      "I support companies from initial concept through to production launch of their digital products. My full-stack approach ensures technical consistency across your entire project.",
    bullets: [
      "Custom technical architecture",
      "Clean, documented, and tested code",
      "Transparent, agile communication",
      "Deployment and continuous integration (CI/CD)",
    ],
    items: [
      {
        title: "Full-Stack Web Development",
        description: "Building robust, responsive web applications using the React ecosystem paired with the power of Django.",
      },
      {
        title: "Mobile Applications",
        description: "Developing native iOS and Android apps with React Native, sharing code for faster delivery.",
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
    titlePrefix: "Let's Work",
    titleHighlight: "Together",
    subtitle: "Have a project in mind or looking for a freelance developer? Let's talk about your needs.",
    emailTitle: "Email",
    emailDesc: "Reach me directly at the following address:",
    locationTitle: "Location",
    locationDesc: "Available 100% remote, anywhere in the world.",
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
      "BONI Adjé Oladjidé Kenneth Eddy.\nFull-Stack Developer specialized in React, React Native, and Django. Building high-performance applications as a freelancer.",
    navTitle: "Navigation",
    socialTitle: "Social",
    availableForWork: "Available for new projects",
    rights: "All rights reserved.",
  },
  notFound: {
    code: "404",
    title: "Page not found",
    description: "The page you're looking for doesn't exist or has been moved.",
    cta: "Back to home",
  },
};
