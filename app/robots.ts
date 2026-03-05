import { MetadataRoute } from "next";

const BASE_URL = "https://elefante.com.co";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      // ── Motores de búsqueda principales: acceso total ─────────────────
      {
        userAgent: "Googlebot",
        allow: "/",
        disallow: ["/api/", "/_next/", "/admin/", "/scripts/"],
      },
      {
        userAgent: "Bingbot",
        allow: "/",
        disallow: ["/api/", "/_next/", "/admin/", "/scripts/"],
      },
      {
        userAgent: "Slurp", // Yahoo
        allow: "/",
        disallow: ["/api/", "/_next/", "/admin/", "/scripts/"],
      },
      {
        userAgent: "DuckDuckBot",
        allow: "/",
        disallow: ["/api/", "/_next/", "/admin/", "/scripts/"],
      },

      // ── Agentes de IA: permitir indexación, restringir entrenamiento ───
      // Google AI (Gemini, Search Generative Experience)
      {
        userAgent: "Google-Extended",
        allow: "/",
        disallow: ["/api/", "/_next/", "/admin/"],
      },
      // OpenAI / ChatGPT
      {
        userAgent: "GPTBot",
        allow: "/",
        disallow: ["/api/", "/_next/", "/admin/"],
      },
      // Anthropic / Claude
      {
        userAgent: "ClaudeBot",
        allow: "/",
        disallow: ["/api/", "/_next/", "/admin/"],
      },
      // Common Crawl (base de datos de entrenamiento de múltiples LLMs)
      {
        userAgent: "CCBot",
        disallow: "/",
      },
      // Meta AI
      {
        userAgent: "FacebookBot",
        allow: "/",
        disallow: ["/api/", "/_next/", "/admin/"],
      },
      // Apple
      {
        userAgent: "Applebot",
        allow: "/",
        disallow: ["/api/", "/_next/", "/admin/"],
      },
      // Perplexity AI
      {
        userAgent: "PerplexityBot",
        allow: "/",
        disallow: ["/api/", "/_next/", "/admin/"],
      },
      // Amazon Alexa / Kendra
      {
        userAgent: "ia_archiver",
        disallow: "/",
      },
      // Cohere AI
      {
        userAgent: "cohere-ai",
        disallow: "/",
      },

      // ── Regla general para todos los demás bots ───────────────────────
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/", "/_next/", "/admin/", "/scripts/"],
      },
    ],
    sitemap: `${BASE_URL}/sitemap.xml`,
    host: BASE_URL,
  };
}
