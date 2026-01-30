import { MessageCircle, UtensilsCrossed } from 'lucide-react';

export const FloatingOrderButtons = () => {
  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3">
      {/* WhatsApp Button */}
      <a
        href="https://wa.me/390815559226?text=Ciao!%20Vorrei%20ordinare%20da%20Makris%20Pizza%26Love"
        target="_blank"
        rel="noopener noreferrer"
        className="group flex items-center gap-3 bg-[#25D366] text-white px-4 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 animate-pulse-glow"
        style={{ animationDuration: '3s' }}
      >
        <MessageCircle className="w-6 h-6" />
        <span className="font-body font-semibold hidden sm:inline">WhatsApp</span>
      </a>

      {/* Just Eat Button */}
      <a
        href="https://www.justeat.it/restaurants-makris-pizza-and-love-lago-patria/menu"
        target="_blank"
        rel="noopener noreferrer"
        className="group flex items-center gap-3 bg-primary text-primary-foreground px-4 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
      >
        <UtensilsCrossed className="w-6 h-6" />
        <span className="font-body font-semibold hidden sm:inline">Just Eat</span>
      </a>
    </div>
  );
};
