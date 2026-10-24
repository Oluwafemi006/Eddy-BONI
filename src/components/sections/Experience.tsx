import { Briefcase, Wrench } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";
import { Section, SectionHeader } from "@/components/sections/SectionHeader";
import { stagger } from "@/components/layout/useReveal";

const ICONS = [Briefcase, Wrench];

export function Experience() {
  const { t } = useLanguage();

  return (
    <Section id="experience">
      <SectionHeader title={`${t.experience.titlePrefix} ${t.experience.titleHighlight}`} subtitle={t.experience.subtitle} />
      <div className="grid gap-5 lg:grid-cols-2">
        {t.experience.items.map((exp, i) => {
          const Icon = ICONS[i] ?? Briefcase;
          return (
            <article key={exp.company} style={stagger(i, 0.15)} className="reveal lift flex gap-4 hover:border-[#2F4A7A] rounded-2xl border border-border bg-card p-5 sm:gap-5 sm:p-7">
              <span aria-hidden="true" className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary text-white">
                <Icon size={22} />
              </span>
              <div className="flex min-w-0 flex-col gap-1.5">
                <h3 className="text-[17px] font-bold text-white">{exp.company}</h3>
                <p className="text-sm font-semibold text-secondary-foreground">{exp.role}</p>
                <p className="flex flex-wrap gap-x-2 text-[13px] text-subtle">
                  <span>{exp.period}</span>
                  <span aria-hidden="true">·</span>
                  <span>{exp.location}</span>
                  <span aria-hidden="true">·</span>
                  <span>{exp.type}</span>
                </p>
                <p className={`text-xs font-semibold ${exp.current ? "text-warning" : "text-success"}`}>{exp.status}</p>
                <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{exp.description}</p>
                {exp.skills.length > 0 && (
                  <ul className="mt-2 flex flex-wrap gap-1.5">
                    {exp.skills.map((skill) => (
                      <li key={skill} className="rounded-md bg-secondary px-2.5 py-1 text-xs font-medium text-secondary-foreground">
                        {skill}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </article>
          );
        })}
      </div>
    </Section>
  );
}
