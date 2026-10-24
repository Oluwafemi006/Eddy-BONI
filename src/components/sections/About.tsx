import { ArrowRight, Briefcase, GraduationCap, MapPin, MessageSquare } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";
import { Eyebrow } from "@/components/sections/SectionHeader";
import { stagger } from "@/components/layout/useReveal";

// Professional experience lives in the Experience section only; About shows education on one line.
export function About() {
  const { t } = useLanguage();
  const { facts } = t.about;

  return (
    <section id="about" className="border-t border-line">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-16 sm:px-6 sm:py-[72px] lg:grid-cols-2 lg:gap-12">
        <div className="reveal flex flex-col gap-5">
          <Eyebrow>{t.about.badge}</Eyebrow>
          <h2 className="text-[26px] font-extrabold leading-tight text-white text-balance sm:text-[32px]">{t.about.title}</h2>
        </div>

        <div style={stagger(1, 0.2)} className="reveal flex flex-col gap-5 lg:pt-12">
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

          <div className="flex items-start gap-3 rounded-xl border border-border bg-card px-4 py-3.5">
            <GraduationCap size={18} className="mt-0.5 shrink-0 text-brand" aria-hidden="true" />
            <p className="text-sm text-muted-foreground">
              <span className="font-semibold text-white">{t.about.education.title} : </span>
              {t.about.education.text}
            </p>
          </div>

          <a href="#experience" className="inline-flex h-11 items-center gap-2 self-start rounded-lg border border-[#3A4E73] px-4 text-sm font-semibold text-foreground transition-colors hover:border-brand hover:text-white">
            {t.about.cta} <ArrowRight size={16} aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  );
}
