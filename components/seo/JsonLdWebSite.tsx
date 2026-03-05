/**
 * JSON-LD Structured Data: WebSite
 * Habilita el Sitelinks Searchbox en Google y mejora la comprensión del sitio.
 * Se incluye únicamente en la página principal (/).
 */
export default function JsonLdWebSite() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": "https://elefante.com.co/#website",
    name: "Elefante Growth Marketing",
    url: "https://elefante.com.co",
    description:
      "Agencia de Growth Marketing en Colombia. Estrategias de crecimiento digital, Performance Ads, SEO, Social Media y AI Agents.",
    publisher: {
      "@id": "https://elefante.com.co/#organization",
    },
    inLanguage: "es-CO",
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: "https://elefante.com.co/?q={search_term_string}",
      },
      "query-input": "required name=search_term_string",
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
