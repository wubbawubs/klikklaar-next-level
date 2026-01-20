import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { SEOHead } from "@/components/SEOHead";
import { StructuredData } from "@/components/StructuredData";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Link, useParams, Navigate } from "react-router-dom";
import { ChevronRight, Clock, ArrowLeft, ArrowRight, BookOpen } from "lucide-react";
import { useState, useEffect } from "react";
import { getPillarBySlug, getArticleBySlug } from "@/data/kennisbank";

export default function KennisbankArticle() {
  const { pillarSlug, articleSlug } = useParams();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 50);
    return () => clearTimeout(timer);
  }, []);

  const pillar = pillarSlug ? getPillarBySlug(pillarSlug) : undefined;
  const article = pillarSlug && articleSlug ? getArticleBySlug(pillarSlug, articleSlug) : undefined;

  if (!pillar || !article) {
    return <Navigate to="/kennisbank" replace />;
  }

  const currentIndex = pillar.articles.findIndex(a => a.slug === articleSlug);
  const prevArticle = currentIndex > 0 ? pillar.articles[currentIndex - 1] : null;
  const nextArticle = currentIndex < pillar.articles.length - 1 ? pillar.articles[currentIndex + 1] : null;

  const breadcrumbSchema = {
    type: "BreadcrumbList" as const,
    items: [
      { name: "Home", url: "https://klikklaar.nl/" },
      { name: "Kennisbank", url: "https://klikklaar.nl/kennisbank" },
      { name: pillar.title, url: `https://klikklaar.nl/kennisbank/${pillar.slug}` },
      { name: article.title, url: `https://klikklaar.nl/kennisbank/${pillar.slug}/${article.slug}` }
    ]
  };

  return (
    <div className="min-h-screen bg-background">
      <SEOHead 
        title={article.metaTitle}
        description={article.metaDescription}
        canonical={`https://klikklaar.nl/kennisbank/${pillar.slug}/${article.slug}`}
      />
      <StructuredData schema={breadcrumbSchema} />
      <Header />
      <main>
        <article className="pt-24 lg:pt-32 pb-16 lg:pb-24">
          <div className="container px-4 sm:px-6">
            <div className="max-w-3xl mx-auto">
              <nav 
                className="flex items-center gap-2 text-sm text-muted-foreground mb-6 flex-wrap"
                style={{ opacity: isVisible ? 1 : 0, transition: 'opacity 0.5s ease-out' }}
              >
                <Link to="/" className="hover:text-foreground transition-colors">Home</Link>
                <ChevronRight className="w-4 h-4" />
                <Link to="/kennisbank" className="hover:text-foreground transition-colors">Kennisbank</Link>
                <ChevronRight className="w-4 h-4" />
                <Link to={`/kennisbank/${pillar.slug}`} className="hover:text-foreground transition-colors">{pillar.title}</Link>
                <ChevronRight className="w-4 h-4" />
                <span className="text-foreground">{article.title}</span>
              </nav>

              <div className="flex items-center gap-3 mb-4" style={{ opacity: isVisible ? 1 : 0, transition: 'opacity 0.5s ease-out 0.1s' }}>
                <span className="px-3 py-1 bg-kk-orange/10 text-kk-orange text-xs font-medium rounded-full">{pillar.title}</span>
                <span className="flex items-center gap-1 text-sm text-muted-foreground">
                  <Clock className="w-4 h-4" />
                  {article.readTime} leestijd
                </span>
              </div>

              <h1 
                className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6"
                style={{ opacity: isVisible ? 1 : 0, transition: 'opacity 0.6s ease-out 0.15s' }}
              >
                {article.title}
              </h1>

              <p 
                className="text-lg text-muted-foreground mb-10"
                style={{ opacity: isVisible ? 1 : 0, transition: 'opacity 0.6s ease-out 0.2s' }}
              >
                {article.description}
              </p>

              <div 
                className="prose prose-lg max-w-none"
                style={{ opacity: isVisible ? 1 : 0, transition: 'opacity 0.6s ease-out 0.25s' }}
              >
                <div 
                  className="[&>h2]:text-2xl [&>h2]:font-bold [&>h2]:text-foreground [&>h2]:mt-10 [&>h2]:mb-4 [&>h3]:text-xl [&>h3]:font-semibold [&>h3]:text-foreground [&>h3]:mt-8 [&>h3]:mb-3 [&>p]:text-muted-foreground [&>p]:mb-4 [&>p]:leading-relaxed [&>ul]:list-disc [&>ul]:pl-6 [&>ul]:mb-4 [&>ul]:text-muted-foreground [&>ol]:list-decimal [&>ol]:pl-6 [&>ol]:mb-4 [&>ol]:text-muted-foreground [&>li]:mb-2 [&>strong]:text-foreground [&>code]:bg-muted [&>code]:px-1.5 [&>code]:py-0.5 [&>code]:rounded [&>code]:text-sm [&>pre]:bg-muted [&>pre]:p-4 [&>pre]:rounded-lg [&>pre]:overflow-x-auto [&>pre]:mb-4"
                  dangerouslySetInnerHTML={{ __html: article.content.replace(/\n/g, '<br/>').replace(/#{2,3}\s/g, (m) => m.includes('###') ? '<h3>' : '<h2>').replace(/<br\/><br\/>/g, '</p><p>') }}
                />
              </div>

              {/* Navigation between articles */}
              <div className="flex flex-col sm:flex-row gap-4 mt-12 pt-8 border-t border-border">
                {prevArticle ? (
                  <Link
                    to={`/kennisbank/${pillar.slug}/${prevArticle.slug}`}
                    className="flex-1 p-4 bg-card border border-border rounded-xl hover:border-kk-orange/30 transition-all group"
                  >
                    <span className="text-xs text-muted-foreground flex items-center gap-1 mb-1">
                      <ArrowLeft className="w-3 h-3" /> Vorig artikel
                    </span>
                    <span className="font-medium text-foreground group-hover:text-kk-orange transition-colors">{prevArticle.title}</span>
                  </Link>
                ) : <div className="flex-1" />}
                {nextArticle && (
                  <Link
                    to={`/kennisbank/${pillar.slug}/${nextArticle.slug}`}
                    className="flex-1 p-4 bg-card border border-border rounded-xl hover:border-kk-orange/30 transition-all text-right group"
                  >
                    <span className="text-xs text-muted-foreground flex items-center justify-end gap-1 mb-1">
                      Volgend artikel <ArrowRight className="w-3 h-3" />
                    </span>
                    <span className="font-medium text-foreground group-hover:text-kk-orange transition-colors">{nextArticle.title}</span>
                  </Link>
                )}
              </div>
            </div>
          </div>
        </article>
      </main>
      <Footer />
    </div>
  );
}
