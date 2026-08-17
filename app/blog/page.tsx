import type { Metadata } from "next";
import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";
import OutlineHeading from "@/components/OutlineHeading";
import { POSTS } from "@/lib/posts";

export const metadata: Metadata = {
  title: "Blog — lovefengis",
  description: "AI-SEO, chatbot kurulumu ve dijital büyüme rehberleri.",
};

export default function BlogPage() {
  return (
    <>
      <Nav />
      <main className="overflow-x-clip bg-background pt-32 text-foreground md:pt-40">
        <section className="px-6 text-center md:px-10">
          <Reveal>
            <span className="text-small uppercase tracking-[0.08em] text-gold">Rehberler</span>
            <OutlineHeading className="mt-4">Blog</OutlineHeading>
          </Reveal>
        </section>

        <section className="mx-auto mt-16 grid max-w-[1400px] gap-6 px-6 pb-32 text-left md:grid-cols-3 md:px-10">
          {POSTS.map((p, i) => (
            <Reveal key={p.slug} delay={(i % 3) * 0.08}>
              <Link
                href={`/blog/${p.slug}`}
                className="block h-full rounded-3xl border border-foreground/10 bg-background-lighter p-8 transition-colors duration-150 hover:border-gold/40"
              >
                <span className="text-small uppercase tracking-[0.08em] text-gold">{p.tag}</span>
                <h3 className="mt-4 text-xl leading-snug">{p.title}</h3>
                <p className="mt-3 text-sm text-foreground/60">{p.desc}</p>
              </Link>
            </Reveal>
          ))}
        </section>

        <Footer />
      </main>
    </>
  );
}
