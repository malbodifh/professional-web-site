import { pricing } from "@/lib/content";
import { Section } from "./ui/Section";
import { Button } from "./ui/Button";
import { Reveal } from "./ui/Reveal";

function CheckBadge() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden>
      <circle cx="9" cy="9" r="9" fill="rgba(255,255,255,0.2)" />
      <path
        d="M5.5 9.2 7.8 11.5 12.5 6.5"
        stroke="white"
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

const perks = [
  "Sin costo",
  "Sin compromiso",
  "Respuesta rápida",
];

export function PricingCTA() {
  return (
    <Section id="pricing" className="bg-cream">
      <Reveal>
        <div className="relative overflow-hidden rounded-3xl bg-brand px-8 py-16 sm:px-14 sm:py-20 md:py-24">
          {/* Decorative blobs */}
          <div
            className="pointer-events-none absolute -top-24 -right-24 h-80 w-80 rounded-full bg-white/10 blur-3xl"
            aria-hidden
          />
          <div
            className="pointer-events-none absolute -bottom-16 -left-16 h-64 w-64 rounded-full bg-brand-dark/50 blur-2xl"
            aria-hidden
          />

          {/* Pattern overlay */}
          <div
            className="pointer-events-none absolute inset-0 opacity-[0.04]"
            style={{
              backgroundImage:
                "radial-gradient(circle, white 1px, transparent 1px)",
              backgroundSize: "28px 28px",
            }}
            aria-hidden
          />

          <div className="relative z-10 flex flex-col items-center text-center">
            <Reveal delay={0.05}>
              <span className="font-sans text-xs uppercase tracking-[0.18em] text-white/60">
                Cotización
              </span>
            </Reveal>

            <Reveal delay={0.1}>
              <h2 className="mt-6 max-w-2xl font-display text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl md:leading-[1.08]">
                {pricing.heading}
              </h2>
            </Reveal>

            <Reveal delay={0.16}>
              <p className="mt-5 max-w-lg text-base text-white/70 sm:text-lg">
                {pricing.body}
              </p>
            </Reveal>

            <Reveal delay={0.22}>
              <div className="mt-10">
                <Button
                  href={pricing.cta.href}
                  variant="secondary"
                  size="lg"
                  className="shadow-[0_8px_32px_-8px_rgba(0,0,0,0.3)]"
                >
                  {pricing.cta.label}
                </Button>
              </div>
            </Reveal>

            <Reveal delay={0.28}>
              <ul className="mt-7 flex flex-wrap items-center justify-center gap-x-6 gap-y-2.5">
                {perks.map((perk) => (
                  <li key={perk} className="flex items-center gap-2 text-sm text-white/70">
                    <CheckBadge />
                    {perk}
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal delay={0.33}>
              <p className="mt-5 font-sans text-xs tracking-wide text-white/40">
                {pricing.note}
              </p>
            </Reveal>
          </div>
        </div>
      </Reveal>
    </Section>
  );
}
