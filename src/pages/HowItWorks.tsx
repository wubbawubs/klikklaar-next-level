import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { GradientButton } from "@/components/ui/GradientButton";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ProcessFlowIllustration } from "@/components/illustrations/ProcessFlowIllustration";
import { 
  MessageCircle, 
  Search, 
  Rocket, 
  Phone,
  ArrowRight,
  CheckCircle,
  Clock,
  Users,
  Sparkles,
  TrendingUp,
  Calendar,
  FileText
} from "lucide-react";

const CALENDLY_URL = "https://calendly.com/luuk-klikklaar/kennismakingsgesprek?month=2025-12";

const mainSteps = [
  {
    number: "1",
    icon: MessageCircle,
    title: "Laten we kennismaken",
    subtitle: "Een kort gesprek van 15 minuten",
    description: "We beginnen met een vrijblijvend gesprek. Je vertelt over je bedrijf, je doelen en je website. Wij luisteren en kijken of we kunnen helpen.",
    highlights: [
      "Geen verkooppraatje, gewoon een eerlijk gesprek",
      "Je krijgt direct inzicht in wat mogelijk is",
      "Duurt maximaal 15 minuten",
    ],
    visual: {
      icon: Calendar,
      label: "Gesprek ingepland",
      sublabel: "Morgen 10:00",
    },
  },
  {
    number: "2",
    icon: Search,
    title: "We analyseren samen",
    subtitle: "Gratis inzicht in je website",
    description: "Onze AI bekijkt je website grondig: technische aspecten, content, lokale vindbaarheid en meer. We bespreken de kansen en laten zien wat er beter kan.",
    highlights: [
      "Volledige website-analyse",
      "Concrete verbeterpunten",
      "Duidelijke uitleg zonder jargon",
    ],
    visual: {
      icon: FileText,
      label: "Analyse compleet",
      sublabel: "12 verbeterpunten gevonden",
    },
    featured: true,
  },
  {
    number: "3",
    icon: Rocket,
    title: "Jij focust, wij optimaliseren",
    subtitle: "Volledig automatisch",
    description: "Elke week verbeteren wij je website automatisch. Nieuwe titels, betere teksten, technische optimalisaties, jij hoeft niets te doen en ziet de resultaten in je rapport.",
    highlights: [
      "Wekelijkse verbeteringen automatisch doorgevoerd",
      "Geen taken of acties voor jou",
      "Helder wekelijks rapport",
    ],
    visual: {
      icon: TrendingUp,
      label: "Groei deze maand",
      sublabel: "+47% bezoekers",
    },
  },
];

const benefits = [
  {
    icon: Clock,
    title: "Bespaar tijd",
    description: "Geen uren besteden aan SEO-tutorials of ingewikkelde tools",
  },
  {
    icon: Users,
    title: "Persoonlijk contact",
    description: "Geen anonieme software, je hebt altijd een vast aanspreekpunt",
  },
  {
    icon: Sparkles,
    title: "Automatische resultaten",
    description: "Verbeteringen worden zonder jouw tussenkomst doorgevoerd",
  },
  {
    icon: TrendingUp,
    title: "Meetbare groei",
    description: "Duidelijke rapporten die laten zien wat er verbetert",
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
              Hoe het werkt
            </span>
            
            <h1 
              className="text-2xl sm:text-3xl lg:text-display-xl font-bold text-foreground mb-4 lg:mb-6"
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0)' : 'translateY(16px)',
                transition: 'opacity 0.6s ease-out 0.1s, transform 0.6s ease-out 0.1s'
              }}
            >
              Persoonlijk contact,{" "}
              <span className="gradient-text">automatische resultaten</span>
            </h1>
            
            <p 
              className="text-base sm:text-lg lg:text-xl text-muted-foreground mb-6 lg:mb-10"
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0)' : 'translateY(16px)',
                transition: 'opacity 0.6s ease-out 0.2s, transform 0.6s ease-out 0.2s'
              }}
            >
              Geen ingewikkelde dashboards of technische praatjes. Wij nemen alles uit handen, 
              jij focust op je klanten.
            </p>

            <div 
              className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start"
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0)' : 'translateY(16px)',
                transition: 'opacity 0.6s ease-out 0.3s, transform 0.6s ease-out 0.3s'
              }}
            >
              <GradientButton size="lg" className="w-full sm:w-auto" asChild>
                <a href={CALENDLY_URL} target="_blank" rel="noopener noreferrer">
                  <Phone className="w-5 h-5" />
                  Plan een vrijblijvend gesprek
                </a>
              </GradientButton>
              <GradientButton variant="outline" size="lg" className="w-full sm:w-auto" asChild>
                <Link to="/prijzen">
                  Bekijk prijzen
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </GradientButton>
            </div>
          </div>

          <div 
            className="mt-8 lg:mt-0"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
              transition: 'opacity 0.7s ease-out 0.2s, transform 0.7s ease-out 0.2s'
            }}
          >
            <ProcessFlowIllustration />
          </div>
        </div>
      </div>
    </section>
  );
}

