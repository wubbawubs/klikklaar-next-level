import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { HeroSection } from "@/components/home/HeroSection";
import { TrustBar } from "@/components/home/TrustBar";
import { PainSection } from "@/components/home/PainSection";
import { USPSection } from "@/components/home/USPSection";
import { HowItWorksSection } from "@/components/home/HowItWorksSection";
import { DeliverablesSection } from "@/components/home/DeliverablesSection";
import { BeforeAfterSection } from "@/components/home/BeforeAfterSection";
import { UseCasesSection } from "@/components/home/UseCasesSection";
import { TestimonialsSection } from "@/components/home/TestimonialsSection";
import { FAQSection } from "@/components/home/FAQSection";
import { CTASection } from "@/components/home/CTASection";
import { SEOHead } from "@/components/SEOHead";
import { StructuredData, klikklaarBusinessSchema } from "@/components/StructuredData";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEOHead 
        title="Meer Klanten via Google & AI | Automatische SEO | €99/mnd | KlikKlaarSEO"
        description="Ondernemer? Word gevonden in Google én AI-zoekmachines. Automatische SEO zonder gedoe. Geen contract, altijd opzegbaar. 100+ tevreden ondernemers."
        canonical="https://klikklaar.nl"
      />
      <StructuredData schema={klikklaarBusinessSchema} />
      <Header />
      <main>
        {/* 1. Hero - nieuwe wereld beloven */}
        <HeroSection />
        
        {/* Trust strip - social proof direct */}
        <TrustBar />
        
        {/* 2. Pijn - herkenning creëren */}
        <PainSection />
        
        {/* 3. USP - waarom KlikKlaarSEO uniek is */}
        <USPSection />
        
        {/* 4. Flow - hoe het werkt */}
        <HowItWorksSection />
        
        {/* 5. Deliverables - wat ze krijgen */}
        <DeliverablesSection />
        
        {/* 6. Before/After - bewijs */}
        <BeforeAfterSection />
        
        {/* 7. Use cases - branches */}
        <UseCasesSection />
        
        {/* 8. Testimonials - vertrouwen */}
        <TestimonialsSection />
        
        {/* 9. FAQ - veelgestelde vragen */}
        <FAQSection />
        
        {/* 10. Massive CTA */}
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
