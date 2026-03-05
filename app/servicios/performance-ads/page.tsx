import { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Breadcrumb from '@/components/Breadcrumb';
import DemoRequestSection from '@/components/sections/DemoRequestSection';
import { Zap, Target, BarChart3, DollarSign, CheckCircle, ArrowRight } from 'lucide-react';
import JsonLdService from '@/components/seo/JsonLdService';

export const metadata: Metadata = {
  title: 'Performance Ads | Elefante',
  description: 'Campañas de publicidad de alto rendimiento en Google, Meta y TikTok para empresas colombianas. ROI garantizado y optimización continua.',
  keywords: 'performance ads, publicidad digital Colombia, Google Ads, Meta Ads, TikTok Ads, ROI publicidad',
  alternates: {
    canonical: '/servicios/performance-ads',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  openGraph: {
    title: 'Performance Ads | Elefante',
    description: 'Campañas de publicidad que generan resultados medibles y ROI positivo',
    url: 'https://elefante.com.co/servicios/performance-ads',
    type: 'website',
  },
};

export default function PerformanceAdsPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <JsonLdService
        name="Performance Ads"
        description="Campañas de publicidad de alto rendimiento en Google, Meta y TikTok para empresas colombianas. ROI garantizado y optimización continua."
        url="https://elefante.com.co/servicios/performance-ads"
        serviceType="Digital Advertising"
      />
      <Navbar />
      <Breadcrumb items={[{ label: 'Servicios', href: '#' }, { label: 'Performance Ads', active: true }]} />

      {/* Hero Section */}
      <section className="py-20 border-b border-white/5 bg-gradient-to-b from-brand-dark-lighter/50 to-background">
        <div className="container max-w-4xl">
          <div className="text-center">
            <div className="inline-block mb-6 px-4 py-2 rounded-full bg-brand-yellow/20 border border-brand-yellow/50">
              <span className="text-brand-yellow font-semibold text-sm">ROI Garantizado</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Performance Ads que Generan Resultados
            </h1>
            <p className="text-xl text-white/70 mb-8 leading-relaxed">
              Campañas de publicidad digital optimizadas para conversiones. Google Ads, Meta Ads, TikTok Ads y más. Solo pagas por resultados.
            </p>
            <a href="/contacto" className="inline-block bg-brand-yellow hover:bg-brand-yellow/80 text-black font-semibold rounded-full px-8 py-3 transition-colors shadow-lg shadow-brand-yellow/20">
              Solicitar Consultoría Gratis
            </a>
          </div>
        </div>
      </section>

      {/* What We Do */}
      <section className="py-20 border-b border-white/5">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-white mb-6">¿Qué es Performance Advertising?</h2>
              <p className="text-white/70 mb-6 text-lg leading-relaxed">
                Performance advertising es publicidad basada en resultados. Cada peso invertido está optimizado para generar conversiones, leads o ventas. No es vanidad, es ROI.
              </p>
              <ul className="space-y-4">
                {[
                  'Pago por conversión real',
                  'Optimización continua del presupuesto',
                  'Targeting preciso de audiencia',
                  'A/B testing en cada campaña',
                  'Reportes transparentes de ROI'
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <CheckCircle className="text-brand-yellow flex-shrink-0" size={20} />
                    <span className="text-white/80">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-gradient-to-br from-brand-yellow/10 to-brand-red/10 rounded-2xl p-8 border border-white/10 h-96 flex items-center justify-center">
              <div className="text-center">
                <DollarSign className="text-brand-yellow mx-auto mb-4" size={48} />
                <p className="text-white/70 text-lg">ROI Medible</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Platforms We Manage */}
      <section className="py-20 border-b border-white/5 bg-brand-dark-lighter/30">
        <div className="container">
          <h2 className="text-4xl font-bold text-white mb-16 text-center">Plataformas que Gestionamos</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                platform: 'Google Ads',
                desc: 'Search, Display, Shopping y YouTube',
                specialties: ['Búsqueda de intención', 'Remarketing', 'Shopping campaigns', 'Video ads']
              },
              {
                platform: 'Meta Ads',
                desc: 'Facebook, Instagram y Audience Network',
                specialties: ['Targeting por interés', 'Lookalike audiences', 'Video ads', 'Carousel ads']
              },
              {
                platform: 'TikTok Ads',
                desc: 'Publicidad en la plataforma de mayor crecimiento',
                specialties: ['Native ads', 'Branded content', 'Influencer partnerships', 'Trending content']
              }
            ].map((item) => (
              <div key={item.platform} className="bg-card/50 border border-white/5 rounded-xl p-8">
                <h3 className="text-2xl font-bold text-white mb-2">{item.platform}</h3>
                <p className="text-white/60 mb-6">{item.desc}</p>
                <ul className="space-y-2">
                  {item.specialties.map((spec) => (
                    <li key={spec} className="flex items-center gap-2 text-white/70 text-sm">
                      <span className="w-1.5 h-1.5 rounded-full bg-brand-yellow" />
                      {spec}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Process */}
      <section className="py-20 border-b border-white/5">
        <div className="container">
          <h2 className="text-4xl font-bold text-white mb-16 text-center">Nuestro Proceso de Performance Ads</h2>
          <div className="space-y-6">
            {[
              {
                step: '01',
                title: 'Auditoría de Campañas Existentes',
                desc: 'Analizamos tus campañas actuales, identificamos problemas y oportunidades de mejora.'
              },
              {
                step: '02',
                title: 'Estrategia y Planificación',
                desc: 'Definimos objetivos, presupuesto, audiencias y canales óptimos para tu negocio.'
              },
              {
                step: '03',
                title: 'Creación de Campañas',
                desc: 'Diseñamos creativos, copywriting y landing pages optimizados para conversión.'
              },
              {
                step: '04',
                title: 'Lanzamiento y Monitoreo',
                desc: 'Publicamos las campañas y monitoreamos en tiempo real para ajustes inmediatos.'
              },
              {
                step: '05',
                title: 'Optimización Continua',
                desc: 'A/B testing, ajuste de pujas, refinamiento de audiencias y escalado de lo que funciona.'
              },
              {
                step: '06',
                title: 'Reportes y Análisis',
                desc: 'Reportes semanales detallados con métricas, insights y recomendaciones de mejora.'
              }
            ].map((item) => (
              <div key={item.step} className="bg-card/50 border border-white/5 rounded-xl p-8 flex gap-6">
                <div className="min-w-fit">
                  <div className="w-12 h-12 rounded-full bg-brand-yellow/20 border border-brand-yellow/50 flex items-center justify-center">
                    <span className="font-display text-lg font-bold text-brand-yellow">{item.step}</span>
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                  <p className="text-white/70">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Results */}
      <section className="py-20 border-b border-white/5 bg-gradient-to-r from-brand-yellow/5 to-brand-red/5">
        <div className="container">
          <h2 className="text-4xl font-bold text-white mb-16 text-center">Resultados de Nuestras Campañas</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                metric: '2.1x',
                label: 'ROAS Promedio',
                desc: 'Retorno en publicidad invertida'
              },
              {
                metric: '-34%',
                label: 'CPC Reducido',
                desc: 'Mediante optimización continua'
              },
              {
                metric: '+65%',
                label: 'Aumento en Conversiones',
                desc: 'En los primeros 3 meses'
              }
            ].map((item) => (
              <div key={item.label} className="bg-card/50 border border-white/5 rounded-xl p-8 text-center">
                <div className="text-5xl font-bold text-brand-yellow mb-3">{item.metric}</div>
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
          <h2 className="text-4xl font-bold text-white mb-16 text-center">¿Por Qué Elegirnos para Performance Ads?</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-gradient-to-br from-brand-yellow/10 to-brand-cyan/10 rounded-2xl p-8 border border-white/10">
              <h3 className="text-2xl font-bold text-white mb-6">Especialización</h3>
              <ul className="space-y-4">
                {[
                  'Certificados en Google Ads y Meta',
                  'Experiencia en múltiples industrias',
                  'Equipos especializados por plataforma',
                  'Últimas tendencias y algoritmos',
                  'Acceso a herramientas premium'
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-white/80">
                    <CheckCircle className="text-brand-yellow flex-shrink-0" size={18} />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-gradient-to-br from-brand-red/10 to-brand-yellow/10 rounded-2xl p-8 border border-white/10">
              <h3 className="text-2xl font-bold text-white mb-6">Resultados Garantizados</h3>
              <ul className="space-y-4">
                {[
                  'ROI positivo o ajustamos estrategia',
                  'Transparencia total en gastos',
                  'Reportes semanales detallados',
                  'Optimización sin costo adicional',
                  'Escalado responsable'
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
      <section className="py-16 bg-gradient-to-r from-brand-yellow/10 to-brand-red/10 border-b border-white/5">
        <div className="container max-w-3xl text-center">
          <h2 className="text-3xl font-bold text-white mb-4">¿Listo para Optimizar tus Campañas?</h2>
          <p className="text-white/70 text-lg mb-8">
            Descubre cómo nuestras campañas de performance ads pueden mejorar tu ROI. Solicita una auditoría gratuita.
          </p>
          <a href="/contacto" className="inline-block bg-brand-yellow hover:bg-brand-yellow/80 text-black font-semibold rounded-full px-8 py-3 transition-colors shadow-lg shadow-brand-yellow/20">
            Solicitar Auditoría Gratuita
          </a>
        </div>
      </section>

      <DemoRequestSection />
      <Footer />
    </div>
  );
}
