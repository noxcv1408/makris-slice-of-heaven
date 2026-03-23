const DEFAULT_WHATSAPP_NUMBER = "393533554533";

const zoneMeta: Record<string, { label: string; fee: number }> = {
  pickup: { label: "Ritiro in sede", fee: 0 },
  "lago-patria": { label: "Lago Patria", fee: 1 },
  varcaturo: { label: "Varcaturo", fee: 1.5 },
  licola: { label: "Licola", fee: 2 },
};

function sanitizeText(value: unknown, maxLength = 200) {
  if (typeof value !== "string") {
    return "";
  }

  return value.trim().slice(0, maxLength);
}

function sanitizeNumber(value: unknown, fallback = 0) {
  if (typeof value !== "number" || Number.isNaN(value) || !Number.isFinite(value)) {
    return fallback;
  }

  return Number(value.toFixed(2));
}

function formatCurrency(value: number) {
  return new Intl.NumberFormat("it-IT", {
    style: "currency",
    currency: "EUR",
  }).format(value);
}

function buildOrderId() {
  const now = new Date();
  const stamp = `${now.getFullYear()}${String(now.getMonth() + 1).padStart(2, "0")}${String(now.getDate()).padStart(2, "0")}`;
  const rand = Math.random().toString(36).slice(2, 6).toUpperCase();
  return `MK-${stamp}-${rand}`;
}

export default function handler(req: any, res: any) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const body = typeof req.body === "string" ? JSON.parse(req.body) : req.body;
    const customer = body?.customer ?? {};
    const itemsRaw = Array.isArray(body?.items) ? body.items : [];

    const name = sanitizeText(customer.name, 80);
    const phone = sanitizeText(customer.phone, 40);
    const serviceMode = customer.serviceMode === "delivery" ? "delivery" : "pickup";
    const zoneId = sanitizeText(customer.zoneId, 40) || "pickup";
    const addressLine = sanitizeText(customer.addressLine, 180);
    const extraNotes = sanitizeText(customer.extraNotes, 200);

    if (name.length < 2 || phone.length < 5) {
      return res.status(400).json({ error: "Dati cliente non validi." });
    }

    if (serviceMode === "delivery" && addressLine.length < 4) {
      return res.status(400).json({ error: "Indirizzo richiesto per la consegna." });
    }

    const items = itemsRaw
      .map((item: any) => {
        const quantity = Math.max(1, Math.min(20, Number(item?.quantity || 1)));
        const totalPrice = sanitizeNumber(Number(item?.totalPrice || 0));
        const unitPrice = sanitizeNumber(Number(item?.unitPrice || 0));

        return {
          name: sanitizeText(item?.name, 80),
          summary: sanitizeText(item?.summary, 220),
          notes: sanitizeText(item?.notes, 160),
          quantity,
          totalPrice,
          unitPrice,
        };
      })
      .filter((item: any) => item.name.length > 0 && item.totalPrice > 0);

    if (items.length === 0) {
      return res.status(400).json({ error: "Il carrello e vuoto." });
    }

    const subtotal = sanitizeNumber(items.reduce((sum: number, item: any) => sum + item.totalPrice, 0));
    const zone = zoneMeta[zoneId] ?? zoneMeta["lago-patria"];
    const deliveryFee = serviceMode === "delivery" ? zone.fee : 0;
    const total = sanitizeNumber(subtotal + deliveryFee);
    const orderId = buildOrderId();

    const lines = [
      "Ciao Makris, nuovo ordine dal configuratore web.",
      `ID ordine: ${orderId}`,
      "",
      `Nome: ${name}`,
      `Telefono: ${phone}`,
      `Modalita: ${serviceMode === "delivery" ? "Consegna" : "Ritiro"}`,
      `Zona: ${zone.label}`,
      addressLine ? `Indirizzo / riferimento: ${addressLine}` : null,
      "",
      "Ordine:",
      ...items.flatMap((item: any, index: number) => [
        `${index + 1}. ${item.name}`,
        `   ${item.summary}`,
        `   Quantita: ${item.quantity} | Totale: ${formatCurrency(item.totalPrice)}`,
        item.notes ? `   Note: ${item.notes}` : null,
      ]),
      "",
      `Subtotale: ${formatCurrency(subtotal)}`,
      `Consegna: ${formatCurrency(deliveryFee)}`,
      `Totale: ${formatCurrency(total)}`,
      extraNotes ? `Note finali: ${extraNotes}` : null,
    ].filter(Boolean);

    const envSource = globalThis as {
      process?: {
        env?: Record<string, string | undefined>;
      };
    };
    const whatsappNumber =
      envSource.process?.env?.MAKRIS_WHATSAPP_NUMBER || DEFAULT_WHATSAPP_NUMBER;
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(lines.join("\n"))}`;

    return res.status(200).json({
      ok: true,
      orderId,
      whatsappUrl,
      subtotal,
      deliveryFee,
      total,
    });
  } catch {
    return res.status(500).json({ error: "Errore interno nella preparazione dell'ordine." });
  }
}
