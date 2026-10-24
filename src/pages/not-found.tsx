import { ArrowLeft } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";
import { pathFor } from "@/seo/routes";
import { Logo } from "@/components/layout/Navbar";

export default function NotFound() {
  const { t, language } = useLanguage();

  return (
    <main className="flex min-h-screen w-full items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <div className="mb-8 flex justify-center">
          <Logo />
        </div>
        <p className="mb-3 font-mono text-sm text-brand">{t.notFound.code}</p>
        <h1 className="mb-3 text-3xl font-extrabold text-white sm:text-4xl">{t.notFound.title}</h1>
        <p className="mb-10 text-muted-foreground">{t.notFound.description}</p>
        <a
          href={pathFor({ kind: "home" }, language)}
          className="inline-flex h-12 items-center gap-2 rounded-lg bg-primary px-6 font-semibold text-white transition-colors hover:bg-[#3B74F0]"
        >
          <ArrowLeft size={18} aria-hidden="true" />
          {t.notFound.cta}
        </a>
      </div>
    </main>
  );
}
