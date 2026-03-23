import { MessageCircle } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { siteData } from "@/data/siteData";

export default function FloatingButtons() {
  const location = useLocation();
  const isOrderPage = location.pathname === "/ordina";

  return (
    <>
      <Link
        to={isOrderPage ? "/" : "/ordina"}
        aria-label={isOrderPage ? "Torna alla home" : "Apri configuratore"}
        className="fixed bottom-20 right-4 z-40 flex items-center gap-2 rounded-full bg-primary px-4 py-2 font-display text-xs tracking-wider text-primary-foreground shadow-lg transition hover:brightness-110"
      >
        {isOrderPage ? "HOME" : "ORDINA"}
      </Link>
      <a
        href={siteData.whatsapp}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Scrivi su WhatsApp"
        className="fixed bottom-6 right-4 z-40 flex items-center gap-2 rounded-full bg-green-600 px-4 py-2 font-display text-xs tracking-wider text-white shadow-lg transition hover:bg-green-700"
      >
        <MessageCircle size={16} /> WHATSAPP
      </a>
    </>
  );
}
