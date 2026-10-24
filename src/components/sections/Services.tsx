import { Globe, Smartphone, ServerCog, Lightbulb, ArrowRight, Check } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";
import { pathFor } from "@/seo/routes";
import { SERVICES as SERVICE_PAGES, type ServiceId } from "@/content/services";
import { Section } from "@/components/sections/SectionHeader";
import { stagger } from "@/components/layout/useReveal";

const SERVICE_META: { icon: typeof Globe; page: ServiceId | null }[] = [
  { icon: Globe, page: "react-nextjs" },
  { icon: Smartphone, page: "flutter" },
  { icon: ServerCog, page: "django" },
  { icon: Lightbulb, page: null },
];

export function Services() {
  const { t, language } = useLanguage();
  const services = t.services.items.map((item, i) => ({ ...item, ...SERVICE_META[i] }));

  return (
    <Section id="services">
      <div className="grid gap-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:items-start">
        <div className="reveal flex flex-col gap-5">
          <h2 className="text-[26px] font-extrabold leading-tight text-white sm:text-[32px]">
            {t.services.titlePrefix} {t.services.titleHighlight}
          </h2>
          <p className="leading-relaxed text-muted-foreground">{t.services.intro}</p>
          <ul className="flex flex-col gap-3">
            {t.services.bullets.map((item) => (
              <li key={item} className="flex items-center gap-3 text-[15px] text-secondary-foreground">
                <Check size={16} className="shrink-0 text-brand" aria-hidden="true" />
                {item}
              </li>
            ))}
          </ul>
          <a href={pathFor({ kind: "service", id: "web-benin" }, language)} className="inline-flex min-h-11 items-center gap-2 self-start text-sm font-semibold text-brand hover:text-white">
            {SERVICE_PAGES["web-benin"].content[language].h1} <ArrowRight size={16} aria-hidden="true" />
          </a>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          {services.map((service, i) => {
            const Icon = service.icon;
            return (
              <div key={service.title} style={stagger(i + 1, 0.12)} className="reveal lift flex flex-col gap-3 rounded-2xl hover:border-[#2F4A7A] border border-border bg-card p-6">
                <span aria-hidden="true" className="flex h-11 w-11 items-center justify-center rounded-xl bg-secondary text-brand">
                  <Icon size={22} />
                </span>
                <h3 className="text-base font-bold text-white">{service.title}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">{service.description}</p>
                {service.page && (
                  <a href={pathFor({ kind: "service", id: service.page }, language)} className="mt-auto inline-flex min-h-11 items-center gap-1.5 text-sm font-semibold text-brand hover:text-white">
                    {t.services.learnMore}
                    <span className="sr-only"> : {SERVICE_PAGES[service.page].content[language].h1}</span>
                    <ArrowRight size={14} aria-hidden="true" />
                  </a>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </Section>
  );
}
