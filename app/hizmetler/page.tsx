import type { Metadata } from "next";
import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";
import OutlineHeading from "@/components/OutlineHeading";

export const metadata: Metadata = {
  title: "Hizmetler — lovefengis",
  description:
    "Web tasarım, e-ticaret kurulumu, marka kimliği, AI görsel/içerik üretimi ve chatbot entegrasyonu. Sabit fiyatlı paketler ve aylık büyüme retainer'ları.",
};

const PACKAGES = [
  {
    name: "Web Tasarım",
    price: "14.900 TL",
    desc: "Kurumsal / tanıtım sitesi — tasarım, geliştirme, mobil uyumluluk, temel SEO kurulumu.",
    items: ["Özel tasarım", "5–8 sayfa", "İletişim formu", "Temel SEO"],
  },
  {
    name: "E-Ticaret Kurulumu",
    price: "24.900 TL",
    desc: "Shopify veya WooCommerce üzerinde tam kapsamlı mağaza kurulumu.",
    items: ["Shopify / WooCommerce", "Ödeme entegrasyonu", "Kargo entegrasyonu", "Ürün yükleme rehberi"],
  },
  {
    name: "Marka Kimliği + AI İçerik",
    price: "39.900 TL",
    desc: "Logo, marka kılavuzu, AI destekli görsel ve içerik üretim sistemi kurulumu.",
    items: ["Logo & marka kılavuzu", "AI görsel şablonları", "İçerik takvimi", "Sosyal medya kitleri"],
  },
];

const RETAINERS = [
  { name: "Bakım", price: "4.900 TL/ay", desc: "Güncelleme, yedekleme, güvenlik takibi." },
  { name: "SEO", price: "12.900 TL/ay", desc: "Aylık içerik + teknik SEO + raporlama." },
  { name: "Büyüme", price: "80.000 TL/ay", desc: "Tam kapsamlı büyüme: reklam, içerik, CRO, otomasyon." },
];

export default function HizmetlerPage() {
  return (
    <>
      <Nav />
      <main className="overflow-x-clip bg-background pt-32 text-foreground md:pt-40">
        <section className="px-6 text-center md:px-10">
          <Reveal>
            <span className="text-small uppercase tracking-[0.08em] text-gold">Ajans</span>
            <OutlineHeading className="mt-4">Hizmetler</OutlineHeading>
            <p className="mx-auto mt-6 max-w-xl text-foreground/70">
              Proje bazlı, sabit fiyatlı paketler — sonra istersen aylık retainer&apos;a geçersin.
            </p>
          </Reveal>
        </section>

        <section className="mx-auto mt-16 grid max-w-[1400px] gap-6 px-6 text-left md:grid-cols-3 md:px-10">
          {PACKAGES.map((p, i) => (
            <Reveal key={p.name} delay={i * 0.1}>
              <div className="flex h-full flex-col rounded-3xl border border-foreground/10 bg-background-lighter p-8">
                <h3 className="font-display text-2xl uppercase">{p.name}</h3>
                <p className="mt-2 text-2xl text-orange">{p.price}</p>
                <p className="mt-4 text-foreground/70">{p.desc}</p>
                <ul className="mt-6 space-y-2 text-sm text-foreground/60">
                  {p.items.map((it) => (
                    <li key={it} className="flex items-center gap-2">
                      <span className="h-1 w-1 rounded-full bg-gold" />
                      {it}
                    </li>
                  ))}
                </ul>
                <Link href="/iletisim"
                  className="mt-auto pt-8 text-sm font-medium text-orange transition-opacity duration-150 hover:opacity-70"
                >
                  Teklif al →
                </Link>
              </div>
            </Reveal>
          ))}
        </section>

        <section className="mx-auto mt-32 max-w-[1400px] px-6 text-center md:px-10">
          <Reveal>
            <span className="text-small uppercase tracking-[0.08em] text-gold">Aylık</span>
            <h2 className="font-display mt-3 text-4xl uppercase md:text-6xl">Retainer&apos;lar</h2>
          </Reveal>
          <div className="mt-14 grid gap-6 text-left md:grid-cols-3">
            {RETAINERS.map((r, i) => (
              <Reveal key={r.name} delay={i * 0.1}>
                <div className="rounded-3xl border border-foreground/10 p-8">
                  <h3 className="text-2xl">{r.name}</h3>
                  <p className="mt-2 text-xl text-gold">{r.price}</p>
                  <p className="mt-3 text-foreground/70">{r.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        <Footer />
      </main>
    </>
  );
}
