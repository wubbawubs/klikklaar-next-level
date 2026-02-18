import { useScrollReveal } from "@/hooks/useScrollReveal";
import { TrendingUp, Calendar, ArrowRight, ExternalLink } from "lucide-react";

interface EvidenceCase {
  title: string;
  beforeMetric: string;
  afterMetric: string;
  improvement: string;
  timeframe: string;
  quote: string;
  keyResult: string;
}

interface EvidenceBlockProps {
  /** Context label shown above heading, e.g. "SEO voor WordPress" */
  contextLabel: string;
  /** Main heading */
  heading: string;
  /** Sub-text below heading */
  subtext: string;
  /** Mini case study data */
  caseStudy: EvidenceCase;
  /** Benchmark stats – show 3 */
  benchmarks?: Array<{ value: string; label: string }>;
}

// Default benchmarks used across all templates
const defaultBenchmarks = [
  { value: "+145%", label: "Gemiddelde toename organisch verkeer" },
  { value: "Top 5", label: "Gemiddelde ranking na 4 maanden" },
  { value: "93%", label: "Klanten ziet verbetering binnen 8 weken" },
];

// Unique case studies per service base name (stripped of variant suffix)
const serviceBaseCases: Record<string, EvidenceCase> = {
  "automatische-seo": {
    title: "MKB-ondernemer met automatische SEO",
    beforeMetric: "Pagina 3 in Google",
    afterMetric: "Top 3 positie",
    improvement: "+198%",
    timeframe: "4 maanden",
    quote: "Het systeem draait 24/7 — ik hoef er niks voor te doen",
    keyResult: "meer organisch verkeer",
  },
  "lokale-seo": {
    title: "Lokale ondernemer met Google Bedrijfsprofiel",
    beforeMetric: "Niet in lokale top 10",
    afterMetric: "Top 3 in Maps + organisch",
    improvement: "+245%",
    timeframe: "3 maanden",
    quote: "Klanten uit de buurt vinden ons nu direct via Google",
    keyResult: "meer lokale leads",
  },
  "technische-seo": {
    title: "Webshop met technische SEO-problemen",
    beforeMetric: "Core Web Vitals: rood",
    afterMetric: "Core Web Vitals: groen",
    improvement: "+167%",
    timeframe: "6 weken",
    quote: "Onze site laadt nu 3x sneller en Google beloont dat",
    keyResult: "betere technische score",
  },
  "seo-audit": {
    title: "Bedrijf na uitvoering SEO-audit",
    beforeMetric: "Score 38/100",
    afterMetric: "Score 91/100",
    improvement: "+139%",
    timeframe: "8 weken",
    quote: "De audit gaf precies de 12 knelpunten die ons tegenhielden",
    keyResult: "meer geïndexeerde pagina's",
  },
  "seo-strategie": {
    title: "Scale-up met SEO-strategie op maat",
    beforeMetric: "Geen keyword-focus",
    afterMetric: "Top 5 op 18 zoektermen",
    improvement: "+312%",
    timeframe: "5 maanden",
    quote: "Eindelijk een duidelijk plan dat ook echt werkt",
    keyResult: "meer gerichte zoekwoord-rankings",
  },
  "content-optimalisatie": {
    title: "Dienstverlener met bestaande content",
    beforeMetric: "Pagina 2-4 in Google",
    afterMetric: "Pagina 1 voor 8 artikelen",
    improvement: "+189%",
    timeframe: "3 maanden",
    quote: "Onze bestaande blogs scoren nu eindelijk",
    keyResult: "meer verkeer uit bestaande content",
  },
  "seo-teksten": {
    title: "Adviesbureau met SEO-geoptimaliseerde teksten",
    beforeMetric: "0 organische leads/maand",
    afterMetric: "12 leads/maand via blog",
    improvement: "+∞",
    timeframe: "4 maanden",
    quote: "Onze expertise is nu vindbaar voor wie erop zoekt",
    keyResult: "meer leads via content",
  },
  "linkbuilding": {
    title: "SaaS-bedrijf met linkbuilding-campagne",
    beforeMetric: "Domain Authority 15",
    afterMetric: "Domain Authority 34",
    improvement: "+127%",
    timeframe: "5 maanden",
    quote: "Kwalitatieve backlinks maken écht het verschil",
    keyResult: "meer domeinautoriteit",
  },
  "google-bedrijfsprofiel": {
    title: "Fysieke winkel met GBP-optimalisatie",
    beforeMetric: "20 profiel-weergaven/mnd",
    afterMetric: "185 weergaven/mnd",
    improvement: "+825%",
    timeframe: "6 weken",
    quote: "We staan nu bovenaan bij 'in de buurt' zoekopdrachten",
    keyResult: "meer Google Maps-weergaven",
  },
  "seo-monitoring": {
    title: "E-commerce bedrijf met 24/7 monitoring",
    beforeMetric: "Problemen pas na weken ontdekt",
    afterMetric: "Alerts binnen 1 uur",
    improvement: "+94%",
    timeframe: "Direct",
    quote: "We missen geen enkele ranking-daling meer",
    keyResult: "snellere probleemdetectie",
  },
  "seo-rapportages": {
    title: "Marketingmanager met heldere rapportages",
    beforeMetric: "Onduidelijke bureau-rapporten",
    afterMetric: "Wekelijks helder dashboard",
    improvement: "+78%",
    timeframe: "Week 1",
    quote: "Eindelijk snap ik wat er met onze SEO gebeurt",
    keyResult: "meer inzicht in SEO-prestaties",
  },
  "seo-webshops": {
    title: "Webshop met 500+ producten",
    beforeMetric: "45 producten geïndexeerd",
    afterMetric: "480 producten geïndexeerd",
    improvement: "+267%",
    timeframe: "3 maanden",
    quote: "Onze producten verschijnen nu in Google Shopping",
    keyResult: "meer product-indexatie",
  },
  "seo-wordpress": {
    title: "WordPress-site met SEO-optimalisatie",
    beforeMetric: "Langzaam, slecht geïndexeerd",
    afterMetric: "Snel, top 5 voor 6 termen",
    improvement: "+201%",
    timeframe: "10 weken",
    quote: "WordPress kan wél goed scoren met de juiste setup",
    keyResult: "meer organisch verkeer",
  },
  "ai-seo": {
    title: "Consultant vindbaar in AI-zoekmachines",
    beforeMetric: "Niet genoemd in ChatGPT",
    afterMetric: "Aanbevolen in 4 AI-tools",
    improvement: "Nieuw kanaal",
    timeframe: "8 weken",
    quote: "Klanten vertellen dat ze ons via ChatGPT vonden",
    keyResult: "meer AI-citaties",
  },
  "seo-migratie": {
    title: "Bedrijf na website-migratie",
    beforeMetric: "-60% verkeer na migratie",
    afterMetric: "+15% boven pre-migratie",
    improvement: "Volledig herstel",
    timeframe: "6 weken",
    quote: "Zonder begeleiding waren we maanden verkeer kwijt geweest",
    keyResult: "behoud van rankings na migratie",
  },
};

