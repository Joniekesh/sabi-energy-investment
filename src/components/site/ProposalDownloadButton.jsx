import { useState } from "react";
import { ArrowUpRight, Download, MessageCircle } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { WHATSAPP_URL } from "@/lib/site";

export default function ProposalDownloadButton({ tone = "solid" }) {
  const [open, setOpen] = useState(false);

  const triggerClass =
    tone === "ghost-dark"
      ? "inline-flex items-center justify-center gap-2.5 rounded-full border border-gold/60 px-7 py-4 font-heading text-[0.72rem] font-semibold uppercase tracking-[0.14em] text-gold transition-colors hover:bg-gold hover:text-deep"
      : "se-btn se-btn--solid";

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <button type="button" className={triggerClass}>
          <Download size={15} strokeWidth={2} aria-hidden="true" />
          Download investment proposal
        </button>
      </DialogTrigger>
      <DialogContent className="max-w-lg rounded-[26px] border-forest/15 bg-cream p-0">
        <div className="p-7 sm:p-9">
          <DialogHeader className="text-left">
            <span className="eyebrow text-forest/60">Proposal pack</span>
            <DialogTitle className="mt-3 font-heading text-2xl font-bold uppercase leading-tight tracking-[-0.02em] text-forest">
              The full proposal is being finalised
            </DialogTitle>
            <DialogDescription className="mt-3 text-[0.95rem] leading-relaxed text-ink/70">
              The official Sabi Energy investment proposal document has not been uploaded yet.
              This page carries the current summary of the business, the market and the
              participation structure. Request the complete proposal pack — business model,
              capital allocation and terms — directly from management.
            </DialogDescription>
          </DialogHeader>

          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setOpen(false)}
            className="mt-7 inline-flex w-full items-center justify-center gap-2.5 rounded-full bg-gold px-6 py-4 font-heading text-[0.72rem] font-bold uppercase tracking-[0.14em] text-deep transition-colors hover:bg-forest hover:text-gold"
          >
            <MessageCircle size={16} aria-hidden="true" />
            Request on WhatsApp
          </a>

          <a
            href="#opportunity"
            onClick={() => setOpen(false)}
            className="mt-4 inline-flex items-center gap-1.5 font-heading text-[0.68rem] font-semibold uppercase tracking-[0.14em] text-forest/70 transition-colors hover:text-forest"
          >
            Read the opportunity summary
            <ArrowUpRight size={13} aria-hidden="true" />
          </a>
        </div>
      </DialogContent>
    </Dialog>
  );
}