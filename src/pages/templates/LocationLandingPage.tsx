import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { CTASection } from "@/components/home/CTASection";
import { SEOHead } from "@/components/SEOHead";
import { StructuredData } from "@/components/StructuredData";
import { GradientButton } from "@/components/ui/GradientButton";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Link } from "react-router-dom";
import { Phone, MapPin, Users, TrendingUp, Building, ChevronRight, Check, Star } from "lucide-react";
import { useState, useEffect } from "react";
import { LocationData, locations } from "@/data/locations";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface LocationLandingPageProps {
  location: LocationData;
}

function LocationHero({ location }: { location: LocationData }) {
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
          {/* Breadcrumb */}
          <nav 
            className="flex items-center justify-center gap-2 text-sm text-muted-foreground mb-6"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateY(0)' : 'translateY(12px)',
              transition: 'opacity 0.5s ease-out, transform 0.5s ease-out'
            }}
          >
            <Link to="/" className="hover:text-foreground transition-colors">Home</Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-foreground">SEO {location.name}</span>
          </nav>

          <div 
            className="inline-flex items-center gap-2 px-4 py-2 bg-kk-orange/10 rounded-full mb-6"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateY(0)' : 'translateY(12px)',
              transition: 'opacity 0.5s ease-out 0.1s, transform 0.5s ease-out 0.1s'
            }}
          >
            <MapPin className="w-5 h-5 text-kk-orange" />
            <span className="text-sm font-medium text-kk-orange">{location.province}</span>
          </div>

          <h1 
            className="text-3xl sm:text-4xl lg:text-5xl xl:text-display-xl font-bold text-foreground mb-6"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateY(0)' : 'translateY(16px)',
              transition: 'opacity 0.6s ease-out 0.15s, transform 0.6s ease-out 0.15s'
            }}
          >
            SEO Bureau {location.name}{" "}
            <span className="gradient-text">Lokale Vindbaarheid</span>
          </h1>

          <p 
            className="text-base sm:text-lg lg:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateY(0)' : 'translateY(16px)',
              transition: 'opacity 0.6s ease-out 0.2s, transform 0.6s ease-out 0.2s'
            }}
          >
            Word gevonden door klanten uit {location.name} en omgeving. 
            Automatische SEO speciaal voor lokale ondernemers in {location.province}.
          </p>

          <div 
            className="flex flex-col sm:flex-row gap-4 justify-center mb-10"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateY(0)' : 'translateY(16px)',
              transition: 'opacity 0.6s ease-out 0.25s, transform 0.6s ease-out 0.25s'
            }}
          >
            <GradientButton size="lg" asChild>
              <Link to="/contact">
                <Phone className="w-4 h-4" />
                Gratis adviesgesprek
              </Link>
            </GradientButton>
            <GradientButton variant="outline" size="lg" asChild>
              <Link to="/prijzen">
                Bekijk prijzen
              </Link>
            </GradientButton>
          </div>

          {/* Stats bar */}
          <div 
            className="grid grid-cols-3 gap-4 max-w-lg mx-auto"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateY(0)' : 'translateY(16px)',
              transition: 'opacity 0.6s ease-out 0.3s, transform 0.6s ease-out 0.3s'
            }}
          >
            <div className="text-center">
              <p className="text-2xl font-bold text-kk-orange">{location.population}</p>
              <p className="text-xs text-muted-foreground">inwoners</p>
            </div>
            <div className="text-center">
              <p className="text-2xl font-bold text-kk-orange">100+</p>
              <p className="text-xs text-muted-foreground">tevreden klanten</p>
            </div>
            <div className="text-center">
              <p className="text-2xl font-bold text-kk-orange">Top 5</p>
              <p className="text-xs text-muted-foreground">Google rankings</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function LocalBenefits({ location }: { location: LocationData }) {
  const { ref, isVisible } = useScrollReveal();

  const benefits = [
    {
      icon: MapPin,
      title: `Lokale vindbaarheid in ${location.name}`,
      description: `Word gevonden wanneer mensen zoeken naar jouw diensten in ${location.name} en omliggende plaatsen.`
    },
    {
      icon: Users,
      title: "Meer klanten uit jouw regio",
      description: `Trek klanten aan die specifiek zoeken naar bedrijven in ${location.province}. Geen verkeer van de andere kant van het land.`
    },
    {
      icon: Building,
      title: "Google Mijn Bedrijf optimalisatie",
      description: `Verschijn bovenaan in Google Maps voor "${location.name}" zoekopdrachten. Meer bellen, meer routes.`
    },
    {
      icon: TrendingUp,
      title: "Meetbare resultaten",
      description: "Wekelijkse rapportages in begrijpelijk Nederlands. Zie precies hoeveel meer bezoekers je krijgt."
    }
  ];

  return (
    <section ref={ref} className="py-16 lg:py-24 haze-gradient-warm">
      <div className="container px-4 sm:px-6">
        <div 
          className="max-w-4xl mx-auto"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(24px)',
            transition: 'opacity 0.6s ease-out, transform 0.6s ease-out'
          }}
        >
          <h2 className="text-2xl sm:text-3xl lg:text-display font-bold text-foreground text-center mb-4">
            Waarom lokale SEO in {location.name}?
          </h2>
          <p className="text-muted-foreground text-center mb-10 max-w-2xl mx-auto">
            {location.population} inwoners zoeken dagelijks online naar lokale diensten. 
            Zorg dat ze jou vinden.
          </p>

          <div className="grid sm:grid-cols-2 gap-6">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <div 
                  key={index}
                  className="p-6 bg-card rounded-xl border border-border hover:border-kk-orange/20 hover:shadow-premium transition-all duration-300"
                  style={{
                    opacity: isVisible ? 1 : 0,
                    transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
                    transition: `opacity 0.5s ease-out ${index * 0.1}s, transform 0.5s ease-out ${index * 0.1}s`
                  }}
                >
                  <div className="w-12 h-12 rounded-xl bg-kk-orange/10 flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-kk-orange" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">{benefit.title}</h3>
                  <p className="text-muted-foreground text-sm">{benefit.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

function LocalServices({ location }: { location: LocationData }) {
  const { ref, isVisible } = useScrollReveal();

  const services = [
    `SEO audit voor bedrijven in ${location.name}`,
    "Google Mijn Bedrijf optimalisatie",
    "Lokale keyword onderzoek",
    "Technische website optimalisatie",
    "Content optimalisatie",
    "Maandelijkse rapportages",
    "Review management",
    "Lokale linkbuilding"
  ];

  return (
    <section ref={ref} className="py-16 lg:py-24">
      <div className="container px-4 sm:px-6">
        <div 
          className="max-w-3xl mx-auto"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(24px)',
            transition: 'opacity 0.6s ease-out, transform 0.6s ease-out'
          }}
        >
          <h2 className="text-2xl sm:text-3xl lg:text-display font-bold text-foreground text-center mb-4">
            Onze SEO diensten in {location.name}
          </h2>
          <p className="text-muted-foreground text-center mb-10">
            Alles wat je nodig hebt voor lokale vindbaarheid
          </p>

          <div className="grid sm:grid-cols-2 gap-3">
            {services.map((service, index) => (
              <div 
                key={index}
                className="flex items-center gap-3 p-4 bg-card rounded-lg border border-border"
                style={{
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible ? 'translateX(0)' : 'translateX(-10px)',
                  transition: `opacity 0.4s ease-out ${index * 0.05}s, transform 0.4s ease-out ${index * 0.05}s`
                }}
              >
                <Check className="w-5 h-5 text-kk-orange flex-shrink-0" />
                <span className="text-foreground text-sm">{service}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function LocalTestimonial({ location }: { location: LocationData }) {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section ref={ref} className="py-16 lg:py-24 haze-gradient-cool">
      <div className="container px-4 sm:px-6">
        <div 
          className="max-w-3xl mx-auto"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(24px)',
            transition: 'opacity 0.6s ease-out, transform 0.6s ease-out'
          }}
        >
          <h2 className="text-2xl sm:text-3xl lg:text-display font-bold text-foreground text-center mb-10">
            Ondernemers uit {location.province} gingen je voor
          </h2>

          <div className="p-8 bg-card rounded-2xl border border-border shadow-premium-lg">
            <div className="flex gap-1 mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 text-kk-orange fill-kk-orange" />
              ))}
            </div>
            
            <p className="text-lg text-foreground mb-6 italic leading-relaxed">
              "Sinds we met KlikKlaar werken, krijgen we veel meer aanvragen uit {location.name} en omgeving. 
              De rapportages zijn helder en we hoeven er zelf niets voor te doen. Precies wat we zochten!"
            </p>
            
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full gradient-cta flex items-center justify-center text-white font-bold">
                M
              </div>
              <div>
                <p className="font-semibold text-foreground">Lokale ondernemer</p>
                <p className="text-sm text-muted-foreground">{location.name}, {location.province}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function LocationFAQ({ location }: { location: LocationData }) {
  const { ref, isVisible } = useScrollReveal();

  const faqs = [
    {
      question: `Werkt SEO ook voor kleine bedrijven in ${location.name}?`,
      answer: `Absoluut! Juist voor lokale ondernemers in ${location.name} is SEO essentieel. Mensen zoeken dagelijks naar diensten "in de buurt" of "in ${location.name}". Met de juiste optimalisatie word jij gevonden.`
    },
    {
      question: `Hoe snel zie ik resultaten in ${location.name}?`,
      answer: `De meeste klanten zien binnen 4-8 weken de eerste verbeteringen in Google. Voor lokale zoektermen in ${location.name} kan dit zelfs sneller zijn, omdat de concurrentie vaak lager is dan landelijk.`
    },
    {
      question: `Wat kost SEO voor een bedrijf in ${location.name}?`,
      answer: `Onze pakketten starten vanaf €99 per maand. Geen verborgen kosten, geen lange contracten. Je kunt maandelijks opzeggen. Bekijk onze prijzenpagina voor alle opties.`
    },
    {
      question: `Moet ik technische kennis hebben?`,
      answer: `Nee, helemaal niet. Wij regelen alles: van technische optimalisatie tot content verbetering. Jij ontvangt alleen wekelijks een duidelijk rapport in begrijpelijk Nederlands.`
    },
    {
      question: `Werken jullie ook voor bedrijven buiten ${location.name}?`,
      answer: `Ja! We werken voor ondernemers door heel ${location.province} en de rest van Nederland. Of je nu in ${location.nearbyAreas.slice(0, 2).join(", ")} of elders zit, we helpen je graag.`
    }
  ];

  return (
    <section ref={ref} className="py-16 lg:py-24">
      <div className="container px-4 sm:px-6">
        <div 
          className="max-w-3xl mx-auto"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(24px)',
            transition: 'opacity 0.6s ease-out, transform 0.6s ease-out'
          }}
        >
          <h2 className="text-2xl sm:text-3xl lg:text-display font-bold text-foreground text-center mb-4">
            Veelgestelde vragen over SEO in {location.name}
          </h2>
          <p className="text-muted-foreground text-center mb-10">
            Alles wat je wilt weten
          </p>

          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`faq-${index}`}
                className="bg-card border border-border rounded-xl px-6 data-[state=open]:border-kk-orange/20"
              >
                <AccordionTrigger className="text-left text-foreground hover:no-underline py-5">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-5">
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

