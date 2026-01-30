import { ChevronDown, MapPin, Star, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import makrisLogo from '@/assets/makris-logo.jpg';

export const HeroSection = () => {
  const scrollToMenu = () => {
    document.querySelector('#menu')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-primary"
    >
      {/* Checkered Border Top */}
      <div className="absolute top-0 left-0 right-0 h-8 checkered-pattern" />
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center py-20">
        <div className="animate-fade-in-up">
          {/* Logo */}
          <div className="mb-8">
            <img 
              src={makrisLogo} 
              alt="Makris Pizza & Love - Authentic Italian since 2020"
              className="w-48 h-48 md:w-64 md:h-64 mx-auto rounded-full border-4 border-primary-foreground shadow-2xl object-cover"
            />
          </div>

          {/* Tagline */}
          <p className="font-body text-xl md:text-2xl text-primary-foreground/90 mb-2 uppercase tracking-widest">
            Authentic Italian
          </p>

          {/* Main Title */}
          <h1 className="font-script text-5xl md:text-7xl lg:text-8xl text-primary-foreground mb-2 text-shadow">
            Makris
          </h1>
          
          <p className="font-display text-2xl md:text-3xl text-gold mb-2 tracking-wider">
            since 2020
          </p>

          <h2 className="font-display text-3xl md:text-4xl text-primary-foreground mb-6 tracking-widest">
            PIZZA & LOVE
          </h2>

          {/* Rating Badge */}
          <div className="inline-flex items-center gap-2 bg-accent text-accent-foreground px-5 py-3 mb-6">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-gold text-gold" />
              ))}
            </div>
            <span className="font-body text-sm font-semibold">4.7 su Google</span>
          </div>

          {/* Location */}
          <div className="flex items-center justify-center gap-2 text-primary-foreground/80 mb-8">
            <MapPin className="w-5 h-5" />
            <span className="font-body">Via Lago Patria, 140 - Lago Patria (NA)</span>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <a
              href="https://www.justeat.it/restaurants-makris-pizza-and-love-lago-patria/menu"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button 
                size="lg" 
                className="text-lg px-10 py-6 font-display tracking-wider bg-accent text-accent-foreground hover:bg-accent/90 retro-shadow"
              >
                ORDINA ORA
              </Button>
            </a>
            <Button
              variant="outline"
              size="lg"
              onClick={scrollToMenu}
              className="text-lg px-10 py-6 font-display tracking-wider bg-transparent border-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
            >
              MENU
            </Button>
          </div>

          {/* Contact */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a href="tel:+390815559226" className="flex items-center gap-2 text-primary-foreground hover:text-gold transition-colors">
              <Phone className="w-5 h-5" />
              <span className="font-body font-bold">081 5559226</span>
            </a>
            <span className="hidden sm:block text-primary-foreground/50">•</span>
            <a href="tel:+393533554533" className="flex items-center gap-2 text-primary-foreground hover:text-gold transition-colors">
              <Phone className="w-5 h-5" />
              <span className="font-body font-bold">353 3554533</span>
            </a>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-8 h-8 text-primary-foreground/60" />
        </div>
      </div>

      {/* Checkered Border Bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-8 checkered-pattern" />
    </section>
  );
};
