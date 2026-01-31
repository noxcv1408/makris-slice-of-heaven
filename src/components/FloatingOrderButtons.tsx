import { Phone, ShoppingBag } from 'lucide-react';

export const FloatingOrderButtons = () => {
  return (
    <div className="fixed bottom-8 right-4 md:right-6 z-50 flex flex-col gap-4">
      {/* Just Eat Button */}
      <a
        href="https://www.justeat.it/restaurants-makris-pizza-and-love-lago-patria/menu"
        target="_blank"
        rel="noopener noreferrer"
        className="group flex items-center gap-3 bg-primary text-primary-foreground px-6 py-4 shadow-lg hover:shadow-xl transition-all hover:scale-105 rounded-sm"
      >
        <ShoppingBag className="w-6 h-6" />
        <span className="font-display tracking-wider text-base">JUST EAT</span>
      </a>

      {/* WhatsApp Button */}
      <a
        href="https://wa.me/393533554533?text=Ciao!%20Vorrei%20ordinare%20da%20Makris%20Pizza%26Love"
        target="_blank"
        rel="noopener noreferrer"
        className="group flex items-center gap-3 bg-accent text-accent-foreground px-6 py-4 shadow-lg hover:shadow-xl transition-all hover:scale-105 border-2 border-accent-foreground/20 rounded-sm"
      >
        <Phone className="w-6 h-6" />
        <span className="font-display tracking-wider text-base">WHATSAPP</span>
      </a>
    </div>
  );
};
