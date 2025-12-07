import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { GradientButton } from "@/components/ui/GradientButton";
import { useScrollReveal } from "@/hooks/useScrollReveal";
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
    description: "Elke week verbeteren wij je website automatisch. Nieuwe titels, betere teksten, technische optimalisaties — jij hoeft niets te doen en ziet de resultaten in je rapport.",
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
    description: "Geen anonieme software — je hebt altijd een vast aanspreekpunt",
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
  return (
    <section className="relative pt-32 lg:pt-40 pb-20 lg:pb-24 overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-0 w-1/2 h-full bg-gradient-to-br from-kk-orange/[0.03] via-transparent to-transparent" />
      </div>

      <div className="container">
        <div className="max-w-3xl mx-auto text-center">
          <span className="inline-block text-xs font-semibold text-kk-orange uppercase tracking-widest mb-4 animate-fade-in">
            Hoe het werkt
          </span>
          
          <h1 className="text-display-lg lg:text-display-xl text-foreground mb-6 animate-fade-in animation-delay-100">
            Persoonlijk contact,{" "}
            <span className="gradient-text">automatische resultaten</span>
          </h1>
          
          <p className="text-xl text-muted-foreground mb-10 animate-fade-in animation-delay-200">
            Geen ingewikkelde dashboards of technische praatjes. Wij nemen alles uit handen — 
            jij focust op je klanten.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in animation-delay-300">
            <GradientButton size="lg">
              <Phone className="w-5 h-5" />
              Plan een vrijblijvend gesprek
            </GradientButton>
            <GradientButton variant="outline" size="lg">
              Bekijk prijzen
              <ArrowRight className="w-4 h-4" />
            </GradientButton>
          </div>
        </div>
      </div>
    </section>
  );
}

function StepsSection() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section ref={ref} className="py-24 lg:py-32 haze-gradient-warm relative overflow-hidden">
      <div className="container relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-20">
          <span 
            className="inline-block text-xs font-semibold text-kk-orange uppercase tracking-widest mb-4"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateY(0)' : 'translateY(12px)',
              transition: 'opacity 0.6s ease-out, transform 0.6s ease-out'
            }}
          >
            3 simpele stappen
          </span>
          <h2 
            className="text-display-sm lg:text-display text-foreground"
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

        <div className="space-y-16 lg:space-y-24">
          {mainSteps.map((step, index) => {
            const Icon = step.icon;
            const VisualIcon = step.visual.icon;
            const isEven = index % 2 === 1;

            return (
              <div
                key={step.number}
                className={`grid lg:grid-cols-2 gap-12 lg:gap-20 items-center ${isEven ? 'lg:flex-row-reverse' : ''}`}
                style={{ 
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible ? 'translateY(0)' : 'translateY(32px)',
                  transition: 'opacity 0.7s ease-out, transform 0.7s ease-out',
                  transitionDelay: `${index * 150}ms`
                }}
              >
                {/* Content */}
                <div className={isEven ? 'lg:order-2' : ''}>
                  <div className="flex items-center gap-4 mb-6">
                    <div className={`w-14 h-14 rounded-2xl flex items-center justify-center
                      ${step.featured ? 'gradient-cta shadow-glow-orange' : 'bg-kk-orange/10'}`}>
                      <Icon className={`w-7 h-7 ${step.featured ? 'text-white' : 'text-kk-orange'}`} />
                    </div>
                    <div className="w-10 h-10 rounded-full gradient-cta flex items-center justify-center text-white font-bold text-lg">
                      {step.number}
                    </div>
                  </div>

                  <h3 className="text-2xl lg:text-3xl font-bold text-foreground mb-2">
                    {step.title}
                  </h3>
                  <p className="text-lg text-kk-orange font-medium mb-4">
                    {step.subtitle}
                  </p>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {step.description}
                  </p>

                  <ul className="space-y-3">
                    {step.highlights.map((highlight) => (
                      <li key={highlight} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                        <span className="text-foreground">{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Visual */}
                <div className={`${isEven ? 'lg:order-1' : ''}`}>
                  <div className={`p-8 lg:p-12 rounded-2xl border transition-all duration-300
                    ${step.featured 
                      ? 'bg-card border-kk-orange/30 shadow-premium-lg' 
                      : 'bg-card border-border shadow-premium-sm'
                    }`}>
                    <div className="flex items-center justify-center mb-8">
                      <div className={`w-24 h-24 rounded-3xl flex items-center justify-center
                        ${step.featured ? 'gradient-cta' : 'bg-gradient-to-br from-kk-orange/20 to-kk-violet/20'}`}>
                        <VisualIcon className={`w-12 h-12 ${step.featured ? 'text-white' : 'text-kk-orange'}`} />
                      </div>
                    </div>
                    
                    <div className="text-center">
                      <p className="text-xl font-semibold text-foreground mb-1">{step.visual.label}</p>
                      <p className="text-muted-foreground">{step.visual.sublabel}</p>
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
    <section ref={ref} className="py-24 lg:py-32 haze-gradient-cool relative overflow-hidden">
      <div className="container relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span 
            className="inline-block text-xs font-semibold text-kk-orange uppercase tracking-widest mb-4"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateY(0)' : 'translateY(12px)',
              transition: 'opacity 0.6s ease-out, transform 0.6s ease-out'
            }}
          >
            Waarom dit werkt
          </span>
          <h2 
            className="text-display-sm lg:text-display text-foreground"
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

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <div
                key={benefit.title}
                className="p-6 bg-card rounded-xl border border-border shadow-premium-sm hover:shadow-premium hover:border-kk-orange/20 hover:-translate-y-1 transition-all duration-300"
                style={{ 
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible ? 'translateY(0)' : 'translateY(16px)',
                  transition: 'opacity 0.5s ease-out, transform 0.5s ease-out, box-shadow 0.3s, border-color 0.3s',
                  transitionDelay: `${index * 75}ms`
                }}
              >
                <div className="w-12 h-12 rounded-xl bg-kk-orange/10 flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6 text-kk-orange" />
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

function CTASection() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section ref={ref} className="py-24 lg:py-32">
      <div className="container">
        <div className="relative rounded-3xl overflow-hidden">
          <div className="absolute inset-0 gradient-cta" />
          <div className="absolute inset-0 bg-gradient-to-br from-black/10 to-transparent" />

          <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

          <div className="relative px-8 py-16 lg:px-16 lg:py-24 text-center">
            <h2 
              className="text-display-sm sm:text-display lg:text-display-lg text-white mb-6 max-w-2xl mx-auto"
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0)' : 'translateY(16px)',
                transition: 'opacity 0.6s ease-out, transform 0.6s ease-out'
              }}
            >
              Klaar om de eerste stap te zetten?
            </h2>
            
            <p 
              className="text-lg text-white/90 max-w-xl mx-auto mb-10"
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0)' : 'translateY(16px)',
                transition: 'opacity 0.6s ease-out 0.1s, transform 0.6s ease-out 0.1s'
              }}
            >
              Plan een vrijblijvend kennismakingsgesprek. We kijken samen wat we voor jouw website kunnen betekenen.
            </p>

            <div 
              className="flex flex-col sm:flex-row gap-4 justify-center"
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0)' : 'translateY(16px)',
                transition: 'opacity 0.6s ease-out 0.2s, transform 0.6s ease-out 0.2s'
              }}
            >
              <GradientButton 
                size="xl" 
                className="bg-white text-kk-orange hover:bg-white/95 shadow-lg hover:shadow-xl transition-shadow"
              >
                <Phone className="w-5 h-5" />
                Plan een vrijblijvend gesprek
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
