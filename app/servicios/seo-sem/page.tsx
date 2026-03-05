import { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Breadcrumb from '@/components/Breadcrumb';
import DemoRequestSection from '@/components/sections/DemoRequestSection';
import { Search, TrendingUp, Eye, Zap, CheckCircle, ArrowRight } from 'lucide-react';
import Image from 'next/image';
import JsonLdService from '@/components/seo/JsonLdService';

export const metadata: Metadata = {
  title: 'SEO & SEM | Elefante',
  description: 'Posicionamiento en buscadores (SEO) y publicidad en Google (SEM) para empresas colombianas. Tráfico orgánico y pagado de calidad.',
  keywords: 'SEO Colombia, SEM Google Ads Colombia, posicionamiento en Google, tráfico orgánico, marketing en buscadores',
  alternates: {
    canonical: '/servicios/seo-sem',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  openGraph: {
    title: 'SEO & SEM | Elefante',
    description: 'Domina los buscadores con nuestras estrategias de SEO y SEM',
    url: 'https://elefante.com.co/servicios/seo-sem',
    type: 'website',
  },
};

export default function SeoSemPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <JsonLdService
        name="SEO & SEM"
        description="Posicionamiento en buscadores (SEO) y publicidad en Google (SEM) para empresas colombianas. Tráfico orgánico y pagado de calidad."
        url="https://elefante.com.co/servicios/seo-sem"
        serviceType="Search Engine Optimization"
      />
      <Navbar />
      <Breadcrumb items={[{ label: 'Servicios', href: '#' }, { label: 'SEO & SEM', active: true }]} />

      {/* Hero Section */}
      <section className="py-20 border-b border-white/5 bg-gradient-to-b from-brand-dark-lighter/50 to-background">
        <div className="container max-w-4xl">
          <div className="text-center">
            <div className="inline-block mb-6 px-4 py-2 rounded-full bg-brand-red/20 border border-brand-red/50">
              <span className="text-brand-red font-semibold text-sm">Tráfico de Calidad</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Domina los Buscadores con SEO & SEM
            </h1>
            <p className="text-xl text-white/70 mb-8 leading-relaxed">
              Estrategias combinadas de posicionamiento orgánico (SEO) y publicidad en buscadores (SEM) para captar clientes con intención de compra.
            </p>
            <a href="/contacto" className="inline-block bg-brand-red hover:bg-brand-red/80 text-white font-semibold rounded-full px-8 py-3 transition-colors shadow-lg shadow-brand-red/20">
              Solicitar Auditoría Gratis
            </a>
          </div>
        </div>
      </section>

      {/* Visual Hero Image */}
      <section className="py-10 border-b border-white/5 bg-gradient-to-b from-brand-dark-lighter/50 to-background">
        <div className="container max-w-3xl">
          <div className="bg-gradient-to-br from-brand-red/10 to-brand-yellow/10 rounded-2xl overflow-hidden border border-white/10 h-80">
            <Image
              src="/images/seo-sem-neon.png"
              alt="Visibilidad y Estructura de Datos - SEO & SEM"
              width={900}
              height={320}
              className="w-full h-full object-cover"
              priority
            />
          </div>
        </div>
      </section>

      {/* SEO vs SEM */}
      <section className="py-20 border-b border-white/5">
        <div className="container">
          <h2 className="text-4xl font-bold text-white mb-16 text-center">SEO vs SEM: ¿Cuál es la Diferencia?</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-gradient-to-br from-brand-red/10 to-brand-yellow/10 rounded-2xl p-8 border border-white/10">
              <h3 className="text-2xl font-bold text-white mb-6">SEO (Posicionamiento Orgánico)</h3>
              <p className="text-white/70 mb-6">Optimización para aparecer en los primeros resultados de Google sin pagar por clic.</p>
              <ul className="space-y-4">
                {[
                  'Resultados a largo plazo (3-6 meses)',
                  'Tráfico orgánico sostenible',
                  'Mayor credibilidad y confianza',
                  'ROI superior a largo plazo',
                  'No depende de presupuesto de ads'
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <CheckCircle className="text-brand-red flex-shrink-0" size={18} />
                    <span className="text-white/80 text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-gradient-to-br from-brand-yellow/10 to-brand-red/10 rounded-2xl p-8 border border-white/10">
              <h3 className="text-2xl font-bold text-white mb-6">SEM (Publicidad en Buscadores)</h3>
              <p className="text-white/70 mb-6">Publicidad pagada en Google para aparecer en los primeros resultados.</p>
              <ul className="space-y-4">
                {[
                  'Resultados inmediatos',
                  'Control total del presupuesto',
                  'Targeting preciso de palabras clave',
                  'Escalable según necesidad',
                  'Ideal para conversiones rápidas'
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <CheckCircle className="text-brand-yellow flex-shrink-0" size={18} />
                    <span className="text-white/80 text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="mt-12 bg-brand-dark-lighter/50 rounded-2xl p-8 border border-white/5">
            <h3 className="text-2xl font-bold text-white mb-8 text-center">La Estrategia Ganadora: SEO + SEM</h3>
            <p className="text-white/70 text-center text-lg mb-8">
              Combinar SEO y SEM es la estrategia más efectiva. Mientras construyes autoridad orgánica, SEM te genera tráfico inmediato y conversiones.
            </p>
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-4xl font-bold text-brand-red mb-2">Mes 1-2</div>
                <p className="text-white/70">SEM genera conversiones rápidas</p>
              </div>
              <div>
                <div className="text-4xl font-bold text-brand-yellow mb-2">Mes 3-4</div>
                <p className="text-white/70">SEO comienza a mostrar resultados</p>
              </div>
              <div>
                <div className="text-4xl font-bold text-brand-cyan mb-2">Mes 5+</div>
                <p className="text-white/70">SEO domina, SEM complementa</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our SEO Process */}
      <section className="py-20 border-b border-white/5 bg-brand-dark-lighter/30">
        <div className="container">
          <h2 className="text-4xl font-bold text-white mb-16 text-center">Nuestro Proceso de SEO</h2>
          <div className="space-y-6">
            {[
              {
                step: '01',
                title: 'Auditoría SEO Completa',
                desc: 'Análisis técnico, de contenido y de backlinks para identificar oportunidades y problemas.'
              },
              {
                step: '02',
                title: 'Investigación de Palabras Clave',
                desc: 'Identificamos las palabras clave con mayor potencial de conversión en tu industria.'
              },
              {
                step: '03',
                title: 'Optimización On-Page',
                desc: 'Mejoramos títulos, descripciones, contenido y estructura técnica de tu sitio.'
              },
              {
                step: '04',
                title: 'Estrategia de Contenido',
                desc: 'Creamos contenido de calidad optimizado para SEO que atrae y convierte.'
              },
              {
                step: '05',
                title: 'Link Building',
                desc: 'Construimos autoridad mediante enlaces de calidad de sitios relevantes.'
              },
              {
                step: '06',
                title: 'Monitoreo y Optimización',
                desc: 'Seguimiento continuo de rankings, tráfico y ajustes para mejorar resultados.'
              }
            ].map((item) => (
              <div key={item.step} className="bg-card/50 border border-white/5 rounded-xl p-8 flex gap-6">
                <div className="min-w-fit">
                  <div className="w-12 h-12 rounded-full bg-brand-red/20 border border-brand-red/50 flex items-center justify-center">
                    <span className="font-display text-lg font-bold text-brand-red">{item.step}</span>
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

      {/* SEM Strategy */}
      <section className="py-20 border-b border-white/5">
        <div className="container">
          <h2 className="text-4xl font-bold text-white mb-16 text-center">Nuestra Estrategia de SEM</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-white mb-8">Optimización de Google Ads</h3>
              {[
                'Investigación profunda de palabras clave',
                'Estructura de campañas optimizada',
                'Copywriting persuasivo',
                'Landing pages de conversión',
                'A/B testing continuo',
                'Gestión inteligente de presupuesto'
              ].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <ArrowRight className="text-brand-yellow flex-shrink-0" size={20} />
                  <span className="text-white/80">{item}</span>
                </div>
              ))}
            </div>
            <div className="bg-gradient-to-br from-brand-yellow/10 to-brand-red/10 rounded-2xl p-8 border border-white/10">
              <h3 className="text-2xl font-bold text-white mb-6">Resultados Esperados</h3>
              <div className="space-y-6">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <Eye size={20} className="text-brand-yellow" />
                    <span className="text-white font-semibold">Visibilidad Inmediata</span>
                  </div>
                  <p className="text-white/60 text-sm">Apareces en primeros resultados desde el primer día</p>
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <Zap size={20} className="text-brand-red" />
                    <span className="text-white font-semibold">Tráfico Calificado</span>
                  </div>
                  <p className="text-white/60 text-sm">Usuarios con intención de compra específica</p>
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <TrendingUp size={20} className="text-brand-cyan" />
                    <span className="text-white font-semibold">ROI Medible</span>
                  </div>
                  <p className="text-white/60 text-sm">Cada peso invertido genera resultados claros</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Results */}
      <section className="py-20 border-b border-white/5 bg-gradient-to-r from-brand-red/5 to-brand-yellow/5">
        <div className="container">
          <h2 className="text-4xl font-bold text-white mb-16 text-center">Resultados Comprobados</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                metric: '+95%',
                label: 'Aumento en Tráfico Orgánico',
                desc: 'En 6 meses de SEO'
              },
              {
                metric: '2.1x',
                label: 'ROAS en SEM',
                desc: 'Retorno en publicidad invertida'
              },
              {
                metric: '+68%',
                label: 'Aumento en Leads',
                desc: 'Combinando SEO y SEM'
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
          <h2 className="text-4xl font-bold text-white mb-16 text-center">¿Por Qué Elegirnos?</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-gradient-to-br from-brand-red/10 to-brand-yellow/10 rounded-2xl p-8 border border-white/10">
              <h3 className="text-2xl font-bold text-white mb-6">Experiencia Comprobada</h3>
              <ul className="space-y-4">
                {[
                  'Certificados en Google Partner',
                  'Más de 100 sitios posicionados',
                  'Múltiples industrias',
                  'Resultados documentados',
                  'Equipo especializado'
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-white/80">
                    <CheckCircle className="text-brand-red flex-shrink-0" size={18} />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-gradient-to-br from-brand-yellow/10 to-brand-red/10 rounded-2xl p-8 border border-white/10">
              <h3 className="text-2xl font-bold text-white mb-6">Enfoque Integral</h3>
              <ul className="space-y-4">
                {[
                  'SEO + SEM combinados',
                  'Estrategia a largo plazo',
                  'Transparencia total',
                  'Reportes detallados',
                  'Optimización continua'
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
          <h2 className="text-3xl font-bold text-white mb-4">¿Listo para Dominar los Buscadores?</h2>
          <p className="text-white/70 text-lg mb-8">
            Descubre cómo nuestras estrategias de SEO y SEM pueden llevar tu negocio a los primeros resultados. Solicita una auditoría gratuita.
          </p>
          <a href="/contacto" className="inline-block bg-brand-red hover:bg-brand-red/80 text-white font-semibold rounded-full px-8 py-3 transition-colors shadow-lg shadow-brand-red/20">
            Solicitar Auditoría Gratis
          </a>
        </div>
      </section>

      <DemoRequestSection />
      <Footer />
    </div>
  );
}
