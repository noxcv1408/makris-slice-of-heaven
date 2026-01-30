import { ChevronDown, MapPin, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';

export const HeroSection = () => {
  const scrollToMenu = () => {
    document.querySelector('#menu')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1513104890138-7c749659a591?w=1920&h=1080&fit=crop')`,
        }}
      />
      
      {/* Overlay */}
      <div className="absolute inset-0 gradient-hero" />
      
      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-primary/20 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-40 right-20 w-40 h-40 bg-gold/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }} />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="animate-fade-in-up">
          {/* Rating Badge */}
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-gold text-gold" />
              ))}
            </div>
            <span className="text-white/90 font-body text-sm">4.7 su Google (183 recensioni)</span>
          </div>

          {/* Main Title */}
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-4">
            Makris
            <span className="block text-gradient">Pizza&Love</span>
          </h1>

          {/* Tagline */}
          <p className="font-body text-xl md:text-2xl text-white/80 mb-4 max-w-2xl mx-auto">
            Authentic Italian Pizza • Dal Cuore di Napoli
          </p>

          {/* Location */}
          <div className="flex items-center justify-center gap-2 text-white/70 mb-8">
            <MapPin className="w-5 h-5" />
            <span className="font-body">Lago Patria, Napoli</span>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <a
              href="https://www.justeat.it/restaurants-makris-pizza-and-love-lago-patria/menu"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button size="lg" className="text-lg px-8 py-6 font-body font-semibold shadow-xl hover:shadow-2xl">
                Ordina Ora
              </Button>
            </a>
            <Button
              variant="outline"
              size="lg"
              onClick={scrollToMenu}
              className="text-lg px-8 py-6 font-body bg-white/10 border-white/30 text-white hover:bg-white/20 hover:text-white"
            >
              Scopri il Menu
            </Button>
          </div>

          {/* Features */}
          <div className="flex flex-wrap justify-center gap-6 text-white/80">
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg">
              <span className="text-xl">🍕</span>
              <span className="font-body text-sm">Pizza Autentica</span>
            </div>
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg">
              <span className="text-xl">🌅</span>
              <span className="font-body text-sm">Rooftop Seating</span>
            </div>
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg">
              <span className="text-xl">👶</span>
              <span className="font-body text-sm">Kids Menu</span>
            </div>
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg">
              <span className="text-xl">📶</span>
              <span className="font-body text-sm">Free Wi-Fi</span>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-8 h-8 text-white/60" />
        </div>
      </div>
    </section>
  );
};
