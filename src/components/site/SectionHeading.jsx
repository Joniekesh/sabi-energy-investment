export default function SectionHeading({ eyebrow, title, intro, align = "left", tone = "dark" }) {
  const isCenter = align === "center";
  const titleColor = tone === "light" ? "text-cream" : "text-forest";
  const introColor = tone === "light" ? "text-cream/75" : "text-ink/70";
  const eyebrowColor = tone === "light" ? "text-gold" : "text-forest/60";

  return (
    <div className={isCenter ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
      <span className={`eyebrow ${eyebrowColor}`}>{eyebrow}</span>
      <h2 className={`display-head mt-5 ${titleColor}`}>{title}</h2>
      {intro && (
        <p className={`mt-5 text-[1.02rem] leading-relaxed ${introColor}`}>{intro}</p>
      )}
    </div>
  );
}