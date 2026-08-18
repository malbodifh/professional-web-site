import { howItWorks } from "@/lib/content";
import { Section, SectionHeading } from "./ui/Section";
import { Reveal } from "./ui/Reveal";

const stepNums = ["01", "02", "03"];

const stepIcons = [
  // Slack / Add
  <svg key="slack" width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden>
    <rect x="3" y="3" width="22" height="22" rx="6" stroke="#262626" strokeWidth="1.6" />
    <path d="M14 9v10M9 14h10" stroke="#262626" strokeWidth="1.7" strokeLinecap="round" />
  </svg>,
  // Connect / Chain
  <svg key="connect" width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden>
    <circle cx="8" cy="14" r="3.5" stroke="#262626" strokeWidth="1.6" />
    <circle cx="20" cy="14" r="3.5" stroke="#262626" strokeWidth="1.6" />
    <path d="M11.5 14h5" stroke="#262626" strokeWidth="1.7" strokeLinecap="round" />
    <circle cx="8" cy="14" r="1.2" fill="#262626" fillOpacity="0.3" />
    <circle cx="20" cy="14" r="1.2" fill="#262626" fillOpacity="0.3" />
  </svg>,
  // Work / Lightning
  <svg key="work" width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden>
    <path
      d="M15.5 4L8 16h7l-2.5 8 9.5-12h-7l2.5-8z"
      fill="#262626"
      fillOpacity="0.15"
      stroke="#262626"
      strokeWidth="1.6"
      strokeLinejoin="round"
    />
  </svg>,
];

export function HowItWorks() {
  return (
    <Section id="solutions" className="bg-cream">
      <Reveal>
        <SectionHeading
          eyebrow="Cómo trabajamos"
          title={howItWorks.heading}
          subtitle="Tres pasos para construir el software a medida de tu negocio."
        />
      </Reveal>

      <div className="relative mt-16">
        {/* Connecting line — desktop only (spans center of outer columns) */}
        <div
          className="absolute top-[34px] left-[16.666%] right-[16.666%] hidden h-px bg-gradient-to-r from-brand/20 via-brand/40 to-brand/20 md:block"
          aria-hidden
        />

        <div className="grid gap-8 md:grid-cols-3">
          {howItWorks.steps.map((s, i) => (
            <Reveal key={s.step} delay={i * 0.1}>
              <div className="group flex flex-col gap-5 md:items-center md:text-center">
                {/* Step number + icon ring */}
                <div className="relative flex items-center gap-4 md:flex-col md:items-center">
                  <div className="relative flex h-[68px] w-[68px] shrink-0 items-center justify-center rounded-2xl bg-white ring-1 ring-ink/8 transition-all duration-300 group-hover:ring-brand/30 group-hover:shadow-[0_8px_28px_-8px_rgba(23,23,23,0.25)]">
                    {stepIcons[i]}
                    {/* Mono step badge */}
                    <span className="absolute -top-2 -right-2 flex h-6 w-6 items-center justify-center rounded-full bg-brand font-sans text-[10px] font-bold text-white shadow-[0_4px_12px_-2px_rgba(23,23,23,0.5)]">
                      {s.step}
                    </span>
                  </div>
                  <span className="font-sans text-[2.5rem] font-bold leading-none text-brand/10 md:hidden">
                    {stepNums[i]}
                  </span>
                </div>

                {/* Big step number — desktop watermark */}
                <span className="hidden font-sans text-[3.5rem] font-bold leading-none text-brand/8 md:block">
                  {stepNums[i]}
                </span>

                <div className="flex flex-col gap-2.5 md:items-center">
                  <h3 className="font-display text-xl font-bold tracking-tight text-ink">
                    {s.title}
                  </h3>
                  <p className="text-[15px] leading-relaxed text-ink/60">{s.body}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  );
}
