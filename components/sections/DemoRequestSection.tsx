"use client";
import { motion } from "framer-motion";
import { CheckCircle, Clock, Users, TrendingUp } from "lucide-react";
import { useEffect } from "react";

const benefits = [
  "Análisis personalizado de tu estrategia actual",
  "Propuesta de crecimiento con proyecciones reales",
  "Sesión de 30 minutos con nuestro especialista",
];

const stats = [
  { icon: Clock, value: "30 min", label: "Sesión gratuita" },
  { icon: Users, value: "100+", label: "Empresas asesoradas" },
  { icon: TrendingUp, value: "+340%", label: "ROI promedio" },
];

declare global {
  interface Window {
    Cal?: (...args: unknown[]) => void;
  }
}

export default function DemoRequestSection() {
  useEffect(() => {
    // Load Cal.com embed script only once
    if (document.getElementById("cal-embed-script")) return;

    const script = document.createElement("script");
    script.id = "cal-embed-script";
    script.type = "text/javascript";
    script.innerHTML = `
      (function (C, A, L) {
        let p = function (a, ar) { a.q.push(ar); };
        let d = C.document;
        C.Cal = C.Cal || function () {
          let cal = C.Cal;
          let ar = arguments;
          if (!cal.loaded) {
            cal.ns = {};
            cal.q = cal.q || [];
            d.head.appendChild(d.createElement("script")).src = A;
            cal.loaded = true;
          }
          if (ar[0] === L) {
            const api = function () { p(api, arguments); };
            const namespace = ar[1];
            api.q = api.q || [];
            if (typeof namespace === "string") {
              cal.ns[namespace] = cal.ns[namespace] || api;
              p(cal.ns[namespace], ar);
              p(cal, ["initNamespace", namespace]);
            } else p(cal, ar);
            return;
          }
          p(cal, ar);
        };
      })(window, "https://app.cal.com/embed/embed.js", "init");

      Cal("init", "30min", { origin: "https://app.cal.com" });

      Cal.ns["30min"]("inline", {
        elementOrSelector: "#my-cal-inline-30min",
        config: { layout: "month_view", useSlotsViewOnSmallScreen: "true" },
        calLink: "elefante/30min",
      });

      Cal.ns["30min"]("ui", {
        hideEventTypeDetails: false,
        layout: "month_view",
        cssVarsPerTheme: {
          light: { "cal-brand": "#FF3B30" },
          dark: { "cal-brand": "#FF3B30" },
        },
      });
    `;
    document.head.appendChild(script);
  }, []);

  return (
    <section id="demo" className="py-24 relative overflow-hidden">
      {/* Background gradients */}
      <div className="absolute inset-0 bg-gradient-to-r from-brand-cyan/5 via-transparent to-brand-red/5" />
      <div className="absolute -top-40 -right-40 w-96 h-96 bg-brand-red/5 rounded-full blur-3xl" />
      <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-brand-cyan/5 rounded-full blur-3xl" />

      <div className="container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

          {/* Left: Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="space-y-8 lg:sticky lg:top-8"
          >
            {/* Label */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-1 bg-brand-red rounded-full" />
                <span className="text-brand-red text-sm font-semibold tracking-widest uppercase">
                  Próximo Paso
                </span>
              </div>
              <h2 className="font-display text-5xl md:text-6xl tracking-wide text-white mb-4">
                Agenda tu Demo Gratuita
              </h2>
              <p className="text-white/70 text-lg leading-relaxed">
                Elige el día y la hora que mejor te convenga. En 30 minutos te mostramos cómo podemos acelerar el crecimiento de tu negocio con una estrategia diseñada específicamente para ti.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4">
              {stats.map(({ icon: Icon, value, label }) => (
                <div
                  key={label}
                  className="bg-white/5 border border-white/10 rounded-xl p-4 text-center"
                >
                  <Icon size={20} className="text-brand-red mx-auto mb-2" />
                  <div className="text-xl font-bold text-white">{value}</div>
                  <div className="text-white/50 text-xs mt-1">{label}</div>
                </div>
              ))}
            </div>

            {/* Benefits */}
            <div className="space-y-4">
              {benefits.map((benefit) => (
                <motion.div
                  key={benefit}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className="flex items-center gap-3"
                >
                  <div className="w-6 h-6 rounded-full bg-brand-red/20 flex items-center justify-center flex-shrink-0">
                    <CheckCircle size={14} className="text-brand-red" />
                  </div>
                  <span className="text-white/80 text-base">{benefit}</span>
                </motion.div>
              ))}
            </div>

            {/* Trust note */}
            <p className="text-white/30 text-sm border-t border-white/5 pt-6">
              Sin compromisos. Recibirás una confirmación inmediata por email con el enlace de la reunión.
            </p>
          </motion.div>

          {/* Right: Cal.com Embed */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="rounded-2xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur-sm shadow-2xl shadow-brand-red/5">
              {/* Cal embed header */}
              <div className="px-6 py-4 border-b border-white/10 flex items-center gap-3">
                <div className="w-3 h-3 rounded-full bg-brand-red" />
                <div className="w-3 h-3 rounded-full bg-brand-yellow" />
                <div className="w-3 h-3 rounded-full bg-green-500" />
                <span className="text-white/40 text-sm ml-2">Selecciona fecha y hora</span>
              </div>
              {/* Cal inline embed */}
              <div
                id="my-cal-inline-30min"
                style={{ width: "100%", height: "600px", overflow: "scroll" }}
              />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
