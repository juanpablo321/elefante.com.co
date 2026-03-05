"use client";
import { Breadcrumb } from "@/components/Breadcrumb";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useState } from "react";
import Link from "next/link";

const faqs = [
  {
    category: "Servicios Generales",
    questions: [
      {
        q: "¿Qué es Growth Marketing?",
        a: "Growth Marketing es una metodología enfocada en el crecimiento acelerado de empresas mediante la combinación de marketing, análisis de datos y experimentación. A diferencia del marketing tradicional, el growth marketing se centra en métricas de negocio específicas y en optimizar cada etapa del funnel de conversión."
      },
      {
        q: "¿Cuál es la diferencia entre Growth Marketing y marketing digital tradicional?",
        a: "El marketing digital tradicional se enfoca en crear contenido y campañas. El Growth Marketing va más allá: analiza datos, experimenta constantemente y optimiza cada aspecto del customer journey para maximizar el crecimiento del negocio."
      },
      {
        q: "¿Qué servicios ofrece Elefante?",
        a: "Ofrecemos Growth Marketing, Performance Ads, Social Media, SEO & SEM, Analytics & Data, y soluciones de AI Agents. Cada servicio está diseñado para acelerar tu crecimiento desde diferentes ángulos."
      }
    ]
  },
  {
    category: "Proceso y Metodología",
    questions: [
      {
        q: "¿Cómo es el proceso de trabajo con Elefante?",
        a: "Comenzamos con una consultoría estratégica para entender tu negocio. Luego, diseñamos una estrategia personalizada, la ejecutamos con rigor, medimos resultados constantemente y optimizamos según los datos. La transparencia y la comunicación son fundamentales en cada paso."
      },
      {
        q: "¿Cuánto tiempo tarda en ver resultados?",
        a: "Los primeros resultados pueden verse en 2-4 semanas, pero el crecimiento sostenible requiere entre 3-6 meses. Esto depende de tu industria, presupuesto y objetivos. Nos enfocamos en resultados a largo plazo, no en soluciones rápidas."
      },
      {
        q: "¿Cómo miden el éxito de una campaña?",
        a: "Medimos el éxito mediante KPIs claros definidos al inicio del proyecto: ROI, conversiones, costo de adquisición, lifetime value del cliente, etc. Proporcionamos reportes detallados cada mes para que siempre sepas cómo va tu inversión."
      }
    ]
  },
  {
    category: "Inversión y Presupuesto",
    questions: [
      {
        q: "¿Cuál es el presupuesto mínimo para trabajar con Elefante?",
        a: "No tenemos un presupuesto mínimo fijo. Trabajamos con empresas de todos los tamaños, desde startups hasta corporaciones. Lo importante es que haya un presupuesto dedicado a ejecución y que estés comprometido con los resultados."
      },
      {
        q: "¿Cómo se estructura el costo de vuestros servicios?",
        a: "Ofrecemos diferentes modelos: servicios por proyecto, retainers mensuales, o modelos basados en resultados (performance-based). Cada modelo se adapta a tus necesidades y objetivos específicos."
      },
      {
        q: "¿Qué incluye el presupuesto de publicidad?",
        a: "El presupuesto de publicidad es separado de nuestros honorarios. Esto significa que tu inversión en ads (Google, Meta, etc.) va directamente a generar resultados, no a pagar comisiones. Nosotros optimizamos cada peso que inviertas."
      }
    ]
  },
  {
    category: "Tecnología y Herramientas",
    questions: [
      {
        q: "¿Qué herramientas utilizan para el análisis?",
        a: "Utilizamos Google Analytics 4, herramientas de IA avanzadas, plataformas de automatización, CRM especializados y dashboards personalizados. Todas las herramientas están seleccionadas para maximizar la precisión de los datos y la automatización."
      },
      {
        q: "¿Integran AI en vuestras estrategias?",
        a: "Sí, la IA es fundamental en nuestro enfoque. La utilizamos para predicción de comportamiento, automatización de campañas, análisis predictivo y personalización a escala. Nuestro servicio de AI Agents está diseñado específicamente para esto."
      },
      {
        q: "¿Necesito tener herramientas específicas en mi empresa?",
        a: "No necesariamente. Nosotros nos encargamos de la implementación y gestión de herramientas. Sin embargo, es importante que tengas acceso a datos de tu negocio (ventas, clientes, comportamiento) para que podamos trabajar efectivamente."
      }
    ]
  },
  {
    category: "Compromiso y Resultados",
    questions: [
      {
        q: "¿Garantizan resultados específicos?",
        a: "No garantizamos números específicos porque cada negocio es diferente. Lo que sí garantizamos es nuestro compromiso, metodología rigurosa, análisis constante y optimización basada en datos. Nuestro track record habla por sí solo."
      },
      {
        q: "¿Qué pasa si no vemos resultados en el primer mes?",
        a: "El primer mes es de análisis, configuración y optimización inicial. Los resultados significativos generalmente aparecen entre el mes 2 y 3. Si después de 3 meses no hay progreso, revisamos la estrategia y hacemos ajustes significativos."
      },
      {
        q: "¿Puedo cancelar el contrato en cualquier momento?",
        a: "Dependiendo del tipo de contrato, sí. Creemos en relaciones basadas en resultados y confianza. Si no estamos generando valor, prefieres trabajar con otro equipo o cambian tus prioridades, podemos terminar la relación de manera profesional."
      }
    ]
  },
  {
    category: "Comunicación y Soporte",
    questions: [
      {
        q: "¿Con qué frecuencia nos comunicamos?",
        a: "Depende del tipo de proyecto. Generalmente, tenemos reuniones semanales o quincenales para revisar avances. Además, proporcionamos acceso a dashboards en tiempo real para que sigas el progreso en cualquier momento."
      },
      {
        q: "¿Quién será mi punto de contacto?",
        a: "Tendrás un Account Manager dedicado que será tu punto de contacto principal. Este profesional conocerá tu negocio en profundidad y coordinará con todo nuestro equipo para asegurar que recibas el mejor servicio."
      },
      {
        q: "¿Qué pasa después de que termina el proyecto?",
        a: "Ofrecemos soporte post-proyecto para asegurar que todo continúe funcionando correctamente. También podemos establecer un plan de mantenimiento y optimización continua para que sigas creciendo."
      }
    ]
  }
];

