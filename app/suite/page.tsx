import type { Metadata } from "next";
import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";
import OutlineHeading from "@/components/OutlineHeading";

export const metadata: Metadata = {
  title: "Suite — lovefengis",
  description:
    "KVKK uyumlu, Türkiye sunucularında barınan CRM + otomasyon + randevu + fatura paketi. Klinik, hukuk, emlak, otel/restoran, e-ticaret ve finans için hazır versiyonlar.",
};

const VERTICALS = [
  { name: "Klinik", desc: "Hasta randevu takvimi, tedavi takibi, otomatik hatırlatma SMS." },
  { name: "Hukuk", desc: "Dava/dosya takibi, müvekkil CRM, randevu ve fatura yönetimi." },
  { name: "Emlak", desc: "Portföy takibi, müşteri CRM, otomatik ilan/randevu hatırlatma." },
  { name: "Otel / Restoran", desc: "Rezervasyon takvimi, misafir CRM, otomatik teyit mesajları." },
  { name: "E-ticaret", desc: "Sipariş + müşteri CRM, otomatik takip e-postaları, fatura entegrasyonu." },
  { name: "Finans", desc: "Danışan CRM, randevu takvimi, güvenli belge/fatura yönetimi." },
];

const MODULES = [
  { n: "01", title: "CRM", desc: "Müşteri/hasta/müvekkil kayıtları tek yerde, segmentli listeler." },
  { n: "02", title: "Otomasyon", desc: "Zapier'in yaptığını Türkiye sunucusunda, KVKK uyumlu yapar." },
  { n: "03", title: "Randevu", desc: "Online randevu takvimi + otomatik SMS/e-posta hatırlatma." },
  { n: "04", title: "Fatura", desc: "e-Fatura/e-Arşiv entegrasyonu, otomatik tekrarlayan faturalama." },
];

export default function SuitePage() {
  return (
    <>
      <Nav />
      <main className="overflow-x-clip bg-background pt-32 text-foreground md:pt-40">
        <section className="px-6 text-center md:px-10">
          <Reveal>
            <span className="text-small uppercase tracking-[0.08em] text-gold">
              KVKK uyumlu · Türkiye sunucusu
            </span>
            <OutlineHeading className="mt-4">Suite</OutlineHeading>
            <p className="mx-auto mt-6 max-w-xl text-foreground/70">
              Zapier, HubSpot, Mailchimp, Calendly&apos;nin yerine geçen; CRM, otomasyon,
              randevu ve fatura özelliklerini tek pakette toplayan Türkiye SaaS&apos;ı.
            </p>
            <Link href="/iletisim"
              className="mt-8 inline-block rounded-[10px] bg-orange px-7 py-3.5 text-base font-medium text-white transition-colors duration-150 hover:bg-orange/90"
            >
              Ücretsiz dene
            </Link>
          </Reveal>
        </section>

        {/* MODULES */}
        <section className="mx-auto mt-32 max-w-[1200px] px-6 md:px-10">
          <div className="grid gap-x-10 gap-y-14 text-left md:grid-cols-2">
            {MODULES.map((m, i) => (
              <Reveal key={m.n} delay={i * 0.08}>
                <div className="flex items-start gap-6">
                  <span className="font-display text-4xl text-orange">{m.n}</span>
                  <div>
                    <h3 className="text-2xl">{m.title}</h3>
                    <p className="mt-2 text-foreground/70">{m.desc}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        {/* VERTICALS */}
        <section className="mx-auto mt-32 max-w-[1400px] px-6 text-center md:px-10">
          <Reveal>
            <span className="text-small uppercase tracking-[0.08em] text-gold">
              Sektörüne özel
            </span>
            <h2 className="font-display mt-3 text-4xl uppercase md:text-6xl">Hazır versiyonlar</h2>
          </Reveal>
          <div className="mt-14 grid gap-6 text-left md:grid-cols-3">
            {VERTICALS.map((v, i) => (
              <Reveal key={v.name} delay={i * 0.07}>
                <div className="rounded-3xl border border-foreground/10 bg-background-lighter p-8 transition-colors duration-150 hover:border-orange/40">
                  <h3 className="font-display text-xl uppercase">{v.name}</h3>
                  <p className="mt-3 text-foreground/70">{v.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        {/* PRICING NOTE */}
        <section className="mx-auto mt-32 max-w-[1000px] px-6 pb-12 text-center md:px-10">
          <Reveal>
            <div className="rounded-3xl bg-orange px-8 py-16 text-white md:px-16">
              <h2 className="font-display text-3xl uppercase md:text-5xl">
                Sabit aylık TL fiyat
              </h2>
              <p className="mx-auto mt-4 max-w-md opacity-85">
                Döviz kuru yok, kullanıcı başı gizli ücret yok. Sektörüne göre paket, tek fatura.
              </p>
              <Link href="/iletisim"
                className="mt-8 inline-block rounded-[10px] bg-white px-7 py-3.5 text-base font-medium text-background transition-colors duration-150 hover:bg-white/90"
              >
                Fiyat teklifi al
              </Link>
            </div>
          </Reveal>
        </section>

        <Footer />
      </main>
    </>
  );
}
