"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

const LINKS = [
  { href: "/hizmetler", label: "Hizmetler" },
  { href: "/suite", label: "Suite" },
  { href: "/blog", label: "Blog" },
  { href: "/araclar", label: "Araçlar" },
  { href: "/iletisim", label: "İletişim" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      {/* Bar — matches source's fixed opacity/translate intro-reveal on load */}
      <header
        className={`fixed inset-x-0 top-0 z-50 animate-[nav-intro_0.6s_ease-out_both] transition-colors duration-500 ${
          scrolled ? "bg-background/90 backdrop-blur-md border-b border-white/5" : "bg-transparent"
        }`}
      >
        <nav className="mx-auto flex h-16 max-w-[1400px] items-center justify-between px-6 md:h-20 md:px-10">
          <Link href="/" className="font-display text-xl tracking-tight text-foreground md:text-2xl">
            lovefengis
          </Link>
          <div className="flex items-center gap-3">
            <Link
              href="/iletisim"
              className="hidden rounded-[10px] bg-orange px-5 py-2.5 text-sm font-medium text-white transition-colors duration-150 hover:bg-orange/90 md:inline-block"
            >
              Teklif Al
            </Link>
            <button
              type="button"
              aria-label={open ? "Menüyü kapat" : "Menüyü aç"}
              onClick={() => setOpen((v) => !v)}
              className="relative z-50 flex h-10 w-10 flex-col items-center justify-center gap-1.5 rounded-[10px] border border-foreground/20"
            >
              <span
                className={`h-px w-4 transition-all duration-200 ${
                  open ? "translate-y-[3.5px] rotate-45 bg-background" : "bg-foreground"
                }`}
              />
              <span
                className={`h-px w-4 transition-all duration-200 ${
                  open ? "-translate-y-[3.5px] -rotate-45 bg-background" : "bg-foreground"
                }`}
              />
            </button>
          </div>
        </nav>
      </header>

      {/* Full-panel cream slide-in menu — ported from source's fixed top-2.5 right-2.5
          w-[calc(100vw-0.625rem)] h-[calc(100dvh-0.625rem)] rounded-xl bg-foreground drawer */}
      <div
        className={`fixed right-1.25 top-1.25 z-[45] h-[calc(100dvh-0.625rem)] w-[calc(100vw-0.625rem)] overflow-hidden rounded-xl bg-foreground text-background transition-all duration-500 ease-out lg:w-[420px] ${
          open ? "translate-y-0 opacity-100" : "pointer-events-none -translate-y-4 opacity-0"
        }`}
      >
        <div className="flex h-full flex-col justify-between p-8 md:p-12">
          <ul className="space-y-1">
            {LINKS.map((l, i) => (
              <li
                key={l.href}
                className={`overflow-hidden transition-all duration-500 ${
                  open ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
                }`}
                style={{ transitionDelay: open ? `${80 + i * 60}ms` : "0ms" }}
              >
                <Link
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="font-display block py-2 text-4xl uppercase leading-none transition-colors duration-150 hover:text-orange md:text-6xl"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
          <div className="flex flex-col gap-2 text-sm opacity-70">
            <a href="mailto:ajans@lovefengis.com">ajans@lovefengis.com</a>
            <span>İzmir, Türkiye</span>
          </div>
        </div>
      </div>
    </>
  );
}
