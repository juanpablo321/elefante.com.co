import { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

import Breadcrumb from '@/components/Breadcrumb';
import ContactSection from '@/components/sections/ContactSection';
import { ArrowRight, Zap, Target, TrendingUp } from 'lucide-react';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Contacto | Elefante Growth Marketing',
  description: 'Ponte en contacto con nuestro equipo de expertos en growth marketing. Estamos listos para ayudarte a escalar tu negocio. Consultoría gratuita.',
  keywords: 'contacto, agencia marketing, growth marketing contacto, consultoría gratis',
  openGraph: {
    title: 'Contacto | Elefante Growth Marketing',
    description: 'Hablemos sobre cómo podemos ayudarte a crecer',
    type: 'website',
  },
};

export default function ContactoPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <Breadcrumb items={[{ label: 'Contacto', active: true }]} />

      {/* Formulario de Contacto - PRINCIPAL */}
      <section id="contacto" className="py-4 border-b border-white/5">
        <ContactSection />
      </section>

      {/* Sección de Invitación - COMPLEMENTARIA */}
      <section className="py-16 border-b border-white/5">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div>
                <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
                  ¿Por Qué Contactarnos?
                </h2>
                <p className="text-white/70 text-lg leading-relaxed">
                  En Elefante no somos una agencia más. Somos tu socio estratégico en el crecimiento. Cuando contactas con nosotros, obtienes acceso a un equipo de expertos que ha ayudado a más de 150 empresas a transformar sus resultados.
                </p>
              </div>

              <div className="space-y-4">
                {[
                  {
                    icon: Zap,
                    title: 'Respuesta Rápida',
                    desc: 'Te contactaremos en menos de 24 horas'
                  },
                  {
                    icon: Target,
                    title: 'Análisis Personalizado',
                    desc: 'Evaluamos tu negocio sin costo alguno'
                  },
                  {
                    icon: TrendingUp,
                    title: 'Estrategia Comprobada',
                    desc: 'Métodos que han generado +87% en crecimiento promedio'
                  }
                ].map((item) => (
                  <div key={item.title} className="flex gap-4">
                    <div className="flex-shrink-0">
                      <item.icon className="text-brand-cyan" size={24} />
                    </div>
                    <div>
                      <h3 className="text-white font-semibold mb-1">{item.title}</h3>
                      <p className="text-white/60 text-sm">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative h-96 rounded-2xl overflow-hidden border border-white/10">
              <Image
                src="/images/success-stories.jpg"
                alt="Equipo Elefante"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
            </div>
          </div>
        </div>
      </section>

      {/* Sección de Proceso Rápido - COMPLEMENTARIA */}
      <section className="py-16 border-b border-white/5 bg-brand-dark-lighter/50">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-12 text-center">
              Cómo Funciona el Proceso
            </h2>
            <div className="space-y-8">
              {[
                {
                  step: '01',
                  title: 'Completa el Formulario',
                  desc: 'Cuéntanos sobre tu negocio, objetivos y desafíos actuales. Nos toma solo 5 minutos.'
                },
                {
                  step: '02',
                  title: 'Análisis Inicial',
                  desc: 'Nuestro equipo revisa tu información y prepara un análisis preliminar de oportunidades.'
                },
                {
                  step: '03',
                  title: 'Llamada de Consultoría',
                  desc: 'Nos reunimos contigo (por videollamada) para discutir hallazgos y posibilidades de crecimiento.'
                },
                {
                  step: '04',
                  title: 'Propuesta Personalizada',
                  desc: 'Te presentamos un plan estratégico adaptado a tu negocio, sin obligación de contratar.'
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

      <Footer />
    </div>
  );
}
