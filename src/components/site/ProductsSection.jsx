import { Ship } from "lucide-react";
import { Image } from "@/components/ui/image";
import Reveal from "@/components/site/Reveal";
import SectionHeading from "@/components/site/SectionHeading";
import { PRODUCTS } from "@/lib/site";

export default function ProductsSection() {
  return (
    <section id="products" className="bg-cream py-20 sm:py-28">
      <div className="shell">
        <Reveal>
          <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
            <SectionHeading
              eyebrow="Product portfolio"
              title="Products that serve everyday needs."
            />
            <p className="max-w-md text-[0.95rem] leading-relaxed text-ink/65 lg:text-right">
              Solar systems, backup power and everyday electronics chosen for the realities of
              Nigerian homes, shops and small businesses — high turnover, repeatable demand.
            </p>
          </div>
        </Reveal>

        <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
          {PRODUCTS.map((product, index) => (
            <Reveal key={product.title} delay={index * 55}>
              <article className="group h-full overflow-hidden rounded-[22px] border border-forest/10 bg-white transition-all duration-500 hover:-translate-y-1.5 hover:border-gold/60 hover:shadow-[0_30px_60px_-38px_rgba(6,61,39,0.6)]">
                <div className="aspect-[4/3] overflow-hidden bg-muted">
                  <Image
                    src={product.image}
                    alt={product.alt}
                    className="h-full w-full transition-transform duration-[900ms] ease-out group-hover:scale-[1.06]"
                    fittingType="fill"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-heading text-[0.82rem] font-semibold leading-snug tracking-[-0.01em] text-forest">
                    {product.title}
                  </h3>
                  <p className="mt-2 text-[0.74rem] leading-relaxed text-ink/60">
                    {product.description}
                  </p>
                </div>
                <span className="mb-4 ml-4 inline-flex items-center gap-1.5 font-heading text-[0.55rem] font-semibold uppercase tracking-[0.16em] text-ink/30 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                  Abuja → Nationwide
                </span>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <div className="mt-12 flex flex-col gap-5 rounded-[26px] border border-forest/10 bg-white p-6 sm:flex-row sm:items-center sm:p-8">
            <span className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-gold/15 text-gold-deep">
              <Ship size={21} strokeWidth={1.7} aria-hidden="true" />
            </span>
            <p className="text-[0.92rem] leading-relaxed text-ink/70">
              All products will be sourced from{" "}
              <strong className="font-semibold text-forest">verified manufacturers in China</strong>{" "}
              and distributed through our{" "}
              <strong className="font-semibold text-forest">Abuja distribution warehouse</strong> —
              giving the business control over quality, landed cost and stock availability.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}