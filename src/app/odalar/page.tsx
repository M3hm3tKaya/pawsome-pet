"use client";

import Link from "next/link";
import AnimatedSection from "@/components/AnimatedSection";
import WaveDivider from "@/components/WaveDivider";

const rooms = [
  {
    name: "Standart Oda",
    price: "250",
    description: "Rahat ve temiz, temel ihtiyaçlar için ideal. Günlük temizlik ve düzenli beslenme programı dahil.",
    features: [
      "8 m² alan",
      "Konforlu yatak",
      "Klima / Isıtma",
      "Günlük temizlik",
      "2 öğün yemek",
      "Oyun saatleri",
    ],
    color: "teal",
    bgColor: "bg-teal-light",
    textColor: "text-teal",
    borderColor: "border-teal",
  },
  {
    name: "Deluxe Oda",
    price: "400",
    description: "Geniş alan, özel bahçe erişimi ve canlı kamera ile premium deneyim. En popüler seçimimiz.",
    features: [
      "15 m² alan",
      "Ortopedik yatak",
      "Klima / Isıtma",
      "Günlük temizlik",
      "3 öğün yemek + atıştırmalık",
      "Özel bahçe erişimi",
      "Canlı kamera",
      "Günlük spa bakımı",
    ],
    color: "orange",
    bgColor: "bg-orange-light",
    textColor: "text-orange",
    borderColor: "border-orange",
    popular: true,
  },
  {
    name: "VIP Suite",
    price: "600",
    description: "En geniş suite odamız. Özel bahçe, 7/24 özel bakım ve günlük detaylı rapor ile en iyi deneyim.",
    features: [
      "25 m² suite",
      "Premium ortopedik yatak",
      "Klima / Isıtma",
      "Günlük temizlik (2 kez)",
      "Özel menü",
      "Özel bahçe",
      "7/24 canlı kamera",
      "Günlük spa & masaj",
      "Günlük rapor & foto",
      "Veteriner kontrolü",
    ],
    color: "pink",
    bgColor: "bg-pink-light",
    textColor: "text-pink",
    borderColor: "border-pink",
  },
];

const comparison = [
  { feature: "Oda Boyutu", standart: "8 m²", deluxe: "15 m²", vip: "25 m²" },
  { feature: "Yatak", standart: "Standart", deluxe: "Ortopedik", vip: "Premium Ortopedik" },
  { feature: "Yemek", standart: "2 öğün", deluxe: "3 öğün + atıştırmalık", vip: "Özel menü" },
  { feature: "Bahçe Erişimi", standart: "Ortak", deluxe: "Özel", vip: "Özel" },
  { feature: "Canlı Kamera", standart: "-", deluxe: "Var", vip: "7/24" },
  { feature: "Spa / Masaj", standart: "-", deluxe: "Günlük", vip: "Günlük + Masaj" },
  { feature: "Rapor", standart: "-", deluxe: "-", vip: "Günlük" },
  { feature: "Veteriner", standart: "Acil", deluxe: "Acil", vip: "Günlük kontrol" },
];

const extras = [
  { name: "Ek Yürüyüş (30 dk)", price: "50 TL", color: "text-orange" },
  { name: "Özel Oyun Seansı", price: "75 TL", color: "text-teal" },
  { name: "Fotoğraf & Video Rapor", price: "30 TL/gün", color: "text-pink" },
  { name: "Özel Diyet Menü", price: "40 TL/gün", color: "text-blue" },
  { name: "İlaç Uygulama", price: "25 TL/gün", color: "text-orange" },
  { name: "Transfer Hizmeti", price: "100 TL", color: "text-teal" },
];

