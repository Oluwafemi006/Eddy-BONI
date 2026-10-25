import { MessageCircle } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";
import { whatsappLink } from "@/content/contact";

// Mid-page call to action, neutral tone, for visitors already convinced by the work and the method.
export function CtaBand() {
  const { t } = useLanguage();

  return (
    <section aria-label={t.ctaBand.title} className="border-t border-line">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
        <div className="reveal flex flex-col items-start justify-between gap-5 rounded-2xl bg-primary px-6 py-7 sm:px-8 md:flex-row md:items-center">
          <div className="flex flex-col gap-1.5">
            <h2 className="text-xl font-extrabold text-white sm:text-2xl">{t.ctaBand.title}</h2>
            <p className="text-[15px] text-white/90">{t.ctaBand.text}</p>
          </div>
          <a
            href={whatsappLink(t.whatsapp.message)}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-12 shrink-0 items-center gap-2.5 rounded-lg bg-white px-5 text-[15px] font-semibold text-[#1E3A8A] transition-colors hover:bg-[#E6ECF5]"
          >
            <MessageCircle size={18} aria-hidden="true" />
            {t.hero.ctaWhatsapp}
          </a>
        </div>
      </div>
    </section>
  );
}
