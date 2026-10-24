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
    <section className="reveal rounded-2xl border border-border bg-card p-6 sm:p-8">
      <h2 className="mb-4 text-xl font-bold text-white sm:text-2xl">{title}</h2>
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
      <article className="pb-20 pt-10 sm:pt-14">
        <div className="mx-auto max-w-4xl px-4 sm:px-6">
          <Breadcrumbs items={breadcrumbsFor({ kind: "project", id }, language)} />

          <header className="hero-reveal mb-12">
            <span className="mb-6 inline-flex items-center gap-1.5 rounded-full border border-border bg-[#111E35] px-3 py-1.5 text-xs font-medium text-secondary-foreground">
              {id === "axis-transport" ? <Smartphone size={12} className="text-warning" aria-hidden="true" /> : <span className="h-1.5 w-1.5 rounded-full bg-success" aria-hidden="true" />}
              {content.status}
            </span>
            <h1 className="mb-6 text-[34px] font-extrabold leading-[1.1] tracking-[-0.03em] text-white sm:text-5xl">
              {content.h1}
            </h1>
            <p className="mb-8 text-lg leading-relaxed text-muted-foreground">{content.summary}</p>
            <a
              href={study.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-12 items-center gap-2 rounded-lg bg-primary px-6 font-semibold text-white transition-colors hover:bg-[#3B74F0]"
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
                    className="rounded-md bg-secondary px-3 py-1.5 text-sm font-medium text-secondary-foreground"
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
                    <Check size={18} className="mt-0.5 shrink-0 text-brand" aria-hidden="true" />
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
                      className={`w-full h-auto rounded-xl border border-border ${i === 0 ? "sm:col-span-2" : ""}`}
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
                  className="inline-flex h-12 items-center gap-2 rounded-lg bg-primary px-6 font-semibold text-white transition-colors hover:bg-[#3B74F0]"
                >
                  {t.caseStudy.ctaButton}
                </a>
                <a
                  href={`${home}#projects`}
                  className="inline-flex items-center gap-2 text-sm font-semibold text-foreground transition-colors hover:text-white"
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
