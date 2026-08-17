"use client";

import { useState } from "react";

function makeShade(hue: number, lightness: number, chroma: number) {
  return `oklch(${lightness}% ${chroma} ${hue})`;
}

function generatePalette(hue: number) {
  return [
    { name: "Arka Plan", color: makeShade(hue, 10, 0.02) },
    { name: "Yüzey", color: makeShade(hue, 18, 0.03) },
    { name: "Vurgu Koyu", color: makeShade(hue, 45, 0.16) },
    { name: "Vurgu", color: makeShade(hue, 62, 0.19) },
    { name: "Metin", color: makeShade(hue, 92, 0.03) },
  ];
}

export default function PaletteGenerator() {
  const [hue, setHue] = useState(28); // orange-ish default, matches brand
  const [copied, setCopied] = useState<string | null>(null);
  const palette = generatePalette(hue);

  const copy = (color: string) => {
    navigator.clipboard?.writeText(color);
    setCopied(color);
    setTimeout(() => setCopied(null), 1200);
  };

  return (
    <div className="space-y-6">
      <div>
        <label className="mb-2 flex items-center justify-between text-sm text-foreground/60">
          <span>Ana ton (hue)</span>
          <span>{hue}°</span>
        </label>
        <input
          type="range"
          min={0}
          max={360}
          value={hue}
          onChange={(e) => setHue(Number(e.target.value))}
          className="w-full accent-orange"
        />
      </div>

      <div className="grid grid-cols-2 gap-3 sm:grid-cols-5">
        {palette.map((p) => (
          <button
            key={p.name}
            type="button"
            onClick={() => copy(p.color)}
            className="group text-left"
          >
            <div
              className="h-20 w-full rounded-[10px] border border-foreground/10 transition-transform duration-150 group-hover:scale-[1.03]"
              style={{ background: p.color }}
            />
            <p className="mt-2 text-xs text-foreground/70">{p.name}</p>
            <p className="text-[11px] text-foreground/40">
              {copied === p.color ? "Kopyalandı!" : p.color}
            </p>
          </button>
        ))}
      </div>
    </div>
  );
}
