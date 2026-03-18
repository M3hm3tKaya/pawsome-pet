"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import AnimatedSection from "@/components/AnimatedSection";
import WaveDivider from "@/components/WaveDivider";

const services = [
  {
    title: "Konaklama",
    desc: "Sicak ve konforlu odalarda gecelik konaklama hizmeti.",
    icon: "M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-4 0a1 1 0 01-1-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 01-1 1",
    color: "orange",
    bg: "bg-orange-light",
    border: "border-orange",
    textColor: "text-orange",
  },
  {
    title: "Gunluk Bakim",
    desc: "Gun boyu oyun, sosyallesme ve profesyonel bakim.",
    icon: "M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z",
    color: "teal",
    bg: "bg-teal-light",
    border: "border-teal",
    textColor: "text-teal",
  },
  {
    title: "Spa & Bakim",
    desc: "Yikama, tirnak kesimi, tuy bakimi ve masaj hizmetleri.",
    icon: "M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01",
    color: "pink",
    bg: "bg-pink-light",
    border: "border-pink",
    textColor: "text-pink",
  },
  {
    title: "Egitim",
    desc: "Temel itaat ve davranis egitimi programlari.",
    icon: "M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253",
    color: "blue",
    bg: "bg-blue-light",
    border: "border-blue",
    textColor: "text-blue",
  },
];

const whyUs = [
  { text: "7/24 veteriner destek hatti", color: "text-orange" },
  { text: "Canli kamera ile takip imkani", color: "text-teal" },
  { text: "Genis bahce ve oyun alanlari", color: "text-pink" },
  { text: "10+ yillik deneyimli ekip", color: "text-blue" },
];

const rooms = [
  {
    name: "Standart Oda",
    price: "250",
    features: ["Konforlu yatak", "Gunluk temizlik", "Oyun saatleri"],
    color: "border-teal",
    badge: "bg-teal text-white",
  },
  {
    name: "Deluxe Oda",
    price: "400",
    features: ["Genis alan", "Ozel bahce erisimi", "Gunluk spa", "Canli kamera"],
    color: "border-orange",
    badge: "bg-orange text-white",
    popular: true,
  },
  {
    name: "VIP Suite",
    price: "600",
    features: ["En genis suite", "Ozel bahce", "7/24 bakim", "Canli kamera", "Gunluk rapor"],
    color: "border-pink",
    badge: "bg-pink text-white",
  },
];

