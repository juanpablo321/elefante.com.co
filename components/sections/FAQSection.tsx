"use client";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useState } from "react";

const faqs = [
  {
    question: "¿Cuánto tiempo tarda en ver resultados?",
    answer: "Generalmente, nuestros clientes comienzan a ver resultados significativos en 4-6 semanas. Los primeros KPIs como tráfico y leads pueden mejorar incluso antes. Trabajamos en optimización continua desde el primer día."
  },
  {
    question: "¿Cuál es el presupuesto mínimo para trabajar con ustedes?",
    answer: "Trabajamos con empresas de todos los tamaños. Nuestros planes comienzan desde presupuestos accesibles en publicidad digital. El presupuesto ideal depende de tus objetivos, mercado y competencia. Podemos crear un plan personalizado durante tu consulta gratuita."
  },
  {
    question: "¿Qué pasa si no estoy satisfecho con los resultados?",
    answer: "La satisfacción del cliente es nuestra prioridad. Realizamos reportes semanales transparentes y ajustamos estrategias basadas en datos reales. Si no hay progress después de 60 días, discutimos cambios o alternativas. Nuestro +98% de satisfacción lo demuestra."
  },
  {
    question: "¿Necesito estar disponible todo el tiempo?",
    answer: "No. Nuestro equipo trabaja de forma independiente con reportes regulares. Tendrás un gerente de cuenta dedicado para preguntas importantes, pero no requiere tu atención constante. Idealmente, una reunión semanal de 30 minutos."
  },
  {
    question: "¿Qué plataformas de publicidad manejan?",
    answer: "Somos especialistas en Google Ads, Meta (Facebook/Instagram), TikTok, LinkedIn y otros canales. También ejecutamos estrategias de SEO, email marketing, social media orgánico y marketing de contenidos."
  },
  {
    question: "¿Puedo ver casos anteriores de empresas como la mía?",
    answer: "Absolutamente. Tenemos casos de éxito en e-commerce, SaaS, servicios profesionales y retail. Durante la consulta, compartimos ejemplos relevantes respetando confidencialidad."
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
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function FAQSection() {
  const [openItems, setOpenItems] = useState<string[]>([]);

  const toggleItem = (question: string) => {
    setOpenItems(prev =>
      prev.includes(question)
        ? prev.filter(q => q !== question)
        : [...prev, question]
    );
  };

  return (
    <section id="faq" className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-brand-dark/20 to-transparent" />
      <div className="absolute top-1/3 -right-40 w-96 h-96 bg-brand-cyan/5 rounded-full blur-3xl" />

      <div className="container relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="w-8 h-1 bg-brand-cyan rounded-full" />
            <span className="text-brand-cyan text-sm font-semibold tracking-widest uppercase">Dudas Comunes</span>
            <div className="w-8 h-1 bg-brand-cyan rounded-full" />
          </div>
          <h2 className="font-display text-5xl md:text-6xl tracking-wide text-white mb-6">
            Preguntas Frecuentes
          </h2>
          <p className="text-white/60 max-w-2xl mx-auto text-lg">
            Resolvemos las dudas más comunes sobre nuestros servicios y proceso
          </p>
        </motion.div>

        {/* FAQ Items */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-4xl mx-auto"
        >
          {faqs.map((faq) => (
            <motion.div
              key={faq.question}
              variants={itemVariants}
              onClick={() => toggleItem(faq.question)}
              className="cursor-pointer group"
            >
              <div className="bg-card/40 backdrop-blur-sm border border-white/5 rounded-xl overflow-hidden hover:border-brand-cyan/30 transition-all duration-300">
                <div className="p-6 flex items-start justify-between gap-4">
                  <h3 className="font-semibold text-white text-left group-hover:text-brand-cyan transition-colors flex-1">
                    {faq.question}
                  </h3>
                  <ChevronDown
                    size={20}
                    className={`text-brand-cyan/60 flex-shrink-0 transition-transform duration-300 ${
                      openItems.includes(faq.question) ? "rotate-180" : ""
                    }`}
                  />
                </div>

                {/* Answer */}
                {openItems.includes(faq.question) && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="border-t border-white/5"
                  >
                    <div className="p-6 text-white/70 leading-relaxed text-sm">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 text-center"
        >
          <p className="text-white/70 mb-6">
            ¿No encontraste la respuesta que buscas?
          </p>
          <button
            onClick={() => document.querySelector("#contacto")?.scrollIntoView({ behavior: "smooth" })}
            className="inline-flex items-center gap-2 px-8 py-3 rounded-full bg-brand-cyan/20 border border-brand-cyan/40 text-brand-cyan hover:bg-brand-cyan/30 transition-all duration-300 font-semibold"
          >
            Contáctanos Directamente
          </button>
        </motion.div>
      </div>
    </section>
  );
}
