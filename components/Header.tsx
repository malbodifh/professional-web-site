"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "motion/react";
import { nav } from "@/lib/content";
import { Button } from "./ui/Button";
import { cn } from "@/lib/cn";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 transition-all duration-300 ease-out",
        scrolled
          ? "bg-transparent px-3 sm:px-4"
          : "bg-transparent px-0 backdrop-blur-md",
      )}
    >
      <div
        className={cn(
          "mx-auto flex items-center justify-between transition-all duration-300 ease-out",
          scrolled
            ? "mt-3 h-14 max-w-6xl rounded-full bg-white/95 px-5 shadow-[0_8px_30px_-12px_rgba(0,0,0,0.18)] ring-1 ring-ink/5 backdrop-blur-md sm:px-6"
            : "mt-0 h-16 max-w-6xl rounded-none bg-transparent px-5 sm:px-8",
        )}
      >
        <Link href="#top" className="flex items-center gap-2">
          <Image
            src="/assets/noren-logo-rounded-black.svg"
            alt="noren"
            width={107}
            height={28}
            className="h-7 w-auto"
            priority
          />
        </Link>

        <nav className="hidden items-center gap-6 md:flex lg:gap-7">
          {nav.links.map((l) => (
            <Link
              key={l.label}
              href={l.href}
              className="text-[15px] font-medium text-ink/70 transition-colors hover:text-ink"
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <Button href={nav.secondaryCta.href} variant="ghost" size="sm">
            {nav.secondaryCta.label}
          </Button>
          <Button href={nav.primaryCta.href} variant="primary" size="sm">
            {nav.primaryCta.label}
          </Button>
        </div>

        <button
          type="button"
          aria-label="Abrir menú"
          onClick={() => setOpen((v) => !v)}
          className="flex h-10 w-10 items-center justify-center rounded-full text-ink md:hidden"
        >
          <div className="flex flex-col gap-1.5">
            <span
              className={cn(
                "h-0.5 w-5 bg-ink transition-all",
                open && "translate-y-2 rotate-45",
              )}
            />
            <span
              className={cn("h-0.5 w-5 bg-ink transition-all", open && "opacity-0")}
            />
            <span
              className={cn(
                "h-0.5 w-5 bg-ink transition-all",
                open && "-translate-y-2 -rotate-45",
              )}
            />
          </div>
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden border-t border-ink/5 bg-cream md:hidden"
          >
            <div className="flex flex-col gap-1 px-5 py-4">
              {nav.links.map((l) => (
                <Link
                  key={l.label}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="rounded-lg px-3 py-2.5 text-base font-medium text-ink/80 hover:bg-ink/5"
                >
                  {l.label}
                </Link>
              ))}
              <div className="mt-2 flex flex-col gap-2">
                <Button href={nav.secondaryCta.href} variant="secondary" size="md">
                  {nav.secondaryCta.label}
                </Button>
                <Button href={nav.primaryCta.href} variant="primary" size="md">
                  {nav.primaryCta.label}
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
