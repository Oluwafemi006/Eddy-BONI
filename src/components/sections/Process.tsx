import { useLanguage } from "@/i18n/LanguageContext";
import { Section, SectionHeader } from "@/components/sections/SectionHeader";

export function Process() {
  const { t } = useLanguage();

  return (
    <Section id="process">
      <SectionHeader title={`${t.process.titlePrefix} ${t.process.titleHighlight}`} subtitle={t.process.subtitle} />
      <ol className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {t.process.steps.map((step) => (
          <li key={step.title} className="flex flex-col gap-2 border-t-2 border-primary pt-5">
            <h3 className="text-[17px] font-bold text-white">{step.title}</h3>
            <p className="text-sm leading-relaxed text-muted-foreground">{step.description}</p>
          </li>
        ))}
      </ol>
    </Section>
  );
}
