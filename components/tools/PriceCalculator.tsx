"use client";

import Link from "next/link";
import { useMemo, useState } from "react";

const SERVICES = [
  { key: "web", label: "Web Tasarım", base: 14900 },
  { key: "eticaret", label: "E-Ticaret Kurulumu", base: 24900 },
  { key: "marka", label: "Marka Kimliği + AI İçerik", base: 39900 },
] as const;

const ADDONS = [
  { key: "bakim", label: "Aylık Bakım", price: 4900 },
  { key: "seo", label: "Aylık SEO", price: 12900 },
  { key: "chatbot", label: "Chatbot Entegrasyonu", price: 9900 },
] as const;

export default function PriceCalculator() {
  const [service, setService] = useState<(typeof SERVICES)[number]["key"]>("web");
  const [addons, setAddons] = useState<string[]>([]);

  const base = SERVICES.find((s) => s.key === service)!.base;
  const monthly = useMemo(
    () => ADDONS.filter((a) => addons.includes(a.key)).reduce((sum, a) => sum + a.price, 0),
    [addons]
  );

  const toggle = (key: string) =>
    setAddons((prev) => (prev.includes(key) ? prev.filter((k) => k !== key) : [...prev, key]));

  return (
    <div className="space-y-6">
      <div>
        <label className="mb-2 block text-sm text-foreground/60">Proje türü</label>
        <div className="grid gap-3 sm:grid-cols-3">
          {SERVICES.map((s) => (
            <button
              key={s.key}
              type="button"
              onClick={() => setService(s.key)}
              className={`rounded-[10px] border px-4 py-3 text-left text-sm transition-colors duration-150 ${
                service === s.key
                  ? "border-orange bg-orange/10 text-foreground"
                  : "border-foreground/20 text-foreground/70 hover:border-foreground/40"
              }`}
            >
              {s.label}
              <span className="mt-1 block text-xs text-foreground/50">
                {s.base.toLocaleString("tr-TR")} TL&apos;den
              </span>
            </button>
          ))}
        </div>
      </div>

      <div>
        <label className="mb-2 block text-sm text-foreground/60">Aylık ek hizmetler (opsiyonel)</label>
        <div className="grid gap-3 sm:grid-cols-3">
          {ADDONS.map((a) => (
            <label
              key={a.key}
              className={`flex cursor-pointer items-center justify-between rounded-[10px] border px-4 py-3 text-sm transition-colors duration-150 ${
                addons.includes(a.key)
                  ? "border-gold bg-gold/10"
                  : "border-foreground/20 hover:border-foreground/40"
              }`}
            >
              <span>{a.label}</span>
              <input
                type="checkbox"
                checked={addons.includes(a.key)}
                onChange={() => toggle(a.key)}
                className="accent-orange"
              />
            </label>
          ))}
        </div>
      </div>

      <div className="rounded-3xl bg-orange p-8 text-white">
        <p className="text-sm uppercase tracking-[0.08em] opacity-80">Tahmini toplam</p>
        <p className="font-display mt-2 text-4xl uppercase">
          {base.toLocaleString("tr-TR")} TL tek seferlik
        </p>
        {monthly > 0 && (
          <p className="mt-2 text-lg opacity-90">
            + {monthly.toLocaleString("tr-TR")} TL/ay
          </p>
        )}
        <Link href="/iletisim"
          className="mt-6 inline-block rounded-[10px] bg-white px-6 py-3 text-sm font-medium text-background transition-colors duration-150 hover:bg-white/90"
        >
          Bu teklifle iletişime geç
        </Link>
      </div>
    </div>
  );
}