const testimonials = [
  {
    name: "Ayse K.",
    pet: "Golden Retriever - Luna",
    text: "Luna her zaman mutlu donuyor! Ekip harika, odalari tertemiz. Kesinlikle tavsiye ederim.",
    rating: 5,
  },
  {
    name: "Mehmet T.",
    pet: "British Shorthair - Boncuk",
    text: "Kedi otellerinde en iyisi. Boncuk burada cok huzurlu. Canli kamera ozelligini cok sevdik.",
    rating: 5,
  },
  {
    name: "Zeynep A.",
    pet: "Poodle - Pamuk",
    text: "Spa hizmeti muhtesem! Pamuk her seferinde piril piril donuyor. Fiyatlar da makul.",
    rating: 5,
  },
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-warm-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, ease: [0.34, 1.56, 0.64, 1] }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-orange-light rounded-full text-orange text-sm font-heading font-semibold mb-6">
                <svg width="16" height="16" viewBox="0 0 100 100" fill="#FF8C42">
                  <ellipse cx="50" cy="65" rx="22" ry="28" />
                  <ellipse cx="28" cy="35" rx="12" ry="14" />
                  <ellipse cx="72" cy="35" rx="12" ry="14" />
                  <ellipse cx="15" cy="55" rx="10" ry="12" />
                  <ellipse cx="85" cy="55" rx="10" ry="12" />
                </svg>
                Istanbul Cekmekoy
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-dark-brown leading-tight mb-6">
                Evcil Dostunuz Icin{" "}
                <span className="text-orange">Pawsome</span> Bir Tatil!
              </h1>
              <p className="text-lg text-dark-brown/70 font-body mb-8 max-w-lg">
                Kopek ve kedileriniz icin 5 yildizli konaklama, spa, egitim ve
                gunluk bakim hizmetleri. Onlar da tatili hak ediyor!
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  href="/iletisim"
                  className="pill-btn bg-orange text-white text-lg shadow-lg shadow-orange/30"
                >
                  Rezervasyon Yap
                  <svg width="16" height="16" viewBox="0 0 100 100" fill="white">
                    <ellipse cx="50" cy="65" rx="22" ry="28" />
                    <ellipse cx="28" cy="35" rx="12" ry="14" />
                    <ellipse cx="72" cy="35" rx="12" ry="14" />
                    <ellipse cx="15" cy="55" rx="10" ry="12" />
                    <ellipse cx="85" cy="55" rx="10" ry="12" />
                  </svg>
                </Link>
                <Link
                  href="/odalar"
                  className="pill-btn border-2 border-dark-brown/20 text-dark-brown hover:border-orange hover:text-orange text-lg"
                >
                  Odalari Incele
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2, ease: [0.34, 1.56, 0.64, 1] }}
              className="relative"
            >
              <div className="aspect-square max-w-md mx-auto bg-gradient-to-br from-orange-light via-pink-light to-teal-light rounded-[32px] flex items-center justify-center relative overflow-hidden">
                <svg className="w-48 h-48 text-orange/30" viewBox="0 0 100 100" fill="currentColor">
                  <ellipse cx="50" cy="65" rx="22" ry="28" />
                  <ellipse cx="28" cy="35" rx="12" ry="14" />
                  <ellipse cx="72" cy="35" rx="12" ry="14" />
                  <ellipse cx="15" cy="55" rx="10" ry="12" />
                  <ellipse cx="85" cy="55" rx="10" ry="12" />
                </svg>
                <div className="absolute top-6 right-6 w-16 h-16 bg-orange/20 rounded-full animate-float" />
                <div className="absolute bottom-10 left-6 w-12 h-12 bg-teal/20 rounded-full animate-float-delay" />
                <div className="absolute top-1/2 right-10 w-8 h-8 bg-pink/20 rounded-full animate-float-delay-2" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <WaveDivider fillTop="#FFF9F0" fillBottom="#ffffff" />

      {/* Hizmetler */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-dark-brown mb-4">
              Hizmetlerimiz
            </h2>
            <p className="text-dark-brown/60 font-body max-w-2xl mx-auto">
              Evcil hayvanlariniz icin en iyi bakim ve konaklama hizmetlerini sunuyoruz.
            </p>
          </AnimatedSection>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, i) => (
              <AnimatedSection key={service.title} delay={i * 0.1}>
                <div
                  className={`card-hover p-6 rounded-2xl ${service.bg} border-2 ${service.border}/20 cursor-pointer`}
                >
                  <div className={`w-14 h-14 rounded-2xl bg-white flex items-center justify-center mb-4 shadow-sm`}>
                    <svg className={`w-7 h-7 ${service.textColor}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d={service.icon} />
                    </svg>
                  </div>
                  <h3 className={`text-lg font-heading font-bold ${service.textColor} mb-2`}>
                    {service.title}
                  </h3>
                  <p className="text-dark-brown/60 font-body text-sm">{service.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <WaveDivider fillTop="#ffffff" fillBottom="#FFF9F0" />

      {/* Neden Biz */}
      <section className="bg-warm-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <AnimatedSection>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-dark-brown mb-4">
                Neden <span className="text-orange">Pawsome</span>?
              </h2>
              <p className="text-dark-brown/60 font-body mb-8">
                10 yildir Istanbul&apos;un en guvenilir evcil hayvan oteli olarak hizmet veriyoruz.
              </p>
              <div className="space-y-4">
                {whyUs.map((item, i) => (
                  <AnimatedSection key={i} delay={i * 0.1}>
                    <div className="flex items-center gap-3">
                      <div className={`w-8 h-8 rounded-full bg-white shadow-sm flex items-center justify-center shrink-0`}>
                        <svg className={`w-5 h-5 ${item.color}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className="font-body font-medium text-dark-brown">{item.text}</span>
                    </div>
                  </AnimatedSection>
                ))}
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <div className="aspect-[4/3] bg-gradient-to-br from-teal-light to-orange-light rounded-[24px] flex items-center justify-center">
                <div className="text-center">
                  <div className="text-6xl font-heading font-bold text-orange mb-2">10+</div>
                  <div className="text-dark-brown/60 font-body">Yillik Deneyim</div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      <WaveDivider fillTop="#FFF9F0" fillBottom="#ffffff" />

      {/* Oda Tipleri */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-dark-brown mb-4">
              Oda Tiplerimiz
            </h2>
            <p className="text-dark-brown/60 font-body max-w-2xl mx-auto">
              Her butceye ve ihtiyaca uygun konforlu odalarimiz.
            </p>
          </AnimatedSection>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {rooms.map((room, i) => (
              <AnimatedSection key={room.name} delay={i * 0.1}>
                <div
                  className={`card-hover relative bg-warm-white rounded-2xl p-8 border-2 ${room.color}/30 text-center`}
                >
                  {room.popular && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                      <span className="px-4 py-1 bg-orange text-white text-xs font-heading font-bold rounded-full shadow-lg">
                        Populer
                      </span>
                    </div>
                  )}
                  <div className={`inline-block px-3 py-1 rounded-full text-xs font-heading font-bold mb-4 ${room.badge}`}>
                    {room.name}
                  </div>
                  <div className="mb-4">
                    <span className="text-4xl font-heading font-bold text-dark-brown">{room.price}</span>
                    <span className="text-dark-brown/50 font-body"> TL/gece</span>
                  </div>
                  <ul className="space-y-3 mb-8">
                    {room.features.map((f) => (
                      <li key={f} className="flex items-center gap-2 text-sm text-dark-brown/70 font-body">
                        <svg className="w-4 h-4 text-teal shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                        {f}
                      </li>
                    ))}
                  </ul>
                  <Link
                    href="/iletisim"
                    className="pill-btn bg-dark-brown text-white text-sm w-full justify-center"
                  >
                    Rezervasyon
                  </Link>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <WaveDivider fillTop="#ffffff" fillBottom="#FFF9F0" />

      {/* Yorumlar */}
      <section className="bg-warm-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-dark-brown mb-4">
              Mutlu Dostlarimiz
            </h2>
            <p className="text-dark-brown/60 font-body max-w-2xl mx-auto">
              Misafirlerimizin deneyimlerini dinleyin.
            </p>
          </AnimatedSection>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((t, i) => (
              <AnimatedSection key={t.name} delay={i * 0.1}>
                <div className="card-hover bg-white rounded-2xl p-6 shadow-sm">
                  <div className="flex gap-1 mb-4">
                    {[...Array(t.rating)].map((_, j) => (
                      <svg key={j} className="w-5 h-5 text-orange" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-dark-brown/70 font-body text-sm mb-4 italic">
                    &ldquo;{t.text}&rdquo;
                  </p>
                  <div>
                    <div className="font-heading font-bold text-dark-brown text-sm">{t.name}</div>
                    <div className="text-dark-brown/50 text-xs font-body">{t.pet}</div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Canli Kamera CTA */}
      <section className="relative overflow-hidden">
        <div className="bg-gradient-to-r from-orange via-pink to-teal py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <AnimatedSection>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-4">
                Canli Kamera ile Takip Edin
              </h2>
              <p className="text-white/80 font-body mb-8 max-w-2xl mx-auto">
                Evcil hayvaninizi her an izleyebilirsiniz. Deluxe ve VIP odalarda canli kamera erisimi.
              </p>
              <Link
                href="/odalar"
                className="pill-btn bg-white text-orange text-lg shadow-lg hover:shadow-xl"
              >
                Odalari Kesfet
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
              </Link>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </>
  );
}
