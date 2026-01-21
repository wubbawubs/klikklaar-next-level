import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { GradientButton } from "@/components/ui/GradientButton";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { DeliverablesDemoIllustration } from "@/components/illustrations/DeliverablesDemoIllustration";
import { CTASection } from "@/components/home/CTASection";
import { SEOHead } from "@/components/SEOHead";
import { StructuredData } from "@/components/StructuredData";
import { 
  Check, 
  FileText, 
  Search, 
  MapPin, 
  Zap, 
  Settings, 
  BarChart3,
  Phone,
  ArrowRight,
  Clock,
  TrendingUp,
  Eye
} from "lucide-react";



const deliverableCategories = [
  {
    id: "content",
    icon: FileText,
    title: "Content optimalisatie",
    description: "Teksten die Google én je bezoekers aanspreken",
    items: [
      "Nieuwe H1 & H2 koppen die converteren",
      "Geoptimaliseerde meta-titles voor hogere CTR",
      "Meta-descriptions die bezoekers aantrekken",
      "Verbeterde pagina-structuur",
    ],
    stats: { value: "+47%", label: "Meer clicks" },
    featured: true,
  },
  {
    id: "local",
    icon: MapPin,
    title: "Lokale vindbaarheid",
    description: "Word gevonden door klanten in jouw regio",
    items: [
      "Lokale zoekwoorden strategisch ingebouwd",
      "Plaatsnamen en regio's geoptimaliseerd",
      "Google Mijn Bedrijf signalen versterkt",
      "Lokale schema markup toegevoegd",
    ],
    stats: { value: "3x", label: "Meer lokale bezoekers" },
    featured: false,
  },
  {
    id: "technical",
    icon: Settings,
    title: "Technische verbeteringen",
    description: "Een website die Google begrijpt en waardeert",
    items: [
      "Schema markup (structured data)",
      "Snelheidsoptimalisaties",
      "Mobile-first verbeteringen",
      "Interne linkstructuur geoptimaliseerd",
    ],
    stats: { value: "-57%", label: "Snellere laadtijd" },
    featured: false,
  },
  {
    id: "analysis",
    icon: Search,
    title: "Analyse & strategie",
    description: "Inzicht in wat werkt en wat beter kan",
    items: [
      "Wekelijkse website-analyse",
      "Zoekwoordonderzoek voor jouw branche",
      "Concurrentie-analyse",
      "Kansen identificatie",
    ],
    stats: { value: "24/7", label: "Monitoring" },
    featured: false,
  },
  {
    id: "reporting",
    icon: BarChart3,
    title: "Rapportage & inzicht",
    description: "Duidelijke resultaten, geen jargon",
    items: [
      "Wekelijks rapport in normaal Nederlands",
      "Overzicht van alle verbeteringen",
      "Zichtbaarheidsgroei in cijfers",
      "Persoonlijke aanbevelingen",
    ],
    stats: { value: "100%", label: "Transparant" },
    featured: false,
  },
  {
    id: "automation",
    icon: Zap,
    title: "Automatische uitvoering",
    description: "Wij doen het werk, jij ziet de resultaten",
    items: [
      "Verbeteringen automatisch doorgevoerd",
      "Geen taken of acties voor jou",
      "Continue optimalisatie-cyclus",
      "Proactieve aanbevelingen",
    ],
    stats: { value: "0", label: "Taken voor jou" },
    featured: false,
  },
];

const weeklyTimeline = [
  { day: "Maandag", task: "Website-analyse & prioriteiten bepalen", icon: Search },
  { day: "Dinsdag-Donderdag", task: "Verbeteringen doorvoeren", icon: Settings },
  { day: "Vrijdag", task: "Wekelijks rapport verzonden", icon: BarChart3 },
  { day: "Weekend", task: "Monitoring & voorbereiding", icon: Eye },
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
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-bl from-kk-orange/[0.03] via-transparent to-transparent" />
      </div>

      <div className="container px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <div>
            <span 
              className="inline-block text-xs font-semibold text-kk-orange uppercase tracking-widest mb-4"
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0)' : 'translateY(12px)',
                transition: 'opacity 0.6s ease-out, transform 0.6s ease-out'
              }}
            >
              Wat je krijgt
            </span>
            
            <h1 
              className="text-3xl sm:text-4xl lg:text-5xl xl:text-display-lg font-bold text-foreground mb-4 lg:mb-6"
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0)' : 'translateY(16px)',
                transition: 'opacity 0.6s ease-out 0.1s, transform 0.6s ease-out 0.1s'
              }}
            >
              Concrete resultaten,{" "}
              <span className="gradient-text">elke week opnieuw</span>
            </h1>
            
            <p 
              className="text-base sm:text-lg lg:text-xl text-muted-foreground mb-6 lg:mb-10"
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0)' : 'translateY(16px)',
                transition: 'opacity 0.6s ease-out 0.2s, transform 0.6s ease-out 0.2s'
              }}
            >
              Geen vage beloftes of ingewikkelde rapporten. Je krijgt meetbare verbeteringen aan je website, automatisch, zonder dat jij iets hoeft te doen.
            </p>

            <div 
              className="flex flex-col sm:flex-row gap-3"
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0)' : 'translateY(16px)',
                transition: 'opacity 0.6s ease-out 0.3s, transform 0.6s ease-out 0.3s'
              }}
            >
              <GradientButton size="lg" className="w-full sm:w-auto" asChild>
                <Link to="/contact">
                  <Phone className="w-5 h-5" />
                  Plan een vrijblijvend gesprek
                </Link>
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
            <DeliverablesDemoIllustration />
          </div>
        </div>
      </div>
    </section>
  );
}

