import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { GradientButton } from "@/components/ui/GradientButton";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { PricingValueIllustration } from "@/components/illustrations/PricingValueIllustration";
import { CTASection } from "@/components/home/CTASection";
import { SEOHead } from "@/components/SEOHead";
import { StructuredData } from "@/components/StructuredData";
import { 
  Check, 
  Phone, 
  Star,
  Zap,
  Crown,
  HelpCircle
} from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const pricingTiers = [
  {
    id: "basis",
    name: "Basis",
    price: "99",
    description: "Beter gevonden worden in Google én AI-zoekmachines",
    icon: Zap,
    featured: false,
    features: [
      "Wekelijkse website-analyse",
      "Automatische content optimalisatie",
      "Lokale vindbaarheid verbeteren",
      "Technische SEO fixes",
      "AI-vindbaarheid optimalisatie",
      "Maandelijks rapport",
      "E-mail support",
    ],
    cta: "Start met Basis",
  },
  {
    id: "pro",
    name: "Pro",
    price: "149",
    description: "Sneller groeien in Google, AI-zoekresultaten én Maps",
    icon: Star,
    featured: true,
    badge: "Meest gekozen",
    features: [
      "Alles van Basis, plus:",
      "2-wekelijkse optimalisatie cyclus",
      "Uitgebreide concurrentie-analyse",
      "AI-citatie monitoring",
      "Prioriteit bij verbeteringen",
      "Wekelijks rapport",
      "Telefonische support",
    ],
    cta: "Start met Pro",
  },
  {
    id: "proplus",
    name: "Pro+",
    price: "249",
    description: "Maximale groei met persoonlijke begeleiding en AI-strategie",
    icon: Crown,
    featured: false,
    features: [
      "Alles van Pro, plus:",
      "Persoonlijke accountmanager",
      "Wekelijkse consulting call",
      "Blog posting engine",
      "AI-zoekstrategie op maat",
      "Content creatie ondersteuning",
      "Custom rapportages",
    ],
    cta: "Start met Pro+",
  },
];

const setupPricing = [
  {
    pages: "Tot 5 pagina's",
    price: "Gratis",
    description: "Perfecte start voor kleine websites",
  },
  {
    pages: "5 - 15 pagina's",
    price: "€300",
    description: "Eenmalige opstartkosten",
  },
  {
    pages: "Meer dan 15 pagina's",
    price: "Op maat",
    description: "Custom offerte voor grote websites",
  },
];

const faqs = [
  {
    question: "Kan ik maandelijks opzeggen?",
    answer: "Ja, absoluut. Er zijn geen langlopende contracten. Je kunt elke maand opzeggen zonder extra kosten of gedoe.",
  },
  {
    question: "Wat zijn de opstartkosten?",
    answer: "Tot 5 pagina's is de opstart gratis. Bij 5-15 pagina's betaal je eenmalig €300 opstartkosten. Voor websites met meer dan 15 pagina's maken we een offerte op maat.",
  },
  {
    question: "Wanneer zie ik resultaat?",
    answer: "De meeste klanten zien binnen 4-6 weken de eerste verbeteringen. Binnen 3 maanden is groei meestal duidelijk meetbaar.",
  },
  {
    question: "Wat als het niet werkt voor mij?",
    answer: "We geloven in eerlijk ondernemen. Als je na 2 maanden geen verbetering ziet, zoeken we samen naar een oplossing of stoppen we zonder gedoe.",
  },
  {
    question: "Welk pakket past bij mij?",
    answer: "Twijfel je? Plan een gratis gesprek. We kijken samen naar je situatie en adviseren welk pakket het beste past.",
  },
];

