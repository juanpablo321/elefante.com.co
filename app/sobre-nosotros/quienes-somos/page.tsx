import type { Metadata } from "next";
import QuienesSomosContent from "./QuienesSomosContent";

export const metadata: Metadata = {
  title: "Quiénes Somos | Elefante Growth Marketing",
  description:
    "Conoce al equipo de Elefante, la agencia de growth marketing en Colombia. Nuestra misión, visión, valores y el equipo detrás de tu crecimiento.",
  keywords: "quiénes somos, equipo elefante, agencia marketing colombia, sobre nosotros",
  alternates: {
    canonical: "/sobre-nosotros/quienes-somos",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  openGraph: {
    title: "Quiénes Somos | Elefante Growth Marketing",
    description: "El equipo apasionado detrás de tu crecimiento digital en Colombia.",
    url: "https://elefante.com.co/sobre-nosotros/quienes-somos",
    type: "website",
  },
};

export default function QuienesSomosPage() {
  return <QuienesSomosContent />;
}
