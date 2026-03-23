import { Link } from "react-router-dom";
import { siteData } from "@/data/siteData";

export default function Footer() {
  return (
    <footer className="bg-card py-10 text-center">
      <div className="container mx-auto space-y-4 px-4">
        <p className="text-xs font-display tracking-[0.3em] text-primary">MAKRIS PIZZA & LOVE</p>
        <p className="mx-auto max-w-2xl text-sm leading-relaxed text-foreground/70">
          Pizza napoletana, atmosfera riconoscibile e ordini facili tra sala, asporto e delivery.
        </p>
        <p className="text-sm text-foreground/80">
          {siteData.address.street}, {siteData.address.postalCode} {siteData.address.locality},{" "}
          {siteData.address.municipality}
        </p>
        <div className="flex flex-wrap items-center justify-center gap-4 text-sm">
          <Link to="/ordina" className="text-foreground/70 transition hover:text-primary">
            Configuratore
          </Link>
          <a
            href={siteData.socials.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="text-foreground/70 transition hover:text-primary"
          >
            Instagram
          </a>
          <a
            href={siteData.socials.facebook}
            target="_blank"
            rel="noopener noreferrer"
            className="text-foreground/70 transition hover:text-primary"
          >
            Facebook
          </a>
          {siteData.deliveryPlatforms.map((platform) => (
            <a
              key={platform.url}
              href={platform.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground/70 transition hover:text-primary"
            >
              {platform.label}
            </a>
          ))}
        </div>
        <p className="text-sm text-foreground/60">
          Copyright {new Date().getFullYear()} {siteData.name}. Tutti i diritti riservati.
        </p>
      </div>
    </footer>
  );
}
