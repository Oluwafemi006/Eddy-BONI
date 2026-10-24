import { useState, type ChangeEvent, type FormEvent } from "react";
import { Mail, Github, Linkedin, MapPin, Send, Loader2, Globe, MessageCircle } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";
import { CONTACT, whatsappLink } from "@/content/contact";

const FORM_NAME = "contact";
type Status = "idle" | "sending" | "success" | "error";

const inputClass =
  "w-full rounded-lg border border-input bg-background px-4 py-3 text-[15px] text-foreground placeholder:text-subtle focus:border-brand focus:outline-none";

export function Contact() {
  const { t } = useLanguage();
  const [status, setStatus] = useState<Status>("idle");
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    try {
      const response = await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams({ "form-name": FORM_NAME, ...formData }).toString(),
      });
      if (!response.ok) throw new Error("Netlify form submission failed");
      setStatus("success");
      setFormData({ name: "", email: "", message: "" });
    } catch {
      setStatus("error");
    }
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const links = [
    { icon: MessageCircle, label: t.whatsapp.label, value: "+229 01 96 62 06 95", href: whatsappLink(t.whatsapp.message) },
    { icon: Mail, label: t.contact.emailTitle, value: CONTACT.email, href: `mailto:${CONTACT.email}` },
    { icon: Github, label: t.contact.githubTitle, value: CONTACT.githubLabel, href: CONTACT.github },
    { icon: Linkedin, label: t.contact.linkedinTitle, value: "Eddy Boni", href: CONTACT.linkedin },
  ];

  return (
    <section id="contact" className="border-t border-line">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
        <div className="reveal rounded-3xl border border-border bg-card p-6 sm:p-10 lg:p-14">
          <div className="mx-auto mb-10 flex max-w-xl flex-col items-center gap-4 text-center">
            <span aria-hidden="true" className="flex h-12 w-12 items-center justify-center rounded-xl bg-secondary text-brand">
              <Send size={22} />
            </span>
            <h2 className="text-[28px] font-extrabold text-white sm:text-4xl">
              {t.contact.titlePrefix} {t.contact.titleHighlight}
            </h2>
            <p className="leading-relaxed text-muted-foreground">{t.contact.subtitle}</p>
            <div className="flex flex-wrap justify-center gap-3 pt-2">
              <a href={whatsappLink(t.whatsapp.message)} target="_blank" rel="noopener noreferrer" className="inline-flex h-12 items-center gap-2.5 rounded-lg bg-primary px-5 text-[15px] font-semibold text-white transition-colors hover:bg-[#3B74F0]">
                <MessageCircle size={16} aria-hidden="true" /> {t.hero.ctaWhatsapp}
              </a>
              <a href={CONTACT.github} target="_blank" rel="noopener noreferrer" className="inline-flex h-12 items-center gap-2.5 rounded-lg border border-[#3A4E73] px-5 text-[15px] font-semibold text-foreground transition-colors hover:border-brand hover:text-white">
                {t.contact.githubCta} <Github size={16} aria-hidden="true" />
              </a>
            </div>
          </div>

          <div className="grid gap-8 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)]">
            <div className="flex flex-col gap-3">
              {links.map(({ icon: Icon, label, value, href }) => (
                <a
                  key={label}
                  href={href}
                  {...(href.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                  className="flex items-center gap-4 rounded-xl border border-border px-4 py-3.5 transition-colors hover:border-brand"
                >
                  <Icon size={18} className="shrink-0 text-brand" aria-hidden="true" />
                  <span className="flex min-w-0 flex-col">
                    <span className="text-xs text-subtle">{label}</span>
                    <span className="truncate text-sm font-medium text-foreground">{value}</span>
                  </span>
                </a>
              ))}
              <div className="flex items-start gap-4 rounded-xl border border-border px-4 py-3.5">
                <MapPin size={18} className="mt-0.5 shrink-0 text-brand" aria-hidden="true" />
                <span className="flex flex-col gap-1">
                  <span className="text-xs text-subtle">{t.contact.locationTitle}</span>
                  <span className="text-sm text-foreground">{t.contact.locationDesc}</span>
                  <span className="inline-flex items-center gap-1.5 text-xs font-medium text-brand">
                    <Globe size={12} aria-hidden="true" /> {t.contact.remoteFirst}
                  </span>
                </span>
              </div>
            </div>

            <form
              name={FORM_NAME}
              method="POST"
              data-netlify="true"
              data-netlify-honeypot="bot-field"
              onSubmit={handleSubmit}
              className="flex flex-col gap-4 rounded-2xl border border-border bg-background/60 p-5 sm:p-6"
            >
              <h3 className="text-base font-bold text-white">{t.contact.formTitle}</h3>
              <input type="hidden" name="form-name" value={FORM_NAME} />
              <p className="hidden">
                <label>
                  {t.contact.form.honeypotLabel} <input name="bot-field" />
                </label>
              </p>
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="name" className="text-sm font-medium text-foreground">{t.contact.form.nameLabel}</label>
                  <input type="text" id="name" name="name" required autoComplete="name" value={formData.name} onChange={handleChange} className={inputClass} placeholder={t.contact.form.namePlaceholder} />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="email" className="text-sm font-medium text-foreground">{t.contact.form.emailLabel}</label>
                  <input type="email" id="email" name="email" required autoComplete="email" value={formData.email} onChange={handleChange} className={inputClass} placeholder={t.contact.form.emailPlaceholder} />
                </div>
              </div>
              <div className="flex flex-col gap-1.5">
                <label htmlFor="message" className="text-sm font-medium text-foreground">{t.contact.form.messageLabel}</label>
                <textarea id="message" name="message" required rows={5} value={formData.message} onChange={handleChange} className={`${inputClass} resize-y`} placeholder={t.contact.form.messagePlaceholder} />
              </div>
              <button
                type="submit"
                disabled={status === "sending"}
                className="inline-flex h-12 items-center justify-center gap-2 self-start rounded-lg bg-primary px-6 text-[15px] font-semibold text-white transition-colors hover:bg-[#3B74F0] disabled:cursor-not-allowed disabled:opacity-70"
              >
                {status === "sending" ? (
                  <>
                    <Loader2 size={18} className="animate-spin" aria-hidden="true" /> {t.contact.form.submitting}
                  </>
                ) : (
                  <>
                    {t.contact.form.submit} <Send size={16} aria-hidden="true" />
                  </>
                )}
              </button>
              <p role="status" aria-live="polite" className="text-sm">
                {status === "success" && (
                  <span className="text-success">
                    <strong>{t.contact.form.successTitle}</strong> {t.contact.form.successDesc}
                  </span>
                )}
                {status === "error" && (
                  <span className="text-[#FCA5A5]">
                    <strong>{t.contact.form.errorTitle}.</strong> {t.contact.form.errorDesc}
                  </span>
                )}
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
