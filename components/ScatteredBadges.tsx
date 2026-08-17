const BADGES = [
  { label: "KVKK Uyumlu", rotate: "-rotate-3" },
  { label: "Türkiye Sunucusu", rotate: "rotate-2" },
  { label: "Sabit Fiyat", rotate: "-rotate-2" },
  { label: "7/24 Destek", rotate: "rotate-3" },
];

export default function ScatteredBadges() {
  return (
    <div className="mt-16 flex flex-wrap items-center justify-center gap-4 md:gap-6">
      {BADGES.map((b) => (
        <div
          key={b.label}
          className={`${b.rotate} rounded-xl border border-foreground/15 bg-background-lighter px-5 py-3 text-sm uppercase tracking-[0.04em] text-foreground/80 transition-transform duration-300 hover:rotate-0`}
        >
          {b.label}
        </div>
      ))}
    </div>
  );
}
