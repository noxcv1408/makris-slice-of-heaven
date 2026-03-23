import { ChevronDown, Clock3, MapPin, Phone, Star, Truck } from "lucide-react";
import { Link } from "react-router-dom";
import logo from "@/assets/makris-logo.jpg";
import { siteData } from "@/data/siteData";

export default function HeroSection() {
  return (
    <section id="home" className="checkerboard-bg relative overflow-hidden">
      <div className="absolute inset-0 bg-background/82" />

      <div className="container relative z-10 mx-auto min-h-screen px-4 pb-12 pt-32 lg:flex lg:items-center lg:gap-12">
        <div className="mx-auto max-w-2xl text-center lg:mx-0 lg:flex-1 lg:text-left">
          <img
            src={logo}
            alt={siteData.name}
            className="mx-auto mb-6 h-36 w-36 rounded-full border-4 border-foreground object-cover shadow-2xl lg:mx-0 lg:h-40 lg:w-40"
            loading="eager"
            decoding="async"
            fetchPriority="high"
          />

          <p className="text-sm font-display uppercase tracking-[0.3em] text-foreground/80">
            Authentic Italian
          </p>
          <h1 className="mt-2 font-script text-7xl text-foreground md:text-8xl">
            {siteData.shortName}
          </h1>
          <p className="mt-1 font-display text-lg tracking-[0.2em] text-primary">SINCE 2020</p>
          <h2 className="mt-2 font-display text-2xl tracking-[0.25em] text-foreground md:text-3xl">
            PIZZA & LOVE
          </h2>

          <p className="mt-5 max-w-xl text-sm leading-relaxed text-foreground/85 md:text-base lg:mx-0">
            {siteData.tagline}. {siteData.heroDescription}
          </p>

          <div className="mt-6 flex items-center justify-center gap-2 lg:justify-start">
            <div className="flex items-center gap-2 rounded-full bg-card/70 px-5 py-2 backdrop-blur">
              {[...Array(5)].map((_, index) => (
                <Star key={index} size={18} className="fill-primary text-primary" />
              ))}
              <span className="ml-1 text-sm text-foreground">
                {siteData.rating.value} su {siteData.rating.source}
              </span>
            </div>
          </div>

          <div className="mt-4 flex items-center justify-center gap-2 text-sm text-foreground/80 lg:justify-start">
            <MapPin size={16} />
            {siteData.address.street} - {siteData.address.locality} ({siteData.address.region})
          </div>

          <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:justify-center lg:justify-start">
            <Link
              to="/ordina"
              className="bg-primary px-8 py-3 text-center font-display tracking-wider text-primary-foreground transition hover:brightness-110"
            >
              CREA E ORDINA
            </Link>
            <a
              href="#menu"
              className="rounded border-2 border-foreground px-8 py-3 text-center font-display tracking-wider text-foreground transition hover:bg-foreground hover:text-background"
            >
              GUARDA IL MENU
            </a>
          </div>

          <div className="mt-4 flex flex-col items-center gap-2 text-sm text-foreground/80 sm:flex-row sm:justify-center sm:gap-4 lg:justify-start">
            {siteData.phones.map((phone) => (
              <a
                key={phone.href}
                href={phone.href}
                className="flex items-center gap-1 transition hover:text-primary"
              >
                <Phone size={14} />
                {phone.label}
              </a>
            ))}
          </div>
        </div>

        <aside className="mx-auto mt-10 max-w-md rounded-2xl border border-border bg-card/80 p-6 backdrop-blur lg:mt-0 lg:flex-1">
          <p className="text-sm font-display tracking-[0.2em] text-primary">STASERA FAI SEMPLICE</p>
          <h3 className="mt-2 font-display text-2xl tracking-wider text-foreground">
            Tutto quello che serve in un colpo d'occhio
          </h3>

          <div className="mt-6 space-y-4">
            <div className="flex items-start gap-3">
              <Clock3 className="mt-1 text-primary" size={18} />
              <div>
                <p className="font-display text-sm tracking-wider text-foreground">ORARI</p>
                <p className="text-sm text-foreground/75">Mar-Sab 17:30-23:00, Dom 18:00-23:00</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Truck className="mt-1 text-primary" size={18} />
              <div>
                <p className="font-display text-sm tracking-wider text-foreground">ZONE SERVITE</p>
                <p className="text-sm text-foreground/75">
                  {siteData.deliveryZones.slice(0, 3).join(", ")}
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <MapPin className="mt-1 text-primary" size={18} />
              <div>
                <p className="font-display text-sm tracking-wider text-foreground">ATMOSFERA</p>
                <p className="text-sm text-foreground/75">
                  Pizza napoletana, stile riconoscibile e servizio comodo per locale, asporto e delivery.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-6 flex flex-wrap gap-2">
            <span className="rounded-full bg-background/60 px-3 py-1 text-xs tracking-wider text-foreground/80">
              SALA INTERNA
            </span>
            <span className="rounded-full bg-background/60 px-3 py-1 text-xs tracking-wider text-foreground/80">
              ASPORTO
            </span>
            <span className="rounded-full bg-background/60 px-3 py-1 text-xs tracking-wider text-foreground/80">
              DELIVERY
            </span>
            <span className="rounded-full bg-background/60 px-3 py-1 text-xs tracking-wider text-foreground/80">
              ENGLISH-FRIENDLY
            </span>
          </div>
        </aside>
      </div>

      <a
        href="#chi-siamo"
        aria-label="Scorri verso la sezione chi siamo"
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 animate-bounce text-foreground/60"
      >
        <ChevronDown size={28} />
      </a>
    </section>
  );
}
