import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { CTASection } from "@/components/home/CTASection";
import { SEOHead } from "@/components/SEOHead";
import { StructuredData } from "@/components/StructuredData";
import { GradientButton } from "@/components/ui/GradientButton";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { KennisbankLinks } from "@/components/KennisbankLinks";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { Phone, ChevronRight, HelpCircle, ArrowRight, CheckCircle2, Search, Star, FileBarChart, AlertTriangle } from "lucide-react";
import * as LucideIcons from "lucide-react";
import { getTestimonialForSlug } from "@/data/testimonials";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { ServiceVariantData } from "@/data/service-variants";
import { serviceVariantsScan } from "@/data/service-variants-p2";

interface Props {
  data: ServiceVariantData;
}

function HeroSection({ data }: Props) {
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 50);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative pt-24 lg:pt-40 pb-12 lg:pb-24 overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-bl from-kk-orange/[0.04] via-transparent to-transparent" />
        <div className="absolute bottom-0 left-0 w-1/3 h-1/2 bg-gradient-to-tr from-kk-violet/[0.03] via-transparent to-transparent" />
      </div>
      <div className="container px-4 sm:px-6">
        <div className="max-w-4xl mx-auto text-center">
          <nav
            className="flex items-center justify-center gap-2 text-sm text-muted-foreground mb-6"
            style={{ opacity: isVisible ? 1 : 0, transform: isVisible ? 'translateY(0)' : 'translateY(12px)', transition: 'opacity 0.5s ease-out, transform 0.5s ease-out' }}
          >
            <Link to="/" className="hover:text-foreground transition-colors">Home</Link>
            <ChevronRight className="w-4 h-4" />
            <Link to="/diensten/seo-uitbesteden" className="hover:text-foreground transition-colors">SEO Diensten</Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-foreground">{data.serviceName} Scan</span>
          </nav>

          <div
            className="inline-flex items-center gap-2 px-4 py-1.5 bg-kk-violet/10 text-kk-violet text-sm font-medium rounded-full mb-6"
            style={{ opacity: isVisible ? 1 : 0, transition: 'opacity 0.5s ease-out 0.05s' }}
          >
            <Search className="w-4 h-4" />
            Gratis adviesgesprek beschikbaar
          </div>

          <h1
            className="text-3xl sm:text-4xl lg:text-5xl xl:text-display-xl font-bold text-foreground mb-6"
            style={{ opacity: isVisible ? 1 : 0, transform: isVisible ? 'translateY(0)' : 'translateY(16px)', transition: 'opacity 0.6s ease-out 0.1s, transform 0.6s ease-out 0.1s' }}
          >
            {data.headline}:{" "}
            <span className="gradient-text">Direct Inzicht</span>
          </h1>

          <p
            className="text-base sm:text-lg lg:text-xl text-muted-foreground mb-4 max-w-2xl mx-auto"
            style={{ opacity: isVisible ? 1 : 0, transform: isVisible ? 'translateY(0)' : 'translateY(16px)', transition: 'opacity 0.6s ease-out 0.15s, transform 0.6s ease-out 0.15s' }}
          >
            {data.subheadline}
          </p>

          <p
            className="text-xs sm:text-sm text-muted-foreground mb-8"
            style={{ opacity: isVisible ? 1 : 0, transform: isVisible ? 'translateY(0)' : 'translateY(12px)', transition: 'opacity 0.6s ease-out 0.2s, transform 0.6s ease-out 0.2s' }}
          >
            {data.subtitlePoints.map((p, i) => (
              <span key={i}>{i > 0 ? " · " : ""}✓ {p}</span>
            ))}
          </p>

          <div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            style={{ opacity: isVisible ? 1 : 0, transform: isVisible ? 'translateY(0)' : 'translateY(16px)', transition: 'opacity 0.6s ease-out 0.25s, transform 0.6s ease-out 0.25s' }}
          >
            <GradientButton size="lg" asChild>
              <Link to="/contact"><Phone className="w-4 h-4" />Gratis adviesgesprek</Link>
            </GradientButton>
            <GradientButton variant="outline" size="lg" asChild>
              <Link to="/prijzen">Bekijk abonnementen</Link>
            </GradientButton>
          </div>
        </div>
      </div>
    </section>
  );
}

