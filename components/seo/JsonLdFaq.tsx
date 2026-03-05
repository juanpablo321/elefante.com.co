/**
 * JSON-LD Structured Data: FAQPage
 * Habilita los rich snippets de preguntas frecuentes en Google.
 * Se incluye en la página /sobre-nosotros/faq.
 */

interface FaqItem {
  question: string;
  answer: string;
}

interface JsonLdFaqProps {
  items: FaqItem[];
}

export default function JsonLdFaq({ items }: JsonLdFaqProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
