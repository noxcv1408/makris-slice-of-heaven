import { Star, Quote } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const reviews = [
  {
    name: 'Marco R.',
    rating: 5,
    text: 'La migliore pizza di Lago Patria! Il servizio è eccellente e l\'atmosfera è perfetta per una serata in famiglia.',
    source: 'Google',
    date: '2 settimane fa',
  },
  {
    name: 'Anna G.',
    rating: 5,
    text: 'Pizza fritta spettacolare! I tavoli sul rooftop offrono una vista bellissima. Consiglio vivamente!',
    source: 'Facebook',
    date: '1 mese fa',
  },
  {
    name: 'Luigi M.',
    rating: 5,
    text: 'Ingredienti freschi e di qualità. La mozzarella di bufala è autentica. Torneremo sicuramente!',
    source: 'Just Eat',
    date: '3 settimane fa',
  },
  {
    name: 'Francesca B.',
    rating: 4,
    text: 'Ottima pizza e personale gentilissimo. Il menu per bambini è molto apprezzato dai miei figli.',
    source: 'Google',
    date: '1 settimana fa',
  },
];

export const ReviewsSection = () => {
  return (
    <section className="py-24 bg-primary/5">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="font-body text-primary uppercase tracking-wider text-sm font-semibold">
            Recensioni
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mt-2 mb-4">
            Cosa Dicono i Nostri Clienti
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full mb-6" />
          
          {/* Rating Summary */}
          <div className="flex items-center justify-center gap-4">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-6 h-6 fill-gold text-gold" />
              ))}
            </div>
            <span className="font-display text-3xl font-bold text-foreground">4.7</span>
            <span className="font-body text-muted-foreground">su 183 recensioni Google</span>
          </div>
        </div>

        {/* Reviews Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {reviews.map((review, index) => (
            <Card key={index} className="hover-lift bg-card">
              <CardContent className="p-6">
                <Quote className="w-8 h-8 text-primary/20 mb-4" />
                
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
                    <p className="font-display font-semibold text-foreground">{review.name}</p>
                    <p className="font-body text-xs text-muted-foreground">{review.date}</p>
                  </div>
                  <span className="font-body text-xs text-primary bg-primary/10 px-2 py-1 rounded">
                    {review.source}
                  </span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
