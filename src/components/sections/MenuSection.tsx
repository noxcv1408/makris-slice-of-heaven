import { useState } from "react";

type Category = "classiche" | "gourmet" | "speciali" | "frittura" | "dolci";

const categories: { key: Category; label: string; emoji: string }[] = [
  { key: "classiche", label: "LE CLASSICHE", emoji: "🍕" },
  { key: "gourmet", label: "LE GOURMET", emoji: "👨‍🍳" },
  { key: "speciali", label: "LE SPECIALI", emoji: "⭐" },
  { key: "frittura", label: "FRITTURA", emoji: "🍟" },
  { key: "dolci", label: "DOLCI", emoji: "🍰" },
];

interface MenuItem {
  name: string;
  desc: string;
  price: string;
  half?: string;
}

const menuData: Record<Category, MenuItem[]> = {
  classiche: [
    { name: "MARGHERITA", desc: "Pomodoro, olio, fior di latte e basilico", price: "€4.50", half: "€9.50" },
    { name: "MARINARA", desc: "Pomodoro, olio, origano, aglio, basilico", price: "€4.00", half: "€8.50" },
    { name: "COSACCA", desc: "Olio, pomodoro, basilico e scaglie di parmigiano", price: "€4.00", half: "€9.00" },
    { name: "NAPOLETANA", desc: "Pomodoro, olio, mozzarella di bufala, basilico e scaglie di parmigiano", price: "€7.00", half: "€15.00" },
    { name: "DIAVOLA", desc: "Pomodoro, fior di latte, salame piccante", price: "€6.50", half: "€14.00" },
    { name: "CAPRESE", desc: "Focaccia con mozzarella a crudo, pomodorini ciliegini, basilico", price: "€7.00", half: "€15.00" },
    { name: "BUFALINA", desc: "Pomodorini ciliegini, mozzarella di bufala, olio, basilico", price: "€7.00", half: "€15.00" },
    { name: "CAPRICCIOSA", desc: "Pomodoro, olio, funghi, prosciutto, salame, olive, carciofi, fior di latte, basilico", price: "€7.00", half: "€15.00" },
    { name: "4 STAGIONI", desc: "Pomodoro, fior di latte, salame, prosciutto cotto, funghi", price: "€6.50", half: "€14.00" },
    { name: "4 FORMAGGI", desc: "Mozzarella, crema ai 4 formaggi, basilico, olio", price: "€6.50", half: "€14.00" },
    { name: "RIPIENO", desc: "Pomodoro, ricotta, salame, fior di latte, basilico", price: "€7.00", half: "€14.00" },
    { name: "MEZZA LUNA", desc: "Metà ripieno metà margherita", price: "€6.50", half: "€14.00" },
  ],
  gourmet: [
    { name: "MAKRIS LOVE", desc: "Impasto nero, burrata, prosciutto crudo, rucola", price: "€9.00" },
    { name: "TRUFFLE", desc: "Crema di tartufo, fior di latte, funghi porcini", price: "€10.00" },
  ],
  speciali: [
    { name: "PISTACCHIO", desc: "Crema di pistacchio, mortadella, stracciatella, granella di pistacchio", price: "€9.50" },
    { name: "SALMONE", desc: "Crema di salmone, mozzarella, salmone affumicato, rucola", price: "€9.00" },
  ],
  frittura: [
    { name: "CROCCHÈ", desc: "Crocchette di patate napoletane", price: "€3.00" },
    { name: "ARANCINI", desc: "Arancini di riso classici", price: "€3.50" },
    { name: "FRITTURA MISTA", desc: "Assortimento di fritti napoletani", price: "€6.00" },
  ],
  dolci: [
    { name: "NUTELLA PIZZA", desc: "Pizza dolce con Nutella", price: "€5.00" },
    { name: "TIRAMISÙ", desc: "Tiramisù artigianale", price: "€4.00" },
  ],
};

export default function MenuSection() {
  const [active, setActive] = useState<Category>("classiche");

  return (
    <section id="menu" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <p className="text-center text-primary font-display tracking-[0.3em] text-sm">Il Nostro Menu</p>
        <h2 className="text-center font-display text-3xl md:text-4xl text-foreground tracking-wider mt-2">
          SCOPRI I NOSTRI SAPORI
        </h2>

        <div className="flex flex-wrap justify-center gap-2 mt-8">
          {categories.map((c) => (
            <button
              key={c.key}
              onClick={() => setActive(c.key)}
              className={`px-4 py-2 font-display text-sm tracking-wider transition-all rounded ${
                active === c.key
                  ? "bg-primary text-primary-foreground"
                  : "bg-card text-foreground hover:bg-primary/20"
              }`}
            >
              {c.emoji} {c.label}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-10 max-w-4xl mx-auto">
          {menuData[active].map((item) => (
            <div key={item.name} className="bg-card p-5 rounded-lg border border-border hover:border-primary/50 transition">
              <div className="flex justify-between items-start">
                <h3 className="font-display text-foreground tracking-wider text-sm">{item.name}</h3>
                <div className="text-right">
                  <span className="text-primary font-bold">{item.price}</span>
                  {item.half && (
                    <p className="text-foreground/60 text-xs">1/2 Metro: {item.half}</p>
                  )}
                </div>
              </div>
              <p className="text-foreground/70 text-sm mt-1">{item.desc}</p>
            </div>
          ))}
        </div>

        {active === "classiche" && (
          <div className="mt-6 max-w-4xl mx-auto bg-card p-5 rounded-lg border border-border">
            <h3 className="font-display text-foreground tracking-wider text-sm mb-2">AGGIUNTE</h3>
            <div className="flex flex-wrap gap-4 text-foreground/80 text-sm">
              <span>Aggiunta Carne: €1.00</span>
              <span>Aggiunta Contorno: €0.50</span>
              <span>Aggiunta Formaggi: €0.50</span>
            </div>
          </div>
        )}

        <div className="text-center mt-8">
          <a
            href="https://www.justeat.it/restaurants-makris-pizza-and-love-lago-patria/menu"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-primary text-primary-foreground font-display tracking-wider px-8 py-3 hover:brightness-110 transition"
          >
            VEDI MENU COMPLETO SU JUST EAT
          </a>
        </div>
      </div>
    </section>
  );
}
