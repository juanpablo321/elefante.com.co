"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { Send, Mail, Phone, MapPin, CheckCircle, Loader2 } from "lucide-react";
import { contactSchema, type ContactFormData } from "@/lib/schemas/contact";
import { ZodError } from "zod";

const API_URL = "/api/send";

const initialFormData: ContactFormData = {
  name: "",
  email: "",
  company: "",
  phone: "",
  service: "",
  message: "",
};

const serviceOptions: { label: string; value: ContactFormData["service"] }[] = [
  { label: "Growth Marketing", value: "growth-marketing" },
  { label: "Performance Ads", value: "performance-ads" },
  { label: "Social Media", value: "social-media" },
  { label: "SEO & SEM", value: "seo-sem" },
  { label: "Analytics & Data", value: "analytics-data" },
  { label: "AI Agents", value: "ai-agents" },
  { label: "Otro", value: "otro" },
];

const contactInfo = [
  { icon: Mail, label: "Email", value: "hola@elefante.com.co", color: "brand-red" },
  { icon: Phone, label: "Teléfono", value: "+57 300 243 2824", color: "brand-yellow" },
  { icon: MapPin, label: "Ubicación", value: "Bogotá, Colombia", color: "brand-cyan" },
];

export default function ContactSection() {
  const [formData, setFormData] = useState<ContactFormData>(initialFormData);
  // Errores tipados por campo del esquema Zod
  const [errors, setErrors] = useState<Partial<Record<keyof ContactFormData, string>>>({});
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [serverError, setServerError] = useState<string | null>(null);

  /**
   * Valida el formulario usando el esquema Zod compartido.
   * Devuelve true si es válido, false si hay errores.
   */
  const validate = (): boolean => {
    const result = contactSchema.safeParse(formData);
    if (result.success) {
      setErrors({});
      return true;
    }
    const fieldErrors: Partial<Record<keyof ContactFormData, string>> = {};
    result.error.issues.forEach((err) => {
      const field = err.path[0] as keyof ContactFormData;
      if (field && !fieldErrors[field]) {
        fieldErrors[field] = err.message;
      }
    });
    setErrors(fieldErrors);
    return false;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setServerError(null);
    if (!validate()) return;
    setSubmitting(true);
    try {
      const res = await fetch(API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      if (res.ok) {
        setSubmitted(true);
        setFormData(initialFormData);
      } else {
        const data = await res.json();
        setServerError(data.error || "Error al enviar el mensaje. Intenta de nuevo.");
      }
    } catch {
      setServerError("Error de conexión. Verifica tu internet e intenta de nuevo.");
    } finally {
      setSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Limpiar el error del campo al modificarlo
    if (errors[name as keyof ContactFormData]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const inputClasses =
    "w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder:text-white/30 focus:outline-none focus:border-brand-red/50 focus:ring-1 focus:ring-brand-red/30 transition-colors";

  const inputErrorClasses =
    "w-full bg-white/5 border border-brand-red/50 rounded-lg px-4 py-3 text-white placeholder:text-white/30 focus:outline-none focus:border-brand-red focus:ring-1 focus:ring-brand-red/50 transition-colors";

  return (
    <section id="contacto" className="py-24 relative">
      <div className="container">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="w-8 h-1 bg-brand-red rounded-full" />
            <span className="text-brand-red text-sm font-semibold tracking-widest uppercase">Contacto</span>
            <div className="w-8 h-1 bg-brand-red rounded-full" />
          </div>
          <h2 className="font-display text-5xl md:text-6xl lg:text-7xl tracking-wide gradient-text">
            HABLEMOS
          </h2>
          <p className="text-white/60 mt-4 max-w-2xl mx-auto text-lg">
            Cuéntanos sobre tu proyecto y descubre cómo podemos ayudarte a crecer
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          {/* Left: Contact info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2 space-y-6"
          >
            {contactInfo.map((info) => {
              const Icon = info.icon;
              return (
                <div
                  key={info.label}
                  className="flex items-start gap-4 p-4 bg-card rounded-xl border border-white/5"
                >
                  <div className={`w-12 h-12 rounded-lg bg-${info.color}/10 flex items-center justify-center shrink-0`}>
                    <Icon size={22} className={`text-${info.color}`} />
                  </div>
                  <div>
                    <div className="text-sm text-white/50 mb-1">{info.label}</div>
                    <div className="text-white font-medium">{info.value}</div>
                  </div>
                </div>
              );
            })}

            {/* CTA box */}
            <div className="bg-gradient-to-br from-brand-red/20 to-brand-red/5 border border-brand-red/20 rounded-xl p-6 mt-8">
              <h3 className="font-display text-2xl text-white mb-2">AGENDA UNA LLAMADA</h3>
              <p className="text-white/60 text-sm mb-4">
                ¿Prefieres hablar directamente? Agenda una videollamada de 30 minutos con nuestro equipo.
              </p>
              <a
                href="/#demo"
                className="inline-block bg-brand-red hover:bg-brand-red/80 text-white font-semibold rounded-full px-6 py-2 text-sm transition-colors"
              >
                Agendar Ahora
              </a>
            </div>
          </motion.div>

          {/* Right: Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-3"
          >
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-card border border-white/5 rounded-2xl p-12 text-center"
              >
                <CheckCircle size={64} className="text-brand-cyan mx-auto mb-6" />
                <h3 className="font-display text-4xl text-white mb-3">MENSAJE ENVIADO</h3>
                <p className="text-white/60 mb-8">
                  Gracias por contactarnos. Te responderemos en menos de 24 horas.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="bg-brand-red hover:bg-brand-red/80 text-white font-semibold rounded-full px-8 py-3 transition-colors"
                >
                  Enviar otro mensaje
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="bg-card border border-white/5 rounded-2xl p-8 space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <input
                      type="text"
                      name="name"
                      placeholder="Nombre *"
                      value={formData.name}
                      onChange={handleChange}
                      className={errors.name ? inputErrorClasses : inputClasses}
                    />
                    {errors.name && <p className="text-brand-red text-xs mt-1">{errors.name}</p>}
                  </div>
                  <div>
                    <input
                      type="email"
                      name="email"
                      placeholder="Email *"
                      value={formData.email}
                      onChange={handleChange}
                      className={errors.email ? inputErrorClasses : inputClasses}
                    />
                    {errors.email && <p className="text-brand-red text-xs mt-1">{errors.email}</p>}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <input
                    type="text"
                    name="company"
                    placeholder="Empresa"
                    value={formData.company}
                    onChange={handleChange}
                    className={inputClasses}
                  />
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Teléfono"
                    value={formData.phone}
                    onChange={handleChange}
                    className={inputClasses}
                  />
                </div>

                <select
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  className={`${inputClasses} ${!formData.service ? "text-white/30" : ""}`}
                >
                  <option value="" disabled>
                    Selecciona un servicio
                  </option>
                  {serviceOptions.map((opt) => (
                    <option key={opt.value} value={opt.value} className="bg-brand-dark text-white">
                      {opt.label}
                    </option>
                  ))}
                </select>

                <div>
                  <textarea
                    name="message"
                    placeholder="Mensaje *"
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    className={`${errors.message ? inputErrorClasses : inputClasses} resize-none`}
                  />
                  {errors.message && <p className="text-brand-red text-xs mt-1">{errors.message}</p>}
                </div>

                {/* Error del servidor */}
                {serverError && (
                  <div className="bg-brand-red/10 border border-brand-red/30 rounded-lg px-4 py-3 text-brand-red text-sm">
                    {serverError}
                  </div>
                )}

                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full bg-brand-red hover:bg-brand-red/80 disabled:opacity-50 text-white font-semibold rounded-full py-3 transition-all duration-300 flex items-center justify-center gap-2"
                >
                  {submitting ? (
                    <>
                      <Loader2 size={18} className="animate-spin" />
                      Enviando...
                    </>
                  ) : (
                    <>
                      Enviar Mensaje
                      <Send size={18} />
                    </>
                  )}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
