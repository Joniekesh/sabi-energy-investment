import { Check, Link2, Users } from "lucide-react";
import Reveal from "@/components/site/Reveal";
import SectionHeading from "@/components/site/SectionHeading";
import { AGENT_CATEGORIES, AGENT_SCENARIOS, AGENT_STEPS } from "@/lib/site";

export default function AgentNetworkSection() {
  return (
    <section id="agents" className="bg-cream py-20 sm:py-28">
      <div className="shell">
        <Reveal>
          <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
            <SectionHeading
              eyebrow="Our biggest advantage"
              title="100,000 agents. One nationwide distribution network."
            />
            <p className="text-[0.95rem] leading-relaxed text-ink/65">
              Sabi Energy is developing a nationwide network of independent sales agents who can
              market our products and earn commissions on successful sales. Unlike traditional
              retail businesses that require multiple physical outlets, our digital referral system
              enables individuals across Nigeria to promote products through their own networks.
            </p>
          </div>
        </Reveal>

        <div className="mt-12 grid gap-5 lg:grid-cols-[0.85fr_1.15fr]">
          <Reveal>
            <div className="h-full rounded-[26px] border border-forest/10 bg-white p-6 sm:p-7">
              <div className="flex items-center gap-3">
                <span className="grid h-10 w-10 place-items-center rounded-full bg-forest text-gold">
                  <Users size={18} strokeWidth={1.7} aria-hidden="true" />
                </span>
                <h3 className="font-heading text-[0.8rem] font-semibold uppercase tracking-[0.14em] text-forest">
                  Potential agent categories
                </h3>
              </div>
              <ul className="mt-6 grid gap-2.5">
                {AGENT_CATEGORIES.map((category) => (
                  <li
                    key={category}
                    className="flex items-center gap-3 rounded-xl bg-cream px-3.5 py-2.5 text-[0.84rem] text-ink/75"
                  >
                    <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-gold" aria-hidden="true" />
                    {category}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          <Reveal delay={100}>
            <div className="h-full rounded-[26px] border border-forest/10 bg-forest p-6 text-cream sm:p-8">
              <div className="flex items-center gap-3">
                <span className="grid h-10 w-10 place-items-center rounded-full bg-gold/15 text-gold">
                  <Link2 size={18} strokeWidth={1.7} aria-hidden="true" />
                </span>
                <h3 className="font-heading text-[0.8rem] font-semibold uppercase tracking-[0.14em] text-gold">
                  How the system works
                </h3>
              </div>
              <ol className="mt-6 grid gap-x-8 gap-y-4 sm:grid-cols-2">
                {AGENT_STEPS.map((step, index) => (
                  <li key={step} className="flex gap-3">
                    <span className="grid h-6 w-6 shrink-0 place-items-center rounded-full border border-gold/40 font-heading text-[0.62rem] font-bold text-gold">
                      {index + 1}
                    </span>
                    <span className="text-[0.84rem] leading-relaxed text-cream/80">{step}</span>
                  </li>
                ))}
              </ol>
              <p className="mt-6 flex items-start gap-2.5 border-t border-cream/15 pt-5 text-[0.8rem] leading-relaxed text-cream/75">
                <Check size={15} className="mt-0.5 shrink-0 text-gold" aria-hidden="true" />
                Agents earn from genuine completed product sales, not recruitment.
              </p>
            </div>
          </Reveal>
        </div>

        <Reveal>
          <div className="mt-12 overflow-hidden rounded-[26px] border border-forest/10 bg-white">
            <div className="flex flex-col gap-2 border-b border-forest/10 px-6 py-5 sm:flex-row sm:items-center sm:justify-between">
              <h3 className="font-heading text-[0.82rem] font-semibold uppercase tracking-[0.14em] text-forest">
                100,000-agent distribution scenarios
              </h3>
              <span className="font-heading text-[0.58rem] font-semibold uppercase tracking-[0.16em] text-ink/35">
                Illustrative only
              </span>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full min-w-[520px] border-collapse text-left">
                <caption className="sr-only">
                  Illustrative distribution scenarios by active agents, orders per agent and total
                  orders per month
                </caption>
                <thead>
                  <tr className="border-b border-forest/10 bg-cream/60">
                    <th scope="col" className="px-6 py-3.5 font-heading text-[0.6rem] font-semibold uppercase tracking-[0.16em] text-ink/50">
                      Active agents
                    </th>
                    <th scope="col" className="px-6 py-3.5 font-heading text-[0.6rem] font-semibold uppercase tracking-[0.16em] text-ink/50">
                      Monthly orders per agent
                    </th>
                    <th scope="col" className="px-6 py-3.5 text-right font-heading text-[0.6rem] font-semibold uppercase tracking-[0.16em] text-ink/50">
                      Total orders / month
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {AGENT_SCENARIOS.map((row) => (
                    <tr
                      key={row.agents}
                      className="border-b border-forest/8 transition-colors last:border-0 hover:bg-cream/50"
                    >
                      <td className="px-6 py-4 font-heading text-lg font-semibold text-forest tabular-nums">
                        {row.agents}
                      </td>
                      <td className="px-6 py-4 text-[0.95rem] text-ink/65 tabular-nums">
                        {row.perAgent}
                      </td>
                      <td className="px-6 py-4 text-right">
                        <span className="inline-block rounded-full bg-gold/15 px-4 py-1.5 font-heading text-[0.95rem] font-bold text-forest tabular-nums">
                          {row.total}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </Reveal>

        <Reveal>
          <div className="mt-6 grid gap-4 sm:grid-cols-[1fr_auto] sm:items-center">
            <p className="rounded-[22px] border border-gold/40 bg-white p-5 text-[0.9rem] leading-relaxed text-ink/75">
              <strong className="font-semibold text-forest">Consider the conservative case:</strong>{" "}
              even if only 10% of our targeted 100,000-agent network becomes active, one completed
              order per active agent per month would represent{" "}
              <strong className="font-semibold text-forest">10,000 monthly transactions</strong>.
            </p>
            <p className="rounded-[22px] bg-forest px-5 py-4 text-[0.72rem] leading-relaxed text-cream/70 sm:max-w-[260px]">
              These figures are illustrative scenarios, not guaranteed sales or existing results.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}