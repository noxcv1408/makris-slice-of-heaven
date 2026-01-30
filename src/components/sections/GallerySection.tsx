import { useState } from 'react';
import { X } from 'lucide-react';

const galleryImages = [
  { src: 'https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=600&h=400&fit=crop', alt: 'Pizza Margherita' },
  { src: 'https://images.unsplash.com/photo-1579751626657-72bc17010498?w=600&h=400&fit=crop', alt: 'Interno ristorante' },
  { src: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=600&h=400&fit=crop', alt: 'Pizza con prosciutto' },
  { src: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=600&h=400&fit=crop', alt: 'Sala ristorante' },
  { src: 'https://images.unsplash.com/photo-1593560708920-61dd98c46a4e?w=600&h=400&fit=crop', alt: 'Preparazione pizza' },
  { src: 'https://images.unsplash.com/photo-1528137871618-79d2761e3fd5?w=600&h=400&fit=crop', alt: 'Forno a legna' },
  { src: 'https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?w=600&h=400&fit=crop', alt: 'Tiramisù' },
  { src: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=600&h=400&fit=crop', alt: 'Atmosfera serale' },
];

export const GallerySection = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <section id="gallery" className="py-24 bg-secondary">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="font-body text-primary uppercase tracking-wider text-sm font-semibold">
            Galleria
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mt-2 mb-4">
            Momenti da Makris
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full" />
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className="group relative aspect-square overflow-hidden rounded-xl cursor-pointer"
              onClick={() => setSelectedImage(image.src)}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-300 flex items-center justify-center">
                <span className="text-white opacity-0 group-hover:opacity-100 transition-opacity font-body">
                  Visualizza
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="absolute top-4 right-4 text-white hover:text-primary transition-colors"
            onClick={() => setSelectedImage(null)}
          >
            <X className="w-8 h-8" />
          </button>
          <img
            src={selectedImage.replace('w=600&h=400', 'w=1200&h=800')}
            alt="Gallery image"
            className="max-w-full max-h-[90vh] object-contain rounded-lg"
          />
        </div>
      )}
    </section>
  );
};
