"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";

interface Word {
  text: string;
  color?: string;
}

/**
 * Per-word outline→solid-fill load-in reveal — ported from a fresh live
 * capture of buckssauce.com's hero heading, where unrevealed words render
 * as stroke-only "ghost" text and fill solid as the load animation runs
 * (caught mid-transition: "THE BBQ SAUCE" already outlined, "THAT" still
 * scrambling into place). Not visible in the earlier static screenshots —
 * only surfaced by re-fetching the live page directly.
 */
export default function HeroReveal({ words, className = "" }: { words: Word[]; className?: string }) {
  const ref = useRef<HTMLHeadingElement>(null);

  useGSAP(
    () => {
      if (!ref.current) return;
      const spans = ref.current.querySelectorAll<HTMLElement>("[data-word]");
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        spans.forEach((el) => {
          el.style.color = el.dataset.color || "var(--color-foreground)";
        });
        gsap.set(spans, { y: 0, opacity: 1 });
        return;
      }
      gsap.set(spans, { color: "transparent", y: 12, opacity: 0 });
      spans.forEach((el, i) => {
        gsap.to(el, {
          color: el.dataset.color || "var(--color-foreground)",
          y: 0,
          opacity: 1,
          duration: 0.7,
          ease: "power2.out",
          delay: 0.1 + i * 0.08,
        });
      });
    },
    { scope: ref }
  );

  return (
    <h1 ref={ref} className={className}>
      {words.map((w, i) => (
        <span
          key={i}
          data-word
          data-color={w.color}
          className="inline-block whitespace-pre [-webkit-text-stroke:1px_var(--color-foreground)]"
        >
          {w.text}
          {i < words.length - 1 ? " " : ""}
        </span>
      ))}
    </h1>
  );
}
