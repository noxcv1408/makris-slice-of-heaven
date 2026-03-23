import { MapPin, Clock, Truck, Wifi } from "lucide-react";

const infoCards = [
  {
    icon: MapPin,
    title: "POSIZIONE",
    lines: ["Via Lago Patria, 140", "Giugliano in Campania (NA)"],
  },
  {
    icon: Clock,
    title: "ORARI",
    lines: ["Mar-Sab: 17:30-23:00", "Dom: 18:00-23:00", "Lunedì: Chiuso"],
  },
  {
    icon: Truck,
    title: "CONSEGNA",
    lines: ["Lago Patria: €1.00", "Varcaturo: €1.50", "Licola: €2.00"],
  },
  {
    icon: Wifi,
    title: "SERVIZI",
    lines: ["Wi-Fi Gratuito", "Menu Bambini", "Asporto"],
  },
];

export default function AboutSection() {
  return (
    <section id="chi-siamo" className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <p className="text-center text-primary font-display tracking-[0.3em] text-sm">Chi Siamo</p>
        <h2 className="text-center font-display text-3xl md:text-4xl text-foreground tracking-wider mt-2">
          LA NOSTRA STORIA
        </h2>
        <p className="text-center text-primary text-sm tracking-widest mt-1">Authentic Italian Pizza</p>

        <div className="max-w-2xl mx-auto mt-8 text-foreground/90 text-center leading-relaxed space-y-4">
          <p>
            Dal <strong>2020</strong>, <strong>Makris Pizza & Love</strong> porta la vera pizza napoletana a Lago Patria.
            Il nostro stile retrò americano si fonde con l'autentica tradizione culinaria italiana per creare
            un'esperienza unica.
          </p>
          <p>
            Ogni pizza è preparata con ingredienti freschi e di qualità, cotta nel nostro forno a legna secondo la
            tradizione napoletana. Vieni a trovarci per gustare la vera <strong>pizza napoletana</strong> in un ambiente
            accogliente e familiare.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          {infoCards.map((c) => (
            <div key={c.title} className="bg-card p-6 rounded-lg text-center">
              <c.icon className="mx-auto text-primary mb-3" size={28} />
              <h3 className="font-display text-foreground tracking-wider text-sm mb-3">{c.title}</h3>
              {c.lines.map((l) => (
                <p key={l} className="text-foreground/80 text-sm">{l}</p>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
