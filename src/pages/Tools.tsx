import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { SEOHead } from "@/components/SEOHead";
import { StructuredData, klikklaarOrganizationSchema } from "@/components/StructuredData";
import { SITE_URL } from "@/lib/site-config";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";
import * as LucideIcons from "lucide-react";
import { tools, ToolData, toolCategories, ToolCategory } from "@/data/tools";

function ToolsHero() {
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
            <span className="text-foreground">SEO Tools</span>
          </nav>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Gratis <span className="gradient-text">SEO Tools</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {tools.length} gratis SEO tools om je website te analyseren, optimaliseren en monitoren.
            Geen account nodig, direct resultaat.
          </p>
        </div>
      </div>
    </section>
  );
}

function ToolCard({ tool }: { tool: ToolData }) {
  const { ref, isVisible } = useScrollReveal();
  const IconComponent = LucideIcons[tool.icon as keyof typeof LucideIcons] as React.ElementType;

  return (
    <div ref={ref}>
      <Link
        to={`/tools/${tool.slug}`}
        className="group bg-card border border-border rounded-xl p-5 hover:border-kk-orange/30 hover:shadow-premium transition-all duration-300 block h-full"
        style={{
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
          transition: 'opacity 0.5s ease-out, transform 0.5s ease-out'
        }}
      >
        <div className="flex items-center gap-3 mb-2">
          <div className="w-10 h-10 rounded-lg bg-kk-orange/10 flex items-center justify-center flex-shrink-0">
            {IconComponent && <IconComponent className="w-5 h-5 text-kk-orange" />}
          </div>
          <span className="font-semibold text-foreground group-hover:text-kk-orange transition-colors text-sm">
            {tool.name}
          </span>
        </div>
        <p className="text-sm text-muted-foreground line-clamp-2 ml-[52px]">
          {tool.shortDescription}
        </p>
      </Link>
    </div>
  );
}

function ToolCategorySection({ category, label }: { category: string; label: string }) {
  const { ref, isVisible } = useScrollReveal();
  const items = tools.filter(t => t.category === category);
  if (items.length === 0) return null;

  return (
    <section ref={ref} className="mb-12">
      <h2
        className="text-xl sm:text-2xl font-bold text-foreground mb-6"
        style={{
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? 'translateY(0)' : 'translateY(16px)',
          transition: 'opacity 0.5s ease-out, transform 0.5s ease-out'
        }}
      >
        {label} ({items.length})
      </h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {items.map(t => <ToolCard key={t.slug} tool={t} />)}
      </div>
    </section>
  );
}

function ToolsStats() {
  const { ref, isVisible } = useScrollReveal();
  const categoryCount = Object.keys(toolCategories).length;
  const stats = [
    { value: `${tools.length}`, label: "Gratis tools" },
    { value: `${categoryCount}`, label: "Categorieën" },
    { value: "0", label: "Kosten" },
    { value: "∞", label: "Checks per dag" },
  ];

  return (
    <section ref={ref} className="py-16 lg:py-20 haze-gradient-cool">
      <div className="container px-4 sm:px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto" style={{ opacity: isVisible ? 1 : 0, transform: isVisible ? 'translateY(0)' : 'translateY(24px)', transition: 'opacity 0.6s ease-out, transform 0.6s ease-out' }}>
          {stats.map((stat, i) => (
            <div key={i} className="text-center p-6 bg-card rounded-xl border border-border">
              <p className="text-2xl lg:text-3xl font-bold text-kk-orange mb-2">{stat.value}</p>
              <p className="text-sm text-muted-foreground">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function Tools() {
  const breadcrumbSchema = {
    type: "BreadcrumbList" as const,
    items: [
      { name: "Home", url: `${SITE_URL}/` },
      { name: "SEO Tools", url: `${SITE_URL}/tools` },
    ],
  };

  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title={`${tools.length} Gratis SEO Tools | Check, Analyseer & Optimaliseer | KlikKlaarSEO`}
        description={`${tools.length} gratis SEO tools: van SEO checker tot schema validator. Analyseer je website zonder account. Direct bruikbaar.`}
        canonical={`${SITE_URL}/tools`}
      />
      <StructuredData schema={breadcrumbSchema} />
      <StructuredData schema={klikklaarOrganizationSchema} />
      <Header />
      <main className="pt-0">
        <ToolsHero />
        <ToolsStats />
        <div className="py-16 lg:py-24">
          <div className="container px-4 sm:px-6 max-w-5xl mx-auto">
            {(Object.entries(toolCategories) as [ToolCategory, string][]).map(([cat, label]) => (
              <ToolCategorySection key={cat} category={cat} label={label} />
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
