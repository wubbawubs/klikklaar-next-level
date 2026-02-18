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
import { Phone, Check, ChevronRight, Star, Zap, Crown, HelpCircle } from "lucide-react";
import * as LucideIcons from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { ServiceVariantData, serviceVariantsAbonnement } from "@/data/service-variants";

const pricingTiers = [
  {
    id: "basis",
    name: "Basis",
    price: "99",
    description: "De basis op orde, automatisch",
    icon: Zap,
    featured: false,
    features: [
      "Wekelijkse website-analyse",
      "Automatische optimalisatie",
      "Google & AI-vindbaarheid",
      "Technische SEO fixes",
      "Maandelijks rapport",
      "E-mail support",
    ],
    cta: "Start met Basis",
  },
  {
    id: "pro",
    name: "Pro",
    price: "149",
    description: "Sneller groeien met meer inzicht",
    icon: Star,
    featured: true,
    badge: "Meest gekozen",
    features: [
      "Alles van Basis, plus:",
      "2-wekelijkse optimalisatie cyclus",
      "Uitgebreide concurrentie-analyse",
      "AI-citatie monitoring",
      "Wekelijks rapport",
      "Telefonische support",
    ],
    cta: "Start met Pro",
  },
  {
    id: "proplus",
    name: "Pro+",
    price: "249",
    description: "Maximale groei met persoonlijke begeleiding",
    icon: Crown,
    featured: false,
    features: [
      "Alles van Pro, plus:",
      "Persoonlijke accountmanager",
      "Maandelijkse consulting call",
      "Blog posting engine",
      "AI-zoekstrategie op maat",
      "Custom rapportages",
    ],
    cta: "Start met Pro+",
  },
];

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
        <div className="absolute top-0 left-0 w-1/2 h-full bg-gradient-to-br from-kk-orange/[0.03] via-transparent to-transparent" />
        <div className="absolute bottom-0 right-0 w-1/3 h-1/2 bg-gradient-to-tl from-kk-violet/[0.03] via-transparent to-transparent" />
      </div>
      <div className="container px-4 sm:px-6">
        <div className="max-w-4xl mx-auto text-center">
          <nav
            className="flex items-center justify-center gap-2 text-sm text-muted-foreground mb-6"
            style={{ opacity: isVisible ? 1 : 0, transform: isVisible ? 'translateY(0)' : 'translateY(12px)', transition: 'opacity 0.5s ease-out, transform 0.5s ease-out' }}
          >
            <Link to="/" className="hover:text-foreground transition-colors">Home</Link>
            <ChevronRight className="w-4 h-4" />
            <Link to="/diensten/seo-abonnement" className="hover:text-foreground transition-colors">SEO Abonnement</Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-foreground">{data.serviceName}</span>
          </nav>

          <h1
            className="text-3xl sm:text-4xl lg:text-5xl xl:text-display-xl font-bold text-foreground mb-6"
            style={{ opacity: isVisible ? 1 : 0, transform: isVisible ? 'translateY(0)' : 'translateY(16px)', transition: 'opacity 0.6s ease-out 0.1s, transform 0.6s ease-out 0.1s' }}
          >
            {data.headline}:{" "}
            <span className="gradient-text">Groei Zonder Gedoe</span>
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
              <Link to="/contact"><Phone className="w-4 h-4" />Plan een vrijblijvend gesprek</Link>
            </GradientButton>
            <GradientButton variant="outline" size="lg" asChild>
              <Link to={`/diensten/${data.slug.replace("-abonnement", "-uitbesteden")}`}>{data.serviceName} uitbesteden?</Link>
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

