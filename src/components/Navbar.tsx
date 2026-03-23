import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, ShoppingBag, X } from "lucide-react";
import logo from "@/assets/makris-logo.jpg";

const navLinks = [
  { label: "HOME", href: "/#home" },
  { label: "CHI SIAMO", href: "/#chi-siamo" },
  { label: "MENU", href: "/#menu" },
  { label: "GALLERIA", href: "/#galleria" },
  { label: "CONTATTI", href: "/#contatti" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();
  const isOrderPage = location.pathname === "/ordina";

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname, location.hash]);

  return (
    <nav
      className={`fixed left-0 right-0 top-0 z-50 transition-all duration-300 ${
        scrolled || isOrderPage ? "bg-background shadow-lg py-2" : "bg-transparent py-4"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between px-4">
        <Link to="/" className="flex items-center gap-2">
          <img src={logo} alt="Makris" className="h-10 w-10 rounded-full object-cover" />
          <div>
            <span className="text-xs font-display tracking-widest leading-tight text-foreground">
              MAKRIS
            </span>
            <p className="text-[10px] tracking-wider text-foreground">PIZZA & LOVE</p>
          </div>
        </Link>

        <div className="hidden items-center gap-6 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="font-display text-sm tracking-widest text-foreground transition-colors hover:text-primary"
            >
              {link.label}
            </a>
          ))}
          <Link
            to="/ordina"
            className="flex items-center gap-2 rounded bg-primary px-4 py-2 font-display text-sm tracking-wider text-primary-foreground transition hover:brightness-110"
          >
            <ShoppingBag size={14} />
            {isOrderPage ? "CONFIGURATORE" : "ORDINA"}
          </Link>
        </div>

        <button
          className="p-2 text-foreground md:hidden"
          onClick={() => setMobileOpen((prev) => !prev)}
          aria-label={mobileOpen ? "Chiudi menu" : "Apri menu"}
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {mobileOpen ? (
        <div className="space-y-3 border-t border-border bg-background px-4 py-4 md:hidden">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="block font-display text-sm tracking-widest text-foreground hover:text-primary"
            >
              {link.label}
            </a>
          ))}
          <Link
            to="/ordina"
            className="block rounded bg-primary px-4 py-3 text-center font-display text-sm tracking-widest text-primary-foreground"
          >
            APRI IL CONFIGURATORE
          </Link>
        </div>
      ) : null}
    </nav>
  );
}
