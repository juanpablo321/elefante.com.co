"use client";
import { Breadcrumb } from "@/components/Breadcrumb";
import { motion } from "framer-motion";
import { Users, Target, Zap, Award } from "lucide-react";
import Link from "next/link";

const teamValues = [
  {
    icon: Target,
    title: "Enfoque en Resultados",
    description: "Cada estrategia está diseñada para generar impacto medible en tus métricas de negocio."
  },
  {
    icon: Zap,
    title: "Innovación Constante",
    description: "Nos mantenemos a la vanguardia de las tendencias de marketing digital y tecnología."
  },
  {
    icon: Users,
    title: "Trabajo Colaborativo",
    description: "Tu equipo es parte del nuestro. Creemos en la transparencia y la comunicación abierta."
  },
  {
    icon: Award,
    title: "Excelencia",
    description: "No conformarse con lo bueno es nuestro estándar. Buscamos la excelencia en cada proyecto."
  }
];

const teamMembers = [
  {
    name: "Equipo de Estrategia",
    role: "Growth Marketing Specialists",
    description: "Expertos en identificar oportunidades de crecimiento y diseñar estrategias escalables."
  },
  {
    name: "Equipo de Ejecución",
    role: "Performance Specialists",
    description: "Profesionales en optimización de campañas, análisis de datos y mejora continua."
  },
  {
    name: "Equipo de Tecnología",
    role: "Tech & AI Specialists",
    description: "Desarrolladores e ingenieros que integran IA y automatización en tus procesos."
  }
];

export default function QuienesSomos() {
  return (
    <main className="min-h-screen bg-brand-dark">
      <Breadcrumb />
      
      {/* Hero Section */}
      <section className="container pt-32 pb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl"
        >
          <h1 className="text-5xl md:text-6xl font-display font-bold text-white mb-6 leading-tight">
            Somos <span className="text-brand-red">Elefante</span>
          </h1>
          <p className="text-xl text-white/70 mb-8 leading-relaxed">
            Una agencia de Growth Marketing apasionada por transformar negocios colombianos mediante estrategia, datos e innovación tecnológica.
          </p>
        </motion.div>
      </section>

      {/* Mission & Vision */}
      <section className="container py-16 border-t border-white/5">
        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-display font-bold text-white mb-4">Nuestra Misión</h2>
            <p className="text-white/70 leading-relaxed mb-4">
              Acelerar el crecimiento de empresas colombianas a través de estrategias de marketing basadas en datos, creatividad y tecnología de punta. Nos comprometemos a ser partners estratégicos que entienden tu negocio y generan resultados tangibles.
            </p>
            <p className="text-white/70 leading-relaxed">
              Creemos que el growth marketing no es solo sobre números, sino sobre construir relaciones duraderas con tus clientes.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-display font-bold text-white mb-4">Nuestra Visión</h2>
            <p className="text-white/70 leading-relaxed mb-4">
              Ser la agencia de growth marketing más confiable y efectiva en Colombia, reconocida por nuestra capacidad de transformar empresas en líderes de mercado.
            </p>
            <p className="text-white/70 leading-relaxed">
              Queremos que cada cliente que trabaja con nosotros sienta que tiene un equipo dedicado a su éxito, disponible y comprometido con sus objetivos.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Values */}
      <section className="container py-16 border-t border-white/5">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="text-4xl font-display font-bold text-white mb-4">Nuestros Valores</h2>
          <p className="text-white/70 max-w-2xl">
            Estos principios guían cada decisión que tomamos y cada proyecto que ejecutamos.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {teamValues.map((value, index) => {
            const Icon = value.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white/5 border border-white/10 rounded-lg p-6 hover:border-brand-red/50 transition-colors"
              >
                <Icon size={32} className="text-brand-red mb-4" />
                <h3 className="text-xl font-semibold text-white mb-3">{value.title}</h3>
                <p className="text-white/70">{value.description}</p>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* Team */}
      <section className="container py-16 border-t border-white/5">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="text-4xl font-display font-bold text-white mb-4">Nuestro Equipo</h2>
          <p className="text-white/70 max-w-2xl">
            Un equipo multidisciplinario de expertos en growth marketing, tecnología y análisis de datos.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-white/5 to-white/2 border border-white/10 rounded-lg p-8 text-center"
            >
              <h3 className="text-xl font-semibold text-white mb-2">{member.name}</h3>
              <p className="text-brand-red font-medium mb-4">{member.role}</p>
              <p className="text-white/70 text-sm">{member.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="container py-16 border-t border-white/5">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-brand-red/10 to-brand-cyan/10 border border-brand-red/20 rounded-lg p-12 text-center"
        >
          <h2 className="text-3xl font-display font-bold text-white mb-4">
            ¿Listo para crecer con nosotros?
          </h2>
          <p className="text-white/70 mb-8 max-w-2xl mx-auto">
            Si compartes nuestra visión de transformación digital y quieres llevar tu negocio al siguiente nivel, estamos aquí para ayudarte.
          </p>
          <Link
            href="/contacto"
            className="inline-block bg-brand-red hover:bg-brand-red/80 text-white font-semibold px-8 py-3 rounded-full transition-colors"
          >
            Hablemos de tu crecimiento
          </Link>
        </motion.div>
      </section>
    </main>
  );
}
