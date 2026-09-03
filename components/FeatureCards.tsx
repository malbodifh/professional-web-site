import { featureCards, featureCardsSection } from "@/lib/content";
import { Section, SectionHeading } from "./ui/Section";
import { Reveal } from "./ui/Reveal";

const icons = [
  // Real output
  <svg key="a" width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden>
    <rect x="4" y="3" width="13" height="18" rx="2.5" stroke="#262626" strokeWidth="1.7" />
    <path d="M8 8h5M8 12h5M8 16h3" stroke="#262626" strokeWidth="1.7" strokeLinecap="round" />
    <rect x="14" y="13" width="6" height="8" rx="1.5" fill="#262626" fillOpacity="0.15" stroke="#262626" strokeWidth="1.5" />
  </svg>,
  // All tools
  <svg key="b" width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden>
    <circle cx="12" cy="12" r="3" stroke="#262626" strokeWidth="1.7" />
    <path d="M12 3v4M12 17v4M3 12h4M17 12h4M5.6 5.6l2.8 2.8M15.6 15.6l2.8 2.8M18.4 5.6l-2.8 2.8M8.4 15.6l-2.8 2.8" stroke="#262626" strokeWidth="1.7" strokeLinecap="round" />
  </svg>,
  // Memory
  <svg key="c" width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden>
    <path d="M9 4a4 4 0 0 0-4 4 3.5 3.5 0 0 0-1 6.5A3.5 3.5 0 0 0 9 19V4Z" stroke="#262626" strokeWidth="1.6" strokeLinejoin="round" />
    <path d="M15 4a4 4 0 0 1 4 4 3.5 3.5 0 0 1 1 6.5A3.5 3.5 0 0 1 15 19V4Z" fill="#262626" fillOpacity="0.12" stroke="#262626" strokeWidth="1.6" strokeLinejoin="round" />
  </svg>,
];

export function FeatureCards() {
  return (
    <Section id="product" className="bg-cream">
      <Reveal>
        <SectionHeading
          eyebrow={featureCardsSection.eyebrow}
          title={featureCardsSection.heading}
        />
      </Reveal>
      <div className="mt-14 grid gap-5 md:grid-cols-3">
        {featureCards.map((card, i) => (
          <Reveal key={card.title} delay={i * 0.08}>
            <article className="group flex h-full flex-col gap-5 rounded-3xl border border-ink/6 bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_24px_60px_-30px_rgba(26,24,43,0.25)]">
              <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-brand/8 transition-colors group-hover:bg-brand/12">
                {icons[i]}
              </span>
              <h3 className="font-display text-xl font-bold tracking-tight text-ink">
                {card.title}
              </h3>
              <p className="text-[15px] leading-relaxed text-ink/60">{card.body}</p>
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
