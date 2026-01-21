import { useScrollReveal } from "@/hooks/useScrollReveal";
import { TrendingUp, Calendar, Target, Award, ExternalLink, CheckCircle2, ArrowRight } from "lucide-react";
import { IndustryData } from "@/data/industries";
import { LocationData } from "@/data/locations";

interface ProofBlockProps {
  industry: IndustryData;
  location?: LocationData;
}

// Mini-case data per industry category for E-E-A-T signals
const industryProofData: Record<string, {
  caseTitle: string;
  beforeMetric: string;
  afterMetric: string;
  improvement: string;
  timeframe: string;
  quote: string;
  keyResult: string;
}> = {
  // Zorg & Welzijn
  "tandartsen": {
    caseTitle: "Tandartspraktijk in stedelijke omgeving",
    beforeMetric: "Pagina 3 in Google",
    afterMetric: "Top 3 positie",
    improvement: "+312%",
    timeframe: "4 maanden",
    quote: "Van 8 nieuwe patiënten per maand naar 31",
    keyResult: "meer nieuwe patiënten via Google"
  },
  "fysiotherapeuten": {
    caseTitle: "Fysiotherapiepraktijk met 2 behandelaars",
    beforeMetric: "180 bezoekers/maand",
    afterMetric: "520 bezoekers/maand",
    improvement: "+189%",
    timeframe: "3 maanden",
    quote: "Volle agenda dankzij organische vindbaarheid",
    keyResult: "meer websitebezoekers"
  },
  "huisarts": {
    caseTitle: "Huisartsenpraktijk in woonwijk",
    beforeMetric: "Niet vindbaar lokaal",
    afterMetric: "Top 5 voor 12 zoektermen",
    improvement: "+245%",
    timeframe: "5 maanden",
    quote: "Eindelijk gevonden door patiënten uit onze wijk",
    keyResult: "meer lokale vindbaarheid"
  },
  "psycholoog": {
    caseTitle: "Praktijk voor psychologische zorg",
    beforeMetric: "50 bezoekers/maand",
    afterMetric: "185 bezoekers/maand",
    improvement: "+270%",
    timeframe: "4 maanden",
    quote: "Meer gerichte aanvragen van passende cliënten",
    keyResult: "meer organisch verkeer"
  },
  // Dienstverlening
  "accountant": {
    caseTitle: "Accountantskantoor MKB",
    beforeMetric: "Pagina 4+ in Google",
    afterMetric: "Top 5 lokaal",
    improvement: "+156%",
    timeframe: "5 maanden",
    quote: "Structureel 4 nieuwe leads per maand via website",
    keyResult: "meer gekwalificeerde leads"
  },
  "advocaat": {
    caseTitle: "Advocatenkantoor familie- en arbeidsrecht",
    beforeMetric: "120 bezoekers/maand",
    afterMetric: "380 bezoekers/maand",
    improvement: "+217%",
    timeframe: "4 maanden",
    quote: "Hogere kwaliteit leads, minder cold calls nodig",
    keyResult: "meer websitebezoekers"
  },
  "makelaar": {
    caseTitle: "Lokale makelaar in woningmarkt",
    beforeMetric: "Niet op pagina 1",
    afterMetric: "Top 3 voor kernzoektermen",
    improvement: "+198%",
    timeframe: "3 maanden",
    quote: "Meer directe aanvragen, minder afhankelijk van Funda",
    keyResult: "meer directe leads"
  },
  "notaris": {
    caseTitle: "Notariskantoor vastgoed & familie",
    beforeMetric: "95 bezoekers/maand",
    afterMetric: "290 bezoekers/maand",
    improvement: "+205%",
    timeframe: "5 maanden",
    quote: "Eindelijk concurrerend met grote kantoren",
    keyResult: "meer websiteverkeer"
  },
  // Beauty & Lifestyle
  "kappers": {
    caseTitle: "Kapsalon met 3 medewerkers",
    beforeMetric: "Pagina 2 in Google",
    afterMetric: "Positie 2 lokaal",
    improvement: "+145%",
    timeframe: "8 weken",
    quote: "Elke week nieuwe klanten via Google",
    keyResult: "meer boekingen via website"
  },
  "schoonheidssalon": {
    caseTitle: "Schoonheidssalon en wellness",
    beforeMetric: "60 bezoekers/maand",
    afterMetric: "195 bezoekers/maand",
    improvement: "+225%",
    timeframe: "3 maanden",
    quote: "Behandelkamer zit nu doorlopend vol",
    keyResult: "meer websitebezoekers"
  },
  "personal-trainer": {
    caseTitle: "Personal trainer met eigen studio",
    beforeMetric: "Niet vindbaar lokaal",
    afterMetric: "Top 5 voor 8 zoektermen",
    improvement: "+178%",
    timeframe: "10 weken",
    quote: "Van 5 naar 12 actieve klanten per maand",
    keyResult: "meer nieuwe klanten"
  },
  // Technisch & Bouw
  "loodgieter": {
    caseTitle: "Loodgietersbedrijf met 24/7 service",
    beforeMetric: "Pagina 3 in Google",
    afterMetric: "Top 3 spoed-zoektermen",
    improvement: "+234%",
    timeframe: "6 weken",
    quote: "Spoedklussen komen nu direct binnen via Google",
    keyResult: "meer spoed-aanvragen"
  },
  "elektricien": {
    caseTitle: "Elektricien met focus op woningen",
    beforeMetric: "75 bezoekers/maand",
    afterMetric: "220 bezoekers/maand",
    improvement: "+193%",
    timeframe: "3 maanden",
    quote: "Minder afhankelijk van tussenpartijen",
    keyResult: "meer directe klanten"
  },
  "aannemer": {
    caseTitle: "Aannemersbedrijf verbouwingen",
    beforeMetric: "Geen lokale rankings",
    afterMetric: "Top 5 voor 6 zoektermen",
    improvement: "+167%",
    timeframe: "4 maanden",
    quote: "Grotere projecten via organische leads",
    keyResult: "meer kwalitatieve aanvragen"
  },
  "schilder": {
    caseTitle: "Schildersbedrijf particulier & zakelijk",
    beforeMetric: "110 bezoekers/maand",
    afterMetric: "285 bezoekers/maand",
    improvement: "+159%",
    timeframe: "3 maanden",
    quote: "Bestede offertetijd levert nu meer resultaat",
    keyResult: "meer offerteaanvragen"
  },
  // Default fallback
  "default": {
    caseTitle: "Lokaal bedrijf met online ambitie",
    beforeMetric: "Pagina 2-3 in Google",
    afterMetric: "Top 5 positie",
    improvement: "+145%",
    timeframe: "3-4 maanden",
    quote: "Meer klanten uit de regio via Google",
    keyResult: "meer organisch verkeer"
  }
};

