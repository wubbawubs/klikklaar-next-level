import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { CTASection } from "@/components/home/CTASection";
import { SEOHead } from "@/components/SEOHead";
import { StructuredData } from "@/components/StructuredData";
import { GradientButton } from "@/components/ui/GradientButton";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Link } from "react-router-dom";
import { Phone, Check, TrendingUp, ChevronRight } from "lucide-react";
import { useState, useEffect } from "react";
import { IndustryData } from "@/data/industries";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import * as LucideIcons from "lucide-react";

interface IndustryLandingPageProps {
  industry: IndustryData;
}

function IndustryHero({ industry }: { industry: IndustryData }) {
  const [isVisible, setIsVisible] = useState(false);
  const IconComponent = LucideIcons[industry.icon as keyof typeof LucideIcons] as React.ElementType;

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
          {/* Breadcrumb */}
          <nav 
            className="flex items-center justify-center gap-2 text-sm text-muted-foreground mb-6"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateY(0)' : 'translateY(12px)',
              transition: 'opacity 0.5s ease-out, transform 0.5s ease-out'
            }}
          >
            <Link to="/" className="hover:text-foreground transition-colors">Home</Link>
            <ChevronRight className="w-4 h-4" />
            <Link to="/voorbeelden" className="hover:text-foreground transition-colors">Branches</Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-foreground">{industry.name}</span>
          </nav>

          <div 
            className="inline-flex items-center gap-2 px-4 py-2 bg-kk-orange/10 rounded-full mb-6"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateY(0)' : 'translateY(12px)',
              transition: 'opacity 0.5s ease-out 0.1s, transform 0.5s ease-out 0.1s'
            }}
          >
            {IconComponent && <IconComponent className="w-5 h-5 text-kk-orange" />}
            <span className="text-sm font-medium text-kk-orange">{industry.name}</span>
          </div>

          <h1 
            className="text-3xl sm:text-4xl lg:text-5xl xl:text-display-xl font-bold text-foreground mb-6"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateY(0)' : 'translateY(16px)',
              transition: 'opacity 0.6s ease-out 0.15s, transform 0.6s ease-out 0.15s'
            }}
          >
            {industry.headline}{" "}
            <span className="gradient-text">Meer Klanten</span>
          </h1>

          <p 
            className="text-base sm:text-lg lg:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateY(0)' : 'translateY(16px)',
              transition: 'opacity 0.6s ease-out 0.2s, transform 0.6s ease-out 0.2s'
            }}
          >
            {industry.subheadline}
          </p>

          <div 
            className="flex flex-col sm:flex-row gap-4 justify-center"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateY(0)' : 'translateY(16px)',
              transition: 'opacity 0.6s ease-out 0.25s, transform 0.6s ease-out 0.25s'
            }}
          >
            <GradientButton size="lg" asChild>
              <Link to="/contact">
                <Phone className="w-4 h-4" />
                Plan een vrijblijvend gesprek
              </Link>
            </GradientButton>
            <GradientButton variant="outline" size="lg" asChild>
              <Link to="/prijzen">
                Bekijk prijzen
              </Link>
            </GradientButton>
          </div>
        </div>
      </div>
    </section>
  );
}

