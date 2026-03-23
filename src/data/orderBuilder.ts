export type ServiceMode = "pickup" | "delivery";
export type ExtraCategory = "fritti" | "bibite" | "dolci";

export type OrderOption = {
  id: string;
  label: string;
  price: number;
  description?: string;
};

export type SplitFlavor = {
  id: string;
  label: string;
  sauceId: string;
  cheeseId: string;
  toppingsIds: string[];
};

export type ExtraOption = {
  id: string;
  label: string;
  price: number;
  category: ExtraCategory;
};

export type PizzaDraft = {
  name: string;
  sizeId: string;
  doughId: string;
  sauceId: string;
  cheeseId: string;
  toppingsIds: string[];
  quantity: number;
  notes: string;
  splitMode: boolean;
  leftFlavorId: string;
  rightFlavorId: string;
};

export type PizzaCartItem = {
  id: string;
  itemType: "pizza";
  draft: PizzaDraft;
  quantity: number;
  unitPrice: number;
  totalPrice: number;
};

export type ExtraCartItem = {
  id: string;
  itemType: "extra";
  optionId: string;
  name: string;
  category: ExtraCategory;
  quantity: number;
  unitPrice: number;
  totalPrice: number;
};

export type CartItem = PizzaCartItem | ExtraCartItem;

export type CheckoutLineItem = {
  name: string;
  summary: string;
  quantity: number;
  unitPrice: number;
  totalPrice: number;
  notes?: string;
};

export type CustomerDetails = {
  name: string;
  phone: string;
  serviceMode: ServiceMode;
  zoneId: string;
  addressLine: string;
  extraNotes: string;
};

export const pizzaSizes: OrderOption[] = [
  {
    id: "tonda",
    label: "Tonda 33 cm",
    price: 4.5,
    description: "La base classica della pizza Makris.",
  },
  {
    id: "mezzo-metro",
    label: "1/2 Metro",
    price: 9.5,
    description: "Perfetta per dividere o per chi vuole di piu.",
  },
  {
    id: "metro",
    label: "Metro",
    price: 18,
    description: "Pensata per tavolo o famiglia.",
  },
];

export const doughOptions: OrderOption[] = [
  { id: "classico", label: "Impasto classico", price: 0 },
  { id: "integrale", label: "Impasto integrale", price: 1 },
  { id: "nero", label: "Impasto nero Makris", price: 1.5 },
];

export const sauceOptions: OrderOption[] = [
  { id: "pomodoro", label: "Pomodoro", price: 0 },
  { id: "bianca", label: "Base bianca", price: 0.5 },
  { id: "pistacchio", label: "Crema di pistacchio", price: 1.5 },
  { id: "tartufo", label: "Crema di tartufo", price: 1.5 },
];

export const cheeseOptions: OrderOption[] = [
  { id: "fior-di-latte", label: "Fior di latte", price: 0 },
  { id: "bufala", label: "Mozzarella di bufala", price: 1.5 },
  { id: "stracciatella", label: "Stracciatella", price: 2 },
  { id: "burrata", label: "Burrata", price: 2.5 },
];

export const toppingOptions: OrderOption[] = [
  { id: "basilico", label: "Basilico", price: 0.2 },
  { id: "pomodorini", label: "Pomodorini", price: 0.8 },
  { id: "rucola", label: "Rucola", price: 0.8 },
  { id: "olive", label: "Olive", price: 0.8 },
  { id: "funghi", label: "Funghi", price: 1 },
  { id: "parmigiano", label: "Scaglie di parmigiano", price: 1 },
  { id: "salame-piccante", label: "Salame piccante", price: 1.5 },
  { id: "prosciutto-cotto", label: "Prosciutto cotto", price: 1.5 },
  { id: "prosciutto-crudo", label: "Prosciutto crudo", price: 2 },
  { id: "mortadella", label: "Mortadella", price: 2 },
  { id: "carciofi", label: "Carciofi", price: 1 },
  { id: "granella-pistacchio", label: "Granella di pistacchio", price: 1 },
];

