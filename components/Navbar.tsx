"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { NavDropdown } from "./NavDropdown";

interface NavLink {
  label: string;
  href?: string;
  submenu?: Array<{ label: string; href: string }>;
  isCategory?: boolean;
}

function MobileMenuCategory({
  label,
  submenu,
  onItemClick,
}: {
  label: string;
  submenu: Array<{ label: string; href: string }>;
  onItemClick: (href: string) => void;
}) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex flex-col gap-2">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="py-3 px-4 text-lg font-medium text-white/80 hover:text-white hover:bg-white/5 rounded-lg transition-colors flex items-center justify-between"
      >
        {label}
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.2 }}
        >
          <ChevronDown size={18} />
        </motion.div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="flex flex-col gap-1 pl-4"
          >
            {submenu.map((item) => {
              const isExternalRoute = !item.href.startsWith('#');
              return isExternalRoute ? (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="py-2 px-3 text-base text-white/70 hover:text-white hover:bg-white/5 rounded-lg transition-colors"
                >
                  {item.label}
                </Link>
              ) : (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault();
                    onItemClick(item.href);
                    setIsOpen(false);
                  }}
                  className="py-2 px-3 text-base text-white/70 hover:text-white hover:bg-white/5 rounded-lg transition-colors"
                >
                  {item.label}
                </a>
              );
            })}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

const navLinks: NavLink[] = [
  { label: "Inicio", href: "/" },
  {
    label: "Conoce",
    isCategory: true,
    submenu: [
      { label: "Estrategias de Crecimiento", href: "/estrategia" },
      { label: "Nuestro Proceso", href: "/proceso" },
      { label: "Beneficios Clave", href: "/beneficios" }
    ]
  },
  {
    label: "Empresa",
    isCategory: true,
    submenu: [
      { label: "Sobre Nosotros", href: "#nosotros" },
      { label: "Portafolio", href: "#portafolio" }
    ]
  },
  {
    label: "Casos",
    isCategory: true,
    submenu: [
      { label: "Casos de Éxito", href: "#casos" },
      { label: "Testimonios", href: "#testimonios" }
    ]
  }
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
        <Link href="/" className="flex items-center group">
          <Image src="/new_logo.png" alt="Elefante Logo" width={240} height={80} className="h-42 md:h-48 w-auto" priority />
        </Link>
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => {
            if (link.isCategory && link.submenu) {
              return (
                <NavDropdown
                  key={link.label}
                  label={link.label}
                  submenu={link.submenu}
                  onItemClick={handleNavClick}
                />
              );
            }
            if (!link.href) return null;
            const href = link.href;
            return (
              <a key={href} href={href} onClick={(e) => { e.preventDefault(); handleNavClick(href); }}
                className="px-4 py-2 text-sm font-medium text-white/70 hover:text-white transition-colors relative group">
                {link.label}
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-brand-red group-hover:w-3/4 transition-all duration-300" />
              </a>
            );
          })}
          <div className="w-px h-6 bg-white/10 mx-2" />
          <Link href="/contacto"
            className="bg-brand-red hover:bg-brand-red/80 text-white font-semibold rounded-full px-6 py-2 transition-colors shadow-lg shadow-brand-red/20">
            Hablemos
          </Link>
        </div>
        <button onClick={() => setMobileOpen(!mobileOpen)} className="md:hidden text-white p-2" aria-label="Toggle menu">
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>
      <AnimatePresence>
        {mobileOpen && (
          <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-brand-dark/98 backdrop-blur-md border-t border-white/5 overflow-hidden">
            <div className="container py-6 flex flex-col gap-4">
              {navLinks.map((link, index) => {
                if (link.isCategory && link.submenu) {
                  return (
                    <MobileMenuCategory
                      key={link.label}
                      label={link.label}
                      submenu={link.submenu}
                      onItemClick={handleNavClick}
                    />
                  );
                }
                if (!link.href) return null;
                const href = link.href;
                return (
                  <a key={href} href={href} onClick={(e) => { e.preventDefault(); handleNavClick(href); }}
                    className="py-3 px-4 text-lg font-medium text-white/80 hover:text-white hover:bg-white/5 rounded-lg transition-colors">
                    {link.label}
                  </a>
                );
              })}
              <div className="h-px bg-white/10 my-2" />
              <Link href="/contacto"
                className="mt-2 w-full block text-center bg-brand-red hover:bg-brand-red/80 text-white font-semibold rounded-full py-3 transition-colors">
                Hablemos
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
