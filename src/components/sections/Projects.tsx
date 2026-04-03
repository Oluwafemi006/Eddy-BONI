import { motion } from "framer-motion";
import { ExternalLink, Github, ShoppingBag, LayoutDashboard, Users } from "lucide-react";

const PROJECTS = [
  {
    title: "AfriRent Marketplace",
    description: "Marketplace type Leboncoin pour la location entre particuliers avec authentification, annonces, favoris, panier et API backend sécurisée.",
    tags: ["React", "TypeScript", "Django REST", "PostgreSQL", "Railway"],
    icon: ShoppingBag,
    color: "from-primary/25 to-blue-500/20 text-primary border-primary/30",
    status: "Termine",
    statusLabel: "Terminé",
    demoUrl: "https://afrirent.netlify.app",
    codeUrl: "https://github.com/Oluwafemi006/Afrirent",
  },
  {
    title: "App E-commerce Mobile",
    description: "MVP mobile en cours de développement avec catalogue produit, panier et tunnel de paiement à finaliser.",
    tags: ["React Native", "Django REST", "PostgreSQL", "Stripe"],
    icon: ShoppingBag,
    color: "from-blue-500/20 to-purple-500/20 text-blue-400 border-blue-500/30",
    status: "InProgress",
    statusLabel: "En cours",
    demoUrl: null,
    codeUrl: "https://github.com/Oluwafemi006",
  },
  {
    title: "Dashboard SaaS Analytics",
    description: "Dashboard analytique en cours de construction pour le suivi de KPIs SaaS et de la performance produit.",
    tags: ["React JS", "Chart.js", "FastAPI", "Redis"],
    icon: LayoutDashboard,
    color: "from-primary/20 to-green-500/20 text-primary border-primary/30",
    status: "InProgress",
    statusLabel: "En cours",
    demoUrl: null,
    codeUrl: "https://github.com/Oluwafemi006",
  },
  {
    title: "API REST Gestion RH",
    description: "API RH en cours avec modules congés, plannings, authentification et architecture orientée scalabilité.",
    tags: ["Django", "PostgreSQL", "Docker", "Celery"],
    icon: Users,
    color: "from-orange-500/20 to-red-500/20 text-orange-400 border-orange-500/30",
    status: "InProgress",
    statusLabel: "En cours",
    demoUrl: null,
    codeUrl: "https://github.com/Oluwafemi006",
  },
];

export function Projects() {
  return (
    <section id="projects" className="py-24 bg-secondary/20 border-y border-white/5">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 md:text-center"
        >
          <h2 className="text-3xl md:text-5xl font-display font-bold text-foreground mb-4">
            Projets <span className="text-primary text-glow">Récents</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Une sélection de mes dernières réalisations alliant design moderne et ingénierie back-end solide.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {PROJECTS.map((project, index) => {
            const Icon = project.icon;
            return (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative rounded-2xl bg-card border border-white/5 overflow-hidden hover:border-primary/50 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-primary/10 flex flex-col h-full"
              >
                {/* Decorative background gradient specific to project */}
                <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${project.color} blur-[50px] opacity-50 group-hover:opacity-100 transition-opacity duration-500`} />
                
                <div className="p-8 flex flex-col h-full relative z-10">
                  <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 bg-background border ${project.color} shadow-lg`}>
                    <Icon size={28} />
                  </div>
                  
                  <h3 className="text-2xl font-bold text-foreground mb-3 font-display group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>

                  <div className="mb-4">
                    <span
                      className={`inline-flex px-3 py-1 text-xs font-semibold rounded-full border ${
                        project.status === "Termine"
                          ? "bg-primary/15 text-primary border-primary/30"
                          : "bg-secondary text-muted-foreground border-white/10"
                      }`}
                    >
                      {project.statusLabel}
                    </span>
                  </div>
                  
                  <p className="text-muted-foreground mb-8 flex-grow">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-8">
                    {project.tags.map(tag => (
                      <span key={tag} className="px-3 py-1 text-xs font-medium rounded-full bg-secondary text-secondary-foreground border border-white/5">
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex items-center gap-4 mt-auto pt-6 border-t border-white/5">
                    {project.demoUrl ? (
                      <a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noreferrer noopener"
                        className="flex items-center gap-2 text-sm font-semibold text-foreground hover:text-primary transition-colors"
                      >
                        <ExternalLink size={16} /> Live Demo
                      </a>
                    ) : (
                      <span className="flex items-center gap-2 text-sm font-semibold text-muted-foreground/70">
                        <ExternalLink size={16} /> Demo bientôt
                      </span>
                    )}
                    <a
                      href={project.codeUrl}
                      target="_blank"
                      rel="noreferrer noopener"
                      className="flex items-center gap-2 text-sm font-semibold text-foreground hover:text-primary transition-colors"
                    >
                      <Github size={16} /> Code
                    </a>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
