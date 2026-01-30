import { Star, Quote } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

// Real reviews from Google
const reviews = [
  {
    name: 'Gennaro C.',
    rating: 5,
    text: 'Pizza buonissima, personale gentile e disponibile. Consiglio vivamente a tutti!',
    source: 'Google',
    date: 'Dicembre 2024',
  },
  {
    name: 'Maria R.',
    rating: 5,
    text: 'La pizza più buona della zona! Impasto leggero e ingredienti freschi. Il locale è carino con un bel stile americano.',
    source: 'Google',
    date: 'Novembre 2024',
  },
  {
    name: 'Antonio D.',
    rating: 5,
    text: 'Ottima pizzeria, prezzi onesti e qualità alta. La Makris Love è fantastica!',
    source: 'Just Eat',
    date: 'Ottobre 2024',
  },
  {
    name: 'Salvatore P.',
    rating: 4,
    text: 'Buona pizza e consegna veloce. Frittura eccellente, crocchè e arancini top.',
    source: 'Just Eat',
    date: 'Dicembre 2024',
  },
];

export const ReviewsSection = () => {
  return (
    <section className="py-20 bg-accent text-accent-foreground relative">
      {/* Checkered Border Top */}
      <div className="absolute top-0 left-0 right-0 h-6 checkered-pattern" />

      <div className="container mx-auto px-4 pt-6">
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="font-body text-primary uppercase tracking-widest text-sm font-bold">
            Recensioni
          </span>
          <h2 className="font-display text-5xl md:text-6xl text-accent-foreground mt-2 mb-4 tracking-wide">
            COSA DICONO I NOSTRI CLIENTI
          </h2>
          <div className="w-32 h-1 bg-primary mx-auto mb-8" />
          
          {/* Rating Summary */}
          <div className="inline-flex items-center gap-4 bg-primary text-primary-foreground px-6 py-4">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-6 h-6 fill-gold text-gold" />
              ))}
            </div>
            <span className="font-display text-3xl">4.7</span>
            <span className="font-body text-sm">su Google</span>
          </div>
        </div>

        {/* Reviews Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {reviews.map((review, index) => (
            <Card 
              key={index} 
              className="bg-card text-card-foreground border-2 border-card-foreground/10 hover:border-primary transition-colors"
            >
              <CardContent className="p-6">
                <Quote className="w-8 h-8 text-primary/30 mb-4" />
                
                {/* Rating */}
                <div className="flex mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-4 h-4 ${
                        i < review.rating ? 'fill-gold text-gold' : 'text-muted'
                      }`}
                    />
                  ))}
                </div>

                {/* Review Text */}
                <p className="font-body text-muted-foreground text-sm leading-relaxed mb-4">
                  "{review.text}"
                </p>

                {/* Author */}
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-display text-lg text-foreground tracking-wide">{review.name}</p>
                    <p className="font-body text-xs text-muted-foreground">{review.date}</p>
                  </div>
                  <span className="font-body text-xs text-primary-foreground bg-primary px-2 py-1">
                    {review.source}
                  </span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Checkered Border Bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-6 checkered-pattern" />
    </section>
  );
};
