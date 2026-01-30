import { Heart, Facebook, Instagram, MapPin, Phone } from 'lucide-react';
import makrisLogo from '@/assets/makris-logo.jpg';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-accent text-accent-foreground relative">
      {/* Checkered Border Top */}
      <div className="absolute top-0 left-0 right-0 h-6 checkered-pattern" />

      <div className="container mx-auto px-4 pt-12 pb-8">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div className="text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-3 mb-4">
              <img 
                src={makrisLogo}
                alt="Makris Logo"
                className="w-16 h-16 rounded-full object-cover border-2 border-primary"
              />
              <div>
                <h3 className="font-script text-2xl text-primary">Makris</h3>
                <p className="font-display text-sm tracking-widest">PIZZA & LOVE</p>
              </div>
            </div>
            <p className="font-body text-accent-foreground/70 mb-4 text-sm">
              Authentic Italian Pizza dal 2020.<br />
              Qualità, tradizione e passione.
            </p>
            <div className="flex gap-4 justify-center md:justify-start">
              <a
                href="https://www.facebook.com/MakrisPizzaLove"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-primary flex items-center justify-center hover:bg-primary/80 transition-colors"
              >
                <Facebook className="w-5 h-5 text-primary-foreground" />
              </a>
              <a
                href="https://www.instagram.com/makrispizza"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-primary flex items-center justify-center hover:bg-primary/80 transition-colors"
              >
                <Instagram className="w-5 h-5 text-primary-foreground" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="text-center">
            <h4 className="font-display text-xl tracking-widest mb-4">LINK RAPIDI</h4>
            <ul className="space-y-2 font-body">
              <li>
                <a href="#menu" className="text-accent-foreground/70 hover:text-primary transition-colors">
                  Menu
                </a>
              </li>
              <li>
                <a href="#about" className="text-accent-foreground/70 hover:text-primary transition-colors">
                  Chi Siamo
                </a>
              </li>
              <li>
                <a href="#gallery" className="text-accent-foreground/70 hover:text-primary transition-colors">
                  Galleria
                </a>
              </li>
              <li>
                <a href="#contact" className="text-accent-foreground/70 hover:text-primary transition-colors">
                  Contatti
                </a>
              </li>
              <li>
                <a 
                  href="https://www.justeat.it/restaurants-makris-pizza-and-love-lago-patria/menu"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:text-primary/80 transition-colors font-bold"
                >
                  Ordina su Just Eat
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="text-center md:text-right">
            <h4 className="font-display text-xl tracking-widest mb-4">CONTATTI</h4>
            <ul className="space-y-3 font-body">
              <li className="flex items-start gap-3 justify-center md:justify-end text-accent-foreground/70">
                <span className="text-right">Via Lago Patria, 140<br />80014 Lago Patria NA</span>
                <MapPin className="w-5 h-5 flex-shrink-0 mt-0.5" />
              </li>
              <li>
                <a href="tel:+390815559226" className="flex items-center gap-3 justify-center md:justify-end text-accent-foreground/70 hover:text-primary transition-colors">
                  <span>081 5559226</span>
                  <Phone className="w-5 h-5" />
                </a>
              </li>
              <li>
                <a href="tel:+393533554533" className="flex items-center gap-3 justify-center md:justify-end text-accent-foreground/70 hover:text-primary transition-colors">
                  <span>353 3554533</span>
                  <Phone className="w-5 h-5" />
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-accent-foreground/20 pt-6 text-center">
          <p className="font-body text-accent-foreground/50 text-sm flex items-center justify-center gap-1">
            © {currentYear} Makris Pizza & Love. Fatto con <Heart className="w-4 h-4 text-primary" /> a Lago Patria
          </p>
        </div>
      </div>
    </footer>
  );
};
