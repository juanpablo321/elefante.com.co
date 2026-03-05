import { MetadataRoute } from "next";

const BASE_URL = "https://elefante.com.co";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return [
    // ── Página Principal ──────────────────────────────────────────────────
    {
      url: BASE_URL,
      lastModified,
      changeFrequency: "weekly",
      priority: 1.0,
    },

    // ── Página de Contacto ────────────────────────────────────────────────
    {
      url: `${BASE_URL}/contacto`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.9,
    },

    // ── Páginas de Servicios (alta prioridad) ─────────────────────────────
    {
      url: `${BASE_URL}/servicios/growth-marketing`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/servicios/performance-ads`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/servicios/social-media`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/servicios/seo-sem`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/servicios/analytics-data`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/servicios/ai-agents`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
    },

    // ── Páginas Sobre Nosotros ────────────────────────────────────────────
    {
      url: `${BASE_URL}/sobre-nosotros/metodologia`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/sobre-nosotros/quienes-somos`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/sobre-nosotros/faq`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.6,
    },
  ];
}
