"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { faq } from "@/lib/content";
import { Section, SectionHeading } from "./ui/Section";
import { Reveal } from "./ui/Reveal";
import { cn } from "@/lib/cn";

function FAQItem({
  item,
  isOpen,
  onToggle,
}: {
  item: { q: string; a: string };
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <div
      className={cn(
        "rounded-2xl border transition-all duration-200",
        isOpen
          ? "border-brand/20 bg-brand/[0.03] shadow-[0_4px_24px_-8px_rgba(23,23,23,0.12)]"
          : "border-ink/6 bg-white hover:border-ink/12",
      )}
    >
      <button
        onClick={onToggle}
        aria-expanded={isOpen}
        className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
      >
        <span className="font-display text-[15px] font-semibold text-ink sm:text-base">
          {item.q}
        </span>
        {/* Chevron / plus-minus indicator */}
        <span
          className={cn(
            "flex h-8 w-8 shrink-0 items-center justify-center rounded-full border transition-all duration-300",
            isOpen
              ? "border-brand/30 bg-brand/10 text-brand"
              : "border-ink/10 bg-white text-ink/40",
          )}
          aria-hidden
        >
          <svg
            width="14"
            height="14"
            viewBox="0 0 14 14"
            fill="none"
            className={cn("transition-transform duration-300", isOpen && "rotate-180")}
          >
            <path
              d="M2.5 5 7 9.5 11.5 5"
              stroke="currentColor"
              strokeWidth="1.7"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </span>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            key="answer"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <div className="px-6 pb-6 pt-0">
              <div className="border-t border-ink/6 pt-4">
                <p className="text-[15px] leading-relaxed text-ink/60">{item.a}</p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  function toggle(i: number) {
    setOpenIndex(openIndex === i ? null : i);
  }

  return (
    <Section id="resources" className="bg-white">
      <Reveal>
        <SectionHeading
          eyebrow="Preguntas"
          title={faq.heading}
          subtitle="Todo lo que necesitas saber antes de empezar tu proyecto."
        />
      </Reveal>

      <div className="mx-auto mt-14 max-w-2xl">
        <Reveal delay={0.08}>
          <div className="flex flex-col gap-3">
            {faq.items.map((item, i) => (
              <FAQItem
                key={i}
                item={item}
                isOpen={openIndex === i}
                onToggle={() => toggle(i)}
              />
            ))}
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
