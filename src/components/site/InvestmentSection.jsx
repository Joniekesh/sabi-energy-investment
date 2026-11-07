import { Boxes, Check, Cpu, Network, Ship, Sun, Wallet, Warehouse } from "lucide-react";
import { Image } from "@/components/ui/image";
import Reveal from "@/components/site/Reveal";
import SectionHeading from "@/components/site/SectionHeading";
import { ACCOUNTABILITY, CAPITAL_USES, IMAGES } from "@/lib/site";

const ICONS = {
  sun: Sun,
  cpu: Cpu,
  ship: Ship,
  warehouse: Warehouse,
  boxes: Boxes,
  network: Network,
  wallet: Wallet,
};

export default function InvestmentSection() {
  return (
    <section id="opportunity" className="bg-cream py-20 sm:py-28">
      <div className="shell">
        <Reveal>
          <SectionHeading
            eyebrow="Investment opportunity"
            title="Help us expand our inventory and distribution capacity."
            intro="We are inviting strategic investment partners to participate in financing bulk inventory purchases, international importation, Abuja warehouse operations and nationwide distribution expansion."
          />
        </Reveal>

        <div className="mt-12 grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
          <Reveal>
            <div className="h-full rounded-[26px] border border-forest/10 bg-white p-6 sm:p-8">
              <h3 className="font-heading text-[0.72rem] font-bold uppercase tracking-[0.18em] text-forest">
                Where investment capital will be deployed
              </h3>
              <ul className="mt-5 divide-y divide-forest/8">
                {CAPITAL_USES.map((item) => {
                  const Icon = ICONS[item.icon] || Boxes;
                  return (
                    <li key={item.title} className="flex items-center gap-4 py-3.5">
                      <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-forest/8 text-forest">
                        <Icon size={16} strokeWidth={1.8} aria-hidden="true" />
                      </span>
                      <span className="text-[0.9rem] text-ink/75">{item.title}</span>
                    </li>
                  );
                })}
              </ul>
            </div>
          </Reveal>

          <div className="flex flex-col gap-6">
            <Reveal delay={80}>
              <div className="overflow-hidden rounded-[26px] border border-forest/10">
                <Image
                  src={IMAGES.inventory}
                  alt="Imported solar panels and electronics pallets inside the distribution warehouse"
                  className="aspect-[4/3] h-full w-full"
                  fittingType="fill"
                />
              </div>
            </Reveal>

            <Reveal delay={140}>
              <div className="rounded-[26px] bg-forest p-6 text-cream sm:p-7">
                <h3 className="font-heading text-[0.72rem] font-bold uppercase tracking-[0.18em] text-gold">
                  Our accountability approach
                </h3>
                <ul className="mt-5 grid gap-3 sm:grid-cols-2">
                  {ACCOUNTABILITY.map((item) => (
                    <li key={item} className="flex items-start gap-2.5 text-[0.82rem] text-cream/80">
                      <Check size={14} className="mt-1 shrink-0 text-gold" aria-hidden="true" />
                      {item}
                    </li>
                  ))}
                </ul>
                <p className="mt-5 border-t border-cream/15 pt-4 text-[0.72rem] leading-relaxed text-cream/55">
                  Sabi Energy does not promise guaranteed returns or publish unapproved fixed
                  interest rates. Participation terms are set out in formal investment agreements.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}