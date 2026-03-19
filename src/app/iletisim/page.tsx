"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import AnimatedSection from "@/components/AnimatedSection";
import WaveDivider from "@/components/WaveDivider";

export default function IletisimPage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  const inputClass =
    "w-full px-4 py-3 rounded-2xl border-2 border-dark-brown/10 bg-warm-white font-body text-dark-brown placeholder:text-dark-brown/40 focus:outline-none focus:border-orange focus:ring-2 focus:ring-orange/20 transition-all";
  const labelClass = "block text-sm font-heading font-semibold text-dark-brown mb-1.5";

  return (
    <>
      {/* Header */}
      <section className="bg-warm-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <h1 className="text-4xl md:text-5xl font-heading font-bold text-dark-brown mb-4">
              İletişim & Rezervasyon
            </h1>
            <p className="text-dark-brown/60 font-body max-w-2xl mx-auto text-lg">
              Rezervasyon yapın veya sorularınızı bize iletin.
            </p>
          </AnimatedSection>
        </div>
      </section>

      <WaveDivider fillTop="#FFF9F0" fillBottom="#ffffff" />

      {/* Form & Info */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Form */}
            <div className="lg:col-span-2">
              <AnimatedSection>
                <div className="bg-warm-white rounded-[24px] p-8 md:p-10">
                  <h2 className="text-2xl font-heading font-bold text-dark-brown mb-8">
                    Rezervasyon Formu
                  </h2>

                  {submitted ? (
                    <motion.div
                      initial={{ scale: 0.8, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      className="text-center py-16"
                    >
                      <div className="w-20 h-20 mx-auto bg-teal/10 rounded-full flex items-center justify-center mb-4">
                        <svg className="w-10 h-10 text-teal" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <h3 className="text-2xl font-heading font-bold text-dark-brown mb-2">
                        Talebiniz Alındı!
                      </h3>
                      <p className="text-dark-brown/60 font-body">
                        En kısa sürede sizinle iletişime geçeceğiz.
                      </p>
                    </motion.div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-6">
                      {/* Sahip Bilgileri */}
                      <div>
                        <h3 className="text-lg font-heading font-bold text-orange mb-4">Sahip Bilgileri</h3>
                        <div className="grid sm:grid-cols-2 gap-4">
                          <div>
                            <label className={labelClass}>Adı Soyadı *</label>
                            <input type="text" required className={inputClass} placeholder="Adınız Soyadınız" />
                          </div>
                          <div>
                            <label className={labelClass}>Telefon *</label>
                            <input type="tel" required className={inputClass} placeholder="0555 555 5555" />
                          </div>
                          <div className="sm:col-span-2">
                            <label className={labelClass}>E-posta</label>
                            <input type="email" className={inputClass} placeholder="email@ornek.com" />
                          </div>
                        </div>
                      </div>

                      {/* Hayvan Bilgileri */}
                      <div>
                        <h3 className="text-lg font-heading font-bold text-teal mb-4">Hayvan Bilgileri</h3>
                        <div className="grid sm:grid-cols-2 gap-4">
                          <div>
                            <label className={labelClass}>Hayvan Adı *</label>
                            <input type="text" required className={inputClass} placeholder="Hayvanınızın adı" />
                          </div>
                          <div>
                            <label className={labelClass}>Tür *</label>
                            <select required className={inputClass}>
                              <option value="">Seçiniz</option>
                              <option value="kopek">Köpek</option>
                              <option value="kedi">Kedi</option>
                              <option value="diger">Diğer</option>
                            </select>
                          </div>
                          <div>
                            <label className={labelClass}>Irk</label>
                            <input type="text" className={inputClass} placeholder="Irkı" />
                          </div>
                          <div>
                            <label className={labelClass}>Yaş</label>
                            <input type="text" className={inputClass} placeholder="Örnek: 3 yaş" />
                          </div>
                        </div>
                      </div>

                      {/* Hizmet Bilgileri */}
                      <div>
                        <h3 className="text-lg font-heading font-bold text-pink mb-4">Hizmet Bilgileri</h3>
                        <div className="grid sm:grid-cols-2 gap-4">
                          <div>
                            <label className={labelClass}>Hizmet *</label>
                            <select required className={inputClass}>
                              <option value="">Seçiniz</option>
                              <option value="konaklama">Konaklama</option>
                              <option value="gunluk">Günlük Bakım</option>
                              <option value="spa">Spa & Bakım</option>
                              <option value="egitim">Eğitim</option>
                            </select>
                          </div>
                          <div>
                            <label className={labelClass}>Oda Tipi</label>
                            <select className={inputClass}>
                              <option value="">Seçiniz</option>
                              <option value="standart">Standart</option>
                              <option value="deluxe">Deluxe</option>
                              <option value="vip">VIP Suite</option>
                            </select>
                          </div>
                          <div>
                            <label className={labelClass}>Giriş Tarihi *</label>
                            <input type="date" required className={inputClass} />
                          </div>
                          <div>
                            <label className={labelClass}>Çıkış Tarihi</label>
                            <input type="date" className={inputClass} />
                          </div>
                        </div>
                      </div>

                      {/* Notlar */}
                      <div>
                        <label className={labelClass}>Ek Notlar</label>
                        <textarea
                          rows={4}
                          className={inputClass}
                          placeholder="Özel istekler, sağlık bilgileri, beslenme alışkanlıkları..."
                        />
                      </div>

                      <button
                        type="submit"
                        className="pill-btn bg-orange text-white text-lg w-full justify-center shadow-lg shadow-orange/30"
                      >
                        Rezervasyon Gönder
                        <svg width="16" height="16" viewBox="0 0 100 100" fill="white">
                          <ellipse cx="50" cy="65" rx="22" ry="28" />
                          <ellipse cx="28" cy="35" rx="12" ry="14" />
                          <ellipse cx="72" cy="35" rx="12" ry="14" />
                          <ellipse cx="15" cy="55" rx="10" ry="12" />
                          <ellipse cx="85" cy="55" rx="10" ry="12" />
                        </svg>
                      </button>
                    </form>
                  )}
                </div>
              </AnimatedSection>
            </div>

            {/* İletişim Bilgileri */}
            <div>
              <AnimatedSection delay={0.2}>
                <div className="space-y-6">
                  <div className="bg-orange-light rounded-2xl p-6">
                    <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center mb-4 shadow-sm">
                      <svg className="w-6 h-6 text-orange" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <h3 className="font-heading font-bold text-dark-brown mb-1">Adres</h3>
                    <p className="text-dark-brown/60 font-body text-sm">
                      Çekmeköy Merkez Mah. Hayvan Severler Cad. No: 42
                      <br />Çekmeköy / İstanbul
                    </p>
                  </div>

                  <div className="bg-teal-light rounded-2xl p-6">
                    <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center mb-4 shadow-sm">
                      <svg className="w-6 h-6 text-teal" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <h3 className="font-heading font-bold text-dark-brown mb-1">Telefon</h3>
                    <p className="text-dark-brown/60 font-body text-sm">
                      0216 555 00 00
                      <br />0532 555 00 00 (WhatsApp)
                    </p>
                  </div>

                  <div className="bg-pink-light rounded-2xl p-6">
                    <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center mb-4 shadow-sm">
                      <svg className="w-6 h-6 text-pink" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <h3 className="font-heading font-bold text-dark-brown mb-1">Çalışma Saatleri</h3>
                    <p className="text-dark-brown/60 font-body text-sm">
                      Pazartesi - Cumartesi: 08:00 - 20:00
                      <br />Pazar: 09:00 - 18:00
                    </p>
                  </div>

                  <div className="bg-blue-light rounded-2xl p-6">
                    <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center mb-4 shadow-sm">
                      <svg className="w-6 h-6 text-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <h3 className="font-heading font-bold text-dark-brown mb-1">E-posta</h3>
                    <p className="text-dark-brown/60 font-body text-sm">
                      info@pawsomepet.com
                      <br />rezervasyon@pawsomepet.com
                    </p>
                  </div>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>

      {/* Harita Placeholder */}
      <section className="bg-warm-white py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <div className="aspect-[21/9] bg-gradient-to-br from-teal-light to-blue-light rounded-[24px] flex items-center justify-center">
              <div className="text-center">
                <svg className="w-12 h-12 mx-auto text-teal opacity-40 mb-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span className="text-teal/60 font-heading font-bold">Harita Alanı</span>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
