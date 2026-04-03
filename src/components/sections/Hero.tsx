import { motion } from "framer-motion";
import { ArrowRight, Download, Terminal } from "lucide-react";

export function Hero() {
  return (
    <section id="about" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background glow effects */}
      <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[120px] pointer-events-none -z-10 mix-blend-screen" />
      <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none -z-10 mix-blend-screen" />
      
      <div className="absolute inset-0 bg-[url('/images/hero-glow.png')] bg-cover bg-center opacity-30 -z-20 mix-blend-lighten" />
      <div className="absolute inset-0 bg-background/80 -z-10" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full relative z-10">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-8"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            Disponible en Freelance
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-5xl md:text-7xl font-display font-bold text-foreground leading-[1.1] mb-6"
          >
            Eddy Boni <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-400">
              Développeur Full-Stack
            </span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex items-center gap-4 text-xl md:text-2xl text-muted-foreground font-medium mb-6 font-display"
          >
            <span>React JS</span>
            <span className="w-1.5 h-1.5 rounded-full bg-primary/50" />
            <span>React Native</span>
            <span className="w-1.5 h-1.5 rounded-full bg-primary/50" />
            <span>Django</span>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-lg text-muted-foreground leading-relaxed mb-10 max-w-2xl"
          >
            Je conçois et développe des applications web et mobiles performantes, scalables et centrées sur l'utilisateur pour les entreprises et startups. 
            <strong> Basé en remote.</strong>
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-wrap items-center gap-4"
          >
            <a
              href="#projects"
              className="group flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground font-semibold rounded-xl hover:box-glow transition-all duration-300"
            >
              Voir mes projets
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#contact"
              className="flex items-center gap-2 px-8 py-4 bg-secondary text-foreground font-semibold rounded-xl border border-white/5 hover:border-primary/50 hover:bg-primary/5 transition-all duration-300"
            >
              Me contacter
              <Terminal className="w-5 h-5 opacity-70" />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
