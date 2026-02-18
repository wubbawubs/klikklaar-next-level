import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { CTASection } from "@/components/home/CTASection";
import { SEOHead } from "@/components/SEOHead";
import { StructuredData } from "@/components/StructuredData";
import { GradientButton } from "@/components/ui/GradientButton";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { KennisbankLinks } from "@/components/KennisbankLinks";
import { DienstLinksSection } from "@/components/DienstLinksSection";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import {
  Phone, Check, ChevronRight, Star, Zap, Crown, HelpCircle,
  BarChart, Clock, Shield, Bot, TrendingUp
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
      "Vindbaarheid verbeteren (Google & AI)",
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
      "Maandelijkse consulting call",
      "Blog posting engine",
      "AI-zoekstrategie op maat",
      "Content creatie ondersteuning",
      "Custom rapportages",
    ],
    cta: "Start met Pro+",
  },
];

const benefits = [
  {
    icon: Clock,
    title: "Geen werk aan jouw kant",
    description: "Wij analyseren, optimaliseren en rapporteren. Jij focust op je bedrijf.",
  },
  {
    icon: TrendingUp,
    title: "Meetbare groei, elke maand",
    description: "Wekelijkse rapporten in normaal Nederlands. Je ziet precies wat er gebeurt.",
  },
  {
    icon: Bot,
    title: "Google én AI-vindbaarheid",
    description: "We optimaliseren niet alleen voor Google, maar ook voor ChatGPT, Perplexity en AI Overviews.",
  },
  {
    icon: Shield,
    title: "Altijd opzegbaar, geen gedoe",
    description: "Maandelijks opzegbaar. Geen langlopende contracten, geen kleine lettertjes.",
  },
  {
    icon: BarChart,
    title: "Continue verbeteringen",
    description: "Geen eenmalig project, maar doorlopende optimalisatie die meegroeit met je bedrijf.",
  },
  {
    icon: Star,
    title: "Bewezen resultaten",
    description: "Ondernemers in heel Nederland zien meer verkeer, meer leads en meer klanten.",
  },
];

