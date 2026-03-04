import { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import PageHero from '@/components/PageHero';
import Breadcrumb from '@/components/Breadcrumb';
import RelatedPages from '@/components/RelatedPages';
import GrowthStrategiesSection from '@/components/sections/GrowthStrategiesSection';
import DemoRequestSection from '@/components/sections/DemoRequestSection';
import { CheckCircle, TrendingUp, Users, Zap } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Estrategias de Crecimiento | Elefante Growth Marketing',
  description: 'Descubre nuestras 4 estrategias probadas de growth marketing que ayudan a empresas colombianas a escalar. Análisis profundo, optimización de conversión, adquisición de clientes y retención.',
  keywords: 'estrategia de crecimiento, growth marketing, estrategias de marketing digital, optimización de conversión',
  openGraph: {
    title: 'Estrategias de Crecimiento | Elefante',
    description: 'Estrategias de growth marketing que funcionan para tu negocio',
    type: 'website',
  },
};

export default function EstrategiaPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <Breadcrumb items={[{ label: 'Estrategias de Crecimiento', active: true }]} />

      <PageHero
        title="Estrategias de Crecimiento que Funcionan"
        subtitle="Estrategias Clave"
        description="Combinamos análisis de datos, creatividad y tecnología para crear un plan de crecimiento adaptado a tu negocio. Cada estrategia está diseñada para generar resultados medibles."
        backgroundImage="/images/strategies-illustration.jpg"
      />

      <section className="py-16 border-b border-white/5">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-white mb-6">Un Enfoque Integral al Crecimiento</h2>
              <p className="text-white/70 mb-8 text-lg leading-relaxed">
                No existe una única fórmula para el crecimiento. Por eso hemos desarrollado 4 pilares estratégicos que trabajan en conjunto para acelerar tu negocio en todas las direcciones.
              </p>
              <ul className="space-y-4">
                {[
                  'Análisis profundo de mercado y competencia',
                  'Identificación de oportunidades de nicho',
                  'Optimización de cada paso del funnel',
                  'Resultados medibles y reportados semanalmente'
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <CheckCircle className="text-brand-cyan flex-shrink-0" size={20} />
                    <span className="text-white/80">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-gradient-to-br from-brand-cyan/5 to-brand-red/5 rounded-2xl p-8 border border-white/10">
              <h3 className="text-2xl font-bold text-white mb-6">Resultados Esperados</h3>
              <div className="space-y-6">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <TrendingUp size={20} className="text-brand-cyan" />
                    <span className="text-white font-semibold">Aumentar Conversiones</span>
                  </div>
                  <p className="text-white/60 text-sm">Promedio +340% en los primeros 6 meses</p>
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <Users size={20} className="text-brand-red" />
                    <span className="text-white font-semibold">Adquirir Clientes</span>
                  </div>
                  <p className="text-white/60 text-sm">Reducción de 60% en costo por cliente</p>
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <Zap size={20} className="text-brand-yellow" />
                    <span className="text-white font-semibold">Optimizar Rápido</span>
                  </div>
                  <p className="text-white/60 text-sm">Resultados visibles en 2-3 semanas</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <GrowthStrategiesSection />

      <section className="py-16 border-b border-white/5 bg-brand-dark-lighter/50">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">Cómo Elegimos la Estrategia Correcta para Ti</h2>
            <div className="space-y-6">
              {[
                {
                  step: '01',
                  title: 'Diagnóstico Inicial',
                  desc: 'Entendemos tu negocio, mercado, competencia y audiencia para identificar las mejores oportunidades.'
                },
                {
                  step: '02',
                  title: 'Análisis Profundo',
                  desc: 'Realizamos A/B testing y análisis de datos para validar qué estrategias funcionan mejor para ti.'
                },
                {
                  step: '03',
                  title: 'Plan Personalizado',
                  desc: 'Creamos un roadmap específico combinando las 4 estrategias de acuerdo a tus objetivos y presupuesto.'
                },
                {
                  step: '04',
                  title: 'Implementación y Mejora',
                  desc: 'Ejecutamos, medimos y optimizamos continuamente basándonos en datos reales de tu negocio.'
                }
              ].map((item) => (
                <div key={item.step} className="flex gap-6 items-start">
                  <div className="min-w-fit">
                    <div className="w-12 h-12 rounded-full bg-brand-cyan/20 border border-brand-cyan/50 flex items-center justify-center">
                      <span className="font-display text-lg font-bold text-brand-cyan">{item.step}</span>
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
        </div>
      </section>

      <RelatedPages
        pages={[
          {
            title: 'Nuestro Proceso',
            description: 'Conoce el paso a paso de cómo implementamos estas estrategias en tu empresa.',
            href: '/proceso',
            icon: <TrendingUp size={24} />
          },
          {
            title: 'Beneficios Clave',
            description: 'Descubre por qué somos la mejor opción para el crecimiento de tu empresa.',
            href: '/beneficios',
            icon: <CheckCircle size={24} />
          }
        ]}
      />

      <DemoRequestSection />
      <Footer />
    </div>
  );
}
