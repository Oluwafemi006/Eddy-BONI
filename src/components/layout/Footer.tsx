import { Github, Linkedin, Mail, Twitter } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-white/5 bg-background pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="md:col-span-2">
            <a href="#" className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center border border-primary/20">
                <span className="font-display font-bold text-primary text-sm">EB</span>
              </div>
              <span className="font-display font-bold text-xl tracking-wide">
                Eddy Boni
              </span>
            </a>
            <p className="text-muted-foreground max-w-sm">
              BONI Adjé Oladjidé Kenneth Eddy.<br />
              Développeur Full-Stack expert en React, React Native et Django. Création d'applications performantes en freelance.
            </p>
          </div>
          
          <div>
            <h4 className="font-display font-semibold text-lg mb-4 text-foreground">Navigation</h4>
            <ul className="space-y-2">
              <li><a href="#about" className="text-muted-foreground hover:text-primary transition-colors">À propos</a></li>
              <li><a href="#skills" className="text-muted-foreground hover:text-primary transition-colors">Compétences</a></li>
              <li><a href="#projects" className="text-muted-foreground hover:text-primary transition-colors">Projets</a></li>
              <li><a href="#services" className="text-muted-foreground hover:text-primary transition-colors">Services</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-display font-semibold text-lg mb-4 text-foreground">Réseaux</h4>
            <div className="flex gap-4">
              <a href="https://www.linkedin.com/in/a-o-kenneth-eddy-boni-6794512b3" aria-label="LinkedIn" className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all border border-transparent hover:border-primary/20">
                <Linkedin size={18} />
              </a>
              <a href="https://github.com/Oluwafemi006" aria-label="GitHub" className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all border border-transparent hover:border-primary/20">
                <Github size={18} />
              </a>
              <a href="#" aria-label="Twitter" className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all border border-transparent hover:border-primary/20">
                <Twitter size={18} />
              </a>
            </div>
          </div>
        </div>
        
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} BONI Adjé Oladjidé Kenneth Eddy. Tous droits réservés.</p>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
            Disponible pour de nouvelles missions
          </div>
        </div>
      </div>
    </footer>
  );
}
