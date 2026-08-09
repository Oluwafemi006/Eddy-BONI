import { motion } from "framer-motion";
import { Briefcase, Calendar, MapPin } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";

export function Experience() {
  const { t } = useLanguage();
  const EXPERIENCES = t.experience.items;

  return (
    <section id="experience" className="py-24 bg-secondary/10 relative border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 md:text-center"
        >
          <h2 className="text-3xl md:text-5xl font-display font-bold text-foreground mb-4">
            {t.experience.titlePrefix} <span className="text-primary text-glow">{t.experience.titleHighlight}</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t.experience.subtitle}
          </p>
        </motion.div>

        <div className="relative border-l border-white/10 ml-3 md:ml-0 md:border-l-0">
          <div className="absolute top-0 bottom-0 left-[27px] hidden md:block w-px bg-white/10" />

          <div className="space-y-12">
            {EXPERIENCES.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative pl-8 md:pl-0"
              >
                <div className="md:grid md:grid-cols-5 md:gap-8 items-start">
                  <div className="hidden md:block col-span-1 text-right pt-2 relative">
                    <div className="text-sm font-semibold text-primary mb-1">{exp.period}</div>
                    <div className="text-xs text-muted-foreground">{exp.location}</div>
                    <div className="absolute right-[-34px] top-2 w-4 h-4 rounded-full bg-primary/20 border border-primary flex items-center justify-center z-10 shadow-[0_0_10px_rgba(0,255,180,0.5)]">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                    </div>
                  </div>
                  
                  <div className="md:hidden absolute left-[-5px] top-2 w-3 h-3 rounded-full bg-primary/20 border border-primary flex items-center justify-center shadow-[0_0_10px_rgba(0,255,180,0.5)]">
                    <div className="w-1 h-1 rounded-full bg-primary" />
                  </div>

                  <div className="col-span-4 rounded-2xl bg-card border border-white/5 p-6 md:p-8 hover:border-primary/30 transition-colors shadow-lg">
                    <div className="flex flex-col md:hidden mb-4 space-y-2">
                      <div className="flex items-center gap-2 text-sm text-primary font-semibold">
                        <Calendar size={14} />
                        {exp.period}
                      </div>
                      <div className="flex items-center gap-2 text-xs text-muted-foreground">
                        <MapPin size={14} />
                        {exp.location}
                      </div>
                    </div>
                    
                    <h3 className="text-2xl font-bold text-foreground mb-1 font-display">{exp.role}</h3>
                    <div className="flex items-center gap-2 text-muted-foreground mb-4 font-medium flex-wrap">
                      <Briefcase size={16} className="text-primary/70" />
                      <span>{exp.company}</span>
                      <span className="w-1 h-1 rounded-full bg-white/20 hidden sm:block" />
                      <span className="text-sm px-2 py-0.5 rounded bg-white/5 border border-white/10">{exp.type}</span>
                    </div>
                    
                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      {exp.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-2">
                      {exp.skills.map((skill) => (
                        <span key={skill} className="px-3 py-1 text-xs font-medium rounded-full bg-primary/10 text-primary border border-primary/20">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
