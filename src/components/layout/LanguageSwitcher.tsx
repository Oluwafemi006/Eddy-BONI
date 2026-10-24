import { useLanguage, type Language } from "@/i18n/LanguageContext";
import { pathFor } from "@/seo/routes";
import { cn } from "@/lib/utils";

const OPTIONS: { code: Language; label: string }[] = [
  { code: "fr", label: "FR" },
  { code: "en", label: "EN" },
];

export function LanguageSwitcher({ className }: { className?: string }) {
  const { language, page } = useLanguage();

  return (
    <div
      className={cn(
        "inline-flex items-center rounded-full border border-white/10 bg-white/[0.03] p-1",
        className
      )}
      role="group"
      aria-label="Choix de la langue / Language selection"
    >
      {OPTIONS.map((option) => (
        <a
          key={option.code}
          href={pathFor(page, option.code)}
          hrefLang={option.code}
          lang={option.code}
          aria-current={language === option.code ? "page" : undefined}
          className={cn(
            "px-3 py-1.5 text-xs font-semibold rounded-full transition-all duration-200",
            language === option.code
              ? "bg-primary text-primary-foreground"
              : "text-muted-foreground hover:text-foreground"
          )}
        >
          {option.label}
        </a>
      ))}
    </div>
  );
}