function NearbyLocations({ location }: { location: LocationData }) {
  const { ref, isVisible } = useScrollReveal();
  
  // Get nearby locations from the locations data
  const nearbyLocationSlugs = location.nearbyAreas.slice(0, 6);
  const nearbyLocations = locations.filter(loc => 
    nearbyLocationSlugs.some(area => 
      loc.name.toLowerCase() === area.toLowerCase() ||
      loc.slug === area.toLowerCase()
    )
  ).slice(0, 4);

  return (
    <section ref={ref} className="py-16 lg:py-24 haze-gradient-warm">
      <div className="container px-4 sm:px-6">
        <div 
          className="max-w-4xl mx-auto text-center"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(24px)',
            transition: 'opacity 0.6s ease-out, transform 0.6s ease-out'
          }}
        >
          <h2 className="text-xl sm:text-2xl font-bold text-foreground mb-6">
            Ook actief in de regio
          </h2>
          <div className="flex flex-wrap justify-center gap-3">
            {nearbyLocations.map((loc) => (
              <Link
                key={loc.slug}
                to={`/seo-${loc.slug}`}
                className="px-4 py-2 bg-card border border-border rounded-full text-sm text-foreground hover:border-kk-orange/30 hover:shadow-premium-sm transition-all duration-300"
              >
                SEO {loc.name}
              </Link>
            ))}
            {location.nearbyAreas.filter(area => !nearbyLocations.find(loc => loc.name.toLowerCase() === area.toLowerCase())).slice(0, 3).map((area) => (
              <span
                key={area}
                className="px-4 py-2 bg-muted/50 border border-border rounded-full text-sm text-muted-foreground"
              >
                {area}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export function LocationLandingPage({ location }: LocationLandingPageProps) {
  const faqSchema = {
    type: "FAQPage" as const,
    questions: [
      {
        question: `Werkt SEO ook voor kleine bedrijven in ${location.name}?`,
        answer: `Absoluut! Juist voor lokale ondernemers in ${location.name} is SEO essentieel.`
      },
      {
        question: `Hoe snel zie ik resultaten in ${location.name}?`,
        answer: `De meeste klanten zien binnen 4-8 weken de eerste verbeteringen in Google.`
      }
    ]
  };

  const localBusinessSchema = {
    type: "LocalBusiness" as const,
    name: "KlikKlaarSEO",
    description: `SEO bureau voor lokale ondernemers in ${location.name}, ${location.province}`,
    url: `https://klikklaar.nl/seo-${location.slug}`
  };

  return (
    <div className="min-h-screen bg-background">
      <SEOHead 
        title={`SEO Bureau ${location.name} | Lokale Vindbaarheid | KlikKlaarSEO`}
        description={`Automatische SEO voor ondernemers in ${location.name}. Word gevonden door klanten uit ${location.province}. Vanaf €99/mnd. Geen technische kennis nodig.`}
        canonical={`https://klikklaar.nl/seo-${location.slug}`}
      />
      <StructuredData schema={faqSchema} />
      <StructuredData schema={localBusinessSchema} />
      <Header />
      <main>
        <LocationHero location={location} />
        <LocalBenefits location={location} />
        <LocalServices location={location} />
        <LocalTestimonial location={location} />
        <LocationFAQ location={location} />
        <NearbyLocations location={location} />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}

export default LocationLandingPage;
