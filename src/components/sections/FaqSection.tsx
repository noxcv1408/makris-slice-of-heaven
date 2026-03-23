import { ChevronDown } from "lucide-react";
import { siteData } from "@/data/siteData";

export default function FaqSection() {
  return (
    <section className="bg-secondary py-20">
      <div className="container mx-auto px-4">
        <p className="text-center text-sm font-display tracking-[0.3em] text-primary">Domande frequenti</p>
        <h2 className="mt-2 text-center font-display text-3xl tracking-wider text-foreground md:text-4xl">
          TUTTO CHIARO IN UN ATTIMO
        </h2>
        <p className="mx-auto mt-4 max-w-3xl text-center text-sm leading-relaxed text-foreground/75">
          Orari, consegna, ordine online e informazioni utili. Qui trovi le risposte alle domande che
          capitano piu spesso prima di scegliere dove ordinare.
        </p>

        <div className="mx-auto mt-10 max-w-4xl space-y-3">
          {siteData.faqItems.map((item) => (
            <details
              key={item.question}
              className="group rounded-2xl border border-border bg-card px-5 py-4"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-display text-sm tracking-wider text-foreground">
                <span>{item.question}</span>
                <ChevronDown className="shrink-0 text-primary transition group-open:rotate-180" size={18} />
              </summary>
              <p className="mt-4 text-sm leading-relaxed text-foreground/75">{item.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
