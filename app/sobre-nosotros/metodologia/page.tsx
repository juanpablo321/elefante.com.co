import { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Breadcrumb from '@/components/Breadcrumb';
import DemoRequestSection from '@/components/sections/DemoRequestSection';
import { CheckCircle, TrendingUp, Users, Zap, Award, Target, Heart, Lightbulb } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Metodología | Elefante Growth Marketing',
  description: 'Descubre nuestra metodología integral de growth marketing: estrategias probadas, proceso de 4 fases, y beneficios clave que transforman tu negocio.',
  keywords: 'metodología growth marketing, estrategia de crecimiento, proceso de marketing digital, beneficios growth marketing',
  openGraph: {
    title: 'Metodología | Elefante',
    description: 'Nuestro enfoque integral al crecimiento empresarial',
    type: 'website',
  },
};

export default function MetodologiaPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <Breadcrumb items={[{ label: 'Sobre Nosotros', href: '#' }, { label: 'Metodología', active: true }]} />

      {/* Hero Section */}
      <section className="py-20 border-b border-white/5 bg-gradient-to-b from-brand-dark-lighter/50 to-background">
        <div className="container max-w-4xl">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Nuestra Metodología de Crecimiento
            </h1>
            <p className="text-xl text-white/70 mb-8 leading-relaxed">
              Un enfoque integral que combina estrategia, proceso comprobado y resultados medibles. Descubre cómo transformamos negocios en Colombia.
            </p>
          </div>
        </div>
      </section>

      {/* Section 1: Estrategias de Crecimiento */}
      <section className="py-20 border-b border-white/5">
        <div className="container">
          <div className="mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">1. Estrategias de Crecimiento</h2>
            <p className="text-white/70 text-lg">Los 4 pilares que impulsan el crecimiento de tu negocio</p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 mb-12">
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">Un Enfoque Integral al Crecimiento</h3>
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
                  <p className="text-white/60 text-sm">Promedio +87% en los primeros 6 meses</p>
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <Users size={20} className="text-brand-red" />
                    <span className="text-white font-semibold">Adquirir Clientes</span>
                  </div>
                  <p className="text-white/60 text-sm">Reducción de 34% en costo por cliente</p>
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

          <div className="bg-brand-dark-lighter/50 rounded-2xl p-8 border border-white/5">
            <h3 className="text-2xl font-bold text-white mb-8">Cómo Elegimos la Estrategia Correcta para Ti</h3>
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
                    <h4 className="text-xl font-bold text-white mb-2">{item.title}</h4>
                    <p className="text-white/70">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Nuestro Proceso */}
      <section className="py-20 border-b border-white/5 bg-brand-dark-lighter/30">
        <div className="container">
          <div className="mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">2. Nuestro Proceso de 4 Fases</h2>
            <p className="text-white/70 text-lg">Un viaje estructurado hacia el crecimiento sostenible</p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 mb-12">
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
              <h3 className="text-2xl font-bold text-white mb-6">Un Viaje Estructurado hacia el Crecimiento</h3>
              <p className="text-white/70 mb-6 text-lg leading-relaxed">
                Nuestro proceso de 4 fases garantiza que cada paso esté fundamentado en datos y validado antes de escalar. No hacemos suposiciones, hacemos pruebas.
              </p>
              <p className="text-white/70 text-base leading-relaxed">
                Cada cliente es único, por eso personalizamos el timeline y enfoque según tus objetivos, presupuesto y mercado. Lo que funciona para una e-commerce, podría no funcionar para un SaaS.
              </p>
            </div>
          </div>

          <div className="space-y-6">
            {[
              {
                phase: 'Fase 1: Diagnóstico',
                duration: '1-2 semanas',
                items: ['Auditoría técnica y de marketing', 'Análisis competitivo', 'Entrevistas con tu equipo', 'Definición de oportunidades']
              },
              {
                phase: 'Fase 2: Estrategia',
                duration: '2 semanas',
                items: ['Desarrollo del plan', 'Definición de KPIs', 'Validación con el cliente', 'Roadmap de implementación']
              },
              {
                phase: 'Fase 3: Ejecución',
                duration: '6-12 semanas',
                items: ['Lanzamiento de campañas', 'Testing y optimización', 'Reportes semanales', 'Ajustes en tiempo real']
              },
              {
                phase: 'Fase 4: Escalado',
                duration: 'Continuo',
                items: ['Amplificación de canales', 'Inversión en lo que funciona', 'Nuevas tácticas', 'Crecimiento sostenible']
              }
            ].map((item) => (
              <div key={item.phase} className="bg-card/50 border border-white/5 rounded-xl p-8">
                <div className="flex items-center justify-between mb-4">
                  <h4 className="text-xl font-bold text-white">{item.phase}</h4>
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

          <div className="mt-12 bg-gradient-to-r from-brand-yellow/10 to-brand-cyan/10 border border-white/10 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-white mb-8 text-center">Tu Gerente de Cuenta Dedicado</h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-xl font-bold text-white mb-4">Responsabilidades</h4>
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
                <h4 className="text-xl font-bold text-white mb-4">Lo que Obtienes</h4>
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
      </section>

      {/* Section 3: Beneficios Clave */}
      <section className="py-20 border-b border-white/5">
        <div className="container">
          <div className="mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">3. Beneficios Clave de Trabajar con Elefante</h2>
            <p className="text-white/70 text-lg">¿Por qué somos diferentes?</p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 mb-12">
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">Una Diferencia Comprobada</h3>
              <p className="text-white/70 mb-6 text-lg leading-relaxed">
                No somos una agencia más. Nuestro enfoque centrado en resultados, transparencia y relación a largo plazo nos diferencia en el mercado.
              </p>
              <div className="space-y-4">
                {[
                  { value: '150+', label: 'Proyectos Completados' },
                  { value: '50+', label: 'Clientes Activos' },
                  { value: '+87%', label: 'Crecimiento Promedio' },
                  { value: '98%', label: 'Satisfacción' }
                ].map((stat) => (
                  <div key={stat.label} className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-lg bg-brand-red/20 flex items-center justify-center flex-shrink-0">
                      <Award className="text-brand-red" size={24} />
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-white">{stat.value}</div>
                      <div className="text-white/60 text-sm">{stat.label}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-gradient-to-br from-brand-red/5 to-brand-yellow/5 rounded-2xl p-8 border border-white/10">
              <h3 className="text-2xl font-bold text-white mb-6">Lo Que Nuestros Clientes Dicen</h3>
              <div className="space-y-6">
                <div className="border-l-2 border-brand-red pl-4">
                  <p className="text-white/80 mb-2 italic">
                    "Elefante transformó nuestro enfoque de marketing. En 3 meses vimos un aumento de 87% en conversiones."
                  </p>
                  <div className="text-sm text-white/60">CEO, E-commerce Tech</div>
                </div>
                <div className="border-l-2 border-brand-yellow pl-4">
                  <p className="text-white/80 mb-2 italic">
                    "El equipo es profesional, transparente y realmente se preocupa por nuestro crecimiento."
                  </p>
                  <div className="text-sm text-white/60">Manager, SaaS Startup</div>
                </div>
                <div className="border-l-2 border-brand-cyan pl-4">
                  <p className="text-white/80 mb-2 italic">
                    "La mejor inversión que hemos hecho en marketing. ROI superior a cualquier otra agencia."
                  </p>
                  <div className="text-sm text-white/60">Director, Consultoría</div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-brand-dark-lighter/50 rounded-2xl p-8 border border-white/5 mb-12">
            <h3 className="text-2xl font-bold text-white mb-8 text-center">Comparación: Elefante vs. Agencias Tradicionales</h3>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-white/10">
                    <th className="text-left py-4 px-4 text-white font-bold">Aspecto</th>
                    <th className="text-center py-4 px-4 text-white font-bold">Elefante</th>
                    <th className="text-center py-4 px-4 text-white/60 font-bold">Agencias Tradicionales</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { aspect: 'Enfoque', elefante: 'Resultados medibles', tradicional: 'Creatividad solamente' },
                    { aspect: 'Transparencia', elefante: 'Reportes semanales', tradicional: 'Reportes mensuales' },
                    { aspect: 'Equipo Dedicado', elefante: 'Sí, especializado', tradicional: 'Compartido con otros' },
                    { aspect: 'Velocidad', elefante: 'Resultados en 2-3 sem', tradicional: 'Resultados en 3-4 meses' },
                    { aspect: 'Contrato', elefante: 'Flexible y escalable', tradicional: 'Largo plazo fijo' },
                    { aspect: 'Optimización', elefante: 'Continua (diaria)', tradicional: 'Cada 2-4 semanas' }
                  ].map((row) => (
                    <tr key={row.aspect} className="border-b border-white/5 hover:bg-white/5">
                      <td className="py-4 px-4 text-white font-semibold">{row.aspect}</td>
                      <td className="py-4 px-4 text-center text-brand-red flex items-center justify-center gap-2">
                        <Zap size={16} />
                        {row.elefante}
                      </td>
                      <td className="py-4 px-4 text-center text-white/60">{row.tradicional}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold text-white mb-6">Nuestro Compromiso Contigo</h3>
            <p className="text-white/70 text-lg mb-12 max-w-3xl mx-auto">
              No somos un proveedor más. Somos tu partner en crecimiento. Tus objetivos son nuestros objetivos.
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  icon: <Heart className="text-brand-red" size={32} />,
                  title: 'Compromiso',
                  desc: 'Tu éxito es nuestra métrica de éxito. Celebramos tus logros.'
                },
                {
                  icon: <Target className="text-brand-yellow" size={32} />,
                  title: 'Alineación',
                  desc: 'Nuestros incentivos están alineados con tus resultados, no con nuestras ganancias.'
                },
                {
                  icon: <Zap className="text-brand-cyan" size={32} />,
                  title: 'Rapidez',
                  desc: 'Actuamos rápido, probamos hipótesis, aprendemos juntos y escalamos lo que funciona.'
                }
              ].map((item, idx) => (
                <div key={idx} className="bg-card/50 border border-white/5 rounded-xl p-8">
                  <div className="flex justify-center mb-4">{item.icon}</div>
                  <h4 className="text-xl font-bold text-white mb-3 text-center">{item.title}</h4>
                  <p className="text-white/70 text-center text-sm">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-brand-red/10 to-brand-yellow/10 border-b border-white/5">
        <div className="container max-w-3xl text-center">
          <h2 className="text-3xl font-bold text-white mb-4">¿Listo para Transformar Tu Negocio?</h2>
          <p className="text-white/70 text-lg mb-8">
            Descubre cómo nuestra metodología puede acelerar el crecimiento de tu empresa. Solicita una consultoría gratuita hoy.
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
