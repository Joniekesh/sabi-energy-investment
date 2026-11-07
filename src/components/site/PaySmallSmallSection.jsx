import { ArrowUpRight, CalendarClock, CreditCard, Sun } from "lucide-react";
import { Image } from "@/components/ui/image";
import Reveal from "@/components/site/Reveal";
import SectionHeading from "@/components/site/SectionHeading";
import { IMAGES, WEBSITE_URL } from "@/lib/site";

export default function PaySmallSmallSection() {
  return (
    <section id="financing" className="bg-white py-20 sm:py-28">
      <div className="shell grid gap-12 lg:grid-cols-2 lg:items-center">
        <Reveal>
          <div className="relative">
            <div className="overflow-hidden rounded-[30px] border border-forest/10">
              <Image
                src={IMAGES.family}
                alt="Nigerian family at home with solar-powered lighting and appliances"
                className="aspect-[4/3] h-full w-full"
                fittingType="fill"
              />
            </div>
            <div className="absolute -bottom-5 left-5 flex items-center gap-3 rounded-2xl border border-gold/40 bg-cream px-4 py-3 shadow-[0_20px_40px_-25px_rgba(6,61,39,0.6)] sm:left-8">
              <span className="grid h-9 w-9 place-items-center rounded-full bg-gold text-deep">
                <Sun size={17} strokeWidth={2} aria-hidden="true" />
              </span>
              <span className="font-heading text-[0.62rem] font-semibold uppercase tracking-[0.14em] leading-tight text-forest">
                Sabi Energy
                <br />
                Pay Small Small
              </span>
            </div>
          </div>
        </Reveal>

        <Reveal delay={90}>
          <div>
            <SectionHeading
              eyebrow="Sabi Energy Pay Small Small"
              title="Making solar and electronics more accessible."
              intro="Our Pay Small Small model allows eligible customers to purchase selected solar products and electronics through structured instalment payment arrangements — widening who can buy, and giving agents more to sell."
            />

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <div className="rounded-[22px] border border-forest/12 bg-cream p-5">
                <span className="grid h-10 w-10 place-items-center rounded-full bg-white text-forest">
                  <CreditCard size={18} strokeWidth={1.7} aria-hidden="true" />
                </span>
                <h3 className="mt-4 font-heading text-[0.7rem] font-bold uppercase tracking-[0.16em] text-forest">
                  Outright purchase
                </h3>
                <p className="mt-2 text-[0.82rem] leading-relaxed text-ink/65">
                  Customers pay the full product price and receive their products through our
                  distribution system.
                </p>
              </div>

              <div className="rounded-[22px] border border-gold/50 bg-gold/8 p-5">
                <span className="grid h-10 w-10 place-items-center rounded-full bg-gold text-deep">
                  <CalendarClock size={18} strokeWidth={1.7} aria-hidden="true" />
                </span>
                <h3 className="mt-4 font-heading text-[0.7rem] font-bold uppercase tracking-[0.16em] text-forest">
                  Pay Small Small
                </h3>
                <p className="mt-2 text-[0.82rem] leading-relaxed text-ink/65">
                  Eligible customers purchase selected products and pay according to an agreed
                  instalment schedule.
                </p>
              </div>
            </div>

            <p className="mt-6 text-[0.84rem] leading-relaxed text-ink/55">
              This model expands purchasing opportunities across income levels and provides agents
              with additional products to market.
            </p>

            <a
              href={WEBSITE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-7 inline-flex items-center gap-2 rounded-full bg-forest px-6 py-3.5 font-heading text-[0.7rem] font-semibold uppercase tracking-[0.14em] text-cream transition-colors hover:bg-deep"
            >
              Explore Sabi Energy
              <ArrowUpRight size={14} aria-hidden="true" />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}