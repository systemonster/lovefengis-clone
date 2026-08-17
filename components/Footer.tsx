import Link from "next/link";
import Reveal from "@/components/Reveal";
import NewsletterForm from "@/components/NewsletterForm";

const NAV_LINKS = [
  { href: "/hizmetler", label: "Hizmetler" },
  { href: "/suite", label: "Suite" },
  { href: "/blog", label: "Blog" },
  { href: "/araclar", label: "Araçlar" },
  { href: "/iletisim", label: "İletişim" },
];

const SOCIALS = [
  {
    href: "https://instagram.com",
    label: "Instagram",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5">
        <rect x="3" y="3" width="18" height="18" rx="5" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="17.5" cy="6.5" r="1" fill="currentColor" />
      </svg>
    ),
  },
  {
    href: "https://linkedin.com",
    label: "LinkedIn",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5">
        <rect x="3" y="3" width="18" height="18" rx="3" stroke="currentColor" strokeWidth="1.5" />
        <circle cx="8" cy="8" r="1.2" fill="currentColor" />
        <path d="M8 11v6M12 11v6M12 13.5c0-1.5 1-2.5 2.5-2.5S17 12 17 13.5V17" stroke="currentColor" strokeWidth="1.5" />
      </svg>
    ),
  },
];

export default function Footer() {
  return (
    <footer id="iletisim" className="mt-24 border-t border-foreground/10 px-6 pt-16 pb-8 md:px-10">
      <Reveal className="mx-auto grid max-w-[1400px] gap-10 md:grid-cols-[auto_1fr_auto_auto] md:items-start">
        <div>
          <span className="font-display text-2xl uppercase">lovefengis</span>
          <p className="mt-2 text-sm text-foreground/50">İzmir · ajans@lovefengis.com</p>
        </div>

        <nav className="flex flex-col gap-2">
          {NAV_LINKS.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="w-fit border-b border-dashed border-foreground/15 pb-1 text-sm text-foreground/70 transition-colors duration-150 hover:text-orange"
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="min-w-[260px]">
          <h3 className="font-display text-xl uppercase">Bültene katıl</h3>
          <p className="mt-2 max-w-xs text-sm text-foreground/50">
            Yeni hizmetler. Suite güncellemeleri. Blog yazıları.
          </p>
          <NewsletterForm />
        </div>

        <div className="flex gap-3 md:flex-col">
          {SOCIALS.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={s.label}
              className="flex h-11 w-11 items-center justify-center rounded-[10px] border border-foreground/20 text-foreground transition-colors duration-150 hover:border-orange hover:text-orange"
            >
              {s.icon}
            </a>
          ))}
        </div>
      </Reveal>

      <div className="mx-auto mt-10 flex max-w-[1400px] flex-col justify-between gap-2 border-t border-foreground/10 pt-6 text-xs text-foreground/40 md:flex-row">
        <span>© {new Date().getFullYear()} lovefengis. Tüm hakları saklıdır.</span>
        <span>Kortave ile inşa edildi</span>
      </div>
    </footer>
  );
}
