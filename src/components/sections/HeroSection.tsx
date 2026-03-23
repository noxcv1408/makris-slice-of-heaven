import { ChevronDown, MapPin, Phone, Star } from "lucide-react";
import logo from "@/assets/makris-logo.jpg";

export default function HeroSection() {
  return (
    <section id="home" className="relative min-h-screen flex flex-col items-center justify-center checkerboard-bg">
      <div className="absolute inset-0 bg-background/80" />
      <div className="relative z-10 flex flex-col items-center text-center px-4">
        <img src={logo} alt="Makris Pizza & Love" className="w-44 h-44 rounded-full border-4 border-foreground shadow-2xl mb-6 object-cover" />
        
        <p className="text-sm font-display tracking-[0.3em] text-foreground/80 uppercase">Authentic Italian</p>
        <h1 className="font-script text-7xl md:text-8xl text-foreground mt-2">Makris</h1>
        <p className="font-display text-primary tracking-[0.2em] text-lg mt-1">SINCE 2020</p>
        <h2 className="font-display text-2xl md:text-3xl tracking-[0.25em] text-foreground mt-2">PIZZA & LOVE</h2>

        <div className="flex items-center gap-2 bg-card/60 backdrop-blur px-5 py-2 rounded-full mt-6">
          {[...Array(5)].map((_, i) => (
            <Star key={i} size={18} className="fill-primary text-primary" />
          ))}
          <span className="text-foreground text-sm ml-1">4.7 su Google</span>
        </div>

        <div className="flex items-center gap-2 text-foreground/80 text-sm mt-4">
          <MapPin size={16} />
          Via Lago Patria, 140 - Lago Patria (NA)
        </div>

        <div className="flex gap-4 mt-6">
          <a
            href="https://www.justeat.it/restaurants-makris-pizza-and-love-lago-patria/menu"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-primary text-primary-foreground font-display tracking-wider px-8 py-3 hover:brightness-110 transition"
          >
            ORDINA ORA
          </a>
          <a
            href="#menu"
            className="border-2 border-foreground text-foreground font-display tracking-wider px-8 py-3 hover:bg-foreground hover:text-background transition"
          >
            MENU
          </a>
        </div>

        <div className="flex items-center gap-4 text-foreground/80 text-sm mt-4">
          <a href="tel:+390815559226" className="flex items-center gap-1 hover:text-primary transition">
            <Phone size={14} /> 081 5559226
          </a>
          <span>•</span>
          <a href="tel:+393533554533" className="flex items-center gap-1 hover:text-primary transition">
            <Phone size={14} /> 353 3554533
          </a>
        </div>

        <a href="#chi-siamo" className="mt-8 animate-bounce text-foreground/60">
          <ChevronDown size={28} />
        </a>
      </div>
    </section>
  );
}
