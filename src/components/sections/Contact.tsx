import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, MapPin, Send, Loader2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const FORM_NAME = "contact";

const encodeForm = (data: Record<string, string>) => {
  return new URLSearchParams(data).toString();
};

export function Contact() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("/", {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: encodeForm({
          "form-name": FORM_NAME,
          name: formData.name,
          email: formData.email,
          message: formData.message,
        }),
      });

      if (!response.ok) {
        throw new Error("Netlify form submission failed");
      }

      toast({
        title: "Message envoyé !",
        description: "Merci de m'avoir contacté. Je vous répondrai dans les plus brefs délais.",
        variant: "default",
      });

      setFormData({ name: "", email: "", message: "" });
    } catch {
      toast({
        title: "Envoi impossible",
        description: "Une erreur est survenue. Réessaie dans quelques instants ou contacte-moi par email.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      {/* Glow background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[120px] pointer-events-none -z-10" />
      
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-display font-bold text-foreground mb-4">
            Travaillons <span className="text-primary text-glow">Ensemble</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Vous avez un projet en tête ou vous recherchez un développeur freelance ? Discutons de vos besoins.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-1 space-y-8"
          >
            <div className="p-8 rounded-2xl glass-panel">
              <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-6">
                <Mail size={24} />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2">Email</h3>
              <p className="text-muted-foreground mb-4">Contactez-moi directement à l'adresse suivante :</p>
              <a href="mailto:eddybaoke@gmail.com" className="text-primary hover:underline font-semibold text-lg">
                eddybaoke@gmail.com
              </a>
            </div>

            <div className="p-8 rounded-2xl glass-panel">
              <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-6">
                <MapPin size={24} />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2">Localisation</h3>
              <p className="text-muted-foreground mb-4">Disponible en 100% remote partout dans le monde.</p>
              <span className="inline-flex px-3 py-1 rounded-full bg-secondary text-foreground text-sm font-medium border border-white/5">
                🌍 Remote First
              </span>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2 p-8 md:p-10 rounded-2xl bg-card border border-white/5 shadow-2xl relative"
          >
            <form
              name={FORM_NAME}
              method="POST"
              data-netlify="true"
              data-netlify-honeypot="bot-field"
              onSubmit={handleSubmit}
              className="space-y-6 relative z-10"
            >
              <input type="hidden" name="form-name" value={FORM_NAME} />
              <p className="hidden">
                <label>
                  Ne pas remplir ce champ: <input name="bot-field" />
                </label>
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium text-foreground">Nom complet</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl bg-background border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all duration-200"
                    placeholder="Jean Dupont"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium text-foreground">Adresse email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl bg-background border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all duration-200"
                    placeholder="jean@entreprise.com"
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium text-foreground">Votre message</label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={6}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl bg-background border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all duration-200 resize-none"
                  placeholder="Décrivez-moi votre projet..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full sm:w-auto px-8 py-4 rounded-xl font-semibold flex items-center justify-center gap-2 bg-primary text-primary-foreground hover:box-glow hover:-translate-y-0.5 active:translate-y-0 disabled:opacity-70 disabled:cursor-not-allowed disabled:transform-none transition-all duration-200"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    Envoi en cours...
                  </>
                ) : (
                  <>
                    Envoyer le message
                    <Send className="w-5 h-5" />
                  </>
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
