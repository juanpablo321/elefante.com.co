"use client";
import { motion } from "framer-motion";
import { TrendingUp, Target, Users, Search, Cpu, BarChart3 } from "lucide-react";
import Link from "next/link";

const services = [
  {
    icon: TrendingUp,
    title: "Estrategia de Crecimiento",
    slug: "growth-marketing",
    description: "Planes integrales para aumentar tu visibilidad, atraer clientes de alto valor y posicionarte como el referente en tu sector — con resultados medibles desde el primer mes.",
    color: "brand-red",
    tag: "Growth Marketing",
  },
  {
    icon: Target,
    title: "Captación de Clientes",
    slug: "performance-ads",
    description: "Atraemos prospectos calificados a tu negocio a través de campañas precisas en Google y Meta. Solo pagas por resultados reales, no por impresiones vacías.",
    color: "brand-yellow",
    tag: "Performance Ads",
  },
  {
    icon: Users,
    title: "Gestión de Marca Personal",
    slug: "social-media",
    description: "Construimos y gestionamos tu presencia en redes sociales para que proyectes autoridad y confianza, conectando con tu audiencia ideal de forma consistente.",
    color: "brand-cyan",
    tag: "Social Media",
  },
  {
    icon: Search,
    title: "Visibilidad en Buscadores",
    slug: "seo-sem",
    description: "Posicionamos tu marca en Google cuando tus clientes potenciales te buscan. SEO, GEO y AEO para que te encuentren en motores de búsqueda tradicionales y de IA.",
    color: "brand-red",
    tag: "SEO / GEO / AEO",
  },
  {
    icon: Cpu,
    title: "Automatización con IA",
    slug: "ai-agents",
    description: "Implementamos agentes de IA y flujos de automatización que califican leads, responden consultas y gestionan tu agenda — para que tú te concentres en tu trabajo.",
    color: "brand-yellow",
    tag: "AI Agents",
  },
  {
    icon: BarChart3,
    title: "Datos e Inteligencia",
    slug: "analytics-data",
    description: "Dashboards personalizados y análisis de datos para que tomes decisiones basadas en evidencia, no en intuición. Claridad total sobre qué funciona y qué no.",
    color: "brand-cyan",
    tag: "Analytics & Data",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function ServicesSection() {
  return (
    <section id="servicios" className="py-24 relative">
      <div className="container">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="w-8 h-1 bg-brand-red rounded-full" />
            <span className="text-brand-red text-sm font-semibold tracking-widest uppercase">Servicios</span>
            <div className="w-8 h-1 bg-brand-red rounded-full" />
          </div>
          <h2 className="font-display text-5xl md:text-6xl lg:text-7xl tracking-wide gradient-text">
            LO QUE HACEMOS
          </h2>
          <p className="text-white/60 mt-4 max-w-2xl mx-auto text-lg">
            Soluciones diseñadas para que los profesionales independientes crezcan sin complicaciones
          </p>
        </motion.div>

        {/* Services grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                variants={cardVariants}
                className={`group relative bg-card border border-white/5 rounded-xl p-8 hover:-translate-y-2 transition-all duration-300 hover:border-${service.color}/30`}
              >
                {/* Colored top border */}
                <div className={`absolute top-0 left-0 right-0 h-1 bg-${service.color} rounded-t-xl opacity-0 group-hover:opacity-100 transition-opacity`} />

                <span className={`inline-block text-xs font-semibold tracking-widest uppercase text-${service.color}/70 mb-4`}>
                  {service.tag}
                </span>

                <div className={`w-14 h-14 rounded-xl bg-${service.color}/10 flex items-center justify-center mb-6 group-hover:bg-${service.color}/20 transition-colors`}>
                  <Icon size={28} className={`text-${service.color}`} />
                </div>

                <h3 className="font-display text-2xl tracking-wide text-white mb-3 uppercase">
                  {service.title}
                </h3>

                <p className="text-white/60 leading-relaxed mb-6">
                  {service.description}
                </p>
                <Link
                  href={`/servicios/${service.slug}`}
                  className={`text-sm font-semibold text-${service.color} hover:underline underline-offset-4 transition-all`}
                >
                  Conocer más →
                </Link>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
