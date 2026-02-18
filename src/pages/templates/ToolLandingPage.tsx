import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { CTASection } from "@/components/home/CTASection";
import { SEOHead } from "@/components/SEOHead";
import { StructuredData } from "@/components/StructuredData";
import { GradientButton } from "@/components/ui/GradientButton";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Link } from "react-router-dom";
import { Phone, Check, ChevronRight } from "lucide-react";
import { useState, useEffect } from "react";
import { ToolData, tools, toolCategories } from "@/data/tools";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import * as LucideIcons from "lucide-react";

interface ToolLandingPageProps {
  tool: ToolData;
}

function ToolHero({ tool }: { tool: ToolData }) {
  const [isVisible, setIsVisible] = useState(false);
  const IconComponent = LucideIcons[tool.icon as keyof typeof LucideIcons] as React.ElementType;

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 50);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative pt-24 lg:pt-40 pb-12 lg:pb-24 overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-0 w-1/2 h-full bg-gradient-to-br from-kk-orange/[0.03] via-transparent to-transparent" />
        <div className="absolute bottom-0 right-0 w-1/3 h-1/2 bg-gradient-to-tl from-kk-violet/[0.03] via-transparent to-transparent" />
      </div>
      <div className="container px-4 sm:px-6">
        <div className="max-w-4xl mx-auto text-center">
          <nav className="flex items-center justify-center gap-2 text-sm text-muted-foreground mb-6" style={{ opacity: isVisible ? 1 : 0, transform: isVisible ? 'translateY(0)' : 'translateY(12px)', transition: 'opacity 0.5s ease-out, transform 0.5s ease-out' }}>
            <Link to="/" className="hover:text-foreground transition-colors">Home</Link>
            <ChevronRight className="w-4 h-4" />
            <Link to="/tools" className="hover:text-foreground transition-colors">SEO Tools</Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-foreground">{tool.name}</span>
          </nav>

          <div className="inline-flex items-center gap-2 px-4 py-2 bg-kk-orange/10 rounded-full mb-6" style={{ opacity: isVisible ? 1 : 0, transform: isVisible ? 'translateY(0)' : 'translateY(12px)', transition: 'opacity 0.5s ease-out 0.1s, transform 0.5s ease-out 0.1s' }}>
            {IconComponent && <IconComponent className="w-5 h-5 text-kk-orange" />}
            <span className="text-sm font-medium text-kk-orange">Gratis tool</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-display-xl font-bold text-foreground mb-6" style={{ opacity: isVisible ? 1 : 0, transform: isVisible ? 'translateY(0)' : 'translateY(16px)', transition: 'opacity 0.6s ease-out 0.15s, transform 0.6s ease-out 0.15s' }}>
            {tool.headline}
          </h1>

          <p className="text-base sm:text-lg lg:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto" style={{ opacity: isVisible ? 1 : 0, transform: isVisible ? 'translateY(0)' : 'translateY(16px)', transition: 'opacity 0.6s ease-out 0.2s, transform 0.6s ease-out 0.2s' }}>
            {tool.subheadline}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center" style={{ opacity: isVisible ? 1 : 0, transform: isVisible ? 'translateY(0)' : 'translateY(16px)', transition: 'opacity 0.6s ease-out 0.25s, transform 0.6s ease-out 0.25s' }}>
            <GradientButton size="lg" asChild>
              <Link to="/contact">
                <Phone className="w-4 h-4" />
                Laat KlikKlaarSEO het doen
              </Link>
            </GradientButton>
            <GradientButton variant="outline" size="lg" asChild>
              <Link to="/prijzen">Bekijk prijzen</Link>
            </GradientButton>
          </div>
        </div>
      </div>
    </section>
  );
}

function ToolWhatItDoes({ tool }: { tool: ToolData }) {
  const { ref, isVisible } = useScrollReveal();
  const IconComponent = LucideIcons[tool.icon as keyof typeof LucideIcons] as React.ElementType;

  return (
    <section ref={ref} className="py-16 lg:py-24 haze-gradient-warm">
      <div className="container px-4 sm:px-6">
        <div className="max-w-3xl mx-auto" style={{ opacity: isVisible ? 1 : 0, transform: isVisible ? 'translateY(0)' : 'translateY(24px)', transition: 'opacity 0.6s ease-out, transform 0.6s ease-out' }}>
          <div className="flex items-center gap-4 mb-6">
            <div className="w-14 h-14 rounded-2xl bg-kk-orange/10 flex items-center justify-center">
              {IconComponent && <IconComponent className="w-7 h-7 text-kk-orange" />}
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground">Wat doet deze tool?</h2>
          </div>
          <p className="text-lg text-muted-foreground leading-relaxed">{tool.whatItDoes}</p>
        </div>
      </div>
    </section>
  );
}

