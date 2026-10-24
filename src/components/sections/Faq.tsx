import { ChevronDown } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";
import { Section, SectionHeader } from "@/components/sections/SectionHeader";
import { stagger } from "@/components/layout/useReveal";

// Native <details> keeps every answer in the prerendered HTML, even when collapsed.
export function Faq() {
  const { t } = useLanguage();

  return (
    <Section id="faq">
      <div className="mx-auto max-w-3xl">
        <SectionHeader title={`${t.faq.titlePrefix} ${t.faq.titleHighlight}`} subtitle={t.faq.subtitle} />
        <div className="flex flex-col gap-3">
          {t.faq.items.map((item, i) => (
            <details key={item.question} style={stagger(i, 0.08)} className="reveal group rounded-2xl border border-border bg-card open:border-[#2F4A7A]">
              <summary className="flex min-h-11 cursor-pointer list-none items-center justify-between gap-4 p-5 [&::-webkit-details-marker]:hidden">
                <h3 className="text-base font-semibold text-white">{item.question}</h3>
                <ChevronDown size={18} className="shrink-0 text-brand transition-transform duration-200 group-open:rotate-180" aria-hidden="true" />
              </summary>
              <p className="-mt-1 px-5 pb-5 text-[15px] leading-relaxed text-muted-foreground">{item.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </Section>
  );
}