const faqs = [
  {
    question: "Wat is een SEO abonnement precies?",
    answer: "Een SEO abonnement is een maandelijkse service waarbij wij je website continu optimaliseren voor zoekmachines en AI-platforms. In plaats van een eenmalige SEO-klus, krijg je doorlopende verbeteringen: technische fixes, content optimalisatie, AI-vindbaarheid en wekelijkse rapportages. Alles automatisch, zonder dat jij er iets voor hoeft te doen.",
  },
  {
    question: "Waarom een abonnement in plaats van een eenmalig project?",
    answer: "SEO is geen eenmalige actie. Google verandert continu zijn algoritme, concurrenten optimaliseren ook, en AI-zoekmachines worden steeds belangrijker. Met een abonnement blijf je structureel groeien in plaats van tijdelijk een boost te krijgen die snel wegebt.",
  },
  {
    question: "Hoeveel kost een SEO abonnement bij KlikKlaarSEO?",
    answer: "Onze abonnementen starten vanaf €99 per maand (Basis). Het Pro-pakket kost €149/mnd en Pro+ €249/mnd met persoonlijke begeleiding. Alle pakketten zijn maandelijks opzegbaar zonder verborgen kosten.",
  },
  {
    question: "Wanneer zie ik resultaat van mijn SEO abonnement?",
    answer: "De eerste technische verbeteringen zijn direct zichtbaar. Rankings verbeteren meestal binnen 4-6 weken. Binnen 2-3 maanden is groei duidelijk meetbaar in verkeer en leads.",
  },
  {
    question: "Kan ik tussentijds upgraden of downgraden?",
    answer: "Ja, je kunt op elk moment wisselen van pakket. Upgraden gaat per direct, downgraden per de volgende maand.",
  },
  {
    question: "Wat als ik niet tevreden ben?",
    answer: "Je kunt maandelijks opzeggen, zonder opgaaf van reden. Als je na 2 maanden geen verbetering ziet, zoeken we samen naar een oplossing of stoppen we zonder gedoe.",
  },
  {
    question: "Werkt dit ook voor grotere bedrijven en e-commerce?",
    answer: "Absoluut. Onze abonnementen werken voor lokale ondernemers, MKB, consultants, IT-bedrijven en e-commerce. Het Pro+ pakket is speciaal ontwikkeld voor bedrijven die maximale groei willen.",
  },
  {
    question: "Wat is het verschil met een SEO bureau?",
    answer: "Bij een traditioneel bureau betaal je vaak €500-€2.000+ per maand, met lange contracten en veel overleg. Bij KlikKlaarSEO krijg je automatische optimalisatie vanaf €99/mnd, zonder gedoe en altijd opzegbaar. Lees meer op onze pagina over SEO uitbesteden.",
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
        <div className="absolute top-0 left-0 w-1/2 h-full bg-gradient-to-br from-kk-orange/[0.03] via-transparent to-transparent" />
        <div className="absolute bottom-0 right-0 w-1/3 h-1/2 bg-gradient-to-tl from-kk-violet/[0.03] via-transparent to-transparent" />
      </div>

      <div className="container px-4 sm:px-6">
        <div className="max-w-4xl mx-auto text-center">
          <nav
            className="flex items-center justify-center gap-2 text-sm text-muted-foreground mb-6"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? "translateY(0)" : "translateY(12px)",
              transition: "opacity 0.5s ease-out, transform 0.5s ease-out",
            }}
          >
            <Link to="/" className="hover:text-foreground transition-colors">Home</Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-foreground">SEO Abonnement</span>
          </nav>

          <h1
            className="text-3xl sm:text-4xl lg:text-5xl xl:text-display-xl font-bold text-foreground mb-6"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? "translateY(0)" : "translateY(16px)",
              transition: "opacity 0.6s ease-out 0.1s, transform 0.6s ease-out 0.1s",
            }}
          >
            SEO Abonnement:{" "}
            <span className="gradient-text">Groei Zonder Gedoe</span>
          </h1>

          <p
            className="text-base sm:text-lg lg:text-xl text-muted-foreground mb-4 max-w-2xl mx-auto"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? "translateY(0)" : "translateY(16px)",
              transition: "opacity 0.6s ease-out 0.15s, transform 0.6s ease-out 0.15s",
            }}
          >
            Automatische SEO optimalisatie voor Google én AI-zoekmachines. 
            Vanaf €99/mnd, maandelijks opzegbaar, geen verborgen kosten.
          </p>

          <p
            className="text-xs sm:text-sm text-muted-foreground mb-8"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? "translateY(0)" : "translateY(12px)",
              transition: "opacity 0.6s ease-out 0.2s, transform 0.6s ease-out 0.2s",
            }}
          >
            ✓ Geen langlopende contracten · ✓ Wekelijkse rapportages · ✓ AI-vindbaarheid inbegrepen
          </p>

          <div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? "translateY(0)" : "translateY(16px)",
              transition: "opacity 0.6s ease-out 0.25s, transform 0.6s ease-out 0.25s",
            }}
          >
            <GradientButton size="lg" asChild>
              <Link to="/contact">
                <Phone className="w-4 h-4" />
                Plan een vrijblijvend gesprek
              </Link>
            </GradientButton>
            <GradientButton variant="outline" size="lg" asChild>
              <Link to="/prijzen">Bekijk alle pakketten</Link>
            </GradientButton>
          </div>
        </div>
      </div>
    </section>
  );
}

function WhatIsSection() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section ref={ref} className="py-16 lg:py-24 haze-gradient-warm">
      <div className="container px-4 sm:px-6">
        <div
          className="max-w-3xl mx-auto text-center"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? "translateY(0)" : "translateY(24px)",
            transition: "opacity 0.6s ease-out, transform 0.6s ease-out",
          }}
        >
          <h2 className="text-2xl sm:text-3xl lg:text-display font-bold text-foreground mb-6">
            Wat is een SEO abonnement?
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed mb-6">
            Een SEO abonnement is een maandelijkse service waarbij je website continu wordt 
            geoptimaliseerd voor Google, AI-zoekmachines zoals ChatGPT en Perplexity, en 
            Google Maps. In plaats van een eenmalig project dat snel veroudert, krijg je 
            <strong className="text-foreground"> doorlopende groei</strong> die meebeweegt met 
            veranderende algoritmes en concurrentie.
          </p>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Bij KlikKlaarSEO gaat dit <strong className="text-foreground">volledig automatisch</strong>. 
            Wij analyseren je website, voeren verbeteringen door en rapporteren de resultaten — 
            jij hoeft niets te doen behalve je klanten helpen.
          </p>
        </div>
      </div>
    </section>
  );
}

function BenefitsSection() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section ref={ref} className="py-16 lg:py-24">
      <div className="container px-4 sm:px-6">
        <div
          className="text-center mb-12"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? "translateY(0)" : "translateY(24px)",
            transition: "opacity 0.6s ease-out, transform 0.6s ease-out",
          }}
        >
          <h2 className="text-2xl sm:text-3xl lg:text-display font-bold text-foreground mb-4">
            Waarom een SEO abonnement?
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Structureel meer klanten, zonder er zelf tijd aan te besteden
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <div
                key={index}
                className="p-6 bg-card rounded-xl border border-border hover:border-kk-orange/20 hover:shadow-premium transition-all duration-300"
                style={{
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible ? "translateY(0)" : "translateY(20px)",
                  transition: `opacity 0.5s ease-out ${index * 0.08}s, transform 0.5s ease-out ${index * 0.08}s`,
                }}
              >
                <div className="w-10 h-10 rounded-xl bg-kk-orange/10 flex items-center justify-center mb-4">
                  <Icon className="w-5 h-5 text-kk-orange" />
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

