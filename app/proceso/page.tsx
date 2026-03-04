import { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import PageHero from '@/components/PageHero';
import Breadcrumb from '@/components/Breadcrumb';
import RelatedPages from '@/components/RelatedPages';
import ProcessSection from '@/components/sections/ProcessSection';
import DemoRequestSection from '@/components/sections/DemoRequestSection';
import { Lightbulb, CheckCircle, Target, Zap } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Nuestro Proceso | Elefante Growth Marketing',
  description: 'Conoce el proceso probado de 4 fases de Elefante: Diagnóstico, Estrategia, Ejecución y Escalado. Un método que genera resultados medibles.',
  keywords: 'proceso de growth marketing, metodología, cómo funciona growth marketing, optimización de conversión',
  openGraph: {
    title: 'Nuestro Proceso | Elefante',
    description: 'El proceso de 4 fases que transforma tu negocio',
    type: 'website',
  },
};

export default function ProcesoPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <Breadcrumb items={[{ label: 'Nuestro Proceso', active: true }]} />

      <PageHero
        title="Cómo Funciona Nuestro Método"
        subtitle="Nuestro Proceso"
        description="Un proceso comprobado que combina análisis, creatividad y optimización continua. Cada fase tiene objetivos claros, entregables específicos y métricas de éxito."
        backgroundImage="/images/hero-growth.jpg"
      />

      <section className="py-16 border-b border-white/5">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-gradient-to-br from-brand-yellow/5 to-brand-cyan/5 rounded-2xl p-8 border border-white/10">
              <h3 className="text-2xl font-bold text-white mb-6">Por Qué Este Proceso Funciona</h3>
              <ul className="space-y-4">
                {[
                  'Basado en análisis de datos reales',
                  'Ajustes continuos según resultados',
                  'Transparencia total en cada fase',
                  'Escalado sólo de lo que funciona',
                  'Equipo dedicado en cada etapa'
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <CheckCircle className="text-brand-yellow flex-shrink-0" size={20} />
                    <span className="text-white/80">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="text-3xl font-bold text-white mb-6">Un Viaje Estructurado hacia el Crecimiento</h2>
              <p className="text-white/70 mb-6 text-lg leading-relaxed">
                Nuestro proceso de 4 fases garantiza que cada paso esté fundamentado en datos y validado antes de escalar. No hacemos suposiciones, hacemos pruebas.
              </p>
              <p className="text-white/70 text-base leading-relaxed">
                Cada cliente es único, por eso personalizamos el timeline y enfoque según tus objetivos, presupuesto y mercado. Lo que funciona para una e-commerce, podría no funcionar para un SaaS.
              </p>
            </div>
          </div>
        </div>
      </section>

      <ProcessSection />

      <section className="py-16 border-b border-white/5 bg-brand-dark-lighter/50">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-12 text-center">Duración y Timeline Típico</h2>
            <div className="space-y-8">
              {[
                {
                  phase: 'Diagnóstico',
                  duration: '1-2 semanas',
                  items: ['Auditoría técnica y de marketing', 'Análisis competitivo', 'Entrevistas con tu equipo', 'Definición de oportunidades']
                },
                {
                  phase: 'Estrategia',
                  duration: '2 semanas',
                  items: ['Desarrollo del plan', 'Definición de KPIs', 'Validación con el cliente', 'Roadmap de implementación']
                },
                {
                  phase: 'Ejecución',
                  duration: '6-12 semanas',
                  items: ['Lanzamiento de campañas', 'Testing y optimización', 'Reportes semanales', 'Ajustes en tiempo real']
                },
                {
                  phase: 'Escalado',
                  duration: 'Continuo',
                  items: ['Amplificación de canales', 'Inversión en lo que funciona', 'Nuevas tácticas', 'Crecimiento sostenible']
                }
              ].map((item) => (
                <div key={item.phase} className="bg-card/50 border border-white/5 rounded-xl p-8">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl font-bold text-white">{item.phase}</h3>
                    <span className="text-brand-yellow font-semibold">{item.duration}</span>
                  </div>
                  <ul className="space-y-2">
                    {item.items.map((sub) => (
                      <li key={sub} className="flex items-center gap-3 text-white/70">
                        <span className="w-2 h-2 rounded-full bg-brand-yellow flex-shrink-0" />
                        {sub}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">Tu Gerente de Cuenta Dedicado</h2>
            <div className="bg-gradient-to-r from-brand-yellow/10 to-brand-cyan/10 border border-white/10 rounded-2xl p-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-bold text-white mb-4">Responsabilidades</h3>
                  <ul className="space-y-3 text-white/70">
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-brand-yellow" />
                      Comunicación semanal
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-brand-yellow" />
                      Análisis de resultados
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-brand-yellow" />
                      Optimización continua
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-brand-yellow" />
                      Estrategia de escalado
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-4">Lo que Obtienes</h3>
                  <ul className="space-y-3 text-white/70">
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-brand-cyan" />
                      Expertise en tu industria
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-brand-cyan" />
                      Respuestas rápidas
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-brand-cyan" />
                      Acceso a recursos
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-brand-cyan" />
                      Partner en crecimiento
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <RelatedPages
        pages={[
          {
            title: 'Estrategias de Crecimiento',
            description: 'Los 4 pilares en los que se basa nuestro proceso de growth marketing.',
            href: '/estrategia',
            icon: <Target size={24} />
          },
          {
            title: 'Beneficios Clave',
            description: 'Descubre qué te diferencia al trabajar con nosotros.',
            href: '/beneficios',
            icon: <Lightbulb size={24} />
          }
        ]}
      />

      <DemoRequestSection />
      <Footer />
    </div>
  );
}
