"use client";
import { motion } from "framer-motion";
import { ArrowRight, Calendar, CheckCircle } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

const benefits = [
  "Análisis personalizado de tu estrategia actual",
  "Propuesta de crecimiento con proyecciones reales",
  "Sesión de 30 minutos con nuestro especialista"
];

export default function DemoRequestSection() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      // Here you would typically send the email to your backend
      console.log("[v0] Demo request submitted for:", email);
      setSubmitted(true);
      setTimeout(() => {
        setEmail("");
        setSubmitted(false);
      }, 3000);
    }
  };

  return (
    <section id="demo" className="py-24 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-brand-cyan/5 via-transparent to-brand-red/5" />
      <div className="absolute -top-40 -right-40 w-96 h-96 bg-brand-red/5 rounded-full blur-3xl" />
      <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-brand-cyan/5 rounded-full blur-3xl" />

      <div className="container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="space-y-8"
          >
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-1 bg-brand-red rounded-full" />
                <span className="text-brand-red text-sm font-semibold tracking-widest uppercase">Próximo Paso</span>
              </div>
              <h2 className="font-display text-5xl md:text-6xl tracking-wide text-white mb-4">
                Solicita tu Demo Personalizado
              </h2>
              <p className="text-white/70 text-lg leading-relaxed">
                Descubre cómo podemos acelerar el crecimiento de tu negocio con una estrategia personalizada diseñada específicamente para ti.
              </p>
            </div>

            {/* Benefits List */}
            <div className="space-y-4">
              {benefits.map((benefit) => (
                <motion.div
                  key={benefit}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className="flex items-center gap-3"
                >
                  <div className="w-6 h-6 rounded-full bg-brand-red/20 flex items-center justify-center flex-shrink-0">
                    <CheckCircle size={16} className="text-brand-red" />
                  </div>
                  <span className="text-white/80 text-base">{benefit}</span>
                </motion.div>
              ))}
            </div>

            {/* Form */}
            <motion.form
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              onSubmit={handleSubmit}
              className="space-y-3 pt-4"
            >
              <div className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  placeholder="tu@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1 px-6 py-3 rounded-full bg-white/10 border border-white/20 text-white placeholder:text-white/40 focus:outline-none focus:border-brand-red/50 transition-colors"
                  required
                />
                <button
                  type="submit"
                  className="px-8 py-3 rounded-full bg-brand-red hover:bg-brand-red/80 text-white font-semibold transition-all duration-300 flex items-center justify-center gap-2 group whitespace-nowrap"
                >
                  {submitted ? "¡Enviado!" : "Agendar Demo"}
                  {!submitted && <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />}
                </button>
              </div>
              <p className="text-xs text-white/40 px-2">
                Nos pondremos en contacto en máximo 24 horas
              </p>
            </motion.form>
          </motion.div>

          {/* Right Image */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative hidden lg:block"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/images/cta-demo.jpg"
                alt="Demo personalizado"
                width={600}
                height={600}
                className="w-full object-cover"
                unoptimized
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/60 via-transparent to-transparent" />

              {/* Floating card */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute bottom-8 left-8 right-8 bg-card/95 backdrop-blur-md border border-brand-red/30 rounded-xl p-4"
              >
                <div className="flex items-center gap-3 mb-3">
                  <Calendar size={20} className="text-brand-red" />
                  <span className="font-semibold text-white">Reunión con Especialista</span>
                </div>
                <p className="text-white/70 text-sm">
                  Dedica 30 minutos a conocer el potencial de crecimiento de tu empresa
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
