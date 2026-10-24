import { Bus, Building2, Wrench, Globe } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";
import { Section, SectionHeader } from "@/components/sections/SectionHeader";
import { stagger } from "@/components/layout/useReveal";

const ICONS: Record<string, typeof Bus> = { transport: Bus, btp: Building2, garage: Wrench, online: Globe };

// Only sectors with a real project behind them (see the example on each card).
export function Sectors() {
  const { t } = useLanguage();

  return (
    <Section id="sectors">
      <SectionHeader title={`${t.sectors.titlePrefix} ${t.sectors.titleHighlight}`} subtitle={t.sectors.subtitle} />
      <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {t.sectors.items.map((sector, i) => {
          const Icon = ICONS[sector.id];
          return (
            <li key={sector.id} style={stagger(i, 0.12)} className="reveal flex flex-col gap-2 rounded-2xl border border-border bg-card p-5">
              <span aria-hidden="true" className="mb-1 flex h-10 w-10 items-center justify-center rounded-lg bg-secondary text-brand">
                <Icon size={20} />
              </span>
              <h3 className="text-base font-bold text-white">{sector.title}</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">{sector.text}</p>
              <p className="mt-auto pt-1 text-xs font-medium text-subtle">{sector.example}</p>
            </li>
          );
        })}
      </ul>
    </Section>
  );
}
