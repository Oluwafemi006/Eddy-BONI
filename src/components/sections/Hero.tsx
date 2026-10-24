import type { CSSProperties } from "react";
import { ArrowRight, Terminal, ExternalLink } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";

const HERO_TECHS = ["Django", "React", "Next.js", "Flutter", "PostgreSQL"];

export function Hero() {
  const { t } = useLanguage();
  return (
    <section
      id="about"
      className="relative min-h-[100svh] w-full overflow-hidden bg-[#030509] pt-24 text-foreground sm:pt-28 lg:pt-20"
    >
      {/* 🌌 Fond d'ambiance haut de gamme (Effet lueurs diffuses bicolores) */}
      <div className="absolute inset-0 -z-30 bg-[radial-gradient(circle_at_15%_35%,rgba(220,38,38,0.15),transparent_45%),radial-gradient(circle_at_85%_65%,rgba(6,182,212,0.18),transparent_45%),linear-gradient(135deg,#020305_0%,#050911_52%,#030509_100%)]" />
      
      {/* Halos lumineux accentués en arrière-plan */}
      <div className="absolute -left-32 top-20 -z-20 h-[460px] w-[460px] rounded-full bg-red-600/10 blur-[130px] sm:h-[620px] sm:w-[620px]" />
      <div className="absolute -right-32 bottom-10 -z-20 h-[480px] w-[480px] rounded-full bg-cyan-500/15 blur-[130px] sm:h-[680px] sm:w-[680px]" />
      
      {/* Grille technique subtile */}
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:72px_72px] opacity-30 [mask-image:radial-gradient(circle_at_center,black,transparent_80%)]" />

      <div className="relative z-10 mx-auto grid min-h-[calc(100svh-6rem)] w-full max-w-7xl items-center gap-12 px-6 pb-14 lg:grid-cols-[minmax(0,1.1fr)_minmax(360px,0.9fr)] lg:gap-16 lg:px-8 lg:pb-0">
        
        {/* COLONNE GAUCHE : TEXTES ET ACTIONS */}
        <div className="max-w-3xl">
          <div
            style={{ "--reveal-delay": "0s", "--reveal-duration": "0.5s", "--reveal-distance": "20px" } as CSSProperties}
            className="hero-reveal mb-8 inline-flex items-center gap-2 rounded-full border border-primary/25 bg-primary/10 px-3 py-1.5 text-sm font-medium text-primary shadow-[0_0_30px_rgba(0,255,180,0.08)] backdrop-blur"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            {t.hero.badge}
          </div>

          <h1
            style={{ "--reveal-delay": "0.1s", "--reveal-duration": "0.5s", "--reveal-distance": "20px" } as CSSProperties}
            className="hero-reveal mb-6 text-5xl font-display font-bold leading-[1.04] text-white sm:text-6xl md:text-7xl"
          >
            {t.hero.name} <br />
            <span className="bg-gradient-to-r from-primary via-cyan-200 to-blue-400 bg-clip-text text-transparent">
              {t.hero.role}
            </span>
          </h1>

          <div
            style={{ "--reveal-delay": "0.2s", "--reveal-duration": "0.5s", "--reveal-distance": "20px" } as CSSProperties}
            className="hero-reveal mb-6 flex flex-wrap items-center gap-3 text-lg font-medium text-slate-200 sm:gap-4 md:text-xl lg:text-2xl font-display"
          >
            {HERO_TECHS.map((tech, i) => (
              <span key={tech} className="contents">
                {i > 0 && <span className="w-1.5 h-1.5 rounded-full bg-primary/50" />}
                <span>{tech}</span>
              </span>
            ))}
          </div>

          <p
            style={{ "--reveal-delay": "0.3s", "--reveal-duration": "0.5s", "--reveal-distance": "20px" } as CSSProperties}
            className="hero-reveal mb-4 max-w-2xl text-lg leading-relaxed text-slate-300"
          >
            {t.hero.description}{" "}
            <strong className="text-white">{t.hero.descriptionStrong}</strong>
          </p>

          <p
            style={{ "--reveal-delay": "0.35s", "--reveal-duration": "0.5s", "--reveal-distance": "20px" } as CSSProperties}
            className="hero-reveal mb-10 max-w-2xl text-sm leading-relaxed text-slate-400"
          >
            {t.hero.geoSentence}
          </p>

          {/* BOUTONS D'ACTION (Incluant ComeUp pour le maillage SEO) */}
          <div
            style={{ "--reveal-delay": "0.4s", "--reveal-duration": "0.5s", "--reveal-distance": "20px" } as CSSProperties}
            className="hero-reveal flex flex-wrap items-center gap-4"
          >
            <a
              href="#projects"
              className="group flex items-center gap-2 rounded-lg bg-primary px-7 py-3.5 font-semibold text-primary-foreground transition-all duration-300 hover:box-glow"
            >
              {t.hero.ctaProjects}
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>

            <a
              href="#contact"
              className="flex items-center gap-2 rounded-lg border border-white/10 bg-white/[0.04] px-7 py-3.5 font-semibold text-white backdrop-blur transition-all duration-300 hover:border-primary/40 hover:bg-white/[0.08]"
            >
              {t.hero.ctaContact}
              <Terminal className="w-5 h-5 opacity-70" />
            </a>

            <a
              href="https://comeup.com/fr/@eddy-boni"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-lg border border-cyan-500/20 bg-cyan-500/[0.03] px-7 py-3.5 font-semibold text-cyan-400 backdrop-blur transition-all duration-300 hover:border-cyan-400/50 hover:bg-cyan-500/[0.08]"
            >
              {t.hero.ctaComeup}
              <ExternalLink className="w-4 h-4 opacity-80" />
            </a>
          </div>
        </div>

        {/* COLONNE DROITE : INTEGRATION BRUTE & SUBLIMÉE DE TON PORTRAIT DETOURÉ */}
        <div
          style={{ "--reveal-delay": "0.25s", "--reveal-duration": "0.7s", "--reveal-distance": "40px" } as CSSProperties}
          className="hero-reveal relative flex items-end justify-center lg:h-full lg:items-end lg:justify-end"
          aria-hidden="true"
        >
          {/* Lueur cyan diffuse positionnée juste derrière ton portrait pour faire ressortir le costume */}
          <div className="absolute bottom-12 right-1/2 h-[60%] w-[60%] translate-x-1/2 rounded-full bg-cyan-500/10 blur-[100px] lg:right-12 lg:translate-x-0" />
          
          <img
            src="/images/Eddy_Boni.png"
            alt={t.hero.imageAlt}
            width={408}
            height={612}
            fetchPriority="high"
            className="relative z-10 max-h-[440px] w-auto max-w-[85vw] object-contain filter drop-shadow-[0_20px_50px_rgba(6,182,212,0.15)] sm:max-h-[580px] lg:max-h-[min(780px,85svh)] lg:max-w-full"
            loading="eager"
          />
        </div>
      </div>
    </section>
  );
}