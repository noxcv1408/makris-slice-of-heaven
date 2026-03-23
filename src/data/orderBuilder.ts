export type ServiceMode = "pickup" | "delivery";

export type OrderOption = {
  id: string;
  label: string;
  price: number;
  description?: string;
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
};

export type CartItem = PizzaDraft & {
  id: string;
  unitPrice: number;
  totalPrice: number;
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
  { id: "tonda", label: "Tonda 33 cm", price: 4.5, description: "La base classica della pizza Makris." },
  { id: "mezzo-metro", label: "1/2 Metro", price: 9.5, description: "Perfetta per dividere o per chi vuole di piu." },
  { id: "metro", label: "Metro", price: 18, description: "Pensata per tavolo o famiglia." },
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

export function findOptionLabel(id: string) {
  return optionGroups.flat().find((option) => option.id === id)?.label ?? id;
}

export function calculatePizzaUnitPrice(draft: PizzaDraft) {
  const basePrice = pizzaSizes.find((option) => option.id === draft.sizeId)?.price ?? 0;
  const doughPrice = doughOptions.find((option) => option.id === draft.doughId)?.price ?? 0;
  const saucePrice = sauceOptions.find((option) => option.id === draft.sauceId)?.price ?? 0;
  const cheesePrice = cheeseOptions.find((option) => option.id === draft.cheeseId)?.price ?? 0;
  const toppingsPrice = draft.toppingsIds.reduce((sum, toppingId) => {
    const topping = toppingOptions.find((option) => option.id === toppingId);
    return sum + (topping?.price ?? 0);
  }, 0);

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
  const toppings = draft.toppingsIds.length
    ? draft.toppingsIds.map(findOptionLabel).join(", ")
    : "nessuna aggiunta";

  return `${draft.name} | ${findOptionLabel(draft.sizeId)} | ${findOptionLabel(draft.doughId)} | ${findOptionLabel(draft.sauceId)} | ${findOptionLabel(draft.cheeseId)} | ${toppings}`;
}

export function buildWhatsAppOrderMessage(cart: CartItem[], customer: CustomerDetails) {
  const subtotal = calculateCartSubtotal(cart);
  const deliveryFee = calculateDeliveryFee(customer.serviceMode, customer.zoneId);
  const total = subtotal + deliveryFee;
  const serviceLabel = customer.serviceMode === "delivery" ? "Consegna" : "Ritiro";
  const zoneLabel = deliveryZones.find((zone) => zone.id === customer.zoneId)?.label ?? "N/D";

  const lines = [
    `Ciao Makris, vorrei inviare questo ordine dal configuratore del sito.`,
    ``,
    `Nome: ${customer.name}`,
    `Telefono: ${customer.phone || "non inserito"}`,
    `Modalita: ${serviceLabel}`,
    `Zona: ${zoneLabel}`,
    customer.addressLine ? `Indirizzo / riferimento: ${customer.addressLine}` : null,
    ``,
    `Ordine:`,
    ...cart.flatMap((item, index) => [
      `${index + 1}. ${pizzaSummary(item)}`,
      `   Quantita: ${item.quantity} | Totale pizza: ${formatCurrency(item.totalPrice)}`,
      item.notes ? `   Note: ${item.notes}` : null,
    ]),
    ``,
    `Subtotale: ${formatCurrency(subtotal)}`,
    `Consegna: ${formatCurrency(deliveryFee)}`,
    `Totale: ${formatCurrency(total)}`,
    customer.extraNotes ? `Note finali: ${customer.extraNotes}` : null,
  ].filter(Boolean);

  return lines.join("\n");
}
