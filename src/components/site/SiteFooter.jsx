import { ArrowUpRight, MessageCircle } from "lucide-react";
import { NAV_LINKS, WEBSITE_URL, WHATSAPP_PLAIN, WHATSAPP_URL } from "@/lib/site";

export default function SiteFooter() {
  return (
    <footer id="contact" className="bg-ink pb-28 pt-16 text-cream/60 lg:pb-16">
      <div className="shell">
        <div className="grid gap-10 border-b border-cream/10 pb-12 md:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <div className="flex items-center gap-3">
              <span className="grid h-10 w-10 place-items-center rounded-full bg-gold text-deep">
                <svg width="19" height="19" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <circle cx="12" cy="12" r="4.4" fill="currentColor" />
                  <g stroke="currentColor" strokeWidth="1.7" strokeLinecap="round">
                    <path d="M12 1.6v3M12 19.4v3M1.6 12h3M19.4 12h3M4.6 4.6l2.1 2.1M17.3 17.3l2.1 2.1M19.4 4.6l-2.1 2.1M6.7 17.3l-2.1 2.1" />
                  </g>
                </svg>
              </span>
              <div>
                <p className="font-heading text-base font-bold uppercase tracking-[0.14em] text-cream">
                  Sabi Energy
                </p>
                <p className="mt-1 text-[0.66rem] uppercase tracking-[0.18em] text-cream/40">
                  Powered by Sabimen Technologies Limited
                </p>
              </div>
            </div>
            <p className="mt-5 max-w-sm font-heading text-[0.9rem] font-medium leading-relaxed text-cream/80">
              Affordable Energy. Accessible Technology. Nationwide Opportunities.
            </p>
          </div>

          <nav aria-label="Footer navigation">
            <p className="font-heading text-[0.6rem] font-semibold uppercase tracking-[0.2em] text-gold/80">
              Explore
            </p>
            <ul className="mt-4 grid gap-2.5">
              {NAV_LINKS.filter((link) => link.label !== "Contact").map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-[0.84rem] text-cream/60 transition-colors hover:text-gold"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <p className="font-heading text-[0.6rem] font-semibold uppercase tracking-[0.2em] text-gold/80">
              Contact
            </p>
            <ul className="mt-4 grid gap-3">
              <li>
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-[0.84rem] text-cream/60 transition-colors hover:text-gold"
                >
                  <MessageCircle size={14} aria-hidden="true" />
                  WhatsApp management
                </a>
              </li>
              <li>
                <a
                  href={WHATSAPP_PLAIN}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[0.84rem] text-cream/60 transition-colors hover:text-gold"
                >
                  +234 707 746 9976
                </a>
              </li>
              <li>
                <a
                  href={WEBSITE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-[0.84rem] text-cream/60 transition-colors hover:text-gold"
                >
                  sabienergy.ng
                  <ArrowUpRight size={12} aria-hidden="true" />
                </a>
              </li>
              <li className="text-[0.8rem] leading-relaxed text-cream/40">
                Abuja distribution warehouse
                <br />
                Federal Capital Territory, Nigeria
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 grid gap-6 lg:grid-cols-[auto_1fr] lg:gap-12">
          <p className="font-heading text-[0.62rem] uppercase tracking-[0.16em] text-cream/50">
            © {new Date().getFullYear()} Sabimen Technologies Limited. All rights reserved.
          </p>
          <div className="grid gap-3 text-[0.72rem] leading-relaxed text-cream/55 sm:grid-cols-2">
            <p>
              <span className="font-semibold uppercase tracking-[0.12em] text-cream/50">
                Investment disclaimer:
              </span>{" "}
              This website is for information purposes only and does not constitute an offer or
              solicitation to invest. All investment participation is subject to due diligence and
              formal agreements. No investment return is guaranteed. Figures shown are illustrative
              scenarios, not confirmed results.
            </p>
            <p>
              <span className="font-semibold uppercase tracking-[0.12em] text-cream/50">
                Privacy:
              </span>{" "}
              We only use the contact details you choose to share with us to respond to enquiries
              about the investment opportunity. Conversations on WhatsApp are governed by
              WhatsApp&rsquo;s own privacy terms. Market statistics are attributed to their published
              third-party sources.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}