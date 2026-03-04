"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import Image from "next/image";

const navLinks = [
  { label: "Inicio", href: "#hero" },
  { label: "Estrategias", href: "#estrategias" },
  { label: "Proceso", href: "#proceso" },
  { label: "Beneficios", href: "#beneficios" },
  { label: "Casos", href: "#casos" },
  { label: "Testimonios", href: "#testimonios" },
  { label: "Contacto", href: "#contacto" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.header
      initial={{ y: -100 }} animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-brand-dark/95 backdrop-blur-md shadow-lg shadow-black/20 border-b border-white/5" : "bg-transparent"
      }`}
    >
      <nav className="container flex items-center justify-between h-16 md:h-20">
        <a href="#hero" onClick={(e) => { e.preventDefault(); handleNavClick("#hero"); }} className="flex items-center group">
          <Image src="/new_logo.png" alt="Elefante Logo" width={240} height={80} className="h-42 md:h-48 w-auto" priority />
        </a>
        <div className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
              className="px-4 py-2 text-sm font-medium text-white/70 hover:text-white transition-colors relative group">
              {link.label}
              <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-brand-red group-hover:w-3/4 transition-all duration-300" />
            </a>
          ))}
          <button onClick={() => handleNavClick("#contacto")}
            className="ml-4 bg-brand-red hover:bg-brand-red/80 text-white font-semibold rounded-full px-6 py-2 transition-colors">
            Hablemos
          </button>
        </div>
        <button onClick={() => setMobileOpen(!mobileOpen)} className="md:hidden text-white p-2" aria-label="Toggle menu">
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>
      <AnimatePresence>
        {mobileOpen && (
          <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-brand-dark/98 backdrop-blur-md border-t border-white/5 overflow-hidden">
            <div className="container py-6 flex flex-col gap-2">
              {navLinks.map((link) => (
                <a key={link.href} href={link.href} onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
                  className="py-3 px-4 text-lg font-medium text-white/80 hover:text-white hover:bg-white/5 rounded-lg transition-colors">
                  {link.label}
                </a>
              ))}
              <button onClick={() => handleNavClick("#contacto")}
                className="mt-4 bg-brand-red hover:bg-brand-red/80 text-white font-semibold rounded-full py-2">
                Hablemos
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
