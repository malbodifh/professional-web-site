import Image from "next/image";
import Link from "next/link";

export function LegalPage({
  eyebrow,
  title,
  intro,
  children,
}: {
  eyebrow: string;
  title: string;
  intro: string;
  children: React.ReactNode;
}) {
  return (
    <main className="min-h-screen bg-cream">
      <header className="border-b border-ink/6 bg-white/80 backdrop-blur-md">
        <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-5 sm:px-8">
          <Link href="/" aria-label="Volver al inicio de noren">
            <Image
              src="/assets/noren-logo-rounded-black.svg"
              alt="noren"
              width={107}
              height={28}
              className="h-7 w-auto"
              priority
            />
          </Link>
          <Link
            href="/"
            className="rounded-full px-4 py-2 text-sm font-medium text-ink/70 transition-colors hover:bg-ink/5 hover:text-ink focus:outline-none focus-visible:ring-2 focus-visible:ring-brand/40"
          >
            ← Volver al sitio
          </Link>
        </div>
      </header>

      <article className="mx-auto w-full max-w-3xl px-5 py-16 sm:px-8 sm:py-24">
        <p className="font-sans text-xs uppercase tracking-[0.18em] text-ink/45">
          {eyebrow}
        </p>
        <h1 className="mt-5 font-display text-4xl font-bold tracking-tight text-ink sm:text-5xl">
          {title}
        </h1>
        <p className="mt-6 max-w-2xl text-base leading-relaxed text-ink/65 sm:text-lg">
          {intro}
        </p>
        <p className="mt-5 text-sm text-ink/45">
          Última actualización: 17 de agosto de 2026.
        </p>

        <div className="mt-14 space-y-11 text-[15px] leading-relaxed text-ink/70">
          {children}
        </div>

        <div className="mt-16 border-t border-ink/8 pt-8">
          <Link
            href="/"
            className="inline-flex items-center gap-2 rounded-full bg-ink px-5 py-3 text-sm font-medium text-white transition-transform hover:-translate-y-0.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand/40"
          >
            Volver al sitio principal <span aria-hidden>→</span>
          </Link>
        </div>
      </article>
    </main>
  );
}

export function LegalSection({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section>
      <h2 className="font-display text-xl font-bold tracking-tight text-ink">{title}</h2>
      <div className="mt-3 space-y-4">{children}</div>
    </section>
  );
}
