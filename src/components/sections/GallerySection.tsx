import { useState } from "react";
import { X } from "lucide-react";
import galleryPizza1 from "@/assets/gallery-pizza-1.jpg";
import galleryPrep from "@/assets/gallery-prep.jpg";
import galleryPizza2 from "@/assets/gallery-pizza-2.jpg";
import galleryPizza3 from "@/assets/gallery-pizza-3.jpg";
import galleryPizza5 from "@/assets/gallery-pizza-5.jpg";

const galleryImages = [
  { src: galleryPizza1, alt: "Pizza Margherita" },
  { src: galleryPrep, alt: "Preparazione Pizza" },
  { src: galleryPizza2, alt: "Pizza Gourmet" },
  { src: galleryPizza3, alt: "Pizza al Pistacchio" },
  { src: galleryPizza3, alt: "Pizza con Mortadella" },
  { src: galleryPizza5, alt: "Pizza Speciale" },
];

export default function GallerySection() {
  const [lightbox, setLightbox] = useState<number | null>(null);

  return (
    <section id="galleria" className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <p className="text-center text-primary font-display tracking-[0.3em] text-sm">Galleria</p>
        <h2 className="text-center font-display text-3xl md:text-4xl text-foreground tracking-wider mt-2">
          I NOSTRI PIATTI
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-10">
          {galleryImages.map((img, i) => (
            <div
              key={i}
              className="relative group cursor-pointer overflow-hidden rounded-lg aspect-square"
              onClick={() => setLightbox(i)}
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <span className="text-white font-display tracking-wider text-sm">VISUALIZZA</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {lightbox !== null && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
          onClick={() => setLightbox(null)}
        >
          <button className="absolute top-4 right-4 text-white" onClick={() => setLightbox(null)}>
            <X size={32} />
          </button>
          <img
            src={galleryImages[lightbox].src}
            alt={galleryImages[lightbox].alt}
            className="max-w-full max-h-[90vh] object-contain rounded-lg"
          />
        </div>
      )}
    </section>
  );
}
