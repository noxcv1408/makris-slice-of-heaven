import { MapPin, Phone, Clock } from "lucide-react";

const hours = [
  { day: "Lunedì", time: "Chiuso", closed: true },
  { day: "Martedì", time: "17:30 – 23:00" },
  { day: "Mercoledì", time: "17:30 – 23:00" },
  { day: "Giovedì", time: "17:30 – 23:00" },
  { day: "Venerdì", time: "17:30 – 23:00" },
  { day: "Sabato", time: "17:30 – 23:00" },
  { day: "Domenica", time: "18:00 – 23:00" },
];

export default function ContactSection() {
  return (
    <section id="contatti" className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <p className="text-center text-primary font-display tracking-[0.3em] text-sm">Contatti</p>
        <h2 className="text-center font-display text-3xl md:text-4xl text-foreground tracking-wider mt-2">
          VIENI A TROVARCI
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12 max-w-4xl mx-auto">
          <div className="text-center">
            <MapPin className="mx-auto text-primary mb-3" size={28} />
            <h3 className="font-display text-foreground tracking-wider text-sm mb-2">INDIRIZZO</h3>
            <p className="text-foreground/80 text-sm">Via Lago Patria, 140</p>
            <p className="text-foreground/80 text-sm">80014 Lago Patria</p>
            <p className="text-foreground/80 text-sm">Giugliano in Campania (NA)</p>
            <a
              href="https://maps.google.com/?q=Via+Lago+Patria+140+80014+Lago+Patria+NA+Italy"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-3 text-primary text-sm hover:underline"
            >
              Apri in Google Maps
            </a>
          </div>

          <div className="text-center">
            <Phone className="mx-auto text-primary mb-3" size={28} />
            <h3 className="font-display text-foreground tracking-wider text-sm mb-2">TELEFONO</h3>
            <a href="tel:+390815559226" className="block text-foreground/80 text-sm hover:text-primary transition">
              081 5559226
            </a>
            <a href="tel:+393533554533" className="block text-foreground/80 text-sm hover:text-primary transition">
              353 3554533
            </a>
          </div>

          <div className="text-center">
            <Clock className="mx-auto text-primary mb-3" size={28} />
            <h3 className="font-display text-foreground tracking-wider text-sm mb-2">ORARI DI APERTURA</h3>
            {hours.map((h) => (
              <div key={h.day} className="flex justify-between text-sm max-w-[200px] mx-auto">
                <span className="text-foreground/80">{h.day}</span>
                <span className={h.closed ? "text-primary" : "text-foreground/80"}>{h.time}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="flex justify-center gap-4 mt-10">
          <a
            href="tel:+390815559226"
            className="bg-primary text-primary-foreground font-display tracking-wider px-8 py-3 hover:brightness-110 transition"
          >
            CHIAMA ORA
          </a>
          <a
            href="https://wa.me/393533554533?text=Ciao!%20Vorrei%20ordinare%20da%20Makris%20Pizza%26Love"
            target="_blank"
            rel="noopener noreferrer"
            className="border-2 border-foreground text-foreground font-display tracking-wider px-8 py-3 hover:bg-foreground hover:text-background transition"
          >
            WHATSAPP
          </a>
        </div>
      </div>
    </section>
  );
}
