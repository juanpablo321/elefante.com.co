"use client";
import { motion } from "framer-motion";
import { Lightbulb, Handshake, Trophy, Globe } from "lucide-react";
import Image from "next/image";
import { IMAGES } from "@/lib/images";

const values = [
  { icon: Lightbulb, label: "Innovacion", color: "brand-red" },
  { icon: Handshake, label: "Colaboracion", color: "brand-yellow" },
  { icon: Trophy, label: "Resultados", color: "brand-cyan" },
  { icon: Globe, label: "Vision Global", color: "brand-red" },
];

export default function AboutSection() {
  return (
    <section id="nosotros" className="py-24 relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-brand-red/3" />

      <div className="container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Image */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden aspect-[4/5]">
              <Image src={IMAGES.about} alt="Equipo Elefante" fill className="object-cover" unoptimized />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/40 via-transparent to-transparent" />
            </div>

            {/* Offset accent border */}
            <div className="absolute -bottom-4 -right-4 w-full h-full border-2 border-brand-red/30 rounded-2xl -z-10" />

            {/* Experience badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="absolute -bottom-6 -left-6 bg-brand-red text-white rounded-xl p-5 shadow-xl"
            >
              <div className="font-display text-4xl">+8</div>
              <div className="text-sm font-medium opacity-90">Anos de Experiencia</div>
            </motion.div>
          </motion.div>

          {/* Right: Content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="space-y-6"
          >
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-1 bg-brand-yellow rounded-full" />
                <span className="text-brand-yellow text-sm font-semibold tracking-widest uppercase">Nosotros</span>
              </div>
              <h2 className="font-display text-5xl md:text-6xl lg:text-7xl tracking-wide leading-none">
                <span className="gradient-text">SOBRE NOSOTROS</span>
              </h2>
            </div>

            <p className="text-white/70 text-lg leading-relaxed">
              Somos una agencia de growth marketing con sede en Colombia, apasionados por transformar
              marcas a traves de estrategias innovadoras y basadas en datos. Nuestro equipo combina
              creatividad con analisis para entregar resultados que superan expectativas.
            </p>

            <p className="text-white/70 text-lg leading-relaxed">
              Desde nuestra fundacion, hemos ayudado a mas de 50 empresas a escalar sus operaciones
              digitales, generando un impacto medible en sus ingresos y presencia de marca. Creemos
              en relaciones a largo plazo construidas sobre transparencia y resultados.
            </p>

            {/* Values */}
            <div className="grid grid-cols-2 gap-4 pt-6">
              {values.map((value) => {
                const Icon = value.icon;
                return (
                  <motion.div
                    key={value.label}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className={`flex items-center gap-3 p-4 bg-card rounded-xl border border-white/5 hover:border-${value.color}/30 transition-colors`}
                  >
                    <div className={`w-10 h-10 rounded-lg bg-${value.color}/10 flex items-center justify-center shrink-0`}>
                      <Icon size={20} className={`text-${value.color}`} />
                    </div>
                    <span className="text-white font-medium">{value.label}</span>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
