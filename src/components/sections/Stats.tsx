import { motion } from "framer-motion";

const STATS = [
  { value: "3+", label: "Années d'expérience" },
  { value: "20+", label: "Projets réalisés" },
  { value: "100%", label: "Satisfaction client" },
  { value: "10k+", label: "Lignes de code" },
];

export function Stats() {
  return (
    <section className="py-12 border-y border-white/5 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {STATS.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="text-center md:text-left"
            >
              <div className="text-4xl md:text-5xl font-display font-bold text-foreground mb-2">
                {stat.value}
              </div>
              <div className="text-sm md:text-base text-muted-foreground font-medium">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