function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      viewport={{ once: true }}
      className="border border-white/10 rounded-lg overflow-hidden"
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-6 py-4 flex items-center justify-between bg-white/5 hover:bg-white/10 transition-colors"
      >
        <h3 className="text-lg font-semibold text-white text-left">{question}</h3>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <ChevronDown size={20} className="text-brand-red shrink-0" />
        </motion.div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="px-6 py-4 bg-white/2 border-t border-white/10"
          >
            <p className="text-white/70 leading-relaxed">{answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function FAQ() {
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
            Preguntas <span className="text-brand-red">Frecuentes</span>
          </h1>
          <p className="text-xl text-white/70 leading-relaxed">
            Resolvemos tus dudas sobre nuestros servicios, metodología, inversión y cómo trabajamos.
          </p>
        </motion.div>
      </section>

      {/* FAQ Sections */}
      <section className="container py-16">
        {faqs.map((section, sectionIndex) => (
          <motion.div
            key={sectionIndex}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: sectionIndex * 0.1 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h2 className="text-3xl font-display font-bold text-white mb-8 pb-4 border-b border-brand-red/30">
              {section.category}
            </h2>
            <div className="space-y-4">
              {section.questions.map((item, index) => (
                <FAQItem key={index} question={item.q} answer={item.a} />
              ))}
            </div>
          </motion.div>
        ))}
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
            ¿Aún tienes preguntas?
          </h2>
          <p className="text-white/70 mb-8 max-w-2xl mx-auto">
            Nuestro equipo está disponible para resolver cualquier duda adicional. Contáctanos y hablemos sobre cómo podemos ayudarte a crecer.
          </p>
          <Link
            href="/contacto"
            className="inline-block bg-brand-red hover:bg-brand-red/80 text-white font-semibold px-8 py-3 rounded-full transition-colors"
          >
            Contactar ahora
          </Link>
        </motion.div>
      </section>
    </main>
  );
}
