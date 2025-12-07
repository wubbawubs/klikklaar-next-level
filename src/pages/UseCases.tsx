import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { GradientButton } from "@/components/ui/GradientButton";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { 
  Phone,
  ArrowRight,
  Scissors,
  Stethoscope,
  Home,
  Heart,
  Wrench,
  Monitor,
  TrendingUp,
  Users,
  MapPin,
  CheckCircle
} from "lucide-react";

const useCases = [
  {
    id: "kappers",
    icon: Scissors,
    title: "Kappers & Salons",
    description: "Word gevonden door klanten die zoeken naar een kapper in de buurt",
    painPoints: [
      "Nieuwe klanten vinden je niet online",
      "Concurrenten staan hoger in Google",
      "Geen tijd om aan marketing te besteden",
    ],
    results: [
      { value: "+156%", label: "Meer websitebezoekers" },
      { value: "Top 3", label: "In Google voor 'kapper [stad]'" },
    ],
    testimonial: {
      quote: "Ik krijg nu elke week nieuwe klanten via mijn website. Vroeger moest ik alles via social media doen.",
      author: "Lisa van den Berg",
      role: "Haarsalon, Utrecht",
    },
  },
  {
    id: "tandartsen",
    icon: Stethoscope,
    title: "Tandartsen & Praktijken",
    description: "Trek nieuwe patiënten aan die zoeken naar een tandarts",
    painPoints: [
      "Patiënten kiezen de concurrent die hoger staat",
      "Je website wordt niet gevonden",
      "Geen inzicht in wat werkt",
    ],
    results: [
      { value: "+89%", label: "Meer nieuwe patiënten" },
      { value: "#1", label: "Voor 'tandarts [wijk]'" },
    ],
    testimonial: {
      quote: "We hadden maanden een lege stoel. Nu is onze agenda vol dankzij betere online vindbaarheid.",
      author: "Dr. Jansen",
      role: "Tandartspraktijk, Rotterdam",
    },
  },
  {
    id: "makelaars",
    icon: Home,
    title: "Makelaars & Vastgoed",
    description: "Word het eerste aanspreekpunt voor kopers en verkopers in je regio",
    painPoints: [
      "Grote kantoren domineren de zoekresultaten",
      "Lokale vindbaarheid ontbreekt",
      "Website trekt geen leads aan",
    ],
    results: [
      { value: "+234%", label: "Meer waardebepaling aanvragen" },
      { value: "3x", label: "Meer lokale bezoekers" },
    ],
    testimonial: {
      quote: "Eindelijk concurreren we met de grote jongens. Onze lokale vindbaarheid is enorm verbeterd.",
      author: "Mark de Vries",
      role: "Makelaar, Amsterdam-Zuid",
    },
  },
  {
    id: "coaches",
    icon: Heart,
    title: "Coaches & Therapeuten",
    description: "Bereik mensen die hulp zoeken in jouw vakgebied",
    painPoints: [
      "Potentiële klanten vinden je niet",
      "Geen idee hoe SEO werkt",
      "Afhankelijk van mond-tot-mondreclame",
    ],
    results: [
      { value: "+67%", label: "Meer intake-aanvragen" },
      { value: "Top 5", label: "Voor specifieke therapievormen" },
    ],
    testimonial: {
      quote: "Mijn praktijk is nu vol. Ik hoef niet meer actief te werven — klanten vinden mij.",
      author: "Sandra Bakker",
      role: "Fysiotherapeut, Eindhoven",
    },
  },
  {
    id: "aannemers",
    icon: Wrench,
    title: "Aannemers & Vakmensen",
    description: "Word gebeld door klanten die zoeken naar betrouwbare vakmensen",
    painPoints: [
      "Werk komt alleen via mond-tot-mond",
      "Website staat nergens in Google",
      "Concurrenten krijgen alle leads",
    ],
    results: [
      { value: "+312%", label: "Meer offerteaanvragen" },
      { value: "#2", label: "Voor 'loodgieter [stad]'" },
    ],
    testimonial: {
      quote: "Mijn telefoon staat roodgloeiend. Ik moet nu zelfs werk doorverwijzen naar collega's.",
      author: "Pieter Janssen",
      role: "Aannemer, Den Haag",
    },
  },
  {
    id: "it",
    icon: Monitor,
    title: "IT & Webdiensten",
    description: "Word gevonden door bedrijven die zoeken naar IT-ondersteuning",
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
      quote: "We krijgen nu leads van bedrijven die echt op zoek zijn naar onze diensten. Kwaliteit is veel beter.",
      author: "Tom van der Berg",
      role: "IT-dienstverlener, Breda",
    },
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
            Voorbeelden
          </span>
          
          <h1 className="text-display-lg lg:text-display-xl text-foreground mb-6 animate-fade-in animation-delay-100">
            KlikKlaar werkt voor{" "}
            <span className="gradient-text">jouw branche</span>
          </h1>
          
          <p className="text-xl text-muted-foreground mb-10 animate-fade-in animation-delay-200">
            Of je nu kapper, tandarts, coach of aannemer bent — wij helpen lokale ondernemers 
            zoals jij beter gevonden te worden.
          </p>

          <div className="flex flex-wrap justify-center gap-3 animate-fade-in animation-delay-300">
            {useCases.slice(0, 4).map((useCase) => {
              const Icon = useCase.icon;
              return (
                <a 
                  key={useCase.id}
                  href={`#${useCase.id}`}
                  className="inline-flex items-center gap-2 px-4 py-2 bg-card border border-border rounded-full text-sm font-medium text-foreground hover:border-kk-orange/30 hover:shadow-premium-sm transition-all duration-300"
                >
                  <Icon className="w-4 h-4 text-kk-orange" />
                  {useCase.title.split(' ')[0]}
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

function UseCasesGrid() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section ref={ref} className="py-24 lg:py-32 haze-gradient-warm relative overflow-hidden">
      <div className="container relative z-10">
        <div className="space-y-24">
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
                <div className={`grid lg:grid-cols-2 gap-12 lg:gap-20 items-center`}>
                  {/* Content */}
                  <div className={isEven ? 'lg:order-2' : ''}>
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-14 h-14 rounded-2xl bg-kk-orange/10 flex items-center justify-center">
                        <Icon className="w-7 h-7 text-kk-orange" />
                      </div>
                    </div>

                    <h2 className="text-2xl lg:text-3xl font-bold text-foreground mb-4">
                      {useCase.title}
                    </h2>
                    <p className="text-lg text-muted-foreground mb-6">
                      {useCase.description}
                    </p>

                    {/* Pain points */}
                    <div className="mb-8">
                      <p className="text-sm font-semibold text-foreground mb-3">Herkenbaar?</p>
                      <ul className="space-y-2">
                        {useCase.painPoints.map((pain) => (
                          <li key={pain} className="flex items-start gap-3 text-muted-foreground">
                            <span className="text-red-400">•</span>
                            {pain}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Results */}
                    <div className="flex gap-6 mb-8">
                      {useCase.results.map((result) => (
                        <div key={result.label}>
                          <p className="text-2xl font-bold text-kk-orange">{result.value}</p>
                          <p className="text-sm text-muted-foreground">{result.label}</p>
                        </div>
                      ))}
                    </div>

                    <GradientButton size="lg">
                      <Phone className="w-4 h-4" />
                      Start met {useCase.title.split(' ')[0]}
                    </GradientButton>
                  </div>

                  {/* Testimonial card */}
                  <div className={isEven ? 'lg:order-1' : ''}>
                    <div className="p-8 bg-card rounded-2xl border border-border shadow-premium-lg">
                      <div className="flex gap-1 mb-4">
                        {[...Array(5)].map((_, i) => (
                          <TrendingUp key={i} className="w-4 h-4 text-kk-orange" />
                        ))}
                      </div>
                      
                      <p className="text-lg text-foreground mb-6 leading-relaxed italic">
                        "{useCase.testimonial.quote}"
                      </p>
                      
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full gradient-cta flex items-center justify-center text-white font-bold">
                          {useCase.testimonial.author.charAt(0)}
                        </div>
                        <div>
                          <p className="font-semibold text-foreground text-sm">{useCase.testimonial.author}</p>
                          <p className="text-sm text-muted-foreground">{useCase.testimonial.role}</p>
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
    <section ref={ref} className="py-24 lg:py-32 haze-gradient-cool relative overflow-hidden">
      <div className="container relative z-10">
        <div 
          className="max-w-3xl mx-auto text-center"
          style={{ 
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(24px)',
            transition: 'opacity 0.6s ease-out, transform 0.6s ease-out'
          }}
        >
          <span className="inline-block text-xs font-semibold text-kk-orange uppercase tracking-widest mb-4">
            En nog veel meer
          </span>
          <h2 className="text-display-sm lg:text-display text-foreground mb-6">
            Werkt voor{" "}
            <span className="gradient-text">alle lokale ondernemers</span>
          </h2>
          <p className="text-lg text-muted-foreground mb-10">
            Als je klanten uit je regio wilt aantrekken, kunnen we je helpen. 
            Onze aanpak werkt voor elke branche.
          </p>

          <div className="flex flex-wrap justify-center gap-3 mb-10">
            {moreIndustries.map((industry) => (
              <span 
                key={industry}
                className="px-4 py-2 bg-card border border-border rounded-full text-sm text-muted-foreground"
              >
                {industry}
              </span>
            ))}
          </div>

          <GradientButton size="lg">
            <Phone className="w-5 h-5" />
            Bekijk of het werkt voor jouw branche
          </GradientButton>
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
              className={`text-display-sm sm:text-display lg:text-display-lg text-white mb-6 max-w-2xl mx-auto ${
                isVisible ? "animate-fade-in" : "opacity-0"
              }`}
            >
              Klaar om te groeien zoals zij?
            </h2>
            
            <p 
              className={`text-lg text-white/90 max-w-xl mx-auto mb-10 ${
                isVisible ? "animate-fade-in" : "opacity-0"
              }`}
              style={{ animationDelay: "100ms" }}
            >
              Plan een vrijblijvend gesprek. We kijken samen naar jouw situatie en laten zien wat mogelijk is.
            </p>

            <div 
              className={`flex flex-col sm:flex-row gap-4 justify-center ${
                isVisible ? "animate-fade-in" : "opacity-0"
              }`}
              style={{ animationDelay: "200ms" }}
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

const UseCases = () => {
  return (
    <div className="min-h-screen bg-background">
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
