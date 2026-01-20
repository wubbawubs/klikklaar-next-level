import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { CTASection } from "@/components/home/CTASection";
import { SEOHead } from "@/components/SEOHead";
import { StructuredData } from "@/components/StructuredData";
import { GradientButton } from "@/components/ui/GradientButton";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Link } from "react-router-dom";
import { Phone, Check, MapPin, ChevronRight, Star, TrendingUp } from "lucide-react";
import { useState, useEffect } from "react";
import { IndustryData, industries } from "@/data/industries";
import { LocationData, locations } from "@/data/locations";
import { combos, comboExists } from "@/data/combos";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import * as LucideIcons from "lucide-react";

interface ComboLandingPageProps {
  industry: IndustryData;
  location: LocationData;
}

function ComboHero({ industry, location }: ComboLandingPageProps) {
  const [isVisible, setIsVisible] = useState(false);
  const IconComponent = LucideIcons[industry.icon as keyof typeof LucideIcons] as React.ElementType;

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
            className="flex items-center justify-center gap-2 text-sm text-muted-foreground mb-6 flex-wrap"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateY(0)' : 'translateY(12px)',
              transition: 'opacity 0.5s ease-out, transform 0.5s ease-out'
            }}
          >
            <Link to="/" className="hover:text-foreground transition-colors">Home</Link>
            <ChevronRight className="w-4 h-4" />
            <Link to={`/seo-${industry.slug}`} className="hover:text-foreground transition-colors">{industry.namePlural}</Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-foreground">{location.name}</span>
          </nav>

          <div 
            className="inline-flex items-center gap-2 px-4 py-2 bg-kk-orange/10 rounded-full mb-6"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateY(0)' : 'translateY(12px)',
              transition: 'opacity 0.5s ease-out 0.1s, transform 0.5s ease-out 0.1s'
            }}
          >
            {IconComponent && <IconComponent className="w-4 h-4 text-kk-orange" />}
            <span className="text-sm font-medium text-kk-orange">{industry.name}</span>
            <span className="text-kk-orange/50">•</span>
            <MapPin className="w-4 h-4 text-kk-orange" />
            <span className="text-sm font-medium text-kk-orange">{location.name}</span>
          </div>

          <h1 
            className="text-3xl sm:text-4xl lg:text-5xl xl:text-display-lg font-bold text-foreground mb-6"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateY(0)' : 'translateY(16px)',
              transition: 'opacity 0.6s ease-out 0.15s, transform 0.6s ease-out 0.15s'
            }}
          >
            SEO voor {industry.namePlural} in{" "}
            <span className="gradient-text">{location.name}</span>
          </h1>

          <p 
            className="text-base sm:text-lg lg:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateY(0)' : 'translateY(16px)',
              transition: 'opacity 0.6s ease-out 0.2s, transform 0.6s ease-out 0.2s'
            }}
          >
            Word de best vindbare {industry.name.toLowerCase()} in {location.name}. 
            Automatische SEO zodat klanten uit {location.province} jou vinden, niet je concurrent.
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
              <p className="text-2xl font-bold text-kk-orange">Top 5</p>
              <p className="text-xs text-muted-foreground">Google ranking</p>
            </div>
            <div className="text-center">
              <p className="text-2xl font-bold text-kk-orange">€99</p>
              <p className="text-xs text-muted-foreground">per maand</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ComboPainPoints({ industry, location }: ComboLandingPageProps) {
  const { ref, isVisible } = useScrollReveal();

  const localizedPainPoints = [
    `Klanten in ${location.name} vinden je concurrenten eerder`,
    `Je website trekt weinig bezoekers uit ${location.province}`,
    `Afhankelijk van mond-tot-mond in plaats van Google`,
    `Geen tijd voor marketing naast je werk als ${industry.name.toLowerCase()}`
  ];

  return (
    <section ref={ref} className="py-16 lg:py-24 haze-gradient-warm">
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
            Herkenbaar als {industry.name.toLowerCase()} in {location.name}?
          </h2>
          <p className="text-muted-foreground text-center mb-10">
            Dit horen we van {industry.namePlural.toLowerCase()} in {location.province}
          </p>

          <div className="space-y-4">
            {localizedPainPoints.map((pain, index) => (
              <div 
                key={index}
                className="flex items-start gap-4 p-5 bg-card rounded-xl border border-border"
                style={{
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible ? 'translateX(0)' : 'translateX(-20px)',
                  transition: `opacity 0.5s ease-out ${index * 0.1}s, transform 0.5s ease-out ${index * 0.1}s`
                }}
              >
                <div className="w-6 h-6 rounded-full bg-destructive/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-destructive text-sm">✕</span>
                </div>
                <p className="text-foreground">{pain}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function ComboSolutions({ industry, location }: ComboLandingPageProps) {
  const { ref, isVisible } = useScrollReveal();

  const localizedSolutions = [
    { title: `Top positie in ${location.name}`, description: `Gevonden worden voor '${industry.name.toLowerCase()} ${location.name}' en vergelijkbare zoektermen` },
    { title: "Google Maps dominantie", description: `Bovenaan staan wanneer mensen zoeken naar een ${industry.name.toLowerCase()} in de buurt` },
    { title: `Klanten uit ${location.province}`, description: `Trek precies de klanten aan die in jouw regio zoeken naar jouw diensten` },
    { title: "Automatische optimalisatie", description: "Wij doen alles. Jij focust op je werk, wij zorgen dat je gevonden wordt" }
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
            Dit krijg je als {industry.name.toLowerCase()} in {location.name}
          </h2>
          <p className="text-muted-foreground text-center mb-10">
            Automatische SEO speciaal voor {industry.namePlural.toLowerCase()}
          </p>

          <div className="space-y-4">
            {localizedSolutions.map((solution, index) => (
              <div 
                key={index}
                className="flex items-start gap-4 p-5 bg-card rounded-xl border border-border hover:border-kk-orange/20 hover:shadow-premium transition-all duration-300"
                style={{
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible ? 'translateX(0)' : 'translateX(20px)',
                  transition: `opacity 0.5s ease-out ${index * 0.1}s, transform 0.5s ease-out ${index * 0.1}s`
                }}
              >
                <div className="w-6 h-6 rounded-full bg-kk-orange/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Check className="w-4 h-4 text-kk-orange" />
                </div>
                <div>
                  <p className="font-semibold text-foreground">{solution.title}</p>
                  <p className="text-muted-foreground text-sm mt-1">{solution.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function ComboStats({ industry, location }: ComboLandingPageProps) {
  const { ref, isVisible } = useScrollReveal();

  const stats = [
    { value: "+145%", label: "Meer website bezoekers" },
    { value: "Top 5", label: "Google ranking" },
    { value: "4.2★", label: "Trustpilot score" },
    { value: "€99", label: "Per maand" }
  ];

  return (
    <section ref={ref} className="py-16 lg:py-24 haze-gradient-cool">
      <div className="container px-4 sm:px-6">
        <div 
          className="max-w-4xl mx-auto"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(24px)',
            transition: 'opacity 0.6s ease-out, transform 0.6s ease-out'
          }}
        >
          <h2 className="text-2xl sm:text-3xl lg:text-display font-bold text-foreground text-center mb-10">
            Resultaten voor {industry.namePlural.toLowerCase()} in {location.province}
          </h2>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <div 
                key={index}
                className="text-center p-6 bg-card rounded-xl border border-border"
                style={{
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible ? 'scale(1)' : 'scale(0.95)',
                  transition: `opacity 0.5s ease-out ${index * 0.1}s, transform 0.5s ease-out ${index * 0.1}s`
                }}
              >
                <p className="text-3xl lg:text-4xl font-bold text-kk-orange mb-2">{stat.value}</p>
                <p className="text-sm text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function ComboTestimonial({ industry, location }: ComboLandingPageProps) {
  const { ref, isVisible } = useScrollReveal();

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
          <h2 className="text-2xl sm:text-3xl lg:text-display font-bold text-foreground text-center mb-10">
            {industry.namePlural} in {location.province} gingen je voor
          </h2>

          <div className="p-8 bg-card rounded-2xl border border-border shadow-premium-lg">
            <div className="flex gap-1 mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className={`w-5 h-5 ${i < 4 ? 'text-kk-orange fill-kk-orange' : 'text-kk-orange/30'}`} />
              ))}
            </div>
            
            <p className="text-lg text-foreground mb-6 italic leading-relaxed">
              "Sinds we met KlikKlaar werken, krijgen we veel meer aanvragen uit {location.name} en omgeving. 
              Als {industry.name.toLowerCase()} is het fijn dat ik me kan focussen op mijn werk terwijl zij de vindbaarheid regelen."
            </p>
            
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full gradient-cta flex items-center justify-center text-white font-bold">
                {industry.name.charAt(0)}
              </div>
              <div>
                <p className="font-semibold text-foreground">Tevreden {industry.name.toLowerCase()}</p>
                <p className="text-sm text-muted-foreground">{location.name}, {location.province}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ComboFAQ({ industry, location }: ComboLandingPageProps) {
  const { ref, isVisible } = useScrollReveal();

  const faqs = [
    {
      question: `Werkt SEO voor ${industry.namePlural.toLowerCase()} in ${location.name}?`,
      answer: `Absoluut! Veel mensen in ${location.name} zoeken online naar een ${industry.name.toLowerCase()}. Met automatische SEO word je gevonden voor zoektermen als '${industry.name.toLowerCase()} ${location.name}' en '${industry.name.toLowerCase()} in de buurt'.`
    },
    {
      question: `Hoe snel zie ik resultaten in ${location.name}?`,
      answer: `De eerste verbeteringen zijn vaak binnen 4-6 weken zichtbaar. Voor lokale zoektermen in ${location.name} kan dit zelfs sneller zijn omdat de concurrentie vaak lager is dan landelijk.`
    },
    {
      question: `Wat kost SEO voor een ${industry.name.toLowerCase()} in ${location.name}?`,
      answer: `Onze pakketten starten vanaf €99 per maand. Geen verborgen kosten, geen lange contracten. Je kunt maandelijks opzeggen.`
    },
    {
      question: `Moet ik als ${industry.name.toLowerCase()} technische kennis hebben?`,
      answer: `Nee, helemaal niet. Wij regelen alles: van technische optimalisatie tot content verbetering. Jij ontvangt alleen wekelijks een duidelijk rapport.`
    },
    {
      question: `Werken jullie ook voor ${industry.namePlural.toLowerCase()} buiten ${location.name}?`,
      answer: `Ja! We werken voor ${industry.namePlural.toLowerCase()} door heel ${location.province} en de rest van Nederland. Of je nu in ${location.nearbyAreas.slice(0, 2).join(", ")} of elders zit.`
    }
  ];

  return (
    <section ref={ref} className="py-16 lg:py-24 haze-gradient-warm">
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
            Vragen over SEO voor {industry.namePlural.toLowerCase()} in {location.name}
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

function RelatedPages({ industry, location }: ComboLandingPageProps) {
  const { ref, isVisible } = useScrollReveal();

  // Find other combos for the same industry in different locations
  const sameIndustryOtherLocations = combos
    .filter(c => c.industrySlug === industry.slug && c.locationSlug !== location.slug)
    .slice(0, 5)
    .map(c => {
      const loc = locations.find(l => l.slug === c.locationSlug);
      return loc ? { slug: c.locationSlug, name: loc.name, industrySlug: c.industrySlug } : null;
    })
    .filter(Boolean) as { slug: string; name: string; industrySlug: string }[];

  // Find other combos for the same location with different industries
  const sameLocationOtherIndustries = combos
    .filter(c => c.locationSlug === location.slug && c.industrySlug !== industry.slug)
    .slice(0, 5)
    .map(c => {
      const ind = industries.find(i => i.slug === c.industrySlug);
      return ind ? { slug: c.industrySlug, namePlural: ind.namePlural, locationSlug: c.locationSlug } : null;
    })
    .filter(Boolean) as { slug: string; namePlural: string; locationSlug: string }[];

  // Find nearby areas that have combos
  const nearbyWithCombos = location.nearbyAreas
    .map(area => {
      const nearbyLoc = locations.find(l => l.name.toLowerCase() === area.toLowerCase() || l.slug === area.toLowerCase().replace(/\s+/g, '-'));
      if (nearbyLoc && comboExists(industry.slug, nearbyLoc.slug)) {
        return { slug: nearbyLoc.slug, name: nearbyLoc.name };
      }
      return null;
    })
    .filter(Boolean)
    .slice(0, 3) as { slug: string; name: string }[];

  return (
    <section ref={ref} className="py-16 lg:py-24">
      <div className="container px-4 sm:px-6">
        <div 
          className="max-w-5xl mx-auto"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(24px)',
            transition: 'opacity 0.6s ease-out, transform 0.6s ease-out'
          }}
        >
          <h2 className="text-xl sm:text-2xl font-bold text-foreground text-center mb-8">
            Gerelateerde SEO pagina's
          </h2>
          
          {/* Main navigation links */}
          <div className="grid md:grid-cols-2 gap-4 mb-8">
            <Link
              to={`/seo-${industry.slug}`}
              className="p-5 bg-card border border-border rounded-xl hover:border-kk-orange/30 hover:shadow-premium transition-all duration-300 group"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-kk-orange/10 flex items-center justify-center">
                  <TrendingUp className="w-5 h-5 text-kk-orange" />
                </div>
                <div>
                  <p className="font-semibold text-foreground group-hover:text-kk-orange transition-colors">
                    SEO voor {industry.namePlural}
                  </p>
                  <p className="text-sm text-muted-foreground">Landelijke pagina voor alle {industry.namePlural.toLowerCase()}</p>
                </div>
                <ChevronRight className="w-5 h-5 text-muted-foreground ml-auto group-hover:text-kk-orange group-hover:translate-x-1 transition-all" />
              </div>
            </Link>
            <Link
              to={`/seo-${location.slug}`}
              className="p-5 bg-card border border-border rounded-xl hover:border-kk-orange/30 hover:shadow-premium transition-all duration-300 group"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-kk-violet/10 flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-kk-violet" />
                </div>
                <div>
                  <p className="font-semibold text-foreground group-hover:text-kk-orange transition-colors">
                    SEO in {location.name}
                  </p>
                  <p className="text-sm text-muted-foreground">Alle branches in {location.name}</p>
                </div>
                <ChevronRight className="w-5 h-5 text-muted-foreground ml-auto group-hover:text-kk-orange group-hover:translate-x-1 transition-all" />
              </div>
            </Link>
          </div>

          {/* Same industry, other cities */}
          {sameIndustryOtherLocations.length > 0 && (
            <div className="mb-6">
              <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wide mb-3">
                {industry.namePlural} in andere steden
              </h3>
              <div className="flex flex-wrap gap-2">
                {sameIndustryOtherLocations.map((loc) => (
                  <Link
                    key={loc.slug}
                    to={`/seo-${loc.industrySlug}-${loc.slug}`}
                    className="px-4 py-2 bg-card border border-border rounded-full text-sm text-foreground hover:border-kk-orange/30 hover:shadow-premium-sm transition-all duration-300"
                  >
                    {industry.name} {loc.name}
                  </Link>
                ))}
              </div>
            </div>
          )}

          {/* Same location, other industries */}
          {sameLocationOtherIndustries.length > 0 && (
            <div className="mb-6">
              <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wide mb-3">
                Andere branches in {location.name}
              </h3>
              <div className="flex flex-wrap gap-2">
                {sameLocationOtherIndustries.map((ind) => (
                  <Link
                    key={ind.slug}
                    to={`/seo-${ind.slug}-${ind.locationSlug}`}
                    className="px-4 py-2 bg-card border border-border rounded-full text-sm text-foreground hover:border-kk-orange/30 hover:shadow-premium-sm transition-all duration-300"
                  >
                    {ind.namePlural} {location.name}
                  </Link>
                ))}
              </div>
            </div>
          )}

          {/* Nearby areas with combos */}
          {nearbyWithCombos.length > 0 && (
            <div>
              <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wide mb-3">
                {industry.namePlural} in de buurt
              </h3>
              <div className="flex flex-wrap gap-2">
                {nearbyWithCombos.map((nearby) => (
                  <Link
                    key={nearby.slug}
                    to={`/seo-${industry.slug}-${nearby.slug}`}
                    className="px-4 py-2 bg-card border border-border rounded-full text-sm text-foreground hover:border-kk-orange/30 hover:shadow-premium-sm transition-all duration-300"
                  >
                    {industry.name} {nearby.name}
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

export function ComboLandingPage({ industry, location }: ComboLandingPageProps) {
  const faqSchema = {
    type: "FAQPage" as const,
    questions: [
      {
        question: `Werkt SEO voor ${industry.namePlural.toLowerCase()} in ${location.name}?`,
        answer: `Absoluut! Veel mensen in ${location.name} zoeken online naar een ${industry.name.toLowerCase()}.`
      },
      {
        question: `Hoe snel zie ik resultaten in ${location.name}?`,
        answer: `De eerste verbeteringen zijn vaak binnen 4-6 weken zichtbaar.`
      }
    ]
  };

  const localBusinessSchema = {
    type: "LocalBusiness" as const,
    name: "KlikKlaarSEO",
    description: `SEO voor ${industry.namePlural.toLowerCase()} in ${location.name}, ${location.province}`,
    url: `https://klikklaar.nl/seo-${industry.slug}-${location.slug}`
  };

  const breadcrumbSchema = {
    type: "BreadcrumbList" as const,
    items: [
      { name: "Home", url: "https://klikklaar.nl/" },
      { name: industry.namePlural, url: `https://klikklaar.nl/seo-${industry.slug}` },
      { name: location.name, url: `https://klikklaar.nl/seo-${industry.slug}-${location.slug}` }
    ]
  };

  return (
    <div className="min-h-screen bg-background">
      <SEOHead 
        title={`SEO voor ${industry.namePlural} ${location.name} | Lokale Vindbaarheid | KlikKlaarSEO`}
        description={`Automatische SEO voor ${industry.namePlural.toLowerCase()} in ${location.name}. Word de best vindbare ${industry.name.toLowerCase()} in ${location.province}. Vanaf €99/mnd.`}
        canonical={`https://klikklaar.nl/seo-${industry.slug}-${location.slug}`}
      />
      <StructuredData schema={faqSchema} />
      <StructuredData schema={localBusinessSchema} />
      <StructuredData schema={breadcrumbSchema} />
      <Header />
      <main>
        <ComboHero industry={industry} location={location} />
        <ComboPainPoints industry={industry} location={location} />
        <ComboSolutions industry={industry} location={location} />
        <ComboStats industry={industry} location={location} />
        <ComboTestimonial industry={industry} location={location} />
        <ComboFAQ industry={industry} location={location} />
        <RelatedPages industry={industry} location={location} />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}

export default ComboLandingPage;