function ToolHowToUse({ steps }: { steps: string[] }) {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section ref={ref} className="py-16 lg:py-24">
      <div className="container px-4 sm:px-6">
        <div className="max-w-3xl mx-auto" style={{ opacity: isVisible ? 1 : 0, transform: isVisible ? 'translateY(0)' : 'translateY(24px)', transition: 'opacity 0.6s ease-out, transform 0.6s ease-out' }}>
          <h2 className="text-2xl sm:text-3xl lg:text-display font-bold text-foreground text-center mb-10">Hoe werkt het?</h2>
          <div className="space-y-4">
            {steps.map((step, index) => (
              <div key={index} className="flex items-start gap-4 p-5 bg-card rounded-xl border border-border" style={{ opacity: isVisible ? 1 : 0, transform: isVisible ? 'translateX(0)' : 'translateX(-20px)', transition: `opacity 0.5s ease-out ${index * 0.1}s, transform 0.5s ease-out ${index * 0.1}s` }}>
                <div className="w-8 h-8 rounded-full bg-kk-orange/10 flex items-center justify-center flex-shrink-0">
                  <span className="text-sm font-bold text-kk-orange">{index + 1}</span>
                </div>
                <p className="text-foreground pt-1">{step}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function ToolBenefits({ benefits }: { benefits: Array<{ title: string; description: string }> }) {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section ref={ref} className="py-16 lg:py-24 haze-gradient-cool">
      <div className="container px-4 sm:px-6">
        <div className="max-w-3xl mx-auto" style={{ opacity: isVisible ? 1 : 0, transform: isVisible ? 'translateY(0)' : 'translateY(24px)', transition: 'opacity 0.6s ease-out, transform 0.6s ease-out' }}>
          <h2 className="text-2xl sm:text-3xl lg:text-display font-bold text-foreground text-center mb-10">Voordelen</h2>
          <div className="space-y-4">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-start gap-4 p-5 bg-card rounded-xl border border-border hover:border-kk-orange/20 hover:shadow-premium transition-all duration-300" style={{ opacity: isVisible ? 1 : 0, transform: isVisible ? 'translateX(0)' : 'translateX(20px)', transition: `opacity 0.5s ease-out ${index * 0.1}s, transform 0.5s ease-out ${index * 0.1}s` }}>
                <div className="w-6 h-6 rounded-full bg-kk-orange/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Check className="w-4 h-4 text-kk-orange" />
                </div>
                <div>
                  <p className="font-semibold text-foreground">{benefit.title}</p>
                  <p className="text-muted-foreground text-sm mt-1">{benefit.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function ToolCTA() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section ref={ref} className="py-16 lg:py-24">
      <div className="container px-4 sm:px-6">
        <div className="max-w-3xl mx-auto text-center p-8 lg:p-12 bg-card rounded-2xl border border-border" style={{ opacity: isVisible ? 1 : 0, transform: isVisible ? 'translateY(0)' : 'translateY(24px)', transition: 'opacity 0.6s ease-out, transform 0.6s ease-out' }}>
          <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">
            Liever alles automatisch laten doen?
          </h2>
          <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
            KlikKlaarSEO lost alle SEO-problemen automatisch voor je op. Geen tools nodig, geen gedoe. Vanaf €99/mnd, altijd opzegbaar.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <GradientButton size="lg" asChild>
              <Link to="/contact">
                <Phone className="w-4 h-4" />
                Plan een vrijblijvend gesprek
              </Link>
            </GradientButton>
            <GradientButton variant="outline" size="lg" asChild>
              <Link to="/prijzen">Bekijk prijzen</Link>
            </GradientButton>
          </div>
        </div>
      </div>
    </section>
  );
}

function ToolFAQ({ faqs, toolName }: { faqs: Array<{ question: string; answer: string }>; toolName: string }) {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section ref={ref} className="py-16 lg:py-24 haze-gradient-warm">
      <div className="container px-4 sm:px-6">
        <div className="max-w-3xl mx-auto" style={{ opacity: isVisible ? 1 : 0, transform: isVisible ? 'translateY(0)' : 'translateY(24px)', transition: 'opacity 0.6s ease-out, transform 0.6s ease-out' }}>
          <h2 className="text-2xl sm:text-3xl lg:text-display font-bold text-foreground text-center mb-4">
            Veelgestelde vragen over de {toolName}
          </h2>
          <p className="text-muted-foreground text-center mb-10">Alles wat je wilt weten</p>
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`faq-${index}`} className="bg-card border border-border rounded-xl px-6 data-[state=open]:border-kk-orange/20">
                <AccordionTrigger className="text-left text-foreground hover:no-underline py-5">{faq.question}</AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-5">{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}

function RelatedTools({ tool }: { tool: ToolData }) {
  const { ref, isVisible } = useScrollReveal();

  const sameCat = tools.filter(t => t.category === tool.category && t.slug !== tool.slug).slice(0, 4);
  const otherTools = tools.filter(t => t.category !== tool.category).slice(0, 4);

  return (
    <section ref={ref} className="py-16 lg:py-24">
      <div className="container px-4 sm:px-6">
        <div className="max-w-5xl mx-auto" style={{ opacity: isVisible ? 1 : 0, transform: isVisible ? 'translateY(0)' : 'translateY(24px)', transition: 'opacity 0.6s ease-out, transform 0.6s ease-out' }}>
          <h2 className="text-xl sm:text-2xl font-bold text-foreground text-center mb-8">Gerelateerde tools</h2>

          {sameCat.length > 0 && (
            <div className="mb-8">
              <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wide mb-3 text-center">
                {toolCategories[tool.category]}
              </h3>
              <div className="flex flex-wrap justify-center gap-2">
                {sameCat.map(t => (
                  <Link key={t.slug} to={`/tools/${t.slug}`} className="px-4 py-2 bg-card border border-border rounded-full text-sm text-foreground hover:border-kk-orange/30 hover:shadow-premium-sm transition-all duration-300">
                    {t.name}
                  </Link>
                ))}
              </div>
            </div>
          )}

          <div className="mb-6">
            <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wide mb-3 text-center">Andere tools</h3>
            <div className="flex flex-wrap justify-center gap-2">
              {otherTools.map(t => (
                <Link key={t.slug} to={`/tools/${t.slug}`} className="px-4 py-2 bg-card border border-border rounded-full text-sm text-foreground hover:border-kk-orange/30 hover:shadow-premium-sm transition-all duration-300">
                  {t.name}
                </Link>
              ))}
              <Link to="/tools" className="px-4 py-2 bg-kk-orange/10 border border-kk-orange/20 rounded-full text-sm text-kk-orange font-medium hover:bg-kk-orange/20 transition-all duration-300">
                Alle tools →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function ToolLandingPage({ tool }: ToolLandingPageProps) {
  const faqSchema = {
    type: "FAQPage" as const,
    questions: tool.faqs.map(faq => ({ question: faq.question, answer: faq.answer })),
  };

  const breadcrumbSchema = {
    type: "BreadcrumbList" as const,
    items: [
      { name: "Home", url: "https://klikklaar.nl/" },
      { name: "SEO Tools", url: "https://klikklaar.nl/tools" },
      { name: tool.name, url: `https://klikklaar.nl/tools/${tool.slug}` },
    ],
  };

  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title={`Gratis ${tool.name} | Check je Website | KlikKlaarSEO`}
        description={`${tool.shortDescription} Gratis, zonder registratie. Verbeter je SEO met concrete actiepunten.`}
        canonical={`https://klikklaar.nl/tools/${tool.slug}`}
      />
      <StructuredData schema={faqSchema} />
      <StructuredData schema={breadcrumbSchema} />
      <Header />
      <main>
        <ToolHero tool={tool} />
        <ToolWhatItDoes tool={tool} />
        <ToolHowToUse steps={tool.howToUse} />
        <ToolBenefits benefits={tool.benefits} />
        <ToolCTA />
        <ToolFAQ faqs={tool.faqs} toolName={tool.name} />
        <RelatedTools tool={tool} />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}

export default ToolLandingPage;