function HeroSection() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 50);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative pt-24 lg:pt-40 pb-12 lg:pb-24 overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-bl from-kk-violet/[0.03] via-transparent to-transparent" />
      </div>

      <div className="container px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <div className="text-center lg:text-left">
            <span 
              className="inline-block text-xs font-semibold text-kk-orange uppercase tracking-widest mb-4"
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0)' : 'translateY(12px)',
                transition: 'opacity 0.6s ease-out, transform 0.6s ease-out'
              }}
            >
              Prijzen
            </span>
            
            <h1 
              className="text-3xl sm:text-4xl lg:text-5xl xl:text-display-lg font-bold text-foreground mb-4 lg:mb-6"
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0)' : 'translateY(16px)',
                transition: 'opacity 0.6s ease-out 0.1s, transform 0.6s ease-out 0.1s'
              }}
            >
              Investeer in groei,
              <br />
              <span className="gradient-text">niet in gedoe</span>
            </h1>
            
            <p 
              className="text-base sm:text-lg lg:text-xl text-muted-foreground mb-4 lg:mb-6"
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0)' : 'translateY(16px)',
                transition: 'opacity 0.6s ease-out 0.2s, transform 0.6s ease-out 0.2s'
              }}
            >
              Transparante prijzen, geen verborgen kosten. Altijd maandelijks opzegbaar.
            </p>

            <p 
              className="text-xs sm:text-sm text-muted-foreground"
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0)' : 'translateY(12px)',
                transition: 'opacity 0.6s ease-out 0.3s, transform 0.6s ease-out 0.3s'
              }}
            >
              ✓ Geen langlopende contracten · ✓ Geen setup-kosten · ✓ Altijd opzegbaar
            </p>
          </div>

          <div 
            className="mt-8 lg:mt-0"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
              transition: 'opacity 0.7s ease-out 0.2s, transform 0.7s ease-out 0.2s'
            }}
          >
            <PricingValueIllustration />
          </div>
        </div>
      </div>
    </section>
  );
}

