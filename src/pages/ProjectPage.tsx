import type { ReactNode } from "react";
import { ArrowLeft, ExternalLink, Smartphone, Check } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";
import { SiteLayout } from "@/components/layout/SiteLayout";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { CASE_STUDIES, type CaseStudyId } from "@/content/caseStudies";
import { breadcrumbsFor } from "@/seo/breadcrumbs";
import { pathFor } from "@/seo/routes";

function Section({ title, children }: { title: string; children: ReactNode }) {
  return (
    <section className="rounded-2xl bg-card border border-white/5 p-8">
      <h2 className="text-2xl font-display font-bold text-foreground mb-4">{title}</h2>
      {children}
    </section>
  );
}

function Paragraphs({ items }: { items: string[] }) {
  return (
    <div className="space-y-3 text-muted-foreground leading-relaxed">
      {items.map((text) => (
        <p key={text}>{text}</p>
      ))}
    </div>
  );
}

export default function ProjectPage({ id }: { id: CaseStudyId }) {
  const { t, language } = useLanguage();
  const study = CASE_STUDIES[id];
  const content = study.content[language];
  const home = pathFor({ kind: "home" }, language);

  return (
    <SiteLayout>
      <article className="pt-32 pb-24">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <Breadcrumbs items={breadcrumbsFor({ kind: "project", id }, language)} />

          <header className="mb-12">
            <span className="mb-6 inline-flex items-center gap-1.5 px-3 py-1 text-xs font-semibold rounded-full border bg-primary/15 text-primary border-primary/30">
              {id === "axis-transport" && <Smartphone size={12} aria-hidden="true" />}
              {content.status}
            </span>
            <h1 className="text-4xl md:text-6xl font-display font-bold text-foreground leading-tight mb-6">
              {content.h1}
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">{content.summary}</p>
            <a
              href={study.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 font-semibold text-primary-foreground transition-all duration-300 hover:box-glow"
            >
              {t.caseStudy.live} <ExternalLink size={16} />
            </a>
          </header>

          <div className="space-y-6">
            <Section title={t.caseStudy.context}>
              <Paragraphs items={content.context} />
            </Section>

            {content.problem && (
              <Section title={t.caseStudy.problem}>
                <Paragraphs items={content.problem} />
              </Section>
            )}

            {content.role && (
              <Section title={t.caseStudy.role}>
                <Paragraphs items={content.role} />
              </Section>
            )}

            <Section title={t.caseStudy.stack}>
              <ul className="flex flex-wrap gap-2">
                {study.stack.map((tech) => (
                  <li
                    key={tech}
                    className="px-3 py-1 text-sm font-medium rounded-full bg-secondary text-secondary-foreground border border-white/5"
                  >
                    {tech}
                  </li>
                ))}
              </ul>
            </Section>

            <Section title={t.caseStudy.features}>
              <ul className="space-y-3">
                {content.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3 text-muted-foreground">
                    <Check size={18} className="mt-0.5 shrink-0 text-primary" aria-hidden="true" />
                    {feature}
                  </li>
                ))}
              </ul>
            </Section>

            {study.screenshots.length > 0 && (
              <Section title={t.caseStudy.screenshots}>
                <div className="grid gap-6 sm:grid-cols-2">
                  {study.screenshots.map((shot, i) => (
                    <img
                      key={shot.src}
                      src={shot.src}
                      width={shot.width}
                      height={shot.height}
                      alt={shot.alt[language]}
                      loading={i === 0 ? "eager" : "lazy"}
                      decoding="async"
                      className={`w-full h-auto rounded-xl border border-white/5 ${i === 0 ? "sm:col-span-2" : ""}`}
                    />
                  ))}
                </div>
              </Section>
            )}

            <Section title={t.caseStudy.ctaTitle}>
              <p className="text-muted-foreground mb-6">{t.caseStudy.ctaText}</p>
              <div className="flex flex-wrap items-center gap-4">
                <a
                  href={`${home}#contact`}
                  className="inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 font-semibold text-primary-foreground transition-all duration-300 hover:box-glow"
                >
                  {t.caseStudy.ctaButton}
                </a>
                <a
                  href={`${home}#projects`}
                  className="inline-flex items-center gap-2 text-sm font-semibold text-foreground hover:text-primary transition-colors"
                >
                  <ArrowLeft size={16} /> {t.caseStudy.backToProjects}
                </a>
              </div>
            </Section>
          </div>
        </div>
      </article>
    </SiteLayout>
  );
}
