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
        "inline-flex items-center rounded-lg border border-border bg-card p-1",
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
            "flex h-9 min-w-9 items-center justify-center rounded-md px-2.5 text-xs font-semibold transition-colors",
            language === option.code
              ? "bg-secondary text-white"
              : "text-muted-foreground hover:text-white"
          )}
        >
          {option.label}
        </a>
      ))}
    </div>
  );
}
