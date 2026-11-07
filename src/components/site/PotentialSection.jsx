import { Info } from "lucide-react";
import Reveal from "@/components/site/Reveal";
import SectionHeading from "@/components/site/SectionHeading";
import { GMV_ROWS, PRODUCT_ECONOMICS } from "@/lib/site";

export default function PotentialSection() {
  return (
    <section id="potential" className="relative overflow-hidden bg-deep py-20 text-cream sm:py-28">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-24 top-0 h-[420px] w-[420px] rounded-full bg-gold/10 blur-[120px]"
      />
      <div className="shell relative">
        <Reveal>
          <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
            <SectionHeading
              eyebrow="Projected distribution potential"
              title="The scale of a working agent network."
              tone="light"
            />
            <p className="text-[0.92rem] leading-relaxed text-cream/65">
              Using an illustrative average order value of{" "}
              <strong className="font-semibold text-gold">₦50,000</strong>, here is what different
              monthly order volumes would represent in gross merchandise value.
            </p>
          </div>
        </Reveal>

        <Reveal>
          <div className="mt-12 overflow-hidden rounded-[26px] border border-gold/25 bg-cream/[0.04]">
            <div className="overflow-x-auto">
              <table className="w-full min-w-[480px] border-collapse text-left">
                <caption className="sr-only">
                  Illustrative monthly gross merchandise value by monthly order volume
                </caption>
                <thead>
                  <tr className="border-b border-cream/15">
                    <th scope="col" className="px-6 py-4 font-heading text-[0.6rem] font-semibold uppercase tracking-[0.18em] text-cream/45">
                      Monthly orders
                    </th>
                    <th scope="col" className="px-6 py-4 text-right font-heading text-[0.6rem] font-semibold uppercase tracking-[0.18em] text-cream/45">
                      Potential monthly sales value
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {GMV_ROWS.map((row) => (
                    <tr key={row.orders} className="border-b border-cream/10 last:border-0">
                      <td className="px-6 py-5 font-heading text-xl font-semibold text-cream/85 tabular-nums">
                        {row.orders}
                      </td>
                      <td className="px-6 py-5 text-right font-heading text-xl font-bold text-gold tabular-nums sm:text-2xl">
                        {row.value}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </Reveal>

        <Reveal>
          <p className="mt-5 flex items-start gap-2.5 text-[0.78rem] leading-relaxed text-cream/55">
            <Info size={15} className="mt-0.5 shrink-0 text-gold/70" aria-hidden="true" />
            These figures represent illustrative gross merchandise value based on the assumed
            average order value. They are not net profit, confirmed revenue or guaranteed sales.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          <Reveal>
            <div>
              <span className="eyebrow text-gold">Product economics</span>
              <h3 className="mt-4 font-heading text-[1.5rem] font-bold uppercase leading-tight tracking-[-0.02em] text-cream">
                What one order can look like
              </h3>
              <p className="mt-4 text-[0.9rem] leading-relaxed text-cream/65">
                A second illustrative example, using a single product cycle from landed cost to
                final contribution after agent commission.
              </p>
              <p className="mt-5 rounded-2xl border border-cream/15 px-4 py-3 text-[0.74rem] leading-relaxed text-cream/50">
                Actual product margins, agent commissions and costs will vary by category.
              </p>
            </div>
          </Reveal>

          <Reveal delay={90}>
            <div className="rounded-[26px] border border-gold/25 bg-cream/[0.05] p-4 sm:p-6">
              <ul>
                {PRODUCT_ECONOMICS.map((row) => (
                  <li
                    key={row.label}
                    className={`flex items-center justify-between gap-6 rounded-xl px-3 py-3.5 ${
                      row.tone === "gold" ? "bg-gold/12" : ""
                    }`}
                  >
                    <span
                      className={`text-[0.84rem] ${
                        row.tone === "gold" ? "font-medium text-cream" : "text-cream/65"
                      }`}
                    >
                      {row.label}
                    </span>
                    <span
                      className={`shrink-0 font-heading font-semibold tabular-nums ${
                        row.tone === "gold" ? "text-base text-gold" : "text-[0.95rem] text-cream/85"
                      }`}
                    >
                      {row.value}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}