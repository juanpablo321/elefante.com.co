"use client";
import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "María González",
    company: "TechStart Colombia",
    role: "CEO & Fundadora",
    content: "Trabajar con Elefante fue transformacional. En 3 meses triplicamos nuestros leads y logramos cerrar deals que parecían imposibles. Su equipo entiende realmente B2B.",
    rating: 5,
    color: "brand-red"
  },
  {
    name: "Carlos Rodríguez",
    company: "E-commerce Bogotá",
    role: "Director de Marketing",
    content: "El ROI que generaron en publicidad digital fue increíble. De un presupuesto que pensaba era perdida, sacamos 3.2x de retorno. Los reportes semanales son claros y transparentes.",
    rating: 5,
    color: "brand-yellow"
  },
  {
    name: "Alejandra Martínez",
    company: "Consultoría Legal Plus",
    role: "Socia",
    content: "Buscábamos un equipo que entendiera servicios profesionales. Elefante lo logró. Escalamos nuestra base de clientes en 280% sin perder calidad. Altamente recomendados.",
    rating: 5,
    color: "brand-cyan"
  },
  {
    name: "Juan Pérez",
    company: "Agencia de Viajes Virtual",
    role: "Propietario",
    content: "Su estrategia en redes sociales fue revolucionaria para nosotros. Pasamos de tener 2K followers a 45K en 6 meses. Pero más importante: el engagement es real.",
    rating: 5,
    color: "brand-red"
  },
  {
    name: "Sofía Mendoza",
    company: "Startup EdTech",
    role: "Directora General",
    content: "No solo ejecutan bien, sino que entienden el negocio. Dieron insights que nunca había considerado. El crecimiento ha sido exponencial desde que los contratamos.",
    rating: 5,
    color: "brand-yellow"
  },
  {
    name: "Ricardo López",
    company: "Distribuidora Premium",
    role: "Gerente Comercial",
    content: "Después de probar otras agencias, Elefante fue diferente. Resultados comprobables, no promesas vagas. Siguen siendo nuestro socio de crecimiento principal.",
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
