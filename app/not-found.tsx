import Link from "next/link";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import OutlineHeading from "@/components/OutlineHeading";

export default function NotFound() {
  return (
    <>
      <Nav />
      <main className="flex min-h-screen flex-col items-center justify-center overflow-x-clip bg-background px-6 text-center text-foreground">
        <span className="text-small uppercase tracking-[0.08em] text-gold">404</span>
        <OutlineHeading className="mt-4">Kayıp</OutlineHeading>
        <p className="mt-6 max-w-md text-foreground/70">
          Aradığın sayfa taşınmış ya da hiç var olmamış olabilir.
        </p>
        <Link
          href="/"
          className="mt-8 inline-block rounded-[10px] bg-orange px-7 py-3.5 text-base font-medium text-white transition-colors duration-150 hover:bg-orange/90"
        >
          Ana sayfaya dön
        </Link>
      </main>
      <Footer />
    </>
  );
}
