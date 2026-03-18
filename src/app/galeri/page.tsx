"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import AnimatedSection from "@/components/AnimatedSection";
import WaveDivider from "@/components/WaveDivider";
import clsx from "clsx";

type Category = "Hepsi" | "Kopekler" | "Kediler" | "Odalar" | "Bahce" | "Spa";

interface GalleryItem {
  id: number;
  category: Category;
  title: string;
  color: string;
  bgGradient: string;
  aspectClass: string;
}

const categories: Category[] = ["Hepsi", "Kopekler", "Kediler", "Odalar", "Bahce", "Spa"];

const galleryItems: GalleryItem[] = [
  { id: 1, category: "Kopekler", title: "Bahcede oynayan Golden Retriever", color: "text-orange", bgGradient: "from-orange-light to-pink-light", aspectClass: "aspect-[3/4]" },
  { id: 2, category: "Kediler", title: "Pencere kenarinda uyuyan kedi", color: "text-teal", bgGradient: "from-teal-light to-blue-light", aspectClass: "aspect-square" },
  { id: 3, category: "Odalar", title: "Deluxe oda ic gorunum", color: "text-pink", bgGradient: "from-pink-light to-orange-light", aspectClass: "aspect-[4/3]" },
  { id: 4, category: "Bahce", title: "Genis bahce alani", color: "text-teal", bgGradient: "from-teal-light to-warm-white", aspectClass: "aspect-[3/4]" },
  { id: 5, category: "Spa", title: "Yikama ve bakim", color: "text-pink", bgGradient: "from-pink-light to-teal-light", aspectClass: "aspect-square" },
  { id: 6, category: "Kopekler", title: "Grup oyun saati", color: "text-orange", bgGradient: "from-orange-light to-teal-light", aspectClass: "aspect-[4/3]" },
  { id: 7, category: "Kediler", title: "Kedi oyun odasi", color: "text-teal", bgGradient: "from-blue-light to-teal-light", aspectClass: "aspect-[3/4]" },
  { id: 8, category: "Odalar", title: "VIP Suite", color: "text-pink", bgGradient: "from-pink-light to-warm-white", aspectClass: "aspect-square" },
  { id: 9, category: "Bahce", title: "Agility parkuru", color: "text-blue", bgGradient: "from-blue-light to-teal-light", aspectClass: "aspect-[4/3]" },
  { id: 10, category: "Spa", title: "Tuy bakimi", color: "text-pink", bgGradient: "from-pink-light to-orange-light", aspectClass: "aspect-[3/4]" },
  { id: 11, category: "Kopekler", title: "Yuruyus zamani", color: "text-orange", bgGradient: "from-orange-light to-warm-white", aspectClass: "aspect-square" },
  { id: 12, category: "Kediler", title: "Sicak koltuklarda keyif", color: "text-teal", bgGradient: "from-teal-light to-pink-light", aspectClass: "aspect-[4/3]" },
];

export default function GaleriPage() {
  const [activeCategory, setActiveCategory] = useState<Category>("Hepsi");
  const [lightbox, setLightbox] = useState<GalleryItem | null>(null);

  const filtered = activeCategory === "Hepsi"
    ? galleryItems
    : galleryItems.filter((item) => item.category === activeCategory);

  return (
    <>
      {/* Header */}
      <section className="bg-warm-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <h1 className="text-4xl md:text-5xl font-heading font-bold text-dark-brown mb-4">
              Galeri
            </h1>
            <p className="text-dark-brown/60 font-body max-w-2xl mx-auto text-lg">
              Mutlu misafirlerimiz ve tesislerimizden kareler.
            </p>
          </AnimatedSection>
        </div>
      </section>

      <WaveDivider fillTop="#FFF9F0" fillBottom="#ffffff" />

      {/* Filtre & Grid */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Filtre butonlari */}
          <AnimatedSection className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={clsx(
                  "pill-btn text-sm border-2 transition-all",
                  activeCategory === cat
                    ? "bg-orange text-white border-orange"
                    : "bg-white text-dark-brown border-dark-brown/10 hover:border-orange hover:text-orange"
                )}
              >
                {cat}
              </button>
            ))}
          </AnimatedSection>

          {/* Masonry Grid */}
          <div className="masonry-grid">
            <AnimatePresence mode="popLayout">
              {filtered.map((item) => (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.4, ease: [0.34, 1.56, 0.64, 1] }}
                  className="masonry-item"
                >
                  <button
                    onClick={() => setLightbox(item)}
                    className={`block w-full ${item.aspectClass} bg-gradient-to-br ${item.bgGradient} rounded-2xl overflow-hidden cursor-pointer group relative`}
                  >
                    <div className="absolute inset-0 flex items-center justify-center">
                      <svg className={`w-16 h-16 ${item.color} opacity-20`} viewBox="0 0 100 100" fill="currentColor">
                        <ellipse cx="50" cy="65" rx="22" ry="28" />
                        <ellipse cx="28" cy="35" rx="12" ry="14" />
                        <ellipse cx="72" cy="35" rx="12" ry="14" />
                        <ellipse cx="15" cy="55" rx="10" ry="12" />
                        <ellipse cx="85" cy="55" rx="10" ry="12" />
                      </svg>
                    </div>
                    <div className="absolute inset-0 bg-dark-brown/0 group-hover:bg-dark-brown/40 transition-all duration-300 flex items-end p-4">
                      <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <span className="text-white font-heading font-bold text-sm">{item.title}</span>
                        <span className="block text-white/70 text-xs font-body">{item.category}</span>
                      </div>
                    </div>
                  </button>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-dark-brown/80 backdrop-blur-sm flex items-center justify-center p-4"
            onClick={() => setLightbox(null)}
          >
            <motion.div
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.5, opacity: 0 }}
              transition={{ ease: [0.34, 1.56, 0.64, 1] }}
              className="relative max-w-2xl w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <div className={`aspect-[4/3] bg-gradient-to-br ${lightbox.bgGradient} rounded-[24px] flex items-center justify-center`}>
                <svg className={`w-32 h-32 ${lightbox.color} opacity-30`} viewBox="0 0 100 100" fill="currentColor">
                  <ellipse cx="50" cy="65" rx="22" ry="28" />
                  <ellipse cx="28" cy="35" rx="12" ry="14" />
                  <ellipse cx="72" cy="35" rx="12" ry="14" />
                  <ellipse cx="15" cy="55" rx="10" ry="12" />
                  <ellipse cx="85" cy="55" rx="10" ry="12" />
                </svg>
              </div>
              <div className="mt-4 text-center">
                <h3 className="text-white font-heading font-bold text-lg">{lightbox.title}</h3>
                <p className="text-white/60 font-body text-sm">{lightbox.category}</p>
              </div>
              <button
                onClick={() => setLightbox(null)}
                className="absolute -top-3 -right-3 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-lg text-dark-brown hover:bg-orange hover:text-white transition-colors"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
