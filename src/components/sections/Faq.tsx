import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";

// Native <details> keeps every answer in the prerendered HTML, even when collapsed.
export function Faq() {
  const { t } = useLanguage();

  return (
    <section id="faq" className="py-24 border-t border-white/5">
      <div className="max-w-3xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 md:text-center"
        >
          <h2 className="text-3xl md:text-5xl font-display font-bold text-foreground mb-4">
            {t.faq.titlePrefix} <span className="text-primary text-glow">{t.faq.titleHighlight}</span>
          </h2>
          <p className="text-lg text-muted-foreground">{t.faq.subtitle}</p>
        </motion.div>

        <div className="space-y-4">
          {t.faq.items.map((item) => (
            <details
              key={item.question}
              className="group rounded-2xl bg-card border border-white/5 open:border-primary/30 transition-colors"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 p-6 font-display font-semibold text-foreground [&::-webkit-details-marker]:hidden">
                <h3 className="text-lg">{item.question}</h3>
                <ChevronDown
                  size={20}
                  className="shrink-0 text-primary transition-transform duration-300 group-open:rotate-180"
                  aria-hidden="true"
                />
              </summary>
              <p className="px-6 pb-6 -mt-2 text-muted-foreground leading-relaxed">{item.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
