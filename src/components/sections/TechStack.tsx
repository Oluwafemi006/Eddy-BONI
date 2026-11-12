import { useLanguage } from "@/i18n/LanguageContext";

// Compact technology band near the bottom of the page: kept for technical readers and for SEO keywords.
export function TechStack() {
  const { t } = useLanguage();

  return (
    <section id="skills" className="border-t border-line">
      <div className="reveal mx-auto flex max-w-6xl flex-col gap-4 px-4 py-10 sm:px-6 lg:flex-row lg:items-center lg:gap-10">
        <div className="flex shrink-0 flex-col gap-1 lg:w-64">
          <h2 className="text-base font-bold text-white">{t.stack.title}</h2>
          <p className="text-[13px] leading-relaxed text-subtle">{t.stack.subtitle}</p>
        </div>
        <div className="marquee min-w-0 flex-1">
          <div className="marquee-track">
            {[false, true].map((duplicate) => (
              <ul key={String(duplicate)} aria-hidden={duplicate || undefined} className="flex shrink-0 gap-2 pr-2">
                {t.stack.items.map((tech) => (
                  <li key={tech} className="whitespace-nowrap rounded-md bg-secondary px-3 py-1.5 text-[13px] font-medium text-secondary-foreground">
                    {tech}
                  </li>
                ))}
              </ul>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
