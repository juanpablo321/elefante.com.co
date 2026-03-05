"use client";
import { motion } from "framer-motion";
import { CheckCircle, ArrowRight, Globe, MapPin, Share2, Zap } from "lucide-react";
import Link from "next/link";

const includes = [
  "Landing page profesional (hasta 5 secciones)",
  "Optimización de Google My Business",
  "Configuración de 2 redes sociales",
  "Formulario de contacto y captura de leads",
  "Google Analytics 4 (GA4) configurado",
  "Google Search Console (GSC) conectada",
  "Dominio y hosting por 1 año incluido",
  "Entrega en 7 días hábiles",
];

const steps = [
  { icon: Globe, label: "Presencia Online", desc: "Tu sitio web profesional listo en días" },
  { icon: MapPin, label: "Google Maps", desc: "Visible en búsquedas locales" },
  { icon: Share2, label: "Redes Sociales", desc: "Perfiles optimizados y listos" },
  { icon: Zap, label: "Captación de Leads", desc: "Formulario que convierte visitantes en clientes" },
];

export default function HookProductSection() {
  return (
    <section id="presencia-digital" className="py-24 relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute inset-0 bg-gradient-to-br from-brand-red/5 via-transparent to-brand-yellow/5 pointer-events-none" />

      <div className="container relative">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="w-8 h-1 bg-brand-yellow rounded-full" />
            <span className="text-brand-yellow text-sm font-semibold tracking-widest uppercase">Empieza aquí</span>
            <div className="w-8 h-1 bg-brand-yellow rounded-full" />
          </div>
          <h2 className="font-display text-5xl md:text-6xl lg:text-7xl tracking-wide gradient-text">
            TU PRIMER PASO
          </h2>
          <p className="text-white/60 mt-4 max-w-2xl mx-auto text-lg">
            La forma más rápida y accesible de tener una presencia digital profesional que atraiga clientes
          </p>
        </motion.div>

        {/* Main card */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left: Product details */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="space-y-8"
          >
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-brand-yellow/10 border border-brand-yellow/30 rounded-full px-4 py-2">
              <Zap size={14} className="text-brand-yellow" />
              <span className="text-brand-yellow text-sm font-semibold">Producto Estrella · Entrega en 7 días</span>
            </div>

            <div>
              <h3 className="font-display text-4xl md:text-5xl tracking-wide text-white uppercase mb-4">
                Paquete de<br />
                <span className="gradient-text">Presencia Digital</span>
              </h3>
              <p className="text-white/60 text-lg leading-relaxed">
                Todo lo que necesitas para que tus clientes potenciales te encuentren, confíen en ti y te contacten.
                Sin tecnicismos, sin complicaciones — nosotros nos encargamos de todo.
              </p>
            </div>

            {/* Price */}
            <div className="flex items-end gap-3">
              <span className="font-display text-6xl text-white">$1.800.000</span>
              <span className="text-white/50 text-lg mb-2">COP · Pago único</span>
            </div>

            {/* Includes */}
            <div className="space-y-3">
              {includes.map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <CheckCircle size={18} className="text-brand-yellow flex-shrink-0" />
                  <span className="text-white/80">{item}</span>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <Link
                href="/presencia-digital-esencial"
                className="bg-brand-yellow hover:bg-brand-yellow/80 text-black font-bold rounded-full px-8 py-4 transition-all duration-300 flex items-center justify-center gap-2 group text-base"
              >
                Quiero mi Presencia Digital
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/#demo"
                className="border border-white/20 hover:border-brand-yellow/50 text-white/80 hover:text-white font-semibold rounded-full px-8 py-4 transition-all duration-300 flex items-center justify-center gap-2 text-base"
              >
                Agendar una llamada
              </Link>
            </div>
          </motion.div>

          {/* Right: Steps visualization */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="grid grid-cols-2 gap-4"
          >
            {steps.map((step, i) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={step.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="bg-card border border-white/5 rounded-2xl p-6 hover:border-brand-yellow/20 transition-all duration-300 group"
                >
                  <div className="w-12 h-12 rounded-xl bg-brand-yellow/10 flex items-center justify-center mb-4 group-hover:bg-brand-yellow/20 transition-colors">
                    <Icon size={24} className="text-brand-yellow" />
                  </div>
                  <h4 className="font-display text-lg text-white uppercase tracking-wide mb-1">{step.label}</h4>
                  <p className="text-white/50 text-sm leading-relaxed">{step.desc}</p>
                </motion.div>
              );
            })}

            {/* Social proof mini card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="col-span-2 bg-gradient-to-r from-brand-yellow/10 to-brand-red/10 border border-brand-yellow/20 rounded-2xl p-6 text-center"
            >
              <p className="text-white/70 text-sm italic mb-2">
                "En menos de una semana ya tenía mi sitio web y mis primeros clientes me encontraron por Google."
              </p>
              <p className="text-brand-yellow text-sm font-semibold">— Profesional Independiente, Bogotá</p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
