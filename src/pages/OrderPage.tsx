import { useEffect, useMemo, useState } from "react";
import {
  ArrowLeft,
  Check,
  Minus,
  Pizza,
  Plus,
  ShoppingBag,
  Sparkles,
  Trash2,
} from "lucide-react";
import { Link } from "react-router-dom";
import Seo from "@/components/Seo";
import { siteData } from "@/data/siteData";
import {
  buildWhatsAppOrderMessage,
  calculateCartSubtotal,
  calculateDeliveryFee,
  calculatePizzaUnitPrice,
  CartItem,
  cartItemSummary,
  cartItemTitle,
  cheeseOptions,
  CustomerDetails,
  defaultCustomerDetails,
  deliveryZones,
  doughOptions,
  emptyPizzaDraft,
  extraCategoryLabels,
  extraOptions,
  ExtraOption,
  formatCurrency,
  isSplitSize,
  PizzaCartItem,
  pizzaSizes,
  PizzaDraft,
  pizzaSummary,
  presetPizzas,
  sauceOptions,
  splitFlavorOptions,
  toCheckoutLineItem,
  toppingOptions,
} from "@/data/orderBuilder";

const CART_STORAGE_KEY = "makris-builder-cart";
const CUSTOMER_STORAGE_KEY = "makris-builder-customer";
const MAX_TOPPINGS = 6;
type FeedbackTone = "success" | "error" | "info";

function loadStoredCart() {
  if (typeof window === "undefined") {
    return [] as CartItem[];
  }

  try {
    const stored = window.localStorage.getItem(CART_STORAGE_KEY);
    if (!stored) {
      return [] as CartItem[];
    }

    const parsed = JSON.parse(stored);
    if (!Array.isArray(parsed)) {
      return [] as CartItem[];
    }

    return parsed.filter((item) => {
      if (!item || typeof item !== "object") {
        return false;
      }

      const current = item as Record<string, unknown>;
      if (current.itemType === "extra") {
        return typeof current.optionId === "string" && typeof current.totalPrice === "number";
      }

      return current.itemType === "pizza" && typeof current.totalPrice === "number";
    }) as CartItem[];
  } catch {
    return [] as CartItem[];
  }
}

function loadStoredCustomer() {
  if (typeof window === "undefined") {
    return defaultCustomerDetails;
  }

  try {
    const stored = window.localStorage.getItem(CUSTOMER_STORAGE_KEY);
    return stored ? ({ ...defaultCustomerDetails, ...JSON.parse(stored) } as CustomerDetails) : defaultCustomerDetails;
  } catch {
    return defaultCustomerDetails;
  }
}

function optionCardClasses(active: boolean) {
  return active
    ? "border-primary bg-primary text-primary-foreground"
    : "border-border bg-card text-foreground hover:border-primary/50";
}

function createCartItem(draft: PizzaDraft): PizzaCartItem {
  const unitPrice = calculatePizzaUnitPrice(draft);
  return {
    id: `${Date.now()}-${Math.random().toString(36).slice(2, 9)}`,
    itemType: "pizza",
    draft,
    quantity: draft.quantity,
    unitPrice,
    totalPrice: Number((unitPrice * draft.quantity).toFixed(2)),
  };
}

function createDraftName(draft: PizzaDraft) {
  if (draft.splitMode && isSplitSize(draft.sizeId)) {
    return "Meta e Meta";
  }

  return "Pizza personalizzata";
}

