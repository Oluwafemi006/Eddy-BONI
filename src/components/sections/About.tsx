import { ArrowRight, Briefcase, MapPin, MessageSquare } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";
import { Eyebrow } from "@/components/sections/SectionHeader";

export function About() {
  const { t } = useLanguage();
  const { facts } = t.about;

  return (
    <section id="about" className="border-t border-line">
      <div className="mx-auto grid max-w-6xl gap-12 px-4 py-16 sm:px-6 sm:py-[72px] lg:grid-cols-2">
        <div className="flex flex-col gap-5">
          <Eyebrow>{t.about.badge}</Eyebrow>
          <h2 className="text-[28px] font-extrabold leading-tight text-white sm:text-4xl">{t.about.title}</h2>
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

        <div className="rounded-2xl border border-border bg-card p-6 sm:p-8">
          <h3 className="mb-6 text-base font-bold text-white">{t.about.timelineTitle}</h3>
          <ol className="ml-[7px] border-l-2 border-[#22355A]">
            {t.about.timeline.map((step, i) => (
              <li key={`${step.year}-${step.title}`} className={`relative flex gap-5 pl-7 ${i < t.about.timeline.length - 1 ? "pb-7" : ""}`}>
                <span aria-hidden="true" className="absolute -left-[9px] top-[3px] h-4 w-4 rounded-full border-[3px] border-card bg-primary" />
                <span className="w-12 shrink-0 text-[15px] font-bold text-white">{step.year}</span>
                <div className="flex flex-col gap-0.5">
                  <span className="text-[15px] font-semibold text-white">{step.title}</span>
                  <span className="text-sm text-muted-foreground">{step.place}</span>
                  {step.note && <span className="text-[13px] text-brand">{step.note}</span>}
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
