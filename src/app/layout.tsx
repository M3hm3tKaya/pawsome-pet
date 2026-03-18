import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PawPrints from "@/components/PawPrints";
import SmoothScroll from "@/components/SmoothScroll";

export const metadata: Metadata = {
  title: "Pawsome Pet Hotel | Istanbul Cekmekoy Evcil Hayvan Oteli",
  description:
    "Istanbul Cekmekoy'de evcil hayvanlariniz icin konaklama, gunluk bakim, spa ve egitim hizmetleri sunan sicak ve guvenli pet otel.",
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
