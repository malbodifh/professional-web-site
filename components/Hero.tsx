import Image from "next/image";
import { hero, trustBadges } from "@/lib/content";
import { Button } from "./ui/Button";
import { Container } from "./ui/Container";
import { Reveal } from "./ui/Reveal";

function CheckDot() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden>
      <circle cx="8" cy="8" r="8" fill="#262626" fillOpacity="0.12" />
      <path
        d="M5 8.2 7 10.2 11 6"
        stroke="#262626"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ChatMock() {
  return (
    <div className="relative mx-auto w-full max-w-xl">
      {/* glow */}
      <div className="absolute -inset-x-10 -top-10 -z-10 h-72 rounded-full bg-brand/20 blur-3xl" />
      <div className="overflow-hidden rounded-3xl bg-white shadow-[0_30px_80px_-30px_rgba(26,24,43,0.35)] ring-1 ring-ink/5">
        {/* window bar */}
        <div className="flex items-center gap-2 border-b border-ink/5 px-5 py-3.5">
          <span className="h-3 w-3 rounded-full bg-[#ff5f57]" />
          <span className="h-3 w-3 rounded-full bg-[#febc2e]" />
          <span className="h-3 w-3 rounded-full bg-[#28c840]" />
          <span className="ml-3 font-sans text-xs text-ink/40">#proyectos</span>
        </div>
        {/* message: user */}
        <div className="flex flex-col gap-5 px-5 py-6">
          <div className="flex items-start gap-3">
            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-peach/40 font-display text-sm font-bold text-ink">
              Tú
            </div>
            <div className="pt-1 text-[15px] leading-relaxed text-ink">
              <span className="font-medium text-brand">@noren</span> necesito una web que capte más clientes para mi negocio.
            </div>
          </div>
          {/* message: noren */}
          <div className="flex items-start gap-3">
            <Image
              src="/assets/noren-favicon-black.svg"
              alt="noren"
              width={36}
              height={36}
              className="h-9 w-9 shrink-0 rounded-lg bg-cream-2 p-1.5"
            />
            <div className="flex flex-col gap-3 pt-1">
              <p className="text-[15px] leading-relaxed text-ink/80">
                Perfecto. Te preparo una propuesta con diseño, alcance y plan de desarrollo.
              </p>
              <div className="flex items-center gap-3 rounded-xl border border-ink/8 bg-cream-2 px-4 py-3">
                <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-brand/10 font-sans text-xs font-bold text-brand">
                  PDF
                </span>
                <div className="flex flex-col">
                  <span className="text-sm font-medium text-ink">
                    propuesta-noren.pdf
                  </span>
                  <span className="text-xs text-ink/50">
                    3 páginas · lista para revisar
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-14 pb-20 sm:pt-20 sm:pb-28">
      {/* background wash */}
      <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-b from-brand-faint/60 via-cream to-cream" />
      <Container className="flex flex-col items-center text-center">
        <Reveal>
          <h1 className="max-w-4xl font-display text-5xl font-bold leading-[1.04] tracking-tight text-ink sm:text-6xl md:text-7xl">
            {hero.titleLead}{" "}
            <span className="gradient-text">{hero.titleAccent}</span>
          </h1>
        </Reveal>

        <Reveal delay={0.1}>
          <p className="mt-6 max-w-2xl text-lg text-ink/60 sm:text-xl">
            {hero.subtitle}
          </p>
        </Reveal>

        <Reveal delay={0.15}>
          <div className="mt-9 flex flex-col items-center gap-3 sm:flex-row">
            <Button href={hero.primaryCta.href} variant="primary" size="lg">
              {hero.primaryCta.label}
            </Button>
            <Button href={hero.secondaryCta.href} variant="secondary" size="lg">
              {hero.secondaryCta.label}
            </Button>
          </div>
        </Reveal>

        <Reveal delay={0.2}>
          <ul className="mt-7 flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
            {trustBadges.map((b) => (
              <li key={b} className="flex items-center gap-2 text-sm text-ink/55">
                <CheckDot />
                {b}
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal delay={0.25} className="mt-16 w-full">
          <ChatMock />
        </Reveal>
      </Container>
    </section>
  );
}