// Variant-level fallbacks (used when no service-specific case exists)
const variantFallbackCases: Record<string, EvidenceCase> = {
  "uitbesteden": {
    title: "MKB-ondernemer die SEO volledig uitbesteedde",
    beforeMetric: "Pagina 3 in Google",
    afterMetric: "Top 3 positie",
    improvement: "+198%",
    timeframe: "4 maanden",
    quote: "Eindelijk geen gedoe meer met SEO — en toch bovenaan in Google",
    keyResult: "meer organisch verkeer",
  },
  "abonnement": {
    title: "Webshop met maandelijks SEO-abonnement",
    beforeMetric: "120 bezoekers/maand",
    afterMetric: "380 bezoekers/maand",
    improvement: "+217%",
    timeframe: "3 maanden",
    quote: "Structureel meer verkeer zonder er zelf tijd aan te besteden",
    keyResult: "meer websitebezoekers",
  },
  "bureau": {
    title: "Bedrijf dat overstapte van bureau naar KlikKlaarSEO",
    beforeMetric: "€1.200/mnd bij bureau",
    afterMetric: "€149/mnd, beter resultaat",
    improvement: "+156%",
    timeframe: "5 maanden",
    quote: "Zelfde kwaliteit, fractie van de kosten",
    keyResult: "meer resultaat voor minder budget",
  },
  "scan": {
    title: "Website na uitvoering SEO-scan aanbevelingen",
    beforeMetric: "Score 42/100",
    afterMetric: "Score 89/100",
    improvement: "+112%",
    timeframe: "6 weken",
    quote: "De scan gaf precies de knelpunten die we moesten fixen",
    keyResult: "meer technische gezondheid",
  },
};

