import { useState, type ChangeEvent, type CSSProperties, type FormEvent } from "react";
import { ArrowRight, ExternalLink, Mail, Github, Linkedin, MapPin, Send, Loader2, MessageCircle } from "lucide-react";
import { Eyebrow } from "@/components/sections/SectionHeader";
import { useLanguage } from "@/i18n/LanguageContext";
import { CONTACT, whatsappLink } from "@/content/contact";

const capitalize = (text: string) => text.charAt(0).toUpperCase() + text.slice(1);
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
    { icon: Mail, label: t.contact.emailTitle, value: CONTACT.email, href: `mailto:${CONTACT.email}` },
    { icon: MessageCircle, label: t.whatsapp.label, value: "+229 01 96 62 06 95", href: whatsappLink(t.whatsapp.message) },
    { icon: Linkedin, label: t.contact.linkedinTitle, value: "Eddy Boni", href: CONTACT.linkedin },
    { icon: Github, label: t.contact.githubTitle, value: CONTACT.githubLabel, href: CONTACT.github },
    { icon: ExternalLink, label: "ComeUp", value: "@eddy-boni", href: CONTACT.comeup },
    // "Cotonou, Bénin · disponible en remote" → value "Cotonou, Bénin", label "Disponible en remote".
    { icon: MapPin, label: capitalize(t.about.facts.location.split(" · ")[1] ?? t.contact.locationTitle), value: t.about.facts.location.split(" · ")[0], href: null },
  ];

  return (
    <section id="contact" className="border-t border-line bg-[linear-gradient(180deg,#0A1530_0%,#060B18_100%)]">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-16 sm:px-6 sm:py-[88px] lg:grid-cols-2 lg:gap-12">
        <div className="reveal flex flex-col gap-5">
          <Eyebrow>{t.contact.eyebrow}</Eyebrow>
          <h2 className="text-[30px] font-extrabold leading-[1.1] tracking-[-0.03em] text-white sm:text-[40px]">
            {t.contact.titlePrefix} <span className="text-brand">{t.contact.titleHighlight}</span>
          </h2>
          <p className="text-base leading-relaxed text-muted-foreground">{t.contact.subtitle}</p>
          <div className="flex flex-wrap gap-3 pt-1">
            <a
              href={whatsappLink(t.whatsapp.message)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-[52px] items-center gap-2.5 rounded-full bg-primary px-6 text-[15px] font-bold text-white transition-[background-color,translate] duration-300 hover:-translate-y-0.5 hover:bg-[#3B74F0]"
            >
              <MessageCircle size={17} aria-hidden="true" /> {t.contact.whatsappCta}
            </a>
            <a
              href={`mailto:${CONTACT.email}`}
              className="group inline-flex h-[52px] items-center gap-2.5 rounded-full border border-[#2A3B62] px-6 text-[15px] font-semibold text-foreground transition-[border-color,color,translate] duration-300 hover:-translate-y-0.5 hover:border-brand hover:text-white"
            >
              {t.contact.emailCta} <ArrowRight size={16} className="nudge" aria-hidden="true" />
            </a>
          </div>

          <ul className="mt-3 grid gap-4 rounded-[20px] border border-[#1C2A48] bg-[rgba(11,20,40,0.8)] p-5 sm:grid-cols-2">
            {links.map(({ icon: Icon, label, value, href }) => {
              const content = (
                <>
                  <span aria-hidden="true" className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-secondary text-brand-soft">
                    <Icon size={17} />
                  </span>
                  <span className="flex min-w-0 flex-col">
                    <span className="truncate text-sm font-bold text-white transition-colors group-hover:text-brand-soft">{value}</span>
                    <span className="text-xs text-subtle">{label}</span>
                  </span>
                </>
              );
              return (
                <li key={label}>
                  {href ? (
                    <a
                      href={href}
                      {...(href.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                      className="group flex min-h-11 items-center gap-3 rounded-lg"
                    >
                      {content}
                    </a>
                  ) : (
                    <div className="flex min-h-11 items-center gap-3">{content}</div>
                  )}
                </li>
              );
            })}
          </ul>
        </div>

        <div style={{ "--d": "0.15s" } as CSSProperties} className="reveal">
            <form
              name={FORM_NAME}
              method="POST"
              data-netlify="true"
              data-netlify-honeypot="bot-field"
              onSubmit={handleSubmit}
              className="flex flex-col gap-4 rounded-[20px] border border-border bg-card p-5 sm:p-7"
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
                className="inline-flex h-12 items-center justify-center gap-2 self-start rounded-full bg-primary px-6 text-[15px] font-semibold text-white transition-colors hover:bg-[#3B74F0] disabled:cursor-not-allowed disabled:opacity-70"
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
    </section>
  );
}
