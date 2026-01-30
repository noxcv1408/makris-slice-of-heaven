import { Heart, Facebook, Instagram, MapPin, Phone } from 'lucide-react';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-background py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <h3 className="font-display text-2xl font-bold mb-4">
              Makris <span className="text-primary">Pizza&Love</span>
            </h3>
            <p className="font-body text-background/70 mb-6 leading-relaxed">
              Authentic Italian Pizza dal cuore di Napoli. 
              Qualità, tradizione e passione in ogni pizza.
            </p>
            <div className="flex gap-4">
              <a
                href="https://www.facebook.com/MakrisPizzaLove"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-background/10 rounded-full flex items-center justify-center hover:bg-primary transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="https://www.instagram.com/makrispizza"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-background/10 rounded-full flex items-center justify-center hover:bg-primary transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display text-lg font-semibold mb-4">Link Rapidi</h4>
            <ul className="space-y-3 font-body">
              <li>
                <a href="#menu" className="text-background/70 hover:text-primary transition-colors">
                  Menu
                </a>
              </li>
              <li>
                <a href="#about" className="text-background/70 hover:text-primary transition-colors">
                  Chi Siamo
                </a>
              </li>
              <li>
                <a href="#gallery" className="text-background/70 hover:text-primary transition-colors">
                  Galleria
                </a>
              </li>
              <li>
                <a href="#contact" className="text-background/70 hover:text-primary transition-colors">
                  Contatti
                </a>
              </li>
              <li>
                <a 
                  href="https://www.justeat.it/restaurants-makris-pizza-and-love-lago-patria/menu"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-background/70 hover:text-primary transition-colors"
                >
                  Ordina su Just Eat
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display text-lg font-semibold mb-4">Contatti</h4>
            <ul className="space-y-3 font-body">
              <li className="flex items-start gap-3 text-background/70">
                <MapPin className="w-5 h-5 flex-shrink-0 mt-0.5" />
                <span>Via Lago Patria, 140<br />80014 Lago Patria NA</span>
              </li>
              <li>
                <a href="tel:+390815559226" className="flex items-center gap-3 text-background/70 hover:text-primary transition-colors">
                  <Phone className="w-5 h-5" />
                  +39 081 555 9226
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-background/10 pt-8 text-center">
          <p className="font-body text-background/50 text-sm flex items-center justify-center gap-1">
            © {currentYear} Makris Pizza&Love. Fatto con <Heart className="w-4 h-4 text-primary" /> a Lago Patria
          </p>
        </div>
      </div>
    </footer>
  );
};
