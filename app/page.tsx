import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import JsonLdWebSite from "@/components/seo/JsonLdWebSite";
import HeroSection from "@/components/sections/HeroSection";
import ServicesSection from "@/components/sections/ServicesSection";
import CaseStudiesSection from "@/components/sections/CaseStudiesSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import FAQSection from "@/components/sections/FAQSection";
import DemoRequestSection from "@/components/sections/DemoRequestSection";
import AboutSection from "@/components/sections/AboutSection";
import PortfolioSection from "@/components/sections/PortfolioSection";
import ContactSection from "@/components/sections/ContactSection";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <JsonLdWebSite />
      <Navbar />
      <main>
        <HeroSection />
        <ServicesSection />
        <CaseStudiesSection />
        <TestimonialsSection />
        <FAQSection />
        <DemoRequestSection />
        <AboutSection />
        <PortfolioSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