export const splitFlavorOptions: SplitFlavor[] = [
  {
    id: "margherita",
    label: "Margherita",
    sauceId: "pomodoro",
    cheeseId: "fior-di-latte",
    toppingsIds: ["basilico"],
  },
  {
    id: "diavola",
    label: "Diavola",
    sauceId: "pomodoro",
    cheeseId: "fior-di-latte",
    toppingsIds: ["salame-piccante"],
  },
  {
    id: "pistacchio",
    label: "Pistacchio",
    sauceId: "pistacchio",
    cheeseId: "stracciatella",
    toppingsIds: ["mortadella", "granella-pistacchio"],
  },
  {
    id: "makris-love",
    label: "Makris Love",
    sauceId: "bianca",
    cheeseId: "burrata",
    toppingsIds: ["prosciutto-crudo", "rucola"],
  },
];

export const extraCategoryLabels: Record<ExtraCategory, string> = {
  fritti: "Fritti",
  bibite: "Bibite",
  dolci: "Dolci",
};

export const extraOptions: ExtraOption[] = [
  { id: "crocche", label: "Crocche", price: 2.5, category: "fritti" },
  { id: "frittatina", label: "Frittatina", price: 3.5, category: "fritti" },
  { id: "arancino", label: "Arancino", price: 3, category: "fritti" },
  { id: "patatine", label: "Patatine", price: 3, category: "fritti" },
  { id: "coca-cola", label: "Coca-Cola 33cl", price: 2.5, category: "bibite" },
  { id: "fanta", label: "Fanta 33cl", price: 2.5, category: "bibite" },
  { id: "acqua", label: "Acqua 50cl", price: 1, category: "bibite" },
  { id: "birra-peroni", label: "Peroni 33cl", price: 3, category: "bibite" },
  { id: "tiramisu", label: "Tiramisu", price: 5, category: "dolci" },
  { id: "cheesecake", label: "Cheesecake", price: 5, category: "dolci" },
];

export const deliveryZones = [
  { id: "pickup", label: "Ritiro in sede", fee: 0 },
  { id: "lago-patria", label: "Lago Patria", fee: 1 },
  { id: "varcaturo", label: "Varcaturo", fee: 1.5 },
  { id: "licola", label: "Licola", fee: 2 },
];

export const presetPizzas: PizzaDraft[] = [
  {
    name: "Margherita",
    sizeId: "tonda",
    doughId: "classico",
    sauceId: "pomodoro",
    cheeseId: "fior-di-latte",
    toppingsIds: ["basilico"],
    quantity: 1,
    notes: "",
    splitMode: false,
    leftFlavorId: "margherita",
    rightFlavorId: "diavola",
  },
  {
    name: "Diavola",
    sizeId: "tonda",
    doughId: "classico",
    sauceId: "pomodoro",
    cheeseId: "fior-di-latte",
    toppingsIds: ["salame-piccante"],
    quantity: 1,
    notes: "",
    splitMode: false,
    leftFlavorId: "diavola",
    rightFlavorId: "margherita",
  },
  {
    name: "Pistacchio",
    sizeId: "tonda",
    doughId: "classico",
    sauceId: "pistacchio",
    cheeseId: "stracciatella",
    toppingsIds: ["mortadella", "granella-pistacchio"],
    quantity: 1,
    notes: "",
    splitMode: false,
    leftFlavorId: "pistacchio",
    rightFlavorId: "makris-love",
  },
  {
    name: "Makris Love",
    sizeId: "tonda",
    doughId: "nero",
    sauceId: "bianca",
    cheeseId: "burrata",
    toppingsIds: ["prosciutto-crudo", "rucola"],
    quantity: 1,
    notes: "",
    splitMode: false,
    leftFlavorId: "makris-love",
    rightFlavorId: "pistacchio",
  },
];

