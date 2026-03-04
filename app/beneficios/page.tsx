import { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import PageHero from '@/components/PageHero';
import Breadcrumb from '@/components/Breadcrumb';
import RelatedPages from '@/components/RelatedPages';
import BenefitsSection from '@/components/sections/BenefitsSection';
import DemoRequestSection from '@/components/sections/DemoRequestSection';
import TestimonialsSection from '@/components/sections/TestimonialsSection';
import { Award, Target, Zap, Heart } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Beneficios Clave | Elefante Growth Marketing',
  description: 'Descubre los 6 beneficios principales de trabajar con Elefante: resultados probados, implementación rápida, transparencia total, crecimiento sostenible, equipo especializado y soporte dedicado.',
  keywords: 'beneficios growth marketing, ventajas agencia marketing, por qué elegirnos',
  openGraph: {
    title: 'Beneficios Clave | Elefante',
    description: 'Las ventajas que te diferenciará con Elefante',
    type: 'website',
  },
};

export default function BeneficiosPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <Breadcrumb items={[{ label: 'Beneficios Clave', active: true }]} />

      <PageHero
        title="¿Por Qué Elegir Elefante?"
        subtitle="Beneficios Clave"
        description="Somos más que una agencia. Somos tu equipo de crecimiento, comprometido con resultados reales. Descubre qué nos diferencia."
        backgroundImage="/images/success-stories.jpg"
        ctaText="Conocer Nuestro Equipo"
        ctaHref="#contacto"
      />

      <section className="py-16 border-b border-white/5">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-white mb-6">Una Diferencia Comprobada</h2>
              <p className="text-white/70 mb-6 text-lg leading-relaxed">
                No somos una agencia más. Nuestro enfoque centrado en resultados, transparencia y relación a largo plazo nos diferencia en el mercado.
              </p>
              <div className="space-y-4">
                {[
                  { value: '150+', label: 'Proyectos Completados' },
                  { value: '50+', label: 'Clientes Activos' },
                  { value: '+340%', label: 'ROI Promedio' },
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
                    "Elefante transformó nuestro enfoque de marketing. En 3 meses vimos un aumento de 400% en conversiones."
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
        </div>
      </section>

      <BenefitsSection />

      <section className="py-16 border-b border-white/5 bg-brand-dark-lighter/50">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-12 text-center">Comparación: Elefante vs. Agencias Tradicionales</h2>
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
        </div>
      </section>

      <section className="py-16">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-6">Nuestro Compromiso Contigo</h2>
            <p className="text-white/70 text-lg mb-12">
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
                  <h3 className="text-xl font-bold text-white mb-3 text-center">{item.title}</h3>
                  <p className="text-white/70 text-center text-sm">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <TestimonialsSection />

      <RelatedPages
        pages={[
          {
            title: 'Estrategias de Crecimiento',
            description: 'Conoce los 4 pilares de nuestro enfoque estratégico.',
            href: '/estrategia',
            icon: <Target size={24} />
          },
          {
            title: 'Nuestro Proceso',
            description: 'Entiende cómo implementamos estas estrategias paso a paso.',
            href: '/proceso',
            icon: <Zap size={24} />
          }
        ]}
      />

      <DemoRequestSection />
      <Footer />
    </div>
  );
}
