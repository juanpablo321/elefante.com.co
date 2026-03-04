"use client";
import { motion } from "framer-motion";
import { Award, Zap, Shield, TrendingUp, Users, Headphones } from "lucide-react";

const benefits = [
  {
    icon: Award,
    title: "Resultados Probados",
    description: "Más de 150 proyectos exitosos con un promedio de ROI de +340%. Casos reales de empresas que escalaron con nosotros.",
    color: "brand-red"
  },
  {
    icon: Zap,
    title: "Implementación Rápida",
    description: "Comenzamos a generar resultados en las primeras 2-3 semanas. Sin procesos burocráticos, acción inmediata.",
    color: "brand-yellow"
  },
  {
    icon: Shield,
    title: "Transparencia Total",
    description: "Reportes semanales detallados, dashboards en tiempo real y comunicación constante. Sabes exactamente qué está pasando.",
    color: "brand-cyan"
  },
  {
    icon: TrendingUp,
    title: "Crecimiento Sostenible",
    description: "No buscamos gains rápidos. Construimos estrategias sólidas que escalan con tu negocio a largo plazo.",
    color: "brand-red"
  },
  {
    icon: Users,
    title: "Equipo Especializado",
    description: "Estrategas, creatives, data analysts y especialistas en cada canal trabajando exclusivamente en tu marca.",
    color: "brand-yellow"
  },
  {
    icon: Headphones,
    title: "Soporte Dedicado",
    description: "Un gerente de cuenta que entiende tu negocio y está disponible para responder tus preguntas y optimizar estrategias.",
    color: "brand-cyan"
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function BenefitsSection() {
  return (
    <section id="beneficios" className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-brand-dark/0 via-brand-dark/30 to-brand-dark/0" />
      <div className="absolute -top-40 left-1/4 w-96 h-96 bg-brand-red/5 rounded-full blur-3xl" />
      <div className="absolute -bottom-40 right-1/4 w-96 h-96 bg-brand-cyan/5 rounded-full blur-3xl" />

      <div className="container relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="w-8 h-1 bg-brand-red rounded-full" />
            <span className="text-brand-red text-sm font-semibold tracking-widest uppercase">Ventajas</span>
            <div className="w-8 h-1 bg-brand-red rounded-full" />
          </div>
          <h2 className="font-display text-5xl md:text-6xl lg:text-7xl tracking-wide text-white mb-6">
            ¿Por Qué Elegir Elefante?
          </h2>
          <p className="text-white/60 max-w-2xl mx-auto text-lg">
            Somos más que una agencia. Somos tu equipo de crecimiento, comprometidos con tus resultados.
          </p>
        </motion.div>

        {/* Benefits Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {benefits.map((benefit) => {
            const Icon = benefit.icon;
            return (
              <motion.div
                key={benefit.title}
                variants={itemVariants}
                className={`group relative bg-gradient-to-br from-card/60 to-card/30 backdrop-blur-sm border border-white/5 rounded-xl p-8 hover:border-${benefit.color}/30 transition-all duration-300 hover:shadow-lg hover:shadow-${benefit.color}/5`}
              >
                {/* Colored border top */}
                <div className={`absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-${benefit.color} to-transparent rounded-t-xl opacity-0 group-hover:opacity-100 transition-opacity`} />

                <div className={`w-14 h-14 rounded-xl bg-${benefit.color}/15 flex items-center justify-center mb-6 group-hover:bg-${benefit.color}/25 group-hover:scale-110 transition-all duration-300`}>
                  <Icon size={28} className={`text-${benefit.color}`} />
                </div>

                <h3 className="font-display text-2xl tracking-wide text-white mb-3">
                  {benefit.title}
                </h3>

                <p className="text-white/70 leading-relaxed">
                  {benefit.description}
                </p>

                {/* Hover effect bottom */}
                <div className={`absolute -bottom-0.5 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-${benefit.color} to-transparent opacity-0 group-hover:opacity-100 transition-opacity`} />
              </motion.div>
            );
          })}
        </motion.div>

        {/* Trust Metric */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-20 bg-gradient-to-r from-brand-red/10 via-brand-yellow/10 to-brand-cyan/10 border border-white/5 rounded-2xl p-12 text-center"
        >
          <p className="text-white/80 text-lg mb-6">
            <span className="text-white font-semibold">+98% de satisfacción</span> entre nuestros clientes
          </p>
          <div className="flex flex-wrap justify-center items-center gap-8">
            <div className="text-center">
              <div className="font-display text-4xl text-brand-red mb-2">150+</div>
              <div className="text-white/60 text-sm">Proyectos Completados</div>
            </div>
            <div className="text-center">
              <div className="font-display text-4xl text-brand-yellow mb-2">50+</div>
              <div className="text-white/60 text-sm">Clientes Activos</div>
            </div>
            <div className="text-center">
              <div className="font-display text-4xl text-brand-cyan mb-2">7</div>
              <div className="text-white/60 text-sm">Años de Experiencia</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
