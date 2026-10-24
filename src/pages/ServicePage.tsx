import type { ReactNode } from "react";
import { ArrowRight, Check, ExternalLink } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";
import { SiteLayout } from "@/components/layout/SiteLayout";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { SERVICES, type ServiceId, type RelatedWork } from "@/content/services";
import { CASE_STUDIES } from "@/content/caseStudies";
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

function CheckList({ items }: { items: string[] }) {
  return (
    <ul className="space-y-3">
      {items.map((item) => (
        <li key={item} className="flex items-start gap-3 text-muted-foreground">
          <Check size={18} className="mt-0.5 shrink-0 text-primary" aria-hidden="true" />
          {item}
        </li>
      ))}
    </ul>
  );
}

function RelatedItem({ work }: { work: RelatedWork }) {
  const { t, language } = useLanguage();

  if ("caseStudy" in work) {
    const study = CASE_STUDIES[work.caseStudy];
    return (
      <li className="rounded-xl border border-white/5 bg-secondary/40 p-5">
        <h3 className="font-display font-semibold text-foreground mb-1">{study.name}</h3>
        <p className="text-sm text-muted-foreground mb-3">{work.note[language]}</p>
        <a
          href={pathFor({ kind: "project", id: work.caseStudy }, language)}
          className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:underline"
        >
          {t.servicePage.caseStudy} <ArrowRight size={14} />
        </a>
      </li>
    );
  }

  return (
    <li className="rounded-xl border border-white/5 bg-secondary/40 p-5">
      <h3 className="font-display font-semibold text-foreground mb-1">{work.name}</h3>
      <p className="text-sm text-muted-foreground">{work.note[language]}</p>
      {work.url && (
        <a
          href={work.url}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-3 inline-flex items-center gap-1.5 text-sm font-semibold text-foreground hover:text-primary transition-colors"
        >
          {t.servicePage.visit} <ExternalLink size={14} />
        </a>
      )}
    </li>
  );
}

export default function ServicePage({ id }: { id: ServiceId }) {
  const { t, language } = useLanguage();
  const service = SERVICES[id];
  const content = service.content[language];
  const home = pathFor({ kind: "home" }, language);
  const highlights = service.scope === "local" ? t.servicePage.localHighlights : t.servicePage.remoteHighlights;

  return (
    <SiteLayout>
      <article className="pt-32 pb-24">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <Breadcrumbs items={breadcrumbsFor({ kind: "service", id }, language)} />

          <header className="mb-12">
            <h1 className="text-4xl md:text-6xl font-display font-bold text-foreground leading-tight mb-6">
              {content.h1}
            </h1>
            <div className="space-y-3 text-lg text-muted-foreground leading-relaxed mb-8">
              {content.intro.map((text) => (
                <p key={text}>{text}</p>
              ))}
            </div>
            <a
              href={`${home}#contact`}
              className="inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 font-semibold text-primary-foreground transition-all duration-300 hover:box-glow"
            >
              {t.servicePage.ctaButton} <ArrowRight size={16} />
            </a>
          </header>

          <div className="space-y-6">
            <Section title={t.servicePage.offers}>
              <CheckList items={content.offers} />
            </Section>

            <Section title={t.servicePage.stack}>
              <ul className="flex flex-wrap gap-2">
                {service.stack.map((tech) => (
                  <li
                    key={tech}
                    className="px-3 py-1 text-sm font-medium rounded-full bg-secondary text-secondary-foreground border border-white/5"
                  >
                    {tech}
                  </li>
                ))}
              </ul>
            </Section>

            <Section title={t.servicePage.howTitle}>
              <CheckList items={highlights} />
            </Section>

            <Section title={t.servicePage.related}>
              <ul className="grid gap-4 sm:grid-cols-2">
                {service.related.map((work) => (
                  <RelatedItem key={"caseStudy" in work ? work.caseStudy : work.name} work={work} />
                ))}
              </ul>
            </Section>

            <Section title={t.servicePage.ctaTitle}>
              <p className="text-muted-foreground mb-6">{t.servicePage.ctaText}</p>
              <a
                href={`${home}#contact`}
                className="inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 font-semibold text-primary-foreground transition-all duration-300 hover:box-glow"
              >
                {t.servicePage.ctaButton}
              </a>
            </Section>
          </div>
        </div>
      </article>
    </SiteLayout>
  );
}
