"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { TrendingUp, Users, DollarSign } from "lucide-react";

const caseStudies = [
  {
    title: "E-commerce de Moda",
    category: "Retail Digital",
    description: "Empresa colombiana de ropa que necesitaba escalar sus ventas online.",
    results: [
      { metric: "+340%", label: "Aumento en Conversiones" },
      { metric: "+12.5K", label: "Nuevos Clientes" },
      { metric: "3.2x", label: "ROI Retorno" }
    ],
    image: "/images/case-study-1.jpg",
    badgeBg: "bg-red-500/20",
    badgeBorder: "border-red-500/40",
    badgeText: "text-red-400"
  },
  {
    title: "SaaS B2B",
    category: "Software",
    description: "Plataforma de software que buscaba incrementar su base de clientes.",
    results: [
      { metric: "+280%", label: "Tráfico Orgánico" },
      { metric: "+45%", label: "Tasa de Conversión" },
      { metric: "8.5K", label: "MRR Generado" }
    ],
    image: "/images/case-study-2.jpg",
    badgeBg: "bg-cyan-500/20",
    badgeBorder: "border-cyan-500/40",
    badgeText: "text-cyan-400"
  },
  {
    title: "Agencia de Servicios",
    category: "Consultoría",
    description: "Consultora que necesitaba generar leads de calidad para sus servicios.",
    results: [
      { metric: "+520%", label: "Leads Generados" },
      { metric: "+180%", label: "Leads Calificados" },
      { metric: "2.8x", label: "Cost per Lead" }
    ],
    image: "/images/case-study-3.jpg",
    badgeBg: "bg-yellow-500/20",
    badgeBorder: "border-yellow-500/40",
    badgeText: "text-yellow-400"
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
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function CaseStudiesSection() {
  return (
    <section id="casos" className="py-24 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-b from-brand-dark/0 via-brand-dark/20 to-brand-dark/40" />
      <div className="absolute top-1/2 -left-40 w-80 h-80 bg-brand-red/5 rounded-full blur-3xl" />
      <div className="absolute -bottom-20 right-1/4 w-96 h-96 bg-brand-cyan/5 rounded-full blur-3xl" />

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
            <span className="text-brand-yellow text-sm font-semibold tracking-widest uppercase">Resultados Probados</span>
            <div className="w-8 h-1 bg-brand-yellow rounded-full" />
          </div>
          <h2 className="font-display text-5xl md:text-6xl lg:text-7xl tracking-wide text-white mb-6">
            Casos de Éxito
          </h2>
          <p className="text-white/60 max-w-2xl mx-auto text-lg">
            Empresas colombianas que transformaron su crecimiento con nuestras estrategias de marketing
          </p>
        </motion.div>

        {/* Case Studies Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {caseStudies.map((caseStudy, index) => (
            <motion.div
              key={caseStudy.title}
              variants={cardVariants}
              className="group relative rounded-2xl overflow-hidden"
            >
              {/* Image container */}
              <div className="relative h-64 overflow-hidden rounded-2xl mb-6">
                <Image
                  src={caseStudy.image}
                  alt={caseStudy.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                  unoptimized
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/80 via-brand-dark/40 to-transparent" />
                <div className={`absolute top-4 left-4 px-3 py-1 ${caseStudy.badgeBg} border ${caseStudy.badgeBorder} rounded-full`}>
                  <span className={`text-xs font-semibold ${caseStudy.badgeText} uppercase tracking-wider`}>
                    {caseStudy.category}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="relative bg-card/60 backdrop-blur-sm border border-white/5 rounded-xl p-6 hover:border-white/10 transition-all duration-300">
                <h3 className="font-display text-2xl tracking-wide text-white mb-2">
                  {caseStudy.title}
                </h3>
                <p className="text-white/60 text-sm leading-relaxed mb-6">
                  {caseStudy.description}
                </p>

                {/* Results */}
                <div className="space-y-4">
                  <div className="text-xs font-semibold text-white/40 uppercase tracking-wider">Resultados</div>
                  {caseStudy.results.map((result) => (
                    <div key={result.label} className="flex items-center justify-between pb-3 border-b border-white/5">
                      <span className="text-white/60 text-sm">{result.label}</span>
                      <div className="font-display text-xl tracking-wider text-brand-yellow">
                        {result.metric}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
