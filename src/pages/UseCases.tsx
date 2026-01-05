import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { GradientButton } from "@/components/ui/GradientButton";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { IndustryGridIllustration } from "@/components/illustrations/IndustryGridIllustration";
import { CTASection } from "@/components/home/CTASection";
import { SEOHead } from "@/components/SEOHead";
import { StructuredData } from "@/components/StructuredData";
import { 
  Phone,
  Scissors,
  Stethoscope,
  Heart,
  Wrench,
  Monitor,
  TrendingUp
} from "lucide-react";

const useCases = [
  {
    id: "coaching",
    icon: Heart,
    title: "Coaching en PT",
    description: "Bereik mensen die hulp zoeken in jouw vakgebied",
    painPoints: [
      "Potentiële klanten vinden je niet",
      "Geen idee hoe SEO werkt",
      "Afhankelijk van mond-tot-mondreclame",
    ],
    results: [
      { value: "+67%", label: "Meer intake-aanvragen" },
      { value: "Top 5", label: "Voor specifieke diensten" },
    ],
    testimonial: {
      quote: "Service is echt on point en ze denken enorm mee in hoe alles beter te maken. Kan ze absoluut aanraden!",
      author: "Desley Baars",
      role: "DYBS Coaching",
    },
  },
  {
    id: "consulting",
    icon: Monitor,
    title: "Consulting & Advies",
    description: "Word gevonden door bedrijven die zoeken naar expertise",
    painPoints: [
      "B2B klanten zoeken online naar oplossingen",
      "Je website converteert niet",
      "Geen lokale vindbaarheid",
    ],
    results: [
      { value: "+178%", label: "Meer qualified leads" },
      { value: "4x", label: "Hogere conversie" },
    ],
    testimonial: {
      quote: "Super club! Een poosje terug contact gekregen met KlikKlaar. Mooie club en maken hun woorden waar. Veel gezien in de markt maar niet voor deze prijs met deze kwaliteit.",
      author: "Ben Commandeur",
      role: "Nieuw Marketing",
    },
  },
  {
    id: "marketing",
    icon: TrendingUp,
    title: "Marketing & Bureaus",
    description: "Laat je bureau gevonden worden door potentiële klanten",
    painPoints: [
      "Concurrenten staan hoger in Google",
      "Geen tijd om aan eigen marketing te besteden",
      "Website trekt geen leads aan",
    ],
    results: [
      { value: "+156%", label: "Meer websitebezoekers" },
      { value: "Top 3", label: "In Google voor relevante zoektermen" },
    ],
    testimonial: {
      quote: "De naam doet zijn eer aan want alles was zo ingericht en ik hoef er zelf bijna niks meer aan te doen. Zeer tevreden!",
      author: "Dean Droste",
      role: "Droste Consulting",
    },
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
              className="inline-block text-xs font-semibold text-kk-orange uppercase tracking-widest mb-3"
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0)' : 'translateY(12px)',
                transition: 'opacity 0.6s ease-out, transform 0.6s ease-out'
              }}
            >
              Voorbeelden
            </span>
            
            <h1 
              className="text-3xl sm:text-4xl lg:text-5xl xl:text-display-lg font-bold text-foreground mb-4 lg:mb-6"
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0)' : 'translateY(16px)',
                transition: 'opacity 0.6s ease-out 0.1s, transform 0.6s ease-out 0.1s'
              }}
            >
              KlikKlaar werkt voor{" "}
              <span className="gradient-text">jouw branche</span>
            </h1>
            
            <p 
              className="text-base sm:text-lg lg:text-xl text-muted-foreground mb-6 lg:mb-10"
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0)' : 'translateY(16px)',
                transition: 'opacity 0.6s ease-out 0.2s, transform 0.6s ease-out 0.2s'
              }}
            >
              Of je nu kapper, tandarts, coach of aannemer bent, wij helpen lokale ondernemers 
              zoals jij beter gevonden te worden.
            </p>

            <div 
              className="flex flex-wrap justify-center lg:justify-start gap-2 sm:gap-3"
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0)' : 'translateY(16px)',
                transition: 'opacity 0.6s ease-out 0.3s, transform 0.6s ease-out 0.3s'
              }}
            >
              {useCases.slice(0, 4).map((useCase) => {
                const Icon = useCase.icon;
                return (
                  <a 
                    key={useCase.id}
                    href={`#${useCase.id}`}
                    className="inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-1.5 sm:py-2 bg-card border border-border rounded-full text-xs sm:text-sm font-medium text-foreground hover:border-kk-orange/30 hover:shadow-premium-sm transition-all duration-300"
                  >
                    <Icon className="w-3 h-3 sm:w-4 sm:h-4 text-kk-orange" />
                    {useCase.title.split(' ')[0]}
                  </a>
                );
              })}
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
            <IndustryGridIllustration />
          </div>
        </div>
      </div>
    </section>
  );
}

