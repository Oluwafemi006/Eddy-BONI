import { ExternalLink, Github, ShoppingBag, LayoutDashboard, Users, Bus, Building2, Wrench, ArrowRight, Smartphone } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";
import { pathFor } from "@/seo/routes";
import type { CaseStudyId } from "@/content/caseStudies";
import { CONTACT } from "@/content/contact";
import { Section, SectionHeader } from "@/components/sections/SectionHeader";
import { stagger } from "@/components/layout/useReveal";

type ProjectMeta = {
  tags: string[];
  icon: typeof Bus;
  done: boolean;
  mobileTesting: boolean;
  demoUrl: string | null;
  codeUrl: string | null;
  caseStudy?: CaseStudyId;
};

// Same order as t.projects.items.
const PROJECTS_META: ProjectMeta[] = [
  {
    tags: ["Django/DRF", "Flutter", "Next.js"],
    icon: Bus,
    done: true,
    mobileTesting: true,
    demoUrl: "https://axistransportlogistique.com",
    codeUrl: null,
    caseStudy: "axis-transport",
  },
  {
    tags: ["Next.js", "i18n FR/EN", "SEO", "Open Graph"],
    icon: Building2,
    done: true,
    mobileTesting: false,
    demoUrl: "https://www.sd-internationalgroup.com",
    codeUrl: null,
    caseStudy: "sd-international-group",
  },
  {
    tags: ["React", "TypeScript", "Django REST", "PostgreSQL", "Railway"],
    icon: ShoppingBag,
    done: true,
    mobileTesting: false,
    demoUrl: "https://afrirent.netlify.app",
    codeUrl: "https://github.com/Oluwafemi006/Afrirent",
  },
  {
    tags: ["Django REST", "React", "TypeScript", "PostgreSQL"],
    icon: Wrench,
    done: true,
    mobileTesting: false,
    demoUrl: "https://luxuryelegancegarage.netlify.app",
    codeUrl: "https://github.com/Oluwafemi006/LUXEL-G",
  },
  {
    tags: ["Flutter", "Django REST", "PostgreSQL", "Stripe"],
    icon: ShoppingBag,
    done: false,
    mobileTesting: false,
    demoUrl: null,
    codeUrl: null,
  },
  {
    tags: ["React JS", "Chart.js", "FastAPI", "Redis"],
    icon: LayoutDashboard,
    done: false,
    mobileTesting: false,
    demoUrl: null,
    codeUrl: "https://github.com/Oluwafemi006/Rentboard",
  },
  {
    tags: ["Django", "PostgreSQL", "Docker", "Celery"],
    icon: Users,
    done: false,
    mobileTesting: false,
    demoUrl: null,
    codeUrl: null,
  },
];

export function Projects() {
  const { t, language } = useLanguage();
  const projects = t.projects.items.map((item, i) => ({ ...item, ...PROJECTS_META[i] }));
  const featured = projects.filter((project) => project.done);
  const inProgress = projects.filter((project) => !project.done);

  return (
    <Section id="projects">
      <SectionHeader
        title={`${t.projects.titlePrefix} ${t.projects.titleHighlight}`}
        subtitle={t.projects.subtitle}
        action={
          <a href={CONTACT.github} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-11 items-center gap-1.5 text-sm font-semibold text-brand hover:text-white">
            {t.projects.allProjects} <ArrowRight size={14} aria-hidden="true" />
          </a>
        }
      />

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {featured.map((project, i) => {
          const Icon = project.icon;
          return (
            <article key={project.title} style={stagger(i, 0.15)} className="reveal lift flex flex-col overflow-hidden rounded-2xl border border-border bg-card hover:border-[#2F4A7A]">
              <div aria-hidden="true" className="flex h-28 items-center justify-center border-b border-border bg-[#0C1528]">
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-secondary text-brand">
                  <Icon size={24} />
                </span>
              </div>
              <div className="flex flex-1 flex-col gap-3 p-5">
                <h3 className="text-lg font-bold text-white">{project.title}</h3>
                <p className="text-[15px] font-medium leading-relaxed text-secondary-foreground">{project.outcome}</p>
                <p className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs font-medium">
                  <span className="text-success">{project.demoUrl ? t.projects.statusLive : t.projects.statusDone}</span>
                  {project.mobileTesting && (
                    <span className="inline-flex items-center gap-1 text-warning">
                      <Smartphone size={12} aria-hidden="true" /> {t.projects.statusMobileTesting}
                    </span>
                  )}
                </p>
                <p className="text-[13px] leading-relaxed text-subtle">{project.description}</p>
                <ul className="mt-auto flex flex-wrap gap-1 pt-2" aria-label="Stack">
                  {project.tags.map((tag) => (
                    <li key={tag} className="rounded bg-secondary px-2 py-0.5 text-[11px] font-medium text-muted-foreground">
                      {tag}
                    </li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-x-4 border-t border-line pt-3 text-sm font-semibold">
                  {project.caseStudy && (
                    <a href={pathFor({ kind: "project", id: project.caseStudy }, language)} className="inline-flex min-h-11 items-center text-brand hover:text-white">
                      {t.projects.caseStudy}
                      <span className="sr-only"> : {project.title}</span>
                    </a>
                  )}
                  {project.demoUrl && (
                    <a href={project.demoUrl} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-11 items-center gap-1.5 text-foreground hover:text-white">
                      {t.projects.liveDemo}
                      <span className="sr-only"> : {project.title}</span>
                      <ExternalLink size={14} aria-hidden="true" />
                    </a>
                  )}
                  {project.codeUrl && (
                    <a href={project.codeUrl} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-11 items-center gap-1.5 text-foreground hover:text-white">
                      <Github size={14} aria-hidden="true" /> {t.projects.code}
                      <span className="sr-only"> : {project.title}</span>
                    </a>
                  )}
                </div>
              </div>
            </article>
          );
        })}
      </div>

      {inProgress.length > 0 && (
        <div className="reveal mt-6 rounded-2xl border border-dashed border-[#2A3B5C] p-5 sm:p-6">
          <h3 className="mb-4 text-sm font-semibold text-white">{t.projects.inProgressTitle}</h3>
          <ul className="grid gap-5 md:grid-cols-3">
            {inProgress.map((project) => (
              <li key={project.title} className="flex flex-col gap-1.5">
                {project.codeUrl ? (
                  <a href={project.codeUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-[15px] font-semibold text-white hover:text-brand">
                    {project.title} <Github size={14} aria-hidden="true" />
                  </a>
                ) : (
                  <span className="text-[15px] font-semibold text-white">{project.title}</span>
                )}
                <p className="text-sm leading-relaxed text-muted-foreground">{project.outcome}</p>
                <p className="text-xs text-subtle">{project.tags.join(" · ")}</p>
              </li>
            ))}
          </ul>
        </div>
      )}
    </Section>
  );
}
