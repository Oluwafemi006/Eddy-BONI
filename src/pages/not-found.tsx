import { Link } from "wouter";
import { ArrowLeft } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";

export default function NotFound() {
  const { t } = useLanguage();

  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-[#030509] flex items-center justify-center px-6">
      <div className="absolute inset-0 -z-30 bg-[radial-gradient(circle_at_15%_35%,rgba(220,38,38,0.15),transparent_45%),radial-gradient(circle_at_85%_65%,rgba(6,182,212,0.18),transparent_45%),linear-gradient(135deg,#020305_0%,#050911_52%,#030509_100%)]" />
      <div className="absolute -left-32 top-20 -z-20 h-[460px] w-[460px] rounded-full bg-red-600/10 blur-[130px]" />
      <div className="absolute -right-32 bottom-10 -z-20 h-[480px] w-[480px] rounded-full bg-cyan-500/15 blur-[130px]" />

      <div className="relative z-10 text-center max-w-md">
        <div className="text-7xl sm:text-8xl font-display font-bold text-primary text-glow mb-4">
          {t.notFound.code}
        </div>
        <h1 className="text-2xl sm:text-3xl font-display font-bold text-white mb-3">
          {t.notFound.title}
        </h1>
        <p className="text-muted-foreground mb-10">{t.notFound.description}</p>

        <Link
          href="/"
          className="inline-flex items-center gap-2 rounded-lg bg-primary px-7 py-3.5 font-semibold text-primary-foreground transition-all duration-300 hover:box-glow"
        >
          <ArrowLeft className="w-5 h-5" />
          {t.notFound.cta}
        </Link>
      </div>
    </div>
  );
}
