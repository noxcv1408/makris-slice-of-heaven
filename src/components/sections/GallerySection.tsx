import { useState } from 'react';
import { X } from 'lucide-react';
import galleryPizza1 from '@/assets/gallery-pizza-1.jpg';

const galleryImages = [
  { src: galleryPizza1, alt: 'Pizza Margherita' },
  { src: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=600&h=400&fit=crop', alt: 'Pizza con prosciutto' },
  { src: 'https://images.unsplash.com/photo-1593560708920-61dd98c46a4e?w=600&h=400&fit=crop', alt: 'Preparazione pizza' },
  { src: 'https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?w=600&h=400&fit=crop', alt: 'Dessert' },
  { src: 'https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?w=600&h=400&fit=crop', alt: 'Pizza Bufalina' },
  { src: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?w=600&h=400&fit=crop', alt: 'Pizza classica' },
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
