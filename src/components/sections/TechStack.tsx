import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Atom, Code2, Smartphone, Database, Server, Layout, Terminal, Github, Container, ChevronDown, ChevronUp, Network, Brackets } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";

const TECH_META = [
  { icon: Layout, color: "text-white" },
  { icon: Atom, color: "text-blue-400" },
  { icon: Smartphone, color: "text-sky-400" },
  { icon: Server, color: "text-green-600" },
  { icon: Container, color: "text-blue-500" },
  { icon: Database, color: "text-blue-300" },
  { icon: Database, color: "text-teal-400" },
  { icon: Brackets, color: "text-blue-500" },
  { icon: Network, color: "text-green-500" },
  { icon: Code2, color: "text-yellow-300" },
  { icon: Terminal, color: "text-primary" },
  { icon: Github, color: "text-orange-500" },
];

export function TechStack() {
  const { t } = useLanguage();
  const [showAll, setShowAll] = useState(false);

  const TECHNOLOGIES = t.stack.items.map((item, i) => ({ ...item, ...TECH_META[i] }));
  const displayedTechs = showAll ? TECHNOLOGIES : TECHNOLOGIES.slice(0, 4);

  return (
    <section id="skills" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 md:text-center"
        >
          <h2 className="text-3xl md:text-5xl font-display font-bold text-foreground mb-4">
            {t.stack.titlePrefix} <span className="text-primary text-glow">{t.stack.titleHighlight}</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t.stack.subtitle}
          </p>
        </motion.div>

        <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <AnimatePresence>
            {displayedTechs.map((tech, index) => {
              const Icon = tech.icon;
              return (
                <motion.div
                  layout
                  key={tech.name}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  className="group p-6 rounded-2xl glass-panel hover:border-primary/40 hover:-translate-y-1 hover:shadow-[0_10px_30px_-10px_rgba(0,255,180,0.1)] transition-all duration-300"
                >
                  <div className={`w-12 h-12 rounded-xl bg-secondary flex items-center justify-center mb-4 ${tech.color}`}>
                    <Icon size={24} />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-2">{tech.name}</h3>
                  <p className="text-sm text-muted-foreground">{tech.desc}</p>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>

        {TECHNOLOGIES.length > 4 && (
          <div className="mt-12 flex justify-center">
            <button
              onClick={() => setShowAll(!showAll)}
              className="flex items-center gap-2 px-6 py-3 rounded-full bg-secondary border border-white/10 text-foreground font-semibold hover:border-primary/50 hover:text-primary transition-all duration-300"
            >
              {showAll ? (
                <>
                  {t.stack.showLess} <ChevronUp size={20} />
                </>
              ) : (
                <>
                  {t.stack.showMore} ({TECHNOLOGIES.length - 4}) <ChevronDown size={20} />
                </>
              )}
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
