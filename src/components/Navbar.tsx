"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import clsx from "clsx";

const links = [
  { href: "/", label: "Ana Sayfa" },
  { href: "/hizmetler", label: "Hizmetler" },
  { href: "/odalar", label: "Odalar & Fiyatlar" },
  { href: "/galeri", label: "Galeri" },
  { href: "/hakkimizda", label: "Hakkımızda" },
  { href: "/iletisim", label: "İletişim" },
];

function PawLogo() {
  return (
    <svg width="32" height="32" viewBox="0 0 100 100" fill="#FF8C42">
      <ellipse cx="50" cy="65" rx="22" ry="28" />
      <ellipse cx="28" cy="35" rx="12" ry="14" />
      <ellipse cx="72" cy="35" rx="12" ry="14" />
      <ellipse cx="15" cy="55" rx="10" ry="12" />
      <ellipse cx="85" cy="55" rx="10" ry="12" />
    </svg>
  );
}

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-warm-white/95 backdrop-blur-sm shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <Link href="/" className="flex items-center gap-2 group">
            <PawLogo />
            <span className="font-heading text-xl md:text-2xl font-bold text-dark-brown">
              Paw<span className="text-orange">some</span>
            </span>
          </Link>

          <div className="hidden md:flex items-center gap-1">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={clsx(
                  "px-3 py-2 rounded-xl text-sm font-medium font-body transition-colors duration-200",
                  pathname === link.href
                    ? "text-orange bg-orange-light"
                    : "text-dark-brown hover:text-orange hover:bg-orange-light/50"
                )}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/iletisim"
              className="pill-btn bg-orange text-white text-sm ml-2 hover:bg-orange/90"
            >
              Rezervasyon
            </Link>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-xl text-dark-brown hover:bg-orange-light transition-colors"
            aria-label="Menu"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              {isOpen ? (
                <path d="M6 6l12 12M6 18L18 6" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-warm-white border-t border-orange/10 overflow-hidden"
          >
            <div className="px-4 py-4 space-y-2">
              {links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={clsx(
                    "block px-4 py-3 rounded-xl text-sm font-medium font-body transition-colors",
                    pathname === link.href
                      ? "text-orange bg-orange-light"
                      : "text-dark-brown hover:text-orange hover:bg-orange-light/50"
                  )}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="/iletisim"
                onClick={() => setIsOpen(false)}
                className="block text-center pill-btn bg-orange text-white text-sm mt-2"
              >
                Rezervasyon
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