function PricingSection() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section ref={ref} className="py-16 lg:py-24 haze-gradient-cool">
      <div className="container px-4 sm:px-6">
        <div
          className="text-center mb-12"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? "translateY(0)" : "translateY(24px)",
            transition: "opacity 0.6s ease-out, transform 0.6s ease-out",
          }}
        >
          <h2 className="text-2xl sm:text-3xl lg:text-display font-bold text-foreground mb-4">
            Kies jouw{" "}
            <span className="gradient-text">SEO abonnement</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Transparante prijzen, geen verborgen kosten. Altijd maandelijks opzegbaar.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-8 items-start max-w-5xl mx-auto">
          {pricingTiers.map((tier, index) => {
            const Icon = tier.icon;
            return (
              <div
                key={tier.id}
                className={`relative rounded-2xl border p-6 lg:p-8 transition-all duration-500
                  ${tier.featured
                    ? "bg-card border-kk-orange/30 shadow-premium-lg ring-2 ring-kk-orange/20"
                    : "bg-card border-border shadow-premium-sm hover:shadow-premium"
                  }`}
                style={{
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible ? "translateY(0)" : "translateY(24px)",
                  transitionDelay: `${index * 100}ms`,
                }}
              >
                {tier.badge && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full text-xs font-semibold gradient-cta text-white">
                    {tier.badge}
                  </div>
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
                      <span className={`text-sm ${i === 0 && tier.id !== "basis" ? "font-semibold text-foreground" : "text-foreground"}`}>
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                {tier.featured ? (
                  <GradientButton className="w-full" size="lg" asChild>
                    <Link to="/contact">
                      <Phone className="w-4 h-4" />
                      {tier.cta}
                    </Link>
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

function FAQSection() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section ref={ref} className="py-16 lg:py-24">
      <div className="container px-4 sm:px-6 max-w-3xl">
        <div
          className="text-center mb-12"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? "translateY(0)" : "translateY(20px)",
            transition: "opacity 0.6s ease-out, transform 0.6s ease-out",
          }}
        >
          <h2 className="text-2xl sm:text-3xl lg:text-display font-bold text-foreground mb-4">
            Veelgestelde vragen over{" "}
            <span className="gradient-text">SEO abonnementen</span>
          </h2>
        </div>

        <Accordion type="single" collapsible className="space-y-3">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`faq-${index}`}
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
    </section>
  );
}

const SeoAbonnement = () => {
  const faqSchema = {
    type: "FAQPage" as const,
    questions: faqs.map((faq) => ({ question: faq.question, answer: faq.answer })),
  };

  const serviceSchema = {
    type: "Service" as const,
    name: "SEO Abonnement",
    description: "Automatische SEO optimalisatie voor Google en AI-zoekmachines. Vanaf €99/mnd, maandelijks opzegbaar.",
    provider: "KlikKlaarSEO",
    areaServed: "Nederland",
  };

  const breadcrumbSchema = {
    type: "BreadcrumbList" as const,
    items: [
      { name: "Home", url: "https://klikklaar.nl/" },
      { name: "Diensten", url: "https://klikklaar.nl/diensten/seo-abonnement" },
      { name: "SEO Abonnement", url: "https://klikklaar.nl/diensten/seo-abonnement" },
    ],
  };

  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="SEO Abonnement | Automatische SEO vanaf €99/mnd | KlikKlaarSEO"
        description="SEO abonnement voor Google & AI-vindbaarheid. Automatische optimalisatie, wekelijkse rapportages, altijd opzegbaar. Vanaf €99/mnd. 100+ ondernemers gingen je voor."
        canonical="https://klikklaar.nl/diensten/seo-abonnement"
      />
      <StructuredData schema={[faqSchema, serviceSchema, breadcrumbSchema]} />
      <Header />
      <main>
        <HeroSection />
        <WhatIsSection />
        <BenefitsSection />
        <PricingSection />
        <DienstLinksSection variant="abonnement" />
        <DienstLinksSection variant="bureau" />
        <DienstLinksSection variant="scan" />
        <FAQSection />
        <KennisbankLinks context="general" title="Meer leren over SEO?" />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default SeoAbonnement;