export default function OdalarPage() {
  return (
    <>
      {/* Header */}
      <section className="bg-warm-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <h1 className="text-4xl md:text-5xl font-heading font-bold text-dark-brown mb-4">
              Odalar & Fiyatlar
            </h1>
            <p className="text-dark-brown/60 font-body max-w-2xl mx-auto text-lg">
              Her ihtiyaca uygun, konforlu ve güvenli odalarımız.
            </p>
          </AnimatedSection>
        </div>
      </section>

      <WaveDivider fillTop="#FFF9F0" fillBottom="#ffffff" />

      {/* Odalar */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          {rooms.map((room, i) => (
            <AnimatedSection key={room.name}>
              <div className={`grid md:grid-cols-2 gap-10 items-center`}>
                <div className={i % 2 === 1 ? "md:order-2" : ""}>
                  <div className="flex items-center gap-3 mb-4">
                    {room.popular && (
                      <span className="px-3 py-1 bg-orange text-white text-xs font-heading font-bold rounded-full">
                        Popüler
                      </span>
                    )}
                    <span className={`px-3 py-1 ${room.bgColor} ${room.textColor} text-xs font-heading font-bold rounded-full`}>
                      {room.name}
                    </span>
                  </div>
                  <h2 className="text-3xl font-heading font-bold text-dark-brown mb-2">
                    {room.name}
                  </h2>
                  <div className="mb-4">
                    <span className={`text-3xl font-heading font-bold ${room.textColor}`}>{room.price}</span>
                    <span className="text-dark-brown/50 font-body"> TL/gece</span>
                  </div>
                  <p className="text-dark-brown/60 font-body mb-6 leading-relaxed">
                    {room.description}
                  </p>
                  <div className="grid grid-cols-2 gap-3 mb-6">
                    {room.features.map((f) => (
                      <div key={f} className="flex items-center gap-2">
                        <svg className={`w-4 h-4 ${room.textColor} shrink-0`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-sm text-dark-brown/70 font-body">{f}</span>
                      </div>
                    ))}
                  </div>
                  <Link
                    href="/iletisim"
                    className={`pill-btn bg-${room.color} text-white shadow-lg`}
                    style={{
                      backgroundColor:
                        room.color === "teal" ? "#2ABFBF"
                          : room.color === "orange" ? "#FF8C42"
                          : "#FF6B8A",
                    }}
                  >
                    Bu Odayı Seç
                  </Link>
                </div>

                <div className={i % 2 === 1 ? "md:order-1" : ""}>
                  <div className={`aspect-[4/3] ${room.bgColor} rounded-[24px] flex items-center justify-center border-2 ${room.borderColor}/20`}>
                    <div className="text-center">
                      <svg className={`w-24 h-24 mx-auto ${room.textColor} opacity-30 mb-4`} viewBox="0 0 100 100" fill="currentColor">
                        <ellipse cx="50" cy="65" rx="22" ry="28" />
                        <ellipse cx="28" cy="35" rx="12" ry="14" />
                        <ellipse cx="72" cy="35" rx="12" ry="14" />
                        <ellipse cx="15" cy="55" rx="10" ry="12" />
                        <ellipse cx="85" cy="55" rx="10" ry="12" />
                      </svg>
                      <span className={`${room.textColor} font-heading font-bold text-lg opacity-60`}>{room.name}</span>
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </section>

      <WaveDivider fillTop="#ffffff" fillBottom="#FFF9F0" />

      {/* Karsilastirma Tablosu */}
      <section className="bg-warm-white py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-dark-brown mb-4">
              Oda Karşılaştırması
            </h2>
          </AnimatedSection>

          <AnimatedSection>
            <div className="overflow-x-auto">
              <table className="w-full bg-white rounded-2xl overflow-hidden shadow-sm">
                <thead>
                  <tr className="bg-dark-brown text-white">
                    <th className="px-6 py-4 text-left font-heading font-bold">Özellik</th>
                    <th className="px-6 py-4 text-center font-heading font-bold">
                      <span className="text-teal">Standart</span>
                    </th>
                    <th className="px-6 py-4 text-center font-heading font-bold">
                      <span className="text-orange">Deluxe</span>
                    </th>
                    <th className="px-6 py-4 text-center font-heading font-bold">
                      <span className="text-pink">VIP</span>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {comparison.map((row, i) => (
                    <tr key={row.feature} className={i % 2 === 0 ? "bg-warm-white/50" : "bg-white"}>
                      <td className="px-6 py-4 font-body font-medium text-dark-brown">{row.feature}</td>
                      <td className="px-6 py-4 text-center text-dark-brown/70 font-body text-sm">{row.standart}</td>
                      <td className="px-6 py-4 text-center text-dark-brown/70 font-body text-sm">{row.deluxe}</td>
                      <td className="px-6 py-4 text-center text-dark-brown/70 font-body text-sm">{row.vip}</td>
                    </tr>
                  ))}
                  <tr className="bg-dark-brown/5">
                    <td className="px-6 py-4 font-heading font-bold text-dark-brown">Fiyat</td>
                    <td className="px-6 py-4 text-center font-heading font-bold text-teal">250 TL</td>
                    <td className="px-6 py-4 text-center font-heading font-bold text-orange">400 TL</td>
                    <td className="px-6 py-4 text-center font-heading font-bold text-pink">600 TL</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <WaveDivider fillTop="#FFF9F0" fillBottom="#ffffff" />

      {/* Ek Hizmetler */}
      <section className="bg-white py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-dark-brown mb-4">
              Ek Hizmetler
            </h2>
            <p className="text-dark-brown/60 font-body">
              Konaklamaya ekleyebileceğiniz özel hizmetler.
            </p>
          </AnimatedSection>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {extras.map((extra, i) => (
              <AnimatedSection key={extra.name} delay={i * 0.05}>
                <div className="card-hover flex items-center justify-between p-4 bg-warm-white rounded-2xl">
                  <span className="font-body text-dark-brown font-medium">{extra.name}</span>
                  <span className={`${extra.color} font-heading font-bold text-sm`}>{extra.price}</span>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
