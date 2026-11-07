import { createFileRoute } from "@tanstack/react-router";
import SiteHeader from "@/components/site/SiteHeader";
import HeroSection from "@/components/site/HeroSection";
import MarketSection from "@/components/site/MarketSection";
import ProductsSection from "@/components/site/ProductsSection";
import ModelSection from "@/components/site/ModelSection";
import AgentNetworkSection from "@/components/site/AgentNetworkSection";
import PaySmallSmallSection from "@/components/site/PaySmallSmallSection";
import InvestmentSection from "@/components/site/InvestmentSection";
import PotentialSection from "@/components/site/PotentialSection";
import WhyPartnerSection from "@/components/site/WhyPartnerSection";
import FiveInvestorsSection from "@/components/site/FiveInvestorsSection";
import SiteFooter from "@/components/site/SiteFooter";
import MobileInvestBar from "@/components/site/MobileInvestBar";

// export const Route = createFileRoute("/")({
//   component: SabiEnergyPage,
//   head: () => ({
//     meta: [
//       {
//         title:
//           "Sabi Energy — Invest in Nigeria's Next Big Solar & Electronics Distribution Network",
//       },
//       {
//         name: "description",
//         content:
//           "Sabi Energy, powered by Sabimen Technologies Limited, is building a nationwide solar energy and electronics distribution business — China sourcing, Abuja warehousing, e-commerce and a 100,000-agent network. Five strategic investor positions, $10,000–$50,000 each.",
//       },
//       { property: "og:title", content: "Sabi Energy — Five Strategic Investor Opportunity" },
//       {
//         property: "og:description",
//         content:
//           "China sourcing. Abuja warehousing. E-commerce. 100,000-agent distribution. Five strategic investor positions from $10,000 to $50,000.",
//       },
//       { property: "og:type", content: "website" },
//       { name: "twitter:card", content: "summary_large_image" },
//     ],
//   }),
// });

function SabiEnergyPage() {
  return (
    <>
      <a
        href="#home"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-full focus:bg-forest focus:px-5 focus:py-3 focus:font-heading focus:text-xs focus:uppercase focus:tracking-[0.14em] focus:text-cream"
      >
        Skip to content
      </a>
      <SiteHeader />
      <main>
        <HeroSection />
        <MarketSection />
        <ProductsSection />
        <ModelSection />
        <AgentNetworkSection />
        <PaySmallSmallSection />
        <InvestmentSection />
        <PotentialSection />
        <WhyPartnerSection />
        <FiveInvestorsSection />
      </main>
      <SiteFooter />
      <MobileInvestBar />
    </>
  );
}

export default SabiEnergyPage;
