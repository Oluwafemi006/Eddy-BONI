import { ArrowRight, CreditCard, Download, ExternalLink, Globe2, GraduationCap, Linkedin, UserRound, type LucideIcon } from "lucide-react";
import { CONTACT } from "@/content/contact";
import { pathFor } from "@/seo/routes";
import type { CaseStudyId } from "@/content/caseStudies";
import { useLanguage } from "@/i18n/LanguageContext";
import { Section, SectionHeader } from "@/components/sections/SectionHeader";
import { stagger } from "@/components/layout/useReveal";

// "Why me" facts: only verifiable ones (no client counts, revenue or satisfaction rates).
const WHY_ICONS: Record<string, LucideIcon> = { live: ExternalLink, single: UserRound, payments: CreditCard, international: Globe2 };

/** Professional timeline (left) and verifiable strengths (right), side by side on large screens. */
export function Experience() {
  const { t, language } = useLanguage();

  return (
    <Section id="experience" tone="alt">
      <div className="grid gap-14 lg:grid-cols-2 lg:gap-12">
        <div className="flex flex-col">
          <SectionHeader eyebrow={t.experience.eyebrow} title={t.experience.titlePrefix} highlight={t.experience.titleHighlight} size="md" />
          <ol className="ml-2 flex flex-col gap-3.5 border-l-2 border-[#1C2A48] pl-6">
            {t.experience.items.map((exp, i) => (
              <li
                key={`${exp.company}-${exp.period}`}
                style={stagger(i, 0.12)}
                className="reveal lift relative rounded-2xl border border-border bg-card px-5 py-4 hover:border-[#2C4680]"
              >
                <span
                  aria-hidden="true"
                  className={`absolute -left-[33px] top-[22px] h-3.5 w-3.5 rounded-full border-[3px] border-surface bg-primary ${exp.current ? "live-dot" : ""}`}
                />
                <p className={`text-xs font-bold ${exp.current ? "text-warning" : "text-brand-soft"}`}>
                  {[exp.period, exp.type].filter(Boolean).join(" · ")}
                </p>
                <h3 className="mt-1 text-base font-extrabold text-white">
                  {exp.role} — {exp.company}
                </h3>
                <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{exp.description}</p>
                {exp.caseStudy && (
                  <a
                    href={pathFor({ kind: "project", id: exp.caseStudy as CaseStudyId }, language)}
                    className="group mt-1 inline-flex min-h-9 items-center gap-1.5 text-[13px] font-bold text-brand-soft hover:text-white"
                  >
                    {t.experience.caseStudyLink}
                    <span className="sr-only"> : {exp.company}</span>
                    <ArrowRight size={13} className="nudge" aria-hidden="true" />
                  </a>
                )}
              </li>
            ))}
          </ol>

          <p className="reveal mt-6 flex items-start gap-3 text-sm text-muted-foreground">
            <GraduationCap size={18} className="mt-0.5 shrink-0 text-brand" aria-hidden="true" />
            <span>
              <span className="font-semibold text-white">{t.about.education.title} : </span>
              {t.about.education.text}
            </span>
          </p>

          <div className="reveal mt-6 flex flex-wrap gap-3">
            <a
              href={CONTACT.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex h-[46px] items-center gap-2 rounded-full border border-[#2A3B62] px-5 text-sm font-semibold text-foreground transition-[border-color,color,translate] duration-300 hover:-translate-y-0.5 hover:border-brand hover:text-white"
            >
              <Linkedin size={16} aria-hidden="true" /> {t.experience.linkedin}
              <ArrowRight size={14} className="nudge" aria-hidden="true" />
            </a>
            {/* Shown once the CV file path is set in src/content/contact.ts (TODO there). */}
            {CONTACT.cv && (
              <a
                href={CONTACT.cv}
                download
                className="inline-flex h-[46px] items-center gap-2 rounded-full border border-[#2A3B62] px-5 text-sm font-semibold text-foreground transition-colors hover:border-brand hover:text-white"
              >
                <Download size={16} aria-hidden="true" /> {t.experience.cv}
              </a>
            )}
          </div>
        </div>

        <div id="why" className="flex flex-col">
          <SectionHeader
            eyebrow={t.whyMe.eyebrow}
            title={t.whyMe.titlePrefix}
            highlight={t.whyMe.titleHighlight}
            subtitle={t.whyMe.subtitle}
            size="md"
          />
          <ul className="grid gap-x-7 gap-y-6 sm:grid-cols-2">
            {t.whyMe.items.map((item, i) => {
              const Icon = WHY_ICONS[item.id];
              return (
                <li key={item.id} style={stagger(i, 0.1)} className="reveal flex gap-3.5">
                  <span aria-hidden="true" className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-[#2C4680] text-brand-soft">
                    <Icon size={18} />
                  </span>
                  <div>
                    <h3 className="mb-1 text-[15px] font-extrabold text-brand-soft">{item.title}</h3>
                    <p className="text-sm leading-relaxed text-muted-foreground">{item.text}</p>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </Section>
  );
}
