import { useState } from 'react';
import { Button } from '@/components/ui/button';

const categories = [
  { id: 'classiche', label: 'Le Classiche', emoji: '🍕' },
  { id: 'gourmet', label: 'Le Gourmet', emoji: '👨‍🍳' },
  { id: 'speciali', label: 'Le Speciali', emoji: '⭐' },
  { id: 'fritti', label: 'Frittura', emoji: '🍟' },
  { id: 'dolci', label: 'Dolci', emoji: '🍰' },
];

// Real menu items from Makris menu
const menuItems = {
  classiche: [
    { name: 'Margherita', description: 'Pomodoro, olio, fior di latte e basilico', price: '€4.50', priceMetro: '€9.50' },
    { name: 'Marinara', description: 'Pomodoro, olio, origano, aglio, basilico', price: '€4.00', priceMetro: '€8.50' },
    { name: 'Cosacca', description: 'Olio, pomodoro, basilico e scaglie di parmigiano', price: '€4.00', priceMetro: '€9.00' },
    { name: 'Napoletana', description: 'Pomodoro, olio, mozzarella di bufala, basilico e scaglie di parmigiano', price: '€7.00', priceMetro: '€15.00' },
    { name: 'Diavola', description: 'Pomodoro, fior di latte, salame piccante', price: '€6.50', priceMetro: '€14.00' },
    { name: 'Caprese', description: 'Focaccia con mozzarella a crudo, pomodorini ciliegini, basilico', price: '€7.00', priceMetro: '€15.00' },
    { name: 'Bufalina', description: 'Pomodorini ciliegini, mozzarella di bufala, olio, basilico', price: '€7.00', priceMetro: '€15.00' },
    { name: 'Capricciosa', description: 'Pomodoro, olio, funghi, prosciutto, salame, olive, carciofi, fior di latte, basilico', price: '€7.00', priceMetro: '€15.00' },
    { name: '4 Stagioni', description: 'Pomodoro, fior di latte, salame, prosciutto cotto, funghi', price: '€6.50', priceMetro: '€14.00' },
    { name: '4 Formaggi', description: 'Mozzarella, crema ai 4 formaggi, basilico, olio', price: '€6.50', priceMetro: '€14.00' },
    { name: 'Ripieno', description: 'Pomodoro, ricotta, salame, fior di latte, basilico', price: '€7.00', priceMetro: '€14.00' },
    { name: 'Mezza Luna', description: 'Metà ripieno metà margherita', price: '€6.50', priceMetro: '€14.00' },
  ],
  gourmet: [
    { name: 'Parigina', description: 'Impasto a doppio strato con prosciutto cotto, sottiletta, panna, salame, provola, pomodoro, formaggio', price: '€8.50', priceMetro: '€17.00' },
    { name: 'Pesto', description: 'Pesto, pomodorini ciliegini, provola, ricotta, salsiccia e scaglie di parmigiano', price: '€8.00', priceMetro: '€16.00' },
    { name: 'Grease', description: 'Crema di pistacchio, provola di Agerola, mortadella, ricotta, granella di pistacchio', price: '€8.50', priceMetro: '€17.00' },
    { name: 'Nocina', description: 'Vellutata di noci, funghi porcini, salsiccia e provola', price: '€8.00', priceMetro: '€17.00' },
    { name: 'Family', description: 'Crema 4 formaggi, provola, crudo, radicchio', price: '€8.00', priceMetro: '€17.00' },
    { name: 'Bombetta', description: 'Cornetto ripieno di ricotta e cotto, al centro margherita', price: '€7.00' },
  ],
  speciali: [
    { name: 'Cheese Steak', description: 'Cheese steak, fior di latte, sottilette e patatine, mozzarella, slices and chips', price: '€7.50', priceMetro: '€16.00' },
    { name: 'Crocchè', description: 'Crocchè di patate, fior di latte, panna e cotto', price: '€7.00', priceMetro: '€15.00' },
    { name: 'Star', description: '5 gusti speciali, a discrezione del pizzaiolo', price: '€8.00' },
    { name: 'Sun', description: 'Punte ripiene di salame e ricotta, al centro pomodoro, bufala, pomodorini, basilico, formaggio', price: '€8.00' },
    { name: 'Bandidos', description: 'Straccetti di pollo impanati, provola, e patatine fritte', price: '€7.00', priceMetro: '€15.00' },
    { name: 'Ripieno Fritto', description: 'Cicoli, ricotta, provola e pepe', price: '€7.00' },
    { name: 'Makris Love', description: 'Crema di zucchine, guanciale, fonduta di formaggio, grana, basilico e fior di latte', price: '€8.00', priceMetro: '€17.00' },
    { name: 'Twist', description: 'Parmigiana di melanzane, polpettine, fonduta di formaggio e provola', price: '€8.50', priceMetro: '€17.00' },
    { name: 'Porcao', description: 'Porchetta, provola, patate al forno', price: '€8.00', priceMetro: '€17.00' },
    { name: 'Kebab', description: 'Fior di latte, kebab, patate', price: '€6.50', priceMetro: '€14.00' },
  ],
  fritti: [
    { name: 'Frittatina', description: 'Pasta fritta con ripieno cremoso', price: '€2.00' },
    { name: 'Arancini x5', description: 'Arancini di riso classici', price: '€3.50' },
    { name: 'Crocchè x5', description: 'Crocchette di patate napoletane', price: '€5.00' },
    { name: 'Bandidos x5', description: 'Straccetti di pollo impanati', price: '€5.00' },
    { name: 'Chele di Granchio x5', description: 'Crab Claws fritte', price: '€4.50' },
    { name: 'Chicken Wings x5', description: 'Ali di pollo croccanti', price: '€4.50' },
    { name: 'Chicken Double Stick x4', description: 'Bastoncini di pollo doppi', price: '€5.00' },
    { name: 'Jalapenos Messicano x4', description: 'Jalapenos ripieni e fritti', price: '€5.00' },
    { name: 'Patatine Media', description: 'Medium portion of chips', price: '€3.00' },
    { name: 'Patatine Grande', description: 'Large portion of chips', price: '€5.00' },
    { name: 'Patatine e Wurstel', description: 'Chips and Wurstel', price: '€5.00' },
    { name: 'Patatine, Cheddar, Bacon', description: 'Chips, Cheddar, Bacon', price: '€6.00' },
  ],
  dolci: [
    { name: 'Pizza con Nutella', description: 'Pizza dolce con Nutella', price: '€5.00' },
    { name: 'Pizza Cioccolato Bianco', description: 'Pizza dolce con cioccolato bianco', price: '€5.00' },
    { name: 'Pizza Pistacchio', description: 'Pizza dolce con crema al pistacchio', price: '€5.00' },
    { name: 'Ripieno Nutella', description: 'Stuffed with Nutella', price: '€5.00' },
    { name: 'Ripieno Cioccolato Bianco', description: 'Stuffed with white chocolate', price: '€5.00' },
    { name: 'Straccetti Nutella', description: 'Pizza dough strips with Nutella', price: '€5.00' },
    { name: 'Straccetti Pistacchio', description: 'Pizza dough strips with pistachio', price: '€5.00' },
  ],
};

