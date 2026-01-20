import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { CTASection } from "@/components/home/CTASection";
import { SEOHead } from "@/components/SEOHead";
import { StructuredData } from "@/components/StructuredData";
import { GradientButton } from "@/components/ui/GradientButton";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Link } from "react-router-dom";
import { Phone, Check, ChevronRight, Star } from "lucide-react";
import { useState, useEffect } from "react";
import { ServiceData, services } from "@/data/services";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import * as LucideIcons from "lucide-react";
import { KennisbankLinks } from "@/components/KennisbankLinks";

interface ServiceLandingPageProps {
  service: ServiceData;
}

function ServiceHero({ service }: { service: ServiceData }) {
  const [isVisible, setIsVisible] = useState(false);
  const IconComponent = LucideIcons[service.icon as keyof typeof LucideIcons] as React.ElementType;

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
            <span className="text-foreground">{service.name}</span>
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
            <span className="text-sm font-medium text-kk-orange">{service.name}</span>
          </div>

          <h1 
            className="text-3xl sm:text-4xl lg:text-5xl xl:text-display-xl font-bold text-foreground mb-6"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateY(0)' : 'translateY(16px)',
              transition: 'opacity 0.6s ease-out 0.15s, transform 0.6s ease-out 0.15s'
            }}
          >
            {service.headline}{" "}
            <span className="gradient-text">Automatisch</span>
          </h1>

          <p 
            className="text-base sm:text-lg lg:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateY(0)' : 'translateY(16px)',
              transition: 'opacity 0.6s ease-out 0.2s, transform 0.6s ease-out 0.2s'
            }}
          >
            {service.subheadline}
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
                Gratis adviesgesprek
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

function ServiceExplanation({ service }: { service: ServiceData }) {
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
            Wat is {service.name}?
          </h2>
          <p className="text-muted-foreground text-center mb-10 max-w-2xl mx-auto text-lg leading-relaxed">
            {service.heroDescription}
          </p>
        </div>
      </div>
    </section>
  );
}

function ServiceBenefits({ benefits }: { benefits: Array<{ icon: string; title: string; description: string }> }) {
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
            Voordelen
          </h2>
          <p className="text-muted-foreground text-center mb-10">
            Dit krijg je met onze aanpak
          </p>

          <div className="space-y-4">
            {benefits.map((benefit, index) => {
              const IconComponent = LucideIcons[benefit.icon as keyof typeof LucideIcons] as React.ElementType;
              return (
                <div 
                  key={index}
                  className="flex items-start gap-4 p-5 bg-card rounded-xl border border-border hover:border-kk-orange/20 hover:shadow-premium transition-all duration-300"
                  style={{
                    opacity: isVisible ? 1 : 0,
                    transform: isVisible ? 'translateX(0)' : 'translateX(20px)',
                    transition: `opacity 0.5s ease-out ${index * 0.1}s, transform 0.5s ease-out ${index * 0.1}s`
                  }}
                >
                  <div className="w-10 h-10 rounded-xl bg-kk-orange/10 flex items-center justify-center flex-shrink-0">
                    {IconComponent && <IconComponent className="w-5 h-5 text-kk-orange" />}
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">{benefit.title}</p>
                    <p className="text-muted-foreground text-sm mt-1">{benefit.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

function ServiceProcess({ howItWorks }: { howItWorks: Array<{ step: number; title: string; description: string }> }) {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section ref={ref} className="py-16 lg:py-24 haze-gradient-cool">
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
            Hoe wij dit aanpakken
          </h2>
          <p className="text-muted-foreground text-center mb-10">
            Ons bewezen proces
          </p>

          <div className="space-y-4">
            {howItWorks.map((step, index) => (
              <div 
                key={index}
                className="flex items-start gap-4 p-5 bg-card rounded-xl border border-border"
                style={{
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
                  transition: `opacity 0.5s ease-out ${index * 0.1}s, transform 0.5s ease-out ${index * 0.1}s`
                }}
              >
                <div className="w-8 h-8 rounded-full gradient-cta flex items-center justify-center flex-shrink-0 text-white font-bold text-sm">
                  {step.step}
                </div>
                <div>
                  <p className="font-semibold text-foreground">{step.title}</p>
                  <p className="text-muted-foreground text-sm mt-1">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function ServiceTestimonial() {
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
          <div className="p-8 bg-card rounded-2xl border border-border shadow-premium-lg">
            <div className="flex gap-1 mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 text-kk-orange fill-kk-orange" />
              ))}
            </div>
            
            <p className="text-lg text-foreground mb-6 italic leading-relaxed">
              "Super club! Een poosje terug contact gekregen met KlikKlaar. Mooie club en maken hun woorden waar. 
              Veel gezien in de markt maar niet voor deze prijs met deze kwaliteit."
            </p>
            
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full gradient-cta flex items-center justify-center text-white font-bold">
                B
              </div>
              <div>
                <p className="font-semibold text-foreground">Ben Commandeur</p>
                <p className="text-sm text-muted-foreground">Nieuw Marketing</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ServiceFAQ({ faqs, serviceName }: { faqs: { question: string; answer: string }[]; serviceName: string }) {
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
            Veelgestelde vragen over {serviceName}
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

function RelatedServices({ currentSlug }: { currentSlug: string }) {
  const { ref, isVisible } = useScrollReveal();
  
  const relatedServices = services.filter(s => s.slug !== currentSlug).slice(0, 4);

  return (
    <section ref={ref} className="py-16 lg:py-24">
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
            Gerelateerde diensten
          </h2>
          <div className="flex flex-wrap justify-center gap-3">
            {relatedServices.map((service) => (
              <Link
                key={service.slug}
                to={`/${service.slug}`}
                className="px-4 py-2 bg-card border border-border rounded-full text-sm text-foreground hover:border-kk-orange/30 hover:shadow-premium-sm transition-all duration-300"
              >
                {service.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export function ServiceLandingPage({ service }: ServiceLandingPageProps) {
  const faqSchema = {
    type: "FAQPage" as const,
    questions: service.faqs.map(faq => ({
      question: faq.question,
      answer: faq.answer
    }))
  };

  const serviceSchema = {
    type: "Service" as const,
    name: service.name,
    description: service.subheadline,
    provider: "KlikKlaarSEO"
  };

  return (
    <div className="min-h-screen bg-background">
      <SEOHead 
        title={`${service.name} | Automatisch | KlikKlaarSEO`}
        description={`${service.subheadline}. Automatische ${service.name.toLowerCase()} voor MKB. Vanaf €99/mnd.`}
        canonical={`https://klikklaar.nl/${service.slug}`}
      />
      <StructuredData schema={faqSchema} />
      <StructuredData schema={serviceSchema} />
      <Header />
      <main>
        <ServiceHero service={service} />
        <ServiceExplanation service={service} />
        <ServiceBenefits benefits={service.benefits} />
        <ServiceProcess howItWorks={service.howItWorks} />
        <ServiceTestimonial />
        <ServiceFAQ faqs={service.faqs} serviceName={service.name} />
        <KennisbankLinks context="general" title="Meer leren over SEO?" />
        <RelatedServices currentSlug={service.slug} />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}

export default ServiceLandingPage;
