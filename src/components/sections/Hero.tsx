import type { CSSProperties } from "react";
import { ArrowRight, Mail, ExternalLink } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";
import { CONTACT } from "@/content/contact";

const HERO_TECHS = ["Django", "React", "Next.js", "Flutter", "PostgreSQL"];

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

        <h1 style={reveal("0.05s")} className="hero-reveal flex flex-col gap-3">
          <span className="text-base font-semibold text-muted-foreground sm:text-lg">
            {t.hero.name} — {t.hero.role}
          </span>
          <span className="text-[34px] font-extrabold leading-[1.1] tracking-[-0.03em] text-white text-balance sm:text-5xl lg:text-[56px]">
            {t.hero.headlinePrefix} <span className="text-brand">{t.hero.headlineHighlight}</span> {t.hero.headlineSuffix}
          </span>
        </h1>

        <p style={reveal("0.1s")} className="hero-reveal max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
          {t.hero.description} <strong className="font-semibold text-white">{t.hero.descriptionStrong}</strong>
        </p>

        <div style={reveal("0.15s")} className="hero-reveal flex flex-wrap items-center gap-3">
          <a href="#projects" className="inline-flex h-12 items-center gap-2.5 rounded-lg bg-primary px-5 text-[15px] font-semibold text-white transition-colors hover:bg-[#3B74F0]">
            {t.hero.ctaProjects}
            <ArrowRight size={16} aria-hidden="true" />
          </a>
          <a href="#contact" className="inline-flex h-12 items-center gap-2.5 rounded-lg border border-[#3A4E73] px-5 text-[15px] font-semibold text-foreground transition-colors hover:border-brand hover:text-white">
            {t.hero.ctaContact}
            <Mail size={16} aria-hidden="true" />
          </a>
          <a href={CONTACT.comeup} target="_blank" rel="noopener noreferrer" className="inline-flex h-12 items-center gap-2 px-2 text-[15px] font-semibold text-muted-foreground transition-colors hover:text-white">
            {t.hero.ctaComeup}
            <ExternalLink size={14} aria-hidden="true" />
          </a>
        </div>

        <ul style={reveal("0.2s")} className="hero-reveal flex flex-wrap gap-2" aria-label="Stack">
          {HERO_TECHS.map((tech) => (
            <li key={tech} className="rounded-md bg-secondary px-3 py-1.5 text-[13px] font-medium text-secondary-foreground">
              {tech}
            </li>
          ))}
        </ul>
      </div>

      <div className="relative mx-auto h-[330px] w-full max-w-[340px] sm:h-[420px] sm:max-w-[460px] lg:mr-0">
        <div aria-hidden="true" className="absolute right-2 top-5 h-[280px] w-[250px] rotate-6 rounded-[32px] bg-[#1D3F99] sm:right-4 sm:h-[340px] sm:w-[300px]" />
        <div className="absolute right-6 top-0 flex h-[300px] w-[250px] items-end justify-center overflow-hidden rounded-[28px] bg-primary sm:right-8 sm:h-[360px] sm:w-[300px]">
          <img
            src="/images/Eddy_Boni.png"
            alt={t.hero.imageAlt}
            width={408}
            height={612}
            fetchPriority="high"
            loading="eager"
            decoding="async"
            className="h-[290px] w-auto sm:h-[350px]"
          />
        </div>
        <div aria-hidden="true" className="absolute bottom-0 left-0 hidden w-[320px] rounded-xl border border-[#22355A] bg-card px-4 py-3.5 font-mono text-[13px] leading-[1.7] text-secondary-foreground shadow-[0_20px_40px_rgba(0,0,0,0.35)] sm:block">
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
