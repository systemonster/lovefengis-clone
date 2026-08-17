"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger, useGSAP);

interface RevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  as?: "div" | "section";
}

export default function Reveal({ children, className, delay = 0, as = "div" }: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const Tag = as;

  useGSAP(
    () => {
      if (!ref.current) return;
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        gsap.set(ref.current, { opacity: 1, y: 0 });
        return;
      }
      gsap.fromTo(
        ref.current,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.9,
          delay,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ref.current,
            start: "top 85%",
            once: true,
          },
        }
      );
    },
    { scope: ref }
  );

  return (
    <Tag ref={ref} className={className}>
      {children}
    </Tag>
  );
}
