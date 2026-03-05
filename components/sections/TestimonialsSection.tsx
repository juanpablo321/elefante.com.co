"use client";
import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Valentina Ospina",
    company: "Consultora Financiera Independiente",
    role: "Bogotá, Colombia",
    content: "Antes no tenía presencia en internet y dependía 100% de referidos. Hoy mis clientes me encuentran en Google y agenden directamente desde mi sitio. En el primer mes recuperé la inversión.",
    rating: 5,
    color: "brand-red"
  },
  {
    name: "Sebastián Mora",
    company: "Arquitecto Independiente",
    role: "Medellín, Colombia",
    content: "Elefante entendió exactamente lo que necesitaba: mostrar mi trabajo de forma profesional y atraer proyectos de mayor valor. Las campañas en Meta me generan consultas de calidad cada semana.",
    rating: 5,
    color: "brand-yellow"
  },
  {
    name: "Camila Torres",
    company: "Nutricionista Clínica",
    role: "Cali, Colombia",
    content: "El agente de IA que implementaron califica mis leads automáticamente. Ahora solo hablo con personas que ya están listas para contratar. Dupliqué mis consultas sin trabajar más horas.",
    rating: 5,
    color: "brand-cyan"
  },
  {
    name: "Andrés Cárdenas",
    company: "Consultor de Negocios",
    role: "Bogotá, Colombia",
    content: "Los reportes de analytics me muestran exactamente dónde están mis clientes y qué contenido les interesa. Tomo decisiones con datos reales, no con intuición. Un cambio total en mi forma de operar.",
    rating: 5,
    color: "brand-red"
  },
  {
    name: "Laura Gutiérrez",
    company: "Psicóloga Organizacional",
    role: "Barranquilla, Colombia",
    content: "Mi marca personal en LinkedIn creció de 500 a 8.000 seguidores en 4 meses. Pero lo más valioso es que ahora me llegan oportunidades de conferencias y talleres que antes no imaginaba.",
    rating: 5,
    color: "brand-yellow"
  },
  {
    name: "Felipe Ramírez",
    company: "Contador Público Independiente",
    role: "Pereira, Colombia",
    content: "Quería posicionarme como experto en tributación para PyMEs. Elefante diseñó una estrategia de contenido y SEO que me puso en la primera página de Google en menos de 3 meses. Increíble.",
    rating: 5,
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

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function TestimonialsSection() {
  return (
    <section id="testimonios" className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-brand-dark/0 via-brand-dark/20 to-brand-dark/0" />
      <div className="absolute -top-40 right-1/3 w-96 h-96 bg-brand-yellow/5 rounded-full blur-3xl" />
      <div className="absolute -bottom-40 left-1/3 w-96 h-96 bg-brand-cyan/5 rounded-full blur-3xl" />

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
            <div className="w-8 h-1 bg-brand-yellow rounded-full" />
            <span className="text-brand-yellow text-sm font-semibold tracking-widest uppercase">Testimonios</span>
            <div className="w-8 h-1 bg-brand-yellow rounded-full" />
          </div>
          <h2 className="font-display text-5xl md:text-6xl tracking-wide text-white mb-6">
            Lo Que Dicen Nuestros Clientes
          </h2>
          <p className="text-white/60 max-w-2xl mx-auto text-lg">
            Empresas colombianas que han transformado su crecimiento con nuestras estrategias
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {testimonials.map((testimonial) => (
            <motion.div
              key={testimonial.name}
              variants={cardVariants}
              className={`group relative bg-card/50 backdrop-blur-sm border border-white/5 rounded-xl p-8 hover:border-${testimonial.color}/30 transition-all duration-300`}
            >
              {/* Top accent */}
              <div className={`absolute -top-1 left-8 h-1 w-8 bg-gradient-to-r from-${testimonial.color} to-transparent opacity-0 group-hover:opacity-100 transition-opacity`} />

              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    size={16}
                    className={`text-${testimonial.color} fill-${testimonial.color}`}
                  />
                ))}
              </div>

              {/* Content */}
              <p className="text-white/80 leading-relaxed mb-6 italic">
                "{testimonial.content}"
              </p>

              {/* Author */}
              <div className="border-t border-white/5 pt-6">
                <div className="font-semibold text-white">{testimonial.name}</div>
                <div className="text-xs text-white/50 mt-1">{testimonial.role}</div>
                <div className={`text-xs text-${testimonial.color} font-medium mt-2`}>
                  {testimonial.company}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Trust Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-20 text-center"
        >
          <div className="inline-block px-8 py-4 bg-gradient-to-r from-brand-red/10 to-brand-cyan/10 border border-white/5 rounded-full">
            <p className="text-white/80">
              <span className="text-brand-yellow font-bold">⭐ 4.9/5</span> calificación promedio en clientes de growth marketing
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
