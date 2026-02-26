"use client";
import { motion } from "framer-motion";
import { ArrowRight, Zap } from "lucide-react";
import Image from "next/image";
import { IMAGES } from "@/lib/images";

const stats = [
  { value: "+150", label: "Proyectos" },
  { value: "+50", label: "Clientes" },
  { value: "98%", label: "Satisfaccion" },
];

const floatingCards = [
  { label: "ROI Promedio", value: "+340%", color: "brand-red" },
  { label: "Leads Generados", value: "12.5K", color: "brand-cyan" },
];

export default function HeroSection() {
  const handleNavClick = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <Image src={IMAGES.hero} alt="Hero background" fill className="object-cover opacity-20" unoptimized priority />
        <div className="absolute inset-0 bg-gradient-to-br from-brand-dark via-brand-dark/95 to-brand-dark/80" />
      </div>

      {/* Geometric shapes */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-brand-red/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-brand-cyan/5 rounded-full blur-3xl" />
      <div className="absolute top-1/3 right-1/4 w-2 h-32 bg-brand-yellow/20 rotate-12" />

      <div className="container relative z-10 pt-24 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left content */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="lg:col-span-7 space-y-6"
          >
            {/* Accent bars */}
            <div className="flex gap-2 mb-4">
              <div className="w-12 h-1 bg-brand-red rounded-full" />
              <div className="w-8 h-1 bg-brand-yellow rounded-full" />
              <div className="w-4 h-1 bg-brand-cyan rounded-full" />
            </div>

            <div className="space-y-2">
              <h1 className="font-display text-6xl sm:text-7xl md:text-8xl lg:text-9xl tracking-wide leading-none">
                <span className="text-white">ELEFANTE</span>
              </h1>
              <h2 className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl tracking-wide leading-none gradient-text">
                AGENCIA
              </h2>
            </div>

            <p className="text-lg md:text-xl text-brand-yellow font-semibold tracking-wider uppercase">
              Growth Marketing Agency
            </p>

            <p className="text-white/70 text-base md:text-lg max-w-xl leading-relaxed">
              Transformamos marcas con estrategias de crecimiento basadas en datos.
              Creatividad, tecnologia y resultados medibles para impulsar tu negocio al siguiente nivel.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button
                onClick={() => handleNavClick("#contacto")}
                className="bg-brand-red hover:bg-brand-red/80 text-white font-semibold rounded-full px-8 py-3 transition-all duration-300 flex items-center justify-center gap-2 group"
              >
                Empezar Ahora
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </button>
              <button
                onClick={() => handleNavClick("#portafolio")}
                className="border border-white/20 hover:border-white/40 text-white font-semibold rounded-full px-8 py-3 transition-all duration-300 hover:bg-white/5"
              >
                Ver Portafolio
              </button>
            </div>

            {/* Stats */}
            <div className="flex gap-8 pt-8 border-t border-white/10">
              {stats.map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="font-display text-3xl md:text-4xl text-brand-red">{stat.value}</div>
                  <div className="text-sm text-white/50 mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right content */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            className="lg:col-span-5 relative hidden lg:block"
          >
            <div className="relative">
              <div className="relative w-full aspect-square rounded-2xl overflow-hidden">
                <Image src={IMAGES.hero} alt="Elefante Growth Marketing" fill className="object-cover" unoptimized />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/60 via-transparent to-transparent" />
              </div>

              {/* Floating metric cards */}
              {floatingCards.map((card, i) => (
                <motion.div
                  key={card.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.8 + i * 0.2 }}
                  className={`absolute ${i === 0 ? "-top-4 -left-4" : "-bottom-4 -right-4"} bg-card/90 backdrop-blur-md border border-white/10 rounded-xl p-4 shadow-xl`}
                >
                  <div className="flex items-center gap-3">
                    <div className={`w-10 h-10 rounded-lg bg-${card.color}/20 flex items-center justify-center`}>
                      <Zap size={20} className={`text-${card.color}`} />
                    </div>
                    <div>
                      <div className="text-xs text-white/50">{card.label}</div>
                      <div className="font-display text-xl text-white">{card.value}</div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
