import { ArrowUpRight, Layers, MessageCircle, Network, Target, TrendingUp } from "lucide-react";
import Reveal from "@/components/site/Reveal";
import SectionHeading from "@/components/site/SectionHeading";
import { PARTNER_REASONS, WHATSAPP_URL } from "@/lib/site";

const ICONS = {
  layers: Layers,
  target: Target,
  network: Network,
  trending: TrendingUp,
  scale: TrendingUp,
};

export default function WhyPartnerSection() {
  return (
    <section id="why" className="bg-white py-20 sm:py-28">
      <div className="shell">
        <Reveal>
          <SectionHeading
            eyebrow="Why partner with us"
            title="Why partner with Sabi Energy?"
            align="center"
          />
        </Reveal>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {PARTNER_REASONS.map((reason, index) => {
            const Icon = ICONS[reason.icon] || Layers;
            return (
              <Reveal key={reason.title} delay={index * 60}>
                <article className="group relative h-full overflow-hidden rounded-[24px] border border-forest/10 bg-cream/70 p-6 transition-all duration-500 hover:-translate-y-1 hover:border-gold/60 hover:bg-white">
                  <span className="absolute right-5 top-5 font-heading text-[0.6rem] font-bold tracking-[0.18em] text-ink/20">
                    0{index + 1}
                  </span>
                  <span className="grid h-11 w-11 place-items-center rounded-full bg-forest text-gold">
                    <Icon size={19} strokeWidth={1.7} aria-hidden="true" />
                  </span>
                  <h3 className="mt-5 font-heading text-[0.92rem] font-semibold uppercase leading-snug tracking-[0.01em] text-forest">
                    {reason.title}
                  </h3>
                  <p className="mt-2.5 text-[0.84rem] leading-relaxed text-ink/65">{reason.body}</p>
                </article>
              </Reveal>
            );
          })}

          <Reveal delay={320}>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex h-full flex-col justify-between rounded-[24px] bg-forest p-6 text-cream transition-transform duration-500 hover:-translate-y-1"
            >
              <span className="grid h-11 w-11 place-items-center rounded-full bg-gold/15 text-gold">
                <MessageCircle size={19} strokeWidth={1.7} aria-hidden="true" />
              </span>
              <span className="mt-5 block">
                <span className="block font-heading text-[0.92rem] font-semibold uppercase leading-snug text-cream">
                  Speak with management
                </span>
                <span className="mt-2.5 flex items-center gap-1.5 text-[0.82rem] text-cream/70">
                  Discuss the proposal, capital plan and terms
                  <ArrowUpRight size={14} className="transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
                </span>
              </span>
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  );
}