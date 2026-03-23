import { Clock, MapPin, Truck, Users } from "lucide-react";
import { siteData } from "@/data/siteData";

const infoCards = [
  {
    icon: MapPin,
    title: "POSIZIONE",
    lines: [
      siteData.address.street,
      `${siteData.address.locality} - ${siteData.address.municipality} (${siteData.address.region})`,
    ],
  },
  {
    icon: Clock,
    title: "ORARI",
    lines: ["Mar-Sab: 17:30-23:00", "Dom: 18:00-23:00", "Lunedi: Chiuso"],
  },
  {
    icon: Truck,
    title: "CONSEGNA",
    lines: siteData.deliveryFees,
  },
  {
    icon: Users,
    title: "PER CHI E PENSATO",
    lines: ["Cena in sede", "Asporto rapido", "Clienti locali e internazionali"],
  },
];

export default function AboutSection() {
  return (
    <section id="chi-siamo" className="bg-secondary py-20">
      <div className="container mx-auto px-4">
        <p className="text-center text-sm font-display tracking-[0.3em] text-primary">Chi siamo</p>
        <h2 className="mt-2 text-center font-display text-3xl tracking-wider text-foreground md:text-4xl">
          PIZZA NAPOLETANA, STILE MAKRIS
        </h2>
        <p className="mx-auto mt-4 max-w-3xl text-center text-sm leading-relaxed text-foreground/80 md:text-base">
          A Lago Patria trovi una pizza fatta con attenzione, ingredienti scelti e un'atmosfera che
          rende il locale subito riconoscibile.
        </p>

        <div className="mx-auto mt-10 max-w-3xl space-y-4 text-center leading-relaxed text-foreground/90">
          <p>
            Makris Pizza & Love porta a {siteData.address.locality} una pizza napoletana fatta con
            attenzione, ingredienti buoni e uno stile che mescola anima partenopea e atmosfera
            italo-americana.
          </p>
          <p>
            Qui puoi fermarti a cena, ordinare da asporto oppure scegliere la consegna. Il risultato
            resta lo stesso: un'esperienza semplice, curata e pensata per farti tornare.
          </p>
          <p>
            Il locale accoglie anche ospiti internazionali che passano dalla zona di Lago Patria, con
            una comunicazione chiara e un servizio facile da capire fin dal primo contatto.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {infoCards.map((card) => (
            <div key={card.title} className="rounded-xl bg-card p-6 text-center shadow-lg shadow-black/10">
              <card.icon className="mx-auto mb-3 text-primary" size={28} />
              <h3 className="mb-3 text-sm font-display tracking-wider text-foreground">
                {card.title}
              </h3>
              {card.lines.map((line) => (
                <p key={line} className="text-sm text-foreground/80">
                  {line}
                </p>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