function StepsSection() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section ref={ref} className="py-12 lg:py-24 haze-gradient-warm relative overflow-hidden">
      <div className="container px-4 sm:px-6 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-10 lg:mb-20">
          <span 
            className="inline-block text-xs font-semibold text-kk-orange uppercase tracking-widest mb-3"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateY(0)' : 'translateY(12px)',
              transition: 'opacity 0.6s ease-out, transform 0.6s ease-out'
            }}
          >
            3 simpele stappen
          </span>
          <h2 
            className="text-xl sm:text-2xl lg:text-display font-bold text-foreground"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateY(0)' : 'translateY(12px)',
              transition: 'opacity 0.6s ease-out 0.1s, transform 0.6s ease-out 0.1s'
            }}
          >
            Van kennismaking tot{" "}
            <span className="gradient-text">automatische groei</span>
          </h2>
        </div>

        <div className="space-y-10 lg:space-y-24">
          {mainSteps.map((step, index) => {
            const Icon = step.icon;
            const VisualIcon = step.visual.icon;
            const isEven = index % 2 === 1;

            return (
              <div
                key={step.number}
                className={`grid lg:grid-cols-2 gap-6 lg:gap-20 items-center ${isEven ? 'lg:flex-row-reverse' : ''}`}
                style={{ 
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible ? 'translateY(0)' : 'translateY(32px)',
                  transition: 'opacity 0.7s ease-out, transform 0.7s ease-out',
                  transitionDelay: `${index * 150}ms`
                }}
              >
                {/* Content */}
                <div className={isEven ? 'lg:order-2' : ''}>
                  <div className="flex items-center gap-3 mb-4 lg:mb-6">
                    <div className={`w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 rounded-xl lg:rounded-2xl flex items-center justify-center
                      ${step.featured ? 'gradient-cta shadow-glow-orange' : 'bg-kk-orange/10'}`}>
                      <Icon className={`w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7 ${step.featured ? 'text-white' : 'text-kk-orange'}`} />
                    </div>
                    <div className="w-8 h-8 sm:w-9 sm:h-9 lg:w-10 lg:h-10 rounded-full gradient-cta flex items-center justify-center text-white font-bold text-sm lg:text-lg">
                      {step.number}
                    </div>
                  </div>

                  <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-foreground mb-1 lg:mb-2">
                    {step.title}
                  </h3>
                  <p className="text-sm sm:text-base lg:text-lg text-kk-orange font-medium mb-3 lg:mb-4">
                    {step.subtitle}
                  </p>
                  <p className="text-sm sm:text-base text-muted-foreground mb-4 lg:mb-6 leading-relaxed">
                    {step.description}
                  </p>

                  <ul className="space-y-2 lg:space-y-3">
                    {step.highlights.map((highlight) => (
                      <li key={highlight} className="flex items-start gap-2 lg:gap-3">
                        <CheckCircle className="w-4 h-4 lg:w-5 lg:h-5 text-green-500 flex-shrink-0 mt-0.5" />
                        <span className="text-sm sm:text-base text-foreground">{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Visual */}
                <div className={`${isEven ? 'lg:order-1' : ''}`}>
                  <div className={`p-6 lg:p-12 rounded-xl lg:rounded-2xl border transition-all duration-300
                    ${step.featured 
                      ? 'bg-card border-kk-orange/30 shadow-premium-lg' 
                      : 'bg-card border-border shadow-premium-sm'
                    }`}>
                    <div className="flex items-center justify-center mb-4 lg:mb-8">
                      <div className={`w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 rounded-2xl lg:rounded-3xl flex items-center justify-center
                        ${step.featured ? 'gradient-cta' : 'bg-gradient-to-br from-kk-orange/20 to-kk-violet/20'}`}>
                        <VisualIcon className={`w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 ${step.featured ? 'text-white' : 'text-kk-orange'}`} />
                      </div>
                    </div>
                    
                    <div className="text-center">
                      <p className="text-base sm:text-lg lg:text-xl font-semibold text-foreground mb-1">{step.visual.label}</p>
                      <p className="text-sm sm:text-base text-muted-foreground">{step.visual.sublabel}</p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function BenefitsSection() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section ref={ref} className="py-12 lg:py-24 haze-gradient-cool relative overflow-hidden">
      <div className="container px-4 sm:px-6 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-8 lg:mb-16">
          <span 
            className="inline-block text-xs font-semibold text-kk-orange uppercase tracking-widest mb-3"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateY(0)' : 'translateY(12px)',
              transition: 'opacity 0.6s ease-out, transform 0.6s ease-out'
            }}
          >
            Waarom dit werkt
          </span>
          <h2 
            className="text-xl sm:text-2xl lg:text-display font-bold text-foreground"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateY(0)' : 'translateY(12px)',
              transition: 'opacity 0.6s ease-out 0.1s, transform 0.6s ease-out 0.1s'
            }}
          >
            Gebouwd voor{" "}
            <span className="gradient-text">drukke ondernemers</span>
          </h2>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-6">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <div
                key={benefit.title}
                className="p-4 sm:p-5 lg:p-6 bg-card rounded-xl border border-border shadow-premium-sm hover:shadow-premium hover:border-kk-orange/20 hover:-translate-y-1 transition-all duration-300"
                style={{ 
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible ? 'translateY(0)' : 'translateY(16px)',
                  transition: 'opacity 0.5s ease-out, transform 0.5s ease-out, box-shadow 0.3s, border-color 0.3s',
                  transitionDelay: `${index * 75}ms`
                }}
              >
                <div className="w-10 h-10 sm:w-11 sm:h-11 lg:w-12 lg:h-12 rounded-lg lg:rounded-xl bg-kk-orange/10 flex items-center justify-center mb-3 lg:mb-4">
                  <Icon className="w-5 h-5 lg:w-6 lg:h-6 text-kk-orange" />
                </div>
                <h3 className="font-semibold text-foreground mb-1 lg:mb-2 text-sm sm:text-base">{benefit.title}</h3>
                <p className="text-xs sm:text-sm text-muted-foreground">{benefit.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function CTASection() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section ref={ref} className="py-12 lg:py-24">
      <div className="container px-4 sm:px-6">
        <div className="relative rounded-2xl lg:rounded-3xl overflow-hidden">
          <div className="absolute inset-0 gradient-cta" />
          <div className="absolute inset-0 bg-gradient-to-br from-black/10 to-transparent" />

          <div className="absolute top-0 right-0 w-48 lg:w-96 h-48 lg:h-96 bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-32 lg:w-64 h-32 lg:h-64 bg-white/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

          <div className="relative px-6 py-10 sm:px-8 sm:py-12 lg:px-16 lg:py-24 text-center">
            <h2 
              className="text-xl sm:text-2xl lg:text-display-lg font-bold text-white mb-4 lg:mb-6 max-w-2xl mx-auto"
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0)' : 'translateY(16px)',
                transition: 'opacity 0.6s ease-out, transform 0.6s ease-out'
              }}
            >
              Klaar om de eerste stap te zetten?
            </h2>
            
            <p 
              className="text-sm sm:text-base lg:text-lg text-white/90 max-w-xl mx-auto mb-6 lg:mb-10"
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0)' : 'translateY(16px)',
                transition: 'opacity 0.6s ease-out 0.1s, transform 0.6s ease-out 0.1s'
              }}
            >
              Plan een vrijblijvend kennismakingsgesprek. We kijken samen wat we voor jouw website kunnen betekenen.
            </p>

            <div 
              className="flex flex-col sm:flex-row gap-3 justify-center"
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0)' : 'translateY(16px)',
                transition: 'opacity 0.6s ease-out 0.2s, transform 0.6s ease-out 0.2s'
              }}
            >
              <GradientButton 
                size="lg" 
                className="bg-white text-kk-orange hover:bg-white/95 shadow-lg hover:shadow-xl transition-shadow text-sm sm:text-base"
                asChild
              >
                <a href={CALENDLY_URL} target="_blank" rel="noopener noreferrer">
                  <Phone className="w-4 h-4 sm:w-5 sm:h-5" />
                  Plan een vrijblijvend gesprek
                </a>
              </GradientButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

const HowItWorks = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <StepsSection />
        <BenefitsSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default HowItWorks;
