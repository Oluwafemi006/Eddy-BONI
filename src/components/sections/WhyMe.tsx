import { CreditCard, ExternalLink, Globe2, UserRound, type LucideIcon } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";
import { Section, SectionHeader } from "@/components/sections/SectionHeader";
import { stagger } from "@/components/layout/useReveal";

// Only verifiable facts: no client counts, revenue or satisfaction rates.
const ICONS: Record<string, LucideIcon> = { live: ExternalLink, single: UserRound, payments: CreditCard, international: Globe2 };

export function WhyMe() {
  const { t } = useLanguage();

  return (
    <Section id="why">
      <SectionHeader title={`${t.whyMe.titlePrefix} ${t.whyMe.titleHighlight}`} subtitle={t.whyMe.subtitle} />
      <ul className="grid gap-4 sm:grid-cols-2">
        {t.whyMe.items.map((item, i) => {
          const Icon = ICONS[item.id];
          return (
            <li key={item.id} style={stagger(i, 0.12)} className="reveal flex gap-4 rounded-2xl border border-border bg-card p-5 sm:p-6">
              <span aria-hidden="true" className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-secondary text-brand">
                <Icon size={20} />
              </span>
              <div className="flex flex-col gap-1.5">
                <h3 className="text-base font-bold text-white">{item.title}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">{item.text}</p>
              </div>
            </li>
          );
        })}
      </ul>
    </Section>
  );
}