export const MenuSection = () => {
  const [activeCategory, setActiveCategory] = useState('classiche');

  return (
    <section id="menu" className="py-20 bg-cream relative">
      {/* Checkered Border Top */}
      <div className="absolute top-0 left-0 right-0 h-6 checkered-pattern" />

      <div className="container mx-auto px-4 pt-6">
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="font-body text-primary uppercase tracking-widest text-sm font-bold">
            Il Nostro Menu
          </span>
          <h2 className="font-display text-5xl md:text-6xl text-foreground mt-2 mb-4 tracking-wide">
            SCOPRI I NOSTRI SAPORI
          </h2>
          <div className="w-32 h-1 bg-primary mx-auto" />
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <Button
              key={category.id}
              variant={activeCategory === category.id ? 'default' : 'outline'}
              onClick={() => setActiveCategory(category.id)}
              className={`font-display text-lg tracking-wider gap-2 px-6 py-5 ${
                activeCategory === category.id 
                  ? 'bg-primary text-primary-foreground' 
                  : 'bg-accent text-accent-foreground hover:bg-primary hover:text-primary-foreground'
              }`}
            >
              <span>{category.emoji}</span>
              {category.label.toUpperCase()}
            </Button>
          ))}
        </div>

        {/* Menu Grid */}
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-4">
            {menuItems[activeCategory as keyof typeof menuItems].map((item, index) => (
              <div
                key={item.name}
                className="bg-card p-5 border-2 border-foreground/10 hover:border-primary transition-colors animate-fade-in-up"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <div className="flex justify-between items-start gap-4">
                  <div className="flex-1">
                    <h3 className="font-display text-xl text-foreground tracking-wide">
                      {item.name.toUpperCase()}
                    </h3>
                    <p className="font-body text-sm text-muted-foreground mt-1">
                      {item.description}
                    </p>
                  </div>
                  <div className="text-right flex-shrink-0">
                    <span className="font-display text-xl text-primary">
                      {item.price}
                    </span>
                    {item.priceMetro && (
                      <span className="block font-body text-sm text-muted-foreground">
                        1/2 Metro: {item.priceMetro}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Extras Info */}
        <div className="max-w-3xl mx-auto mt-12 text-center">
          <div className="bg-accent text-accent-foreground p-6">
            <h3 className="font-display text-xl tracking-wider mb-4">AGGIUNTE</h3>
            <div className="font-body text-sm space-y-1">
              <p>Aggiunta Carne - Added Meat: €1.00</p>
              <p>Aggiunta Contorno - Added Outline: €0.50</p>
              <p>Aggiunta Formaggi - Addition of Cheeses: €0.50</p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <a
            href="https://www.justeat.it/restaurants-makris-pizza-and-love-lago-patria/menu"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button 
              size="lg" 
              className="font-display text-xl tracking-wider px-10 py-6 bg-primary text-primary-foreground hover:bg-primary/90 retro-shadow"
            >
              VEDI MENU COMPLETO SU JUST EAT
            </Button>
          </a>
        </div>
      </div>

      {/* Checkered Border Bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-6 checkered-pattern" />
    </section>
  );
};
