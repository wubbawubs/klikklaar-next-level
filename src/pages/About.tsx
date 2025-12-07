import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { GradientButton } from "@/components/ui/GradientButton";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { useState, useEffect } from "react";
import { 
  Phone,
  Heart,
  Target,
  Users,
  Lightbulb,
  Shield,
  ArrowRight
} from "lucide-react";

const values = [
  {
    icon: Heart,
    title: "Eerlijk ondernemen",
    description: "Geen verborgen kosten, geen kleine lettertjes. Wat we beloven, maken we waar.",
  },
  {
    icon: Target,
    title: "Resultaatgericht",
    description: "We focussen op wat telt: meer klanten uit je regio. Geen metrics voor de show.",
  },
  {
    icon: Users,
    title: "Persoonlijk contact",
    description: "Je hebt altijd een vast aanspreekpunt. Geen anonieme support-tickets.",
  },
  {
    icon: Lightbulb,
    title: "Simpel houden",
    description: "Geen jargon, geen ingewikkelde dashboards. Wij maken SEO begrijpelijk.",
  },
];

const stats = [
  { value: "100+", label: "Tevreden klanten" },
  { value: "47%", label: "Gem. groei bezoekers" },
  { value: "4.9", label: "Beoordeling" },
  { value: "2023", label: "Opgericht" },
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
          <div>
            <span 
              className="inline-block text-xs font-semibold text-kk-orange uppercase tracking-widest mb-4"
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0)' : 'translateY(12px)',
                transition: 'opacity 0.6s ease-out, transform 0.6s ease-out'
              }}
            >
              Over ons
            </span>
            
            <h1 
              className="text-2xl sm:text-3xl lg:text-display-xl text-foreground mb-4 lg:mb-6"
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0)' : 'translateY(16px)',
                transition: 'opacity 0.6s ease-out 0.1s, transform 0.6s ease-out 0.1s'
              }}
            >
              Gemaakt voor ondernemers,{" "}
              <span className="gradient-text">door ondernemers</span>
            </h1>
            
            <p 
              className="text-base sm:text-lg lg:text-xl text-muted-foreground mb-6 lg:mb-8"
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0)' : 'translateY(16px)',
                transition: 'opacity 0.6s ease-out 0.2s, transform 0.6s ease-out 0.2s'
              }}
            >
              We weten hoe het is om een bedrijf te runnen. Daarom bouwen we een dienst 
              die wél werkt voor drukke ondernemers — zonder gedoe.
            </p>

            <div 
              className="flex flex-col sm:flex-row gap-3"
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0)' : 'translateY(16px)',
                transition: 'opacity 0.6s ease-out 0.3s, transform 0.6s ease-out 0.3s'
              }}
            >
              <GradientButton size="lg" className="w-full sm:w-auto">
                <Phone className="w-5 h-5" />
                Laten we kennismaken
              </GradientButton>
            </div>
          </div>

          {/* Stats grid */}
          <div 
            className="grid grid-cols-2 gap-4"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
              transition: 'opacity 0.7s ease-out 0.2s, transform 0.7s ease-out 0.2s'
            }}
          >
            {stats.map((stat, index) => (
              <div 
                key={stat.label}
                className="p-6 bg-card rounded-xl border border-border shadow-premium-sm hover:shadow-premium hover:border-kk-orange/20 hover:-translate-y-1 transition-all duration-300 text-center"
              >
                <p className="text-3xl font-bold text-foreground mb-1">{stat.value}</p>
                <p className="text-sm text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function StorySection() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section ref={ref} className="py-24 lg:py-32 haze-gradient-warm relative overflow-hidden">
      <div className="container relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image placeholder */}
          <div 
            className="order-2 lg:order-1"
            style={{ 
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateX(0)' : 'translateX(-20px)',
              transition: 'opacity 0.7s ease-out, transform 0.7s ease-out'
            }}
          >
            <div className="aspect-[4/3] rounded-2xl bg-gradient-to-br from-kk-orange/20 to-kk-violet/20 border border-border shadow-premium-lg flex items-center justify-center">
              <div className="text-center p-8">
                <div className="w-24 h-24 rounded-full gradient-cta mx-auto mb-6 flex items-center justify-center">
                  <Users className="w-12 h-12 text-white" />
                </div>
                <p className="text-xl font-semibold text-foreground">Het KlikKlaar Team</p>
                <p className="text-muted-foreground">Passie voor lokale ondernemers</p>
              </div>
            </div>
          </div>

          {/* Content */}
          <div 
            className="order-1 lg:order-2"
            style={{ 
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateX(0)' : 'translateX(20px)',
              transition: 'opacity 0.7s ease-out 0.15s, transform 0.7s ease-out 0.15s'
            }}
          >
            <span className="inline-block text-xs font-semibold text-kk-orange uppercase tracking-widest mb-4">
              Ons verhaal
            </span>
            <h2 className="text-display-sm lg:text-display text-foreground mb-6">
              Waarom we{" "}
              <span className="gradient-text">KlikKlaar</span> begonnen
            </h2>
            
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Als ondernemer ken je het vast: je weet dat je website beter gevonden moet worden, 
                maar waar begin je? SEO voelt als een raadsel, bureaus zijn duur en leveren vaak 
                weinig concreets.
              </p>
              <p>
                Wij geloofden dat het anders kon. Een dienst die écht werkt voor lokale ondernemers. 
                Geen ingewikkelde dashboards of technische praatjes — gewoon resultaat.
              </p>
              <p>
                Daarom startten we KlikKlaar. Een team van SEO-specialisten en ondernemers die 
                begrijpen wat je nodig hebt. Wij doen het werk, jij ziet de resultaten.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ValuesSection() {
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
            Onze waarden
          </span>
          <h2 
            className="text-display-sm lg:text-display text-foreground"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateY(0)' : 'translateY(12px)',
              transition: 'opacity 0.6s ease-out 0.1s, transform 0.6s ease-out 0.1s'
            }}
          >
            Waar we voor{" "}
            <span className="gradient-text">staan</span>
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value, index) => {
            const Icon = value.icon;
            return (
              <div
                key={value.title}
                className="p-6 bg-card rounded-xl border border-border shadow-premium-sm hover:shadow-premium hover:border-kk-orange/20 hover:-translate-y-1 transition-all duration-300 text-center"
                style={{ 
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible ? 'translateY(0)' : 'translateY(16px)',
                  transition: 'opacity 0.5s ease-out, transform 0.5s ease-out, box-shadow 0.3s, border-color 0.3s',
                  transitionDelay: `${index * 75}ms`
                }}
              >
                <div className="w-14 h-14 rounded-xl bg-kk-orange/10 flex items-center justify-center mx-auto mb-4">
                  <Icon className="w-7 h-7 text-kk-orange" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">{value.title}</h3>
                <p className="text-sm text-muted-foreground">{value.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function MissionSection() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section ref={ref} className="py-24 lg:py-32 bg-background">
      <div className="container">
        <div 
          className="max-w-3xl mx-auto text-center p-12 bg-card rounded-2xl border border-border shadow-premium-lg"
          style={{ 
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(24px)',
            transition: 'opacity 0.6s ease-out, transform 0.6s ease-out'
          }}
        >
          <div className="w-16 h-16 rounded-2xl gradient-cta flex items-center justify-center mx-auto mb-6">
            <Shield className="w-8 h-8 text-white" />
          </div>
          
          <h2 className="text-display-sm lg:text-display text-foreground mb-4">
            Onze missie
          </h2>
          
          <p className="text-xl text-muted-foreground leading-relaxed">
            Elke lokale ondernemer verdient een website die werkt. Wij maken SEO toegankelijk, 
            begrijpelijk en betaalbaar — zodat jij kunt focussen op waar je goed in bent.
          </p>
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
              Wil je samenwerken?
            </h2>
            
            <p 
              className="text-lg text-white/90 max-w-xl mx-auto mb-10"
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0)' : 'translateY(16px)',
                transition: 'opacity 0.6s ease-out 0.1s, transform 0.6s ease-out 0.1s'
              }}
            >
              We zijn altijd benieuwd naar nieuwe ondernemers. Plan een vrijblijvend gesprek 
              en ontdek wat we voor jou kunnen betekenen.
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
                Neem contact op
              </GradientButton>
              <GradientButton 
                variant="outline" 
                size="lg"
                className="border-white/30 text-white hover:bg-white/10 backdrop-blur-sm"
              >
                Bekijk onze aanpak
                <ArrowRight className="w-4 h-4" />
              </GradientButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <StorySection />
        <ValuesSection />
        <MissionSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default About;
