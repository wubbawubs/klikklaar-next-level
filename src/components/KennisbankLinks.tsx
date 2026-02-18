import { Link } from "react-router-dom";
import { BookOpen, ArrowRight } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { pillars, KennisbankArticle } from "@/data/kennisbank";

type LinkContext = "lokale-seo" | "technische-seo" | "content" | "general";

const contextTitles: Record<LinkContext, string> = {
  "lokale-seo": "Verdiep je in lokale SEO",
  "technische-seo": "Leer meer over technische SEO",
  content: "Verbeter je content met deze gidsen",
  general: "Meer leren over SEO?",
};

const contextCtas: Record<LinkContext, string> = {
  "lokale-seo": "Bekijk alle lokale SEO artikelen",
  "technische-seo": "Bekijk alle technische SEO artikelen",
  content: "Bekijk alle content optimalisatie artikelen",
  general: "Ontdek de volledige kennisbank",
};

interface KennisbankLinksProps {
  context: LinkContext;
  maxLinks?: number;
  title?: string;
}

// Helper to get relevant articles based on context
function getRelevantArticles(context: LinkContext, max: number): Array<{ pillarSlug: string; article: KennisbankArticle }> {
  switch (context) {
    case "lokale-seo":
      // Prioritize local SEO articles
      const lokalePillar = pillars.find(p => p.slug === "lokale-seo");
      return lokalePillar 
        ? lokalePillar.articles.slice(0, max).map(a => ({ pillarSlug: "lokale-seo", article: a }))
        : [];
    
    case "technische-seo":
      // Prioritize technical SEO articles
      const techPillar = pillars.find(p => p.slug === "technische-seo");
      return techPillar 
        ? techPillar.articles.slice(0, max).map(a => ({ pillarSlug: "technische-seo", article: a }))
        : [];
    
    case "content":
      // Prioritize content optimization articles
      const contentPillar = pillars.find(p => p.slug === "content-optimalisatie");
      return contentPillar 
        ? contentPillar.articles.slice(0, max).map(a => ({ pillarSlug: "content-optimalisatie", article: a }))
        : [];
    
    case "general":
    default:
      // Mix of all pillars - 1 from each
      const mixed: Array<{ pillarSlug: string; article: KennisbankArticle }> = [];
      pillars.forEach(pillar => {
        if (pillar.articles[0] && mixed.length < max) {
          mixed.push({ pillarSlug: pillar.slug, article: pillar.articles[0] });
        }
      });
      return mixed;
  }
}

export function KennisbankLinks({ context, maxLinks = 3, title }: KennisbankLinksProps) {
  const { ref, isVisible } = useScrollReveal();
  const articles = getRelevantArticles(context, maxLinks);

  if (articles.length === 0) return null;

  return (
    <section ref={ref} className="py-12 lg:py-16">
      <div className="container px-4 sm:px-6">
        <div 
          className="max-w-3xl mx-auto"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(24px)',
            transition: 'opacity 0.6s ease-out, transform 0.6s ease-out'
          }}
        >
          <div className="p-6 bg-muted/30 rounded-xl border border-border">
            <div className="flex items-center gap-2 mb-4">
              <BookOpen className="w-5 h-5 text-kk-orange" />
              <h3 className="text-base font-semibold text-foreground">
                {title || contextTitles[context]}
              </h3>
            </div>

            <div className="space-y-2">
              {articles.map(({ pillarSlug, article }, index) => (
                <Link
                  key={article.slug}
                  to={`/kennisbank/${pillarSlug}/${article.slug}`}
                  className="flex items-center justify-between gap-3 p-3 bg-card rounded-lg border border-border hover:border-kk-orange/30 hover:shadow-premium-sm transition-all duration-300 group"
                  style={{
                    opacity: isVisible ? 1 : 0,
                    transform: isVisible ? 'translateX(0)' : 'translateX(-10px)',
                    transition: `opacity 0.4s ease-out ${index * 0.08}s, transform 0.4s ease-out ${index * 0.08}s`
                  }}
                >
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-foreground truncate">
                      {article.title}
                    </p>
                    <p className="text-xs text-muted-foreground">
                      {article.readTime} leestijd
                    </p>
                  </div>
                  <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-kk-orange group-hover:translate-x-0.5 transition-all flex-shrink-0" />
                </Link>
              ))}
            </div>

            <Link
              to="/kennisbank"
              className="inline-flex items-center gap-2 mt-4 text-sm font-medium text-kk-orange hover:gap-3 transition-all"
            >
              {contextCtas[context]}
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
