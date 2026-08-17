"use client";

import { useRef, useState } from "react";

interface Result {
  originalSize: number;
  compressedSize: number;
  url: string;
  name: string;
}

export default function ImageCompressor() {
  const [result, setResult] = useState<Result | null>(null);
  const [quality, setQuality] = useState(0.7);
  const [busy, setBusy] = useState(false);
  const fileRef = useRef<HTMLInputElement>(null);

  const compress = (file: File) => {
    setBusy(true);
    const img = new Image();
    const reader = new FileReader();
    reader.onload = () => {
      img.onload = () => {
        const canvas = document.createElement("canvas");
        canvas.width = img.width;
        canvas.height = img.height;
        const ctx = canvas.getContext("2d");
        ctx?.drawImage(img, 0, 0);
        canvas.toBlob(
          (blob) => {
            if (!blob) return;
            const url = URL.createObjectURL(blob);
            setResult({
              originalSize: file.size,
              compressedSize: blob.size,
              url,
              name: file.name.replace(/\.[^.]+$/, "") + "-sikistirildi.jpg",
            });
            setBusy(false);
          },
          "image/jpeg",
          quality
        );
      };
      img.src = reader.result as string;
    };
    reader.readAsDataURL(file);
  };

  const fmt = (bytes: number) => `${(bytes / 1024).toFixed(0)} KB`;

  return (
    <div className="space-y-6">
      <div>
        <label className="mb-2 flex items-center justify-between text-sm text-foreground/60">
          <span>Kalite</span>
          <span>{Math.round(quality * 100)}%</span>
        </label>
        <input
          type="range"
          min={0.1}
          max={1}
          step={0.05}
          value={quality}
          onChange={(e) => setQuality(Number(e.target.value))}
          className="w-full accent-orange"
        />
      </div>

      <input
        ref={fileRef}
        type="file"
        accept="image/*"
        className="hidden"
        onChange={(e) => {
          const file = e.target.files?.[0];
          if (file) compress(file);
        }}
      />
      <button
        type="button"
        onClick={() => fileRef.current?.click()}
        disabled={busy}
        className="w-full rounded-[10px] border border-dashed border-foreground/30 px-6 py-10 text-center text-sm text-foreground/60 transition-colors duration-150 hover:border-orange hover:text-foreground disabled:opacity-50"
      >
        {busy ? "Sıkıştırılıyor…" : "Görsel seçmek için tıkla"}
      </button>

      {result && (
        <div className="rounded-3xl border border-foreground/10 bg-background-lighter p-6">
          <div className="flex items-center justify-between text-sm">
            <span className="text-foreground/60">Önce: {fmt(result.originalSize)}</span>
            <span className="text-gold">
              Sonra: {fmt(result.compressedSize)} (
              {Math.round((1 - result.compressedSize / result.originalSize) * 100)}% küçüldü)
            </span>
          </div>
          <a
            href={result.url}
            download={result.name}
            className="mt-4 inline-block w-full rounded-[10px] bg-orange px-6 py-3 text-center text-sm font-medium text-white transition-colors duration-150 hover:bg-orange/90"
          >
            İndir
          </a>
        </div>
      )}
    </div>
  );
}
