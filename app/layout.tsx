import type { Metadata, Viewport } from "next";
import { Bebas_Neue, Space_Grotesk } from "next/font/google";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { GoogleTagManager } from "@next/third-parties/google";
import JsonLdOrganization from "@/components/seo/JsonLdOrganization";
import WhatsAppButton from "@/components/ui/WhatsAppButton";
import "./globals.css";

const bebasNeue = Bebas_Neue({ weight: "400", subsets: ["latin"], variable: "--font-display" });
const spaceGrotesk = Space_Grotesk({ subsets: ["latin"], variable: "--font-sans" });

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#FF3333",
};

export const metadata: Metadata = {
  // metadataBase es requerido para resolver URLs absolutas en OG/Twitter y canonical
  metadataBase: new URL("https://elefante.com.co"),

  title: {
    default: "Elefante | Agencia de Growth Marketing en Colombia",
    template: "%s | Elefante Growth Marketing",
  },
  description:
    "Agencia de Growth Marketing en Colombia especializada en estrategias de crecimiento, Performance Ads, SEO, Social Media y AI Agents. Resultados medibles y ROI comprobado.",
  keywords: [
    "growth marketing Colombia",
    "agencia marketing digital Bogotá",
    "performance ads",
    "SEO Colombia",
    "SEM Google Ads",
    "social media marketing",
    "analytics data marketing",
    "AI agents marketing",
    "agencia crecimiento digital",
    "marketing basado en datos",
  ],
  authors: [{ name: "Elefante Growth Marketing", url: "https://elefante.com.co" }],
  creator: "Elefante Growth Marketing",
  publisher: "Elefante Growth Marketing",
  category: "Marketing Agency",

  // Canonical y robots para la raíz
  alternates: {
    canonical: "/",
    languages: {
      "es-CO": "/",
    },
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  openGraph: {
    title: "Elefante | Agencia de Growth Marketing en Colombia",
    description:
      "Transformamos marcas colombianas con estrategias de crecimiento basadas en datos. Creatividad, tecnología y resultados medibles.",
    type: "website",
    url: "https://elefante.com.co",
    siteName: "Elefante Growth Marketing",
    locale: "es_CO",
    images: [
      {
        url: "/images/hero-growth.jpg",
        width: 1200,
        height: 630,
        alt: "Elefante Growth Marketing Agency",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@elefante_co",
    creator: "@elefante_co",
    title: "Elefante | Agencia de Growth Marketing en Colombia",
    description: "Estrategias de crecimiento para tu marca en Colombia. Datos, creatividad y resultados.",
    images: ["/images/hero-growth.jpg"],
  },

  verification: {
    google: "google-site-verification-placeholder",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es-CO" className={`${bebasNeue.variable} ${spaceGrotesk.variable}`}>
      <body className="bg-background text-foreground font-sans">
        <JsonLdOrganization />
        {children}
        <WhatsAppButton />
        <SpeedInsights />
        <GoogleTagManager gtmId="GTM-WT8HF775" />
      </body>
    </html>
  );
}
