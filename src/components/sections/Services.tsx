import { motion } from "framer-motion";
import { Globe, Smartphone, ServerCog, Lightbulb } from "lucide-react";

const SERVICES = [
  {
    title: "Développement Web Full-Stack",
    description: "Création d'applications web robustes et réactives en utilisant l'écosystème React couplé à la puissance de Django.",
    icon: Globe,
  },
  {
    title: "Applications Mobiles",
    description: "Développement d'applications natives iOS et Android avec React Native, partageant le code pour une livraison rapide.",
    icon: Smartphone,
  },
  {
    title: "API REST & Back-end",
    description: "Architecture et développement d'APIs sécurisées et scalables avec Django REST Framework et PostgreSQL.",
    icon: ServerCog,
  },
  {
    title: "Consulting & Architecture",
    description: "Accompagnement technique sur les choix d'architecture, la modélisation de données et l'optimisation des performances.",
    icon: Lightbulb,
  },
];

export function Services() {
  return (
    <section id="services" className="py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-5xl font-display font-bold text-foreground mb-6">
              Mes <span className="text-primary text-glow">Services</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              J'accompagne les entreprises de la conception à la mise en production de leurs produits digitaux. Mon approche Full-Stack garantit une cohérence technique sur l'ensemble de votre projet.
            </p>
            <ul className="space-y-4">
              {[
                "Architecture technique sur-mesure",
                "Code propre, documenté et testé",
                "Communication transparente et agile",
                "Déploiement et intégration continue (CI/CD)"
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-foreground font-medium">
                  <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center text-primary">
                    <div className="w-2 h-2 rounded-full bg-primary" />
                  </div>
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {SERVICES.map((service, index) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="p-6 rounded-2xl glass-panel group"
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-4 group-hover:scale-110 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                    <Icon size={24} />
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-2 font-display">{service.title}</h3>
                  <p className="text-sm text-muted-foreground">{service.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
