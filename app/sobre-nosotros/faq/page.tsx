import type { Metadata } from "next";
import JsonLdFaq from "@/components/seo/JsonLdFaq";
import FAQContent from "./FAQContent";

// Datos de FAQ duplicados aquí para el JSON-LD (Server Component)
// Los datos originales viven en FAQContent.tsx para el componente cliente
const faqsData = [
  {
    category: "Servicios Generales",
    questions: [
      { q: "¿Qué es Growth Marketing?", a: "Growth Marketing es una metodología enfocada en el crecimiento acelerado de empresas mediante la combinación de marketing, análisis de datos y experimentación. A diferencia del marketing tradicional, el growth marketing se centra en métricas de negocio específicas y en optimizar cada etapa del funnel de conversión." },
      { q: "¿Cuál es la diferencia entre Growth Marketing y marketing digital tradicional?", a: "El marketing digital tradicional se enfoca en crear contenido y campañas. El Growth Marketing va más allá: analiza datos, experimenta constantemente y optimiza cada aspecto del customer journey para maximizar el crecimiento del negocio." },
      { q: "¿Qué servicios ofrece Elefante?", a: "Ofrecemos Growth Marketing, Performance Ads, Social Media, SEO & SEM, Analytics & Data, y soluciones de AI Agents. Cada servicio está diseñado para acelerar tu crecimiento desde diferentes ángulos." }
    ]
  },
  {
    category: "Proceso y Metodología",
    questions: [
      { q: "¿Cómo es el proceso de trabajo con Elefante?", a: "Comenzamos con una consultoría estratégica para entender tu negocio. Luego, diseñamos una estrategia personalizada, la ejecutamos con rigor, medimos resultados constantemente y optimizamos según los datos." },
      { q: "¿Cuánto tiempo tarda en ver resultados?", a: "Los primeros resultados pueden verse en 2-4 semanas, pero el crecimiento sostenible requiere entre 3-6 meses." },
      { q: "¿Cómo miden el éxito de una campaña?", a: "Medimos el éxito mediante KPIs claros definidos al inicio del proyecto: ROI, conversiones, costo de adquisición, lifetime value del cliente, etc." }
    ]
  },
  {
    category: "Inversión y Presupuesto",
    questions: [
      { q: "¿Cuál es el presupuesto mínimo para trabajar con Elefante?", a: "No tenemos un presupuesto mínimo fijo. Trabajamos con empresas de todos los tamaños, desde startups hasta corporaciones." },
      { q: "¿Cómo se estructura el costo de vuestros servicios?", a: "Ofrecemos diferentes modelos: servicios por proyecto, retainers mensuales, o modelos basados en resultados (performance-based)." },
      { q: "¿Qué incluye el presupuesto de publicidad?", a: "El presupuesto de publicidad es separado de nuestros honorarios. Tu inversión en ads va directamente a generar resultados, no a pagar comisiones." }
    ]
  }
];

export const metadata: Metadata = {
  title: "Preguntas Frecuentes | Elefante Growth Marketing",
  description:
    "Resolvemos tus dudas sobre growth marketing, nuestros servicios, metodología, precios y proceso de trabajo. Todo lo que necesitas saber sobre Elefante.",
  keywords:
    "preguntas frecuentes, FAQ, growth marketing preguntas, agencia marketing colombia preguntas",
  alternates: {
    canonical: "/sobre-nosotros/faq",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  openGraph: {
    title: "Preguntas Frecuentes | Elefante Growth Marketing",
    description:
      "Todo lo que necesitas saber sobre nuestros servicios de growth marketing.",
    url: "https://elefante.com.co/sobre-nosotros/faq",
    type: "website",
  },
};

const faqItemsForSchema = faqsData.flatMap((section) =>
  section.questions.map((q) => ({ question: q.q, answer: q.a }))
);

export default function FAQPage() {
  return (
    <>
      <JsonLdFaq items={faqItemsForSchema} />
      <FAQContent />
    </>
  );
}
