const MEDIA = "https://media.base44.com/images/public/6aee90557953554d288a1e09/";

export const IMAGES = {
  hero: `${MEDIA}5ddda3d1c_generated_ccc1536a.png`,
  solarPanels: `${MEDIA}a41ad07e0_generated_02d4c498.png`,
  inverter: `${MEDIA}8a70ff53a_generated_345a1665.png`,
  fan: `${MEDIA}c5de23355_generated_d08ee995.png`,
  powerStation: `${MEDIA}1fd06c2cf_generated_b6725de1.png`,
  chargers: `${MEDIA}085ae7741_generated_f3a66664.png`,
  lamps: `${MEDIA}2fe672d4a_generated_4e56663c.png`,
  homeKit: `${MEDIA}7c04f04df_generated_e8e6ac96.png`,
  family: `${MEDIA}fbeecb4b5_generated_ed661c17.png`,
  inventory: `${MEDIA}f7f8ace1b_generated_c0393a79.png`,
  dusk: `${MEDIA}f74d2d22e_generated_688d9a81.png`,
};

export const WHATSAPP_URL =
  "https://wa.me/2347077469976?text=Hello%20Sabi%20Energy%2C%20I%20am%20interested%20in%20the%20five-investor%20opportunity.%20Please%20send%20me%20the%20investment%20proposal%20and%20participation%20details.";

export const WHATSAPP_PLAIN = "https://wa.me/2347077469976";
export const WEBSITE_URL = "https://sabienergy.ng";

export const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "Opportunity", href: "#opportunity" },
  { label: "Market Research", href: "#market" },
  { label: "Business Model", href: "#model" },
  { label: "Products", href: "#products" },
  { label: "Investment", href: "#investment" },
  { label: "Contact", href: "#contact" },
];

export const HERO_HIGHLIGHTS = [
  {
    icon: "ship",
    title: "Direct sourcing from China",
    note: "Verified manufacturers, negotiated at source.",
  },
  {
    icon: "network",
    title: "Nationwide agent distribution",
    note: "A 100,000-agent referral network in build.",
  },
  {
    icon: "store",
    title: "Solar & electronics marketplace",
    note: "One digital storefront for everyday power needs.",
  },
];

export const MARKET_STATS = [
  {
    icon: "zap",
    value: "85",
    unit: "million+",
    label: "Energy-poor Nigerians",
    body: "More than 85 million Nigerians are identified by the Nigerian Investment Promotion Commission as energy-poor or without access to grid electricity.",
    source: "Nigerian Investment Promotion Commission — Energy Sector",
    href: "https://www.nipc.gov.ng/sectors/energy",
    sourceLabel: "nipc.gov.ng",
  },
  {
    icon: "sun",
    value: "75",
    unit: "%",
    label: "Projected annual solar PV growth",
    body: "The International Energy Agency projects average annual solar PV generation growth of approximately 75% in Nigeria between 2026 and 2030.",
    extra:
      "Solar's share of electricity generation is projected to rise from approximately 2% in 2025 to almost 20% by 2030.",
    source: "IEA — Electricity 2026, Nigeria regional outlook",
    href: "https://www.iea.org/reports/electricity-2026",
    sourceLabel: "iea.org",
  },
  {
    icon: "globe",
    value: "109",
    unit: "million",
    label: "Internet users",
    body: "Internet users in Nigeria at the end of 2025.",
    source: "DataReportal — Digital 2026 Nigeria",
    href: "https://datareportal.com/reports/digital-2026-nigeria",
    sourceLabel: "datareportal.com",
  },
  {
    icon: "smartphone",
    value: "165",
    unit: "million",
    label: "Active mobile connections",
    body: "Active cellular mobile connections in Nigeria in late 2025.",
    source: "DataReportal — Digital 2026 Nigeria",
    href: "https://datareportal.com/reports/digital-2026-nigeria",
    sourceLabel: "datareportal.com",
  },
];

export const PRODUCTS = [
  {
    title: "Solar Panels & Complete Solar Systems",
    description:
      "Panels, controllers and full home systems sized for Nigerian households and small businesses.",
    image: IMAGES.solarPanels,
    alt: "Solar panels and a complete home solar system",
  },
  {
    title: "Inverters & Lithium Batteries",
    description:
      "High-cycle lithium storage and inverters built for daily, long-duration backup power.",
    image: IMAGES.inverter,
    alt: "Inverter and lithium battery storage unit",
  },
  {
    title: "Rechargeable & Solar Fans",
    description:
      "Rechargeable standing, ceiling and table fans that keep running when the grid does not.",
    image: IMAGES.fan,
    alt: "Rechargeable standing fan",
  },
  {
    title: "Power Banks & Portable Power Stations",
    description:
      "Portable power for phones, laptops, tools and small appliances on the move.",
    image: IMAGES.powerStation,
    alt: "Portable power station and power bank",
  },
  {
    title: "Chargers & Electronic Accessories",
    description:
      "Everyday charging, cables and accessories at volumes the market actually buys.",
    image: IMAGES.chargers,
    alt: "Phone chargers and electronic accessories",
  },
  {
    title: "Solar Lighting & Rechargeable Lamps",
    description:
      "Solar lanterns, floodlights and rechargeable lamps for homes, shops and streets.",
    image: IMAGES.lamps,
    alt: "Rechargeable solar lamp glowing",
  },
  {
    title: "Solar Home Kits",
    description:
      "Ready-to-install kits bundling panel, battery, lights and fittings in one box.",
    image: IMAGES.homeKit,
    alt: "Complete solar home kit",
  },
];

