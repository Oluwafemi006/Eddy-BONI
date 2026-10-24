import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Github, ShoppingBag, LayoutDashboard, Users, Repeat, Bus, Building2, Smartphone, ChevronDown, ChevronUp, FileText } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";
import { pathFor } from "@/seo/routes";
import type { CaseStudyId } from "@/content/caseStudies";

type ProjectMeta = {
  tags: string[];
  icon: typeof Bus;
  color: string;
  done: boolean;
  mobileTesting: boolean;
  demoUrl: string | null;
  codeUrl: string | null;
  caseStudy?: CaseStudyId;
};

const PROJECTS_META: ProjectMeta[] = [
  {
    tags: ["Django/DRF", "Flutter", "Next.js"],
    icon: Bus,
    color: "from-amber-500/20 to-orange-500/20 text-amber-400 border-amber-500/30",
    done: true,
    mobileTesting: true,
    demoUrl: "https://axistransportlogistique.com",
    codeUrl: null,
    caseStudy: "axis-transport",
  },
  {
    tags: ["Next.js", "i18n FR/EN", "SEO", "Open Graph"],
    icon: Building2,
    color: "from-sky-500/20 to-indigo-500/20 text-sky-400 border-sky-500/30",
    done: true,
    mobileTesting: false,
    demoUrl: "https://www.sd-internationalgroup.com",
    codeUrl: null,
    caseStudy: "sd-international-group",
  },
  {
    tags: ["React", "TypeScript", "Django REST", "PostgreSQL", "Railway"],
    icon: ShoppingBag,
    color: "from-primary/25 to-blue-500/20 text-primary border-primary/30",
    done: true,
    mobileTesting: false,
    demoUrl: "https://afrirent.netlify.app",
    codeUrl: "https://github.com/Oluwafemi006/Afrirent",
  },
  {
    tags: ["Flutter", "Django REST", "PostgreSQL", "Stripe"],
    icon: ShoppingBag,
    color: "from-blue-500/20 to-purple-500/20 text-blue-400 border-blue-500/30",
    done: false,
    mobileTesting: false,
    demoUrl: null,
    codeUrl: "https://github.com/Oluwafemi006",
  },
  {
    tags: ["React JS", "Chart.js", "FastAPI", "Redis"],
    icon: LayoutDashboard,
    color: "from-primary/20 to-green-500/20 text-primary border-primary/30",
    done: false,
    mobileTesting: false,
    demoUrl: null,
    codeUrl: "https://github.com/Oluwafemi006",
  },
  {
    tags: ["Django", "PostgreSQL", "Docker", "Celery"],
    icon: Users,
    color: "from-orange-500/20 to-red-500/20 text-orange-400 border-orange-500/30",
    done: false,
    mobileTesting: false,
    demoUrl: null,
    codeUrl: "https://github.com/Oluwafemi006",
  },
];

export function Projects() {
  const { t, language } = useLanguage();
  const [showAll, setShowAll] = useState(false);

  const PROJECTS = t.projects.items.map((item, i) => ({
    ...item,
    ...PROJECTS_META[i],
    statusLabel: PROJECTS_META[i].done ? t.projects.statusDone : t.projects.statusInProgress,
  }));
  const displayedProjects = showAll ? PROJECTS : PROJECTS.slice(0, 3);

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
            {t.projects.titlePrefix} <span className="text-primary text-glow">{t.projects.titleHighlight}</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t.projects.subtitle}
          </p>
        </motion.div>

        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence>
            {displayedProjects.map((project, index) => {
              const Icon = project.icon;
              return (
                <motion.div
                  layout
                  key={project.title}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
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

                    <div className="mb-4 flex flex-wrap gap-2">
                      <span
                        className={`inline-flex px-3 py-1 text-xs font-semibold rounded-full border ${
                          project.done
                            ? "bg-primary/15 text-primary border-primary/30"
                            : "bg-secondary text-muted-foreground border-white/10"
                        }`}
                      >
                        {project.statusLabel}
                      </span>
                      {project.mobileTesting && (
                        <span className="inline-flex items-center gap-1.5 px-3 py-1 text-xs font-semibold rounded-full border bg-amber-500/10 text-amber-400 border-amber-500/30">
                          <Smartphone size={12} /> {t.projects.statusMobileTesting}
                        </span>
                      )}
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
                    
                    <div className="flex flex-wrap items-center gap-x-4 gap-y-3 mt-auto pt-6 border-t border-white/5">
                      {project.caseStudy && (
                        <a
                          href={pathFor({ kind: "project", id: project.caseStudy }, language)}
                          className="flex items-center gap-2 text-sm font-semibold text-primary hover:underline"
                        >
                          <FileText size={16} /> {t.projects.caseStudy}
                          <span className="sr-only"> : {project.title}</span>
                        </a>
                      )}
                      {project.demoUrl ? (
                        <a
                          href={project.demoUrl}
                          target="_blank"
                          rel="noreferrer noopener"
                          aria-label={`${t.projects.liveDemo} – ${project.title}`}
                          className="flex items-center gap-2 text-sm font-semibold text-foreground hover:text-primary transition-colors"
                        >
                          <ExternalLink size={16} /> {t.projects.liveDemo}
                        </a>
                      ) : (
                        <span className="flex items-center gap-2 text-sm font-semibold text-muted-foreground/70">
                          <ExternalLink size={16} /> {t.projects.demoSoon}
                        </span>
                      )}
                      {project.codeUrl && (
                        <a
                          href={project.codeUrl}
                          target="_blank"
                          rel="noreferrer noopener"
                          className="flex items-center gap-2 text-sm font-semibold text-foreground hover:text-primary transition-colors"
                        >
                          <Github size={16} /> {t.projects.code}
                        </a>
                      )}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>

        {PROJECTS.length > 3 && (
          <div className="mt-12 flex justify-center">
            <button
              onClick={() => setShowAll(!showAll)}
              className="flex items-center gap-2 px-6 py-3 rounded-full bg-secondary border border-white/10 text-foreground font-semibold hover:border-primary/50 hover:text-primary transition-all duration-300"
            >
              {showAll ? (
                <>
                  {t.projects.showLess} <ChevronUp size={20} />
                </>
              ) : (
                <>
                  {t.projects.showMore} ({PROJECTS.length - 3}) <ChevronDown size={20} />
                </>
              )}
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
