import {
  ChevronRight,
  Factory,
  MonitorSmartphone,
  Ship,
  TrendingUp,
  Truck,
  Warehouse,
} from "lucide-react";
import Reveal from "@/components/site/Reveal";
import SectionHeading from "@/components/site/SectionHeading";
import { MODEL_STEPS } from "@/lib/site";

const ICONS = {
  factory: Factory,
  ship: Ship,
  warehouse: Warehouse,
  monitor: MonitorSmartphone,
  truck: Truck,
  trending: TrendingUp,
};

export default function ModelSection() {
  return (
    <section id="model" className="bg-white py-20 sm:py-28">
      <div className="shell">
        <Reveal>
          <SectionHeading
            eyebrow="How our business model works"
            title="From China to every home in Nigeria."
            intro="A single, controlled chain — from manufacturer to customer doorstep — with inventory, pricing and distribution held inside the business."
            align="center"
          />
        </Reveal>

        <ol className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
          {MODEL_STEPS.map((step, index) => {
            const Icon = ICONS[step.icon] || Factory;
            return (
              <li key={step.step} className="relative">
                <Reveal delay={index * 70}>
                  <div className="group h-full rounded-[22px] border border-forest/10 bg-cream/70 p-5 transition-all duration-500 hover:-translate-y-1 hover:border-gold/70 hover:bg-white">
                    <div className="flex items-center justify-between">
                      <span className="grid h-11 w-11 place-items-center rounded-full bg-forest text-gold transition-transform duration-500 group-hover:scale-110">
                        <Icon size={18} strokeWidth={1.7} aria-hidden="true" />
                      </span>
                      <span className="font-heading text-[0.6rem] font-bold tracking-[0.18em] text-ink/25">
                        {step.step}
                      </span>
                    </div>
                    <h3 className="mt-5 font-heading text-[0.95rem] font-semibold uppercase tracking-[0.02em] text-forest">
                      {step.title}
                    </h3>
                    <p className="mt-2 text-[0.78rem] leading-relaxed text-ink/60">{step.body}</p>
                  </div>
                </Reveal>
                {index !== MODEL_STEPS.length - 1 && (
                  <span
                    aria-hidden="true"
                    className="absolute -right-[15px] top-[46px] z-10 hidden text-gold xl:block"
                  >
                    <ChevronRight size={16} strokeWidth={3} />
                  </span>
                )}
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}