import Image from "next/image";
import Link from "next/link";
import { footer } from "@/lib/content";

export function Footer() {
  return (
    <footer className="bg-ink">
      <div className="mx-auto w-full max-w-6xl px-5 sm:px-8">
        {/* Main footer content */}
        <div className="grid gap-12 border-b border-white/8 py-16 sm:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr_1fr_1fr]">
          {/* Brand column */}
          <div className="flex flex-col gap-5 sm:col-span-2 lg:col-span-1">
            <Image
              src="/assets/noren-logo-rounded-black.svg"
              alt="noren"
              width={107}
              height={28}
              className="h-7 w-auto brightness-0 invert"
            />
            <p className="max-w-xs text-sm leading-relaxed text-white/40">
              Creamos software y sitios web a medida para empresas que quieren crecer.
            </p>
          </div>

          {/* Link columns */}
          {footer.columns.map((col) => (
            <div key={col.title} className="flex flex-col gap-4">
              <span className="font-sans text-[11px] uppercase tracking-[0.18em] text-white/30">
                {col.title}
              </span>
              <ul className="flex flex-col gap-3">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-white/50 transition-colors duration-150 hover:text-white/90"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col items-center justify-between gap-4 py-7 sm:flex-row">
          <p className="font-sans text-xs text-white/25">{footer.copyright}</p>
          <div className="flex items-center gap-5">
            <Link
              href="/privacidad"
              className="font-sans text-xs text-white/30 transition-colors hover:text-white/60"
            >
              Privacidad
            </Link>
            <Link
              href="/terminos"
              className="font-sans text-xs text-white/30 transition-colors hover:text-white/60"
            >
              Términos
            </Link>
            <Link
              href="/seguridad"
              className="font-sans text-xs text-white/30 transition-colors hover:text-white/60"
            >
              Seguridad
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