function IndustryPainPoints({ painPoints }: { painPoints: string[] }) {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section ref={ref} className="py-16 lg:py-24 haze-gradient-warm">
      <div className="container px-4 sm:px-6">
        <div 
          className="max-w-3xl mx-auto"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(24px)',
            transition: 'opacity 0.6s ease-out, transform 0.6s ease-out'
          }}
        >
          <h2 className="text-2xl sm:text-3xl lg:text-display font-bold text-foreground text-center mb-4">
            Herkenbaar?
          </h2>
          <p className="text-muted-foreground text-center mb-10">
            Dit horen we vaak van ondernemers zoals jij
          </p>

          <div className="space-y-4">
            {painPoints.map((pain, index) => (
              <div 
                key={index}
                className="flex items-start gap-4 p-5 bg-card rounded-xl border border-border"
                style={{
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible ? 'translateX(0)' : 'translateX(-20px)',
                  transition: `opacity 0.5s ease-out ${index * 0.1}s, transform 0.5s ease-out ${index * 0.1}s`
                }}
              >
                <div className="w-6 h-6 rounded-full bg-red-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-red-500 text-sm">✕</span>
                </div>
                <p className="text-foreground">{pain}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function IndustrySolutions({ solutions }: { solutions: string[] }) {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section ref={ref} className="py-16 lg:py-24">
      <div className="container px-4 sm:px-6">
        <div 
          className="max-w-3xl mx-auto"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(24px)',
            transition: 'opacity 0.6s ease-out, transform 0.6s ease-out'
          }}
        >
          <h2 className="text-2xl sm:text-3xl lg:text-display font-bold text-foreground text-center mb-4">
            Dit lossen we voor je op
          </h2>
          <p className="text-muted-foreground text-center mb-10">
            Automatische SEO die écht werkt
          </p>

          <div className="space-y-4">
            {solutions.map((solution, index) => (
              <div 
                key={index}
                className="flex items-start gap-4 p-5 bg-card rounded-xl border border-border hover:border-kk-orange/20 hover:shadow-premium transition-all duration-300"
                style={{
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible ? 'translateX(0)' : 'translateX(20px)',
                  transition: `opacity 0.5s ease-out ${index * 0.1}s, transform 0.5s ease-out ${index * 0.1}s`
                }}
              >
                <div className="w-6 h-6 rounded-full bg-kk-orange/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Check className="w-4 h-4 text-kk-orange" />
                </div>
                <p className="text-foreground">{solution}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function IndustryStats({ stats }: { stats: { value: string; label: string }[] }) {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section ref={ref} className="py-16 lg:py-24 haze-gradient-cool">
      <div className="container px-4 sm:px-6">
        <div 
          className="max-w-4xl mx-auto"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(24px)',
            transition: 'opacity 0.6s ease-out, transform 0.6s ease-out'
          }}
        >
          <h2 className="text-2xl sm:text-3xl lg:text-display font-bold text-foreground text-center mb-10">
            Resultaten die je kunt verwachten
          </h2>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <div 
                key={index}
                className="text-center p-6 bg-card rounded-xl border border-border"
                style={{
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible ? 'scale(1)' : 'scale(0.95)',
                  transition: `opacity 0.5s ease-out ${index * 0.1}s, transform 0.5s ease-out ${index * 0.1}s`
                }}
              >
                <p className="text-3xl lg:text-4xl font-bold text-kk-orange mb-2">{stat.value}</p>
                <p className="text-sm text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function IndustryFAQ({ faqs, industryName }: { faqs: { question: string; answer: string }[]; industryName: string }) {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section ref={ref} className="py-16 lg:py-24">
      <div className="container px-4 sm:px-6">
        <div 
          className="max-w-3xl mx-auto"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(24px)',
            transition: 'opacity 0.6s ease-out, transform 0.6s ease-out'
          }}
        >
          <h2 className="text-2xl sm:text-3xl lg:text-display font-bold text-foreground text-center mb-4">
            Veelgestelde vragen over SEO voor {industryName}
          </h2>
          <p className="text-muted-foreground text-center mb-10">
            Alles wat je wilt weten
          </p>

          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`faq-${index}`}
                className="bg-card border border-border rounded-xl px-6 data-[state=open]:border-kk-orange/20"
              >
                <AccordionTrigger className="text-left text-foreground hover:no-underline py-5">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-5">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}

function RelatedIndustries({ currentSlug }: { currentSlug: string }) {
  const { ref, isVisible } = useScrollReveal();
  
  const relatedLinks = [
    { slug: "coaches", name: "Coaches" },
    { slug: "personal-trainers", name: "Personal Trainers" },
    { slug: "kappers", name: "Kappers" },
    { slug: "tandartsen", name: "Tandartsen" },
    { slug: "fysiotherapeuten", name: "Fysiotherapeuten" },
  ].filter(item => item.slug !== currentSlug).slice(0, 4);

  return (
    <section ref={ref} className="py-16 lg:py-24 haze-gradient-warm">
      <div className="container px-4 sm:px-6">
        <div 
          className="max-w-4xl mx-auto text-center"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(24px)',
            transition: 'opacity 0.6s ease-out, transform 0.6s ease-out'
          }}
        >
          <h2 className="text-xl sm:text-2xl font-bold text-foreground mb-6">
            SEO voor andere branches
          </h2>
          <div className="flex flex-wrap justify-center gap-3">
            {relatedLinks.map((link) => (
              <Link
                key={link.slug}
                to={`/seo-${link.slug}`}
                className="px-4 py-2 bg-card border border-border rounded-full text-sm text-foreground hover:border-kk-orange/30 hover:shadow-premium-sm transition-all duration-300"
              >
                SEO voor {link.name}
              </Link>
            ))}
            <Link
              to="/voorbeelden"
              className="px-4 py-2 bg-kk-orange/10 border border-kk-orange/20 rounded-full text-sm text-kk-orange font-medium hover:bg-kk-orange/20 transition-all duration-300"
            >
              Alle branches →
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export function IndustryLandingPage({ industry }: IndustryLandingPageProps) {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": industry.faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://klikklaar.nl" },
      { "@type": "ListItem", "position": 2, "name": "Branches", "item": "https://klikklaar.nl/voorbeelden" },
      { "@type": "ListItem", "position": 3, "name": industry.name, "item": `https://klikklaar.nl/seo-${industry.slug}` }
    ]
  };

  return (
    <div className="min-h-screen bg-background">
      <SEOHead 
        title={`${industry.headline} | Meer Klanten | KlikKlaarSEO`}
        description={`${industry.subheadline}. Automatische SEO speciaal voor ${industry.name.toLowerCase()}. Vanaf €99/mnd. Geen technische kennis nodig.`}
        canonical={`https://klikklaar.nl/seo-${industry.slug}`}
      />
      <StructuredData schema={faqSchema} />
      <StructuredData schema={breadcrumbSchema} />
      <Header />
      <main>
        <IndustryHero industry={industry} />
        <IndustryPainPoints painPoints={industry.painPoints} />
        <IndustrySolutions solutions={industry.solutions} />
        <IndustryStats stats={industry.stats} />
        <IndustryFAQ faqs={industry.faqs} industryName={industry.name} />
        <RelatedIndustries currentSlug={industry.slug} />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}

export default IndustryLandingPage;
