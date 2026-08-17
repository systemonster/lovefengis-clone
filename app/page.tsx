import Link from "next/link";
import Image from "next/image";
import Nav from "@/components/Nav";
import Reveal from "@/components/Reveal";
import PulseDot from "@/components/PulseDot";
import OutlineHeading from "@/components/OutlineHeading";
import ScatteredBadges from "@/components/ScatteredBadges";
import HeroReveal from "@/components/HeroReveal";
import Footer from "@/components/Footer";
import WhySequence from "@/components/WhySequence";
import ReviewsCarousel from "@/components/ReviewsCarousel";

const OFFERS = [
  {
    tag: "Ajans",
    title: "Proje Bazlı Ajans Hizmetleri",
    desc: "Web tasarım, Shopify/WooCommerce kurulumu, marka kimliği, AI görsel/içerik üretimi, chatbot entegrasyonu.",
    price: "14.900 – 39.900 TL tek seferlik",
    bg: "bg-[#d9b26b]",
    fg: "text-background",
    href: "/hizmetler",
    image: "https://raw.githubusercontent.com/systemonster/lovefengis-clone/master/public/images/offer-ajans.jpg",
  },
  {
    tag: "SaaS",
    title: "Suite",
    desc: "KVKK uyumlu, Türkiye sunucularında barınan CRM + otomasyon + randevu + fatura paketi. Klinik, hukuk, emlak, otel, e-ticaret ve finans için hazır versiyonlar.",
    price: "Sabit aylık TL fiyat",
    bg: "bg-orange",
    fg: "text-white",
    href: "/suite",
    image: "https://raw.githubusercontent.com/systemonster/lovefengis-clone/master/public/images/offer-suite.jpg",
  },
  {
    tag: "Ücretsiz",
    title: "Mini Araçlar & Rehberler",
    desc: "Fiyat hesaplayıcı, görsel sıkıştırma, renk paleti oluşturucu — artı AI-SEO ve chatbot kurulum rehberleri.",
    price: "0 TL",
    bg: "bg-red",
    fg: "text-white",
    href: "/araclar",
    image: "https://raw.githubusercontent.com/systemonster/lovefengis-clone/master/public/images/offer-araclar.jpg",
  },
];

const WHY = [
  {
    n: "01",
    tag: "Küçük ekip",
    title: "Küçük ekip, hızlı iş",
    desc: "Birkaç kişilik odaklı ekip — katman yok, doğrudan biz üretiyoruz.",
  },
  {
    n: "02",
    tag: "KVKK & TR sunucu",
    title: "Verin Türkiye'de kalır",
    desc: "Zapier, HubSpot, Mailchimp, Calendly gibi yabancı araçlara bağımlı kalmadan aynı işi görürsünüz.",
  },
  {
    n: "03",
    tag: "Sabit fiyat",
    title: "Şeffaf sabit fiyat",
    desc: "Sürpriz fatura yok — tek seferlik paketler ve aylık retainer'lar baştan net.",
  },
  {
    n: "04",
    tag: "Meslek bazlı",
    title: "Sektörüne özel hazır",
    desc: "Klinik, hukuk, emlak, otel/restoran, e-ticaret, finans — Suite her biri için hazır kurulur.",
  },
];

const REVIEWS = [
  {
    who: "Klinik sahibi, İzmir",
    headline: "Döviz faturamız bitti.",
    desc: "Suite'e geçtikten sonra randevu ve fatura takibini tek yerden yönetiyoruz. Yabancı araçlara ödediğimiz döviz faturası bitti.",
  },
  {
    who: "E-ticaret markası kurucusu",
    headline: "Fiyat baştan belliydi.",
    desc: "Ajans paketiyle e-ticaretimizi iki haftada kurdular, sonra aylık büyüme retainer'ına geçtik. Sürpriz fatura hiç olmadı.",
  },
  {
    who: "Emlak ofisi",
    headline: "Bir haftada başladık.",
    desc: "Sitedeki ücretsiz fiyat hesaplayıcıdan geldik, teklif aldık, bir hafta içinde çalışmaya başladık.",
  },
];

function Divider() {
  return (
    <div className="flex justify-center py-16 opacity-30">
      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" className="text-foreground">
        <path
          d="M12 2v20M2 12h20"
          stroke="currentColor"
          strokeWidth="1"
          strokeLinecap="round"
          transform="rotate(45 12 12)"
        />
      </svg>
    </div>
  );
}

