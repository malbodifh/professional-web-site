import { useCases } from "@/lib/content";
import { Section, SectionHeading } from "./ui/Section";
import { Reveal } from "./ui/Reveal";

function BulletCheck() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      aria-hidden
      className="shrink-0 mt-0.5"
    >
      <circle cx="8" cy="8" r="8" fill="#262626" fillOpacity="0.1" />
      <path
        d="M4.8 8.2 6.8 10.2 11.2 5.8"
        stroke="#262626"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

const roleColors: Record<string, string> = {
  "Product Manager": "bg-ink/5 text-ink/70",
  "Data Analyst": "bg-ink/5 text-ink/70",
  "Marketing Operator": "bg-ink/5 text-ink/70",
  "Engineering Manager": "bg-ink/5 text-ink/70",
};

export function UseCases() {
  return (
    <Section className="bg-cream-3">
      <Reveal>
        <SectionHeading
          eyebrow="Servicios"
          title={useCases.heading}
          subtitle="Soluciones a medida para cada necesidad de tu negocio."
        />
      </Reveal>

      <div className="mt-14 grid gap-6 md:grid-cols-2">
        {useCases.items.map((item, i) => (
          <Reveal key={item.role} delay={i * 0.08}>
            <article className="group flex h-full flex-col gap-6 rounded-3xl border border-ink/6 bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_24px_60px_-30px_rgba(26,24,43,0.25)]">
              {/* Role badge */}
              <span
                className={`inline-flex w-fit items-center rounded-full px-3 py-1 font-sans text-[11px] font-medium uppercase tracking-[0.14em] ${roleColors[item.role] ?? "bg-ink/5 text-ink/70"}`}
              >
                {item.role}
              </span>

              {/* Title */}
              <h3 className="font-display text-xl font-bold tracking-tight text-ink">
                {item.title}
              </h3>

              {/* Bullets */}
              <ul className="flex flex-col gap-3">
                {item.bullets.map((bullet) => (
                  <li key={bullet} className="flex items-start gap-3">
                    <BulletCheck />
                    <span className="text-[14px] leading-snug text-ink/65">{bullet}</span>
                  </li>
                ))}
              </ul>
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
