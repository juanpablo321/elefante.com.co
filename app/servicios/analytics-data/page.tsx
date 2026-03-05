import { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Breadcrumb from '@/components/Breadcrumb';
import DemoRequestSection from '@/components/sections/DemoRequestSection';
import { BarChart3, TrendingUp, Zap, Target, CheckCircle, ArrowRight } from 'lucide-react';
import Image from 'next/image';
import JsonLdService from '@/components/seo/JsonLdService';

export const metadata: Metadata = {
  title: 'Analytics & Data | Elefante',
  description: 'Análisis de datos y business intelligence para tomar decisiones informadas en Colombia. GA4, dashboards personalizados y reportes de marketing.',
  keywords: 'analytics marketing Colombia, data analysis, GA4, business intelligence, dashboards marketing, data-driven',
  alternates: {
    canonical: '/servicios/analytics-data',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  openGraph: {
    title: 'Analytics & Data | Elefante',
    description: 'Transforma datos en decisiones de negocio',
    url: 'https://elefante.com.co/servicios/analytics-data',
    type: 'website',
  },
};

export default function AnalyticsDataPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <JsonLdService
        name="Analytics & Data"
        description="Análisis de datos y business intelligence para tomar decisiones informadas en Colombia. GA4, dashboards personalizados y reportes de marketing."
        url="https://elefante.com.co/servicios/analytics-data"
        serviceType="Data Analytics"
      />
      <Navbar />
      <Breadcrumb items={[{ label: 'Servicios', href: '#' }, { label: 'Analytics & Data', active: true }]} />

      {/* Hero Section */}
      <section className="py-20 border-b border-white/5 bg-gradient-to-b from-brand-dark-lighter/50 to-background">
        <div className="container max-w-4xl">
          <div className="text-center">
            <div className="inline-block mb-6 px-4 py-2 rounded-full bg-brand-cyan/20 border border-brand-cyan/50">
              <span className="text-brand-cyan font-semibold text-sm">Data-Driven Decisions</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Transforma Datos en Decisiones de Negocio
            </h1>
            <p className="text-xl text-white/70 mb-8 leading-relaxed">
              Análisis profundo de datos, dashboards personalizados y reportes accionables. Toma decisiones basadas en información real, no en intuición.
            </p>
            <a href="/#demo" className="inline-block bg-brand-cyan hover:bg-brand-cyan/80 text-black font-semibold rounded-full px-8 py-3 transition-colors shadow-lg shadow-brand-cyan/20">
              Agendar Demo Gratuita
            </a>
          </div>
        </div>
      </section>

      {/* The Problem */}
      <section className="py-20 border-b border-white/5">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-white mb-6">El Problema: Datos Sin Acción</h2>
              <p className="text-white/70 mb-6 text-lg leading-relaxed">
                Muchas empresas tienen datos, pero no saben qué hacer con ellos. Herramientas complejas, reportes confusos y decisiones basadas en intuición.
              </p>
              <ul className="space-y-4">
                {[
                  'Demasiados datos, poco insight',
                  'Herramientas desconectadas',
                  'Reportes que nadie entiende',
                  'Decisiones lentas e informadas',
                  'Oportunidades perdidas'
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <CheckCircle className="text-brand-red flex-shrink-0" size={20} />
                    <span className="text-white/80">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-gradient-to-br from-brand-red/10 to-brand-yellow/10 rounded-2xl overflow-hidden border border-white/10 h-96 flex items-center justify-center">
              <Image
                src="/images/analytics-data-neon.png"
                alt="Claridad en Datos - Analytics & Data"
                width={600}
                height={450}
                className="w-full h-full object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Solution */}
      <section className="py-20 border-b border-white/5 bg-brand-dark-lighter/30">
        <div className="container">
          <h2 className="text-4xl font-bold text-white mb-16 text-center">Nuestra Solución: Analytics Inteligente</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                step: '01',
                title: 'Auditoría de Datos',
                desc: 'Analizamos tus fuentes de datos actuales y identificamos brechas de información.'
              },
              {
                step: '02',
                title: 'Implementación GA4',
                desc: 'Configuramos Google Analytics 4 correctamente con eventos personalizados y conversiones.'
              },
              {
                step: '03',
                title: 'Dashboards Personalizados',
                desc: 'Creamos dashboards visuales que muestran exactamente lo que necesitas saber.'
              },
              {
                step: '04',
                title: 'Reportes Accionables',
                desc: 'Reportes semanales/mensuales con insights claros y recomendaciones de mejora.'
              },
              {
                step: '05',
                title: 'Análisis Profundo',
                desc: 'Investigamos tendencias, patrones y oportunidades en tus datos.'
              },
              {
                step: '06',
                title: 'Decisiones Informadas',
                desc: 'Te ayudamos a tomar decisiones basadas en datos, no en intuición.'
              }
            ].map((item) => (
              <div key={item.step} className="bg-card/50 border border-white/5 rounded-xl p-8 hover:border-brand-cyan/30 transition-colors">
                <div className="w-12 h-12 rounded-full bg-brand-cyan/20 border border-brand-cyan/50 flex items-center justify-center mb-4">
                  <span className="font-display text-lg font-bold text-brand-cyan">{item.step}</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                <p className="text-white/70">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 border-b border-white/5">
        <div className="container">
          <h2 className="text-4xl font-bold text-white mb-16 text-center">Servicios de Analytics & Data</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-white mb-8">Implementación y Configuración</h3>
              {[
                'Auditoría de herramientas actuales',
                'Implementación de GA4',
                'Eventos personalizados',
                'Conversiones y objetivos',
                'Integración con CRM',
                'Seguimiento de usuarios'
              ].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <ArrowRight className="text-brand-cyan flex-shrink-0" size={20} />
                  <span className="text-white/80">{item}</span>
                </div>
              ))}
            </div>
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-white mb-8">Análisis y Reportes</h3>
              {[
                'Dashboards personalizados',
                'Reportes automatizados',
                'Análisis de cohortes',
                'Análisis de embudo',
                'Segmentación de usuarios',
                'Predicciones y tendencias'
              ].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <ArrowRight className="text-brand-cyan flex-shrink-0" size={20} />
                  <span className="text-white/80">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Key Metrics */}
      <section className="py-20 border-b border-white/5 bg-gradient-to-r from-brand-cyan/5 to-brand-red/5">
        <div className="container">
          <h2 className="text-4xl font-bold text-white mb-16 text-center">Métricas Clave que Monitoreamos</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                category: 'Tráfico y Usuarios',
                metrics: ['Sesiones totales', 'Usuarios únicos', 'Tasa de rebote', 'Duración promedio', 'Páginas por sesión']
              },
              {
                category: 'Conversiones',
                metrics: ['Tasa de conversión', 'Valor de conversión', 'Costo por conversión', 'Embudo de conversión', 'Atribución']
              },
              {
                category: 'Comportamiento',
                metrics: ['Páginas más visitadas', 'Flujo de usuarios', 'Eventos personalizados', 'Scroll depth', 'Interacciones']
              },
              {
                category: 'Adquisición',
                metrics: ['Fuentes de tráfico', 'Canales de marketing', 'Palabras clave', 'Campañas', 'ROI por canal']
              }
            ].map((item) => (
              <div key={item.category} className="bg-card/50 border border-white/5 rounded-xl p-8">
                <h3 className="text-xl font-bold text-white mb-4">{item.category}</h3>
                <ul className="space-y-2">
                  {item.metrics.map((metric) => (
                    <li key={metric} className="flex items-center gap-2 text-white/70 text-sm">
                      <span className="w-1.5 h-1.5 rounded-full bg-brand-cyan" />
                      {metric}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tools We Use */}
      <section className="py-20 border-b border-white/5">
        <div className="container">
          <h2 className="text-4xl font-bold text-white mb-16 text-center">Herramientas que Utilizamos</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                tool: 'Google Analytics 4',
                desc: 'Análisis web completo con eventos personalizados'
              },
              {
                tool: 'Google Tag Manager',
                desc: 'Gestión centralizada de etiquetas y eventos'
              },
              {
                tool: 'Looker Studio',
                desc: 'Dashboards visuales y reportes interactivos'
              },
              {
                tool: 'BigQuery',
                desc: 'Análisis profundo de datos a escala'
              },
              {
                tool: 'CRM Integration',
                desc: 'Conexión con tus herramientas de negocio'
              },
              {
                tool: 'Data Visualization',
                desc: 'Presentación clara de datos complejos'
              }
            ].map((item) => (
              <div key={item.tool} className="bg-card/50 border border-white/5 rounded-xl p-8 text-center">
                <h3 className="text-lg font-bold text-white mb-2">{item.tool}</h3>
                <p className="text-white/70 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Results */}
      <section className="py-20 border-b border-white/5 bg-gradient-to-r from-brand-cyan/5 to-brand-yellow/5">
        <div className="container">
          <h2 className="text-4xl font-bold text-white mb-16 text-center">Resultados de Nuestro Análisis</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                metric: '+45%',
                label: 'Mejora en Conversiones',
                desc: 'Después de optimizar basado en datos'
              },
              {
                metric: '-32%',
                label: 'Reducción en CAC',
                desc: 'Identificando canales más eficientes'
              },
              {
                metric: '+3.2x',
                label: 'ROI Mejorado',
                desc: 'Mediante decisiones informadas'
              }
            ].map((item) => (
              <div key={item.label} className="bg-card/50 border border-white/5 rounded-xl p-8 text-center">
                <div className="text-5xl font-bold text-brand-cyan mb-3">{item.metric}</div>
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
          <h2 className="text-4xl font-bold text-white mb-16 text-center">¿Por Qué Elegirnos?</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-gradient-to-br from-brand-cyan/10 to-brand-red/10 rounded-2xl p-8 border border-white/10">
              <h3 className="text-2xl font-bold text-white mb-6">Experiencia Técnica</h3>
              <ul className="space-y-4">
                {[
                  'Certificados en Google Analytics',
                  'Expertos en GA4 y GTM',
                  'Experiencia en BigQuery',
                  'Análisis de datos avanzado',
                  'Herramientas premium'
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-white/80">
                    <CheckCircle className="text-brand-cyan flex-shrink-0" size={18} />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-gradient-to-br from-brand-red/10 to-brand-cyan/10 rounded-2xl p-8 border border-white/10">
              <h3 className="text-2xl font-bold text-white mb-6">Enfoque Práctico</h3>
              <ul className="space-y-4">
                {[
                  'Datos traducidos a acciones',
                  'Reportes claros y visuales',
                  'Recomendaciones accionables',
                  'Soporte continuo',
                  'Mejora constante'
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-white/80">
                    <CheckCircle className="text-brand-red flex-shrink-0" size={18} />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-brand-cyan/10 to-brand-red/10 border-b border-white/5">
        <div className="container max-w-3xl text-center">
          <h2 className="text-3xl font-bold text-white mb-4">¿Listo para Tomar Decisiones Basadas en Datos?</h2>
          <p className="text-white/70 text-lg mb-8">
            Descubre cómo nuestro análisis de datos puede transformar tu negocio. Solicita una auditoría gratuita de tu analytics.
          </p>
          <a href="/#demo" className="inline-block bg-brand-cyan hover:bg-brand-cyan/80 text-black font-semibold rounded-full px-8 py-3 transition-colors shadow-lg shadow-brand-cyan/20">
            Agendar Demo Gratuita
          </a>
        </div>
      </section>

      <DemoRequestSection />
      <Footer />
    </div>
  );
}
