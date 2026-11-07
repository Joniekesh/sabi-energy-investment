import { Network, Ship, Store } from "lucide-react";
import { Image } from "@/components/ui/image";
import { HERO_HIGHLIGHTS, IMAGES } from "@/lib/site";
import ProposalDownloadButton from "@/components/site/ProposalDownloadButton";
import "./hero.css";

const ICONS = { ship: Ship, network: Network, store: Store };

const STRIP = [
  "Direct China sourcing",
  "Abuja warehouse",
  "Solar & electronics",
  "100,000-agent network",
  "Pay Small Small",
];

export default function HeroSection() {
  return (
    <section id="home" className="se-hero" aria-label="Sabi Energy — investment opportunity">
      <div className="se-bg" aria-hidden="true">
        <div className="se-rings" />
      </div>

      <div className="se-frame">
        <div className="se-inner">
          <p className="se-kicker">
            China Sourcing <i>·</i> Abuja Warehousing <i>·</i> E-Commerce <i>·</i> 100,000-Agent
            Distribution Network
          </p>

          <h1 className="se-title">
            Invest in Nigeria&rsquo;s <em>next big</em> distribution network.
          </h1>

          <p className="se-lead">
            Sabi Energy is building a nationwide solar energy and electronics distribution
            business, connecting international manufacturers to Nigerian consumers through
            technology, local inventory and a powerful independent sales network.
          </p>

          <div className="se-actions">
            <ProposalDownloadButton />
            <a className="se-btn se-btn--ghost" href="#investment">
              Become an investor
            </a>
          </div>
        </div>

        <div className="se-highlights">
          {HERO_HIGHLIGHTS.map((item) => {
            const Icon = ICONS[item.icon] || Ship;
            return (
              <div key={item.title} className="se-chip">
                <Icon size={18} strokeWidth={1.7} aria-hidden="true" />
                <span>
                  <b>{item.title}</b>
                  <span>{item.note}</span>
                </span>
              </div>
            );
          })}
        </div>

        <div className="se-visual">
          <div className="se-visual-frame">
            <Image
              src={IMAGES.hero}
              alt="Sabi Energy distribution warehouse with solar panels, batteries and delivery truck"
              className="h-full w-full"
              fittingType="fill"
            />
            <span className="se-visual-tag">
              <i aria-hidden="true" />
              Abuja distribution warehouse
            </span>
          </div>
        </div>

        <div className="se-strip" aria-label="Sabi Energy capabilities">
          {STRIP.map((item) => (
            <span key={item} className="se-strip-item">
              {item}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}