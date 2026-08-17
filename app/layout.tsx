import type { Metadata } from "next";
import { Inter_Tight } from "next/font/google";
import Preloader from "@/components/Preloader";
import SmoothScroll from "@/components/SmoothScroll";
import "./globals.css";

const interTight = Inter_Tight({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const title = "lovefengis — Dijital Ajans & Suite";
const description =
  "İzmir merkezli dijital ajans: web tasarım, e-ticaret, marka kimliği, AI içerik üretimi ve chatbot entegrasyonu. Suite: KVKK uyumlu CRM + otomasyon + randevu + fatura paketi.";

export const metadata: Metadata = {
  metadataBase: new URL("https://lovefengis.com"),
  title: { default: title, template: "%s" },
  description,
  openGraph: {
    title,
    description,
    siteName: "lovefengis",
    locale: "tr_TR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="tr" className={`${interTight.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-background text-foreground font-sans">
        <Preloader />
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
