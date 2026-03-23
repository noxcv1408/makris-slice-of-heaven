import { Star } from "lucide-react";

const reviews = [
  {
    text: "Pizza buonissima, personale gentile e disponibile. Consiglio vivamente a tutti!",
    author: "Gennaro C.",
    date: "Dicembre 2024",
    source: "Google",
  },
  {
    text: "La pizza più buona della zona! Impasto leggero e ingredienti freschi. Il locale è carino con un bel stile americano.",
    author: "Maria R.",
    date: "Novembre 2024",
    source: "Google",
  },
  {
    text: "Ottima pizzeria, prezzi onesti e qualità alta. La Makris Love è fantastica!",
    author: "Antonio D.",
    date: "Ottobre 2024",
    source: "Just Eat",
  },
  {
    text: "Buona pizza e consegna veloce. Frittura eccellente, crocchè e arancini top.",
    author: "Salvatore P.",
    date: "Dicembre 2024",
    source: "Just Eat",
  },
];

export default function ReviewsSection() {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <p className="text-center text-primary font-display tracking-[0.3em] text-sm">Recensioni</p>
        <h2 className="text-center font-display text-3xl md:text-4xl text-foreground tracking-wider mt-2">
          COSA DICONO I NOSTRI CLIENTI
        </h2>

        <div className="flex items-center justify-center gap-2 mt-4">
          <span className="text-4xl font-bold text-primary">4.7</span>
          <span className="text-foreground/80 text-sm">su Google</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10 max-w-4xl mx-auto">
          {reviews.map((r, i) => (
            <div key={i} className="bg-card p-6 rounded-lg border border-border">
              <div className="flex gap-1 mb-3">
                {[...Array(5)].map((_, j) => (
                  <Star key={j} size={14} className="fill-primary text-primary" />
                ))}
              </div>
              <p className="text-foreground/90 italic text-sm leading-relaxed">"{r.text}"</p>
              <div className="mt-4 flex justify-between items-end">
                <div>
                  <p className="text-foreground font-semibold text-sm">{r.author}</p>
                  <p className="text-foreground/60 text-xs">{r.date}</p>
                </div>
                <span className="text-primary text-xs font-display tracking-wider">{r.source}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
