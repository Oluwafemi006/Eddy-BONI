import { useState } from "react";
import { Menu, X } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";
import { LanguageSwitcher } from "@/components/layout/LanguageSwitcher";
import { pathFor } from "@/seo/routes";

export function Logo({ size = "md" }: { size?: "sm" | "md" }) {
  return (
    <span
      aria-hidden="true"
      className={`flex items-center justify-center rounded-md bg-primary font-extrabold tracking-tighter text-white ${
        size === "sm" ? "h-6 w-7 text-[11px]" : "h-7 w-[34px] text-sm"
      }`}
    >
      EB
    </span>
  );
}

export function Navbar() {
  const { t, language } = useLanguage();
  const home = pathFor({ kind: "home" }, language);
  const [open, setOpen] = useState(false);

  const links = [
    { name: t.nav.home, href: home },
    { name: t.nav.about, href: `${home}#about` },
    { name: t.nav.projects, href: `${home}#projects` },
    { name: t.nav.skills, href: `${home}#skills` },
    { name: t.nav.experience, href: `${home}#experience` },
    { name: t.nav.contact, href: `${home}#contact` },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-background/90 backdrop-blur-md">
      <div className="mx-auto flex h-[72px] max-w-6xl items-center justify-between gap-6 px-4 sm:px-6">
        <a href={home} className="flex items-center gap-2.5 text-[17px] font-bold text-white">
          <Logo />
          Eddy Boni
        </a>

        <nav aria-label={t.nav.label} className="hidden items-center gap-7 lg:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="py-1.5 text-sm font-medium text-muted-foreground transition-colors hover:text-white"
            >
              {link.name}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <LanguageSwitcher />
          <a
            href={`${home}#contact`}
            className="inline-flex h-11 items-center rounded-lg bg-primary px-4 text-sm font-semibold text-white transition-colors hover:bg-[#3B74F0]"
          >
            {t.nav.contactCta}
          </a>
        </div>

        <button
          type="button"
          className="flex h-11 w-11 items-center justify-center rounded-lg border border-border bg-card text-foreground lg:hidden"
          onClick={() => setOpen((value) => !value)}
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? t.nav.closeMenu : t.nav.openMenu}
        >
          {open ? <X size={20} aria-hidden="true" /> : <Menu size={20} aria-hidden="true" />}
        </button>
      </div>

      {open && (
        <div id="mobile-menu" className="border-t border-line bg-background lg:hidden">
          <nav aria-label={t.nav.label} className="mx-auto flex max-w-6xl flex-col px-4 py-4 sm:px-6">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="flex min-h-11 items-center border-b border-line text-base font-medium text-muted-foreground hover:text-white"
              >
                {link.name}
              </a>
            ))}
            <div className="flex items-center justify-between gap-4 pt-4">
              <LanguageSwitcher />
              <a
                href={`${home}#contact`}
                onClick={() => setOpen(false)}
                className="inline-flex h-11 items-center rounded-lg bg-primary px-5 text-sm font-semibold text-white"
              >
                {t.nav.contactCta}
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
