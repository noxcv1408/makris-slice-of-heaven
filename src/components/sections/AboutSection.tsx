import { Clock, MapPin, Truck, Wifi } from 'lucide-react';

export const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="font-body text-primary uppercase tracking-widest text-sm font-bold">
            Chi Siamo
          </span>
          <h2 className="font-display text-5xl md:text-6xl text-foreground mt-2 mb-4 tracking-wide">
            LA NOSTRA STORIA
          </h2>
          <div className="w-32 h-1 bg-primary mx-auto" />
        </div>

        {/* Content */}
        <div className="max-w-4xl mx-auto text-center mb-16">
          <p className="font-script text-3xl md:text-4xl text-primary mb-6">
            Authentic Italian Pizza
          </p>
          <p className="font-body text-lg text-muted-foreground leading-relaxed mb-6">
            Dal <strong className="text-foreground">2020</strong>, <strong className="text-foreground">Makris Pizza & Love</strong> porta 
            la vera pizza napoletana a Lago Patria. Il nostro stile retrò americano si fonde con 
            l'autentica tradizione culinaria italiana per creare un'esperienza unica.
          </p>
          <p className="font-body text-lg text-muted-foreground leading-relaxed">
            Ogni pizza è preparata con ingredienti freschi e di qualità, cotta nel nostro forno 
            a legna secondo la tradizione napoletana. Vieni a trovarci per gustare la vera 
            <strong className="text-foreground"> pizza napoletana</strong> in un ambiente accogliente e familiare.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
          <div className="bg-card border-2 border-foreground/10 p-6 text-center hover:border-primary transition-colors">
            <div className="w-16 h-16 bg-primary/10 mx-auto mb-4 flex items-center justify-center">
              <MapPin className="w-8 h-8 text-primary" />
            </div>
            <h3 className="font-display text-xl tracking-wide mb-2">POSIZIONE</h3>
            <p className="font-body text-sm text-muted-foreground">
              Via Lago Patria, 140<br />
              Giugliano in Campania (NA)
            </p>
          </div>

          <div className="bg-card border-2 border-foreground/10 p-6 text-center hover:border-primary transition-colors">
            <div className="w-16 h-16 bg-primary/10 mx-auto mb-4 flex items-center justify-center">
              <Clock className="w-8 h-8 text-primary" />
            </div>
            <h3 className="font-display text-xl tracking-wide mb-2">ORARI</h3>
            <p className="font-body text-sm text-muted-foreground">
              Mar-Sab: 17:30-23:00<br />
              Dom: 18:00-23:00<br />
              Lunedì: Chiuso
            </p>
          </div>

          <div className="bg-card border-2 border-foreground/10 p-6 text-center hover:border-primary transition-colors">
            <div className="w-16 h-16 bg-primary/10 mx-auto mb-4 flex items-center justify-center">
              <Truck className="w-8 h-8 text-primary" />
            </div>
            <h3 className="font-display text-xl tracking-wide mb-2">CONSEGNA</h3>
            <p className="font-body text-sm text-muted-foreground">
              Lago Patria: €1.00<br />
              Varcaturo: €1.50<br />
              Licola: €2.00
            </p>
          </div>

          <div className="bg-card border-2 border-foreground/10 p-6 text-center hover:border-primary transition-colors">
            <div className="w-16 h-16 bg-primary/10 mx-auto mb-4 flex items-center justify-center">
              <Wifi className="w-8 h-8 text-primary" />
            </div>
            <h3 className="font-display text-xl tracking-wide mb-2">SERVIZI</h3>
            <p className="font-body text-sm text-muted-foreground">
              Wi-Fi Gratuito<br />
              Menu Bambini<br />
              Asporto
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
