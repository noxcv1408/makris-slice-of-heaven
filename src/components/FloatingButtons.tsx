import { MessageCircle } from "lucide-react";

export default function FloatingButtons() {
  return (
    <>
      <a
        href="https://www.justeat.it/restaurants-makris-pizza-and-love-lago-patria/menu"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-20 right-4 z-40 bg-primary text-primary-foreground px-4 py-2 rounded-full font-display text-xs tracking-wider shadow-lg hover:brightness-110 transition flex items-center gap-2"
      >
        🍕 JUST EAT
      </a>
      <a
        href="https://wa.me/393533554533?text=Ciao!%20Vorrei%20ordinare%20da%20Makris%20Pizza%26Love"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-4 z-40 bg-green-600 text-white px-4 py-2 rounded-full font-display text-xs tracking-wider shadow-lg hover:bg-green-700 transition flex items-center gap-2"
      >
        <MessageCircle size={16} /> WHATSAPP
      </a>
    </>
  );
}
