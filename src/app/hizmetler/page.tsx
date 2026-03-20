"use client";

import AnimatedSection from "@/components/AnimatedSection";
import WaveDivider from "@/components/WaveDivider";

const services = [
  {
    title: "Konaklama",
    desc: "Evcil hayvanlarınız için sıcak, güvenli ve konforlu konaklama hizmeti. Her oda düzenli olarak temizlenir ve dezenfekte edilir.",
    features: [
      "Klimalı ve ısıtmalı odalar",
      "Yumuşak yataklar ve battaniyeler",
      "Günlük temizlik ve dezenfeksiyon",
      "Özel beslenme programı",
      "24 saat gözetim",
    ],
    price: "250 - 600 TL/gece",
    color: "orange",
    bgColor: "bg-orange-light",
    textColor: "text-orange",
    borderColor: "border-orange",
    icon: "M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-4 0a1 1 0 01-1-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 01-1 1",
  },
  {
    title: "Günlük Bakım",
    desc: "İş yerinde veya tatildeyken evcil hayvanınız gün boyu profesyonel bakıcılarımızın gözetiminde eğlenceli vakit geçirir.",
    features: [
      "Sabah kahvaltısı ve öğlen yemeği",
      "Grup oyun saatleri",
      "Bireysel ilgi ve sevgi",
      "Bahçede yürüyüş",
      "Sosyalleşme aktiviteleri",
    ],
    price: "150 - 300 TL/gün",
    color: "teal",
    bgColor: "bg-teal-light",
    textColor: "text-teal",
    borderColor: "border-teal",
    icon: "M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z",
  },
  {
    title: "Spa & Bakım",
    desc: "Profesyonel grooming ekibimiz ile evcil hayvanınız pırıl pırıl olsun. Özel ürünlerle cildi ve tüyleri bakımlı kalır.",
    features: [
      "Yıkama ve kurutma",
      "Tırnak kesimi",
      "Kulak temizliği",
      "Tüy kesimi ve şekillendirme",
      "Rahatlatıcı masaj",
    ],
    price: "100 - 400 TL",
    color: "pink",
    bgColor: "bg-pink-light",
    textColor: "text-pink",
    borderColor: "border-pink",
    icon: "M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01",
  },
  {
    title: "Eğitim",
    desc: "Deneyimli eğitmenlerimiz ile köpekleriniz temel itaat komutlarını ve iyi davranışları öğrenir.",
    features: [
      "Temel itaat eğitimi (otur, gel, yat)",
      "Tasma eğitimi",
      "Sosyalleşme programı",
      "Problem davranış çözümü",
      "Bireysel eğitim seansları",
    ],
    price: "200 - 500 TL/seans",
    color: "blue",
    bgColor: "bg-blue-light",
    textColor: "text-blue",
    borderColor: "border-blue",
    icon: "M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253",
  },
];

export default function HizmetlerPage() {
  return (
    <>
      {/* Header */}
      <section className="bg-warm-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <h1 className="text-4xl md:text-5xl font-heading font-bold text-dark-brown mb-4">
              Hizmetlerimiz
            </h1>
            <p className="text-dark-brown/60 font-body max-w-2xl mx-auto text-lg">
              Evcil hayvanlarınız için en kaliteli bakım ve konaklama hizmetlerini sunuyoruz.
            </p>
          </AnimatedSection>
        </div>
      </section>

      <WaveDivider fillTop="#FFF9F0" fillBottom="#ffffff" />

      {/* Hizmetler Detay */}
      <section className="bg-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16 sm:space-y-24">
          {services.map((service, i) => (
            <AnimatedSection key={service.title}>
              <div className={`grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 items-center ${i % 2 === 1 ? "md:direction-rtl" : ""}`}>
                <div className={i % 2 === 1 ? "md:order-2" : ""}>
                  <div className={`inline-flex items-center gap-2 px-4 py-2 ${service.bgColor} rounded-full ${service.textColor} text-sm font-heading font-semibold mb-4`}>
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d={service.icon} />
                    </svg>
                    {service.title}
                  </div>
                  <h2 className={`text-2xl sm:text-3xl font-heading font-bold text-dark-brown mb-4`}>
                    {service.title} Hizmeti
                  </h2>
                  <p className="text-dark-brown/60 font-body mb-6 leading-relaxed">
                    {service.desc}
                  </p>
                  <ul className="space-y-3 mb-6">
                    {service.features.map((f) => (
                      <li key={f} className="flex items-center gap-3">
                        <svg className={`w-5 h-5 ${service.textColor} shrink-0`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-dark-brown/70 font-body">{f}</span>
                      </li>
                    ))}
                  </ul>
                  <div className={`inline-block px-6 py-3 ${service.bgColor} rounded-2xl`}>
                    <span className={`font-heading font-bold ${service.textColor}`}>{service.price}</span>
                  </div>
                </div>

                <div className={i % 2 === 1 ? "md:order-1" : ""}>
                  <div className={`aspect-[4/3] ${service.bgColor} rounded-2xl sm:rounded-[24px] flex items-center justify-center border-2 ${service.borderColor}/20 overflow-hidden`}>
                    <svg className={`w-20 h-20 sm:w-32 sm:h-32 ${service.textColor} opacity-30`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                      <path d={service.icon} />
                    </svg>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </section>

      <WaveDivider fillTop="#ffffff" fillBottom="#FFF9F0" />

      {/* CTA */}
      <section className="bg-warm-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-dark-brown mb-4">
              Hizmetlerimiz Hakkında Sorularınız mı Var?
            </h2>
            <p className="text-dark-brown/60 font-body mb-8 max-w-xl mx-auto">
              Bize ulaşın, evcil hayvanınız için en uygun hizmeti birlikte belirleyelim.
            </p>
            <a
              href="/iletisim"
              className="pill-btn bg-orange text-white text-lg shadow-lg shadow-orange/30"
            >
              Bize Ulaşın
            </a>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