function UseCasesGrid() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section ref={ref} className="py-12 lg:py-24 haze-gradient-warm relative overflow-hidden">
      <div className="container px-4 sm:px-6 relative z-10">
        <div className="space-y-12 lg:space-y-24">
          {useCases.map((useCase, index) => {
            const Icon = useCase.icon;
            const isEven = index % 2 === 1;

            return (
              <div
                id={useCase.id}
                key={useCase.id}
                className="scroll-mt-24"
                style={{ 
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible ? 'translateY(0)' : 'translateY(32px)',
                  transition: 'opacity 0.7s ease-out, transform 0.7s ease-out',
                  transitionDelay: `${Math.min(index * 100, 300)}ms`
                }}
              >
              <div className={`grid lg:grid-cols-2 gap-6 lg:gap-20 items-center`}>
                  {/* Content */}
                  <div className={isEven ? 'lg:order-2' : ''}>
                    <div className="flex items-center gap-3 mb-4 lg:mb-6">
                      <div className="w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 rounded-xl lg:rounded-2xl bg-kk-orange/10 flex items-center justify-center">
                        <Icon className="w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7 text-kk-orange" />
                      </div>
                    </div>

                    <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-foreground mb-2 lg:mb-4">
                      {useCase.title}
                    </h2>
                    <p className="text-sm sm:text-base lg:text-lg text-muted-foreground mb-4 lg:mb-6">
                      {useCase.description}
                    </p>

                    {/* Pain points */}
                    <div className="mb-6 lg:mb-8">
                      <p className="text-xs sm:text-sm font-semibold text-foreground mb-2 lg:mb-3">Herkenbaar?</p>
                      <ul className="space-y-1.5 lg:space-y-2">
                        {useCase.painPoints.map((pain) => (
                          <li key={pain} className="flex items-start gap-2 lg:gap-3 text-sm text-muted-foreground">
                            <span className="text-red-400">•</span>
                            {pain}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Results */}
                    <div className="flex gap-4 lg:gap-6 mb-6 lg:mb-8">
                      {useCase.results.map((result) => (
                        <div key={result.label}>
                          <p className="text-xl sm:text-2xl font-bold text-kk-orange">{result.value}</p>
                          <p className="text-xs sm:text-sm text-muted-foreground">{result.label}</p>
                        </div>
                      ))}
                    </div>

                    <GradientButton size="lg" className="text-sm sm:text-base" asChild>
                      <Link to="/contact">
                        <Phone className="w-4 h-4" />
                        Start met {useCase.title.split(' ')[0]}
                      </Link>
                    </GradientButton>
                  </div>

                  {/* Testimonial card */}
                  <div className={isEven ? 'lg:order-1' : ''}>
                    <div className="p-5 sm:p-6 lg:p-8 bg-card rounded-xl lg:rounded-2xl border border-border shadow-premium-lg">
                      <div className="flex gap-1 mb-3 lg:mb-4">
                        {[...Array(5)].map((_, i) => (
                          <TrendingUp key={i} className="w-3 h-3 sm:w-4 sm:h-4 text-kk-orange" />
                        ))}
                      </div>
                      
                      <p className="text-sm sm:text-base lg:text-lg text-foreground mb-4 lg:mb-6 leading-relaxed italic">
                        "{useCase.testimonial.quote}"
                      </p>
                      
                      <div className="flex items-center gap-2 lg:gap-3">
                        <div className="w-8 h-8 lg:w-10 lg:h-10 rounded-full gradient-cta flex items-center justify-center text-white font-bold text-xs lg:text-base">
                          {useCase.testimonial.author.charAt(0)}
                        </div>
                        <div>
                          <p className="font-semibold text-foreground text-xs sm:text-sm">{useCase.testimonial.author}</p>
                          <p className="text-xs sm:text-sm text-muted-foreground">{useCase.testimonial.role}</p>
                        </div>
                      </div>
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

function AllIndustriesSection() {
  const { ref, isVisible } = useScrollReveal();

  const moreIndustries = [
    "Restaurants", "Horecabedrijven", "Advocaten", "Accountants", 
    "Fotografen", "Sportscholen", "Winkels", "Autobedrijven",
    "Schoonmaakdiensten", "Tuiniers", "Schilders", "Elektriciens"
  ];

  return (
    <section ref={ref} className="py-12 lg:py-24 haze-gradient-cool relative overflow-hidden">
      <div className="container px-4 sm:px-6 relative z-10">
        <div 
          className="max-w-3xl mx-auto text-center"
          style={{ 
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(24px)',
            transition: 'opacity 0.6s ease-out, transform 0.6s ease-out'
          }}
        >
          <span className="inline-block text-xs font-semibold text-kk-orange uppercase tracking-widest mb-3">
            En nog veel meer
          </span>
          <h2 className="text-xl sm:text-2xl lg:text-display font-bold text-foreground mb-4 lg:mb-6">
            Werkt voor{" "}
            <span className="gradient-text">alle lokale ondernemers</span>
          </h2>
          <p className="text-sm sm:text-base lg:text-lg text-muted-foreground mb-6 lg:mb-10">
            Als je klanten uit je regio wilt aantrekken, kunnen we je helpen. 
            Onze aanpak werkt voor elke branche.
          </p>

          <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-6 lg:mb-10">
            {moreIndustries.map((industry) => (
              <span 
                key={industry}
                className="px-3 sm:px-4 py-1.5 sm:py-2 bg-card border border-border rounded-full text-xs sm:text-sm text-muted-foreground"
              >
                {industry}
              </span>
            ))}
          </div>

          <GradientButton size="lg" className="text-sm sm:text-base" asChild>
            <Link to="/contact">
              <Phone className="w-4 h-4 sm:w-5 sm:h-5" />
              Bekijk of het werkt voor jouw branche
            </Link>
          </GradientButton>
        </div>
      </div>
    </section>
  );
}


const UseCases = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEOHead 
        title="Voorbeelden | KlikKlaar - SEO Resultaten per Branche"
        description="Bekijk hoe KlikKlaar werkt voor coaches, consultants, marketeers en meer. Concrete resultaten en testimonials van lokale ondernemers."
        canonical="https://klikklaar.nl/voorbeelden"
      />
      <StructuredData 
        schema={{
          type: "WebPage",
          name: "Voorbeelden per Branche - KlikKlaar",
          description: "Bekijk hoe KlikKlaar werkt voor coaches, consultants, marketeers en meer.",
          url: "https://klikklaar.nl/voorbeelden",
        }}
      />
      <Header />
      <main>
        <HeroSection />
        <UseCasesGrid />
        <AllIndustriesSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default UseCases;