export const emptyPizzaDraft = (): PizzaDraft => ({
  name: "La tua pizza",
  sizeId: "tonda",
  doughId: "classico",
  sauceId: "pomodoro",
  cheeseId: "fior-di-latte",
  toppingsIds: ["basilico"],
  quantity: 1,
  notes: "",
  splitMode: false,
  leftFlavorId: "margherita",
  rightFlavorId: "diavola",
});

export const defaultCustomerDetails: CustomerDetails = {
  name: "",
  phone: "",
  serviceMode: "pickup",
  zoneId: "pickup",
  addressLine: "",
  extraNotes: "",
};

const optionGroups = [pizzaSizes, doughOptions, sauceOptions, cheeseOptions, toppingOptions];

const splitFees: Record<string, number> = {
  "mezzo-metro": 0.5,
  metro: 1,
};

export function findOptionLabel(id: string) {
  return optionGroups.flat().find((option) => option.id === id)?.label ?? id;
}

export function findExtraOption(optionId: string) {
  return extraOptions.find((option) => option.id === optionId);
}

export function isSplitSize(sizeId: string) {
  return sizeId === "mezzo-metro" || sizeId === "metro";
}

export function getSplitFlavor(flavorId: string) {
  return splitFlavorOptions.find((flavor) => flavor.id === flavorId) ?? splitFlavorOptions[0];
}

function calculateToppingsPrice(toppingsIds: string[]) {
  return toppingsIds.reduce((sum, toppingId) => {
    const topping = toppingOptions.find((option) => option.id === toppingId);
    return sum + (topping?.price ?? 0);
  }, 0);
}

function calculateFlavorSurcharge(flavorId: string) {
  const flavor = getSplitFlavor(flavorId);
  const saucePrice = sauceOptions.find((option) => option.id === flavor.sauceId)?.price ?? 0;
  const cheesePrice = cheeseOptions.find((option) => option.id === flavor.cheeseId)?.price ?? 0;
  const toppingsPrice = calculateToppingsPrice(flavor.toppingsIds);
  return saucePrice + cheesePrice + toppingsPrice;
}

export function calculatePizzaUnitPrice(draft: PizzaDraft) {
  const basePrice = pizzaSizes.find((option) => option.id === draft.sizeId)?.price ?? 0;
  const doughPrice = doughOptions.find((option) => option.id === draft.doughId)?.price ?? 0;

  if (draft.splitMode && isSplitSize(draft.sizeId)) {
    const leftSurcharge = calculateFlavorSurcharge(draft.leftFlavorId);
    const rightSurcharge = calculateFlavorSurcharge(draft.rightFlavorId);
    const splitFee = splitFees[draft.sizeId] ?? 0;
    return Number((basePrice + doughPrice + Math.max(leftSurcharge, rightSurcharge) + splitFee).toFixed(2));
  }

  const saucePrice = sauceOptions.find((option) => option.id === draft.sauceId)?.price ?? 0;
  const cheesePrice = cheeseOptions.find((option) => option.id === draft.cheeseId)?.price ?? 0;
  const toppingsPrice = calculateToppingsPrice(draft.toppingsIds);
  return Number((basePrice + doughPrice + saucePrice + cheesePrice + toppingsPrice).toFixed(2));
}

export function calculateCartSubtotal(cart: CartItem[]) {
  return Number(cart.reduce((sum, item) => sum + item.totalPrice, 0).toFixed(2));
}

export function calculateDeliveryFee(serviceMode: ServiceMode, zoneId: string) {
  if (serviceMode !== "delivery") {
    return 0;
  }

  return deliveryZones.find((zone) => zone.id === zoneId)?.fee ?? 0;
}

export function formatCurrency(value: number) {
  return new Intl.NumberFormat("it-IT", {
    style: "currency",
    currency: "EUR",
  }).format(value);
}

