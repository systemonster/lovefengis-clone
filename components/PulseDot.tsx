"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger, useGSAP);

export default function PulseDot({ className = "" }: { className?: string }) {
  const ref = useRef<HTMLSpanElement>(null);

  // Scroll-scrubbed scale/opacity breathing, ported from source's
  // scrollTimeline capture on its span.h-1.5.w-1.5 status indicator
  // (opacity 0.687→0.80→0.65 and scale ~1.03→1.05 across the first 30% of scroll).
  useGSAP(
    () => {
      if (!ref.current) return;
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
      gsap.fromTo(
        ref.current,
        { scale: 1.03, opacity: 0.75 },
        {
          scale: 1.05,
          opacity: 0.95,
          ease: "sine.inOut",
          scrollTrigger: {
            trigger: document.body,
            start: "top top",
            end: "30% top",
            scrub: 0.6,
          },
        }
      );
    },
    { scope: ref }
  );

  return (
    <span ref={ref} className={`relative inline-flex h-1.5 w-1.5 ${className}`}>
      <span
        className="absolute inline-block h-1.5 w-1.5 rounded-full bg-orange"
        style={{ animation: "fengis-loading-dot 1.4s ease-in-out infinite" }}
      />
    </span>
  );
}
