import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { SEOHead } from "@/components/SEOHead";
import { StructuredData } from "@/components/StructuredData";
import { GradientButton } from "@/components/ui/GradientButton";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Link } from "react-router-dom";
import { ChevronRight, BookOpen, MapPin, Settings, FileText, Clock, ArrowRight } from "lucide-react";
import { useState, useEffect } from "react";
import { pillars, KennisbankPillar } from "@/data/kennisbank";

function KennisbankHero() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 50);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative pt-24 lg:pt-40 pb-12 lg:pb-20 overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-0 w-1/2 h-full bg-gradient-to-br from-kk-orange/[0.03] via-transparent to-transparent" />
        <div className="absolute bottom-0 right-0 w-1/3 h-1/2 bg-gradient-to-tl from-kk-violet/[0.03] via-transparent to-transparent" />
      </div>

      <div className="container px-4 sm:px-6">
        <div className="max-w-3xl mx-auto text-center">
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
            <span className="text-foreground">Kennisbank</span>
          </nav>

          <div 
            className="inline-flex items-center gap-2 px-4 py-2 bg-kk-orange/10 rounded-full mb-6"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateY(0)' : 'translateY(12px)',
              transition: 'opacity 0.5s ease-out 0.1s, transform 0.5s ease-out 0.1s'
            }}
          >
            <BookOpen className="w-5 h-5 text-kk-orange" />
            <span className="text-sm font-medium text-kk-orange">Gratis SEO Kennis</span>
          </div>

          <h1 
            className="text-3xl sm:text-4xl lg:text-5xl xl:text-display-lg font-bold text-foreground mb-6"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateY(0)' : 'translateY(16px)',
              transition: 'opacity 0.6s ease-out 0.15s, transform 0.6s ease-out 0.15s'
            }}
          >
            SEO <span className="gradient-text">Kennisbank</span>
          </h1>

          <p 
            className="text-base sm:text-lg lg:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateY(0)' : 'translateY(16px)',
              transition: 'opacity 0.6s ease-out 0.2s, transform 0.6s ease-out 0.2s'
            }}
          >
            Leer alles over SEO in begrijpelijke taal. Van lokale vindbaarheid tot technische optimalisatie - 
            zonder jargon, met praktische tips die je direct kunt toepassen.
          </p>
        </div>
      </div>
    </section>
  );
}

function PillarCard({ pillar, index }: { pillar: KennisbankPillar; index: number }) {
  const { ref, isVisible } = useScrollReveal();
  
  const iconMap = {
    MapPin: MapPin,
    Settings: Settings,
    FileText: FileText
  };
  const IconComponent = iconMap[pillar.icon as keyof typeof iconMap] || BookOpen;
  
  const colorClasses = {
    orange: { bg: "bg-kk-orange/10", text: "text-kk-orange", border: "hover:border-kk-orange/30" },
    violet: { bg: "bg-kk-violet/10", text: "text-kk-violet", border: "hover:border-kk-violet/30" },
    blue: { bg: "bg-blue-500/10", text: "text-blue-500", border: "hover:border-blue-500/30" }
  };
  const colors = colorClasses[pillar.color];

  return (
    <div 
      ref={ref}
      className={`bg-card border border-border rounded-2xl p-6 lg:p-8 ${colors.border} hover:shadow-premium transition-all duration-300`}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0)' : 'translateY(24px)',
        transition: `opacity 0.5s ease-out ${index * 0.1}s, transform 0.5s ease-out ${index * 0.1}s`
      }}
    >
      <div className={`w-14 h-14 rounded-xl ${colors.bg} flex items-center justify-center mb-5`}>
        <IconComponent className={`w-7 h-7 ${colors.text}`} />
      </div>
      
      <h2 className="text-xl lg:text-2xl font-bold text-foreground mb-3">
        {pillar.title}
      </h2>
      
      <p className="text-muted-foreground mb-6">
        {pillar.description}
      </p>
      
      <div className="space-y-2 mb-6">
        {pillar.articles.slice(0, 3).map((article) => (
          <Link
            key={article.slug}
            to={`/kennisbank/${pillar.slug}/${article.slug}`}
            className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors group"
          >
            <ChevronRight className="w-4 h-4 text-muted-foreground/50 group-hover:text-kk-orange group-hover:translate-x-0.5 transition-all" />
            <span>{article.title}</span>
            <span className="text-xs text-muted-foreground/50">({article.readTime})</span>
          </Link>
        ))}
        {pillar.articles.length > 3 && (
          <p className="text-xs text-muted-foreground pl-6">
            +{pillar.articles.length - 3} meer artikelen
          </p>
        )}
      </div>
      
      <Link
        to={`/kennisbank/${pillar.slug}`}
        className={`inline-flex items-center gap-2 font-medium ${colors.text} hover:gap-3 transition-all`}
      >
        Bekijk alle artikelen
        <ArrowRight className="w-4 h-4" />
      </Link>
    </div>
  );
}

function PillarGrid() {
  return (
    <section className="py-12 lg:py-20">
      <div className="container px-4 sm:px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
          {pillars.map((pillar, index) => (
            <PillarCard key={pillar.slug} pillar={pillar} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

function AllArticles() {
  const { ref, isVisible } = useScrollReveal();
  const totalArticles = pillars.reduce((sum, p) => sum + p.articles.length, 0);

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
          <h2 className="text-2xl sm:text-3xl lg:text-display font-bold text-foreground mb-4">
            {totalArticles} gratis artikelen over SEO
          </h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Van basis begrippen tot geavanceerde strategieën. 
            Alles wat je moet weten om je online vindbaarheid te verbeteren.
          </p>
          
          <div className="flex flex-wrap justify-center gap-3 mb-10">
            {pillars.map((pillar) => (
              <Link
                key={pillar.slug}
                to={`/kennisbank/${pillar.slug}`}
                className="px-4 py-2 bg-card border border-border rounded-full text-sm text-foreground hover:border-kk-orange/30 hover:shadow-premium-sm transition-all duration-300"
              >
                {pillar.title} ({pillar.articles.length})
              </Link>
            ))}
          </div>
          
          <GradientButton asChild>
            <Link to="/contact">
              Liever dat wij het voor je regelen?
            </Link>
          </GradientButton>
        </div>
      </div>
    </section>
  );
}

export default function Kennisbank() {
  const breadcrumbSchema = {
    type: "BreadcrumbList" as const,
    items: [
      { name: "Home", url: "https://klikklaar.nl/" },
      { name: "Kennisbank", url: "https://klikklaar.nl/kennisbank" }
    ]
  };

  return (
    <div className="min-h-screen bg-background">
      <SEOHead 
        title="SEO Kennisbank | Gratis SEO Gidsen & Tips | KlikKlaarSEO"
        description="Leer alles over SEO in begrijpelijke taal. Gratis artikelen over lokale SEO, technische optimalisatie en content. Praktische tips die je direct kunt toepassen."
        canonical="https://klikklaar.nl/kennisbank"
      />
      <StructuredData schema={breadcrumbSchema} />
      <Header />
      <main>
        <KennisbankHero />
        <PillarGrid />
        <AllArticles />
      </main>
      <Footer />
    </div>
  );
}
