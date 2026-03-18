import Link from "next/link";

function PawIcon({ className }: { className?: string }) {
  return (
    <svg className={className} width="20" height="20" viewBox="0 0 100 100" fill="currentColor" opacity="0.15">
      <ellipse cx="50" cy="65" rx="22" ry="28" />
      <ellipse cx="28" cy="35" rx="12" ry="14" />
      <ellipse cx="72" cy="35" rx="12" ry="14" />
      <ellipse cx="15" cy="55" rx="10" ry="12" />
      <ellipse cx="85" cy="55" rx="10" ry="12" />
    </svg>
  );
}

export default function Footer() {
  return (
    <footer className="relative bg-dark-brown text-white overflow-hidden">
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <PawIcon className="absolute top-8 left-[10%]" />
        <PawIcon className="absolute top-12 right-[15%]" />
        <PawIcon className="absolute bottom-8 left-[30%]" />
        <PawIcon className="absolute bottom-12 right-[25%]" />
        <PawIcon className="absolute top-1/2 left-[60%]" />
        <PawIcon className="absolute top-6 left-[45%]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <svg width="28" height="28" viewBox="0 0 100 100" fill="#FF8C42">
                <ellipse cx="50" cy="65" rx="22" ry="28" />
                <ellipse cx="28" cy="35" rx="12" ry="14" />
                <ellipse cx="72" cy="35" rx="12" ry="14" />
                <ellipse cx="15" cy="55" rx="10" ry="12" />
                <ellipse cx="85" cy="55" rx="10" ry="12" />
              </svg>
              <span className="font-heading text-xl font-bold">
                Paw<span className="text-orange">some</span>
              </span>
            </div>
            <p className="text-white/70 text-sm font-body leading-relaxed">
              Istanbul Cekmekoy&apos;de evcil hayvanlariniz icin en sicak ve guvenli otel deneyimi.
            </p>
          </div>

          <div>
            <h4 className="font-heading font-bold text-orange mb-4">Sayfalar</h4>
            <ul className="space-y-2 text-sm font-body">
              <li><Link href="/" className="text-white/70 hover:text-orange transition-colors">Ana Sayfa</Link></li>
              <li><Link href="/hizmetler" className="text-white/70 hover:text-orange transition-colors">Hizmetler</Link></li>
              <li><Link href="/odalar" className="text-white/70 hover:text-orange transition-colors">Odalar & Fiyatlar</Link></li>
              <li><Link href="/galeri" className="text-white/70 hover:text-orange transition-colors">Galeri</Link></li>
              <li><Link href="/hakkimizda" className="text-white/70 hover:text-orange transition-colors">Hakkimizda</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-heading font-bold text-orange mb-4">Hizmetler</h4>
            <ul className="space-y-2 text-sm font-body">
              <li><Link href="/hizmetler" className="text-white/70 hover:text-orange transition-colors">Konaklama</Link></li>
              <li><Link href="/hizmetler" className="text-white/70 hover:text-orange transition-colors">Gunluk Bakim</Link></li>
              <li><Link href="/hizmetler" className="text-white/70 hover:text-orange transition-colors">Spa & Bakim</Link></li>
              <li><Link href="/hizmetler" className="text-white/70 hover:text-orange transition-colors">Egitim</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-heading font-bold text-orange mb-4">Iletisim</h4>
            <ul className="space-y-3 text-sm font-body text-white/70">
              <li className="flex items-start gap-2">
                <svg className="w-4 h-4 mt-0.5 text-orange shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                Cekmekoy, Istanbul
              </li>
              <li className="flex items-center gap-2">
                <svg className="w-4 h-4 text-orange shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                0216 555 00 00
              </li>
              <li className="flex items-center gap-2">
                <svg className="w-4 h-4 text-orange shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                info@pawsomepet.com
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10 text-center text-sm text-white/50 font-body">
          <p>&copy; 2026 Pawsome Pet Hotel. Tum haklari saklidir.</p>
        </div>
      </div>
    </footer>
  );
}
