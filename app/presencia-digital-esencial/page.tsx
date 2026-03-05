import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { CheckCircle, ArrowRight, Globe, MapPin, Share2, Zap, Clock, Shield, Star } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Paquete de Presencia Digital Esencial | Elefante",
  description:
    "Todo lo que necesitas para tener una presencia digital profesional en 7 días. Landing page, Google My Business y redes sociales desde $1.800.000 COP.",
  alternates: {
    canonical: "https://elefante.com.co/presencia-digital-esencial",
  },
  robots: { index: true, follow: true },
  openGraph: {
    title: "Paquete de Presencia Digital Esencial | Elefante",
    description: "Presencia digital profesional en 7 días. Ideal para profesionales independientes en Colombia.",
    url: "https://elefante.com.co/presencia-digital-esencial",
    type: "website",
  },
};

const includes = [
  {
    icon: Globe,
    title: "Landing Page Profesional",
    desc: "Diseño moderno, responsivo y optimizado para convertir visitantes en clientes. Hasta 5 secciones.",
  },
  {
    icon: MapPin,
    title: "Google My Business",
    desc: "Configuración y optimización de tu perfil para aparecer en búsquedas locales y en Google Maps.",
  },
  {
    icon: Share2,
    title: "Perfiles en Redes Sociales",
    desc: "Configuración y optimización de 2 redes sociales (LinkedIn, Instagram o Facebook) con imagen de marca coherente.",
  },
  {
    icon: Zap,
    title: "Formulario de Captura de Leads",
    desc: "Formulario de contacto integrado que envía notificaciones a tu email cuando alguien te contacta.",
  },
  {
    icon: Shield,
    title: "Dominio y Hosting",
    desc: "Tu dominio .com.co o .com incluido por 1 año, con hosting de alto rendimiento en Vercel.",
  },
  {
    icon: Clock,
    title: "Entrega en 7 Días Hábiles",
    desc: "Proceso ágil y eficiente. En menos de una semana tienes tu presencia digital lista para recibir clientes.",
  },
];

const testimonials = [
  {
    name: "Valentina Ospina",
    role: "Consultora Financiera Independiente",
    content: "En 5 días ya tenía mi sitio web y mis primeros clientes me encontraron por Google. La inversión se pagó sola en el primer mes.",
    rating: 5,
  },
  {
    name: "Sebastián Mora",
    role: "Arquitecto Independiente, Medellín",
    content: "Antes no tenía presencia en internet. Ahora mis clientes me buscan en Google y me llegan por WhatsApp directamente desde mi sitio.",
    rating: 5,
  },
  {
    name: "Camila Torres",
    role: "Nutricionista, Bogotá",
    content: "El proceso fue muy fácil. Elefante se encargó de todo y el resultado fue mucho mejor de lo que esperaba. Totalmente recomendado.",
    rating: 5,
  },
];

const faqs = [
  {
    q: "¿Qué necesito para empezar?",
    a: "Solo necesitas tu información de contacto, logo (o te ayudamos a crearlo) y una descripción de tu servicio. Nosotros nos encargamos del resto.",
  },
  {
    q: "¿Puedo actualizar el sitio después?",
    a: "Sí. Una vez entregado, el sitio es tuyo. Además, ofrecemos planes de mantenimiento mensual para quienes quieran delegar las actualizaciones.",
  },
  {
    q: "¿Qué pasa después de los 7 días?",
    a: "Recibes el sitio listo para publicar, con acceso completo. También te hacemos una sesión de entrega para explicarte cómo funciona todo.",
  },
  {
    q: "¿El precio incluye impuestos?",
    a: "El precio de $1.800.000 COP es el precio final. Si requieres factura con IVA, se aplica el impuesto correspondiente.",
  },
];

export default function PresenciaDigitalEsencialPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main>
        {/* Hero */}
        <section className="pt-32 pb-20 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-brand-yellow/5 via-transparent to-brand-red/5 pointer-events-none" />
          <div className="container relative">
            <div className="max-w-3xl mx-auto text-center space-y-6">
              <div className="inline-flex items-center gap-2 bg-brand-yellow/10 border border-brand-yellow/30 rounded-full px-4 py-2">
                <Zap size={14} className="text-brand-yellow" />
                <span className="text-brand-yellow text-sm font-semibold">Entrega garantizada en 7 días hábiles</span>
              </div>
              <h1 className="font-display text-5xl md:text-6xl lg:text-7xl tracking-wide leading-tight">
                <span className="text-white">PRESENCIA</span><br />
                <span className="gradient-text">DIGITAL</span><br />
                <span className="text-white/80">ESENCIAL</span>
              </h1>
              <p className="text-white/60 text-xl leading-relaxed max-w-2xl mx-auto">
                Todo lo que un profesional independiente necesita para ser encontrado, generar confianza y recibir clientes por internet — en menos de una semana.
              </p>
              <div className="flex items-end justify-center gap-3 pt-4">
                <span className="font-display text-6xl text-white">$1.800.000</span>
                <span className="text-white/50 text-xl mb-2">COP · Pago único</span>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-2">
                <Link
                  href="/#demo"
                  className="bg-brand-yellow hover:bg-brand-yellow/80 text-black font-bold rounded-full px-10 py-4 transition-all duration-300 flex items-center justify-center gap-2 group text-lg"
                >
                  Quiero Empezar Ahora
                  <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  href="/contacto"
                  className="border border-white/20 hover:border-white/40 text-white/80 hover:text-white font-semibold rounded-full px-10 py-4 transition-all duration-300 flex items-center justify-center text-lg"
                >
                  Tengo una pregunta
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* What's included */}
        <section className="py-20">
          <div className="container">
            <div className="text-center mb-14">
              <h2 className="font-display text-4xl md:text-5xl tracking-wide gradient-text mb-4">QUÉ INCLUYE</h2>
              <p className="text-white/50 text-lg max-w-xl mx-auto">Todo lo esencial para que tu presencia digital trabaje por ti desde el día uno</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {includes.map((item) => {
                const Icon = item.icon;
                return (
                  <div key={item.title} className="bg-card border border-white/5 rounded-2xl p-8 hover:border-brand-yellow/20 transition-all duration-300 group">
                    <div className="w-12 h-12 rounded-xl bg-brand-yellow/10 flex items-center justify-center mb-5 group-hover:bg-brand-yellow/20 transition-colors">
                      <Icon size={24} className="text-brand-yellow" />
                    </div>
                    <h3 className="font-display text-xl text-white uppercase tracking-wide mb-2">{item.title}</h3>
                    <p className="text-white/50 leading-relaxed">{item.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-20 bg-gradient-to-br from-brand-yellow/5 via-transparent to-brand-red/5">
          <div className="container">
            <div className="text-center mb-14">
              <h2 className="font-display text-4xl md:text-5xl tracking-wide text-white mb-4">LO QUE DICEN</h2>
              <p className="text-white/50 text-lg">Profesionales independientes que ya dieron el primer paso</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {testimonials.map((t) => (
                <div key={t.name} className="bg-card border border-white/5 rounded-2xl p-8 space-y-4">
                  <div className="flex gap-1">
                    {Array.from({ length: t.rating }).map((_, i) => (
                      <Star key={i} size={16} className="text-brand-yellow fill-brand-yellow" />
                    ))}
                  </div>
                  <p className="text-white/70 italic leading-relaxed">&ldquo;{t.content}&rdquo;</p>
                  <div>
                    <p className="text-white font-semibold">{t.name}</p>
                    <p className="text-white/40 text-sm">{t.role}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQs */}
        <section className="py-20">
          <div className="container max-w-3xl mx-auto">
            <div className="text-center mb-14">
              <h2 className="font-display text-4xl md:text-5xl tracking-wide gradient-text mb-4">PREGUNTAS FRECUENTES</h2>
            </div>
            <div className="space-y-4">
              {faqs.map((faq) => (
                <div key={faq.q} className="bg-card border border-white/5 rounded-2xl p-6">
                  <h3 className="text-white font-semibold text-lg mb-2">{faq.q}</h3>
                  <p className="text-white/50 leading-relaxed">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-20">
          <div className="container">
            <div className="max-w-2xl mx-auto text-center space-y-6">
              <h2 className="font-display text-4xl md:text-5xl tracking-wide text-white">
                ¿LISTO PARA DAR<br />
                <span className="gradient-text">EL PRIMER PASO?</span>
              </h2>
              <p className="text-white/60 text-lg">
                Agenda una llamada de 30 minutos y te explicamos cómo funciona el proceso. Sin compromisos.
              </p>
              <Link
                href="/#demo"
                className="inline-flex items-center gap-2 bg-brand-yellow hover:bg-brand-yellow/80 text-black font-bold rounded-full px-10 py-4 transition-all duration-300 group text-lg"
              >
                Agendar Llamada Gratuita
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
