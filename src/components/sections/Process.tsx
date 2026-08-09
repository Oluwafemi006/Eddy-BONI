import { motion } from "framer-motion";
import { Search, PenTool, Code, Rocket } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";

const STEP_ICONS = [Search, PenTool, Code, Rocket];

export function Process() {
  const { t } = useLanguage();
  const STEPS = t.process.steps.map((step, i) => ({ ...step, icon: STEP_ICONS[i] }));

  return (
    <section id="process" className="py-24 relative border-t border-white/5">
      {/* Background glow */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-96 h-96 bg-primary/5 rounded-full blur-[100px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 md:text-center"
        >
          <h2 className="text-3xl md:text-5xl font-display font-bold text-foreground mb-4">
            {t.process.titlePrefix} <span className="text-primary text-glow">{t.process.titleHighlight}</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t.process.subtitle}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {/* Ligne connectrice horizontale (bureau) */}
          <div className="hidden lg:block absolute top-[44px] left-[10%] right-[10%] h-[2px] bg-gradient-to-r from-transparent via-white/10 to-transparent -z-10" />

          {STEPS.map((step, index) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative flex flex-col items-center text-center group"
              >
                <div className="w-24 h-24 rounded-3xl bg-card border border-white/10 shadow-xl flex items-center justify-center mb-6 relative group-hover:border-primary/50 group-hover:scale-110 group-hover:-translate-y-2 transition-all duration-300 z-10">
                  <div className="absolute inset-0 rounded-3xl bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <Icon size={32} className="text-primary group-hover:text-primary-foreground transition-colors relative z-10" />
                </div>
                
                <h3 className="text-xl font-bold text-foreground mb-3 font-display">
                  {step.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {step.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
