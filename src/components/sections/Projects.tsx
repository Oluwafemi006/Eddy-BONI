import { useState, type CSSProperties } from "react";
import { ArrowRight, ArrowUpRight, Github, ShoppingBag, Bus, Building2, Wrench } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";
import { pathFor } from "@/seo/routes";
import type { CaseStudyId } from "@/content/caseStudies";
import { CONTACT } from "@/content/contact";
import { Section, SectionHeader } from "@/components/sections/SectionHeader";

type Category = "web" | "plateforme" | "mobile";
type Filter = "all" | Category;
const FILTERS: Filter[] = ["all", "web", "plateforme", "mobile"];

type ProjectMeta = {
  tags: string[];
  categories: Category[];
  icon: typeof Bus;
  status: "live" | "demo";
  demoUrl: string;
  codeUrl: string | null;
  caseStudy?: CaseStudyId;
  /** Color of the preview header until a real screenshot is added. */
  tint: string;
  /**
   * Real screenshot of the full page (tall WebP in /public/images/projects), shown scrolling inside the
   * browser frame. While null, the frame shows a stylized preview with the project name.
   */
  screenshot: string | null;
};

// Same order as t.projects.items.
const PROJECTS_META: ProjectMeta[] = [
  {
    tags: ["Django/DRF", "Flutter", "Next.js"],
    categories: ["plateforme", "mobile"],
    icon: Bus,
    status: "live",
    demoUrl: "https://axistransportlogistique.com",
    codeUrl: null,
    caseStudy: "axis-transport",
    tint: "#1E3A8A",
    screenshot: null,
  },
  {
    tags: ["Next.js", "i18n FR/EN", "SEO", "Open Graph"],
    categories: ["web"],
    icon: Building2,
    status: "live",
    demoUrl: "https://www.sd-internationalgroup.com",
    codeUrl: null,
    caseStudy: "sd-international-group",
    tint: "#0F2A47",
    screenshot: null,
  },
  {
    tags: ["React", "TypeScript", "Django REST", "PostgreSQL"],
    categories: ["plateforme"],
    icon: ShoppingBag,
    status: "live",
    demoUrl: "https://afrirent.netlify.app",
    codeUrl: "https://github.com/Oluwafemi006/Afrirent",
    tint: "#0E6B58",
    screenshot: null,
  },
  {
    tags: ["Django REST", "React", "TypeScript", "PostgreSQL"],
    categories: ["plateforme"],
    icon: Wrench,
    status: "demo",
    demoUrl: "https://luxuryelegancegarage.netlify.app",
    codeUrl: "https://github.com/Oluwafemi006/LUXEL-G",
    tint: "#111827",
    screenshot: null,
  },
];

const host = (url: string) => new URL(url).hostname.replace(/^www\./, "");

