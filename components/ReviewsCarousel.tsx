"use client";

import { useState } from "react";

interface Review {
  who: string;
  headline: string;
  desc: string;
}

function ReviewCard({ r }: { r: Review }) {
  return (
    <>
      <div className="bg-foreground px-6 py-4 text-center">
        <span className="font-medium uppercase tracking-[0.04em] text-background">{r.who}</span>
      </div>
      <div className="flex flex-1 flex-col items-center p-8 text-center">
        <span className="font-display text-4xl text-orange">&ldquo;</span>
        <p className="font-display mt-3 text-2xl uppercase leading-tight">{r.headline}</p>
        <p className="mt-4 text-sm text-foreground/60">{r.desc}</p>
      </div>
    </>
  );
}

/**
 * Reviews section — desktop is a flush 3-up strip (matches source), mobile
 * is a single-card carousel with prev/next arrows (source's own mobile
 * layout, confirmed by cropping its 375w screenshot: one review card plus
 * round arrow buttons either side, not a stacked grid).
 */
export default function ReviewsCarousel({ reviews }: { reviews: Review[] }) {
  const [index, setIndex] = useState(0);
  const prev = () => setIndex((i) => (i - 1 + reviews.length) % reviews.length);
  const next = () => setIndex((i) => (i + 1) % reviews.length);

  return (
    <div className="mx-auto mt-16 w-full max-w-[1400px] text-left">
      {/* Desktop: flush 3-up strip */}
      <div className="hidden overflow-hidden rounded-3xl border border-foreground/10 md:grid md:grid-cols-3">
        {reviews.map((r, i) => (
          <div key={r.who} className={`flex flex-col ${i > 0 ? "border-l border-foreground/10" : ""}`}>
            <ReviewCard r={r} />
          </div>
        ))}
      </div>

      {/* Mobile: single-card carousel */}
      <div className="flex items-center gap-3 md:hidden">
        <button
          type="button"
          onClick={prev}
          aria-label="Önceki yorum"
          className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-foreground/20 transition-colors duration-150 hover:border-orange hover:text-orange"
        >
          ←
        </button>
        <div className="flex flex-1 flex-col overflow-hidden rounded-3xl border border-foreground/10">
          <ReviewCard r={reviews[index]} />
        </div>
        <button
          type="button"
          onClick={next}
          aria-label="Sonraki yorum"
          className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-foreground/20 transition-colors duration-150 hover:border-orange hover:text-orange"
        >
          →
        </button>
      </div>
    </div>
  );
}
