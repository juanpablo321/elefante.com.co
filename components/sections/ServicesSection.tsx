"use client";
import { motion } from "framer-motion";
import { TrendingUp, Target, Users, Search, Palette, BarChart3 } from "lucide-react";

const services = [
  {
    icon: TrendingUp,
    title: "Growth Marketing",
    description: "Estrategias integrales de crecimiento que combinan creatividad, datos y tecnologia para escalar tu negocio de forma sostenible.",
    color: "brand-red",
  },
  {
    icon: Target,
    title: "Performance Ads",
    description: "Campanas publicitarias optimizadas en Google, Meta y TikTok con enfoque en ROI y conversion medible.",
    color: "brand-yellow",
  },
  {
    icon: Users,
    title: "Social Media",
    description: "Gestion estrategica de redes sociales con contenido que conecta, engagement que convierte y comunidades que crecen.",
    color: "brand-cyan",
  },
  {
    icon: Search,
    title: "SEO & SEM",
    description: "Posicionamiento organico y pago en buscadores para que tu marca aparezca cuando tus clientes te necesitan.",
    color: "brand-red",
  },
  {
    icon: Palette,
    title: "Branding Digital",
    description: "Identidad de marca que destaca. Desde el logo hasta la experiencia digital completa que representa tu vision.",
    color: "brand-yellow",
  },
  {
    icon: BarChart3,
    title: "Analytics & Data",
    description: "Dashboards personalizados, tracking avanzado y analisis de datos para tomar decisiones basadas en evidencia.",
    color: "brand-cyan",
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
            Soluciones completas de marketing digital para impulsar el crecimiento de tu marca
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

                <div className={`w-14 h-14 rounded-xl bg-${service.color}/10 flex items-center justify-center mb-6 group-hover:bg-${service.color}/20 transition-colors`}>
                  <Icon size={28} className={`text-${service.color}`} />
                </div>

                <h3 className="font-display text-2xl tracking-wide text-white mb-3 uppercase">
                  {service.title}
                </h3>

                <p className="text-white/60 leading-relaxed">
                  {service.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
