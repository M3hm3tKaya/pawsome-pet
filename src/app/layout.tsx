import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PawPrints from "@/components/PawPrints";
import SmoothScroll from "@/components/SmoothScroll";

export const metadata: Metadata = {
  title: "Pawsome Pet Hotel | İstanbul Çekmeköy Evcil Hayvan Oteli",
  description:
    "İstanbul Çekmeköy'de evcil hayvanlarınız için konaklama, günlük bakım, spa ve eğitim hizmetleri sunan sıcak ve güvenli pet otel.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr" className="h-full antialiased">
      <body className="min-h-full flex flex-col font-body">
        <SmoothScroll />
        <PawPrints />
        <Navbar />
        <main className="flex-1 relative z-10 pt-16 md:pt-20">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
