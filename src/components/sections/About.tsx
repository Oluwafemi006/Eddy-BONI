import { ArrowRight, Briefcase, MapPin, MessageSquare } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";
import { pathFor } from "@/seo/routes";
import type { CaseStudyId } from "@/content/caseStudies";
import { Eyebrow } from "@/components/sections/SectionHeader";
import { stagger } from "@/components/layout/useReveal";

export function About() {
  const { t, language } = useLanguage();
  const { facts } = t.about;

  return (
    <section id="about" className="border-t border-line">
      <div className="mx-auto grid max-w-6xl gap-12 px-4 py-16 sm:px-6 sm:py-[72px] lg:grid-cols-2">
        <div className="reveal flex flex-col gap-5">
          <Eyebrow>{t.about.badge}</Eyebrow>
          <h2 className="text-[26px] font-extrabold leading-tight text-white text-balance sm:text-[32px]">{t.about.title}</h2>
          <p className="leading-relaxed text-muted-foreground">{t.hero.geoSentence}</p>
          <ul className="flex flex-col gap-3 text-[15px] text-secondary-foreground">
            <li className="flex items-center gap-3">
              <MapPin size={18} className="shrink-0 text-brand" aria-hidden="true" />
              {facts.location}
            </li>
            <li className="flex items-center gap-3">
              <Briefcase size={18} className="shrink-0 text-brand" aria-hidden="true" />
              {facts.experience}
            </li>
            <li className="flex items-center gap-3">
              <span className="flex w-[18px] shrink-0 justify-center" aria-hidden="true">
                <span className="h-2.5 w-2.5 rounded-full bg-success" />
              </span>
              {facts.availability}
            </li>
            <li className="flex items-center gap-3">
              <MessageSquare size={18} className="shrink-0 text-brand" aria-hidden="true" />
              {facts.languages}
            </li>
          </ul>
          <a href="#experience" className="inline-flex h-11 items-center gap-2 self-start rounded-lg border border-[#3A4E73] px-4 text-sm font-semibold text-foreground transition-colors hover:border-brand hover:text-white">
            {t.about.cta} <ArrowRight size={16} aria-hidden="true" />
          </a>
        </div>

        <div style={stagger(1, 0.2)} className="reveal flex flex-col rounded-2xl border border-border bg-card p-6 sm:p-8">
          <h3 className="mb-6 text-base font-bold text-white">{t.about.timelineTitle}</h3>
          <ol className="ml-[7px] border-l-2 border-[#22355A]">
            {t.about.timeline.map((step, i) => (
              <li
                key={step.title}
                style={stagger(i + 2, 0.15)}
                className={`reveal relative flex flex-col gap-1 pl-7 ${i < t.about.timeline.length - 1 ? "pb-6" : ""}`}
              >
                <span aria-hidden="true" className="absolute -left-[9px] top-[3px] h-4 w-4 rounded-full border-[3px] border-card bg-primary" />
                <span className="text-[13px] font-semibold text-brand">{step.period}</span>
                <span className="text-[15px] font-semibold text-white">
                  {step.title}
                  {step.place && <span className="font-normal text-muted-foreground"> · {step.place}</span>}
                </span>
                <span className="text-sm leading-relaxed text-muted-foreground">{step.description}</span>
                {step.caseStudy && (
                  <a
                    href={pathFor({ kind: "project", id: step.caseStudy as CaseStudyId }, language)}
                    className="inline-flex min-h-8 items-center gap-1.5 self-start text-[13px] font-semibold text-brand hover:text-white"
                  >
                    {t.about.caseStudyLink}
                    <span className="sr-only"> : {step.title}</span>
                    <ArrowRight size={13} aria-hidden="true" />
                  </a>
                )}
              </li>
            ))}
          </ol>

          <div className="mt-7 flex flex-col gap-1 border-t border-line pt-5">
            <h3 className="text-xs font-semibold uppercase tracking-wider text-subtle">{t.about.education.title}</h3>
            <p className="text-sm text-muted-foreground">{t.about.education.text}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