export default function OrderPage() {
  const [draft, setDraft] = useState<PizzaDraft>(emptyPizzaDraft);
  const [cart, setCart] = useState<CartItem[]>(loadStoredCart);
  const [customer, setCustomer] = useState<CustomerDetails>(loadStoredCustomer);
  const [feedback, setFeedback] = useState("");
  const [feedbackTone, setFeedbackTone] = useState<FeedbackTone>("info");
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    window.localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cart));
  }, [cart]);

  useEffect(() => {
    window.localStorage.setItem(CUSTOMER_STORAGE_KEY, JSON.stringify(customer));
  }, [customer]);

  useEffect(() => {
    if (!isSplitSize(draft.sizeId) && draft.splitMode) {
      setDraft((current) => ({ ...current, splitMode: false }));
    }
  }, [draft.sizeId, draft.splitMode]);

  const canSplit = isSplitSize(draft.sizeId);
  const draftUnitPrice = useMemo(() => calculatePizzaUnitPrice(draft), [draft]);
  const subtotal = useMemo(() => calculateCartSubtotal(cart), [cart]);
  const deliveryFee = useMemo(
    () => calculateDeliveryFee(customer.serviceMode, customer.zoneId),
    [customer.serviceMode, customer.zoneId],
  );
  const total = subtotal + deliveryFee;

  const canCheckout =
    cart.length > 0 &&
    customer.name.trim().length > 1 &&
    customer.phone.trim().length > 4 &&
    (customer.serviceMode === "pickup" || customer.addressLine.trim().length > 4);

  const toggleTopping = (toppingId: string) => {
    setDraft((current) => {
      const exists = current.toppingsIds.includes(toppingId);

      if (exists) {
        return {
          ...current,
          toppingsIds: current.toppingsIds.filter((id) => id !== toppingId),
        };
      }

      if (current.toppingsIds.length >= MAX_TOPPINGS) {
        setFeedback(`Puoi selezionare fino a ${MAX_TOPPINGS} ingredienti extra.`);
        setFeedbackTone("error");
        return current;
      }

      setFeedback("");
      return {
        ...current,
        toppingsIds: [...current.toppingsIds, toppingId],
      };
    });
  };

  const addDraftToCart = (nextDraft: PizzaDraft) => {
    setCart((current) => [...current, createCartItem(nextDraft)]);
    setFeedback(`${nextDraft.name} aggiunta al carrello.`);
    setFeedbackTone("success");
  };

  const addPresetToCart = (preset: PizzaDraft) => {
    addDraftToCart({
      ...preset,
      splitMode: false,
      quantity: 1,
    });
  };

  const addCustomPizza = () => {
    const nextDraft = {
      ...draft,
      name: createDraftName(draft),
    };

    addDraftToCart(nextDraft);
    setDraft(emptyPizzaDraft());
  };

  const addExtraToCart = (option: ExtraOption) => {
    setCart((current) => {
      const existing = current.find(
        (item) => item.itemType === "extra" && item.optionId === option.id,
      );

      if (existing && existing.itemType === "extra") {
        return current.map((item) => {
          if (item.id !== existing.id || item.itemType !== "extra") {
            return item;
          }

          const quantity = item.quantity + 1;
          return {
            ...item,
            quantity,
            totalPrice: Number((quantity * item.unitPrice).toFixed(2)),
          };
        });
      }

      return [
        ...current,
        {
          id: `${Date.now()}-${Math.random().toString(36).slice(2, 9)}`,
          itemType: "extra",
          optionId: option.id,
          name: option.label,
          category: option.category,
          quantity: 1,
          unitPrice: option.price,
          totalPrice: option.price,
        },
      ];
    });

    setFeedback(`${option.label} aggiunto al carrello.`);
    setFeedbackTone("success");
  };

  const updateCartItemQuantity = (itemId: string, delta: number) => {
    setCart((current) =>
      current
        .map((item) => {
          if (item.id !== itemId) {
            return item;
          }

          const quantity = Math.max(1, item.quantity + delta);
          return {
            ...item,
            quantity,
            totalPrice: Number((item.unitPrice * quantity).toFixed(2)),
          };
        }),
    );
  };

  const removeCartItem = (itemId: string) => {
    setCart((current) => current.filter((item) => item.id !== itemId));
  };

  const handleCheckout = async () => {
    if (!canCheckout || isSubmitting) {
      return;
    }

    setIsSubmitting(true);
    setFeedback("Prepariamo il riepilogo ordine...");
    setFeedbackTone("info");

    let popup: Window | null = null;

    try {
      popup = window.open("", "_blank", "noopener,noreferrer");

      const payload = {
        customer,
        items: cart.map(toCheckoutLineItem),
      };

      const response = await fetch("/api/order", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      const data = await response.json();
      if (!response.ok || !data?.whatsappUrl) {
        throw new Error(data?.error || "Impossibile preparare l'ordine.");
      }

      setFeedback(`Ordine ${data.orderId} pronto. Ti apriamo WhatsApp.`);
      setFeedbackTone("success");

      if (popup) {
        popup.location.href = data.whatsappUrl as string;
      } else {
        window.location.href = data.whatsappUrl as string;
      }
    } catch {
      if (popup) {
        popup.close();
      }

      const fallbackMessage = buildWhatsAppOrderMessage(cart, customer);
      const fallbackHref = `https://wa.me/${siteData.whatsappNumber}?text=${encodeURIComponent(fallbackMessage)}`;
      window.open(fallbackHref, "_blank", "noopener,noreferrer");
      setFeedback("Connessione lenta: abbiamo usato il canale WhatsApp diretto.");
      setFeedbackTone("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <Seo
        title="Ordina la tua pizza | Makris Pizza & Love"
        description="Configura la tua pizza Makris, crea la versione meta e meta, aggiungi extra e invia l'ordine direttamente da Lago Patria."
        path="/ordina"
      />

      <main className="bg-background pt-32">
        <section className="border-b border-border bg-secondary/60 py-16">
          <div className="container mx-auto px-4">
            <Link
              to="/"
              className="mb-6 inline-flex items-center gap-2 text-sm text-foreground/70 transition hover:text-primary"
            >
              <ArrowLeft size={16} />
              Torna al sito
            </Link>

            <div className="max-w-3xl">
              <p className="text-sm font-display tracking-[0.3em] text-primary">Configuratore Makris</p>
              <h1 className="mt-2 font-display text-4xl tracking-wider text-foreground md:text-5xl">
                CREA LA TUA PIZZA E ORDINA DAL SITO
              </h1>
              <p className="mt-4 max-w-2xl text-sm leading-relaxed text-foreground/80 md:text-base">
                Puoi fare anche la versione meta e meta su 1/2 metro e metro, aggiungere fritti,
                bibite e dolci, poi inviare tutto in un unico ordine.
              </p>
            </div>
          </div>
        </section>

        <section className="py-12">
          <div className="container mx-auto grid gap-8 px-4 xl:grid-cols-[1.2fr,0.8fr]">
            <div className="space-y-8">
              <section className="rounded-3xl border border-border bg-card p-6">
                <div className="flex items-center gap-3">
                  <Sparkles className="text-primary" size={20} />
                  <div>
                    <h2 className="font-display text-xl tracking-wider text-foreground">
                      Parti veloce da una pizza gia pronta
                    </h2>
                    <p className="mt-1 text-sm text-foreground/70">
                      Se vuoi ordinare in pochi secondi, aggiungi una delle pizze firma Makris.
                    </p>
                  </div>
                </div>

                <div className="mt-6 grid gap-4 md:grid-cols-2">
                  {presetPizzas.map((preset) => (
                    <button
                      key={preset.name}
                      type="button"
                      onClick={() => addPresetToCart(preset)}
                      className="rounded-2xl border border-border bg-background/40 p-5 text-left transition hover:border-primary/50 hover:bg-background/70"
                    >
                      <p className="text-xs font-display tracking-[0.3em] text-primary">PRESET</p>
                      <h3 className="mt-2 font-display text-lg tracking-wider text-foreground">
                        {preset.name}
                      </h3>
                      <p className="mt-3 text-sm leading-relaxed text-foreground/70">
                        {pizzaSummary(preset)}
                      </p>
                      <p className="mt-4 text-sm font-semibold text-primary">
                        {formatCurrency(calculatePizzaUnitPrice(preset))}
                      </p>
                    </button>
                  ))}
                </div>
              </section>

              <section className="rounded-3xl border border-border bg-card p-6">
                <div className="flex items-center gap-3">
                  <Pizza className="text-primary" size={20} />
                  <div>
                    <h2 className="font-display text-xl tracking-wider text-foreground">
                      Costruisci la tua pizza
                    </h2>
                    <p className="mt-1 text-sm text-foreground/70">
                      Scegli impasto, base, formaggio e ingredienti extra.
                    </p>
                  </div>
                </div>

                <div className="mt-8 space-y-8">
                  <div>
                    <h3 className="font-display text-sm tracking-[0.25em] text-primary">FORMATO</h3>
                    <div className="mt-3 grid gap-3 md:grid-cols-3">
                      {pizzaSizes.map((size) => (
                        <button
                          key={size.id}
                          type="button"
                          onClick={() =>
                            setDraft((current) => ({
                              ...current,
                              sizeId: size.id,
                              splitMode: isSplitSize(size.id) ? current.splitMode : false,
                            }))
                          }
                          className={`rounded-2xl border p-4 text-left transition ${optionCardClasses(
                            draft.sizeId === size.id,
                          )}`}
                        >
                          <p className="font-display text-sm tracking-wider">{size.label}</p>
                          <p className="mt-1 text-sm opacity-80">{formatCurrency(size.price)}</p>
                          {size.description ? (
                            <p className="mt-2 text-xs opacity-80">{size.description}</p>
                          ) : null}
                        </button>
                      ))}
                    </div>
                  </div>

                  {canSplit ? (
                    <div className="rounded-2xl border border-border bg-background/40 p-4">
                      <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
                        <p className="text-sm font-display tracking-[0.25em] text-primary">
                          MODALITA 2 GUSTI
                        </p>
                        <div className="inline-flex rounded-full border border-border bg-background/60 p-1">
                          <button
                            type="button"
                            onClick={() => setDraft((current) => ({ ...current, splitMode: false }))}
                            className={`rounded-full px-4 py-2 text-xs transition ${
                              !draft.splitMode
                                ? "bg-primary text-primary-foreground"
                                : "text-foreground/70 hover:text-foreground"
                            }`}
                          >
                            Singolo gusto
                          </button>
                          <button
                            type="button"
                            onClick={() => setDraft((current) => ({ ...current, splitMode: true }))}
                            className={`rounded-full px-4 py-2 text-xs transition ${
                              draft.splitMode
                                ? "bg-primary text-primary-foreground"
                                : "text-foreground/70 hover:text-foreground"
                            }`}
                          >
                            Meta e Meta
                          </button>
                        </div>
                      </div>
                    </div>
                  ) : null}

                  <div>
                    <h3 className="font-display text-sm tracking-[0.25em] text-primary">IMPASTO</h3>
                    <div className="mt-3 space-y-3">
                      {doughOptions.map((option) => (
                        <button
                          key={option.id}
                          type="button"
                          onClick={() => setDraft((current) => ({ ...current, doughId: option.id }))}
                          className={`flex w-full items-center justify-between rounded-2xl border px-4 py-3 text-left transition ${optionCardClasses(
                            draft.doughId === option.id,
                          )}`}
                        >
                          <span>{option.label}</span>
                          <span>{option.price > 0 ? `+ ${formatCurrency(option.price)}` : "Incluso"}</span>
                        </button>
                      ))}
                    </div>
                  </div>

                  {draft.splitMode && canSplit ? (
                    <div className="grid gap-6 md:grid-cols-2">
                      <div>
                        <h3 className="font-display text-sm tracking-[0.25em] text-primary">
                          PRIMA META
                        </h3>
                        <div className="mt-3 space-y-3">
                          {splitFlavorOptions.map((flavor) => (
                            <button
                              key={flavor.id}
                              type="button"
                              onClick={() => setDraft((current) => ({ ...current, leftFlavorId: flavor.id }))}
                              className={`flex w-full items-center justify-between rounded-2xl border px-4 py-3 text-left transition ${optionCardClasses(
                                draft.leftFlavorId === flavor.id,
                              )}`}
                            >
                              <span>{flavor.label}</span>
                              <span className="text-xs opacity-80">Meta</span>
                            </button>
                          ))}
                        </div>
                      </div>

                      <div>
                        <h3 className="font-display text-sm tracking-[0.25em] text-primary">
                          SECONDA META
                        </h3>
                        <div className="mt-3 space-y-3">
                          {splitFlavorOptions.map((flavor) => (
                            <button
                              key={flavor.id}
                              type="button"
                              onClick={() => setDraft((current) => ({ ...current, rightFlavorId: flavor.id }))}
                              className={`flex w-full items-center justify-between rounded-2xl border px-4 py-3 text-left transition ${optionCardClasses(
                                draft.rightFlavorId === flavor.id,
                              )}`}
                            >
                              <span>{flavor.label}</span>
                              <span className="text-xs opacity-80">Meta</span>
                            </button>
                          ))}
                        </div>
                      </div>
                    </div>
                  ) : (
                    <>
                      <div className="grid gap-8 md:grid-cols-2">
                        <div>
                          <h3 className="font-display text-sm tracking-[0.25em] text-primary">BASE</h3>
                          <div className="mt-3 space-y-3">
                            {sauceOptions.map((option) => (
                              <button
                                key={option.id}
                                type="button"
                                onClick={() => setDraft((current) => ({ ...current, sauceId: option.id }))}
                                className={`flex w-full items-center justify-between rounded-2xl border px-4 py-3 text-left transition ${optionCardClasses(
                                  draft.sauceId === option.id,
                                )}`}
                              >
                                <span>{option.label}</span>
                                <span>{option.price > 0 ? `+ ${formatCurrency(option.price)}` : "Incluso"}</span>
                              </button>
                            ))}
                          </div>
                        </div>

                        <div>
                          <h3 className="font-display text-sm tracking-[0.25em] text-primary">FORMAGGIO</h3>
                          <div className="mt-3 space-y-3">
                            {cheeseOptions.map((option) => (
                              <button
                                key={option.id}
                                type="button"
                                onClick={() => setDraft((current) => ({ ...current, cheeseId: option.id }))}
                                className={`flex w-full items-center justify-between rounded-2xl border px-4 py-3 text-left transition ${optionCardClasses(
                                  draft.cheeseId === option.id,
                                )}`}
                              >
                                <span>{option.label}</span>
                                <span>{option.price > 0 ? `+ ${formatCurrency(option.price)}` : "Incluso"}</span>
                              </button>
                            ))}
                          </div>
                        </div>
                      </div>

                      <div>
                        <div className="flex items-center justify-between gap-4">
                          <h3 className="font-display text-sm tracking-[0.25em] text-primary">
                            INGREDIENTI EXTRA
                          </h3>
                          <span className="text-xs text-foreground/60">
                            {draft.toppingsIds.length}/{MAX_TOPPINGS}
                          </span>
                        </div>
                        <div className="mt-3 grid gap-3 md:grid-cols-2">
                          {toppingOptions.map((option) => {
                            const selected = draft.toppingsIds.includes(option.id);

                            return (
                              <button
                                key={option.id}
                                type="button"
                                onClick={() => toggleTopping(option.id)}
                                className={`flex items-center justify-between rounded-2xl border px-4 py-3 text-left transition ${
                                  selected
                                    ? "border-primary bg-primary text-primary-foreground"
                                    : "border-border bg-background/40 text-foreground hover:border-primary/50"
                                }`}
                              >
                                <span>{option.label}</span>
                                <span>{option.price > 0 ? `+ ${formatCurrency(option.price)}` : "Incluso"}</span>
                              </button>
                            );
                          })}
                        </div>
                      </div>
                    </>
                  )}

                  <div className="grid gap-6 md:grid-cols-[1fr,auto]">
                    <div>
                      <label className="text-sm font-display tracking-[0.25em] text-primary">
                        NOTE PER QUESTA PIZZA
                      </label>
                      <textarea
                        value={draft.notes}
                        onChange={(event) =>
                          setDraft((current) => ({ ...current, notes: event.target.value }))
                        }
                        rows={4}
                        className="mt-3 w-full rounded-2xl border border-border bg-background/40 px-4 py-3 text-sm text-foreground outline-none transition focus:border-primary"
                        placeholder="Es. ben cotta, senza basilico, tagliata a spicchi..."
                      />
                    </div>

                    <div>
                      <label className="text-sm font-display tracking-[0.25em] text-primary">QUANTITA</label>
                      <div className="mt-3 inline-flex items-center rounded-2xl border border-border bg-background/40">
                        <button
                          type="button"
                          onClick={() =>
                            setDraft((current) => ({ ...current, quantity: Math.max(1, current.quantity - 1) }))
                          }
                          className="px-4 py-3 text-foreground transition hover:text-primary"
                          aria-label="Riduci quantita"
                        >
                          <Minus size={18} />
                        </button>
                        <span className="min-w-10 text-center text-sm">{draft.quantity}</span>
                        <button
                          type="button"
                          onClick={() =>
                            setDraft((current) => ({ ...current, quantity: Math.min(12, current.quantity + 1) }))
                          }
                          className="px-4 py-3 text-foreground transition hover:text-primary"
                          aria-label="Aumenta quantita"
                        >
                          <Plus size={18} />
                        </button>
                      </div>
                    </div>
                  </div>

                  <div className="rounded-2xl border border-border bg-background/40 p-5">
                    <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                      <div>
                        <p className="text-xs font-display tracking-[0.3em] text-primary">RIEPILOGO PIZZA</p>
                        <p className="mt-2 text-sm text-foreground/80">{pizzaSummary(draft)}</p>
                      </div>
                      <div className="text-right">
                        <p className="text-xs text-foreground/60">Prezzo unitario</p>
                        <p className="text-2xl font-semibold text-primary">{formatCurrency(draftUnitPrice)}</p>
                      </div>
                    </div>

                    <button
                      type="button"
                      onClick={addCustomPizza}
                      className="mt-5 inline-flex items-center gap-2 rounded-2xl bg-primary px-6 py-3 font-display text-sm tracking-wider text-primary-foreground transition hover:brightness-110"
                    >
                      <Plus size={18} />
                      AGGIUNGI AL CARRELLO
                    </button>
                  </div>
                </div>
              </section>

              <section className="rounded-3xl border border-border bg-card p-6">
                <h2 className="font-display text-xl tracking-wider text-foreground">
                  Aggiungi fritti, bibite e dolci
                </h2>
                <p className="mt-2 text-sm text-foreground/70">
                  Completa l'ordine senza uscire dal configuratore.
                </p>

                <div className="mt-6 space-y-6">
                  {(Object.keys(extraCategoryLabels) as Array<keyof typeof extraCategoryLabels>).map(
                    (category) => (
                      <div key={category}>
                        <h3 className="font-display text-sm tracking-[0.25em] text-primary">
                          {extraCategoryLabels[category]}
                        </h3>
                        <div className="mt-3 grid gap-3 md:grid-cols-2">
                          {extraOptions
                            .filter((option) => option.category === category)
                            .map((option) => (
                              <button
                                key={option.id}
                                type="button"
                                onClick={() => addExtraToCart(option)}
                                className="flex items-center justify-between rounded-2xl border border-border bg-background/40 px-4 py-3 text-left transition hover:border-primary/50"
                              >
                                <span className="text-sm">{option.label}</span>
                                <span className="text-sm font-semibold text-primary">
                                  {formatCurrency(option.price)}
                                </span>
                              </button>
                            ))}
                        </div>
                      </div>
                    ),
                  )}
                </div>
              </section>
            </div>

            <aside className="space-y-6 xl:sticky xl:top-28 xl:self-start">
              <section className="rounded-3xl border border-border bg-card p-6">
                <div className="flex items-center justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <ShoppingBag className="text-primary" size={20} />
                    <h2 className="font-display text-xl tracking-wider text-foreground">Carrello</h2>
                  </div>
                  {cart.length > 0 ? (
                    <button
                      type="button"
                      onClick={() => setCart([])}
                      className="text-xs text-foreground/60 transition hover:text-primary"
                    >
                      Svuota
                    </button>
                  ) : null}
                </div>

                <div className="mt-6 space-y-4">
                  {cart.length === 0 ? (
                    <p className="rounded-2xl border border-dashed border-border px-4 py-5 text-sm text-foreground/65">
                      Nessun prodotto nel carrello. Parti da una pizza o aggiungi extra.
                    </p>
                  ) : (
                    cart.map((item) => (
                      <article key={item.id} className="rounded-2xl border border-border bg-background/40 p-4">
                        <div className="flex items-start justify-between gap-3">
                          <div>
                            <p className="font-display text-sm tracking-wider text-foreground">
                              {cartItemTitle(item)}
                            </p>
                            <p className="mt-2 text-xs leading-relaxed text-foreground/65">
                              {cartItemSummary(item)}
                            </p>
                            {item.itemType === "pizza" && item.draft.notes ? (
                              <p className="mt-2 text-xs italic text-foreground/60">Note: {item.draft.notes}</p>
                            ) : null}
                          </div>

                          <button
                            type="button"
                            onClick={() => removeCartItem(item.id)}
                            className="text-foreground/50 transition hover:text-primary"
                            aria-label={`Rimuovi ${cartItemTitle(item)}`}
                          >
                            <Trash2 size={16} />
                          </button>
                        </div>

                        <div className="mt-4 flex items-center justify-between gap-4">
                          <div className="inline-flex items-center rounded-full border border-border">
                            <button
                              type="button"
                              onClick={() => updateCartItemQuantity(item.id, -1)}
                              className="px-3 py-2 text-foreground transition hover:text-primary"
                              aria-label="Riduci quantita"
                            >
                              <Minus size={16} />
                            </button>
                            <span className="min-w-8 text-center text-sm">{item.quantity}</span>
                            <button
                              type="button"
                              onClick={() => updateCartItemQuantity(item.id, 1)}
                              className="px-3 py-2 text-foreground transition hover:text-primary"
                              aria-label="Aumenta quantita"
                            >
                              <Plus size={16} />
                            </button>
                          </div>
                          <p className="text-sm font-semibold text-primary">{formatCurrency(item.totalPrice)}</p>
                        </div>
                      </article>
                    ))
                  )}
                </div>
              </section>

              <section className="rounded-3xl border border-border bg-card p-6">
                <h2 className="font-display text-xl tracking-wider text-foreground">
                  Dati ordine
                </h2>

                <div className="mt-6 space-y-4">
                  <div>
                    <label className="text-xs font-display tracking-[0.25em] text-primary">NOME</label>
                    <input
                      value={customer.name}
                      onChange={(event) =>
                        setCustomer((current) => ({ ...current, name: event.target.value }))
                      }
                      type="text"
                      autoComplete="name"
                      className="mt-2 w-full rounded-2xl border border-border bg-background/40 px-4 py-3 text-sm text-foreground outline-none transition focus:border-primary"
                      placeholder="Il tuo nome"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-display tracking-[0.25em] text-primary">TELEFONO</label>
                    <input
                      value={customer.phone}
                      onChange={(event) =>
                        setCustomer((current) => ({ ...current, phone: event.target.value }))
                      }
                      type="tel"
                      inputMode="tel"
                      autoComplete="tel"
                      className="mt-2 w-full rounded-2xl border border-border bg-background/40 px-4 py-3 text-sm text-foreground outline-none transition focus:border-primary"
                      placeholder="Numero per ricontatto"
                    />
                  </div>

                  <div>
                    <p className="text-xs font-display tracking-[0.25em] text-primary">MODALITA</p>
                    <div className="mt-2 grid grid-cols-2 gap-3">
                      {[
                        { id: "pickup", label: "Ritiro" },
                        { id: "delivery", label: "Consegna" },
                      ].map((mode) => (
                        <button
                          key={mode.id}
                          type="button"
                          onClick={() =>
                            setCustomer((current) => ({
                              ...current,
                              serviceMode: mode.id as CustomerDetails["serviceMode"],
                              zoneId: mode.id === "pickup" ? "pickup" : current.zoneId === "pickup" ? "lago-patria" : current.zoneId,
                            }))
                          }
                          className={`rounded-2xl border px-4 py-3 text-sm transition ${optionCardClasses(
                            customer.serviceMode === mode.id,
                          )}`}
                        >
                          {mode.label}
                        </button>
                      ))}
                    </div>
                  </div>

                  {customer.serviceMode === "delivery" ? (
                    <>
                      <div>
                        <p className="text-xs font-display tracking-[0.25em] text-primary">ZONA</p>
                        <div className="mt-2 space-y-2">
                          {deliveryZones
                            .filter((zone) => zone.id !== "pickup")
                            .map((zone) => (
                              <button
                                key={zone.id}
                                type="button"
                                onClick={() => setCustomer((current) => ({ ...current, zoneId: zone.id }))}
                                className={`flex w-full items-center justify-between rounded-2xl border px-4 py-3 text-left text-sm transition ${optionCardClasses(
                                  customer.zoneId === zone.id,
                                )}`}
                              >
                                <span>{zone.label}</span>
                                <span>+ {formatCurrency(zone.fee)}</span>
                              </button>
                            ))}
                        </div>
                      </div>

                      <div>
                        <label className="text-xs font-display tracking-[0.25em] text-primary">
                          INDIRIZZO / RIFERIMENTO
                        </label>
                        <textarea
                          value={customer.addressLine}
                          onChange={(event) =>
                            setCustomer((current) => ({ ...current, addressLine: event.target.value }))
                          }
                          autoComplete="street-address"
                          rows={3}
                          className="mt-2 w-full rounded-2xl border border-border bg-background/40 px-4 py-3 text-sm text-foreground outline-none transition focus:border-primary"
                          placeholder="Via, numero civico, interno o riferimento utile"
                        />
                      </div>
                    </>
                  ) : null}

                  <div>
                    <label className="text-xs font-display tracking-[0.25em] text-primary">
                      NOTE FINALI
                    </label>
                    <textarea
                      value={customer.extraNotes}
                      onChange={(event) =>
                        setCustomer((current) => ({ ...current, extraNotes: event.target.value }))
                      }
                      rows={3}
                      className="mt-2 w-full rounded-2xl border border-border bg-background/40 px-4 py-3 text-sm text-foreground outline-none transition focus:border-primary"
                      placeholder="Es. citofono, orario preferito, richieste extra"
                    />
                  </div>
                </div>

                <div className="mt-6 rounded-2xl border border-border bg-background/40 p-4">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-foreground/70">Subtotale</span>
                    <span className="text-foreground">{formatCurrency(subtotal)}</span>
                  </div>
                  <div className="mt-2 flex items-center justify-between text-sm">
                    <span className="text-foreground/70">Consegna</span>
                    <span className="text-foreground">{formatCurrency(deliveryFee)}</span>
                  </div>
                  <div className="mt-3 flex items-center justify-between border-t border-border pt-3">
                    <span className="font-display text-sm tracking-wider text-foreground">TOTALE</span>
                    <span className="text-xl font-semibold text-primary">{formatCurrency(total)}</span>
                  </div>
                </div>

                {feedback ? (
                  <div
                    className={`mt-4 flex items-start gap-2 rounded-2xl px-4 py-3 text-sm ${
                      feedbackTone === "error"
                        ? "border border-red-500/30 bg-red-500/10 text-foreground/90"
                        : feedbackTone === "success"
                          ? "border border-primary/20 bg-primary/10 text-foreground/85"
                          : "border border-border bg-background/40 text-foreground/80"
                    }`}
                  >
                    <Check size={16} className="mt-0.5 text-primary" />
                    <span>{feedback}</span>
                  </div>
                ) : null}

                <button
                  type="button"
                  disabled={!canCheckout || isSubmitting}
                  onClick={handleCheckout}
                  className={`mt-6 block w-full rounded-2xl px-6 py-4 text-center font-display text-sm tracking-wider transition ${
                    canCheckout && !isSubmitting
                      ? "bg-primary text-primary-foreground hover:brightness-110"
                      : "cursor-not-allowed bg-muted text-muted-foreground"
                  }`}
                >
                  {isSubmitting ? "PREPARAZIONE ORDINE..." : "INVIA ORDINE"}
                </button>

                <p className="mt-3 text-xs leading-relaxed text-foreground/55">
                  Per inviare l'ordine servono almeno nome, telefono e indirizzo se scegli la consegna.
                </p>

                <div className="mt-6 grid gap-3 sm:grid-cols-2">
                  {siteData.deliveryPlatforms.map((platform) => (
                    <a
                      key={platform.url}
                      href={platform.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="rounded-2xl border border-border px-4 py-3 text-center text-sm text-foreground/75 transition hover:border-primary/50 hover:text-primary"
                    >
                      Preferisci {platform.label}
                    </a>
                  ))}
                </div>
              </section>
            </aside>
          </div>
        </section>
      </main>
    </>
  );
}
