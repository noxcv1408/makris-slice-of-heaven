import { Star } from "lucide-react";
import { siteData } from "@/data/siteData";

const reviews = [
  {
    text: "Pizza buonissima, personale gentile e disponibile. Consigliata senza dubbi.",
    author: "Gennaro C.",
    date: "Dicembre 2024",
    source: "Google",
  },
  {
    text: "Impasto leggero, ingredienti freschi e locale riconoscibile. Una delle pizze piu apprezzate della zona.",
    author: "Maria R.",
    date: "Novembre 2024",
    source: "Google",
  },
  {
    text: "Prezzi onesti e qualita alta. La Makris Love e una pizza da provare.",
    author: "Antonio D.",
    date: "Ottobre 2024",
    source: "Just Eat",
  },
  {
    text: "Consegna veloce e fritti fatti bene. Esperienza molto comoda anche da asporto.",
    author: "Salvatore P.",
    date: "Dicembre 2024",
    source: "Just Eat",
  },
];

export default function ReviewsSection() {
  return (
    <section className="bg-background py-20">
      <div className="container mx-auto px-4">
        <p className="text-center text-sm font-display tracking-[0.3em] text-primary">
          Recensioni
        </p>
        <h2 className="mt-2 text-center font-display text-3xl tracking-wider text-foreground md:text-4xl">
          CHI CI SCEGLIE TORNA
        </h2>
        <p className="mx-auto mt-4 max-w-3xl text-center text-sm leading-relaxed text-foreground/75">
          Le recensioni parlano soprattutto di impasto leggero, prodotto buono, servizio gentile e
          consegna comoda. Sono i dettagli che fanno la differenza.
        </p>

        <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
          <div className="flex items-center gap-2 rounded-full bg-card px-5 py-2">
            <span className="text-3xl font-bold text-primary">{siteData.rating.value}</span>
            <span className="text-sm text-foreground/80">su {siteData.rating.source}</span>
          </div>
          {siteData.deliveryPlatforms.map((platform) => (
            <span
              key={platform.label}
              className="rounded-full border border-border px-4 py-2 text-xs tracking-wider text-foreground/75"
            >
              PRESENTE SU {platform.label.toUpperCase()}
            </span>
          ))}
        </div>

        <div className="mx-auto mt-10 grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2">
          {reviews.map((review) => (
            <article
              key={`${review.author}-${review.date}`}
              className="rounded-2xl border border-border bg-card p-6"
            >
              <div className="mb-3 flex gap-1">
                {[...Array(5)].map((_, index) => (
                  <Star key={index} size={14} className="fill-primary text-primary" />
                ))}
              </div>
              <p className="text-sm italic leading-relaxed text-foreground/90">"{review.text}"</p>
              <div className="mt-4 flex items-end justify-between gap-4">
                <div>
                  <p className="text-sm font-semibold text-foreground">{review.author}</p>
                  <p className="text-xs text-foreground/60">{review.date}</p>
                </div>
                <span className="text-xs font-display tracking-wider text-primary">
                  {review.source}
                </span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
