import { useScrollReveal } from "@/hooks/useScrollReveal";
import { TrendingUp, Calendar, Target, Award, ExternalLink, CheckCircle2, ArrowRight, Building, Users, MapPin } from "lucide-react";
import { LocationData } from "@/data/locations";

interface LocationProofBlockProps {
  location: LocationData;
}

// Timeline milestones based on tier
function getTimeline(tier: 1 | 2 | 3) {
  const baseTimeline = [
    { week: "Week 1-2", milestone: "Volledige SEO-audit en optimalisatieplan", icon: Target },
    { week: "Week 3-4", milestone: "Technische optimalisaties + GMB setup", icon: CheckCircle2 },
    { week: "Maand 2", milestone: "Eerste ranking-verbeteringen zichtbaar", icon: TrendingUp },
    { week: "Maand 3-4", milestone: "Significante toename in lokaal verkeer", icon: Award }
  ];
  
  if (tier === 3) {
    baseTimeline[2].week = "Week 4-6";
    baseTimeline[3].week = "Maand 2-3";
  } else if (tier === 1) {
    baseTimeline[2].week = "Maand 2-3";
    baseTimeline[3].week = "Maand 4-6";
  }
  
  return baseTimeline;
}

// Get location-specific case study data
function getLocationProofData(tier: 1 | 2 | 3, locationName: string) {
  const tierData = {
    1: {
      caseTitle: `Lokaal bedrijf in grote stad`,
      beforeMetric: "Pagina 3-4 in Google",
      afterMetric: "Top 5 positie",
      improvement: "+178%",
      timeframe: "4-5 maanden",
      quote: `Meer concurrentie betekent ook meer potentiële klanten`,
      keyResult: "meer organisch verkeer",
      marketContext: "Hoge concurrentie, groot bereik"
    },
    2: {
      caseTitle: `Ondernemer in middelgrote stad`,
      beforeMetric: "Niet op pagina 1",
      afterMetric: "Top 3 lokaal",
      improvement: "+215%",
      timeframe: "3-4 maanden",
      quote: `Perfecte balans tussen concurrentie en mogelijkheden`,
      keyResult: "meer leads",
      marketContext: "Gemiddelde concurrentie, gericht bereik"
    },
    3: {
      caseTitle: `Lokale ondernemer in kleinere gemeente`,
      beforeMetric: "Beperkte online aanwezigheid",
      afterMetric: "Dominante lokale positie",
      improvement: "+289%",
      timeframe: "6-8 weken",
      quote: `Snel resultaat door lagere concurrentie`,
      keyResult: "meer directe aanvragen",
      marketContext: "Lage concurrentie, snelle resultaten"
    }
  };
  
  return tierData[tier];
}

