import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";
import OutlineHeading from "@/components/OutlineHeading";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "İletişim — lovefengis",
  description: "İzmir merkezli dijital ajans ve Suite ekibiyle iletişime geç, teklif al.",
};

export default function IletisimPage() {
  return (
    <>
      <Nav />
      <main className="overflow-x-clip bg-background pt-32 text-foreground md:pt-40">
        <section className="px-6 text-center md:px-10">
          <Reveal>
            <span className="text-small uppercase tracking-[0.08em] text-gold">İletişim</span>
            <OutlineHeading className="mt-4">Konuşalım</OutlineHeading>
          </Reveal>
        </section>

        <section className="mx-auto mt-16 grid max-w-[1100px] gap-10 px-6 pb-32 md:grid-cols-2 md:px-10">
          <Reveal>
            <div className="space-y-8">
              <div>
                <h3 className="text-sm uppercase tracking-[0.08em] text-foreground/50">
                  Ajans projesi
                </h3>
                <p className="mt-2 text-xl">Web tasarım, e-ticaret, marka kimliği, chatbot</p>
              </div>
              <div>
                <h3 className="text-sm uppercase tracking-[0.08em] text-foreground/50">
                  Suite demo
                </h3>
                <p className="mt-2 text-xl">CRM + otomasyon + randevu + fatura</p>
              </div>
              <div>
                <h3 className="text-sm uppercase tracking-[0.08em] text-foreground/50">
                  E-posta
                </h3>
                <a href="mailto:ajans@lovefengis.com" className="mt-2 block text-xl text-orange">
                  ajans@lovefengis.com
                </a>
              </div>
              <div>
                <h3 className="text-sm uppercase tracking-[0.08em] text-foreground/50">Konum</h3>
                <p className="mt-2 text-xl">İzmir, Türkiye</p>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <ContactForm />
          </Reveal>
        </section>

        <Footer />
      </main>
    </>
  );
}
