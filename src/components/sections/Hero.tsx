import type { CSSProperties } from "react";
import { ArrowRight, Mail, ExternalLink, MessageCircle } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";
import { CONTACT, whatsappLink } from "@/content/contact";
import { PORTRAIT } from "@/content/portrait";

const reveal = (delay: string) => ({ "--reveal-delay": delay }) as CSSProperties;

export function Hero() {
  const { t } = useLanguage();
  return (
    <section id="top" className="mx-auto grid max-w-6xl items-center gap-12 px-4 pb-16 pt-12 sm:px-6 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] lg:pb-20 lg:pt-20">
      <div className="flex flex-col gap-6">
        <span style={reveal("0s")} className="hero-reveal inline-flex items-center gap-2 self-start rounded-full border border-border bg-[#111E35] px-3 py-1.5 text-[13px] font-medium text-secondary-foreground">
          <span className="h-2 w-2 rounded-full bg-success" aria-hidden="true" />
          {t.hero.badge}
        </span>

        <h1 style={reveal("0.15s")} className="hero-reveal flex flex-col gap-3">
          <span className="text-base font-semibold text-muted-foreground sm:text-lg">
            {t.hero.name} — {t.hero.role}
          </span>
          <span className="text-[30px] font-extrabold leading-[1.12] tracking-[-0.03em] text-white text-balance sm:text-[40px] lg:text-[42px]">
            {t.hero.headlinePrefix} <span className="text-brand">{t.hero.headlineHighlight}</span> {t.hero.headlineSuffix}
          </span>
        </h1>

        <p style={reveal("0.3s")} className="hero-reveal max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
          {t.hero.description} <strong className="font-semibold text-white">{t.hero.descriptionStrong}</strong>
        </p>

        <div style={reveal("0.45s")} className="hero-reveal flex flex-wrap items-center gap-3">
          <a
            href={whatsappLink(t.whatsapp.message)}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-12 items-center gap-2.5 rounded-lg bg-primary px-5 text-[15px] font-semibold text-white transition-colors hover:bg-[#3B74F0]"
          >
            <MessageCircle size={18} aria-hidden="true" />
            {t.hero.ctaWhatsapp}
          </a>
          <a href="#projects" className="inline-flex h-12 items-center gap-2.5 rounded-lg border border-[#3A4E73] px-5 text-[15px] font-semibold text-foreground transition-colors hover:border-brand hover:text-white">
            {t.hero.ctaProjects}
            <ArrowRight size={16} aria-hidden="true" />
          </a>
        </div>

        <p style={reveal("0.6s")} className="hero-reveal flex flex-wrap gap-x-5 gap-y-2 text-sm">
          <a href="#contact" className="inline-flex min-h-11 items-center gap-1.5 font-medium text-muted-foreground hover:text-white">
            <Mail size={14} aria-hidden="true" /> {t.hero.ctaContact}
          </a>
          <a href={CONTACT.comeup} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-11 items-center gap-1.5 font-medium text-muted-foreground hover:text-white">
            {t.hero.ctaComeup} <ExternalLink size={13} aria-hidden="true" />
          </a>
        </p>
      </div>

      <div style={{ "--reveal-delay": "0.3s", "--reveal-duration": "1.6s", "--reveal-distance": "40px" } as CSSProperties} className="hero-reveal relative mx-auto h-[330px] w-full max-w-[340px] sm:h-[420px] sm:max-w-[460px] lg:mr-0">
        <div aria-hidden="true" className="float-a absolute right-2 top-5 h-[280px] w-[250px] rotate-6 rounded-[32px] bg-[#1D3F99] sm:right-4 sm:h-[340px] sm:w-[300px]" />
        <div className="float-b absolute right-6 top-0 flex h-[300px] w-[250px] items-end justify-center overflow-hidden rounded-[28px] bg-primary sm:right-8 sm:h-[360px] sm:w-[300px]">
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
              className="h-[290px] w-auto sm:h-[350px]"
            />
          </picture>
        </div>
        <div aria-hidden="true" className="float-c absolute bottom-0 left-0 hidden w-[320px] rounded-xl border border-[#22355A] bg-card px-4 py-3.5 font-mono text-[13px] leading-[1.7] text-secondary-foreground shadow-[0_20px_40px_rgba(0,0,0,0.35)] sm:block">
          <div><span className="text-[#FF9E64]">const</span> developer = {"{"}</div>
          <div className="pl-4">name: <span className="text-warning">'Eddy Boni'</span>,</div>
          <div className="pl-4">stack: [<span className="text-warning">'React'</span>, <span className="text-warning">'Django'</span>, <span className="text-warning">'API'</span>],</div>
          <div className="pl-4">goal: <span className="text-warning">'Build useful products'</span></div>
          <div>{"};"}</div>
        </div>
      </div>
    </section>
  );
}
