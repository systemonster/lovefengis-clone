"use client";

import { useState } from "react";

export default function NewsletterForm() {
  const [status, setStatus] = useState<"idle" | "sent">("idle");

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sent");
  }

  if (status === "sent") {
    return (
      <p className="mt-4 rounded-full border border-gold/40 px-4 py-2.5 text-sm text-gold">
        Teşekkürler, kayıt oldun.
      </p>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="mt-4 flex items-center gap-2 rounded-full border border-foreground/20 py-1.5 pl-4 pr-1.5"
    >
      <input
        type="email"
        required
        placeholder="E-posta adresin"
        className="w-full bg-transparent text-sm text-foreground placeholder:text-foreground/40 focus:outline-none"
      />
      <button
        type="submit"
        aria-label="Gönder"
        className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-orange text-white transition-colors duration-150 hover:bg-orange/90"
      >
        →
      </button>
    </form>
  );
}
