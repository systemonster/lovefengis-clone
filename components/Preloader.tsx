"use client";

import { useEffect, useState } from "react";

export default function Preloader() {
  const [visible, setVisible] = useState(true);
  const [fading, setFading] = useState(false);

  useEffect(() => {
    const fadeTimer = setTimeout(() => setFading(true), 700);
    const removeTimer = setTimeout(() => setVisible(false), 1100);
    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(removeTimer);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = visible ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [visible]);

  if (!visible) return null;

  return (
    <div
      className={`fixed inset-0 z-[100] flex flex-col items-center justify-center gap-6 bg-background transition-opacity duration-[400ms] ${
        fading ? "pointer-events-none opacity-0" : "opacity-100"
      }`}
    >
      <span className="font-display text-2xl uppercase tracking-tight text-foreground">
        lovefengis
      </span>
      <div className="flex gap-2">
        {[0, 1, 2].map((i) => (
          <span
            key={i}
            className="h-2 w-2 rounded-full bg-orange"
            style={{
              animation: "fengis-loading-dot 1.1s ease-in-out infinite",
              animationDelay: `${i * 0.15}s`,
            }}
          />
        ))}
      </div>
    </div>
  );
}
