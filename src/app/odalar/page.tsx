"use client";

import Link from "next/link";
import AnimatedSection from "@/components/AnimatedSection";
import WaveDivider from "@/components/WaveDivider";

const rooms = [
  {
    name: "Standart Oda",
    price: "250",
    description: "Rahat ve temiz, temel ihtiyaclar icin ideal. Gunluk temizlik ve duzenli beslenme programi dahil.",
    features: [
      "8 m² alan",
      "Konforlu yatak",
      "Klima / Isitma",
      "Gunluk temizlik",
      "2 ogun yemek",
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
    description: "Genis alan, ozel bahce erisimi ve canli kamera ile premium deneyim. En populer secimiz.",
    features: [
      "15 m² alan",
      "Ortopedik yatak",
      "Klima / Isitma",
      "Gunluk temizlik",
      "3 ogun yemek + atistirmalik",
      "Ozel bahce erisimi",
      "Canli kamera",
      "Gunluk spa bakimi",
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
    description: "En genis suite odamiz. Ozel bahce, 7/24 ozel bakim ve gunluk detayli rapor ile en iyi deneyim.",
    features: [
      "25 m² suite",
      "Premium ortopedik yatak",
      "Klima / Isitma",
      "Gunluk temizlik (2 kez)",
      "Ozel menu",
      "Ozel bahce",
      "7/24 canli kamera",
      "Gunluk spa & masaj",
      "Gunluk rapor & foto",
      "Veteriner kontrolu",
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
  { feature: "Yemek", standart: "2 ogun", deluxe: "3 ogun + atistirmalik", vip: "Ozel menu" },
  { feature: "Bahce Erisimi", standart: "Ortak", deluxe: "Ozel", vip: "Ozel" },
  { feature: "Canli Kamera", standart: "-", deluxe: "Var", vip: "7/24" },
  { feature: "Spa / Masaj", standart: "-", deluxe: "Gunluk", vip: "Gunluk + Masaj" },
  { feature: "Rapor", standart: "-", deluxe: "-", vip: "Gunluk" },
  { feature: "Veteriner", standart: "Acil", deluxe: "Acil", vip: "Gunluk kontrol" },
];

const extras = [
  { name: "Ek Yuruyus (30 dk)", price: "50 TL", color: "text-orange" },
  { name: "Ozel Oyun Seansi", price: "75 TL", color: "text-teal" },
  { name: "Fotograf & Video Rapor", price: "30 TL/gun", color: "text-pink" },
  { name: "Ozel Diyet Menu", price: "40 TL/gun", color: "text-blue" },
  { name: "Ilac Uygulama", price: "25 TL/gun", color: "text-orange" },
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
              Her ihtiyaca uygun, konforlu ve guvenli odalarimiz.
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
                        Populer
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
                    Bu Odayi Sec
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
              Oda Karsilastirmasi
            </h2>
          </AnimatedSection>

          <AnimatedSection>
            <div className="overflow-x-auto">
              <table className="w-full bg-white rounded-2xl overflow-hidden shadow-sm">
                <thead>
                  <tr className="bg-dark-brown text-white">
                    <th className="px-6 py-4 text-left font-heading font-bold">Ozellik</th>
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
              Konaklamaya ekleyebileceginiz ozel hizmetler.
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
