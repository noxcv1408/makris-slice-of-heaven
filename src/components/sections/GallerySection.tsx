import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { siteData } from "@/data/siteData";

export default function GallerySection() {
  const [lightbox, setLightbox] = useState<number | null>(null);

  useEffect(() => {
    if (lightbox === null) {
      document.body.style.overflow = "";
      return;
    }

    document.body.style.overflow = "hidden";

    const handleKeydown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setLightbox(null);
      }

      if (event.key === "ArrowRight") {
        setLightbox((current) =>
          current === null ? current : (current + 1) % siteData.galleryImages.length,
        );
      }

      if (event.key === "ArrowLeft") {
        setLightbox((current) =>
          current === null
            ? current
            : (current - 1 + siteData.galleryImages.length) % siteData.galleryImages.length,
        );
      }
    };

    window.addEventListener("keydown", handleKeydown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeydown);
    };
  }, [lightbox]);

  const showPrevious = () => {
    setLightbox((current) =>
      current === null ? current : (current - 1 + siteData.galleryImages.length) % siteData.galleryImages.length,
    );
  };

  const showNext = () => {
    setLightbox((current) =>
      current === null ? current : (current + 1) % siteData.galleryImages.length,
    );
  };

  return (
    <section id="galleria" className="bg-secondary py-20">
      <div className="container mx-auto px-4">
        <p className="text-center text-sm font-display tracking-[0.3em] text-primary">Galleria</p>
        <h2 className="mt-2 text-center font-display text-3xl tracking-wider text-foreground md:text-4xl">
          UNO SGUARDO AL LOCALE
        </h2>
        <p className="mx-auto mt-4 max-w-3xl text-center text-sm leading-relaxed text-foreground/75">
          Pizza, dettagli, atmosfera e momenti del locale. La galleria racconta il lato piu vero di
          Makris, dal prodotto al servizio.
        </p>

        <div className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-4">
          {siteData.galleryImages.map((image, index) => (
            <button
              key={image.src}
              type="button"
              className={`group relative overflow-hidden rounded-2xl text-left ${
                image.wide ? "col-span-2" : ""
              }`}
              onClick={() => setLightbox(index)}
              aria-label={`Apri immagine ${index + 1}`}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
                decoding="async"
                sizes={image.wide ? "(min-width: 768px) 50vw, 100vw" : "(min-width: 768px) 25vw, 50vw"}
              />
              <div className="absolute inset-0 flex items-end bg-gradient-to-t from-black/60 via-transparent to-transparent p-4 opacity-100 transition-opacity md:opacity-0 md:group-hover:opacity-100">
                <span className="text-xs font-display tracking-[0.2em] text-white">VISUALIZZA</span>
              </div>
            </button>
          ))}
        </div>
      </div>

      {lightbox !== null ? (
        <div
          className="fixed inset-0 z-50 bg-black/90 p-4"
          role="dialog"
          aria-modal="true"
          aria-label="Galleria immagini"
        >
          <button
            type="button"
            aria-label="Chiudi galleria"
            className="absolute right-4 top-4 text-white"
            onClick={() => setLightbox(null)}
          >
            <X size={32} />
          </button>

          <div className="flex h-full items-center justify-center gap-3">
            <button
              type="button"
              aria-label="Immagine precedente"
              className="rounded-full border border-white/20 bg-white/10 p-3 text-white transition hover:bg-white/20"
              onClick={showPrevious}
            >
              <ChevronLeft size={24} />
            </button>

            <img
              src={siteData.galleryImages[lightbox].src}
              alt={siteData.galleryImages[lightbox].alt}
              className="max-h-[88vh] max-w-[80vw] rounded-2xl object-contain"
            />

            <button
              type="button"
              aria-label="Immagine successiva"
              className="rounded-full border border-white/20 bg-white/10 p-3 text-white transition hover:bg-white/20"
              onClick={showNext}
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>
      ) : null}
    </section>
  );
}
