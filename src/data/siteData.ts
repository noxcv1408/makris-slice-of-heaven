const schemaDayMap = {
  Lunedi: "https://schema.org/Monday",
  Martedi: "https://schema.org/Tuesday",
  Mercoledi: "https://schema.org/Wednesday",
  Giovedi: "https://schema.org/Thursday",
  Venerdi: "https://schema.org/Friday",
  Sabato: "https://schema.org/Saturday",
  Domenica: "https://schema.org/Sunday",
} as const;

type OpeningDay = keyof typeof schemaDayMap;

export type DeliveryPlatform = {
  label: string;
  url: string;
  note: string;
};

export type GalleryImage = {
  src: string;
  alt: string;
  wide?: boolean;
};

export const siteData = {
  siteUrl: "https://makris-pizza-e-love.it",
  name: "Makris Pizza & Love",
  shortName: "Makris",
  tagline: "Pizza napoletana, asporto e consegna a Lago Patria",
  heroDescription:
    "Un locale riconoscibile, una pizza che resta impressa e un modo semplice per ordinare sul posto, da asporto o a domicilio.",
  description:
    "Makris Pizza & Love e una pizzeria a Lago Patria con pizza napoletana, sala, asporto, consegna e ordini online.",
  address: {
    street: "Via Lago Patria, 140",
    postalCode: "80014",
    locality: "Lago Patria",
    municipality: "Giugliano in Campania",
    region: "NA",
    country: "IT",
    mapQuery: "Via Lago Patria 140 80014 Lago Patria NA Italy",
  },
  phones: [
    { label: "081 555 9226", href: "tel:+390815559226" },
    { label: "353 355 4533", href: "tel:+393533554533" },
  ],
  whatsappNumber: "393533554533",
  whatsapp:
    "https://wa.me/393533554533?text=Ciao!%20Vorrei%20ordinare%20da%20Makris%20Pizza%20%26%20Love",
  deliveryPlatforms: [
    {
      label: "Just Eat",
      url: "https://www.justeat.it/restaurants-makris-pizza-and-love-lago-patria/menu",
      note: "Perfetto per vedere il menu completo e ordinare in pochi click.",
    },
    {
      label: "Glovo",
      url: "https://glovoapp.com/it/it/napoli/stores/makris-pizzaandlove-nap",
      note: "Comodo per la consegna rapida nelle zone servite intorno a Lago Patria.",
    },
  ] as DeliveryPlatform[],
  socials: {
    instagram: "https://www.instagram.com/makrispizza",
    facebook: "https://www.facebook.com/MakrisPizzaLove",
  },
  rating: {
    value: "4.7",
    source: "Google",
  },
  openingHours: [
    { day: "Lunedi", time: "Chiuso", closed: true },
    { day: "Martedi", time: "17:30 - 23:00" },
    { day: "Mercoledi", time: "17:30 - 23:00" },
    { day: "Giovedi", time: "17:30 - 23:00" },
    { day: "Venerdi", time: "17:30 - 23:00" },
    { day: "Sabato", time: "17:30 - 23:00" },
    { day: "Domenica", time: "18:00 - 23:00" },
  ] as { day: OpeningDay; time: string; closed?: boolean }[],
  deliveryZones: [
    "Lago Patria",
    "Varcaturo",
    "Licola",
    "Giugliano in Campania",
  ],
  deliveryFees: [
    "Lago Patria: EUR 1.00",
    "Varcaturo: EUR 1.50",
    "Licola: EUR 2.00",
  ],
  serviceModes: [
    {
      title: "Sala",
      description: "Per chi vuole vivere l'atmosfera del locale e mangiare con calma.",
    },
    {
      title: "Asporto",
      description: "Per chi vuole passare, ritirare e portare tutto a casa senza perdere tempo.",
    },
    {
      title: "Delivery",
      description: "Per chi preferisce ordinare online o al telefono e ricevere direttamente a domicilio.",
    },
  ],
  signatureItems: [
    {
      title: "Makris Love",
      description: "Impasto nero, burrata, prosciutto crudo e rucola.",
    },
    {
      title: "Pistacchio",
      description: "Crema di pistacchio, mortadella, stracciatella e granella.",
    },
    {
      title: "Fritti da condividere",
      description: "Crocchette, arancini e fritti pensati per accompagnare la pizza.",
    },
  ],
  faqItems: [
    {
      question: "Dove si trova Makris e dove consegna?",
      answer:
        "Makris si trova a Lago Patria, in Via Lago Patria 140, e lavora soprattutto su Lago Patria, Varcaturo, Licola e zone vicine.",
    },
    {
      question: "Posso ordinare online?",
      answer:
        "Si. Puoi usare il configuratore del sito per comporre l'ordine e inviarlo su WhatsApp, oppure scegliere Just Eat o Glovo se preferisci una piattaforma esterna.",
    },
    {
      question: "Avete tavoli e fate anche asporto?",
      answer:
        "Si. Puoi scegliere se mangiare in sede, passare per il ritiro oppure ricevere a domicilio tramite le piattaforme disponibili.",
    },
    {
      question: "Accogliete anche clienti internazionali?",
      answer:
        "Si. La zona di Lago Patria ha anche una presenza internazionale e il locale lavora bene anche con chi preferisce una comunicazione semplice e chiara.",
    },
  ],
  galleryImages: [
    { src: "/photos/132120293_104399004904310_6269228750711341084_n.jpg", alt: "Pizza artigianale Makris 01" },
    { src: "/photos/132201681_104847674859443_4877259188360858054_n.jpg", alt: "Pizza artigianale Makris 02" },
    { src: "/photos/132617665_106204018057142_2388222332363755170_n.jpg", alt: "Preparazione Makris 03" },
    { src: "/photos/135356606_109110654433145_3511201621829997163_n.jpg", alt: "Dettaglio pizza Makris 04" },
    { src: "/photos/136468678_109517074392503_2770079572075704240_n.jpg", alt: "Pizza artigianale Makris 05" },
    { src: "/photos/138208979_110504887627055_5048660423434605087_n.jpg", alt: "Dettaglio ingredienti Makris 06" },
    { src: "/photos/138326008_110764627601081_3046599618463003995_n.jpg", alt: "Pizza servita Makris 07" },
    { src: "/photos/142057175_113114250699452_8714055319259230584_n.jpg", alt: "Specialita Makris 08" },
    { src: "/photos/148286335_122729469737930_5492448419644098858_n.jpg", alt: "Atmosfera Makris 09", wide: true },
    { src: "/photos/148517594_122729476404596_4964799263035683506_n.jpg", alt: "Tavolo Makris 10", wide: true },
    { src: "/photos/159136294_140638547947022_3292261316360049711_n.jpg", alt: "Pizza Makris 11" },
    { src: "/photos/162275059_145443474133196_2188075491410357140_n.jpg", alt: "Interno Makris 12" },
  ] as GalleryImage[],
};

