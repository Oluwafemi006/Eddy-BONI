import type { CSSProperties } from "react";
import { ArrowRight, CreditCard, Monitor, MessageCircle } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";
import { whatsappLink } from "@/content/contact";
import { PORTRAIT } from "@/content/portrait";

const reveal = (delay: string) => ({ "--reveal-delay": delay }) as CSSProperties;

export function Hero() {
  const { t } = useLanguage();
  return (
    <section id="top" className="relative overflow-hidden">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 pb-16 pt-12 sm:px-6 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] lg:pb-24 lg:pt-20">
        <div className="relative flex flex-col gap-6">
          <h1 className="flex flex-col gap-5">
            <span style={reveal("0s")} className="hero-reveal inline-flex items-center gap-2 self-start rounded-full border border-border bg-card px-3 py-1.5 text-[13px] font-semibold text-secondary-foreground">
              <span className="h-[7px] w-[7px] rounded-full bg-brand" aria-hidden="true" />
              {t.hero.name} — {t.hero.role}
            </span>
            <span style={reveal("0.12s")} className="hero-reveal text-[32px] font-extrabold leading-[1.08] tracking-[-0.035em] text-white text-balance sm:text-[44px] lg:text-[52px]">
              {t.hero.headlinePrefix} <span className="text-brand">{t.hero.headlineHighlight}</span> {t.hero.headlineSuffix}
            </span>
          </h1>

          <p style={reveal("0.25s")} className="hero-reveal max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            {t.hero.description} <strong className="font-semibold text-white">{t.hero.descriptionStrong}</strong>
          </p>

          <div style={reveal("0.38s")} className="hero-reveal flex flex-wrap items-center gap-3">
            <a
              href={whatsappLink(t.whatsapp.message)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-[52px] items-center gap-2.5 rounded-full bg-primary px-6 text-[15px] font-bold text-white shadow-[0_12px_30px_rgba(37,99,235,0.35)] transition-[background-color,translate] duration-300 hover:-translate-y-0.5 hover:bg-[#3B74F0]"
            >
              <MessageCircle size={18} aria-hidden="true" />
              {t.hero.ctaWhatsapp}
            </a>
            <a
              href="#projects"
              className="group inline-flex h-[52px] items-center gap-2.5 rounded-full border border-[#2A3B62] px-6 text-[15px] font-semibold text-foreground transition-[border-color,color,translate] duration-300 hover:-translate-y-0.5 hover:border-brand hover:text-white"
            >
              {t.hero.ctaProjects}
              <ArrowRight size={16} className="nudge" aria-hidden="true" />
            </a>
          </div>

          <p style={reveal("0.5s")} className="hero-reveal flex items-center gap-2.5 text-sm text-muted-foreground">
            <span className="live-dot h-[9px] w-[9px] shrink-0 rounded-full bg-[#34D399]" aria-hidden="true" />
            {t.hero.badge}
          </p>
        </div>

        <div
          style={{ "--reveal-delay": "0.3s", "--reveal-duration": "1.6s", "--reveal-distance": "40px" } as CSSProperties}
          className="hero-reveal relative mx-auto h-[400px] w-full max-w-[360px] sm:h-[500px] sm:max-w-[480px] lg:mr-0"
        >
          <div aria-hidden="true" className="glow pointer-events-none absolute -inset-10 rounded-full bg-[radial-gradient(circle,rgba(59,108,246,0.28),transparent_65%)]" />
          <div aria-hidden="true" className="float-a absolute right-4 top-8 h-[320px] w-[250px] -rotate-6 rounded-[32px] bg-[#1D3F99] sm:right-8 sm:h-[410px] sm:w-[320px]" />
          <div className="absolute right-8 top-2 flex h-[330px] w-[260px] items-end justify-center overflow-hidden rounded-[30px] bg-[linear-gradient(170deg,#3B6CF6,#1E40AF)] shadow-[0_40px_80px_rgba(0,0,0,0.45)] sm:right-14 sm:h-[430px] sm:w-[330px]">
            <div aria-hidden="true" className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.16)_1px,transparent_0)] bg-[length:22px_22px]" />
            <picture>
              <source type="image/avif" srcSet={PORTRAIT.avif} sizes={PORTRAIT.sizes} />
              <source type="image/webp" srcSet={PORTRAIT.webp} sizes={PORTRAIT.sizes} />
              <img
                src="/images/eddy-boni-v2-480.webp"
                alt={t.hero.imageAlt}
                width={480}
                height={720}
                fetchPriority="high"
                loading="eager"
                decoding="async"
                className="relative h-[310px] w-auto sm:h-[410px]"
              />
            </picture>
          </div>

          <div className="float-b absolute bottom-24 left-0 flex items-center gap-3 rounded-2xl border border-[#22355A] bg-[rgba(11,20,40,0.94)] px-4 py-3 shadow-[0_24px_48px_rgba(0,0,0,0.5)] sm:bottom-32">
            <span aria-hidden="true" className="flex h-9 w-9 items-center justify-center rounded-[10px] bg-secondary text-brand-soft">
              <Monitor size={18} />
            </span>
            <span className="flex flex-col gap-0.5">
              <span className="text-sm font-bold text-white">{t.hero.chipLiveTitle}</span>
              <span className="text-xs text-[#34D399]">● {t.hero.chipLiveText}</span>
            </span>
          </div>
          <div style={{ "--d": "1.2s" } as CSSProperties} className="float-b absolute bottom-2 right-0 flex items-center gap-2.5 rounded-2xl border border-[#22355A] bg-[rgba(11,20,40,0.94)] px-4 py-3 text-[13px] font-bold text-white shadow-[0_24px_48px_rgba(0,0,0,0.5)] sm:bottom-6">
            <CreditCard size={16} className="text-brand-soft" aria-hidden="true" />
            {t.hero.chipPayments}
          </div>
        </div>
      </div>
    </section>
  );
}
