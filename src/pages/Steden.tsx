import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { SEOHead } from "@/components/SEOHead";
import { StructuredData, klikklaarOrganizationSchema } from "@/components/StructuredData";
import { SITE_URL } from "@/lib/site-config";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Link } from "react-router-dom";
import { ChevronRight, MapPin, Building2, Users } from "lucide-react";
import { locations, LocationData } from "@/data/locations";
import { allIndustries } from "@/data/industries";
import { combos, comboExists } from "@/data/combos";

function StedenHero() {
  return (
    <section className="relative pt-24 lg:pt-40 pb-12 lg:pb-20 overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-0 w-1/2 h-full bg-gradient-to-br from-kk-violet/[0.03] via-transparent to-transparent" />
        <div className="absolute bottom-0 right-0 w-1/3 h-1/2 bg-gradient-to-tl from-kk-orange/[0.03] via-transparent to-transparent" />
      </div>

      <div className="container px-4 sm:px-6">
        <div className="max-w-3xl mx-auto text-center">
          <nav className="flex items-center justify-center gap-2 text-sm text-muted-foreground mb-6">
            <Link to="/" className="hover:text-foreground transition-colors">Home</Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-foreground">Steden</span>
          </nav>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            SEO in <span className="gradient-text">Heel Nederland</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Van Amsterdam tot Maastricht, van Groningen tot Eindhoven. 
            Lokale SEO voor elke stad en regio in Nederland.
          </p>
        </div>
      </div>
    </section>
  );
}