export function LocationProofBlock({ location }: LocationProofBlockProps) {
  const { ref, isVisible } = useScrollReveal();
  const proofData = getLocationProofData(location.tier, location.name);
  const timeline = getTimeline(location.tier);

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
          {/* Section Header */}
          <div className="text-center mb-12">
            <span className="inline-flex items-center gap-2 px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm font-medium mb-4">
              <TrendingUp className="w-4 h-4" />
              Bewezen resultaten
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-display font-bold text-foreground mb-4">
              Concrete resultaten in {location.name}
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Geen beloftes, maar meetbare verbeteringen. Dit is wat lokale ondernemers 
              in {location.province} kunnen verwachten.
            </p>
          </div>

          {/* Market Context Card */}
          <div 
            className="mb-8 p-5 bg-muted/30 rounded-xl border border-border"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
              transition: 'opacity 0.5s ease-out 0.05s, transform 0.5s ease-out 0.05s'
            }}
          >
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-kk-orange/10 flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-kk-orange" />
                </div>
                <div>
                  <p className="font-semibold text-foreground">{location.name}, {location.province}</p>
                  <p className="text-sm text-muted-foreground">{location.population} inwoners • Tier {location.tier} markt</p>
                </div>
              </div>
              <div className="sm:ml-auto text-sm">
                <span className="px-3 py-1 bg-card border border-border rounded-full text-muted-foreground">
                  {proofData.marketContext}
                </span>
              </div>
            </div>
          </div>

          {/* Mini Case Study Card */}
          <div 
            className="mb-12 p-6 lg:p-8 bg-card rounded-2xl border border-border shadow-premium"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
              transition: 'opacity 0.5s ease-out 0.1s, transform 0.5s ease-out 0.1s'
            }}
          >
            <div className="flex flex-col lg:flex-row lg:items-center gap-6 lg:gap-10">
              {/* Case Header */}
              <div className="flex-1">
                <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                  <Calendar className="w-4 h-4" />
                  <span>Typisch resultaat: {proofData.caseTitle}</span>
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">
                  {proofData.improvement} {proofData.keyResult}
                </h3>
                <p className="text-muted-foreground italic mb-4">
                  "{proofData.quote}"
                </p>
                <div className="text-sm text-muted-foreground">
                  Resultaat bereikt in <span className="font-semibold text-foreground">{proofData.timeframe}</span>
                </div>
              </div>

              {/* Before/After Stats */}
              <div className="flex gap-4 lg:gap-6">
                <div className="flex-1 p-4 bg-muted/50 rounded-xl text-center min-w-[120px]">
                  <p className="text-xs text-muted-foreground uppercase tracking-wide mb-1">Voor</p>
                  <p className="text-sm font-medium text-foreground">{proofData.beforeMetric}</p>
                </div>
                <div className="flex items-center">
                  <ArrowRight className="w-5 h-5 text-kk-orange" />
                </div>
                <div className="flex-1 p-4 bg-kk-orange/10 rounded-xl text-center min-w-[120px]">
                  <p className="text-xs text-kk-orange uppercase tracking-wide mb-1">Na</p>
                  <p className="text-sm font-bold text-kk-orange">{proofData.afterMetric}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Results Timeline */}
          <div className="mb-12">
            <h3 className="text-lg font-semibold text-foreground text-center mb-6">
              Wat je kunt verwachten als ondernemer in {location.name}
            </h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {timeline.map((item, index) => {
                const Icon = item.icon;
                return (
                  <div 
                    key={index}
                    className="p-4 bg-card rounded-xl border border-border text-center"
                    style={{
                      opacity: isVisible ? 1 : 0,
                      transform: isVisible ? 'translateY(0)' : 'translateY(15px)',
                      transition: `opacity 0.4s ease-out ${0.2 + index * 0.1}s, transform 0.4s ease-out ${0.2 + index * 0.1}s`
                    }}
                  >
                    <div className="w-10 h-10 mx-auto mb-3 rounded-full bg-kk-orange/10 flex items-center justify-center">
                      <Icon className="w-5 h-5 text-kk-orange" />
                    </div>
                    <p className="text-sm font-semibold text-foreground mb-1">{item.week}</p>
                    <p className="text-xs text-muted-foreground">{item.milestone}</p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Key Results Grid */}
          <div 
            className="grid sm:grid-cols-3 gap-4 mb-10"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
              transition: 'opacity 0.5s ease-out 0.3s, transform 0.5s ease-out 0.3s'
            }}
          >
            <div className="p-5 bg-card rounded-xl border border-border text-center">
              <p className="text-2xl lg:text-3xl font-bold text-kk-orange mb-1">+145%</p>
              <p className="text-sm text-muted-foreground">Gemiddelde toename organisch verkeer</p>
            </div>
            <div className="p-5 bg-card rounded-xl border border-border text-center">
              <p className="text-2xl lg:text-3xl font-bold text-kk-orange mb-1">Top 5</p>
              <p className="text-sm text-muted-foreground">Gemiddelde ranking na 4 maanden</p>
            </div>
            <div className="p-5 bg-card rounded-xl border border-border text-center">
              <p className="text-2xl lg:text-3xl font-bold text-kk-orange mb-1">93%</p>
              <p className="text-sm text-muted-foreground">Klanten ziet verbetering binnen 8 weken</p>
            </div>
          </div>

          {/* Authority Link - External to Google Search Central */}
          <div 
            className="p-4 bg-muted/30 rounded-xl border border-border flex flex-col sm:flex-row items-start sm:items-center gap-3"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateY(0)' : 'translateY(15px)',
              transition: 'opacity 0.5s ease-out 0.4s, transform 0.5s ease-out 0.4s'
            }}
          >
            <div className="flex-1">
              <p className="text-sm text-muted-foreground">
                <strong className="text-foreground">Onze methodiek</strong> is gebaseerd op de officiële richtlijnen van Google Search Central 
                voor lokale vindbaarheid en E-E-A-T (Experience, Expertise, Authoritativeness, Trustworthiness).
              </p>
            </div>
            <a 
              href="https://developers.google.com/search/docs/fundamentals/creating-helpful-content"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-kk-orange hover:text-kk-orange/80 transition-colors whitespace-nowrap"
            >
              Lees meer
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default LocationProofBlock;
