import { Clock, MapPin, Phone, Mail, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

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
    <section id="contact" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="font-body text-primary uppercase tracking-wider text-sm font-semibold">
            Contatti
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mt-2 mb-4">
            Vieni a Trovarci
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full" />
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-6">
            {/* Address Card */}
            <Card className="hover-lift">
              <CardContent className="p-6 flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-display text-lg font-semibold text-foreground mb-1">Indirizzo</h3>
                  <p className="font-body text-muted-foreground">
                    Via Lago Patria, 140<br />
                    80014 Lago Patria NA, Italia
                  </p>
                  <a
                    href="https://maps.google.com/?q=Via+Lago+Patria+140+80014+Lago+Patria+NA+Italy"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-primary font-body text-sm mt-2 hover:underline"
                  >
                    Apri in Google Maps <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </CardContent>
            </Card>

            {/* Phone Card */}
            <Card className="hover-lift">
              <CardContent className="p-6 flex items-start gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-display text-lg font-semibold text-foreground mb-1">Telefono</h3>
                  <a href="tel:+390815559226" className="font-body text-muted-foreground hover:text-primary transition-colors">
                    +39 081 555 9226
                  </a>
                </div>
              </CardContent>
            </Card>

            {/* Schedule Card */}
            <Card className="hover-lift">
              <CardContent className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-display text-lg font-semibold text-foreground">Orari di Apertura</h3>
                </div>
                <div className="space-y-2">
                  {schedule.map((item) => (
                    <div key={item.day} className="flex justify-between items-center py-2 border-b border-border last:border-0">
                      <span className="font-body text-foreground">{item.day}</span>
                      <span className={`font-body ${item.closed ? 'text-destructive' : 'text-muted-foreground'}`}>
                        {item.hours}
                      </span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="tel:+390815559226" className="flex-1">
                <Button className="w-full gap-2 font-body" size="lg">
                  <Phone className="w-5 h-5" />
                  Chiama Ora
                </Button>
              </a>
              <a
                href="https://wa.me/390815559226?text=Ciao!%20Vorrei%20prenotare%20un%20tavolo%20da%20Makris%20Pizza%26Love"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1"
              >
                <Button variant="outline" className="w-full gap-2 font-body" size="lg">
                  <Mail className="w-5 h-5" />
                  Prenota via WhatsApp
                </Button>
              </a>
            </div>
          </div>

          {/* Map */}
          <div className="relative">
            <div className="aspect-square lg:aspect-auto lg:h-full min-h-[400px] rounded-2xl overflow-hidden shadow-xl">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3018.1234567890123!2d14.0462!3d40.9197!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x133b08c8e0000001%3A0x1234567890abcdef!2sVia%20Lago%20Patria%2C%20140%2C%2080014%20Lago%20Patria%20NA%2C%20Italy!5e0!3m2!1sen!2sit!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Makris Pizza&Love Location"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
