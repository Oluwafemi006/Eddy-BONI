import { Globe, LayoutDashboard, Smartphone, ArrowRight, Check, MessageCircle } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";
import { pathFor } from "@/seo/routes";
import { SERVICES as SERVICE_PAGES } from "@/content/services";
import { OFFER_LINKS } from "@/content/offers";
import { whatsappLink } from "@/content/contact";
import { Section, SectionHeader } from "@/components/sections/SectionHeader";
import { stagger } from "@/components/layout/useReveal";

const ICONS: Record<string, typeof Globe> = { vitrine: Globe, plateforme: LayoutDashboard, mobile: Smartphone };

export function Services() {
  const { t, language } = useLanguage();

  return (
    <Section id="services">
      <SectionHeader title={`${t.services.titlePrefix} ${t.services.titleHighlight}`} subtitle={t.services.subtitle} />
      <div className="grid gap-5 lg:grid-cols-3">
        {t.services.items.map((offer, i) => {
          const meta = OFFER_LINKS[offer.id];
          const Icon = ICONS[offer.id];
          return (
            <article key={offer.id} style={stagger(i, 0.15)} className="reveal lift flex flex-col gap-4 rounded-2xl border border-border bg-card p-6 hover:border-[#2F4A7A] sm:p-7">
              <span aria-hidden="true" className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary text-white">
                <Icon size={22} />
              </span>
              <h3 className="text-lg font-bold leading-snug text-white">{offer.title}</h3>
              <p className="text-[15px] leading-relaxed text-secondary-foreground">{offer.outcome}</p>
              <ul className="flex flex-col gap-2">
                {offer.details.map((detail) => (
                  <li key={detail} className="flex items-start gap-2.5 text-sm text-muted-foreground">
                    <Check size={16} className="mt-0.5 shrink-0 text-brand" aria-hidden="true" />
                    {detail}
                  </li>
                ))}
              </ul>
              <p className="rounded-lg bg-background/60 px-3 py-2.5 text-sm text-muted-foreground">
                <span className="text-subtle">{t.services.exampleLabel} : </span>
                <a href={pathFor({ kind: "project", id: meta.caseStudy }, language)} className="font-semibold text-white hover:text-brand">
                  {offer.example}
                </a>
                {offer.exampleNote && <span className="text-warning"> ({offer.exampleNote})</span>}
              </p>
              <div className="mt-auto flex flex-wrap items-center gap-x-4 gap-y-2 pt-1">
                <a
                  href={whatsappLink(`${t.whatsapp.quoteMessage}${offer.title}`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-11 items-center gap-2 rounded-lg bg-primary px-4 text-sm font-semibold text-white transition-colors hover:bg-[#3B74F0]"
                >
                  <MessageCircle size={16} aria-hidden="true" />
                  {t.services.quote}
                  <span className="sr-only"> : {offer.title}</span>
                </a>
                <a href={pathFor({ kind: "service", id: meta.page }, language)} className="inline-flex min-h-11 items-center gap-1.5 text-sm font-semibold text-brand hover:text-white">
                  {t.services.learnMore}
                  <span className="sr-only"> : {SERVICE_PAGES[meta.page].content[language].h1}</span>
                  <ArrowRight size={14} aria-hidden="true" />
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </Section>
  );
}
