import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { HeroSection } from "@/components/home/HeroSection";
import { TrustBar } from "@/components/home/TrustBar";
import { ValuePropsSection } from "@/components/home/ValuePropsSection";
import { HowItWorksSection } from "@/components/home/HowItWorksSection";
import { DeliverablesSection } from "@/components/home/DeliverablesSection";
import { BeforeAfterSection } from "@/components/home/BeforeAfterSection";
import { UseCasesSection } from "@/components/home/UseCasesSection";
import { TestimonialsSection } from "@/components/home/TestimonialsSection";
import { CTASection } from "@/components/home/CTASection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <TrustBar />
        <ValuePropsSection />
        <HowItWorksSection />
        <DeliverablesSection />
        <BeforeAfterSection />
        <UseCasesSection />
        <TestimonialsSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
