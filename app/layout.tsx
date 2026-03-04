import type { Metadata, Viewport } from "next";
import { Bebas_Neue, Space_Grotesk } from "next/font/google";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { GoogleTagManager } from "@next/third-parties/google";
import "./globals.css";

const bebasNeue = Bebas_Neue({ weight: "400", subsets: ["latin"], variable: "--font-display" });
const spaceGrotesk = Space_Grotesk({ subsets: ["latin"], variable: "--font-sans" });

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  themeColor: "#1f2937",
};

export const metadata: Metadata = {
  title: "Elefante - Growth Marketing Agency | Estrategias de Crecimiento en Colombia",
  description: "Agencia de Growth Marketing especializada en estrategias de crecimiento, publicidad digital y marketing de rendimiento para empresas colombianas. Resultados medibles y ROI comprobado.",
  keywords: "growth marketing, agencia marketing digital, publicidad en línea, SEO, SEM, marketing en Colombia",
  openGraph: {
    title: "Elefante - Growth Marketing Agency",
    description: "Transformamos marcas con estrategias de crecimiento basadas en datos. Creatividad, tecnología y resultados medibles.",
    type: "website",
    locale: "es_CO",
    images: [
      {
        url: "/images/hero-growth.jpg",
        width: 1200,
        height: 630,
        alt: "Elefante Growth Marketing",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Elefante - Growth Marketing Agency",
    description: "Estrategias de crecimiento para tu marca en Colombia",
    images: ["/images/hero-growth.jpg"],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className={`${bebasNeue.variable} ${spaceGrotesk.variable}`}>
      <body className="bg-background text-foreground font-sans">
        {children}
        <SpeedInsights />
        <GoogleTagManager gtmId="GTM-WT8HF775" />
      </body>
    </html>
  );
}
