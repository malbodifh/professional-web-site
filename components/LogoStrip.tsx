import Image from "next/image";
import { clientLogos } from "@/lib/content";
import { Container } from "./ui/Container";

export function LogoStrip() {
  // Build one "half" wide enough to exceed the viewport (repeat the set),
  // then duplicate the half so the -50% marquee loops seamlessly with no gap.
  const half = [...clientLogos, ...clientLogos, ...clientLogos];
  const loop = [...half, ...half];

  return (
    <section className="border-y border-ink/5 bg-cream-2 py-10">
      <Container>
        <p className="text-center font-sans text-xs uppercase tracking-[0.18em] text-ink/40">
          Empresas que confían en noren
        </p>
      </Container>

      <div className="marquee-mask group relative mt-7 w-full overflow-hidden">
        <div className="animate-marquee flex w-max items-center group-hover:[animation-play-state:paused]">
          {loop.map((logo, i) => (
            <div
              key={`${logo.name}-${i}`}
              className="flex shrink-0 items-center justify-center px-8 sm:px-12"
            >
              <Image
                src={logo.file}
                alt={logo.name}
                width={120}
                height={32}
                aria-hidden={i >= clientLogos.length}
                className="h-6 w-auto opacity-40 brightness-0 transition hover:opacity-70 sm:h-7"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