function CityCard({ location }: { location: LocationData }) {
  const { ref, isVisible } = useScrollReveal();

  // Get top 4 industries with combos for this location
  const topIndustries = allIndustries
    .filter(ind => comboExists(ind.slug, location.slug))
    .slice(0, 4);

  const tierColors = {
    1: "bg-kk-orange text-white",
    2: "bg-kk-violet text-white", 
    3: "bg-muted text-muted-foreground"
  };

  return (
    <div 
      ref={ref}
      className="bg-card border border-border rounded-xl p-5 hover:border-kk-orange/30 hover:shadow-premium transition-all duration-300"
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
        transition: 'opacity 0.5s ease-out, transform 0.5s ease-out'
      }}
    >
      <div className="flex items-start justify-between mb-3">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-lg bg-kk-violet/10 flex items-center justify-center">
            <MapPin className="w-5 h-5 text-kk-violet" />
          </div>
          <div>
            <Link 
              to={`/seo-${location.slug}`}
              className="font-semibold text-foreground hover:text-kk-orange transition-colors"
            >
              {location.name}
            </Link>
            <p className="text-xs text-muted-foreground">{location.province}</p>
          </div>
        </div>
        <span className={`text-xs px-2 py-1 rounded-full ${tierColors[location.tier]}`}>
          Tier {location.tier}
        </span>
      </div>

      <div className="flex items-center gap-4 text-xs text-muted-foreground mb-4">
        <span className="flex items-center gap-1">
          <Users className="w-3 h-3" />
          {location.population}
        </span>
        <span className="flex items-center gap-1">
          <Building2 className="w-3 h-3" />
          {topIndustries.length} branches
        </span>
      </div>

      {/* Direct combo links - reduces crawl depth to 2 clicks */}
      {topIndustries.length > 0 && (
        <div className="pt-3 border-t border-border">
          <div className="flex flex-wrap gap-1.5">
            {topIndustries.map(ind => (
              <Link
                key={ind.slug}
                to={`/seo-${ind.slug}-${location.slug}`}
                className="px-2.5 py-1 bg-muted/50 rounded-full text-xs text-foreground hover:bg-kk-orange/10 hover:text-kk-orange transition-colors"
              >
                {ind.name}
              </Link>
            ))}
            {topIndustries.length < allIndustries.filter(i => comboExists(i.slug, location.slug)).length && (
              <Link
                to={`/seo-${location.slug}`}
                className="px-2.5 py-1 text-xs text-kk-orange hover:underline"
              >
                +meer
              </Link>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

function StedenByTier({ tier, title, description }: { tier: 1 | 2 | 3; title: string; description: string }) {
  const { ref, isVisible } = useScrollReveal();
  const tierLocations = locations.filter(loc => loc.tier === tier);

  if (tierLocations.length === 0) return null;

  return (
    <section ref={ref} className={`py-16 lg:py-20 ${tier === 2 ? 'haze-gradient-warm' : ''}`}>
      <div className="container px-4 sm:px-6">
        <div 
          className="text-center mb-10"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(24px)',
            transition: 'opacity 0.6s ease-out, transform 0.6s ease-out'
          }}
        >
          <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-3">
            {title}
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            {description}
          </p>
        </div>

        <div className={`grid gap-4 ${
          tier === 1 ? 'sm:grid-cols-2 lg:grid-cols-3' : 
          tier === 2 ? 'sm:grid-cols-2 lg:grid-cols-4' : 
          'sm:grid-cols-3 lg:grid-cols-5'
        }`}>
          {tierLocations.map((location) => (
            <CityCard key={location.slug} location={location} />
          ))}
        </div>
      </div>
    </section>
  );
}

function StedenStats() {
  const { ref, isVisible } = useScrollReveal();

  const tier1Count = locations.filter(l => l.tier === 1).length;
  const tier2Count = locations.filter(l => l.tier === 2).length;

  const stats = [
    { value: `${locations.length}+`, label: "Steden" },
    { value: `${tier1Count + tier2Count}`, label: "Tier 1-2 steden" },
    { value: "12", label: "Provincies" },
    { value: `${combos.length}+`, label: "Combo pagina's" }
  ];

  return (
    <section ref={ref} className="py-16 lg:py-20 haze-gradient-cool">
      <div className="container px-4 sm:px-6">
        <div 
          className="grid grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(24px)',
            transition: 'opacity 0.6s ease-out, transform 0.6s ease-out'
          }}
        >
          {stats.map((stat, index) => (
            <div key={index} className="text-center p-6 bg-card rounded-xl border border-border">
              <p className="text-2xl lg:text-3xl font-bold text-kk-violet mb-2">{stat.value}</p>
              <p className="text-sm text-muted-foreground">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function Steden() {
  const breadcrumbSchema = {
    type: "BreadcrumbList" as const,
    items: [
      { name: "Home", url: `${SITE_URL}/` },
      { name: "Steden", url: `${SITE_URL}/steden` }
    ]
  };

  return (
    <div className="min-h-screen bg-background">
      <SEOHead 
        title="Lokale SEO per Stad | 80+ Nederlandse Steden | €99/mnd"
        description={`SEO voor ondernemers in ${locations.length}+ steden. Van Amsterdam tot Maastricht. Gevonden worden in jouw regio. Geen gedoe, altijd opzegbaar.`}
        canonical={`${SITE_URL}/steden`}
        ogType="website"
      />
      <StructuredData schema={breadcrumbSchema} />
      <StructuredData schema={klikklaarOrganizationSchema} />
      <Header />
      <main>
        <StedenHero />
        <StedenStats />
        <StedenByTier 
          tier={1} 
          title="Grote Steden (Tier 1)" 
          description="De belangrijkste Nederlandse steden met het hoogste zoekvolume en de meeste potentiële klanten."
        />
        <StedenByTier 
          tier={2} 
          title="Middelgrote Steden (Tier 2)" 
          description="Sterke regionale centra met uitstekende groeimogelijkheden en minder concurrentie."
        />
        <StedenByTier 
          tier={3} 
          title="Overige Steden (Tier 3)" 
          description="Kleinere steden en gemeenten waar lokale SEO het verschil maakt."
        />
      </main>
      <Footer />
    </div>
  );
}
