import Image from "next/image";
import { testimonials } from "@/lib/content";
import { cn } from "@/lib/cn";
import { Section, SectionHeading } from "./ui/Section";
import { Reveal } from "./ui/Reveal";

function QuoteIcon() {
  return (
    <svg width="32" height="24" viewBox="0 0 32 24" fill="none" aria-hidden>
      <path
        d="M0 24V14.4C0 10.56 1.06667 7.30667 3.2 4.64C5.38667 1.92 8.42667 0.213333 12.32 0L13.6 2.72C10.88 3.30667 8.85333 4.56 7.52 6.48C6.24 8.4 5.6 10.4 5.6 12.48H9.6V24H0ZM18.4 24V14.4C18.4 10.56 19.4667 7.30667 21.6 4.64C23.7867 1.92 26.8267 0.213333 30.72 0L32 2.72C29.28 3.30667 27.2533 4.56 25.92 6.48C24.64 8.4 24 10.4 24 12.48H28V24H18.4Z"
        fill="#262626"
        fillOpacity="0.15"
      />
    </svg>
  );
}

export function Testimonials() {
  return (
    <Section className="bg-white">
      <Reveal>
        <SectionHeading
          eyebrow="Prueba social"
          title="Proyectos que demuestran lo que hacemos"
          subtitle="Dos soluciones con enfoques distintos, creadas a medida para comunicar, convertir y crecer."
        />
      </Reveal>

      <div className="mx-auto mt-14 grid max-w-5xl gap-6 md:grid-cols-2">
        {testimonials.map((t, i) => (
          <Reveal key={t.name} delay={i * 0.08}>
            <article className="group flex h-full flex-col gap-6 rounded-3xl border border-ink/6 bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_24px_60px_-30px_rgba(26,24,43,0.25)]">
              <QuoteIcon />
              <blockquote className="flex-1">
                <p className="text-[15px] leading-relaxed text-ink/70">
                  &ldquo;{t.quote}&rdquo;
                </p>
              </blockquote>
              <footer className="flex items-center gap-3 border-t border-ink/6 pt-5">
                <Image
                  src={t.logo}
                  alt={`Logo de ${t.name} — cliente de noren`}
                  width={44}
                  height={44}
                  className={cn(
                    "h-11 w-11 shrink-0 rounded-xl object-contain ring-2 ring-ink/8",
                    t.logoClassName,
                  )}
                />
                <div className="flex flex-col">
                  <span className="font-display text-sm font-bold text-ink">
                    {t.name}
                  </span>
                  <span className="text-xs text-ink/50">
                    {t.context}
                  </span>
                </div>
              </footer>
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
