/**
 * JSON-LD Structured Data: Organization
 * Mejora los rich snippets en Google y la comprensión por parte de agentes de IA.
 * Se incluye en el layout raíz para que aplique a todas las páginas.
 */
export default function JsonLdOrganization() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "MarketingAgency",
    "@id": "https://elefante.com.co/#organization",
    name: "Elefante Growth Marketing",
    alternateName: "Elefante",
    url: "https://elefante.com.co",
    logo: {
      "@type": "ImageObject",
      url: "https://elefante.com.co/new_logo.png",
      width: 200,
      height: 60,
    },
    image: "https://elefante.com.co/new_logo.png",
    description:
      "Agencia de Growth Marketing en Colombia especializada en estrategias de crecimiento digital, Performance Ads, SEO & SEM, Social Media, Analytics & Data y AI Agents.",
    email: "hola@elefante.com.co",
    address: {
      "@type": "PostalAddress",
      addressCountry: "CO",
      addressRegion: "Bogotá D.C.",
    },
    areaServed: {
      "@type": "Country",
      name: "Colombia",
    },
    foundingDate: "2020",
    numberOfEmployees: {
      "@type": "QuantitativeValue",
      minValue: 5,
      maxValue: 20,
    },
    knowsAbout: [
      "Growth Marketing",
      "Performance Advertising",
      "Social Media Marketing",
      "SEO",
      "SEM",
      "Analytics",
      "AI Agents",
      "Marketing Digital",
    ],
    sameAs: [
      "https://www.instagram.com/elefante_co",
      "https://www.linkedin.com/company/elefante-co",
    ],
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "customer service",
      email: "hola@elefante.com.co",
      availableLanguage: ["Spanish"],
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Servicios de Growth Marketing",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Growth Marketing",
            url: "https://elefante.com.co/servicios/growth-marketing",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Performance Ads",
            url: "https://elefante.com.co/servicios/performance-ads",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Social Media Marketing",
            url: "https://elefante.com.co/servicios/social-media",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "SEO & SEM",
            url: "https://elefante.com.co/servicios/seo-sem",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Analytics & Data",
            url: "https://elefante.com.co/servicios/analytics-data",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "AI Agents",
            url: "https://elefante.com.co/servicios/ai-agents",
          },
        },
      ],
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
