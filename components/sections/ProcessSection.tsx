"use client";
import { motion } from "framer-motion";
import { Search, Lightbulb, Rocket, TrendingUp } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: Search,
    title: "Diagnóstico",
    description: "Analizamos tu situación actual, mercado, competencia y oportunidades. Identificamos los puntos clave para el crecimiento.",
    details: ["Auditoría completa", "Análisis competitivo", "Identificación de oportunidades"]
  },
  {
    number: "02",
    icon: Lightbulb,
    title: "Estrategia",
    description: "Diseñamos un plan personalizado con objetivos claros, KPIs medibles y acciones concretas alineadas con tu negocio.",
    details: ["Plan de acción", "Definición de KPIs", "Roadmap de implementación"]
  },
  {
    number: "03",
    icon: Rocket,
    title: "Ejecución",
    description: "Implementamos las estrategias con creatividad y precisión. Optimizamos continuamente basándonos en datos reales.",
    details: ["Campaña launch", "Optimización continua", "Reporting semanal"]
  },
  {
    number: "04",
    icon: TrendingUp,
    title: "Escalado",
    description: "Una vez validado, escalamos lo que funciona. Ampliamos canales, presupuesto y alcance para maximizar resultados.",
    details: ["Aumento de inversión", "Nuevos canales", "Crecimiento sostenible"]
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const stepVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function ProcessSection() {
  return (
    <section id="proceso" className="py-24 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-1/2 -right-40 w-96 h-96 bg-brand-yellow/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 -left-20 w-80 h-80 bg-brand-cyan/5 rounded-full blur-3xl" />

      <div className="container relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="w-8 h-1 bg-brand-yellow rounded-full" />
            <span className="text-brand-yellow text-sm font-semibold tracking-widest uppercase">Nuestro Proceso</span>
            <div className="w-8 h-1 bg-brand-yellow rounded-full" />
          </div>
          <h2 className="font-display text-5xl md:text-6xl tracking-wide text-white mb-6">
            Cómo Funciona Nuestro Método
          </h2>
          <p className="text-white/60 max-w-2xl mx-auto text-lg">
            Un proceso comprobado que combina análisis, creatividad y optimización continua para resultados excepcionales.
          </p>
        </motion.div>

        {/* Steps */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.number}
                variants={stepVariants}
                className="relative"
              >
                {/* Connection line (desktop only) */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-20 -right-6 w-12 h-1 bg-gradient-to-r from-brand-yellow/50 to-transparent" />
                )}

                <div className="relative bg-card/50 backdrop-blur-sm border border-white/5 rounded-xl p-8 h-full hover:border-brand-yellow/30 transition-all duration-300 group">
                  {/* Top accent */}
                  <div className="absolute -top-1 left-8 h-1 w-8 bg-gradient-to-r from-brand-yellow to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

                  {/* Step number */}
                  <div className="absolute -top-4 -left-4 w-12 h-12 rounded-full bg-brand-yellow/20 border-2 border-brand-yellow flex items-center justify-center">
                    <span className="font-display text-lg font-bold text-brand-yellow">{step.number}</span>
                  </div>

                  {/* Icon */}
                  <div className="w-12 h-12 rounded-lg bg-brand-yellow/15 flex items-center justify-center mb-6 mt-4 group-hover:bg-brand-yellow/25 transition-colors">
                    <Icon size={24} className="text-brand-yellow" />
                  </div>

                  {/* Content */}
                  <h3 className="font-display text-2xl tracking-wide text-white mb-3">
                    {step.title}
                  </h3>

                  <p className="text-white/60 text-sm leading-relaxed mb-6">
                    {step.description}
                  </p>

                  {/* Details */}
                  <div className="space-y-2 pt-4 border-t border-white/5">
                    {step.details.map((detail) => (
                      <div key={detail} className="text-xs text-white/40">
                        • {detail}
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
