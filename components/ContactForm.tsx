"use client";

import { useState } from "react";

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    setTimeout(() => setStatus("sent"), 500);
  }

  if (status === "sent") {
    return (
      <div className="flex h-full flex-col items-center justify-center rounded-3xl border border-gold/30 bg-background-lighter p-8 text-center">
        <span className="font-display text-2xl uppercase text-gold">Teşekkürler</span>
        <p className="mt-3 text-foreground/70">
          Mesajın bize ulaştı, en kısa sürede dönüş yapacağız.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4 rounded-3xl border border-foreground/10 bg-background-lighter p-8">
      <div>
        <label className="mb-1.5 block text-sm text-foreground/60">Ad Soyad</label>
        <input
          type="text"
          required
          className="w-full rounded-[10px] border border-foreground/20 bg-transparent px-4 py-3 text-foreground focus:border-orange focus:outline-none"
        />
      </div>
      <div>
        <label className="mb-1.5 block text-sm text-foreground/60">E-posta</label>
        <input
          type="email"
          required
          className="w-full rounded-[10px] border border-foreground/20 bg-transparent px-4 py-3 text-foreground focus:border-orange focus:outline-none"
        />
      </div>
      <div>
        <label className="mb-1.5 block text-sm text-foreground/60">İlgi alanı</label>
        <select className="w-full rounded-[10px] border border-foreground/20 bg-transparent px-4 py-3 text-foreground focus:border-orange focus:outline-none">
          <option className="bg-background">Ajans projesi</option>
          <option className="bg-background">Suite demo</option>
          <option className="bg-background">Diğer</option>
        </select>
      </div>
      <div>
        <label className="mb-1.5 block text-sm text-foreground/60">Mesaj</label>
        <textarea
          rows={4}
          required
          className="w-full rounded-[10px] border border-foreground/20 bg-transparent px-4 py-3 text-foreground focus:border-orange focus:outline-none"
        />
      </div>
      <button
        type="submit"
        disabled={status === "sending"}
        className="w-full rounded-[10px] bg-orange px-6 py-3.5 text-base font-medium text-white transition-colors duration-150 hover:bg-orange/90 disabled:cursor-not-allowed disabled:opacity-60"
      >
        {status === "sending" ? "Gönderiliyor…" : "Gönder"}
      </button>
    </form>
  );
}
