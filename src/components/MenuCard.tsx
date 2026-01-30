import { Card, CardContent } from '@/components/ui/card';

interface MenuCardProps {
  name: string;
  description: string;
  price: string;
  image?: string;
  isPopular?: boolean;
}

export const MenuCard = ({ name, description, price, image, isPopular }: MenuCardProps) => {
  return (
    <Card className="group overflow-hidden hover-lift bg-card border-border/50">
      <div className="relative h-48 overflow-hidden">
        <img
          src={image || 'https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=400&h=300&fit=crop'}
          alt={name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        {isPopular && (
          <div className="absolute top-3 right-3 bg-primary text-primary-foreground px-3 py-1 rounded-full text-xs font-body font-semibold uppercase tracking-wide">
            Popolare
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>
      <CardContent className="p-5">
        <div className="flex justify-between items-start mb-2">
          <h3 className="font-display text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
            {name}
          </h3>
          <span className="font-body text-lg font-bold text-primary">
            {price}
          </span>
        </div>
        <p className="font-body text-sm text-muted-foreground leading-relaxed">
          {description}
        </p>
      </CardContent>
    </Card>
  );
};
