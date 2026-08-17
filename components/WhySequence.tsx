"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger, useGSAP);

interface WhyItem {
  n: string;
  tag: string;
  title: string;
  desc: string;
}

/**
 * Scroll-pinned, single-feature-at-a-time reveal — ported from source's
 * "WHY BUCKS SAUCE" section, which pins the section and cross-fades one
 * numbered feature (01 → 02 → 03 → 04) at a time as the user scrolls,
 * rather than showing all features as a static grid.
 */
export default function WhySequence({ items }: { items: WhyItem[] }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const stepRefs = useRef<(HTMLDivElement | null)[]>([]);

  useGSAP(
    () => {
      if (!containerRef.current) return;
      const steps = stepRefs.current.filter(Boolean) as HTMLDivElement[];
      if (!steps.length) return;

      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        gsap.set(steps, { opacity: 1, position: "relative" });
        return;
      }

      gsap.set(steps.slice(1), { opacity: 0 });
      gsap.set(steps, { position: "absolute", top: 0, left: 0, width: "100%" });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: `+=${steps.length * 100}%`,
          scrub: 0.6,
          pin: true,
        },
      });

      steps.forEach((step, i) => {
        if (i === 0) return;
        tl.to(steps[i - 1], { opacity: 0, y: -30, duration: 0.5 }, i - 0.5);
        tl.to(step, { opacity: 1, y: 0, duration: 0.5 }, i - 0.5);
      });
    },
    { scope: containerRef }
  );

  return (
    <div ref={containerRef} className="relative flex min-h-screen items-center justify-center px-6 md:px-10">
      <div className="relative mx-auto w-full max-w-2xl text-center">
        {items.map((w, i) => (
          <div
            key={w.n}
            ref={(el) => {
              stepRefs.current[i] = el;
            }}
          >
            <span className="font-display text-6xl text-orange md:text-8xl">{w.n}</span>
            <div className="mt-4">
              <span className="inline-block rounded-full border border-foreground/20 px-4 py-1 text-xs uppercase tracking-[0.08em] text-foreground/70">
                {w.tag}
              </span>
            </div>
            <h3 className="mt-4 text-3xl md:text-4xl">{w.title}</h3>
            <p className="mt-4 text-lg text-foreground/70">{w.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
