"use client";
import { motion } from "framer-motion";
import { CheckCircle, TrendingUp, Users, Zap, Target, BarChart3 } from "lucide-react";
import Image from "next/image";

const strategies = [
  {
    icon: Target,
    title: "Identificación de Oportunidades",
    description: "Análisis profundo de tu mercado, competencia y audiencia para identificar las mejores oportunidades de crecimiento.",
    benefits: ["Análisis competitivo", "Segmentación de audiencia", "Identificación de nichos"]
  },
  {
    icon: Zap,
    title: "Optimización de Conversión",
    description: "Mejoramos cada paso del funnel de ventas para convertir más visitantes en clientes.",
    benefits: ["A/B Testing", "Landing page optimization", "CRO strategies"]
  },
  {
    icon: Users,
    title: "Adquisición de Clientes",
    description: "Estrategias multi-canal para atraer clientes de alta calidad de forma sostenible.",
    benefits: ["Ads optimization", "SEO/SEM", "Content marketing"]
  },
  {
    icon: BarChart3,
    title: "Retención y Escalado",
    description: "Maximize el valor de cada cliente con estrategias de retención y upselling.",
    benefits: ["Customer retention", "Lifetime value optimization", "Referral programs"]
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function GrowthStrategiesSection() {
  return (
    <section id="estrategias" className="py-24 bg-gradient-to-b from-transparent via-brand-dark/30 to-transparent relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute -top-40 right-0 w-96 h-96 bg-brand-cyan/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-1/4 w-80 h-80 bg-brand-red/5 rounded-full blur-3xl" />

      <div className="container relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20"
        >
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-1 bg-brand-cyan rounded-full" />
              <span className="text-brand-cyan text-sm font-semibold tracking-widest uppercase">Nuestro Enfoque</span>
            </div>
            <h2 className="font-display text-5xl md:text-6xl tracking-wide text-white mb-6">
              Estrategias de Crecimiento que Funcionan
            </h2>
            <p className="text-white/70 text-lg leading-relaxed max-w-xl">
              Combinamos análisis de datos, creatividad y tecnología para crear un plan de crecimiento adaptado a tu negocio.
            </p>
          </div>
          <div className="relative hidden lg:block">
            <div className="relative aspect-square rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/images/strategies-illustration.jpg"
                alt="Growth strategies"
                fill
                className="object-cover"
                unoptimized
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/40 to-transparent" />
            </div>
          </div>
        </motion.div>

        {/* Strategies Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {strategies.map((strategy) => {
            const Icon = strategy.icon;
            return (
              <motion.div
                key={strategy.title}
                variants={cardVariants}
                className="group relative bg-card/40 backdrop-blur-sm border border-white/5 rounded-xl p-8 hover:border-brand-cyan/30 hover:bg-card/60 transition-all duration-300"
              >
                {/* Top accent */}
                <div className="absolute -top-1 left-8 h-1 w-8 bg-gradient-to-r from-brand-cyan to-brand-cyan/0 opacity-0 group-hover:opacity-100 transition-opacity" />

                <div className="w-12 h-12 rounded-lg bg-brand-cyan/15 flex items-center justify-center mb-6 group-hover:bg-brand-cyan/25 transition-colors">
                  <Icon size={24} className="text-brand-cyan" />
                </div>

                <h3 className="font-display text-xl tracking-wide text-white mb-3">
                  {strategy.title}
                </h3>

                <p className="text-white/60 text-sm leading-relaxed mb-6">
                  {strategy.description}
                </p>

                <div className="space-y-2">
                  {strategy.benefits.map((benefit) => (
                    <div key={benefit} className="flex items-center gap-2 text-white/50 text-sm">
                      <CheckCircle size={16} className="text-brand-cyan/70 flex-shrink-0" />
                      <span>{benefit}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
