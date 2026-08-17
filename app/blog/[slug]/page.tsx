import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";
import { POSTS, getPost } from "@/lib/posts";

export function generateStaticParams() {
  return POSTS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};
  return { title: `${post.title} — lovefengis`, description: post.desc };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  return (
    <>
      <Nav />
      <main className="overflow-x-clip bg-background pt-32 text-foreground md:pt-40">
        <article className="mx-auto max-w-[760px] px-6 pb-32 md:px-10">
          <Reveal>
            <span className="text-small uppercase tracking-[0.08em] text-gold">{post.tag}</span>
            <h1 className="font-display mt-4 text-3xl uppercase leading-tight md:text-5xl">
              {post.title}
            </h1>
            <p className="mt-6 text-lg text-foreground/70">{post.desc}</p>
          </Reveal>

          <div className="mt-12 space-y-6">
            {post.body.map((p, i) => (
              <Reveal key={i} delay={i * 0.04}>
                <p className="text-foreground/85 leading-relaxed">{p}</p>
              </Reveal>
            ))}
          </div>

          <Reveal className="mt-16 rounded-3xl bg-orange p-8 text-white">
            <p className="font-display text-xl uppercase">Bu konuda yardım mı lazım?</p>
            <Link href="/iletisim"
              className="mt-4 inline-block rounded-[10px] bg-white px-6 py-3 text-sm font-medium text-background transition-colors duration-150 hover:bg-white/90"
            >
              İletişime geç
            </Link>
          </Reveal>

          <Link href="/blog"
            className="mt-16 inline-block text-sm text-foreground/50 transition-colors duration-150 hover:text-orange"
          >
            ← Tüm yazılar
          </Link>
        </article>

        <Footer />
      </main>
    </>
  );
}