function PricingCards() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section ref={ref} className="py-12 lg:py-24 haze-gradient-cool relative overflow-hidden">
      <div className="container px-4 sm:px-6 relative z-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-8 items-start">
          {pricingTiers.map((tier, index) => {
            const Icon = tier.icon;
            return (
              <div
                key={tier.id}
                className={`relative rounded-2xl border p-6 lg:p-8 transition-all duration-500
                  ${tier.featured 
                    ? 'bg-card border-kk-orange/30 shadow-premium-lg ring-2 ring-kk-orange/20' 
                    : 'bg-card border-border shadow-premium-sm hover:shadow-premium'
                  }
                `}
                style={{ 
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible ? 'translateY(0)' : 'translateY(24px)',
                  transitionDelay: `${index * 100}ms`
                }}
              >
                {/* Badge */}
                {tier.badge && (
                  <div className={`absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full text-xs font-semibold
                    ${tier.featured ? 'gradient-cta text-white' : 'bg-muted text-muted-foreground'}`}>
                    {tier.badge}
                  </div>
                )}

                {/* Icon */}
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-6
                  ${tier.featured ? 'gradient-cta' : 'bg-kk-orange/10'}`}>
                  <Icon className={`w-6 h-6 ${tier.featured ? 'text-white' : 'text-kk-orange'}`} />
                </div>

                {/* Tier name */}
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  {tier.name}
                </h3>

                {/* Price */}
                <div className="flex items-baseline gap-1 mb-4">
                  <span className="text-4xl font-bold text-foreground">€{tier.price}</span>
                  <span className="text-muted-foreground">/maand</span>
                </div>

                {/* Description */}
                <p className="text-muted-foreground mb-8">
                  {tier.description}
                </p>

                {/* Features */}
                <ul className="space-y-3 mb-8">
                  {tier.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <div className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5
                        ${i === 0 && tier.id !== 'basis' ? 'bg-transparent' : 'bg-green-100'}`}>
                        {i === 0 && tier.id !== 'basis' ? null : (
                          <Check className="w-3 h-3 text-green-600" />
                        )}
                      </div>
                      <span className={`text-sm ${i === 0 && tier.id !== 'basis' ? 'font-semibold text-foreground' : 'text-foreground'}`}>
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                {tier.featured ? (
                  <GradientButton className="w-full" size="lg" asChild>
                    <Link to="/contact">
                      <Phone className="w-4 h-4" />
                      {tier.cta}
                    </Link>
                  </GradientButton>
                ) : (
                  <GradientButton variant="outline" className="w-full" size="lg" asChild>
                    <Link to="/contact">
                      {tier.cta}
                    </Link>
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

function SetupCosts() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section ref={ref} className="py-12 lg:py-24 bg-background">
      <div className="container px-4 sm:px-6">
        <div 
          className="text-center mb-8 lg:mb-12"
          style={{ 
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
            transition: 'opacity 0.6s ease-out, transform 0.6s ease-out'
          }}
        >
          <span className="inline-block text-xs font-semibold text-kk-orange uppercase tracking-widest mb-3">
            Eenmalige kosten
          </span>
          <h2 className="text-xl sm:text-2xl lg:text-display font-bold text-foreground mb-3">
            Opstartkosten{" "}
            <span className="gradient-text">op basis van pagina's</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            De opstartkosten zijn eenmalig en afhankelijk van het aantal pagina's op je website.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-4 lg:gap-6 max-w-4xl mx-auto">
          {setupPricing.map((tier, index) => (
            <div
              key={index}
              className="relative rounded-xl border border-border bg-card p-6 text-center shadow-premium-sm hover:shadow-premium transition-all duration-300"
              style={{ 
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0)' : 'translateY(24px)',
                transition: 'opacity 0.6s ease-out, transform 0.6s ease-out',
                transitionDelay: `${index * 100}ms`
              }}
            >
              <div className="text-sm font-medium text-muted-foreground mb-2">
                {tier.pages}
              </div>
              <div className="text-2xl lg:text-3xl font-bold text-foreground mb-2">
                {tier.price}
              </div>
              <div className="text-sm text-muted-foreground">
                {tier.description}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Guarantee() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section ref={ref} className="py-12 lg:py-24 haze-gradient-warm relative overflow-hidden">
      <div className="container px-4 sm:px-6 relative z-10">
        <div 
          className="max-w-3xl mx-auto text-center p-6 sm:p-8 lg:p-12 bg-card rounded-xl lg:rounded-2xl border border-border shadow-premium-lg"
          style={{ 
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(24px)',
            transition: 'opacity 0.6s ease-out, transform 0.6s ease-out'
          }}
        >
          <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 rounded-xl lg:rounded-2xl gradient-cta flex items-center justify-center mx-auto mb-4 lg:mb-6">
            <Check className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 text-white" />
          </div>
          
          <h2 className="text-xl sm:text-2xl lg:text-display font-bold text-foreground mb-3 lg:mb-4">
            Geen gedoe.{" "}
            <span className="gradient-text">Altijd opzegbaar.</span>
          </h2>
          
          <p className="text-sm sm:text-base lg:text-lg text-muted-foreground mb-6 lg:mb-8">
            Wij geloven in resultaat, niet in kleine lettertjes. Maandelijks opzegbaar, geen verborgen kosten, 
            en als je niet tevreden bent zoeken we samen naar een oplossing.
          </p>

          <GradientButton size="lg" className="text-sm sm:text-base" asChild>
            <Link to="/contact">
              <Phone className="w-4 h-4 sm:w-5 sm:h-5" />
              Plan een vrijblijvend gesprek
            </Link>
          </GradientButton>
        </div>
      </div>
    </section>
  );
}

function FAQSection() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section ref={ref} className="py-12 lg:py-24 bg-background">
      <div className="container px-4 sm:px-6 max-w-3xl">
        <div 
          className="text-center mb-8 lg:mb-16"
          style={{ 
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
            transition: 'opacity 0.6s ease-out, transform 0.6s ease-out'
          }}
        >
          <span className="inline-block text-xs font-semibold text-kk-orange uppercase tracking-widest mb-3">
            Veelgestelde vragen
          </span>
          <h2 className="text-xl sm:text-2xl lg:text-display font-bold text-foreground">
            Vragen over{" "}
            <span className="gradient-text">prijzen en contracten?</span>
          </h2>
        </div>

        <div
          style={{ 
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
            transition: 'opacity 0.6s ease-out 0.15s, transform 0.6s ease-out 0.15s'
          }}
        >
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-card border border-border rounded-xl px-6 shadow-sm hover:shadow-premium hover:border-kk-orange/20 transition-all duration-300"
              >
                <AccordionTrigger className="text-left text-foreground font-semibold hover:no-underline py-5">
                  <div className="flex items-center gap-3">
                    <HelpCircle className="w-5 h-5 text-kk-orange flex-shrink-0" />
                    {faq.question}
                  </div>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-5 pl-8">
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


const Pricing = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEOHead 
        title="SEO Prijzen | Basis €99 · Pro €149 · Pro+ €249 | KlikKlaar"
        description="Transparante SEO & AI-vindbaarheid prijzen zonder verborgen kosten. Maandelijks opzegbaar. Investeer in groei, niet in gedoe. 100+ ondernemers gingen je voor."
        canonical="https://klikklaar.nl/prijzen"
      />
      <StructuredData 
        schema={{
          type: "Service",
          name: "SEO Abonnementen",
          description: "Transparante prijzen vanaf €99/maand, geen verborgen kosten, altijd maandelijks opzegbaar.",
          provider: "KlikKlaar",
          areaServed: "Nederland",
        }}
      />
      <Header />
      <main>
        <HeroSection />
        <PricingCards />
        <SetupCosts />
        <Guarantee />
        <FAQSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Pricing;