export default function Home() {
  return (
    <>
      <Nav />
      <main id="top" className="overflow-x-clip bg-background text-foreground">
        {/* HERO */}
        <section className="relative flex min-h-screen flex-col items-center justify-center px-6 pt-24 text-center md:px-10">
          <div className="mx-auto w-full max-w-4xl">
            <Reveal className="mb-6 flex items-center justify-center gap-2 text-small uppercase tracking-[0.08em] text-gold">
              <PulseDot />
              İzmir merkezli dijital ajans + SaaS
            </Reveal>
            <HeroReveal
              className="font-display text-100 mx-auto max-w-4xl uppercase tracking-[-0.02em]"
              words={[
                { text: "Diğer" },
                { text: "ajansları" },
                { text: "paniğe" },
                { text: "düşüren" },
                { text: "dijital", color: "var(--color-orange)" },
                { text: "ekip", color: "var(--color-orange)" },
              ]}
            />
            <Reveal delay={0.15}>
              <p className="mx-auto mt-8 max-w-xl text-xl text-foreground/70">
                Bir yanda proje bazlı ajans işleri, diğer yanda kendi ürettiğimiz
                Suite — KVKK uyumlu, Türkiye sunucularında barınan CRM +
                otomasyon paketi. Hepsi tek çatı altında.
              </p>
            </Reveal>
            <Reveal delay={0.3} className="mt-10 flex flex-wrap justify-center gap-4">
              <a
                href="#suite"
                className="rounded-[10px] bg-orange px-7 py-3.5 text-base font-medium text-white transition-colors duration-150 hover:bg-orange/90"
              >
                Suite&apos;i incele
              </a>
              <a
                href="#hizmetler"
                className="rounded-[10px] border border-foreground/20 px-7 py-3.5 text-base font-medium text-foreground transition-colors duration-150 hover:border-gold hover:text-gold"
              >
                Ajans hizmetlerine bak
              </a>
            </Reveal>
            <Reveal delay={0.45}>
              <ScatteredBadges />
            </Reveal>
          </div>
        </section>

        <Divider />

        {/* CHOOSE YOUR WEAPON */}
        <section id="hizmetler" className="flex flex-col items-center px-6 py-12 text-center md:px-10">
          <Reveal>
            <span className="text-2xl uppercase tracking-[0.04em] text-foreground/60">
              Seç
            </span>
            <OutlineHeading className="mt-2">Silahını</OutlineHeading>
          </Reveal>

          <div className="mt-16 grid w-full max-w-[1400px] gap-6 text-left md:grid-cols-3">
            {OFFERS.map((o, i) => (
              <Reveal key={o.title} delay={i * 0.1}>
                <a
                  href={o.href}
                  className={`flex h-full flex-col overflow-hidden rounded-3xl ${o.bg} ${o.fg} transition-transform duration-300 hover:-translate-y-1`}
                >
                  <div className="relative h-56 w-full overflow-hidden">
                    <Image
                      src={o.image}
                      alt={o.title}
                      fill
                      sizes="(min-width: 768px) 33vw, 100vw"
                      className="object-cover"
                    />
                  </div>
                  <div className="flex flex-1 flex-col p-8 pt-0">
                    <span className="block text-small font-medium uppercase tracking-[0.08em] opacity-70">
                      {o.tag}
                    </span>
                    <h3 className="font-display mt-2 text-2xl uppercase">{o.title}</h3>
                    <p className="mt-4 text-base opacity-80">{o.desc}</p>
                    <p className="mt-6 text-sm font-medium opacity-70">{o.price}</p>
                  </div>
                </a>
              </Reveal>
            ))}
          </div>
        </section>

        {/* WHY LOVEFENGIS — scroll-pinned single-feature sequence, matches source */}
        <section id="suite" className="mt-24 md:mt-32">
          <Reveal className="flex flex-col items-center px-6 text-center md:px-10">
            <span className="mx-auto max-w-md text-sm uppercase tracking-[0.08em] text-gold">
              Büyük araçlar aylık döviz faturası gönderir biz göndermeyiz
            </span>
            <OutlineHeading className="mt-4">Neden Lovefengis</OutlineHeading>
          </Reveal>

          <WhySequence items={WHY} />
        </section>

        {/* SPLIT CTA */}
        <section className="mt-24 px-6 py-12 md:mt-38 md:px-10">
          <Reveal>
            <div className="mx-auto grid max-w-[1400px] gap-2.5 overflow-hidden rounded-3xl bg-background-lighter lg:grid-cols-2">
              <div className="flex flex-col justify-center gap-6 p-10 md:p-16">
                <span className="text-small uppercase tracking-[0.08em] text-gold">
                  Suite&apos;i dene
                </span>
                <h3 className="font-display text-3xl uppercase leading-[1.05] md:text-5xl">
                  Zapier&apos;e ödediğin dövizi biz burada tutalım
                </h3>
                <p className="text-foreground/70">
                  KVKK uyumlu, Türkiye sunucularında barınan CRM + otomasyon + randevu + fatura paketi. Sektörüne özel hazır kurulum, sabit aylık TL fiyat.
                </p>
                <Link href="/iletisim"
                  className="w-fit rounded-[10px] bg-orange px-7 py-3.5 text-base font-medium text-white transition-colors duration-150 hover:bg-orange/90"
                >
                  Ücretsiz dene
                </Link>
              </div>
              <div className="flex min-h-[280px] items-center justify-center bg-orange p-10">
                <div className="grid grid-cols-2 gap-4 text-center text-white">
                  {["Klinik", "Hukuk", "Emlak", "Otel", "E-ticaret", "Finans"].map((v) => (
                    <span
                      key={v}
                      className="rounded-xl border border-white/25 px-5 py-3 text-sm uppercase tracking-[0.04em]"
                    >
                      {v}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>
        </section>

        {/* REVIEWS */}
        <section className="mt-24 flex flex-col items-center px-6 py-12 text-center md:mt-38 md:px-10">
          <Reveal>
            <OutlineHeading>Yorumlar</OutlineHeading>
          </Reveal>
          <Reveal className="w-full">
            <ReviewsCarousel reviews={REVIEWS} />
          </Reveal>
        </section>

        <Footer />
      </main>
    </>
  );
}
