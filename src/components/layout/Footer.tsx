import { Github, Linkedin } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";
import { pathFor } from "@/seo/routes";
import { SERVICES, type ServiceId } from "@/content/services";

export function Footer() {
  const { t, language } = useLanguage();
  const home = pathFor({ kind: "home" }, language);
  return (
    <footer className="border-t border-white/5 bg-background pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-12 mb-12">
          <div className="md:col-span-2">
            <a href={home} className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center border border-primary/20">
                <span className="font-display font-bold text-primary text-sm">EB</span>
              </div>
              <span className="font-display font-bold text-xl tracking-wide">
                Eddy Boni
              </span>
            </a>
            <p className="text-muted-foreground max-w-sm whitespace-pre-line">
              {t.footer.description}
            </p>
          </div>

          <div>
            <h2 className="font-display font-semibold text-lg mb-4 text-foreground">{t.footer.navTitle}</h2>
            <ul className="space-y-2">
              <li><a href={`${home}#about`} className="text-muted-foreground hover:text-primary transition-colors">{t.nav.about}</a></li>
              <li><a href={`${home}#skills`} className="text-muted-foreground hover:text-primary transition-colors">{t.nav.skills}</a></li>
              <li><a href={`${home}#projects`} className="text-muted-foreground hover:text-primary transition-colors">{t.nav.projects}</a></li>
              <li><a href={`${home}#services`} className="text-muted-foreground hover:text-primary transition-colors">Services</a></li>
            </ul>
          </div>

          <div>
            <h2 className="font-display font-semibold text-lg mb-4 text-foreground">{t.footer.servicesTitle}</h2>
            <ul className="space-y-2">
              {(Object.keys(SERVICES) as ServiceId[]).map((id) => (
                <li key={id}>
                  <a href={pathFor({ kind: "service", id }, language)} className="text-muted-foreground hover:text-primary transition-colors">
                    {SERVICES[id].content[language].h1}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="font-display font-semibold text-lg mb-4 text-foreground">{t.footer.socialTitle}</h2>
            <div className="flex gap-4">
              <a href="https://www.linkedin.com/in/adjé-oladjidé-kenneth-eddy-boni-6794512b3/" aria-label="LinkedIn" rel="me" className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all border border-transparent hover:border-primary/20">
                <Linkedin size={18} />
              </a>
              <a href="https://github.com/Oluwafemi006" aria-label="GitHub" rel="me" className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all border border-transparent hover:border-primary/20">
                <Github size={18} />
              </a>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} BONI Adjé Oladjidé Kenneth Eddy. {t.footer.rights}</p>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
            {t.footer.availableForWork}
          </div>
        </div>
      </div>
    </footer>
  );
}