export function createStructuredData() {
  const logoUrl = new URL("/makris-logo.jpg", siteData.siteUrl).href;

  const restaurantSchema = {
    "@context": "https://schema.org",
    "@type": "Restaurant",
    name: siteData.name,
    image: logoUrl,
    logo: logoUrl,
    telephone: "+39 081 555 9226",
    url: siteData.siteUrl,
    description: siteData.description,
    servesCuisine: ["Pizza", "Cucina italiana", "Pizza napoletana"],
    priceRange: "EUR",
    menu: siteData.deliveryPlatforms[0].url,
    address: {
      "@type": "PostalAddress",
      streetAddress: siteData.address.street,
      postalCode: siteData.address.postalCode,
      addressLocality: siteData.address.locality,
      addressRegion: siteData.address.region,
      addressCountry: siteData.address.country,
    },
    sameAs: [
      siteData.socials.instagram,
      siteData.socials.facebook,
      ...siteData.deliveryPlatforms.map((platform) => platform.url),
    ],
    areaServed: siteData.deliveryZones,
    openingHoursSpecification: siteData.openingHours
      .filter((entry) => !entry.closed)
      .map((entry) => {
        const [opens, closes] = entry.time.split(" - ");
        return {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: schemaDayMap[entry.day],
          opens,
          closes,
        };
      }),
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: siteData.rating.value,
      bestRating: "5",
    },
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteData.name,
    url: siteData.siteUrl,
    inLanguage: "it-IT",
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: siteData.faqItems.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  return {
    "@context": "https://schema.org",
    "@graph": [restaurantSchema, websiteSchema, faqSchema],
  };
}
