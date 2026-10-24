import { useLanguage } from "@/i18n/LanguageContext";
import { Section, SectionHeader } from "@/components/sections/SectionHeader";
import { stagger } from "@/components/layout/useReveal";

// The marker shape carries the level as well as the colour: filled, outlined, dashed.
const MARKERS: Record<string, string> = {
  mastered: "bg-brand",
  practice: "border-2 border-brand",
  learning: "border-2 border-dashed border-[#6E86B3]",
};

export function TechStack() {
  const { t } = useLanguage();

  return (
    <Section id="skills">
      <SectionHeader title={`${t.stack.titlePrefix} ${t.stack.titleHighlight}`} subtitle={t.stack.subtitle} />
      <div className="grid gap-5 md:grid-cols-3">
        {t.stack.tiers.map((tier, i) => (
          <div key={tier.level} style={stagger(i, 0.15)} className="reveal lift flex flex-col gap-5 rounded-2xl border border-border bg-card p-6 sm:p-7">
            <div className="flex flex-col gap-1">
              <h3 className="text-[17px] font-bold text-white">{tier.title}</h3>
              <p className="text-[13px] text-subtle">{tier.caption}</p>
            </div>
            <ul className="flex flex-col gap-3 text-[15px] text-[#DCE3EE]">
              {tier.items.map((item) => (
                <li key={item} className="flex items-center gap-3">
                  <span aria-hidden="true" className={`h-2 w-2 shrink-0 rounded-[2px] ${MARKERS[tier.level]}`} />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  );
}
