/**
 * JSON-LD Structured Data: Service
 * Se incluye en cada página de servicio para mejorar los rich snippets.
 */

interface JsonLdServiceProps {
  name: string;
  description: string;
  url: string;
  serviceType: string;
}

export default function JsonLdService({
  name,
  description,
  url,
  serviceType,
}: JsonLdServiceProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${url}#service`,
    name,
    description,
    url,
    serviceType,
    provider: {
      "@type": "MarketingAgency",
      "@id": "https://elefante.com.co/#organization",
      name: "Elefante Growth Marketing",
      url: "https://elefante.com.co",
    },
    areaServed: {
      "@type": "Country",
      name: "Colombia",
    },
    availableLanguage: "Spanish",
    offers: {
      "@type": "Offer",
      url,
      priceCurrency: "COP",
      availability: "https://schema.org/InStock",
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