export const MODEL_STEPS = [
  {
    step: "01",
    icon: "factory",
    title: "Source",
    body: "Purchase quality products directly from verified Chinese manufacturers.",
  },
  {
    step: "02",
    icon: "ship",
    title: "Import",
    body: "Ship products into Nigeria and complete customs clearance.",
  },
  {
    step: "03",
    icon: "warehouse",
    title: "Warehouse",
    body: "Receive, inspect and manage inventory at our Abuja distribution warehouse.",
  },
  {
    step: "04",
    icon: "monitor",
    title: "E-commerce",
    body: "List available products on the Sabi Energy online marketplace.",
  },
  {
    step: "05",
    icon: "truck",
    title: "Distribute",
    body: "Use our nationwide agent network, wholesale partners and direct customer channels to generate sales.",
  },
  {
    step: "06",
    icon: "trending",
    title: "Generate revenue",
    body: "Complete product transactions, reconcile sales and manage business returns.",
  },
];

export const AGENT_CATEGORIES = [
  "Students and graduates",
  "Entrepreneurs",
  "Social media marketers",
  "Solar installers",
  "Electronics retailers",
  "Independent sales representatives",
];

export const AGENT_STEPS = [
  "Register as a Sabi Energy agent.",
  "Receive a personal referral link.",
  "Share products with prospective customers.",
  "Customers complete purchases through the platform.",
  "Eligible sales are tracked automatically.",
  "Agents receive their applicable commissions.",
];

export const AGENT_SCENARIOS = [
  { agents: "10,000", perAgent: "1", total: "10,000" },
  { agents: "25,000", perAgent: "2", total: "50,000" },
  { agents: "40,000", perAgent: "3", total: "120,000" },
  { agents: "100,000", perAgent: "3", total: "300,000" },
];

export const CAPITAL_USES = [
  { icon: "sun", title: "Solar product procurement" },
  { icon: "cpu", title: "Electronics procurement" },
  { icon: "ship", title: "International shipping & customs clearance" },
  { icon: "warehouse", title: "Abuja warehouse setup & operations" },
  { icon: "boxes", title: "Inventory management" },
  { icon: "network", title: "E-commerce & agent network expansion" },
  { icon: "wallet", title: "Working capital" },
];

export const ACCOUNTABILITY = [
  "Documented supplier purchases",
  "Inventory records",
  "Sales and revenue reporting",
  "Capital deployment tracking",
  "Financial reconciliation",
  "Formal investment agreements",
];

export const GMV_ROWS = [
  { orders: "10,000", value: "₦500 million" },
  { orders: "50,000", value: "₦2.5 billion" },
  { orders: "120,000", value: "₦6 billion" },
  { orders: "300,000", value: "₦15 billion" },
];

export const PRODUCT_ECONOMICS = [
  { label: "Landed product cost", value: "₦100,000", tone: "plain" },
  { label: "Selling price", value: "₦125,000", tone: "plain" },
  { label: "Gross profit", value: "₦25,000", tone: "gold" },
  { label: "Illustrative agent commission", value: "₦6,250", tone: "plain" },
  {
    label: "Remaining contribution before other expenses",
    value: "₦18,750",
    tone: "gold",
  },
];

export const PARTNER_REASONS = [
  {
    icon: "layers",
    title: "Existing business infrastructure",
    body: "We are building on our existing e-commerce and referral ecosystem.",
  },
  {
    icon: "target",
    title: "Large addressable market",
    body: "Nigeria has substantial demand for solar energy and everyday electronics.",
  },
  {
    icon: "network",
    title: "Nationwide distribution",
    body: "Our agent network allows us to reach customers across multiple states.",
  },
  {
    icon: "trending",
    title: "Multiple revenue channels",
    body: "Retail, wholesale, agent sales, solar installations and Pay Small Small.",
  },
  {
    icon: "scale",
    title: "Scalable business model",
    body: "Expand inventory, agent participation and distribution capacity as demand grows.",
  },
];

export const RESEARCH_SOURCES = [
  {
    name: "Nigerian Investment Promotion Commission",
    detail: "Energy Sector",
    href: "https://www.nipc.gov.ng/sectors/energy",
  },
  {
    name: "International Energy Agency",
    detail: "Electricity 2026",
    href: "https://www.iea.org/reports/electricity-2026",
  },
  {
    name: "DataReportal",
    detail: "Digital 2026: Nigeria",
    href: "https://datareportal.com/reports/digital-2026-nigeria",
  },
];