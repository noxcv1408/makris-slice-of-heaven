import { Phone, ShoppingBag } from 'lucide-react';

export const FloatingOrderButtons = () => {
  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3">
      {/* Just Eat Button */}
      <a
        href="https://www.justeat.it/restaurants-makris-pizza-and-love-lago-patria/menu"
        target="_blank"
        rel="noopener noreferrer"
        className="group flex items-center gap-3 bg-primary text-primary-foreground px-5 py-3 shadow-lg hover:shadow-xl transition-all hover:scale-105"
      >
        <ShoppingBag className="w-5 h-5" />
        <span className="font-display tracking-wider text-sm">JUST EAT</span>
      </a>

      {/* WhatsApp Button */}
      <a
        href="https://wa.me/393533554533?text=Ciao!%20Vorrei%20ordinare%20da%20Makris%20Pizza%26Love"
        target="_blank"
        rel="noopener noreferrer"
        className="group flex items-center gap-3 bg-accent text-accent-foreground px-5 py-3 shadow-lg hover:shadow-xl transition-all hover:scale-105 border-2 border-accent-foreground/20"
      >
        <Phone className="w-5 h-5" />
        <span className="font-display tracking-wider text-sm">WHATSAPP</span>
      </a>
    </div>
  );
};
