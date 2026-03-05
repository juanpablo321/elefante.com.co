import { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Breadcrumb from '@/components/Breadcrumb';
import DemoRequestSection from '@/components/sections/DemoRequestSection';
import { Heart, Users, MessageSquare, TrendingUp, CheckCircle, ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Social Media Marketing | Elefante',
  description: 'Estrategias de social media que generan engagement, comunidad y ventas. Instagram, TikTok, LinkedIn y más.',
  keywords: 'social media marketing, instagram marketing, tiktok marketing, linkedin marketing, community management',
  openGraph: {
    title: 'Social Media Marketing | Elefante',
    description: 'Crecimiento en redes sociales con estrategia y resultados medibles',
    type: 'website',
  },
};

export default function SocialMediaPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <Breadcrumb items={[{ label: 'Servicios', href: '#' }, { label: 'Social Media', active: true }]} />

      {/* Hero Section */}
      <section className="py-20 border-b border-white/5 bg-gradient-to-b from-brand-dark-lighter/50 to-background">
        <div className="container max-w-4xl">
          <div className="text-center">
            <div className="inline-block mb-6 px-4 py-2 rounded-full bg-brand-cyan/20 border border-brand-cyan/50">
              <span className="text-brand-cyan font-semibold text-sm">Comunidad y Engagement</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Social Media que Genera Resultados
            </h1>
            <p className="text-xl text-white/70 mb-8 leading-relaxed">
              Estrategias de redes sociales que construyen comunidad, generan engagement y aceleran ventas. Instagram, TikTok, LinkedIn, Facebook y más.
            </p>
            <a href="/contacto" className="inline-block bg-brand-cyan hover:bg-brand-cyan/80 text-black font-semibold rounded-full px-8 py-3 transition-colors shadow-lg shadow-brand-cyan/20">
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
              <h2 className="text-4xl font-bold text-white mb-6">Social Media Marketing Estratégico</h2>
              <p className="text-white/70 mb-6 text-lg leading-relaxed">
                No es solo publicar contenido. Es construir una estrategia integral que alinea tu marca, audiencia y objetivos de negocio en cada plataforma.
              </p>
              <ul className="space-y-4">
                {[
                  'Estrategia personalizada por plataforma',
                  'Contenido que genera engagement',
                  'Community management profesional',
                  'Análisis y reportes detallados',
                  'Crecimiento orgánico y pagado'
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <CheckCircle className="text-brand-cyan flex-shrink-0" size={20} />
                    <span className="text-white/80">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-gradient-to-br from-brand-cyan/10 to-brand-red/10 rounded-2xl p-8 border border-white/10 h-96 flex items-center justify-center">
              <div className="text-center">
                <Heart className="text-brand-cyan mx-auto mb-4" size={48} />
                <p className="text-white/70 text-lg">Comunidad Comprometida</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Platforms */}
      <section className="py-20 border-b border-white/5 bg-brand-dark-lighter/30">
        <div className="container">
          <h2 className="text-4xl font-bold text-white mb-16 text-center">Plataformas que Manejamos</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                platform: 'Instagram',
                focus: 'Visibilidad y Ventas',
                tactics: ['Feed strategy', 'Reels virales', 'Stories interactivas', 'Shoppable posts']
              },
              {
                platform: 'TikTok',
                focus: 'Alcance y Viralidad',
                tactics: ['Trending content', 'Challenges', 'Influencer partnerships', 'Viral hooks']
              },
              {
                platform: 'LinkedIn',
                focus: 'B2B y Thought Leadership',
                tactics: ['Contenido profesional', 'Networking', 'Employer branding', 'Lead generation']
              }
            ].map((item) => (
              <div key={item.platform} className="bg-card/50 border border-white/5 rounded-xl p-8">
                <h3 className="text-2xl font-bold text-white mb-2">{item.platform}</h3>
                <p className="text-brand-cyan font-semibold mb-6">{item.focus}</p>
                <ul className="space-y-2">
                  {item.tactics.map((tactic) => (
                    <li key={tactic} className="flex items-center gap-2 text-white/70 text-sm">
                      <span className="w-1.5 h-1.5 rounded-full bg-brand-cyan" />
                      {tactic}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Services */}
      <section className="py-20 border-b border-white/5">
        <div className="container">
          <h2 className="text-4xl font-bold text-white mb-16 text-center">Servicios de Social Media</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-white mb-8">Estrategia y Contenido</h3>
              {[
                'Auditoría de redes sociales',
                'Estrategia por plataforma',
                'Calendario editorial',
                'Creación de contenido',
                'Diseño gráfico y video',
                'Copywriting persuasivo'
              ].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <ArrowRight className="text-brand-cyan flex-shrink-0" size={20} />
                  <span className="text-white/80">{item}</span>
                </div>
              ))}
            </div>
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-white mb-8">Gestión y Crecimiento</h3>
              {[
                'Community management 24/7',
                'Respuesta a mensajes y comentarios',
                'Moderación de comunidad',
                'Análisis y reportes',
                'Publicidad en redes sociales',
                'Influencer partnerships'
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

      {/* Results */}
      <section className="py-20 border-b border-white/5 bg-gradient-to-r from-brand-cyan/5 to-brand-red/5">
        <div className="container">
          <h2 className="text-4xl font-bold text-white mb-16 text-center">Resultados que Hemos Logrado</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                metric: '+65%',
                label: 'Crecimiento en Engagement',
                desc: 'Promedio en 3 meses'
              },
              {
                metric: '+1.8K',
                label: 'Nuevos Seguidores',
                desc: 'Crecimiento orgánico mensual'
              },
              {
                metric: '+45%',
                label: 'Aumento en Conversiones',
                desc: 'Desde redes sociales'
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
              <h3 className="text-2xl font-bold text-white mb-6">Experiencia</h3>
              <ul className="space-y-4">
                {[
                  '50+ marcas gestionadas',
                  'Múltiples industrias',
                  'Equipo creativo especializado',
                  'Tendencias siempre actualizadas',
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
              <h3 className="text-2xl font-bold text-white mb-6">Resultados</h3>
              <ul className="space-y-4">
                {[
                  'Crecimiento orgánico real',
                  'Comunidad comprometida',
                  'Conversiones medibles',
                  'Reportes transparentes',
                  'Estrategia escalable'
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
          <h2 className="text-3xl font-bold text-white mb-4">¿Listo para Transformar tus Redes Sociales?</h2>
          <p className="text-white/70 text-lg mb-8">
            Descubre cómo podemos ayudarte a construir una comunidad comprometida y generar resultados. Solicita una auditoría gratuita.
          </p>
          <a href="/contacto" className="inline-block bg-brand-cyan hover:bg-brand-cyan/80 text-black font-semibold rounded-full px-8 py-3 transition-colors shadow-lg shadow-brand-cyan/20">
            Solicitar Auditoría Gratuita
          </a>
        </div>
      </section>

      <DemoRequestSection />
      <Footer />
    </div>
  );
}
