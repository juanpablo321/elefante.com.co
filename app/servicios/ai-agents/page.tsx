import { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Breadcrumb from '@/components/Breadcrumb';
import DemoRequestSection from '@/components/sections/DemoRequestSection';
import { Zap, Brain, Cpu, TrendingUp, CheckCircle, ArrowRight } from 'lucide-react';
import JsonLdService from '@/components/seo/JsonLdService';

export const metadata: Metadata = {
  title: 'AI Agents | Elefante',
  description: 'Automatización inteligente con AI Agents para empresas colombianas. Chatbots, automatización de procesos de marketing y asistentes virtuales con IA.',
  keywords: 'AI agents Colombia, chatbots marketing, automatización IA, inteligencia artificial marketing, asistentes virtuales empresas',
  alternates: {
    canonical: '/servicios/ai-agents',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  openGraph: {
    title: 'AI Agents | Elefante',
    description: 'Automatización inteligente con agentes de IA para tu negocio',
    url: 'https://elefante.com.co/servicios/ai-agents',
    type: 'website',
  },
};

export default function AIAgentsPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <JsonLdService
        name="AI Agents"
        description="Automatización inteligente con AI Agents para empresas colombianas. Chatbots, automatización de procesos de marketing y asistentes virtuales con IA."
        url="https://elefante.com.co/servicios/ai-agents"
        serviceType="Artificial Intelligence Services"
      />
      <Navbar />
      <Breadcrumb items={[{ label: 'Servicios', href: '#' }, { label: 'AI Agents', active: true }]} />

      {/* Hero Section */}
      <section className="py-20 border-b border-white/5 bg-gradient-to-b from-brand-dark-lighter/50 to-background">
        <div className="container max-w-4xl">
          <div className="text-center">
            <div className="inline-block mb-6 px-4 py-2 rounded-full bg-brand-red/20 border border-brand-red/50">
              <span className="text-brand-red font-semibold text-sm">Automatización Inteligente</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
              AI Agents: Automatización Inteligente para tu Negocio
            </h1>
            <p className="text-xl text-white/70 mb-8 leading-relaxed">
              Agentes de IA que trabajan 24/7 para automatizar procesos, atender clientes y escalar tu negocio sin aumentar costos operativos.
            </p>
            <a href="/contacto" className="inline-block bg-brand-red hover:bg-brand-red/80 text-white font-semibold rounded-full px-8 py-3 transition-colors shadow-lg shadow-brand-red/20">
              Solicitar Demo Gratis
            </a>
          </div>
        </div>
      </section>

      {/* What are AI Agents */}
      <section className="py-20 border-b border-white/5">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-white mb-6">¿Qué son los AI Agents?</h2>
              <p className="text-white/70 mb-6 text-lg leading-relaxed">
                Los AI Agents son sistemas inteligentes que pueden realizar tareas complejas de forma autónoma. Entienden contexto, aprenden de interacciones y toman decisiones sin intervención humana.
              </p>
              <ul className="space-y-4">
                {[
                  'Funcionan 24/7 sin descanso',
                  'Aprenden de cada interacción',
                  'Escalan sin aumentar costos',
                  'Mejoran continuamente',
                  'Integración con tus sistemas'
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <CheckCircle className="text-brand-red flex-shrink-0" size={20} />
                    <span className="text-white/80">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-gradient-to-br from-brand-red/10 to-brand-yellow/10 rounded-2xl p-8 border border-white/10 h-96 flex items-center justify-center">
              <div className="text-center">
                <Brain className="text-brand-red mx-auto mb-4" size={48} />
                <p className="text-white/70 text-lg">Inteligencia Artificial</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-20 border-b border-white/5 bg-brand-dark-lighter/30">
        <div className="container">
          <h2 className="text-4xl font-bold text-white mb-16 text-center">Casos de Uso de AI Agents</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: 'Atención al Cliente',
                desc: 'Chatbots que responden preguntas frecuentes, generan leads y resuelven problemas 24/7',
                benefits: ['Disponibilidad 24/7', 'Respuestas instantáneas', 'Escalabilidad sin costos']
              },
              {
                title: 'Lead Generation',
                desc: 'Agentes que califican leads automáticamente y los preparan para tu equipo de ventas',
                benefits: ['Leads pre-calificados', 'Ahorro de tiempo', 'Mejor conversión']
              },
              {
                title: 'Automatización de Procesos',
                desc: 'Automatiza tareas repetitivas: emails, seguimientos, reportes, actualizaciones de CRM',
                benefits: ['Reducción de errores', 'Ahorro de tiempo', 'Consistencia']
              },
              {
                title: 'Análisis de Datos',
                desc: 'Agentes que analizan datos, generan insights y recomendaciones automáticamente',
                benefits: ['Análisis en tiempo real', 'Decisiones rápidas', 'Escalabilidad']
              },
              {
                title: 'Personalización',
                desc: 'Experiencias personalizadas para cada usuario basadas en comportamiento e historial',
                benefits: ['Mayor engagement', 'Mejor conversión', 'Lealtad del cliente']
              },
              {
                title: 'Soporte Técnico',
                desc: 'Agentes que diagnostican problemas, sugieren soluciones y escalan cuando es necesario',
                benefits: ['Resolución rápida', 'Satisfacción del cliente', 'Reducción de tickets']
              }
            ].map((item) => (
              <div key={item.title} className="bg-card/50 border border-white/5 rounded-xl p-8">
                <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                <p className="text-white/70 mb-4">{item.desc}</p>
                <ul className="space-y-2">
                  {item.benefits.map((benefit) => (
                    <li key={benefit} className="flex items-center gap-2 text-white/60 text-sm">
                      <span className="w-1.5 h-1.5 rounded-full bg-brand-red" />
                      {benefit}
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
          <h2 className="text-4xl font-bold text-white mb-16 text-center">Nuestro Proceso de Implementación</h2>
          <div className="space-y-6">
            {[
              {
                step: '01',
                title: 'Diagnóstico y Planificación',
                desc: 'Identificamos procesos que pueden ser automatizados y definimos objetivos claros.'
              },
              {
                step: '02',
                title: 'Diseño del Agente',
                desc: 'Diseñamos el flujo, capacidades y comportamiento del AI Agent según tus necesidades.'
              },
              {
                step: '03',
                title: 'Entrenamiento',
                desc: 'Entrenamos el agente con datos y ejemplos para que entienda tu negocio y audiencia.'
              },
              {
                step: '04',
                title: 'Integración',
                desc: 'Integramos el agente con tus sistemas: CRM, email, redes sociales, etc.'
              },
              {
                step: '05',
                title: 'Testing y Refinamiento',
                desc: 'Probamos exhaustivamente y hacemos ajustes para optimizar rendimiento.'
              },
              {
                step: '06',
                title: 'Lanzamiento y Monitoreo',
                desc: 'Lanzamos en producción y monitoreamos continuamente para mejoras.'
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

      {/* Technology Stack */}
      <section className="py-20 border-b border-white/5 bg-gradient-to-r from-brand-red/5 to-brand-yellow/5">
        <div className="container">
          <h2 className="text-4xl font-bold text-white mb-16 text-center">Tecnología que Utilizamos</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                tech: 'LLMs Avanzados',
                desc: 'Modelos de lenguaje de última generación para comprensión natural'
              },
              {
                tech: 'Machine Learning',
                desc: 'Algoritmos que aprenden y mejoran con cada interacción'
              },
              {
                tech: 'NLP',
                desc: 'Procesamiento de lenguaje natural para entender contexto'
              },
              {
                tech: 'API Integrations',
                desc: 'Conexión con tus herramientas y sistemas existentes'
              },
              {
                tech: 'Cloud Infrastructure',
                desc: 'Escalabilidad y confiabilidad en la nube'
              },
              {
                tech: 'Security & Privacy',
                desc: 'Protección de datos y cumplimiento normativo'
              }
            ].map((item) => (
              <div key={item.tech} className="bg-card/50 border border-white/5 rounded-xl p-8 text-center">
                <Cpu className="text-brand-red mx-auto mb-4" size={32} />
                <h3 className="text-lg font-bold text-white mb-2">{item.tech}</h3>
                <p className="text-white/70 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Results */}
      <section className="py-20 border-b border-white/5">
        <div className="container">
          <h2 className="text-4xl font-bold text-white mb-16 text-center">Resultados de Nuestros AI Agents</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                metric: '-60%',
                label: 'Reducción en Tiempo de Respuesta',
                desc: 'Respuestas instantáneas 24/7'
              },
              {
                metric: '+45%',
                label: 'Aumento en Conversiones',
                desc: 'Mejor atención y personalización'
              },
              {
                metric: '+3x',
                label: 'Productividad del Equipo',
                desc: 'Menos tareas repetitivas'
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
      <section className="py-20 border-b border-white/5 bg-brand-dark-lighter/30">
        <div className="container">
          <h2 className="text-4xl font-bold text-white mb-16 text-center">¿Por Qué Elegirnos?</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-gradient-to-br from-brand-red/10 to-brand-yellow/10 rounded-2xl p-8 border border-white/10">
              <h3 className="text-2xl font-bold text-white mb-6">Experiencia en IA</h3>
              <ul className="space-y-4">
                {[
                  'Especialistas en AI y Machine Learning',
                  'Experiencia con múltiples LLMs',
                  'Proyectos exitosos en producción',
                  'Actualización constante en tecnología',
                  'Equipo dedicado a tu proyecto'
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-white/80">
                    <CheckCircle className="text-brand-red flex-shrink-0" size={18} />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-gradient-to-br from-brand-yellow/10 to-brand-red/10 rounded-2xl p-8 border border-white/10">
              <h3 className="text-2xl font-bold text-white mb-6">Enfoque Práctico</h3>
              <ul className="space-y-4">
                {[
                  'Soluciones personalizadas',
                  'ROI medible desde el inicio',
                  'Integración sin fricciones',
                  'Soporte y mejora continua',
                  'Escalabilidad garantizada'
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
          <h2 className="text-3xl font-bold text-white mb-4">¿Listo para Automatizar tu Negocio?</h2>
          <p className="text-white/70 text-lg mb-8">
            Descubre cómo los AI Agents pueden transformar tu operación. Solicita una demo gratuita y ve en acción cómo funciona.
          </p>
          <a href="/contacto" className="inline-block bg-brand-red hover:bg-brand-red/80 text-white font-semibold rounded-full px-8 py-3 transition-colors shadow-lg shadow-brand-red/20">
            Solicitar Demo Gratis
          </a>
        </div>
      </section>

      <DemoRequestSection />
      <Footer />
    </div>
  );
}
