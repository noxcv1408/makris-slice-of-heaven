import { useState } from "react";
import { siteData } from "@/data/siteData";

type Category = "classiche" | "gourmet" | "speciali" | "frittura" | "dolci";

const categories: { key: Category; label: string; tag: string }[] = [
  { key: "classiche", label: "LE CLASSICHE", tag: "PIZZA" },
  { key: "gourmet", label: "LE GOURMET", tag: "CHEF" },
  { key: "speciali", label: "LE SPECIALI", tag: "TOP" },
  { key: "frittura", label: "FRITTURA", tag: "FRITTI" },
  { key: "dolci", label: "DOLCI", tag: "DESSERT" },
];

interface MenuItem {
  name: string;
  desc: string;
  price: string;
  half?: string;
}

const menuData: Record<Category, MenuItem[]> = {
  classiche: [
    { name: "MARGHERITA", desc: "Pomodoro, olio, fior di latte e basilico", price: "EUR 4.50", half: "EUR 9.50" },
    { name: "MARINARA", desc: "Pomodoro, olio, origano, aglio e basilico", price: "EUR 4.00", half: "EUR 8.50" },
    { name: "COSACCA", desc: "Pomodoro, basilico e scaglie di parmigiano", price: "EUR 4.00", half: "EUR 9.00" },
    { name: "NAPOLETANA", desc: "Pomodoro, bufala, basilico e scaglie di parmigiano", price: "EUR 7.00", half: "EUR 15.00" },
    { name: "DIAVOLA", desc: "Pomodoro, fior di latte e salame piccante", price: "EUR 6.50", half: "EUR 14.00" },
    { name: "CAPRESE", desc: "Focaccia con mozzarella a crudo, pomodorini e basilico", price: "EUR 7.00", half: "EUR 15.00" },
    { name: "BUFALINA", desc: "Pomodorini, mozzarella di bufala, olio e basilico", price: "EUR 7.00", half: "EUR 15.00" },
    { name: "CAPRICCIOSA", desc: "Pomodoro, funghi, prosciutto, salame, olive, carciofi e fior di latte", price: "EUR 7.00", half: "EUR 15.00" },
    { name: "4 STAGIONI", desc: "Pomodoro, fior di latte, salame, prosciutto cotto e funghi", price: "EUR 6.50", half: "EUR 14.00" },
    { name: "4 FORMAGGI", desc: "Mozzarella, crema ai 4 formaggi, basilico e olio", price: "EUR 6.50", half: "EUR 14.00" },
    { name: "RIPIENO", desc: "Pomodoro, ricotta, salame, fior di latte e basilico", price: "EUR 7.00", half: "EUR 14.00" },
    { name: "MEZZA LUNA", desc: "Meta ripieno e meta margherita", price: "EUR 6.50", half: "EUR 14.00" },
  ],
  gourmet: [
    { name: "MAKRIS LOVE", desc: "Impasto nero, burrata, prosciutto crudo e rucola", price: "EUR 9.00" },
    { name: "TRUFFLE", desc: "Crema di tartufo, fior di latte e funghi porcini", price: "EUR 10.00" },
  ],
  speciali: [
    { name: "PISTACCHIO", desc: "Crema di pistacchio, mortadella, stracciatella e granella di pistacchio", price: "EUR 9.50" },
    { name: "SALMONE", desc: "Crema di salmone, mozzarella, salmone affumicato e rucola", price: "EUR 9.00" },
  ],
  frittura: [
    { name: "CROCCHETTE", desc: "Crocchette di patate in stile napoletano", price: "EUR 3.00" },
    { name: "ARANCINI", desc: "Arancini di riso classici", price: "EUR 3.50" },
    { name: "FRITTURA MISTA", desc: "Assortimento di fritti da condividere", price: "EUR 6.00" },
  ],
  dolci: [
    { name: "PIZZA NUTELLA", desc: "Pizza dolce con Nutella", price: "EUR 5.00" },
    { name: "TIRAMISU", desc: "Tiramisu artigianale", price: "EUR 4.00" },
  ],
};

export default function MenuSection() {
  const [active, setActive] = useState<Category>("classiche");

  return (
    <section id="menu" className="bg-background py-20">
      <div className="container mx-auto px-4">
        <p className="text-center text-sm font-display tracking-[0.3em] text-primary">
          Il nostro menu
        </p>
        <h2 className="mt-2 text-center font-display text-3xl tracking-wider text-foreground md:text-4xl">
          I SAPORI PIU AMATI
        </h2>
        <p className="mx-auto mt-4 max-w-3xl text-center text-sm leading-relaxed text-foreground/75">
          Dalle classiche alle speciali, il menu racconta lo stile del locale. Qui trovi una selezione
          delle pizze e dei fritti piu apprezzati.
        </p>

        <div className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-3">
          {siteData.signatureItems.map((item) => (
            <article key={item.title} className="rounded-2xl border border-border bg-card p-5 shadow-lg shadow-black/10">
              <p className="text-xs font-display tracking-[0.3em] text-primary">FIRMA MAKRIS</p>
              <h3 className="mt-3 font-display text-xl tracking-wider text-foreground">{item.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-foreground/75">{item.description}</p>
            </article>
          ))}
        </div>

        <div className="mt-10 flex flex-wrap justify-center gap-2">
          {categories.map((category) => (
            <button
              key={category.key}
              onClick={() => setActive(category.key)}
              className={`rounded px-4 py-2 font-display text-sm tracking-wider transition-all ${
                active === category.key
                  ? "bg-primary text-primary-foreground"
                  : "bg-card text-foreground hover:bg-primary/20"
              }`}
            >
              <span className="inline-flex items-center gap-2">
                <span
                  className={`text-xs ${
                    active === category.key ? "text-primary-foreground/80" : "text-primary"
                  }`}
                >
                  {category.tag}
                </span>
                <span>{category.label}</span>
              </span>
            </button>
          ))}
        </div>

        <div className="mx-auto mt-10 grid max-w-5xl grid-cols-1 gap-4 md:grid-cols-2">
          {menuData[active].map((item) => (
            <article
              key={item.name}
              className="rounded-xl border border-border bg-card p-5 transition hover:border-primary/50"
            >
              <div className="flex items-start justify-between gap-4">
                <h3 className="text-sm font-display tracking-wider text-foreground">{item.name}</h3>
                <div className="text-right">
                  <span className="font-bold text-primary">{item.price}</span>
                  {item.half ? (
                    <p className="text-xs text-foreground/60">1/2 metro: {item.half}</p>
                  ) : null}
                </div>
              </div>
              <p className="mt-1 text-sm text-foreground/70">{item.desc}</p>
            </article>
          ))}
        </div>

        {active === "classiche" ? (
          <div className="mx-auto mt-6 max-w-5xl rounded-xl border border-border bg-card p-5">
            <h3 className="mb-2 text-sm font-display tracking-wider text-foreground">AGGIUNTE</h3>
            <div className="flex flex-wrap gap-4 text-sm text-foreground/80">
              <span>Aggiunta carne: EUR 1.00</span>
              <span>Aggiunta contorno: EUR 0.50</span>
              <span>Aggiunta formaggi: EUR 0.50</span>
            </div>
          </div>
        ) : null}

        <div className="mt-8 text-center">
          <a
            href={siteData.deliveryPlatforms[0].url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-primary px-8 py-3 font-display tracking-wider text-primary-foreground transition hover:brightness-110"
          >
            VEDI MENU COMPLETO SU JUST EAT
          </a>
        </div>
      </div>
    </section>
  );
}
