import { useState } from 'react';
import { X } from 'lucide-react';
import galleryNew1 from '@/assets/gallery-new-1.jpg';
import galleryPrep from '@/assets/gallery-prep.jpg';
import galleryNew3 from '@/assets/gallery-new-3.jpg';
import galleryNew4 from '@/assets/gallery-new-4.jpg';
import galleryNew5 from '@/assets/gallery-new-5.jpg';
import galleryNew6 from '@/assets/gallery-new-6.jpg';

const galleryImages = [
  { src: galleryNew1, alt: 'Pizza al Pesto' },
  { src: galleryPrep, alt: 'Preparazione Pizza' },
  { src: galleryNew3, alt: 'Pizza con Salsiccia' },
  { src: galleryNew4, alt: 'Pizza Gourmet' },
  { src: galleryNew5, alt: 'Pizza al Pistacchio' },
  { src: galleryNew6, alt: 'Pizza Speciale' },
];

export const GallerySection = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <section id="gallery" className="py-20 bg-secondary relative">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="font-body text-primary uppercase tracking-widest text-sm font-bold">
            Galleria
          </span>
          <h2 className="font-display text-5xl md:text-6xl text-foreground mt-2 mb-4 tracking-wide">
            I NOSTRI PIATTI
          </h2>
          <div className="w-32 h-1 bg-primary mx-auto" />
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-5xl mx-auto">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className="group relative aspect-square overflow-hidden cursor-pointer border-4 border-foreground/10 hover:border-primary transition-colors"
              onClick={() => setSelectedImage(image.src)}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/20 transition-colors duration-300 flex items-center justify-center">
                <span className="text-primary-foreground font-display text-xl tracking-wider opacity-0 group-hover:opacity-100 transition-opacity">
                  VISUALIZZA
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 bg-accent/95 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="absolute top-4 right-4 text-accent-foreground hover:text-primary transition-colors"
            onClick={() => setSelectedImage(null)}
          >
            <X className="w-10 h-10" />
          </button>
          <img
            src={selectedImage.replace('w=600&h=400', 'w=1200&h=800')}
            alt="Gallery image"
            className="max-w-full max-h-[90vh] object-contain border-4 border-accent-foreground"
          />
        </div>
      )}
    </section>
  );
};