export function pizzaSummary(draft: PizzaDraft) {
  if (draft.splitMode && isSplitSize(draft.sizeId)) {
    const leftFlavor = getSplitFlavor(draft.leftFlavorId);
    const rightFlavor = getSplitFlavor(draft.rightFlavorId);
    return `${draft.name} | ${findOptionLabel(draft.sizeId)} | ${findOptionLabel(draft.doughId)} | Meta ${leftFlavor.label} + Meta ${rightFlavor.label}`;
  }

  const toppings = draft.toppingsIds.length
    ? draft.toppingsIds.map(findOptionLabel).join(", ")
    : "nessuna aggiunta";

  return `${draft.name} | ${findOptionLabel(draft.sizeId)} | ${findOptionLabel(draft.doughId)} | ${findOptionLabel(draft.sauceId)} | ${findOptionLabel(draft.cheeseId)} | ${toppings}`;
}

export function cartItemTitle(item: CartItem) {
  if (item.itemType === "extra") {
    return item.name;
  }

  return item.draft.name;
}

export function cartItemSummary(item: CartItem) {
  if (item.itemType === "extra") {
    return `${extraCategoryLabels[item.category]} | ${formatCurrency(item.unitPrice)} cad.`;
  }

  return pizzaSummary(item.draft);
}

export function toCheckoutLineItem(item: CartItem): CheckoutLineItem {
  if (item.itemType === "extra") {
    return {
      name: item.name,
      summary: `${extraCategoryLabels[item.category]} | ${formatCurrency(item.unitPrice)} cad.`,
      quantity: item.quantity,
      unitPrice: item.unitPrice,
      totalPrice: item.totalPrice,
    };
  }

  return {
    name: item.draft.name,
    summary: pizzaSummary(item.draft),
    quantity: item.quantity,
    unitPrice: item.unitPrice,
    totalPrice: item.totalPrice,
    notes: item.draft.notes || undefined,
  };
}

export function buildWhatsAppOrderMessage(cart: CartItem[], customer: CustomerDetails) {
  const subtotal = calculateCartSubtotal(cart);
  const deliveryFee = calculateDeliveryFee(customer.serviceMode, customer.zoneId);
  const total = subtotal + deliveryFee;
  const serviceLabel = customer.serviceMode === "delivery" ? "Consegna" : "Ritiro";
  const zoneLabel = deliveryZones.find((zone) => zone.id === customer.zoneId)?.label ?? "N/D";

  const lines = [
    "Ciao Makris, vorrei inviare questo ordine dal configuratore del sito.",
    "",
    `Nome: ${customer.name}`,
    `Telefono: ${customer.phone || "non inserito"}`,
    `Modalita: ${serviceLabel}`,
    `Zona: ${zoneLabel}`,
    customer.addressLine ? `Indirizzo / riferimento: ${customer.addressLine}` : null,
    "",
    "Ordine:",
    ...cart.flatMap((item, index) => {
      if (item.itemType === "extra") {
        return [
          `${index + 1}. ${item.name}`,
          `   Categoria: ${extraCategoryLabels[item.category]} | Quantita: ${item.quantity} | Totale: ${formatCurrency(item.totalPrice)}`,
        ];
      }

      return [
        `${index + 1}. ${pizzaSummary(item.draft)}`,
        `   Quantita: ${item.quantity} | Totale pizza: ${formatCurrency(item.totalPrice)}`,
        item.draft.notes ? `   Note: ${item.draft.notes}` : null,
      ];
    }),
    "",
    `Subtotale: ${formatCurrency(subtotal)}`,
    `Consegna: ${formatCurrency(deliveryFee)}`,
    `Totale: ${formatCurrency(total)}`,
    customer.extraNotes ? `Note finali: ${customer.extraNotes}` : null,
  ].filter(Boolean);

  return lines.join("\n");
}
