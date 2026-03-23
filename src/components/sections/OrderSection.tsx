import { Bike, MessageCircleMore, Pizza, Store } from "lucide-react";
import { Link } from "react-router-dom";
import { siteData } from "@/data/siteData";

const serviceIcons = [Store, Pizza, Bike];

export default function OrderSection() {
  return (
    <section className="bg-background py-20">
      <div className="container mx-auto px-4">
        <p className="text-center text-sm font-display tracking-[0.3em] text-primary">
          Come vuoi ordinarla
        </p>
        <h2 className="mt-2 text-center font-display text-3xl tracking-wider text-foreground md:text-4xl">
          SCEGLI COME GUSTARLA
        </h2>
        <p className="mx-auto mt-4 max-w-3xl text-center text-sm leading-relaxed text-foreground/75">
          Che tu voglia sederti al tavolo, passare per l'asporto o ordinare a domicilio, Makris ti
          accompagna nel modo piu semplice e diretto.
        </p>

        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
          {siteData.serviceModes.map((mode, index) => {
            const Icon = serviceIcons[index];

            return (
              <article
                key={mode.title}
                className="rounded-2xl border border-border bg-card p-6 shadow-lg shadow-black/10"
              >
                <Icon className="mb-4 text-primary" size={28} />
                <h3 className="text-lg font-display tracking-wider text-foreground">{mode.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-foreground/75">{mode.description}</p>
              </article>
            );
          })}
        </div>

        <div className="mt-10 grid grid-cols-1 gap-4 rounded-2xl border border-border bg-secondary/70 p-6 lg:grid-cols-[1.2fr,0.8fr]">
          <div>
            <h3 className="font-display text-xl tracking-wider text-foreground">
              Zone servite e ordine rapido
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-foreground/75">
              La consegna copre soprattutto Lago Patria, Varcaturo e Licola, con un servizio pensato
              per chi vuole ricevere bene e senza complicazioni.
            </p>

            <div className="mt-4 flex flex-wrap gap-2">
              {siteData.deliveryZones.map((zone) => (
                <span
                  key={zone}
                  className="rounded-full bg-card px-3 py-1 text-xs tracking-wider text-foreground/80"
                >
                  {zone}
                </span>
              ))}
            </div>
          </div>

          <div className="space-y-3">
            <Link
              to="/ordina"
              className="block rounded-xl bg-primary px-4 py-4 transition hover:brightness-110"
            >
              <span className="font-display text-sm tracking-wider text-primary-foreground">
                APRI IL CONFIGURATORE MAKRIS
              </span>
              <p className="mt-2 text-sm leading-relaxed text-primary-foreground/80">
                Componi la pizza, aggiungila al carrello e invia l'ordine diretto dal sito.
              </p>
            </Link>

            {siteData.deliveryPlatforms.map((platform) => (
              <a
                key={platform.url}
                href={platform.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block rounded-xl bg-card px-4 py-4 transition hover:border-primary/50 hover:bg-card/80"
              >
                <span className="font-display text-sm tracking-wider text-primary">
                  ORDINA SU {platform.label.toUpperCase()}
                </span>
                <p className="mt-2 text-sm leading-relaxed text-foreground/70">{platform.note}</p>
              </a>
            ))}

            <a
              href={siteData.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-xl border border-border px-4 py-4 transition hover:border-primary/50 hover:bg-card/50"
            >
              <MessageCircleMore size={18} className="text-primary" />
              <span className="text-sm text-foreground/80">
                WhatsApp resta utile per richieste rapide e per chi preferisce il contatto diretto.
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
