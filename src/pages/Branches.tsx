import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { SEOHead } from "@/components/SEOHead";
import { StructuredData, klikklaarOrganizationSchema } from "@/components/StructuredData";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Link } from "react-router-dom";
import { ChevronRight, MapPin } from "lucide-react";
import * as LucideIcons from "lucide-react";
import { allIndustries, IndustryData } from "@/data/industries";
import { locations } from "@/data/locations";
import { combos, comboExists } from "@/data/combos";

function BranchesHero() {
  return (
    <section className="relative pt-24 lg:pt-40 pb-12 lg:pb-20 overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-0 w-1/2 h-full bg-gradient-to-br from-kk-orange/[0.03] via-transparent to-transparent" />
        <div className="absolute bottom-0 right-0 w-1/3 h-1/2 bg-gradient-to-tl from-kk-violet/[0.03] via-transparent to-transparent" />
      </div>

      <div className="container px-4 sm:px-6">
        <div className="max-w-3xl mx-auto text-center">
          <nav className="flex items-center justify-center gap-2 text-sm text-muted-foreground mb-6">
            <Link to="/" className="hover:text-foreground transition-colors">Home</Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-foreground">Branches</span>
          </nav>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            SEO voor <span className="gradient-text">Elke Branche</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Ontdek hoe automatische SEO werkt voor jouw branche. 
            Kies je sector en bekijk onze gespecialiseerde oplossingen per stad.
          </p>
        </div>
      </div>
    </section>
  );
}

function IndustryCard({ industry }: { industry: IndustryData }) {
  const { ref, isVisible } = useScrollReveal();
  const IconComponent = LucideIcons[industry.icon as keyof typeof LucideIcons] as React.ElementType;

  // Get top 6 cities with combos for this industry (prioritize Tier 1-2)
  const topCities = locations
    .filter(loc => loc.tier <= 2 && comboExists(industry.slug, loc.slug))
    .slice(0, 6);

  return (
    <div 
      ref={ref}
      className="bg-card border border-border rounded-xl p-6 hover:border-kk-orange/30 hover:shadow-premium transition-all duration-300"
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
        transition: 'opacity 0.5s ease-out, transform 0.5s ease-out'
      }}
    >
      <div className="flex items-start gap-4 mb-4">
        <div className="w-12 h-12 rounded-xl bg-kk-orange/10 flex items-center justify-center flex-shrink-0">
          {IconComponent && <IconComponent className="w-6 h-6 text-kk-orange" />}
        </div>
        <div>
          <Link 
            to={`/seo-${industry.slug}`}
            className="text-lg font-semibold text-foreground hover:text-kk-orange transition-colors"
          >
            {industry.namePlural}
          </Link>
          <p className="text-sm text-muted-foreground mt-1 line-clamp-2">
            {industry.heroDescription.substring(0, 100)}...
          </p>
        </div>
      </div>

      {/* Direct combo links - reduces crawl depth to 2 clicks */}
      {topCities.length > 0 && (
        <div className="mt-4 pt-4 border-t border-border">
          <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wide mb-3">
            <MapPin className="w-3 h-3 inline mr-1" />
            Populaire steden
          </p>
          <div className="flex flex-wrap gap-2">
            {topCities.map(city => (
              <Link
                key={city.slug}
                to={`/seo-${industry.slug}-${city.slug}`}
                className="px-3 py-1.5 bg-muted/50 rounded-full text-xs text-foreground hover:bg-kk-orange/10 hover:text-kk-orange transition-colors"
              >
                {city.name}
              </Link>
            ))}
          </div>
        </div>
      )}

      <Link
        to={`/seo-${industry.slug}`}
        className="inline-flex items-center gap-1 text-sm text-kk-orange font-medium mt-4 hover:gap-2 transition-all"
      >
        Bekijk alle steden
        <ChevronRight className="w-4 h-4" />
      </Link>
    </div>
  );
}

function BranchesGrid() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section ref={ref} className="py-16 lg:py-24">
      <div className="container px-4 sm:px-6">
        <div 
          className="text-center mb-12"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(24px)',
            transition: 'opacity 0.6s ease-out, transform 0.6s ease-out'
          }}
        >
          <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">
            {allIndustries.length} Branches
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Van kappers tot accountants, van consultants tot IT-bedrijven. 
            Wij optimaliseren voor elke onderneming.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {allIndustries.map((industry) => (
            <IndustryCard key={industry.slug} industry={industry} />
          ))}
        </div>
      </div>
    </section>
  );
}

function BranchesStats() {
  const { ref, isVisible } = useScrollReveal();

  const stats = [
    { value: `${allIndustries.length}`, label: "Branches" },
    { value: `${combos.length}+`, label: "Combo pagina's" },
    { value: "2 clicks", label: "Naar elke combo" },
    { value: "€99", label: "Per maand" }
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
              <p className="text-2xl lg:text-3xl font-bold text-kk-orange mb-2">{stat.value}</p>
              <p className="text-sm text-muted-foreground">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function Branches() {
  const breadcrumbSchema = {
    type: "BreadcrumbList" as const,
    items: [
      { name: "Home", url: "https://klikklaar.nl/" },
      { name: "Branches", url: "https://klikklaar.nl/branches" }
    ]
  };

  return (
    <div className="min-h-screen bg-background">
      <SEOHead 
        title="SEO per Branche | Kappers, Tandartsen, Coaches & Meer | €99/mnd"
        description={`SEO speciaal voor jouw branche. ${allIndustries.length} sectoren: van kappers tot accountants. Meer klanten uit jouw regio. Geen gedoe, altijd opzegbaar.`}
        canonical="https://klikklaar.nl/branches"
        ogType="website"
      />
      <StructuredData schema={breadcrumbSchema} />
      <StructuredData schema={klikklaarOrganizationSchema} />
      <Header />
      <main>
        <BranchesHero />
        <BranchesStats />
        <BranchesGrid />
      </main>
      <Footer />
    </div>
  );
}
