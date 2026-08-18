import { comparison } from "@/lib/content";
import { Section, SectionHeading } from "./ui/Section";
import { Reveal } from "./ui/Reveal";
import { cn } from "@/lib/cn";

function CheckIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden>
      <circle cx="9" cy="9" r="9" fill="#262626" fillOpacity="0.12" />
      <path
        d="M5.5 9.2 7.8 11.5 12.5 6.5"
        stroke="#262626"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function XIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden>
      <circle cx="9" cy="9" r="9" fill="#171717" fillOpacity="0.06" />
      <path
        d="M6.5 6.5 11.5 11.5M11.5 6.5 6.5 11.5"
        stroke="#737373"
        strokeWidth="1.7"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function ComparisonTable() {
  return (
    <Section id="compare" className="bg-cream-2">
      <Reveal>
        <SectionHeading
          eyebrow="Comparativa"
          title={comparison.heading}
          subtitle={comparison.subheading}
        />
      </Reveal>

      {/* Desktop table */}
      <Reveal delay={0.1} className="mt-14 hidden md:block">
        <div className="overflow-hidden rounded-3xl border border-ink/6 bg-white shadow-[0_16px_48px_-20px_rgba(26,24,43,0.12)]">
          {/* Header row */}
          <div className="grid grid-cols-[1fr_1.1fr_1.1fr]">
            {/* Use Case header */}
            <div className="border-b border-ink/6 px-7 py-5">
              <span className="font-sans text-xs uppercase tracking-[0.18em] text-muted">
                {comparison.columns[0]}
              </span>
            </div>
            {/* Others header */}
            <div className="border-b border-l border-ink/6 bg-cream px-7 py-5">
              <span className="font-sans text-xs uppercase tracking-[0.18em] text-muted">
                {comparison.columns[1]}
              </span>
            </div>
            {/* noren header */}
            <div className="border-b border-l border-brand/20 bg-brand/5 px-7 py-5">
              <div className="flex items-center gap-2.5">
                <span className="h-2 w-2 rounded-full bg-brand" />
                <span className="font-sans text-xs uppercase tracking-[0.18em] text-brand">
                  {comparison.columns[2]}
                </span>
              </div>
            </div>
          </div>

          {/* Data rows */}
          {comparison.rows.map((row, i) => (
            <div
              key={i}
              className={cn(
                "grid grid-cols-[1fr_1.1fr_1.1fr]",
                i < comparison.rows.length - 1 && "border-b border-ink/6",
              )}
            >
              {/* Use Case */}
              <div className="flex items-start gap-3 px-7 py-6">
                <span className="font-display text-[15px] font-semibold text-ink">
                  {row.useCase}
                </span>
              </div>
              {/* Others */}
              <div className="flex items-start gap-3 border-l border-ink/6 bg-cream/60 px-7 py-6">
                <XIcon />
                <p className="text-[14px] leading-relaxed text-ink/50">{row.others}</p>
              </div>
              {/* noren */}
              <div className="flex items-start gap-3 border-l border-brand/20 bg-brand/[0.04] px-7 py-6">
                <CheckIcon />
                <p className="text-[14px] leading-relaxed text-ink/80">{row.noren}</p>
              </div>
            </div>
          ))}
        </div>
      </Reveal>

      {/* Mobile: stack as cards */}
      <div className="mt-10 flex flex-col gap-5 md:hidden">
        {comparison.rows.map((row, i) => (
          <Reveal key={i} delay={i * 0.06}>
            <div className="overflow-hidden rounded-3xl border border-ink/6 bg-white shadow-[0_8px_32px_-16px_rgba(26,24,43,0.14)]">
              {/* Use Case label */}
              <div className="border-b border-ink/6 bg-cream px-5 py-4">
                <span className="font-display text-[15px] font-semibold text-ink">
                  {row.useCase}
                </span>
              </div>
              <div className="grid grid-cols-1 divide-y divide-ink/6">
                {/* Others */}
                <div className="flex items-start gap-3 px-5 py-4">
                  <XIcon />
                  <div className="flex flex-col gap-1">
                    <span className="font-sans text-[10px] uppercase tracking-widest text-muted">
                      {comparison.columns[1]}
                    </span>
                    <p className="text-[14px] leading-relaxed text-ink/50">{row.others}</p>
                  </div>
                </div>
                {/* noren */}
                <div className="flex items-start gap-3 bg-brand/[0.04] px-5 py-4">
                  <CheckIcon />
                  <div className="flex flex-col gap-1">
                    <span className="font-sans text-[10px] uppercase tracking-widest text-brand">
                      noren
                    </span>
                    <p className="text-[14px] leading-relaxed text-ink/80">{row.noren}</p>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
