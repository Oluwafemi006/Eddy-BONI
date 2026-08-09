import { useLanguage, type Language } from "@/i18n/LanguageContext";
import { cn } from "@/lib/utils";

const OPTIONS: { code: Language; label: string }[] = [
  { code: "fr", label: "FR" },
  { code: "en", label: "EN" },
];

export function LanguageSwitcher({ className }: { className?: string }) {
  const { language, setLanguage } = useLanguage();

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
        <button
          key={option.code}
          type="button"
          onClick={() => setLanguage(option.code)}
          aria-pressed={language === option.code}
          className={cn(
            "px-3 py-1.5 text-xs font-semibold rounded-full transition-all duration-200",
            language === option.code
              ? "bg-primary text-primary-foreground"
              : "text-muted-foreground hover:text-foreground"
          )}
        >
          {option.label}
        </button>
      ))}
    </div>
  );
}
