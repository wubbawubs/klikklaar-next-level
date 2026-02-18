import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { SEOHead } from "@/components/SEOHead";
import { StructuredData } from "@/components/StructuredData";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Link, useParams, Navigate } from "react-router-dom";
import { ChevronRight, Clock, MapPin, Settings, FileText, BookOpen } from "lucide-react";
import { useState, useEffect } from "react";
import { getPillarBySlug } from "@/data/kennisbank";
import { SITE_URL } from "@/lib/site-config";

export default function KennisbankPillar() {
  const { pillarSlug } = useParams();
  const [isVisible, setIsVisible] = useState(false);
  const { ref, isVisible: articlesVisible } = useScrollReveal();

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 50);
    return () => clearTimeout(timer);
  }, []);

  const pillar = pillarSlug ? getPillarBySlug(pillarSlug) : undefined;

  if (!pillar) {
    return <Navigate to="/kennisbank" replace />;
  }

  const iconMap = { MapPin, Settings, FileText };
  const IconComponent = iconMap[pillar.icon as keyof typeof iconMap] || BookOpen;
  
  const colorClasses = {
    orange: { bg: "bg-kk-orange/10", text: "text-kk-orange" },
    violet: { bg: "bg-kk-violet/10", text: "text-kk-violet" },
    blue: { bg: "bg-blue-500/10", text: "text-blue-500" }
  };
  const colors = colorClasses[pillar.color];

  const breadcrumbSchema = {
    type: "BreadcrumbList" as const,
    items: [
      { name: "Home", url: `${SITE_URL}/` },
      { name: "Kennisbank", url: `${SITE_URL}/kennisbank` },
      { name: pillar.title, url: `${SITE_URL}/kennisbank/${pillar.slug}` }
    ]
  };

  return (
    <div className="min-h-screen bg-background">
      <SEOHead title={pillar.metaTitle} description={pillar.metaDescription} canonical={`${SITE_URL}/kennisbank/${pillar.slug}`} />
      <StructuredData schema={breadcrumbSchema} />
      <Header />
      <main>
        <section className="pt-24 lg:pt-40 pb-12 lg:pb-20">
          <div className="container px-4 sm:px-6">
            <div className="max-w-3xl mx-auto text-center">
              <nav className="flex items-center justify-center gap-2 text-sm text-muted-foreground mb-6" style={{ opacity: isVisible ? 1 : 0, transition: 'opacity 0.5s' }}>
                <Link to="/" className="hover:text-foreground transition-colors">Home</Link>
                <ChevronRight className="w-4 h-4" />
                <Link to="/kennisbank" className="hover:text-foreground transition-colors">Kennisbank</Link>
                <ChevronRight className="w-4 h-4" />
                <span className="text-foreground">{pillar.title}</span>
              </nav>
              <div className={`inline-flex items-center gap-2 px-4 py-2 ${colors.bg} rounded-full mb-6`} style={{ opacity: isVisible ? 1 : 0, transition: 'opacity 0.5s 0.1s' }}>
                <IconComponent className={`w-5 h-5 ${colors.text}`} />
                <span className={`text-sm font-medium ${colors.text}`}>{pillar.articles.length} artikelen</span>
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6" style={{ opacity: isVisible ? 1 : 0, transition: 'opacity 0.6s 0.15s' }}>{pillar.title}</h1>
              <p className="text-lg text-muted-foreground" style={{ opacity: isVisible ? 1 : 0, transition: 'opacity 0.6s 0.2s' }}>{pillar.intro}</p>
            </div>
          </div>
        </section>

        <section ref={ref} className="py-12 lg:py-20">
          <div className="container px-4 sm:px-6">
            <div className="max-w-3xl mx-auto space-y-4">
              {pillar.articles.map((article, index) => (
                <Link
                  key={article.slug}
                  to={`/kennisbank/${pillar.slug}/${article.slug}`}
                  className="block p-6 bg-card border border-border rounded-xl hover:border-kk-orange/30 hover:shadow-premium transition-all duration-300 group"
                  style={{ opacity: articlesVisible ? 1 : 0, transform: articlesVisible ? 'translateY(0)' : 'translateY(16px)', transition: `all 0.4s ease-out ${index * 0.05}s` }}
                >
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h2 className="text-lg font-semibold text-foreground group-hover:text-kk-orange transition-colors mb-2">{article.title}</h2>
                      <p className="text-muted-foreground text-sm">{article.description}</p>
                    </div>
                    <span className="flex items-center gap-1 text-xs text-muted-foreground whitespace-nowrap"><Clock className="w-3 h-3" />{article.readTime}</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
