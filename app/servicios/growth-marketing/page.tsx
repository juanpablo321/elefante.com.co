import { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Breadcrumb from '@/components/Breadcrumb';
import DemoRequestSection from '@/components/sections/DemoRequestSection';
import { TrendingUp, Target, BarChart3, Zap, CheckCircle, ArrowRight } from 'lucide-react';
import JsonLdService from '@/components/seo/JsonLdService';

export const metadata: Metadata = {
  title: 'Growth Marketing | Elefante',
  description: 'Estrategias de growth marketing que aceleran el crecimiento de tu negocio en Colombia. Resultados medibles y escalables con ROI comprobado.',
  keywords: 'growth marketing, estrategia de crecimiento, marketing digital, aceleración empresarial Colombia',
  alternates: {
    canonical: '/servicios/growth-marketing',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  openGraph: {
    title: 'Growth Marketing | Elefante',
    description: 'Acelera el crecimiento de tu negocio con nuestras estrategias de growth marketing',
    url: 'https://elefante.com.co/servicios/growth-marketing',
    type: 'website',
  },
};

export default function GrowthMarketingPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <JsonLdService
        name="Growth Marketing"
        description="Estrategias de growth marketing que aceleran el crecimiento de tu negocio en Colombia. Resultados medibles y escalables con ROI comprobado."
        url="https://elefante.com.co/servicios/growth-marketing"
        serviceType="Growth Marketing"
      />
      <Navbar />
      <Breadcrumb items={[{ label: 'Servicios', href: '#' }, { label: 'Growth Marketing', active: true }]} />

      {/* Hero Section */}
      <section className="py-20 border-b border-white/5 bg-gradient-to-b from-brand-dark-lighter/50 to-background">
        <div className="container max-w-4xl">
          <div className="text-center">
            <div className="inline-block mb-6 px-4 py-2 rounded-full bg-brand-red/20 border border-brand-red/50">
              <span className="text-brand-red font-semibold text-sm">Aceleración de Crecimiento</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Growth Marketing que Escala tu Negocio
            </h1>
            <p className="text-xl text-white/70 mb-8 leading-relaxed">
              Estrategias comprobadas para acelerar el crecimiento de tu empresa. Desde startups hasta empresas consolidadas, transformamos tu visión en resultados medibles.
            </p>
            <a href="/contacto" className="inline-block bg-brand-red hover:bg-brand-red/80 text-white font-semibold rounded-full px-8 py-3 transition-colors shadow-lg shadow-brand-red/20">
              Solicitar Consultoría Gratis
            </a>
          </div>
        </div>
      </section>

      {/* What is Growth Marketing */}
      <section className="py-20 border-b border-white/5">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-white mb-6">¿Qué es Growth Marketing?</h2>
              <p className="text-white/70 mb-6 text-lg leading-relaxed">
                Growth Marketing es un enfoque integral que combina marketing, análisis de datos y experimentación continua para lograr crecimiento exponencial. No es solo publicidad, es un sistema completo de escalado.
              </p>
              <ul className="space-y-4">
                {[
                  'Enfoque basado en datos y resultados',
                  'Experimentación rápida y validación',
                  'Optimización continua de cada canal',
                  'Escalado solo de lo que funciona',
                  'ROI medible en cada inversión'
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <CheckCircle className="text-brand-cyan flex-shrink-0" size={20} />
                    <span className="text-white/80">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-gradient-to-br from-brand-red/10 to-brand-yellow/10 rounded-2xl p-8 border border-white/10 h-96 flex items-center justify-center">
              <div className="text-center">
                <TrendingUp className="text-brand-red mx-auto mb-4" size={48} />
                <p className="text-white/70 text-lg">Crecimiento Exponencial</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="py-20 border-b border-white/5 bg-brand-dark-lighter/30">
        <div className="container">
          <h2 className="text-4xl font-bold text-white mb-16 text-center">Nuestro Enfoque de Growth Marketing</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                step: '01',
                title: 'Auditoría y Diagnóstico',
                desc: 'Analizamos tu negocio, mercado, competencia y audiencia para identificar oportunidades de crecimiento.'
              },
              {
                step: '02',
                title: 'Estrategia Personalizada',
                desc: 'Diseñamos un plan específico con canales, tácticas y KPIs alineados con tus objetivos.'
              },
              {
                step: '03',
                title: 'Ejecución y Optimización',
                desc: 'Implementamos, probamos, medimos y optimizamos continuamente basándonos en datos reales.'
              },
              {
                step: '04',
                title: 'Escalado Inteligente',
                desc: 'Ampliamos inversión solo en lo que funciona, maximizando ROI y minimizando riesgo.'
              },
              {
                step: '05',
                title: 'Reporte y Transparencia',
                desc: 'Reportes semanales detallados con análisis, insights y recomendaciones de mejora.'
              },
              {
                step: '06',
                title: 'Crecimiento Sostenible',
                desc: 'Construimos sistemas de crecimiento duraderos que funcionan incluso sin nuestra intervención.'
              }
            ].map((item) => (
              <div key={item.step} className="bg-card/50 border border-white/5 rounded-xl p-8 hover:border-brand-red/30 transition-colors">
                <div className="w-12 h-12 rounded-full bg-brand-red/20 border border-brand-red/50 flex items-center justify-center mb-4">
                  <span className="font-display text-lg font-bold text-brand-red">{item.step}</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                <p className="text-white/70">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Included */}
      <section className="py-20 border-b border-white/5">
        <div className="container">
          <h2 className="text-4xl font-bold text-white mb-16 text-center">¿Qué Incluye Nuestro Servicio?</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-white mb-8">Análisis y Estrategia</h3>
              {[
                'Auditoría técnica y de marketing',
                'Análisis competitivo profundo',
                'Investigación de audiencia',
                'Identificación de oportunidades',
                'Definición de KPIs y objetivos',
                'Roadmap de implementación'
              ].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <ArrowRight className="text-brand-cyan flex-shrink-0" size={20} />
                  <span className="text-white/80">{item}</span>
                </div>
              ))}
            </div>
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-white mb-8">Ejecución y Optimización</h3>
              {[
                'Implementación de campañas',
                'A/B testing continuo',
                'Optimización de conversiones',
                'Gestión de presupuesto',
                'Reportes semanales detallados',
                'Recomendaciones de mejora'
              ].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <ArrowRight className="text-brand-yellow flex-shrink-0" size={20} />
                  <span className="text-white/80">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Results */}
      <section className="py-20 border-b border-white/5 bg-gradient-to-r from-brand-red/5 to-brand-yellow/5">
        <div className="container">
          <h2 className="text-4xl font-bold text-white mb-16 text-center">Resultados que Hemos Logrado</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                metric: '+87%',
                label: 'Crecimiento en Conversiones',
                desc: 'Promedio en e-commerce en 6 meses'
              },
              {
                metric: '-34%',
                label: 'Reducción en Costo por Cliente',
                desc: 'Optimización de canales de adquisición'
              },
              {
                metric: '+95%',
                label: 'Aumento en Tráfico Orgánico',
                desc: 'Mediante SEO y content marketing'
              }
            ].map((item) => (
              <div key={item.label} className="bg-card/50 border border-white/5 rounded-xl p-8 text-center">
                <div className="text-5xl font-bold text-brand-red mb-3">{item.metric}</div>
                <h3 className="text-xl font-bold text-white mb-2">{item.label}</h3>
                <p className="text-white/60">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 border-b border-white/5">
        <div className="container">
          <h2 className="text-4xl font-bold text-white mb-16 text-center">¿Por Qué Elegir a Elefante?</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-gradient-to-br from-brand-cyan/10 to-brand-red/10 rounded-2xl p-8 border border-white/10">
              <h3 className="text-2xl font-bold text-white mb-6">Experiencia Comprobada</h3>
              <ul className="space-y-4">
                {[
                  '150+ proyectos completados',
                  '50+ clientes activos',
                  'Múltiples industrias (e-commerce, SaaS, servicios)',
                  'Equipo especializado en growth',
                  'Certificaciones en marketing digital'
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-white/80">
                    <CheckCircle className="text-brand-cyan flex-shrink-0" size={18} />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-gradient-to-br from-brand-yellow/10 to-brand-red/10 rounded-2xl p-8 border border-white/10">
              <h3 className="text-2xl font-bold text-white mb-6">Nuestro Compromiso</h3>
              <ul className="space-y-4">
                {[
                  'Transparencia total en resultados',
                  'Equipo dedicado a tu proyecto',
                  'Reportes semanales detallados',
                  'Optimización continua',
                  'Escalado responsable y medido'
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-white/80">
                    <CheckCircle className="text-brand-yellow flex-shrink-0" size={18} />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-brand-red/10 to-brand-yellow/10 border-b border-white/5">
        <div className="container max-w-3xl text-center">
          <h2 className="text-3xl font-bold text-white mb-4">¿Listo para Acelerar tu Crecimiento?</h2>
          <p className="text-white/70 text-lg mb-8">
            Descubre cómo nuestro enfoque de growth marketing puede transformar tu negocio. Solicita una consultoría gratuita.
          </p>
          <a href="/contacto" className="inline-block bg-brand-red hover:bg-brand-red/80 text-white font-semibold rounded-full px-8 py-3 transition-colors shadow-lg shadow-brand-red/20">
            Solicitar Consultoría Gratis
          </a>
        </div>
      </section>

      <DemoRequestSection />
      <Footer />
    </div>
  );
}