// Pre-built case studies per platform category
const platformEvidenceCases: Record<string, EvidenceCase> = {
  cms: {
    title: "CMS-website met SEO-optimalisatie",
    beforeMetric: "Pagina 2-3 in Google",
    afterMetric: "Top 5 positie",
    improvement: "+178%",
    timeframe: "3 maanden",
    quote: "Ons CMS werkt nu eindelijk mee in plaats van tegen",
    keyResult: "meer organisch verkeer",
  },
  ecommerce: {
    title: "Webshop met product-SEO optimalisatie",
    beforeMetric: "85 bezoekers/maand",
    afterMetric: "310 bezoekers/maand",
    improvement: "+265%",
    timeframe: "4 maanden",
    quote: "Producten verschijnen nu in Google Shopping én organisch",
    keyResult: "meer productweergaven",
  },
  "website-builder": {
    title: "Website-builder site met SEO-verbeteringen",
    beforeMetric: "Niet vindbaar lokaal",
    afterMetric: "Top 5 voor 8 zoektermen",
    improvement: "+234%",
    timeframe: "8 weken",
    quote: "Ondanks de beperkingen scoren we nu hoog",
    keyResult: "meer lokale vindbaarheid",
  },
  custom: {
    title: "Maatwerk-website met technische SEO",
    beforeMetric: "150 bezoekers/maand",
    afterMetric: "420 bezoekers/maand",
    improvement: "+180%",
    timeframe: "4 maanden",
    quote: "Technische issues opgelost, verkeer verdrievoudigd",
    keyResult: "meer websiteverkeer",
  },
  marketing: {
    title: "Marketingplatform met SEO-integratie",
    beforeMetric: "Geen organisch verkeer",
    afterMetric: "200+ bezoekers/maand",
    improvement: "+320%",
    timeframe: "3 maanden",
    quote: "SEO en marketing versterken elkaar nu",
    keyResult: "meer leads via Google",
  },
};

/**
 * Get an evidence case for a dienst variant based on slug.
 * First tries service-specific case (e.g. "technische-seo"), then falls back to variant type.
 */
export function getServiceEvidenceCase(slug: string): EvidenceCase {
  // Extract the service base name (remove variant suffix)
  const baseSlug = slug
    .replace(/-uitbesteden$/, "")
    .replace(/-abonnement$/, "")
    .replace(/-bureau$/, "")
    .replace(/-scan$/, "");

  // Try service-specific case first
  if (serviceBaseCases[baseSlug]) {
    return serviceBaseCases[baseSlug];
  }

  // Fall back to variant type
  if (slug.includes("-uitbesteden")) return variantFallbackCases["uitbesteden"];
  if (slug.includes("-abonnement")) return variantFallbackCases["abonnement"];
  if (slug.includes("-bureau")) return variantFallbackCases["bureau"];
  if (slug.includes("-scan")) return variantFallbackCases["scan"];
  return variantFallbackCases["uitbesteden"];
}

/**
 * Get an evidence case for a platform based on category.
 */
export function getPlatformEvidenceCase(category: string): EvidenceCase {
  return platformEvidenceCases[category] || platformEvidenceCases["cms"];
}

