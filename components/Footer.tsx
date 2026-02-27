"use client";
import { Mail, Phone, MapPin } from "lucide-react";

const footerLinks = [
  { label: "Inicio", href: "#hero" },
  { label: "Servicios", href: "#servicios" },
  { label: "Nosotros", href: "#nosotros" },
  { label: "Portafolio", href: "#portafolio" },
  { label: "Contacto", href: "#contacto" },
];

const socialLinks = [
  { label: "Instagram", href: "https://instagram.com/elefante.agency" },
  { label: "LinkedIn", href: "https://linkedin.com/company/elefante-agency" },
];

export default function Footer() {
  const handleNavClick = (href: string) => {
    if (href.startsWith("#")) {
      document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="relative bg-brand-dark border-t border-white/5">
      {/* Zigzag divider */}
      <div className="zigzag-divider" />

      <div className="container py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="space-y-4">
            <span className="font-display text-4xl tracking-wider text-white">ELEFANTE</span>
            <p className="text-white/50 text-sm leading-relaxed">
              Agencia de Growth Marketing en Colombia. Estrategia, creatividad y datos para hacer crecer tu marca.
            </p>
            <div className="flex gap-2">
              <div className="w-8 h-1 bg-brand-red rounded-full" />
              <div className="w-6 h-1 bg-brand-yellow rounded-full" />
              <div className="w-4 h-1 bg-brand-cyan rounded-full" />
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-display text-xl tracking-wider text-white mb-4">NAVEGACION</h4>
            <ul className="space-y-3">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick(link.href);
                    }}
                    className="text-white/50 hover:text-white text-sm transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display text-xl tracking-wider text-white mb-4">CONTACTO</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-3">
                <Mail size={16} className="text-brand-red shrink-0" />
                <span className="text-white/50 text-sm">hola@elefante.com.co</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={16} className="text-brand-yellow shrink-0" />
                <span className="text-white/50 text-sm">+57 312 7205970</span>
              </li>
              <li className="flex items-center gap-3">
                <MapPin size={16} className="text-brand-cyan shrink-0" />
                <span className="text-white/50 text-sm">Bogota, Colombia</span>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-display text-xl tracking-wider text-white mb-4">SOCIAL</h4>
            <ul className="space-y-3">
              {socialLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white/50 hover:text-brand-red text-sm transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Copyright bar */}
      <div className="border-t border-white/5">
        <div className="container py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/30 text-sm">
            &copy; {new Date().getFullYear()} Elefante Growth Marketing Agency. Todos los derechos reservados.
          </p>
          <p className="text-white/20 text-xs">
            Hecho con pasion en Colombia
          </p>
        </div>
      </div>
    </footer>
  );
}
