import { Clock, MapPin, Phone, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';

const schedule = [
  { day: 'Lunedì', hours: 'Chiuso', closed: true },
  { day: 'Martedì', hours: '17:30 – 23:00', closed: false },
  { day: 'Mercoledì', hours: '17:30 – 23:00', closed: false },
  { day: 'Giovedì', hours: '17:30 – 23:00', closed: false },
  { day: 'Venerdì', hours: '17:30 – 23:00', closed: false },
  { day: 'Sabato', hours: '17:30 – 23:00', closed: false },
  { day: 'Domenica', hours: '18:00 – 23:00', closed: false },
];

export const ContactSection = () => {
  return (
    <section id="contact" className="py-20 bg-background relative">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="font-body text-primary uppercase tracking-widest text-sm font-bold">
            Contatti
          </span>
          <h2 className="font-display text-5xl md:text-6xl text-foreground mt-2 mb-4 tracking-wide">
            VIENI A TROVARCI
          </h2>
          <div className="w-32 h-1 bg-primary mx-auto" />
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Info */}
          <div className="space-y-6">
            {/* Address */}
            <div className="bg-card border-2 border-foreground/10 p-6 flex items-start gap-4">
              <div className="w-14 h-14 bg-primary flex items-center justify-center flex-shrink-0">
                <MapPin className="w-7 h-7 text-primary-foreground" />
              </div>
              <div>
                <h3 className="font-display text-xl tracking-wide text-foreground mb-2">INDIRIZZO</h3>
                <p className="font-body text-muted-foreground">
                  Via Lago Patria, 140<br />
                  80014 Lago Patria<br />
                  Giugliano in Campania (NA)
                </p>
                <a
                  href="https://maps.google.com/?q=Via+Lago+Patria+140+80014+Lago+Patria+NA+Italy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-primary font-body text-sm mt-3 hover:underline"
                >
                  Apri in Google Maps <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Phone */}
            <div className="bg-card border-2 border-foreground/10 p-6 flex items-start gap-4">
              <div className="w-14 h-14 bg-primary flex items-center justify-center flex-shrink-0">
                <Phone className="w-7 h-7 text-primary-foreground" />
              </div>
              <div>
                <h3 className="font-display text-xl tracking-wide text-foreground mb-2">TELEFONO</h3>
                <a href="tel:+390815559226" className="font-body text-lg text-muted-foreground hover:text-primary transition-colors block">
                  081 5559226
                </a>
                <a href="tel:+393533554533" className="font-body text-lg text-muted-foreground hover:text-primary transition-colors block">
                  353 3554533
                </a>
              </div>
            </div>

            {/* Schedule */}
            <div className="bg-card border-2 border-foreground/10 p-6">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-14 h-14 bg-primary flex items-center justify-center flex-shrink-0">
                  <Clock className="w-7 h-7 text-primary-foreground" />
                </div>
                <h3 className="font-display text-xl tracking-wide text-foreground">ORARI DI APERTURA</h3>
              </div>
              <div className="space-y-2 ml-[4.5rem]">
                {schedule.map((item) => (
                  <div key={item.day} className="flex justify-between items-center py-2 border-b border-border last:border-0">
                    <span className="font-body text-foreground">{item.day}</span>
                    <span className={`font-body font-bold ${item.closed ? 'text-primary' : 'text-muted-foreground'}`}>
                      {item.hours}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="tel:+390815559226" className="flex-1">
                <Button className="w-full gap-2 font-display tracking-wider text-lg py-6 bg-primary text-primary-foreground">
                  <Phone className="w-5 h-5" />
                  CHIAMA ORA
                </Button>
              </a>
              <a
                href="https://wa.me/393533554533?text=Ciao!%20Vorrei%20ordinare%20da%20Makris%20Pizza%26Love"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1"
              >
                <Button variant="outline" className="w-full gap-2 font-display tracking-wider text-lg py-6 border-2 border-foreground">
                  WHATSAPP
                </Button>
              </a>
            </div>
          </div>

          {/* Map */}
          <div className="relative">
            <div className="aspect-square lg:aspect-auto lg:h-full min-h-[400px] border-4 border-foreground/10 overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3018.1234567890123!2d14.0462!3d40.9197!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x133b08c8e0000001%3A0x1234567890abcdef!2sVia%20Lago%20Patria%2C%20140%2C%2080014%20Lago%20Patria%20NA%2C%20Italy!5e0!3m2!1sen!2sit!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Makris Pizza & Love Location"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
