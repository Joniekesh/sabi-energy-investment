import { ArrowUpRight, Globe, Smartphone, Sun, Zap } from "lucide-react";
import Reveal from "@/components/site/Reveal";
import SectionHeading from "@/components/site/SectionHeading";
import { MARKET_STATS, RESEARCH_SOURCES } from "@/lib/site";

const ICONS = { zap: Zap, sun: Sun, globe: Globe, smartphone: Smartphone };

export default function MarketSection() {
  return (
    <section id="market" className="bg-white py-20 sm:py-28">
      <div className="shell">
        <Reveal>
          <SectionHeading
            eyebrow="Market research · Nigeria"
            title="A large market. A growing need. A digital opportunity."
            intro="Nigeria presents a significant commercial opportunity for solar energy and electronics distribution. Electricity access challenges, growing solar adoption and digital connectivity provide a strong foundation for our distribution strategy."
          />
        </Reveal>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
          {MARKET_STATS.map((stat, index) => {
            const Icon = ICONS[stat.icon] || Zap;
            return (
              <Reveal key={stat.label} delay={index * 70}>
                <article className="group flex h-full flex-col rounded-[26px] border border-forest/10 bg-white p-6 transition-all duration-500 hover:-translate-y-1 hover:border-gold/60 hover:shadow-[0_28px_60px_-40px_rgba(6,61,39,0.55)]">
                  <div className="flex items-center justify-between">
                    <span className="grid h-11 w-11 place-items-center rounded-full bg-forest/8 text-forest transition-colors duration-500 group-hover:bg-forest group-hover:text-gold">
                      <Icon size={19} strokeWidth={1.7} aria-hidden="true" />
                    </span>
                    <span className="font-heading text-[0.6rem] font-semibold uppercase tracking-[0.18em] text-ink/45">
                      {stat.label}
                    </span>
                  </div>

                  <div className="mt-6 flex items-baseline gap-1.5">
                    <span className="font-heading text-[2.6rem] font-bold leading-none tracking-[-0.04em] text-forest tabular-nums">
                      {stat.value}
                    </span>
                    <span className="font-heading text-sm font-semibold uppercase tracking-[0.08em] text-gold-deep">
                      {stat.unit}
                    </span>
                  </div>

                  <p className="mt-4 text-[0.86rem] leading-relaxed text-ink/70">{stat.body}</p>

                  {stat.extra && (
                    <p className="mt-3 rounded-xl bg-cream px-3 py-2.5 text-[0.78rem] leading-relaxed text-forest/80">
                      {stat.extra}
                    </p>
                  )}

                  <a
                    href={stat.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-auto inline-flex items-center gap-1.5 pt-6 font-heading text-[0.62rem] font-semibold uppercase tracking-[0.12em] text-ink/45 underline decoration-gold/70 decoration-1 underline-offset-4 transition-colors hover:text-forest"
                  >
                    {stat.sourceLabel}
                    <ArrowUpRight size={12} aria-hidden="true" />
                    <span className="sr-only">— opens in a new tab</span>
                  </a>
                  <p className="mt-1.5 text-[0.68rem] leading-snug text-ink/55">{stat.source}</p>
                </article>
              </Reveal>
            );
          })}
        </div>

        <Reveal>
          <p className="mt-8 max-w-4xl border-l-2 border-gold/70 pl-4 text-[0.82rem] leading-relaxed text-ink/55">
            These figures demonstrate the scale of Nigeria&rsquo;s energy needs and the potential
            reach of digital commerce. They represent market indicators, not guaranteed customers
            or projected Sabi Energy sales.
          </p>
        </Reveal>

        <Reveal>
          <div className="mt-12 rounded-[26px] border border-forest/10 bg-cream p-6 sm:p-8">
            <div className="grid gap-8 md:grid-cols-[220px_1fr]">
              <div>
                <span className="eyebrow text-forest/60">Market research sources</span>
                <p className="mt-3 text-[0.78rem] leading-relaxed text-ink/55">
                  Every figure above is drawn from published third-party research. Open the
                  original sources below.
                </p>
              </div>
              <ul className="grid gap-3 sm:grid-cols-3">
                {RESEARCH_SOURCES.map((source, index) => (
                  <li key={source.name}>
                    <a
                      href={source.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group flex h-full flex-col justify-between gap-4 rounded-[18px] border border-forest/10 bg-white p-4 transition-all duration-300 hover:-translate-y-0.5 hover:border-gold/70"
                    >
                      <span className="flex items-start justify-between gap-3">
                        <span className="font-heading text-[0.58rem] font-bold tracking-[0.16em] text-gold-deep">
                          {String(index + 1).padStart(2, "0")}
                        </span>
                        <ArrowUpRight
                          size={14}
                          className="text-forest/40 transition-colors group-hover:text-forest"
                          aria-hidden="true"
                        />
                      </span>
                      <span>
                        <span className="block font-heading text-[0.8rem] font-semibold leading-snug text-forest">
                          {source.name}
                        </span>
                        <span className="mt-1 block text-[0.7rem] text-ink/50">{source.detail}</span>
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}