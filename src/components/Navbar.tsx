import { useState, useEffect } from "react";
import { Phone, Menu, X } from "lucide-react";
import logo from "@/assets/makris-logo.jpg";

const navLinks = [
  { label: "HOME", href: "#home" },
  { label: "CHI SIAMO", href: "#chi-siamo" },
  { label: "MENU", href: "#menu" },
  { label: "GALLERIA", href: "#galleria" },
  { label: "CONTATTI", href: "#contatti" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-background shadow-lg py-2" : "bg-transparent py-4"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between px-4">
        <a href="#home" className="flex items-center gap-2">
          <img src={logo} alt="Makris" className="h-10 w-10 rounded-full object-cover" />
          <div>
            <span className={`text-xs font-display tracking-widest leading-tight ${scrolled ? "text-foreground" : "text-primary-foreground"}`}>
              MAKRIS
            </span>
            <p className={`text-[10px] tracking-wider ${scrolled ? "text-foreground" : "text-primary-foreground"}`}>
              PIZZA & LOVE
            </p>
          </div>
        </a>

        <div className="hidden md:flex items-center gap-6">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className={`font-display text-sm tracking-widest transition-colors hover:text-primary ${
                scrolled ? "text-foreground" : "text-primary-foreground"
              }`}
            >
              {l.label}
            </a>
          ))}
          <a
            href="tel:+390815559226"
            className="flex items-center gap-1 bg-primary text-primary-foreground px-4 py-2 rounded font-display text-sm tracking-wider hover:brightness-110 transition"
          >
            <Phone size={14} /> CHIAMA
          </a>
        </div>

        <button
          className={`md:hidden p-2 ${scrolled ? "text-foreground" : "text-primary-foreground"}`}
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {mobileOpen && (
        <div className="md:hidden bg-background border-t border-border px-4 py-4 space-y-3">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setMobileOpen(false)}
              className="block font-display text-sm tracking-widest text-foreground hover:text-primary"
            >
              {l.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}
