import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";
import OutlineHeading from "@/components/OutlineHeading";
import PriceCalculator from "@/components/tools/PriceCalculator";
import PaletteGenerator from "@/components/tools/PaletteGenerator";
import ImageCompressor from "@/components/tools/ImageCompressor";

export const metadata: Metadata = {
  title: "Ücretsiz Araçlar — lovefengis",
  description: "Fiyat hesaplayıcı, görsel sıkıştırma, renk paleti oluşturucu — ücretsiz, çalışan mini araçlar.",
};

const TOOLS = [
  { id: "hesaplayici", name: "Fiyat Hesaplayıcı", desc: "İhtiyacına göre tahmini proje fiyatını gör.", Comp: PriceCalculator },
  { id: "sikistirma", name: "Görsel Sıkıştırma", desc: "Tarayıcında, sunucuya yüklemeden sıkıştırır.", Comp: ImageCompressor },
  { id: "palet", name: "Renk Paleti Oluşturucu", desc: "OKLCH tabanlı 5 tonluk marka paleti üret.", Comp: PaletteGenerator },
];

export default function AraclarPage() {
  return (
    <>
      <Nav />
      <main className="overflow-x-clip bg-background pt-32 text-foreground md:pt-40">
        <section className="px-6 text-center md:px-10">
          <Reveal>
            <span className="text-small uppercase tracking-[0.08em] text-gold">Ücretsiz</span>
            <OutlineHeading className="mt-4">Araçlar</OutlineHeading>
            <p className="mx-auto mt-6 max-w-xl text-foreground/70">
              Kayıt gerektirmeyen, tarayıcında anında çalışan mini araçlar.
            </p>
          </Reveal>
        </section>

        <section className="mx-auto mt-16 flex max-w-[900px] flex-col gap-24 px-6 pb-32 md:px-10">
          {TOOLS.map(({ id, name, desc, Comp }, i) => (
            <Reveal key={id} delay={i * 0.05}>
              <div id={id} className="scroll-mt-28 rounded-3xl border border-foreground/10 bg-background-lighter p-6 md:p-10">
                <h2 className="font-display text-2xl uppercase md:text-3xl">{name}</h2>
                <p className="mt-2 text-foreground/60">{desc}</p>
                <div className="mt-8">
                  <Comp />
                </div>
              </div>
            </Reveal>
          ))}
        </section>

        <Footer />
      </main>
    </>
  );
}
