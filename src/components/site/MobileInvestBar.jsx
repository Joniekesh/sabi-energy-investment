import { MessageCircle } from "lucide-react";
import { WHATSAPP_URL } from "@/lib/site";

export default function MobileInvestBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-gold/30 bg-deep/97 px-4 pb-[max(0.7rem,env(safe-area-inset-bottom))] pt-3 backdrop-blur-md lg:hidden">
      <div className="flex items-center gap-3">
        <div className="min-w-0">
          <p className="font-heading text-[0.55rem] font-semibold uppercase tracking-[0.16em] text-gold">
            5 investor positions
          </p>
          <p className="truncate font-heading text-[0.78rem] font-bold text-cream">
            $10,000 – $50,000
          </p>
        </div>
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="ml-auto inline-flex shrink-0 items-center gap-2 rounded-full bg-gold px-4 py-3 font-heading text-[0.6rem] font-bold uppercase tracking-[0.12em] text-deep"
          aria-label="Chat with Sabi Energy on WhatsApp — opens in a new tab"
        >
          <MessageCircle size={14} strokeWidth={2.2} aria-hidden="true" />
          WhatsApp
        </a>
      </div>
    </div>
  );
}