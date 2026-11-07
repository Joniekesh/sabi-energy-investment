import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { NAV_LINKS, WHATSAPP_URL } from "@/lib/site";

function BrandMark() {
  return (
    <a href="#home" className="group flex items-center gap-3" aria-label="Sabi Energy — back to top">
      <span className="relative grid h-11 w-11 place-items-center rounded-full bg-forest text-gold transition-transform duration-500 group-hover:rotate-45">
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <circle cx="12" cy="12" r="4.4" fill="currentColor" />
          <g stroke="currentColor" strokeWidth="1.6" strokeLinecap="round">
            <path d="M12 1.6v3M12 19.4v3M1.6 12h3M19.4 12h3M4.6 4.6l2.1 2.1M17.3 17.3l2.1 2.1M19.4 4.6l-2.1 2.1M6.7 17.3l-2.1 2.1" />
          </g>
        </svg>
      </span>
      <span className="leading-none">
        <span className="block font-heading text-[1.06rem] font-bold uppercase tracking-[0.14em] text-forest">
          Sabi Energy
        </span>
        <span className="mt-1 block font-heading text-[0.5rem] font-medium uppercase tracking-[0.28em] text-ink/55">
          Sabimen Technologies Ltd
        </span>
      </span>
    </a>
  );
}

export default function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-forest/10 bg-cream/92 backdrop-blur-xl"
          : "border-b border-transparent bg-cream/70 backdrop-blur-md"
      }`}
    >
      <div className="shell flex h-[76px] items-center justify-between gap-6">
        <BrandMark />

        <nav aria-label="Main navigation" className="hidden items-center gap-7 lg:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="group relative font-heading text-[0.7rem] font-semibold uppercase tracking-[0.14em] text-ink/70 transition-colors hover:text-forest"
            >
              {link.label}
              <span className="absolute -bottom-1.5 left-0 h-[2px] w-0 bg-gold transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden items-center rounded-full bg-gold px-6 py-3 font-heading text-[0.7rem] font-bold uppercase tracking-[0.14em] text-deep transition-all duration-300 hover:bg-forest hover:text-gold sm:inline-flex"
          >
            Invest Now
          </a>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-label={open ? "Close menu" : "Open menu"}
            className="grid h-11 w-11 place-items-center rounded-full border border-forest/20 text-forest transition-colors hover:bg-forest hover:text-cream lg:hidden"
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      {open && (
        <div className="fixed inset-x-0 top-[76px] z-40 h-[calc(100dvh-76px)] overflow-y-auto border-t border-forest/10 bg-cream lg:hidden">
          <nav aria-label="Mobile navigation" className="shell flex flex-col py-4">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="border-b border-forest/10 py-4 font-heading text-lg font-semibold text-forest"
              >
                {link.label}
              </a>
            ))}
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setOpen(false)}
              className="mt-6 inline-flex items-center justify-center rounded-full bg-gold px-6 py-4 font-heading text-xs font-bold uppercase tracking-[0.16em] text-deep"
            >
              Chat with Sabi Energy
            </a>
            <p className="mt-6 text-xs leading-relaxed text-ink/55">
              Five strategic investor positions. Investment participation from $10,000 to $50,000.
            </p>
          </nav>
        </div>
      )}
    </header>
  );
}