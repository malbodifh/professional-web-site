import Image from "next/image";
import Link from "next/link";
import { portfolio } from "@/lib/content";
import { Section, SectionHeading } from "./ui/Section";
import { Reveal } from "./ui/Reveal";

export function Portfolio() {
  return (
    <Section id="portafolio" className="bg-paper">
      <Reveal>
        <SectionHeading
          eyebrow="Portafolio"
          title={portfolio.heading}
          subtitle={portfolio.subtitle}
        />
      </Reveal>

      <div className="mx-auto mt-14 grid max-w-5xl gap-5 md:grid-cols-2">
        {portfolio.items.map((project, i) => (
          <Reveal key={project.name} delay={i * 0.08}>
            <article className="group flex h-full flex-col overflow-hidden rounded-3xl border border-ink/6 bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_24px_60px_-30px_rgba(26,24,43,0.25)]">
              {/* Imagen / placeholder */}
              {project.image ? (
                <Image
                  src={project.image}
                  alt={`${project.name} — sitio web desarrollado por noren`}
                  width={640}
                  height={400}
                  className="aspect-[16/10] w-full object-cover"
                />
              ) : (
                // TODO: reemplazar con screenshot real del proyecto
                <div className="flex aspect-[16/10] w-full items-center justify-center bg-gradient-to-br from-cream-3 to-cream-2">
                  <span className="font-display text-5xl font-bold text-ink/15">
                    {project.name.charAt(0)}
                  </span>
                </div>
              )}

              <div className="flex flex-1 flex-col gap-3 p-6">
                <h3 className="font-display text-lg font-bold tracking-tight text-ink">
                  {project.name}
                </h3>
                <p className="text-[15px] leading-relaxed text-ink/60">
                  {project.description}
                </p>

                <ul className="mt-1 flex flex-wrap gap-2">
                  {project.tech.map((t) => (
                    <li
                      key={t}
                      className="rounded-full bg-ink/5 px-2.5 py-1 text-xs text-ink/70"
                    >
                      {t}
                    </li>
                  ))}
                </ul>

                <Link
                  href={project.href}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-auto inline-flex items-center gap-1.5 pt-3 text-sm font-medium text-ink transition-colors hover:text-brand"
                >
                  Ver proyecto en vivo
                  <span aria-hidden className="transition-transform group-hover:translate-x-0.5">
                    →
                  </span>
                </Link>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