export function Projects() {
  const { t, language } = useLanguage();
  const [filter, setFilter] = useState<Filter>("all");
  const projects = t.projects.items.map((item, i) => ({ ...item, ...PROJECTS_META[i] }));
  const visible = projects.filter((project) => filter === "all" || project.categories.includes(filter));

  return (
    <Section id="projects">
      <SectionHeader
        eyebrow={t.projects.eyebrow}
        title={t.projects.titlePrefix}
        highlight={t.projects.titleHighlight}
        subtitle={t.projects.subtitle}
        action={
          <a href={CONTACT.github} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-11 items-center gap-1.5 text-sm font-bold text-brand-soft hover:text-white">
            {t.projects.allProjects} <ArrowUpRight size={15} aria-hidden="true" />
          </a>
        }
      />

      <div className="reveal">
        <div role="group" aria-label={t.projects.filterLabel} className="mb-6 flex flex-wrap gap-2">
          {FILTERS.map((id) => {
            const active = filter === id;
            return (
              <button
                key={id}
                type="button"
                aria-pressed={active}
                onClick={() => setFilter(id)}
                className={`h-10 rounded-full border px-4 text-[13px] font-bold transition-colors duration-300 ${
                  active ? "border-primary bg-primary text-white" : "border-border bg-card text-muted-foreground hover:border-[#2C4680] hover:text-white"
                }`}
              >
                {t.projects.filters[id]}
              </button>
            );
          })}
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {visible.map((project, i) => {
            const Icon = project.icon;
            const mainHref = project.caseStudy ? pathFor({ kind: "project", id: project.caseStudy }, language) : project.demoUrl;
            const mainLabel = project.caseStudy ? t.projects.caseStudy : t.projects.liveDemo;
            const external = !project.caseStudy;
            return (
              <article
                key={project.title}
                className="group flex flex-col overflow-hidden rounded-[20px] border border-border bg-card transition-[translate,border-color,background-color] duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-1.5 hover:border-[#2C4680] hover:bg-[#0F1A33]"
              >
                {/* Browser frame with the project's real address; the page inside scrolls slowly. */}
                <div className="relative h-[180px] overflow-hidden bg-[#0E1A36] px-4 pt-4" role="img" aria-label={`${t.projects.previewLabel} : ${project.title}`}>
                  <div className="h-full overflow-hidden rounded-t-[10px] bg-[#F4F6FA] shadow-[0_20px_40px_rgba(0,0,0,0.45)]">
                    <div className="flex h-[18px] items-center gap-1 bg-[#E3E8F1] px-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-[#F87171]" />
                      <span className="h-1.5 w-1.5 rounded-full bg-[#FBBF24]" />
                      <span className="h-1.5 w-1.5 rounded-full bg-[#34D399]" />
                      <span className="ml-2 truncate text-[9px] font-semibold text-[#64748B]">{host(project.demoUrl)}</span>
                    </div>
                    <div className="shot" style={{ "--d": `${i * 1.5}s` } as CSSProperties}>
                      {project.screenshot ? (
                        <img src={project.screenshot} alt="" loading="lazy" decoding="async" width={400} height={900} className="block w-full" />
                      ) : (
                        <>
                          <div className="m-2.5 flex h-[72px] items-center gap-2.5 rounded-lg px-3 text-white" style={{ background: project.tint }}>
                            <Icon size={18} />
                            <span className="text-xs font-extrabold">{project.title}</span>
                          </div>
                          <div className="grid grid-cols-3 gap-1.5 px-2.5 pb-2">
                            <div className="h-[46px] rounded-md bg-[#DCE4F2]" />
                            <div className="h-[46px] rounded-md bg-[#DCE4F2]" />
                            <div className="h-[46px] rounded-md bg-[#DCE4F2]" />
                          </div>
                          <div className="mx-2.5 mb-2 h-[60px] rounded-md bg-[#E8EDF6]" />
                          <div className="mx-2.5 mb-2 h-[60px] rounded-md bg-[#DCE4F2]" />
                        </>
                      )}
                    </div>
                  </div>
                  <span className="absolute bottom-3 left-3.5 rounded-full border border-[#34D399] bg-[rgba(6,11,24,0.88)] px-2.5 py-1 text-[11px] font-extrabold text-[#34D399]">
                    ● {project.status === "demo" ? t.projects.statusDemo : t.projects.statusLive}
                  </span>
                </div>

                <div className="flex flex-1 flex-col gap-2 p-5">
                  <h3 className="text-[19px] font-extrabold text-white">{project.title}</h3>
                  <p className="text-[13px] font-semibold text-brand-soft">{project.kind}</p>
                  <p className="text-sm leading-relaxed text-muted-foreground">{project.outcome}</p>
                  <p className="mt-auto pt-2.5 text-xs text-subtle">{project.tags.join(" · ")}</p>
                  <div className="flex flex-wrap items-center gap-x-4">
                    <a
                      href={mainHref}
                      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                      className="inline-flex min-h-11 items-center gap-1.5 text-sm font-bold text-brand-soft hover:text-white"
                    >
                      {mainLabel}
                      <span className="sr-only"> : {project.title}</span>
                      <ArrowRight size={14} className="nudge" aria-hidden="true" />
                    </a>
                    {project.caseStudy && (
                      <a href={project.demoUrl} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-11 items-center gap-1 text-sm font-semibold text-muted-foreground hover:text-white">
                        {t.projects.liveDemo}
                        <span className="sr-only"> : {project.title}</span>
                        <ArrowUpRight size={14} aria-hidden="true" />
                      </a>
                    )}
                    {project.codeUrl && (
                      <a href={project.codeUrl} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-11 items-center gap-1 text-sm font-semibold text-muted-foreground hover:text-white">
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
      </div>
    </Section>
  );
}
