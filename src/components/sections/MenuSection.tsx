import { useState } from 'react';
import { MenuCard } from '@/components/MenuCard';
import { Button } from '@/components/ui/button';

const categories = [
  { id: 'pizza', label: 'Pizza', emoji: '🍕' },
  { id: 'antipasti', label: 'Antipasti', emoji: '🥗' },
  { id: 'pasta', label: 'Pasta', emoji: '🍝' },
  { id: 'fritti', label: 'Fritti', emoji: '🍟' },
  { id: 'dolci', label: 'Dolci', emoji: '🍰' },
];

const menuItems = {
  pizza: [
    { name: 'Margherita', description: 'Pomodoro San Marzano, mozzarella di bufala, basilico fresco', price: '€7.00', isPopular: true, image: 'https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=400&h=300&fit=crop' },
    { name: 'Diavola', description: 'Pomodoro, mozzarella, salame piccante, peperoncino', price: '€9.00', isPopular: true, image: 'https://images.unsplash.com/photo-1628840042765-356cda07504e?w=400&h=300&fit=crop' },
    { name: 'Quattro Formaggi', description: 'Mozzarella, gorgonzola, parmigiano, pecorino', price: '€10.00', image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?w=400&h=300&fit=crop' },
    { name: 'Prosciutto e Funghi', description: 'Pomodoro, mozzarella, prosciutto cotto, funghi', price: '€9.50', image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=400&h=300&fit=crop' },
    { name: 'Vegetariana', description: 'Pomodoro, mozzarella, verdure grigliate di stagione', price: '€8.00', isPopular: true, image: 'https://images.unsplash.com/photo-1511689660979-10d2b1aada49?w=400&h=300&fit=crop' },
    { name: 'Capricciosa', description: 'Pomodoro, mozzarella, prosciutto, funghi, carciofi, olive', price: '€10.50', image: 'https://images.unsplash.com/photo-1595854341625-f33ee10dbf94?w=400&h=300&fit=crop' },
    { name: 'Pizza Fritta', description: 'Pizza fritta tradizionale napoletana con ricotta e cicoli', price: '€8.50', isPopular: true, image: 'https://images.unsplash.com/photo-1541745537411-b8046dc6d66c?w=400&h=300&fit=crop' },
    { name: 'Bufalina', description: 'Pomodorini freschi, mozzarella di bufala DOP, basilico', price: '€11.00', image: 'https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?w=400&h=300&fit=crop' },
  ],
  antipasti: [
    { name: 'Saltimbocca', description: 'Involtini di vitello con prosciutto e salvia', price: '€8.00', isPopular: true, image: 'https://images.unsplash.com/photo-1544025162-d76694265947?w=400&h=300&fit=crop' },
    { name: 'Bruschetta Classica', description: 'Pane tostato con pomodori freschi, aglio e basilico', price: '€5.00', image: 'https://images.unsplash.com/photo-1572695157366-5e585ab2b69f?w=400&h=300&fit=crop' },
    { name: 'Tagliere Misto', description: 'Selezione di salumi e formaggi campani', price: '€12.00', image: 'https://images.unsplash.com/photo-1626200419199-391ae4be7a41?w=400&h=300&fit=crop' },
    { name: 'Caprese', description: 'Mozzarella di bufala, pomodori, basilico, olio EVO', price: '€7.00', image: 'https://images.unsplash.com/photo-1608897013039-887f21d8c804?w=400&h=300&fit=crop' },
  ],
  pasta: [
    { name: 'Spaghetti alle Vongole', description: 'Vongole veraci, aglio, prezzemolo, vino bianco', price: '€12.00', isPopular: true, image: 'https://images.unsplash.com/photo-1563379926898-05f4575a45d8?w=400&h=300&fit=crop' },
    { name: 'Penne all\'Arrabbiata', description: 'Pomodoro, aglio, peperoncino, prezzemolo', price: '€8.00', image: 'https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=400&h=300&fit=crop' },
    { name: 'Carbonara', description: 'Guanciale, uovo, pecorino romano, pepe nero', price: '€10.00', image: 'https://images.unsplash.com/photo-1612874742237-6526221588e3?w=400&h=300&fit=crop' },
    { name: 'Lasagna della Casa', description: 'Ragù napoletano, besciamella, parmigiano', price: '€9.00', image: 'https://images.unsplash.com/photo-1574894709920-11b28e7367e3?w=400&h=300&fit=crop' },
  ],
  fritti: [
    { name: 'Patatine Fritte', description: 'Patatine fritte croccanti con sale', price: '€4.00', image: 'https://images.unsplash.com/photo-1573080496219-bb080dd4f877?w=400&h=300&fit=crop' },
    { name: 'Crocchè di Patate', description: 'Crocchette di patate napoletane', price: '€5.00', isPopular: true, image: 'https://images.unsplash.com/photo-1630431341973-02e1b662ec35?w=400&h=300&fit=crop' },
    { name: 'Arancini', description: 'Arancini di riso con ragù e mozzarella', price: '€6.00', image: 'https://images.unsplash.com/photo-1595295333158-4742f28fbd85?w=400&h=300&fit=crop' },
    { name: 'Frittura Mista', description: 'Mix di fritti napoletani', price: '€8.00', image: 'https://images.unsplash.com/photo-1562967914-608f82629710?w=400&h=300&fit=crop' },
  ],
  dolci: [
    { name: 'Tiramisù', description: 'Classico tiramisù fatto in casa', price: '€5.00', isPopular: true, image: 'https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?w=400&h=300&fit=crop' },
    { name: 'Panna Cotta', description: 'Panna cotta con frutti di bosco', price: '€5.00', image: 'https://images.unsplash.com/photo-1488477181946-6428a0291777?w=400&h=300&fit=crop' },
    { name: 'Babà al Rum', description: 'Babà napoletano imbevuto nel rum', price: '€4.50', image: 'https://images.unsplash.com/photo-1587314168485-3236d6710814?w=400&h=300&fit=crop' },
    { name: 'Nutella Pizza', description: 'Pizza dolce con Nutella e fragole', price: '€6.00', image: 'https://images.unsplash.com/photo-1540914124281-342587941389?w=400&h=300&fit=crop' },
  ],
};

export const MenuSection = () => {
  const [activeCategory, setActiveCategory] = useState('pizza');

  return (
    <section id="menu" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="font-body text-primary uppercase tracking-wider text-sm font-semibold">
            Il Nostro Menu
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground mt-2 mb-4">
            Scopri i Nostri Sapori
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full mb-6" />
          <p className="font-body text-muted-foreground max-w-2xl mx-auto">
            Ogni piatto è preparato con ingredienti freschi e di qualità, seguendo le ricette 
            della tradizione napoletana.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <Button
              key={category.id}
              variant={activeCategory === category.id ? 'default' : 'outline'}
              onClick={() => setActiveCategory(category.id)}
              className="font-body gap-2 px-6"
            >
              <span>{category.emoji}</span>
              {category.label}
            </Button>
          ))}
        </div>

        {/* Menu Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {menuItems[activeCategory as keyof typeof menuItems].map((item, index) => (
            <div
              key={item.name}
              className="animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <MenuCard {...item} />
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <a
            href="https://www.justeat.it/restaurants-makris-pizza-and-love-lago-patria/menu"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button size="lg" className="font-body text-lg px-8">
              Vedi Menu Completo su Just Eat
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
};