function WhatIsSection({ data }: Props) {
  const { ref, isVisible } = useScrollReveal();
  return (
    <section ref={ref} className="py-16 lg:py-24 haze-gradient-warm">
      <div className="container px-4 sm:px-6">
        <div className="max-w-3xl mx-auto text-center" style={{ opacity: isVisible ? 1 : 0, transform: isVisible ? 'translateY(0)' : 'translateY(24px)', transition: 'opacity 0.6s ease-out, transform 0.6s ease-out' }}>
          <h2 className="text-2xl sm:text-3xl lg:text-display font-bold text-foreground mb-6">{data.whatIsTitle}</h2>
          {data.whatIsText.map((text, i) => (
            <p key={i} className="text-muted-foreground text-lg leading-relaxed mb-6">{text}</p>
          ))}
        </div>
      </div>
    </section>
  );
}

function WhatWeCheckSection({ data }: Props) {
  const { ref, isVisible } = useScrollReveal();
  return (
    <section ref={ref} className="py-16 lg:py-24">
      <div className="container px-4 sm:px-6">
        <div className="text-center mb-12" style={{ opacity: isVisible ? 1 : 0, transform: isVisible ? 'translateY(0)' : 'translateY(24px)', transition: 'opacity 0.6s ease-out, transform 0.6s ease-out' }}>
          <h2 className="text-2xl sm:text-3xl lg:text-display font-bold text-foreground mb-4">Wat controleren we?</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">Een compleet overzicht van je {data.serviceName.toLowerCase()} status</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {data.benefits.map((benefit, index) => {
            const Icon = LucideIcons[benefit.icon as keyof typeof LucideIcons] as React.ElementType;
            return (
              <div key={index} className="flex items-start gap-4 p-5 bg-card rounded-xl border border-border hover:border-kk-orange/20 hover:shadow-premium transition-all duration-300" style={{ opacity: isVisible ? 1 : 0, transform: isVisible ? 'translateY(0)' : 'translateY(20px)', transition: `opacity 0.5s ease-out ${index * 0.08}s, transform 0.5s ease-out ${index * 0.08}s` }}>
                <div className="w-10 h-10 rounded-xl bg-kk-orange/10 flex items-center justify-center flex-shrink-0">
                  {Icon && <Icon className="w-5 h-5 text-kk-orange" />}
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">{benefit.title}</h3>
                  <p className="text-sm text-muted-foreground">{benefit.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function ProcessSection({ data }: Props) {
  const { ref, isVisible } = useScrollReveal();
  return (
    <section ref={ref} className="py-16 lg:py-24 haze-gradient-cool">
      <div className="container px-4 sm:px-6">
        <div className="text-center mb-12" style={{ opacity: isVisible ? 1 : 0, transform: isVisible ? 'translateY(0)' : 'translateY(24px)', transition: 'opacity 0.6s ease-out, transform 0.6s ease-out' }}>
          <h2 className="text-2xl sm:text-3xl lg:text-display font-bold text-foreground mb-4">Hoe werkt de scan?</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">Van scan tot resultaat in 4 stappen</p>
        </div>
        <div className="max-w-3xl mx-auto space-y-4">
          {data.processSteps.map((step, index) => (
            <div key={index} className="flex items-start gap-4 p-6 bg-card rounded-xl border border-border hover:border-kk-orange/20 hover:shadow-premium transition-all duration-300" style={{ opacity: isVisible ? 1 : 0, transform: isVisible ? 'translateX(0)' : 'translateX(20px)', transition: `opacity 0.5s ease-out ${index * 0.1}s, transform 0.5s ease-out ${index * 0.1}s` }}>
              <div className="w-10 h-10 rounded-full gradient-cta flex items-center justify-center flex-shrink-0 text-white font-bold">{step.step}</div>
              <div>
                <h3 className="font-semibold text-foreground mb-1">{step.title}</h3>
                <p className="text-sm text-muted-foreground">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ScanVsOthersSection({ data }: Props) {
  const { ref, isVisible } = useScrollReveal();
  const comparisons = [
    { label: "Gratis online tools", points: "10-20 factoren", us: "200+ factoren" },
    { label: "Bureau audit", points: "2-4 weken doorlooptijd", us: "Resultaat binnen 48 uur" },
    { label: "Freelancer", points: "Wisselende kwaliteit", us: "Consistent en objectief" },
    { label: "Zelf doen", points: "Geen expertise nodig?", us: "Wij doen het voor je" },
  ];

  return (
    <section ref={ref} className="py-16 lg:py-24">
      <div className="container px-4 sm:px-6">
        <div className="text-center mb-12" style={{ opacity: isVisible ? 1 : 0, transform: isVisible ? 'translateY(0)' : 'translateY(24px)', transition: 'opacity 0.6s ease-out, transform 0.6s ease-out' }}>
          <h2 className="text-2xl sm:text-3xl lg:text-display font-bold text-foreground mb-4">
            Onze scan vs. andere opties
          </h2>
        </div>
        <div className="max-w-3xl mx-auto space-y-4">
          {comparisons.map((item, index) => (
            <div key={index} className="flex items-center gap-4 p-5 bg-card rounded-xl border border-border" style={{ opacity: isVisible ? 1 : 0, transform: isVisible ? 'translateY(0)' : 'translateY(12px)', transition: `opacity 0.4s ease-out ${index * 0.08}s, transform 0.4s ease-out ${index * 0.08}s` }}>
              <div className="flex-1">
                <p className="text-sm font-medium text-muted-foreground">{item.label}</p>
                <p className="text-sm text-muted-foreground">{item.points}</p>
              </div>
              <ArrowRight className="w-4 h-4 text-muted-foreground flex-shrink-0" />
              <div className="flex-1">
                <p className="text-sm font-semibold text-foreground flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-kk-orange flex-shrink-0" />
                  {item.us}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ExampleReportSection({ data }: Props) {
  const { ref, isVisible } = useScrollReveal();
  const reportItems = [
    { status: "good", label: "HTTPS & SSL beveiliging", score: "100%" },
    { status: "good", label: "Mobiel-vriendelijkheid", score: "Goed" },
    { status: "warning", label: "Laadsnelheid (LCP)", score: "3.2s" },
    { status: "warning", label: "Meta descriptions", score: "60% uniek" },
    { status: "bad", label: "Alt-teksten afbeeldingen", score: "25% ontbreekt" },
    { status: "bad", label: "Structured data", score: "Niet aanwezig" },
  ];

  return (
    <section ref={ref} className="py-16 lg:py-24 haze-gradient-warm">
      <div className="container px-4 sm:px-6">
        <div className="text-center mb-12" style={{ opacity: isVisible ? 1 : 0, transform: isVisible ? 'translateY(0)' : 'translateY(24px)', transition: 'opacity 0.6s ease-out, transform 0.6s ease-out' }}>
          <h2 className="text-2xl sm:text-3xl lg:text-display font-bold text-foreground mb-4">
            Voorbeeldrapport: zo ziet jouw scan eruit
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Een voorbeeld van wat je ontvangt na onze {data.serviceName.toLowerCase()} scan
          </p>
        </div>
        <div className="max-w-3xl mx-auto">
          <div className="bg-card rounded-2xl border border-border shadow-premium-lg overflow-hidden">
            <div className="p-4 bg-muted/50 border-b border-border flex items-center gap-3">
              <FileBarChart className="w-5 h-5 text-kk-orange" />
              <p className="font-semibold text-foreground text-sm">SEO Scan Rapport — jouwwebsite.nl</p>
              <span className="ml-auto text-xs text-muted-foreground">Score: 62/100</span>
            </div>
            <div className="divide-y divide-border">
              {reportItems.map((item, index) => (
                <div 
                  key={index}
                  className="flex items-center gap-3 p-4"
                  style={{ opacity: isVisible ? 1 : 0, transform: isVisible ? 'translateX(0)' : 'translateX(12px)', transition: `opacity 0.4s ease-out ${index * 0.08}s, transform 0.4s ease-out ${index * 0.08}s` }}
                >
                  <div className={`w-3 h-3 rounded-full flex-shrink-0 ${
                    item.status === "good" ? "bg-kk-orange" : 
                    item.status === "warning" ? "bg-amber-400" : "bg-destructive"
                  }`} />
                  <p className="text-sm text-foreground flex-1">{item.label}</p>
                  <p className={`text-sm font-medium ${
                    item.status === "good" ? "text-kk-orange" : 
                    item.status === "warning" ? "text-amber-600" : "text-destructive"
                  }`}>{item.score}</p>
                </div>
              ))}
            </div>
            <div className="p-4 bg-muted/30 border-t border-border">
              <div className="flex items-start gap-2">
                <AlertTriangle className="w-4 h-4 text-amber-500 mt-0.5 flex-shrink-0" />
                <p className="text-xs text-muted-foreground">
                  <span className="font-medium text-foreground">Top prioriteit:</span> Structured data toevoegen kan je CTR met 20-30% verhogen. Alt-teksten fixen verbetert toegankelijkheid én image SEO.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function TestimonialSection({ slug }: { slug: string }) {
  const { ref, isVisible } = useScrollReveal();
  const testimonial = getTestimonialForSlug(slug);
  return (
    <section ref={ref} className="py-16 lg:py-24">
      <div className="container px-4 sm:px-6">
        <div className="max-w-3xl mx-auto" style={{ opacity: isVisible ? 1 : 0, transform: isVisible ? 'translateY(0)' : 'translateY(24px)', transition: 'opacity 0.6s ease-out, transform 0.6s ease-out' }}>
          <div className="p-8 bg-card rounded-2xl border border-border shadow-premium-lg">
            <div className="flex gap-1 mb-4">
              {[...Array(5)].map((_, i) => (<Star key={i} className="w-5 h-5 text-kk-orange fill-kk-orange" />))}
            </div>
            <p className="text-lg text-foreground mb-6 italic leading-relaxed">
              "{testimonial.quote}"
            </p>
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full gradient-cta flex items-center justify-center text-white font-bold">{testimonial.initial}</div>
              <div>
                <p className="font-semibold text-foreground">{testimonial.name}</p>
                <p className="text-sm text-muted-foreground">{testimonial.company}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function FAQSection({ data }: Props) {
  const { ref, isVisible } = useScrollReveal();
  return (
    <section ref={ref} className="py-16 lg:py-24 haze-gradient-warm">
      <div className="container px-4 sm:px-6 max-w-3xl">
        <div className="text-center mb-12" style={{ opacity: isVisible ? 1 : 0, transform: isVisible ? 'translateY(0)' : 'translateY(20px)', transition: 'opacity 0.6s ease-out, transform 0.6s ease-out' }}>
          <h2 className="text-2xl sm:text-3xl lg:text-display font-bold text-foreground mb-4">
            Veelgestelde vragen over de <span className="gradient-text">{data.serviceName.toLowerCase()} scan</span>
          </h2>
        </div>
        <Accordion type="single" collapsible className="space-y-3">
          {data.faqs.map((faq, index) => (
            <AccordionItem key={index} value={`faq-${index}`} className="bg-card border border-border rounded-xl px-6 shadow-sm hover:shadow-premium hover:border-kk-orange/20 transition-all duration-300">
              <AccordionTrigger className="text-left text-foreground font-semibold hover:no-underline py-5">
                <div className="flex items-center gap-3">
                  <HelpCircle className="w-5 h-5 text-kk-orange flex-shrink-0" />
                  {faq.question}
                </div>
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground pb-5 pl-8">{faq.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}

function CrossLinks({ currentSlug, serviceName }: { currentSlug: string; serviceName: string }) {
  const { ref, isVisible } = useScrollReveal();
  const baseSlug = currentSlug.replace("-scan", "");

  return (
    <section ref={ref} className="py-16 lg:py-24">
      <div className="container px-4 sm:px-6">
        <div className="max-w-4xl mx-auto" style={{ opacity: isVisible ? 1 : 0, transform: isVisible ? 'translateY(0)' : 'translateY(24px)', transition: 'opacity 0.6s ease-out, transform 0.6s ease-out' }}>
          <h2 className="text-xl sm:text-2xl font-bold text-foreground mb-6 text-center">Meer over {serviceName}</h2>
          <div className="grid sm:grid-cols-3 gap-4 max-w-3xl mx-auto">
            <Link to={`/diensten/${baseSlug}-uitbesteden`} className="flex items-center justify-between p-5 bg-card rounded-xl border border-border hover:border-kk-orange/30 hover:shadow-premium transition-all duration-300 group">
              <div>
                <p className="font-semibold text-foreground group-hover:text-kk-orange transition-colors text-sm">{serviceName} uitbesteden</p>
                <p className="text-xs text-muted-foreground mt-1">Vergelijk opties</p>
              </div>
              <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-kk-orange group-hover:translate-x-1 transition-all" />
            </Link>
            <Link to={`/diensten/${baseSlug}-abonnement`} className="flex items-center justify-between p-5 bg-card rounded-xl border border-border hover:border-kk-orange/30 hover:shadow-premium transition-all duration-300 group">
              <div>
                <p className="font-semibold text-foreground group-hover:text-kk-orange transition-colors text-sm">{serviceName} abonnement</p>
                <p className="text-xs text-muted-foreground mt-1">Bekijk pakketten</p>
              </div>
              <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-kk-orange group-hover:translate-x-1 transition-all" />
            </Link>
            <Link to={`/diensten/${baseSlug}-bureau`} className="flex items-center justify-between p-5 bg-card rounded-xl border border-border hover:border-kk-orange/30 hover:shadow-premium transition-all duration-300 group">
              <div>
                <p className="font-semibold text-foreground group-hover:text-kk-orange transition-colors text-sm">{serviceName} bureau</p>
                <p className="text-xs text-muted-foreground mt-1">Bureau vergelijken</p>
              </div>
              <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-kk-orange group-hover:translate-x-1 transition-all" />
            </Link>
          </div>

          <div className="mt-8 text-center">
            <p className="text-sm text-muted-foreground mb-4">Meer scans</p>
            <div className="flex flex-wrap justify-center gap-3">
              {serviceVariantsScan.filter(v => v.slug !== currentSlug).map(v => (
                <Link key={v.slug} to={`/diensten/${v.slug}`} className="px-4 py-2 bg-card border border-border rounded-full text-sm text-foreground hover:border-kk-orange/30 hover:shadow-premium-sm transition-all duration-300">
                  {v.serviceName} scan
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function DienstScanPage({ data }: Props) {
  const faqSchema = {
    type: "FAQPage" as const,
    questions: data.faqs.map(faq => ({ question: faq.question, answer: faq.answer }))
  };
  const serviceSchema = {
    type: "Service" as const,
    name: `${data.serviceName} Scan - KlikKlaarSEO`,
    description: data.subheadline,
    provider: "KlikKlaarSEO"
  };

  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title={data.metaTitle}
        description={data.metaDescription}
        canonical={`https://klikklaar.nl/diensten/${data.slug}`}
      />
      <StructuredData schema={faqSchema} />
      <StructuredData schema={serviceSchema} />
      <Header />
      <main>
        <HeroSection data={data} />
        <WhatIsSection data={data} />
        <WhatWeCheckSection data={data} />
        <ProcessSection data={data} />
        <ExampleReportSection data={data} />
        <ScanVsOthersSection data={data} />
        <TestimonialSection slug={data.slug} />
        <FAQSection data={data} />
        <KennisbankLinks context="general" title="Meer leren over SEO?" />
        <CrossLinks currentSlug={data.slug} serviceName={data.serviceName} />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}

export default DienstScanPage;