function DeliverablesGrid() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section ref={ref} className="py-12 lg:py-24 haze-gradient-warm relative overflow-hidden">
      <div className="container px-4 sm:px-6 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span 
            className="inline-block text-xs font-semibold text-kk-orange uppercase tracking-widest mb-4"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateY(0)' : 'translateY(12px)',
              transition: 'opacity 0.6s ease-out, transform 0.6s ease-out'
            }}
          >
            Alles wat je krijgt
          </span>
          <h2 
            className="text-display-sm lg:text-display font-bold text-foreground"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateY(0)' : 'translateY(12px)',
              transition: 'opacity 0.6s ease-out 0.1s, transform 0.6s ease-out 0.1s'
            }}
          >
            Van analyse tot{" "}
            <span className="gradient-text">automatische resultaten</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {deliverableCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <div
                key={category.id}
                className={`relative p-8 rounded-2xl border transition-all duration-500 group
                  ${category.featured 
                    ? 'bg-card border-kk-orange/30 shadow-premium-lg hover:shadow-glow-orange lg:col-span-1' 
                    : 'bg-card border-border shadow-premium-sm hover:shadow-premium hover:-translate-y-1.5'
                  }`}
                style={{ 
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible ? 'translateY(0)' : 'translateY(24px)',
                  transitionDelay: `${index * 80}ms`
                }}
              >
                {/* Icon */}
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-6 transition-colors
                  ${category.featured ? 'gradient-cta' : 'bg-kk-orange/10 group-hover:bg-kk-orange/20'}`}>
                  <Icon className={`w-6 h-6 ${category.featured ? 'text-white' : 'text-kk-orange'}`} />
                </div>

                {/* Content */}
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  {category.title}
                </h3>
                <p className="text-muted-foreground mb-6">
                  {category.description}
                </p>

                {/* Checklist */}
                <ul className="space-y-3 mb-6">
                  {category.items.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Check className="w-3 h-3 text-green-600" />
                      </div>
                      <span className="text-sm text-foreground">{item}</span>
                    </li>
                  ))}
                </ul>

                {/* Stats badge */}
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-muted/50 border border-border">
                  <TrendingUp className="w-4 h-4 text-kk-orange" />
                  <span className="text-sm font-semibold text-foreground">{category.stats.value}</span>
                  <span className="text-sm text-muted-foreground">{category.stats.label}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function WeeklyProcess() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section ref={ref} className="py-12 lg:py-24 haze-gradient-cool relative overflow-hidden">
      <div className="container px-4 sm:px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - Content */}
          <div>
            <span 
              className="inline-block text-xs font-semibold text-kk-orange uppercase tracking-widest mb-4"
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0)' : 'translateY(12px)',
                transition: 'opacity 0.6s ease-out, transform 0.6s ease-out'
              }}
            >
              Wekelijkse cyclus
            </span>
            <h2 
              className="text-display-sm lg:text-display font-bold text-foreground mb-6"
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0)' : 'translateY(12px)',
                transition: 'opacity 0.6s ease-out 0.1s, transform 0.6s ease-out 0.1s'
              }}
            >
              Elke week dezelfde{" "}
              <span className="gradient-text">betrouwbare aanpak</span>
            </h2>
            <p 
              className="text-lg text-muted-foreground mb-8"
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0)' : 'translateY(12px)',
                transition: 'opacity 0.6s ease-out 0.2s, transform 0.6s ease-out 0.2s'
              }}
            >
              Geen eenmalige actie, maar een doorlopend proces. Elke week analyseren, verbeteren en rapporteren we, zodat je website continu beter wordt.
            </p>

            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Clock className="w-4 h-4 text-kk-orange" />
                <span>Gemiddeld 4-6 verbeteringen per week</span>
              </div>
            </div>
          </div>

          {/* Right - Timeline */}
          <div className="space-y-4">
            {weeklyTimeline.map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.day}
                  className="flex items-center gap-4 p-5 bg-card rounded-xl border border-border shadow-premium-sm hover:shadow-premium hover:border-kk-orange/20 transition-all duration-300"
                  style={{ 
                    opacity: isVisible ? 1 : 0,
                    transform: isVisible ? 'translateX(0)' : 'translateX(20px)',
                    transition: 'opacity 0.5s ease-out, transform 0.5s ease-out, box-shadow 0.3s, border-color 0.3s',
                    transitionDelay: `${index * 100}ms`
                  }}
                >
                  <div className="w-10 h-10 rounded-lg bg-kk-orange/10 flex items-center justify-center flex-shrink-0">
                    <Icon className="w-5 h-5 text-kk-orange" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">{item.day}</p>
                    <p className="text-sm text-muted-foreground">{item.task}</p>
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


const Deliverables = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEOHead 
        title="Dit Krijg Je | Wekelijkse SEO Verbeteringen | KlikKlaar"
        description="Automatische content optimalisatie, technische fixes, lokale vindbaarheid en heldere rapporten. Alles wat je nodig hebt voor meer klanten."
        canonical="https://klikklaar.nl/wat-je-krijgt"
      />
      <StructuredData 
        schema={{
          type: "Service",
          name: "SEO Optimalisatie Diensten",
          description: "Wekelijkse website-analyse, automatische content optimalisatie, lokale vindbaarheid en heldere rapporten.",
          provider: "KlikKlaar",
          areaServed: "Nederland",
        }}
      />
      <Header />
      <main>
        <HeroSection />
        <DeliverablesGrid />
        <WeeklyProcess />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Deliverables;
