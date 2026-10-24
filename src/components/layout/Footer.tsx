import { Github, Linkedin, Mail } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";
import { pathFor } from "@/seo/routes";
import { SERVICES, type ServiceId } from "@/content/services";
import { Logo } from "@/components/layout/Navbar";
import { CONTACT } from "@/content/contact";

const linkClass = "text-sm text-muted-foreground transition-colors hover:text-white";

export function Footer() {
  const { t, language } = useLanguage();
  const home = pathFor({ kind: "home" }, language);

  return (
    <footer className="border-t border-line">
      <div className="mx-auto max-w-6xl px-4 pb-8 pt-14 sm:px-6">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-5">
          <div className="md:col-span-2">
            <a href={home} className="mb-4 flex items-center gap-2.5 font-bold text-white">
              <Logo size="sm" />
              Eddy Boni
            </a>
            <p className="max-w-sm whitespace-pre-line text-sm leading-relaxed text-muted-foreground">{t.footer.description}</p>
          </div>

          <div>
            <h2 className="mb-4 text-sm font-semibold text-white">{t.footer.navTitle}</h2>
            <ul className="space-y-2.5">
              <li><a href={`${home}#about`} className={linkClass}>{t.nav.about}</a></li>
              <li><a href={`${home}#projects`} className={linkClass}>{t.nav.projects}</a></li>
              <li><a href={`${home}#skills`} className={linkClass}>{t.nav.skills}</a></li>
              <li><a href={`${home}#experience`} className={linkClass}>{t.nav.experience}</a></li>
              <li><a href={`${home}#services`} className={linkClass}>{t.footer.servicesTitle}</a></li>
              <li><a href={`${home}#contact`} className={linkClass}>{t.nav.contact}</a></li>
            </ul>
          </div>

          <div>
            <h2 className="mb-4 text-sm font-semibold text-white">{t.footer.servicesTitle}</h2>
            <ul className="space-y-2.5">
              {(Object.keys(SERVICES) as ServiceId[]).map((id) => (
                <li key={id}>
                  <a href={pathFor({ kind: "service", id }, language)} className={linkClass}>
                    {SERVICES[id].content[language].h1}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="mb-4 text-sm font-semibold text-white">{t.footer.socialTitle}</h2>
            <div className="flex gap-2">
              <a href={CONTACT.github} aria-label="GitHub" rel="me" className="flex h-11 w-11 items-center justify-center rounded-lg border border-border text-muted-foreground transition-colors hover:border-brand hover:text-white">
                <Github size={18} aria-hidden="true" />
              </a>
              <a href={CONTACT.linkedin} aria-label="LinkedIn" rel="me" className="flex h-11 w-11 items-center justify-center rounded-lg border border-border text-muted-foreground transition-colors hover:border-brand hover:text-white">
                <Linkedin size={18} aria-hidden="true" />
              </a>
              <a href={`mailto:${CONTACT.email}`} aria-label={t.contact.emailTitle} className="flex h-11 w-11 items-center justify-center rounded-lg border border-border text-muted-foreground transition-colors hover:border-brand hover:text-white">
                <Mail size={18} aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-line pt-6 text-sm text-subtle md:flex-row">
          <p>© {__BUILD_YEAR__} BONI Adjé Oladjidé Kenneth Eddy. {t.footer.rights}</p>
          <p className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-success" aria-hidden="true" />
            {t.footer.availableForWork}
          </p>
        </div>
      </div>
    </footer>
  );
}
