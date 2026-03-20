"use client";

import AnimatedSection from "@/components/AnimatedSection";
import WaveDivider from "@/components/WaveDivider";

const team = [
  { name: "Dr. Elif Yılmaz", role: "Kurucu & Veteriner", color: "bg-orange-light", textColor: "text-orange" },
  { name: "Ahmet Kaya", role: "Operasyon Müdürü", color: "bg-teal-light", textColor: "text-teal" },
  { name: "Selin Demir", role: "Baş Bakıcı", color: "bg-pink-light", textColor: "text-pink" },
  { name: "Burak Öztürk", role: "Eğitmen", color: "bg-blue-light", textColor: "text-blue" },
  { name: "Zeynep Aksoy", role: "Grooming Uzmanı", color: "bg-orange-light", textColor: "text-orange" },
  { name: "Cansu Ertuğ", role: "Müşteri İlişkileri", color: "bg-teal-light", textColor: "text-teal" },
];

const values = [
  {
    title: "Sevgi & Şefkat",
    desc: "Her evcil hayvana kendi evcilimiz gibi davranıyoruz. Sevgi ve ilgi bizim önceliğimiz.",
    color: "text-orange",
    bgColor: "bg-orange-light",
    icon: "M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z",
  },
  {
    title: "Güvenlik",
    desc: "7/24 gözetim, veteriner destek hattı ve güvenli tesisler ile evcil hayvanlarınız emin ellerde.",
    color: "text-teal",
    bgColor: "bg-teal-light",
    icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z",
  },
  {
    title: "Profesyonellik",
    desc: "Deneyimli ve eğitimli ekibimiz, en yüksek standartlarda hizmet sunar.",
    color: "text-pink",
    bgColor: "bg-pink-light",
    icon: "M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z",
  },
];

export default function HakkimizPage() {
  return (
    <>
      {/* Header */}
      <section className="bg-warm-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <h1 className="text-4xl md:text-5xl font-heading font-bold text-dark-brown mb-4">
              Hakkımızda
            </h1>
            <p className="text-dark-brown/60 font-body max-w-2xl mx-auto text-lg">
              Pawsome Pet Hotel&apos;in hikayesi ve ekibimizi tanıyın.
            </p>
          </AnimatedSection>
        </div>
      </section>

      <WaveDivider fillTop="#FFF9F0" fillBottom="#ffffff" />

      {/* Hikaye */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 items-center">
            <AnimatedSection>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-orange-light rounded-full text-orange text-sm font-heading font-semibold mb-6">
                Hikayemiz
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-heading font-bold text-dark-brown mb-6">
                2016&apos;dan Beri Evcil Dostlarınızın Yanındayız
              </h2>
              <div className="space-y-4 text-dark-brown/70 font-body leading-relaxed">
                <p>
                  Pawsome Pet Hotel, 2016 yılında Dr. Elif Yılmaz tarafından İstanbul Çekmeköy&apos;de
                  kuruldu. Amacımız, evcil hayvan sahiplerinin seyahatleri veya yoğun iş
                  günlerinde dostlarını güvenle bırakabilecekleri sıcak bir yuva oluşturmaktı.
                </p>
                <p>
                  10 yıl içerisinde 5.000&apos;den fazla evcil hayvana ev sahipliği yaptık.
                  Sürekli büyüyen tesislerimiz ve genişleyen ekibimizle İstanbul&apos;un en
                  güvenilir evcil hayvan oteli olmaktan gurur duyuyoruz.
                </p>
                <p>
                  Geniş bahçemiz, modern tesislerimiz ve deneyimli ekibimiz ile her evcil
                  hayvana özel ilgi ve bakım sunuyoruz.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <div className="grid grid-cols-2 gap-3 sm:gap-4">
                <div className="bg-orange-light rounded-2xl sm:rounded-[24px] p-5 sm:p-8 text-center">
                  <div className="text-2xl sm:text-3xl md:text-4xl font-heading font-bold text-orange mb-1 sm:mb-2">10+</div>
                  <div className="text-dark-brown/60 font-body text-xs sm:text-sm">Yıl Deneyim</div>
                </div>
                <div className="bg-teal-light rounded-2xl sm:rounded-[24px] p-5 sm:p-8 text-center">
                  <div className="text-2xl sm:text-3xl md:text-4xl font-heading font-bold text-teal mb-1 sm:mb-2">5000+</div>
                  <div className="text-dark-brown/60 font-body text-xs sm:text-sm">Mutlu Misafir</div>
                </div>
                <div className="bg-pink-light rounded-2xl sm:rounded-[24px] p-5 sm:p-8 text-center">
                  <div className="text-2xl sm:text-3xl md:text-4xl font-heading font-bold text-pink mb-1 sm:mb-2">15+</div>
                  <div className="text-dark-brown/60 font-body text-xs sm:text-sm">Uzman Ekip</div>
                </div>
                <div className="bg-blue-light rounded-2xl sm:rounded-[24px] p-5 sm:p-8 text-center">
                  <div className="text-2xl sm:text-3xl md:text-4xl font-heading font-bold text-blue mb-1 sm:mb-2">4.9</div>
                  <div className="text-dark-brown/60 font-body text-xs sm:text-sm">Google Puan</div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      <WaveDivider fillTop="#ffffff" fillBottom="#FFF9F0" />

      {/* Ekip */}
      <section className="bg-warm-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-dark-brown mb-4">
              Ekibimiz
            </h2>
            <p className="text-dark-brown/60 font-body max-w-2xl mx-auto">
              Evcil hayvanlarınıza sevgiyle bakan profesyonel ekibimiz.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 sm:gap-8">
            {team.map((member, i) => (
              <AnimatedSection key={member.name} delay={i * 0.08}>
                <div className="text-center group">
                  <div className={`w-20 h-20 sm:w-24 sm:h-24 mx-auto rounded-full ${member.color} flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300`}
                    style={{ transitionTimingFunction: "cubic-bezier(0.34, 1.56, 0.64, 1)" }}
                  >
                    <svg className={`w-8 h-8 sm:w-10 sm:h-10 ${member.textColor} opacity-40`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  </div>
                  <h4 className="font-heading font-bold text-dark-brown text-sm">{member.name}</h4>
                  <p className={`${member.textColor} text-xs font-body`}>{member.role}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <WaveDivider fillTop="#FFF9F0" fillBottom="#ffffff" />

      {/* Değerler */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-dark-brown mb-4">
              Değerlerimiz
            </h2>
          </AnimatedSection>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8">
            {values.map((value, i) => (
              <AnimatedSection key={value.title} delay={i * 0.1}>
                <div className={`card-hover ${value.bgColor} rounded-2xl p-6 sm:p-8 text-center`}>
                  <div className="w-16 h-16 mx-auto bg-white rounded-2xl flex items-center justify-center mb-6 shadow-sm">
                    <svg className={`w-8 h-8 ${value.color}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d={value.icon} />
                    </svg>
                  </div>
                  <h3 className={`text-xl font-heading font-bold ${value.color} mb-3`}>{value.title}</h3>
                  <p className="text-dark-brown/60 font-body text-sm leading-relaxed">{value.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
