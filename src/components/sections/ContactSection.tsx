import { Clock, MapPin, Phone } from "lucide-react";
import { Link } from "react-router-dom";
import { siteData } from "@/data/siteData";

export default function ContactSection() {
  return (
    <section id="contatti" className="bg-background py-20">
      <div className="container mx-auto px-4">
        <p className="text-center text-sm font-display tracking-[0.3em] text-primary">Contatti</p>
        <h2 className="mt-2 text-center font-display text-3xl tracking-wider text-foreground md:text-4xl">
          VIENI A TROVARCI O ORDINA SUBITO
        </h2>
        <p className="mx-auto mt-4 max-w-3xl text-center text-sm leading-relaxed text-foreground/75">
          Ci trovi a Lago Patria. Se vuoi passare in sede, ordinare da asporto o ricevere a domicilio,
          qui hai tutto quello che serve per farlo subito.
        </p>

        <div className="mx-auto mt-12 grid max-w-5xl grid-cols-1 gap-8 md:grid-cols-3">
          <div className="rounded-2xl border border-border bg-card p-6 text-center">
            <MapPin className="mx-auto mb-3 text-primary" size={28} />
            <h3 className="mb-2 text-sm font-display tracking-wider text-foreground">INDIRIZZO</h3>
            <p className="text-sm text-foreground/80">{siteData.address.street}</p>
            <p className="text-sm text-foreground/80">
              {siteData.address.postalCode} {siteData.address.locality}
            </p>
            <p className="text-sm text-foreground/80">
              {siteData.address.municipality} ({siteData.address.region})
            </p>
            <a
              href={`https://maps.google.com/?q=${encodeURIComponent(siteData.address.mapQuery)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 inline-block text-sm text-primary hover:underline"
            >
              Apri in Google Maps
            </a>
          </div>

          <div className="rounded-2xl border border-border bg-card p-6 text-center">
            <Phone className="mx-auto mb-3 text-primary" size={28} />
            <h3 className="mb-2 text-sm font-display tracking-wider text-foreground">CONTATTI</h3>
            {siteData.phones.map((phone) => (
              <a
                key={phone.href}
                href={phone.href}
                className="block text-sm text-foreground/80 transition hover:text-primary"
              >
                {phone.label}
              </a>
            ))}
            <a
              href={siteData.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 inline-block text-sm text-primary hover:underline"
            >
              Scrivi su WhatsApp
            </a>
          </div>

          <div className="rounded-2xl border border-border bg-card p-6 text-center">
            <Clock className="mx-auto mb-3 text-primary" size={28} />
            <h3 className="mb-2 text-sm font-display tracking-wider text-foreground">
              ORARI DI APERTURA
            </h3>
            {siteData.openingHours.map((entry) => (
              <div key={entry.day} className="mx-auto flex max-w-[220px] justify-between text-sm">
                <span className="text-foreground/80">{entry.day}</span>
                <span className={entry.closed ? "text-primary" : "text-foreground/80"}>
                  {entry.time}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="mx-auto mt-8 max-w-4xl rounded-2xl border border-border bg-secondary/70 p-6">
          <div className="flex flex-wrap gap-2">
            {siteData.deliveryFees.map((fee) => (
              <span
                key={fee}
                className="rounded-full bg-card px-3 py-1 text-xs tracking-wider text-foreground/80"
              >
                {fee}
              </span>
            ))}
          </div>

          <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:justify-center">
            <a
              href={siteData.phones[0].href}
              className="bg-primary px-8 py-3 text-center font-display tracking-wider text-primary-foreground transition hover:brightness-110"
            >
              CHIAMA ORA
            </a>
            <Link
              to="/ordina"
              className="border-2 border-foreground px-8 py-3 text-center font-display tracking-wider text-foreground transition hover:bg-foreground hover:text-background"
            >
              ORDINA ONLINE
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
