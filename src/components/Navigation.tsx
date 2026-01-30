import { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import makrisLogo from '@/assets/makris-logo.jpg';

const navLinks = [
  { href: '#home', label: 'Home' },
  { href: '#about', label: 'Chi Siamo' },
  { href: '#menu', label: 'Menu' },
  { href: '#gallery', label: 'Galleria' },
  { href: '#contact', label: 'Contatti' },
];

export const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-background shadow-lg py-2'
          : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <button
            onClick={() => scrollToSection('#home')}
            className="flex items-center gap-3"
          >
            <img 
              src={makrisLogo}
              alt="Makris Logo"
              className="w-10 h-10 rounded-full object-cover border-2 border-primary"
            />
            <div className="flex flex-col items-start">
              <span className="text-lg md:text-xl font-script text-primary leading-tight">
                Makris
              </span>
              <span className={`text-xs font-display tracking-widest leading-tight ${isScrolled ? 'text-foreground' : 'text-primary-foreground'}`}>
                PIZZA & LOVE
              </span>
            </div>
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => scrollToSection(link.href)}
                className={`font-display text-sm tracking-widest transition-colors hover:text-primary ${
                  isScrolled ? 'text-foreground' : 'text-primary-foreground'
                }`}
              >
                {link.label.toUpperCase()}
              </button>
            ))}
            <a href="tel:+390815559226">
              <Button size="sm" className="gap-2 font-display tracking-wider bg-primary text-primary-foreground">
                <Phone className="w-4 h-4" />
                CHIAMA
              </Button>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`md:hidden p-2 ${isScrolled ? 'text-foreground' : 'text-primary-foreground'}`}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-background shadow-lg animate-fade-in border-t-4 border-primary">
            <div className="flex flex-col p-4 gap-2">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => scrollToSection(link.href)}
                  className="font-display text-foreground py-3 text-left hover:text-primary transition-colors tracking-widest border-b border-border"
                >
                  {link.label.toUpperCase()}
                </button>
              ))}
              <a href="tel:+390815559226" className="mt-2">
                <Button className="w-full gap-2 font-display tracking-wider">
                  <Phone className="w-4 h-4" />
                  CHIAMA ORA
                </Button>
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};
