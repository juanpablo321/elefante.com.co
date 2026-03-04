import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HeroSection from "@/components/sections/HeroSection";
import GrowthStrategiesSection from "@/components/sections/GrowthStrategiesSection";
import ProcessSection from "@/components/sections/ProcessSection";
import BenefitsSection from "@/components/sections/BenefitsSection";
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
      <Navbar />
      <main>
        <HeroSection />
        <GrowthStrategiesSection />
        <ProcessSection />
        <BenefitsSection />
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
