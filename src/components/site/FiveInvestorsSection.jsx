import { MessageCircle } from "lucide-react";
import { Image } from "@/components/ui/image";
import Reveal from "@/components/site/Reveal";
import { IMAGES, WHATSAPP_URL } from "@/lib/site";

const TERMS = [
  {
    kicker: "Positions available",
    value: "5",
    label: "strategic investor positions — no more",
  },
  {
    kicker: "Participation per investor",
    value: "$10,000 – $50,000",
    label: "individual investment range",
  },
  {
    kicker: "Potential combined capital",
    value: "$50,000 – $250,000",
    label: "if all five positions are filled within range",
  },
];

export default function FiveInvestorsSection() {
  return (
    <section
      id="investment"
      className="relative overflow-hidden bg-deep py-20 text-cream sm:py-28"
      aria-label="Five strategic investor opportunity"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-32 top-1/4 h-[460px] w-[460px] rounded-full bg-gold/10 blur-[130px]"
      />

      <div className="shell relative">
        <div className="grid gap-10 lg:grid-cols-[1.12fr_0.88fr] lg:gap-14">
          <Reveal>
            <div>
              <span className="inline-flex items-center gap-2.5 rounded-full border border-gold/40 bg-gold/10 px-3.5 py-1.5 font-heading text-[0.58rem] font-bold uppercase tracking-[0.18em] text-gold">
                <span className="h-1.5 w-1.5 rounded-full bg-gold" aria-hidden="true" />
                5 of 5 positions open
              </span>

              <h2 className="mt-6 font-heading text-[clamp(1.9rem,1rem+3.4vw,3.4rem)] font-bold uppercase leading-[1.04] tracking-[-0.03em] text-cream">
                We are looking for{" "}
                <span className="text-gold">five strategic investors.</span>
              </h2>

              <p className="mt-6 max-w-xl text-[1rem] leading-relaxed text-cream/70">
                We are opening an exclusive opportunity for just five strategic investors to
                partner with Sabi Energy in expanding our solar energy and electronics importation
                and distribution business in Nigeria.
              </p>

              <p className="mt-8 max-w-xl border-l-2 border-gold/60 pl-4 text-[0.95rem] leading-relaxed text-cream/80">
                We are looking for partners who believe in the opportunity to build a scalable
                solar energy and electronics distribution network in Nigeria.
              </p>
            </div>
          </Reveal>

          <Reveal delay={100}>
            <div className="relative h-full overflow-hidden rounded-[30px] border border-gold/25">
              <Image
                src={IMAGES.dusk}
                alt="Solar distribution warehouse at dusk with solar panels on the roof and loading bays"
                className="h-full min-h-[320px] w-full"
                fittingType="fill"
              />
              <div
                aria-hidden="true"
                className="absolute inset-0 bg-gradient-to-t from-deep/90 via-deep/20 to-transparent"
              />
              <div className="absolute inset-x-5 bottom-5">
                <p className="font-heading text-[0.58rem] font-semibold uppercase tracking-[0.2em] text-gold">
                  Importation · Warehousing · Distribution
                </p>
                <p className="mt-1.5 text-[0.8rem] leading-relaxed text-cream/75">
                  Capital directed into approved inventory, importation, warehousing and
                  distribution expansion.
                </p>
              </div>
            </div>
          </Reveal>
        </div>

        <Reveal>
          <div className="mt-12 grid gap-px overflow-hidden rounded-[28px] border border-gold/25 bg-gold/20 sm:grid-cols-3">
            {TERMS.map((term) => (
              <div key={term.kicker} className="bg-deep/95 px-6 py-7">
                <p className="font-heading text-[0.56rem] font-semibold uppercase tracking-[0.18em] text-cream/45">
                  {term.kicker}
                </p>
                <p className="mt-3 font-heading text-[1.65rem] font-bold leading-none tracking-[-0.02em] text-gold tabular-nums sm:text-[1.85rem]">
                  {term.value}
                </p>
                <p className="mt-2.5 text-[0.76rem] leading-relaxed text-cream/60">{term.label}</p>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal>
          <div className="mt-10 flex flex-col items-center text-center">
            <h3 className="max-w-2xl font-heading text-[1.05rem] font-semibold uppercase leading-snug tracking-[0.02em] text-cream">
              Interested in becoming one of our five investors?
            </h3>
            <p className="mt-3 max-w-2xl text-[0.9rem] leading-relaxed text-cream/65">
              Contact our management directly on WhatsApp to discuss the investment proposal,
              business model, capital requirements and participation terms.
            </p>

            <div className="relative mt-8 w-full sm:w-auto">
              <span
                aria-hidden="true"
                className="absolute inset-0 -z-10 rounded-full bg-gold/30 blur-2xl"
              />
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex w-full items-center justify-center gap-3 rounded-full bg-gold px-8 py-5 font-heading text-[0.8rem] font-bold uppercase tracking-[0.14em] text-deep shadow-[0_20px_50px_-20px_rgba(245,185,0,0.6)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-cream sm:w-auto"
                aria-label="Chat with Sabi Energy on WhatsApp about the five-investor opportunity — opens in a new tab"
              >
                <MessageCircle size={19} strokeWidth={2.2} aria-hidden="true" />
                Chat with Sabi Energy on WhatsApp
              </a>
            </div>
            <p className="mt-3 font-heading text-[0.56rem] font-semibold uppercase tracking-[0.16em] text-cream/50">
              Opens WhatsApp in a new tab
            </p>

            <p className="mt-8 max-w-3xl text-[0.76rem] leading-relaxed text-cream/55">
              Investment participation is subject to management discussions, due diligence,
              availability of investor positions and execution of formal agreements. No investment
              return is guaranteed.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}