export function EvidenceBlock({
  contextLabel,
  heading,
  subtext,
  caseStudy,
  benchmarks = defaultBenchmarks,
}: EvidenceBlockProps) {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section ref={ref} className="py-16 lg:py-24 haze-gradient-warm">
      <div className="container px-4 sm:px-6">
        <div
          className="max-w-4xl mx-auto"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? "translateY(0)" : "translateY(24px)",
            transition: "opacity 0.6s ease-out, transform 0.6s ease-out",
          }}
        >
          {/* Header */}
          <div className="text-center mb-12">
            <span className="inline-flex items-center gap-2 px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm font-medium mb-4">
              <TrendingUp className="w-4 h-4" />
              Bewezen resultaten
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-display font-bold text-foreground mb-4">
              {heading}
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">{subtext}</p>
          </div>

          {/* Mini Case Study */}
          <div
            className="mb-12 p-6 lg:p-8 bg-card rounded-2xl border border-border shadow-premium"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? "translateY(0)" : "translateY(20px)",
              transition: "opacity 0.5s ease-out 0.1s, transform 0.5s ease-out 0.1s",
            }}
          >
            <div className="flex flex-col lg:flex-row lg:items-center gap-6 lg:gap-10">
              <div className="flex-1">
                <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                  <Calendar className="w-4 h-4" />
                  <span>Case study: {caseStudy.title}</span>
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">
                  {caseStudy.improvement} {caseStudy.keyResult}
                </h3>
                <p className="text-muted-foreground italic mb-4">
                  "{caseStudy.quote}"
                </p>
                <div className="text-sm text-muted-foreground">
                  Resultaat bereikt in{" "}
                  <span className="font-semibold text-foreground">
                    {caseStudy.timeframe}
                  </span>
                </div>
              </div>

              {/* Before / After */}
              <div className="flex gap-4 lg:gap-6">
                <div className="flex-1 p-4 bg-muted/50 rounded-xl text-center min-w-[120px]">
                  <p className="text-xs text-muted-foreground uppercase tracking-wide mb-1">
                    Voor
                  </p>
                  <p className="text-sm font-medium text-foreground">
                    {caseStudy.beforeMetric}
                  </p>
                </div>
                <div className="flex items-center">
                  <ArrowRight className="w-5 h-5 text-kk-orange" />
                </div>
                <div className="flex-1 p-4 bg-kk-orange/10 rounded-xl text-center min-w-[120px]">
                  <p className="text-xs text-kk-orange uppercase tracking-wide mb-1">
                    Na
                  </p>
                  <p className="text-sm font-bold text-kk-orange">
                    {caseStudy.afterMetric}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Benchmarks */}
          <div
            className="grid sm:grid-cols-3 gap-4 mb-10"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? "translateY(0)" : "translateY(20px)",
              transition: "opacity 0.5s ease-out 0.3s, transform 0.5s ease-out 0.3s",
            }}
          >
            {benchmarks.slice(0, 3).map((b, i) => (
              <div
                key={i}
                className="p-5 bg-card rounded-xl border border-border text-center"
              >
                <p className="text-2xl lg:text-3xl font-bold text-kk-orange mb-1">
                  {b.value}
                </p>
                <p className="text-sm text-muted-foreground">{b.label}</p>
              </div>
            ))}
          </div>

          {/* Authority Link */}
          <div
            className="p-4 bg-muted/30 rounded-xl border border-border flex flex-col sm:flex-row items-start sm:items-center gap-3"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? "translateY(0)" : "translateY(15px)",
              transition: "opacity 0.5s ease-out 0.4s, transform 0.5s ease-out 0.4s",
            }}
          >
            <div className="flex-1">
              <p className="text-sm text-muted-foreground">
                <strong className="text-foreground">Onze methodiek</strong> is
                gebaseerd op de officiële richtlijnen van Google Search Central voor
                vindbaarheid en E-E-A-T (Experience, Expertise, Authoritativeness,
                Trustworthiness).
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

export default EvidenceBlock;
