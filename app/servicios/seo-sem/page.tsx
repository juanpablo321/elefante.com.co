import { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Breadcrumb from '@/components/Breadcrumb';
import DemoRequestSection from '@/components/sections/DemoRequestSection';
import { Search, TrendingUp, Eye, Zap, CheckCircle, ArrowRight, Brain, Mic, Globe, Star, BarChart3 } from 'lucide-react';
import Image from 'next/image';
import JsonLdService from '@/components/seo/JsonLdService';

export const metadata: Metadata = {
  title: 'SEO, SEM, GEO & AEO | Posicionamiento Orgánico Total | Elefante',
  description: 'Estrategias completas de posicionamiento orgánico: SEO, SEM, GEO (IA generativa), AEO (motores de respuesta), E-E-A-T, SXO y VSO para empresas colombianas.',
  keywords: 'SEO Colombia, SEM Google Ads, GEO inteligencia artificial, AEO answer engine optimization, posicionamiento orgánico, ChatGPT SEO, Gemini SEO, E-E-A-T',
  alternates: {
    canonical: '/servicios/seo-sem',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  openGraph: {
    title: 'SEO, SEM, GEO & AEO | Posicionamiento Orgánico Total | Elefante',
    description: 'Domina Google, ChatGPT, Gemini y los asistentes de voz con estrategias de posicionamiento de nueva generación.',
    url: 'https://elefante.com.co/servicios/seo-sem',
    type: 'website',
  },
};

const disciplines = [
  {
    id: 'seo',
    tag: 'Base Fundamental',
    tagColor: 'text-brand-red',
    tagBg: 'bg-brand-red/20 border-brand-red/50',
    icon: Search,
    iconColor: 'text-brand-red',
    title: 'SEO',
    subtitle: 'Search Engine Optimization',
    description: 'El pilar de toda estrategia de visibilidad digital. Optimización técnica, de contenido y de autoridad para dominar los resultados orgánicos de Google y Bing.',
    where: 'Google, Bing, Yahoo',
    maturity: 'Maduro',
    maturityColor: 'text-green-400',
    tactics: [
      'Auditoría técnica y Core Web Vitals',
      'Investigación y arquitectura de palabras clave',
      'Optimización On-Page y estructura semántica',
      'Link Building y autoridad de dominio',
      'SEO local y Google Business Profile',
    ],
  },
  {
    id: 'sem',
    tag: 'Resultados Inmediatos',
    tagColor: 'text-brand-yellow',
    tagBg: 'bg-brand-yellow/20 border-brand-yellow/50',
    icon: Zap,
    iconColor: 'text-brand-yellow',
    title: 'SEM',
    subtitle: 'Search Engine Marketing',
    description: 'Publicidad pagada en buscadores para captar usuarios con intención de compra desde el primer día. Google Ads y Microsoft Advertising con gestión experta.',
    where: 'Google Ads, Microsoft Ads',
    maturity: 'Maduro',
    maturityColor: 'text-green-400',
    tactics: [
      'Campañas de búsqueda y Display',
      'Estructura de grupos de anuncios optimizada',
      'Copywriting persuasivo y A/B testing',
      'Landing pages de alta conversión',
      'Gestión inteligente de presupuesto y ROAS',
    ],
  },
  {
    id: 'aeo',
    tag: 'En Expansión',
    tagColor: 'text-brand-cyan',
    tagBg: 'bg-brand-cyan/20 border-brand-cyan/50',
    icon: Mic,
    iconColor: 'text-brand-cyan',
    title: 'AEO',
    subtitle: 'Answer Engine Optimization',
    description: 'Optimización para que tu contenido aparezca como respuesta directa en asistentes de voz y featured snippets. Cuando el usuario pregunta, tu marca responde.',
    where: 'Google Featured Snippets, Siri, Alexa, Google Assistant',
    maturity: 'En expansión',
    maturityColor: 'text-blue-400',
    tactics: [
      'Contenido en formato pregunta-respuesta',
      'Schema.org FAQPage, HowTo y Q&A',
      'Optimización para Featured Snippets',
      'Lenguaje conversacional y natural',
      'Respuestas concisas de 40-60 palabras',
    ],
  },
  {
    id: 'geo',
    tag: 'Emergente 2025',
    tagColor: 'text-purple-400',
    tagBg: 'bg-purple-500/20 border-purple-500/50',
    icon: Brain,
    iconColor: 'text-purple-400',
    title: 'GEO',
    subtitle: 'Generative Engine Optimization',
    description: 'La frontera del posicionamiento digital. Optimización para ser citado y referenciado por los motores de IA generativa que están redefiniendo cómo las personas buscan información.',
    where: 'ChatGPT, Google Gemini, Perplexity, Claude, Microsoft Copilot',
    maturity: 'Emergente',
    maturityColor: 'text-purple-400',
    tactics: [
      'Contenido semánticamente rico y bien estructurado',
      'HTML semántico que los LLMs puedan parsear',
      'Autoridad y citas de fuentes confiables',
      'Resúmenes claros al inicio del contenido',
      'Consistencia de entidades y marca en toda la web',
    ],
  },
  {
    id: 'eeat',
    tag: 'Base de Autoridad',
    tagColor: 'text-orange-400',
    tagBg: 'bg-orange-500/20 border-orange-500/50',
    icon: Star,
    iconColor: 'text-orange-400',
    title: 'E-E-A-T',
    subtitle: 'Experience · Expertise · Authoritativeness · Trustworthiness',
    description: 'El marco de evaluación de calidad de Google que determina si tu contenido merece posicionarse. Sin E-E-A-T sólido, ninguna otra técnica funciona a largo plazo.',
    where: 'Todos los motores de búsqueda e IA',
    maturity: 'Base fundamental',
    maturityColor: 'text-orange-400',
    tactics: [
      'Perfiles de autor con experiencia demostrable',
      'Contenido basado en experiencia real y datos',
      'Menciones de marca en medios de autoridad',
      'Transparencia: quiénes somos, cómo trabajamos',
      'Señales de confianza: HTTPS, políticas, contacto',
    ],
  },
  {
    id: 'sxo',
    tag: 'Conversión',
    tagColor: 'text-teal-400',
    tagBg: 'bg-teal-500/20 border-teal-500/50',
    icon: BarChart3,
    iconColor: 'text-teal-400',
    title: 'SXO',
    subtitle: 'Search Experience Optimization',
    description: 'La fusión de SEO y UX. No basta con atraer tráfico: la experiencia del usuario una vez que llega determina si convierte. SXO cierra esa brecha.',
    where: 'Todos los canales + experiencia en sitio',
    maturity: 'Consolidado',
    maturityColor: 'text-teal-400',
    tactics: [
      'Core Web Vitals: LCP, CLS, INP optimizados',
      'Arquitectura de información intuitiva',
      'Diseño responsive y accesibilidad (WCAG)',
      'Contenido que satisface la intención de búsqueda',
      'Reducción de tasa de rebote y aumento de conversión',
    ],
  },
  {
    id: 'vso',
    tag: 'Voz & Local',
    tagColor: 'text-pink-400',
    tagBg: 'bg-pink-500/20 border-pink-500/50',
    icon: Globe,
    iconColor: 'text-pink-400',
    title: 'VSO',
    subtitle: 'Voice Search Optimization',
    description: 'Optimización para las búsquedas por voz que crecen exponencialmente. Las consultas de voz son conversacionales, locales y de alta intención de compra.',
    where: 'Siri, Google Assistant, Alexa, Cortana, Waze',
    maturity: 'En crecimiento',
    maturityColor: 'text-pink-400',
    tactics: [
      'Palabras clave conversacionales de cola larga',
      'Optimización para búsquedas "cerca de mí"',
      'Google Business Profile completo y actualizado',
      'Velocidad de carga móvil < 2 segundos',
      'Respuestas directas a preguntas frecuentes',
    ],
  },
];

const comparisonData = [
  { technique: 'SEO', target: 'Google, Bing', goal: 'Tráfico orgánico', maturity: 'Maduro', color: 'text-brand-red' },
  { technique: 'SEM', target: 'Google Ads, Microsoft Ads', goal: 'Conversiones inmediatas', maturity: 'Maduro', color: 'text-brand-yellow' },
  { technique: 'AEO', target: 'Featured Snippets, Voz', goal: 'Respuesta directa', maturity: 'En expansión', color: 'text-brand-cyan' },
  { technique: 'GEO', target: 'ChatGPT, Gemini, Perplexity', goal: 'Citado por IA generativa', maturity: 'Emergente', color: 'text-purple-400' },
  { technique: 'E-E-A-T', target: 'Todos los motores', goal: 'Autoridad y confianza', maturity: 'Base fundamental', color: 'text-orange-400' },
  { technique: 'SXO', target: 'Todos + experiencia en sitio', goal: 'Conversión post-clic', maturity: 'Consolidado', color: 'text-teal-400' },
  { technique: 'VSO', target: 'Siri, Alexa, Google Assistant', goal: 'Búsquedas por voz', maturity: 'En crecimiento', color: 'text-pink-400' },
];

export default function SeoSemPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <JsonLdService
        name="SEO, SEM, GEO & AEO — Posicionamiento Orgánico Total"
        description="Estrategias completas de posicionamiento orgánico: SEO, SEM, GEO (IA generativa), AEO (motores de respuesta), E-E-A-T, SXO y VSO para empresas colombianas."
        url="https://elefante.com.co/servicios/seo-sem"
        serviceType="Search Engine Optimization"
      />
      <Navbar />
      <Breadcrumb items={[{ label: 'Servicios', href: '#' }, { label: 'SEO & Posicionamiento', active: true }]} />

      {/* Hero Section */}
      <section className="py-20 border-b border-white/5 bg-gradient-to-b from-brand-dark-lighter/50 to-background">
        <div className="container max-w-5xl">
          <div className="text-center">
            <div className="inline-block mb-6 px-4 py-2 rounded-full bg-brand-red/20 border border-brand-red/50">
              <span className="text-brand-red font-semibold text-sm">Posicionamiento Orgánico Total</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Visibilidad en Google,{' '}
              <span className="text-brand-red">ChatGPT</span>{' '}
              y Todos los Motores
            </h1>
            <p className="text-xl text-white/70 mb-4 leading-relaxed max-w-3xl mx-auto">
              El SEO tradicional ya no es suficiente. En 2026, tus clientes buscan en Google, preguntan a ChatGPT, consultan a Gemini y usan asistentes de voz. Necesitas estar en todos.
            </p>
            <p className="text-lg text-white/50 mb-10 max-w-2xl mx-auto">
              Implementamos las 7 disciplinas del posicionamiento moderno: SEO, SEM, GEO, AEO, E-E-A-T, SXO y VSO.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <a href="/#demo" className="inline-block bg-brand-red hover:bg-brand-red/80 text-white font-semibold rounded-full px-8 py-3 transition-colors shadow-lg shadow-brand-red/20">
                Agendar Demo Gratuita
              </a>
              <a href="#disciplinas" className="inline-block bg-white/10 hover:bg-white/20 text-white font-semibold rounded-full px-8 py-3 transition-colors border border-white/20">
                Ver las 7 Disciplinas
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Visual Hero Image */}
      <section className="py-10 border-b border-white/5 bg-gradient-to-b from-brand-dark-lighter/50 to-background">
        <div className="container max-w-3xl">
          <div className="bg-gradient-to-br from-brand-red/10 to-brand-yellow/10 rounded-2xl overflow-hidden border border-white/10 h-80">
            <Image
              src="/images/seo-sem-neon.png"
              alt="Posicionamiento Orgánico Total — SEO, GEO, AEO"
              width={900}
              height={320}
              className="w-full h-full object-cover"
              priority
            />
          </div>
        </div>
      </section>

      {/* The New Reality */}
      <section className="py-20 border-b border-white/5">
        <div className="container max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">La Nueva Realidad de la Búsqueda</h2>
            <p className="text-white/70 text-lg leading-relaxed">
              En 2025, el 50% de los consumidores ya usa motores de búsqueda con IA. Para 2028, el impacto en ingresos podría superar los <strong className="text-white">$750 mil millones de dólares</strong>. Las marcas que no aparezcan en las respuestas de IA generativa están perdiendo visibilidad de forma silenciosa y acelerada.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                stat: '50%',
                label: 'de usuarios ya usa búsqueda con IA',
                color: 'text-brand-red',
                source: 'McKinsey, 2025'
              },
              {
                stat: '$750B',
                label: 'en ingresos impactados por IA search para 2028',
                color: 'text-brand-yellow',
                source: 'McKinsey, 2025'
              },
              {
                stat: '30-40%',
                label: 'del tráfico potencial perdido sin optimización para IA',
                color: 'text-brand-cyan',
                source: 'RoastWeb, 2026'
              }
            ].map((item) => (
              <div key={item.label} className="bg-card/50 border border-white/5 rounded-xl p-6 text-center">
                <div className={`text-4xl font-bold mb-3 ${item.color}`}>{item.stat}</div>
                <p className="text-white/80 text-sm mb-2">{item.label}</p>
                <p className="text-white/30 text-xs">{item.source}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7 Disciplines */}
      <section id="disciplinas" className="py-20 border-b border-white/5 bg-brand-dark-lighter/30">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6">Las 7 Disciplinas del Posicionamiento Moderno</h2>
            <p className="text-white/70 text-lg max-w-3xl mx-auto">
              Cada disciplina cubre un canal diferente donde tus clientes buscan. Implementarlas juntas crea una presencia orgánica omnipresente que ningún competidor puede ignorar.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {disciplines.map((d) => {
              const Icon = d.icon;
              return (
                <div key={d.id} className="bg-card/50 border border-white/5 rounded-2xl p-8 hover:border-white/10 transition-colors">
                  <div className="flex items-start gap-4 mb-6">
                    <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center flex-shrink-0">
                      <Icon className={d.iconColor} size={24} />
                    </div>
                    <div>
                      <div className={`inline-block mb-2 px-3 py-1 rounded-full text-xs font-semibold border ${d.tagBg} ${d.tagColor}`}>
                        {d.tag}
                      </div>
                      <h3 className="text-2xl font-bold text-white">{d.title}</h3>
                      <p className="text-white/40 text-sm">{d.subtitle}</p>
                    </div>
                  </div>
                  <p className="text-white/70 mb-6 leading-relaxed">{d.description}</p>
                  <div className="mb-4">
                    <p className="text-white/40 text-xs uppercase tracking-wider mb-1">Actúa en</p>
                    <p className="text-white/60 text-sm">{d.where}</p>
                  </div>
                  <ul className="space-y-2">
                    {d.tactics.map((tactic) => (
                      <li key={tactic} className="flex items-center gap-3">
                        <CheckCircle className={`${d.iconColor} flex-shrink-0`} size={14} />
                        <span className="text-white/70 text-sm">{tactic}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-20 border-b border-white/5">
        <div className="container">
          <h2 className="text-4xl font-bold text-white mb-16 text-center">Comparativa de Disciplinas</h2>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-white/10">
                  <th className="text-left py-4 px-6 text-white/50 text-sm uppercase tracking-wider">Disciplina</th>
                  <th className="text-left py-4 px-6 text-white/50 text-sm uppercase tracking-wider">Canal</th>
                  <th className="text-left py-4 px-6 text-white/50 text-sm uppercase tracking-wider">Objetivo</th>
                  <th className="text-left py-4 px-6 text-white/50 text-sm uppercase tracking-wider">Madurez</th>
                </tr>
              </thead>
              <tbody>
                {comparisonData.map((row, i) => (
                  <tr key={row.technique} className={`border-b border-white/5 ${i % 2 === 0 ? 'bg-white/2' : ''}`}>
                    <td className="py-4 px-6">
                      <span className={`font-bold text-lg ${row.color}`}>{row.technique}</span>
                    </td>
                    <td className="py-4 px-6 text-white/60 text-sm">{row.target}</td>
                    <td className="py-4 px-6 text-white/80 text-sm">{row.goal}</td>
                    <td className="py-4 px-6">
                      <span className={`text-sm font-medium ${row.color}`}>{row.maturity}</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* GEO Deep Dive */}
      <section className="py-20 border-b border-white/5 bg-gradient-to-br from-purple-900/10 to-brand-dark-lighter/30">
        <div className="container max-w-4xl">
          <div className="text-center mb-12">
            <div className="inline-block mb-4 px-4 py-2 rounded-full bg-purple-500/20 border border-purple-500/50">
              <span className="text-purple-400 font-semibold text-sm">Nueva Disciplina Crítica</span>
            </div>
            <h2 className="text-4xl font-bold text-white mb-6">¿Por Qué GEO es Urgente en 2025?</h2>
            <p className="text-white/70 text-lg leading-relaxed">
              ChatGPT, Gemini y Perplexity están procesando millones de páginas diariamente, convirtiendo contenido en respuestas conversacionales. Cada vez que un motor de IA responde sin citar tu marca, estás perdiendo visibilidad que se acumula exponencialmente.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-card/50 border border-purple-500/20 rounded-2xl p-8">
              <h3 className="text-xl font-bold text-white mb-6">Cómo Funciona GEO</h3>
              <div className="space-y-4">
                {[
                  { step: '01', title: 'Los LLMs rastrean tu sitio', desc: 'GPTBot, ClaudeBot y otros crawlers de IA indexan tu contenido continuamente.' },
                  { step: '02', title: 'Vectorizan tu contenido', desc: 'Convierten tu texto en embeddings semánticos para entender el significado.' },
                  { step: '03', title: 'Sintetizan respuestas', desc: 'Cuando un usuario pregunta algo relevante, el LLM decide si citar tu fuente.' },
                  { step: '04', title: 'Efecto compuesto', desc: 'Ser citado refuerza la autoridad percibida, generando más citas futuras.' },
                ].map((item) => (
                  <div key={item.step} className="flex gap-4">
                    <div className="w-8 h-8 rounded-full bg-purple-500/20 border border-purple-500/50 flex items-center justify-center flex-shrink-0">
                      <span className="text-purple-400 text-xs font-bold">{item.step}</span>
                    </div>
                    <div>
                      <p className="text-white font-semibold text-sm">{item.title}</p>
                      <p className="text-white/50 text-sm">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-card/50 border border-purple-500/20 rounded-2xl p-8">
              <h3 className="text-xl font-bold text-white mb-6">Lo Que Implementamos</h3>
              <div className="space-y-4">
                {[
                  'HTML semántico limpio y jerárquico',
                  'Schema.org como "TypeScript para contenido"',
                  'Resúmenes directos al inicio de cada página',
                  'Contenido original con datos y citas verificables',
                  'Consistencia de entidades de marca en todo el sitio',
                  'Optimización del robots.txt para crawlers de IA',
                  'Velocidad de carga para rastreo eficiente',
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <CheckCircle className="text-purple-400 flex-shrink-0" size={16} />
                    <span className="text-white/70 text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Process */}
      <section className="py-20 border-b border-white/5 bg-brand-dark-lighter/30">
        <div className="container">
          <h2 className="text-4xl font-bold text-white mb-16 text-center">Nuestro Proceso de Posicionamiento 360°</h2>
          <div className="space-y-6 max-w-4xl mx-auto">
            {[
              {
                step: '01',
                title: 'Auditoría de Visibilidad Total',
                desc: 'Analizamos tu presencia en Google, en respuestas de IA generativa, en asistentes de voz y en búsquedas locales. Identificamos brechas en las 7 disciplinas.',
                color: 'text-brand-red',
                border: 'border-brand-red/50',
                bg: 'bg-brand-red/20'
              },
              {
                step: '02',
                title: 'Estrategia de Palabras Clave y Entidades',
                desc: 'Mapeamos las consultas de tus clientes en todos los canales: búsquedas tradicionales, preguntas conversacionales para AEO y entidades semánticas para GEO.',
                color: 'text-brand-yellow',
                border: 'border-brand-yellow/50',
                bg: 'bg-brand-yellow/20'
              },
              {
                step: '03',
                title: 'Optimización Técnica y Semántica',
                desc: 'Implementamos SEO técnico, HTML semántico, Schema.org completo y estructura de contenido optimizada para ser parseada por motores tradicionales y LLMs.',
                color: 'text-brand-cyan',
                border: 'border-brand-cyan/50',
                bg: 'bg-brand-cyan/20'
              },
              {
                step: '04',
                title: 'Construcción de E-E-A-T y Autoridad',
                desc: 'Desarrollamos señales de experiencia, expertise, autoridad y confianza: perfiles de autor, menciones en medios, backlinks de calidad y transparencia de marca.',
                color: 'text-orange-400',
                border: 'border-orange-400/50',
                bg: 'bg-orange-400/20'
              },
              {
                step: '05',
                title: 'Contenido Optimizado para Todos los Motores',
                desc: 'Creamos contenido que responde preguntas (AEO), es citado por IA (GEO), rankea en Google (SEO) y convierte al usuario (SXO), todo en una sola pieza.',
                color: 'text-purple-400',
                border: 'border-purple-400/50',
                bg: 'bg-purple-400/20'
              },
              {
                step: '06',
                title: 'SEM para Resultados Inmediatos',
                desc: 'Mientras el posicionamiento orgánico madura, Google Ads genera conversiones desde el primer día con campañas optimizadas para máximo ROAS.',
                color: 'text-pink-400',
                border: 'border-pink-400/50',
                bg: 'bg-pink-400/20'
              },
              {
                step: '07',
                title: 'Monitoreo y Evolución Continua',
                desc: 'Seguimiento de rankings en Google, menciones en respuestas de IA, tráfico por voz y conversiones. Los algoritmos cambian; nuestra estrategia se adapta.',
                color: 'text-teal-400',
                border: 'border-teal-400/50',
                bg: 'bg-teal-400/20'
              }
            ].map((item) => (
              <div key={item.step} className="bg-card/50 border border-white/5 rounded-xl p-8 flex gap-6">
                <div className="min-w-fit">
                  <div className={`w-12 h-12 rounded-full ${item.bg} border ${item.border} flex items-center justify-center`}>
                    <span className={`font-display text-lg font-bold ${item.color}`}>{item.step}</span>
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
      <section className="py-20 border-b border-white/5 bg-gradient-to-r from-brand-red/5 to-brand-yellow/5">
        <div className="container">
          <h2 className="text-4xl font-bold text-white mb-16 text-center">Resultados Comprobados</h2>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { metric: '+95%', label: 'Aumento en Tráfico Orgánico', desc: 'En 6 meses de SEO', color: 'text-brand-red' },
              { metric: '2.1x', label: 'ROAS en SEM', desc: 'Retorno en publicidad invertida', color: 'text-brand-yellow' },
              { metric: '+68%', label: 'Aumento en Leads', desc: 'Combinando SEO y SEM', color: 'text-brand-cyan' },
              { metric: '3x', label: 'Visibilidad en IA', desc: 'Menciones en respuestas de ChatGPT y Gemini', color: 'text-purple-400' },
            ].map((item) => (
              <div key={item.label} className="bg-card/50 border border-white/5 rounded-xl p-8 text-center">
                <div className={`text-5xl font-bold mb-3 ${item.color}`}>{item.metric}</div>
                <h3 className="text-lg font-bold text-white mb-2">{item.label}</h3>
                <p className="text-white/60 text-sm">{item.desc}</p>
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
              <h3 className="text-2xl font-bold text-white mb-6">Visión de Futuro</h3>
              <ul className="space-y-4">
                {[
                  'Implementamos GEO y AEO desde 2024',
                  'Monitoreamos menciones en ChatGPT y Gemini',
                  'Actualizados con cada cambio de algoritmo',
                  'Estrategia adaptada al mercado colombiano',
                  'Enfoque en todas las disciplinas, no solo SEO'
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-white/80">
                    <CheckCircle className="text-brand-red flex-shrink-0" size={18} />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-gradient-to-br from-brand-yellow/10 to-brand-red/10 rounded-2xl p-8 border border-white/10">
              <h3 className="text-2xl font-bold text-white mb-6">Resultados Medibles</h3>
              <ul className="space-y-4">
                {[
                  'Reportes de visibilidad en Google y en IA',
                  'Tracking de rankings y menciones de marca',
                  'Métricas de conversión, no solo tráfico',
                  'Transparencia total en cada acción',
                  'Optimización continua basada en datos'
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
          <h2 className="text-3xl font-bold text-white mb-4">¿Listo para Dominar Todos los Motores?</h2>
          <p className="text-white/70 text-lg mb-8">
            Solicita una auditoría gratuita de visibilidad total: analizamos tu presencia en Google, en ChatGPT, en Gemini y en los asistentes de voz.
          </p>
          <a href="/#demo" className="inline-block bg-brand-red hover:bg-brand-red/80 text-white font-semibold rounded-full px-8 py-3 transition-colors shadow-lg shadow-brand-red/20">
            Agendar Demo Gratuita
          </a>
        </div>
      </section>

      <DemoRequestSection />
      <Footer />
    </div>
  );
}
