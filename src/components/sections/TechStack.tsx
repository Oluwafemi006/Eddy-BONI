import { motion } from "framer-motion";
import { Code2, Smartphone, Database, Server, Layout, Terminal, Github, Container } from "lucide-react";

const TECHNOLOGIES = [
  { name: "JavaScript", icon: Code2, color: "text-yellow-300", desc: "Logique front-end et intégrations web" },
  { name: "React JS", icon: Layout, color: "text-blue-400", desc: "Front-end web SPA" },
  { name: "React Native", icon: Smartphone, color: "text-blue-500", desc: "Applications mobiles iOS & Android" },
  { name: "Python", icon: Terminal, color: "text-yellow-400", desc: "Scripting & Backend" },
  { name: "Django", icon: Server, color: "text-green-600", desc: "Framework backend robuste" },
  { name: "API REST", icon: Code2, color: "text-primary", desc: "Django REST Framework" },
  { name: "PostgreSQL", icon: Database, color: "text-blue-300", desc: "Base de données relationnelle" },
  { name: "Git", icon: Github, color: "text-orange-500", desc: "Version control" },
  { name: "Docker", icon: Container, color: "text-blue-500", desc: "Conteneurisation" },
];

export function TechStack() {
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
            Ma <span className="text-primary text-glow">Stack Technique</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Un écosystème d'outils modernes et performants pour construire des solutions de bout en bout.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {TECHNOLOGIES.map((tech, index) => {
            const Icon = tech.icon;
            return (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
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
        </div>
      </div>
    </section>
  );
}
