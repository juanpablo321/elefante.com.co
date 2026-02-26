"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { IMAGES } from "@/lib/images";

const cases = [
  {
    title: "E-Commerce Growth",
    category: "Growth Marketing",
    metric: "+340%",
    description: "Incremento en ventas online para una marca de moda colombiana mediante estrategias de funnel completo.",
    image: IMAGES.caseEcommerce,
  },
  {
    title: "Social Media",
    category: "Social Media",
    metric: "+180%",
    description: "Crecimiento en engagement y seguidores para una startup de tecnologia en Latinoamerica.",
    image: IMAGES.caseSocial,
  },
  {
    title: "Brand Identity",
    category: "Branding Digital",
    metric: "+250%",
    description: "Reconocimiento de marca y posicionamiento digital para una empresa de alimentos organicos.",
    image: IMAGES.caseBranding,
  },
  {
    title: "SEO Domination",
    category: "SEO & SEM",
    metric: "+400%",
    description: "Trafico organico y posicionamiento en primeras posiciones de Google para un portal de servicios financieros.",
    image: IMAGES.caseEcommerce,
  },
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

export default function PortfolioSection() {
  return (
    <section id="portafolio" className="py-24 relative">
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
            <div className="w-8 h-1 bg-brand-cyan rounded-full" />
            <span className="text-brand-cyan text-sm font-semibold tracking-widest uppercase">Portafolio</span>
            <div className="w-8 h-1 bg-brand-cyan rounded-full" />
          </div>
          <h2 className="font-display text-5xl md:text-6xl lg:text-7xl tracking-wide gradient-text">
            CASOS DE EXITO
          </h2>
          <p className="text-white/60 mt-4 max-w-2xl mx-auto text-lg">
            Resultados reales que demuestran nuestro compromiso con el crecimiento de nuestros clientes
          </p>
        </motion.div>

        {/* Portfolio grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {cases.map((item) => (
            <motion.div
              key={item.title}
              variants={cardVariants}
              className="group relative rounded-2xl overflow-hidden aspect-[16/10] cursor-pointer"
            >
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
                unoptimized
              />

              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-brand-dark/60 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

              {/* Content */}
              <div className="absolute inset-0 p-6 md:p-8 flex flex-col justify-end">
                {/* Category badge */}
                <span className="inline-block w-fit bg-brand-red/20 text-brand-red text-xs font-semibold px-3 py-1 rounded-full mb-3 border border-brand-red/30">
                  {item.category}
                </span>

                <h3 className="font-display text-3xl md:text-4xl tracking-wide text-white mb-2">
                  {item.title}
                </h3>

                <p className="text-white/60 text-sm md:text-base mb-4 line-clamp-2">
                  {item.description}
                </p>

                {/* Metric badge */}
                <div className="flex items-center gap-2">
                  <span className="font-display text-3xl text-brand-yellow">{item.metric}</span>
                  <span className="text-white/50 text-sm">crecimiento</span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
