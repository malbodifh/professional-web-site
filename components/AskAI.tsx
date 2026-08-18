import { askAI } from "@/lib/content";
import { Section } from "./ui/Section";
import { Container } from "./ui/Container";
import { Button } from "./ui/Button";
import { Reveal } from "./ui/Reveal";

export function AskAI() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#5c5c5c] to-[#1a1a1a] py-20 sm:py-28">
      {/* Brand glow blobs */}
      <div
        className="pointer-events-none absolute -top-32 left-1/2 -z-0 h-[500px] w-[700px] -translate-x-1/2 rounded-full bg-white/10 blur-[120px]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute bottom-0 left-1/4 -z-0 h-64 w-64 rounded-full bg-white/5 blur-[80px]"
        aria-hidden
      />

      <Container className="relative z-10 flex flex-col items-center text-center">
        <Reveal>
          <span className="font-sans text-xs uppercase tracking-[0.18em] text-white/60">
            Contacto
          </span>
        </Reveal>

        <Reveal delay={0.07}>
          <h2 className="mt-6 max-w-3xl font-display text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-[2.75rem] md:leading-[1.1]">
            {askAI.heading}
          </h2>
        </Reveal>

        <Reveal delay={0.13}>
          <p className="mt-5 max-w-xl text-base text-white/55 sm:text-lg">
            {askAI.body}
          </p>
        </Reveal>

        {/* Command chips */}
        <div className="mt-12 flex w-full max-w-2xl flex-col gap-3">
          {askAI.options.map((option, i) => (
            <Reveal key={i} delay={0.18 + i * 0.07}>
              <div className="group flex items-start gap-4 rounded-2xl border border-white/8 bg-white/[0.04] px-5 py-4 text-left transition-all duration-200 hover:border-white/25 hover:bg-white/[0.1] hover:shadow-[0_0_32px_-8px_rgba(255,255,255,0.18)]">
                {/* Slack-style at-mention indicator */}
                <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-white/10 font-sans text-xs font-bold text-white/80 transition-colors group-hover:bg-white/25">
                  @
                </span>
                <span className="font-sans text-sm leading-relaxed text-white/70 group-hover:text-white/90">
                  {option}
                </span>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.55}>
          <div className="mt-12">
            <Button href={askAI.cta.href} variant="primary" size="lg">
              Agenda una llamada
            </Button>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
