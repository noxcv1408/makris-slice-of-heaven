import { Award, Clock, Heart, Users } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

const stats = [
  { icon: Users, value: 10000, suffix: '+', label: 'Clienti Felici' },
  { icon: Award, value: 15, suffix: '+', label: 'Anni di Esperienza' },
  { icon: Heart, value: 50, suffix: '+', label: 'Pizze nel Menu' },
  { icon: Clock, value: 30, suffix: 'min', label: 'Tempo Medio' },
];

const AnimatedCounter = ({ target, suffix }: { target: number; suffix: string }) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          let start = 0;
          const duration = 2000;
          const increment = target / (duration / 16);

          const timer = setInterval(() => {
            start += increment;
            if (start >= target) {
              setCount(target);
              clearInterval(timer);
            } else {
              setCount(Math.floor(start));
            }
          }, 16);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target]);

  return (
    <div ref={ref} className="font-display text-4xl md:text-5xl font-bold text-primary">
      {count.toLocaleString()}{suffix}
    </div>
  );
};

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 bg-secondary">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="font-body text-primary uppercase tracking-wider text-sm font-semibold">
            Chi Siamo
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mt-2 mb-4">
            La Nostra Storia
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full" />
        </div>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          {/* Image */}
          <div className="relative">
            <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1579751626657-72bc17010498?w=800&h=600&fit=crop"
                alt="Pizzeria interior"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Floating card */}
            <div className="absolute -bottom-6 -right-6 bg-card p-6 rounded-xl shadow-xl hidden md:block">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <span className="text-2xl">🍕</span>
                </div>
                <div>
                  <p className="font-display font-bold text-foreground">€10-20</p>
                  <p className="font-body text-sm text-muted-foreground">Prezzo medio</p>
                </div>
              </div>
            </div>
          </div>

          {/* Text Content */}
          <div className="lg:pl-8">
            <h3 className="font-display text-3xl font-bold text-foreground mb-6">
              Passione per la Pizza dal Cuore di Napoli
            </h3>
            <p className="font-body text-muted-foreground leading-relaxed mb-6">
              Benvenuti da <strong className="text-foreground">Makris Pizza&Love</strong>, dove ogni pizza racconta una storia 
              d'amore per la tradizione napoletana. La nostra pizzeria a Lago Patria è il luogo 
              dove qualità degli ingredienti e passione si incontrano per creare esperienze 
              gastronomiche indimenticabili.
            </p>
            <p className="font-body text-muted-foreground leading-relaxed mb-8">
              Con i nostri <strong className="text-foreground">tavoli sulla terrazza</strong>, potrete gustare le nostre 
              pizze mentre ammirate il tramonto. Offriamo anche un menu dedicato ai più piccoli 
              e Wi-Fi gratuito per rendere la vostra esperienza ancora più piacevole.
            </p>
            
            {/* Features list */}
            <div className="grid grid-cols-2 gap-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center">
                  <span className="text-lg">🌅</span>
                </div>
                <span className="font-body text-foreground">Rooftop Seating</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center">
                  <span className="text-lg">📶</span>
                </div>
                <span className="font-body text-foreground">Wi-Fi Gratuito</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center">
                  <span className="text-lg">👶</span>
                </div>
                <span className="font-body text-foreground">Menu Bambini</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center">
                  <span className="text-lg">🚗</span>
                </div>
                <span className="font-body text-foreground">Delivery</span>
              </div>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center p-6 bg-card rounded-2xl shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <stat.icon className="w-7 h-7 text-primary" />
              </div>
              <AnimatedCounter target={stat.value} suffix={stat.suffix} />
              <p className="font-body text-muted-foreground mt-2">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
