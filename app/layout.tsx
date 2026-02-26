import type { Metadata } from "next";
import { Bebas_Neue, Space_Grotesk } from "next/font/google";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";

const bebasNeue = Bebas_Neue({ weight: "400", subsets: ["latin"], variable: "--font-display" });
const spaceGrotesk = Space_Grotesk({ subsets: ["latin"], variable: "--font-sans" });

export const metadata: Metadata = {
  title: "Elefante - Growth Marketing Agency",
  description: "Agencia de Growth Marketing en Colombia. Estrategia, creatividad y datos para hacer crecer tu marca.",
  openGraph: {
    title: "Elefante - Growth Marketing Agency",
    description: "Agencia de Growth Marketing en Colombia.",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className={`${bebasNeue.variable} ${spaceGrotesk.variable}`}>
      <body className="bg-background text-foreground font-sans">
        {children}
        <SpeedInsights />
      </body>
    </html>
  );
}