function BenefitsSection({ data }: Props) {
  const { ref, isVisible } = useScrollReveal();
  return (
    <section ref={ref} className="py-16 lg:py-24">
      <div className="container px-4 sm:px-6">
        <div className="text-center mb-12" style={{ opacity: isVisible ? 1 : 0, transform: isVisible ? 'translateY(0)' : 'translateY(24px)', transition: 'opacity 0.6s ease-out, transform 0.6s ease-out' }}>
          <h2 className="text-2xl sm:text-3xl lg:text-display font-bold text-foreground mb-4">Waarom een {data.serviceName.toLowerCase()} abonnement?</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">Structureel meer klanten, zonder er zelf tijd aan te besteden</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {data.benefits.map((benefit, index) => {
            const Icon = LucideIcons[benefit.icon as keyof typeof LucideIcons] as React.ElementType;
            return (
              <div key={index} className="p-6 bg-card rounded-xl border border-border hover:border-kk-orange/20 hover:shadow-premium transition-all duration-300" style={{ opacity: isVisible ? 1 : 0, transform: isVisible ? 'translateY(0)' : 'translateY(20px)', transition: `opacity 0.5s ease-out ${index * 0.08}s, transform 0.5s ease-out ${index * 0.08}s` }}>
                <div className="w-10 h-10 rounded-xl bg-kk-orange/10 flex items-center justify-center mb-4">
                  {Icon && <Icon className="w-5 h-5 text-kk-orange" />}
                </div>
                <h3 className="font-semibold text-foreground mb-2">{benefit.title}</h3>
                <p className="text-sm text-muted-foreground">{benefit.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function PricingSection({ data }: Props) {
  const { ref, isVisible } = useScrollReveal();
  return (
    <section ref={ref} className="py-16 lg:py-24 haze-gradient-cool">
      <div className="container px-4 sm:px-6">
        <div className="text-center mb-12" style={{ opacity: isVisible ? 1 : 0, transform: isVisible ? 'translateY(0)' : 'translateY(24px)', transition: 'opacity 0.6s ease-out, transform 0.6s ease-out' }}>
          <h2 className="text-2xl sm:text-3xl lg:text-display font-bold text-foreground mb-4">
            Kies jouw <span className="gradient-text">{data.serviceName.toLowerCase()} abonnement</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">Transparante prijzen, geen verborgen kosten. Altijd maandelijks opzegbaar.</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-8 items-start max-w-5xl mx-auto">
          {pricingTiers.map((tier, index) => {
            const Icon = tier.icon;
            return (
              <div
                key={tier.id}
                className={`relative rounded-2xl border p-6 lg:p-8 transition-all duration-500 ${tier.featured ? "bg-card border-kk-orange/30 shadow-premium-lg ring-2 ring-kk-orange/20" : "bg-card border-border shadow-premium-sm hover:shadow-premium"}`}
                style={{ opacity: isVisible ? 1 : 0, transform: isVisible ? 'translateY(0)' : 'translateY(24px)', transitionDelay: `${index * 100}ms` }}
              >
                {tier.badge && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full text-xs font-semibold gradient-cta text-white">{tier.badge}</div>
                )}
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-6 ${tier.featured ? "gradient-cta" : "bg-kk-orange/10"}`}>
                  <Icon className={`w-6 h-6 ${tier.featured ? "text-white" : "text-kk-orange"}`} />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">{tier.name}</h3>
                <div className="flex items-baseline gap-1 mb-4">
                  <span className="text-4xl font-bold text-foreground">€{tier.price}</span>
                  <span className="text-muted-foreground">/maand</span>
                </div>
                <p className="text-muted-foreground mb-8">{tier.description}</p>
                <ul className="space-y-3 mb-8">
                  {tier.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <div className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 ${i === 0 && tier.id !== "basis" ? "bg-transparent" : "bg-green-100"}`}>
                        {i === 0 && tier.id !== "basis" ? null : <Check className="w-3 h-3 text-green-600" />}
                      </div>
                      <span className={`text-sm ${i === 0 && tier.id !== "basis" ? "font-semibold text-foreground" : "text-foreground"}`}>{feature}</span>
                    </li>
                  ))}
                </ul>
                {tier.featured ? (
                  <GradientButton className="w-full" size="lg" asChild>
                    <Link to="/contact"><Phone className="w-4 h-4" />{tier.cta}</Link>
                  </GradientButton>
                ) : (
                  <GradientButton variant="outline" className="w-full" size="lg" asChild>
                    <Link to="/contact">{tier.cta}</Link>
                  </GradientButton>
                )}
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
    <section ref={ref} className="py-16 lg:py-24">
      <div className="container px-4 sm:px-6">
        <div className="text-center mb-12" style={{ opacity: isVisible ? 1 : 0, transform: isVisible ? 'translateY(0)' : 'translateY(24px)', transition: 'opacity 0.6s ease-out, transform 0.6s ease-out' }}>
          <h2 className="text-2xl sm:text-3xl lg:text-display font-bold text-foreground mb-4">Hoe werkt het?</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">Van aanmelding tot resultaat</p>
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

function FAQSection({ data }: Props) {
  const { ref, isVisible } = useScrollReveal();
  return (
    <section ref={ref} className="py-16 lg:py-24 haze-gradient-warm">
      <div className="container px-4 sm:px-6 max-w-3xl">
        <div className="text-center mb-12" style={{ opacity: isVisible ? 1 : 0, transform: isVisible ? 'translateY(0)' : 'translateY(20px)', transition: 'opacity 0.6s ease-out, transform 0.6s ease-out' }}>
          <h2 className="text-2xl sm:text-3xl lg:text-display font-bold text-foreground mb-4">
            Veelgestelde vragen over <span className="gradient-text">{data.serviceName.toLowerCase()} abonnementen</span>
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

function RelatedVariants({ currentSlug }: { currentSlug: string }) {
  const { ref, isVisible } = useScrollReveal();
  const others = serviceVariantsAbonnement.filter(v => v.slug !== currentSlug);

  return (
    <section ref={ref} className="py-16 lg:py-24">
      <div className="container px-4 sm:px-6">
        <div className="max-w-4xl mx-auto text-center" style={{ opacity: isVisible ? 1 : 0, transform: isVisible ? 'translateY(0)' : 'translateY(24px)', transition: 'opacity 0.6s ease-out, transform 0.6s ease-out' }}>
          <h2 className="text-xl sm:text-2xl font-bold text-foreground mb-6">Meer abonnementen</h2>
          <div className="flex flex-wrap justify-center gap-3">
            {others.map(v => (
              <Link key={v.slug} to={`/diensten/${v.slug}`} className="px-4 py-2 bg-card border border-border rounded-full text-sm text-foreground hover:border-kk-orange/30 hover:shadow-premium-sm transition-all duration-300">
                {v.serviceName} abonnement
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export function DienstAbonnementPage({ data }: Props) {
  const faqSchema = {
    type: "FAQPage" as const,
    questions: data.faqs.map(faq => ({ question: faq.question, answer: faq.answer }))
  };
  const serviceSchema = {
    type: "Service" as const,
    name: `${data.serviceName} Abonnement`,
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
        <BenefitsSection data={data} />
        <PricingSection data={data} />
        <ProcessSection data={data} />
        <FAQSection data={data} />
        <KennisbankLinks context="general" title="Meer leren over SEO?" />
        <RelatedVariants currentSlug={data.slug} />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}

export default DienstAbonnementPage;