// Get proof data for industry, fallback to default
function getProofData(industrySlug: string) {
  return industryProofData[industrySlug] || industryProofData["default"];
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
    // Faster results for smaller markets
    baseTimeline[2].week = "Week 4-6";
    baseTimeline[3].week = "Maand 2-3";
  } else if (tier === 1) {
    // Slightly slower for competitive markets
    baseTimeline[2].week = "Maand 2-3";
    baseTimeline[3].week = "Maand 4-6";
  }
  
  return baseTimeline;
}

export function ProofBlock({ industry, location }: ProofBlockProps) {
  const { ref, isVisible } = useScrollReveal();
  const proofData = getProofData(industry.slug);
  const timeline = getTimeline(location?.tier || 2);
  const locationName = location?.name || "jouw regio";
  const provinceName = location?.province || "Nederland";

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
              Concrete resultaten voor {industry.namePlural.toLowerCase()}
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Geen beloftes, maar meetbare verbeteringen. Dit is wat {industry.namePlural.toLowerCase()} 
              {location && location.tier <= 2 ? ` in ${provinceName}` : ''} kunnen verwachten.
            </p>
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
                  <span>Case study: {proofData.caseTitle}</span>
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
              Wat je kunt verwachten als {industry.name.toLowerCase()} in {locationName}
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

export default ProofBlock;
