import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { SEOHead } from "@/components/SEOHead";
import { StructuredData, klikklaarOrganizationSchema } from "@/components/StructuredData";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";
import * as LucideIcons from "lucide-react";
import { platforms, PlatformData, platformCategories } from "@/data/platforms";

function PlatformsHero() {
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
            <span className="text-foreground">Platforms</span>
          </nav>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            SEO voor <span className="gradient-text">Elk Platform</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            WordPress, Shopify, Wix of een custom website? Wij optimaliseren elk platform voor Google. Ontdek onze aanpak per platform.
          </p>
        </div>
      </div>
    </section>
  );
}

function PlatformCard({ platform }: { platform: PlatformData }) {
  const { ref, isVisible } = useScrollReveal();
  const IconComponent = LucideIcons[platform.icon as keyof typeof LucideIcons] as React.ElementType;

  return (
    <div ref={ref}>
    <Link
      to={`/seo-${platform.slug}`}
      className="group bg-card border border-border rounded-xl p-5 hover:border-kk-orange/30 hover:shadow-premium transition-all duration-300 block"
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
        <span className="font-semibold text-foreground group-hover:text-kk-orange transition-colors">
          {platform.name}
        </span>
      </div>
      <p className="text-sm text-muted-foreground line-clamp-2 ml-[52px]">
        {platform.subheadline}
      </p>
    </Link>
    </div>
  );
}

function PlatformCategorySection({ category, label }: { category: string; label: string }) {
  const { ref, isVisible } = useScrollReveal();
  const items = platforms.filter(p => p.category === category);
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
        {label}
      </h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {items.map(p => <PlatformCard key={p.slug} platform={p} />)}
      </div>
    </section>
  );
}

function PlatformsStats() {
  const { ref, isVisible } = useScrollReveal();
  const stats = [
    { value: `${platforms.length}`, label: "Platforms" },
    { value: "5", label: "Categorieën" },
    { value: "€99", label: "Per maand" },
    { value: "4.2★", label: "Trustpilot" },
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

export default function Platforms() {
  const breadcrumbSchema = {
    type: "BreadcrumbList" as const,
    items: [
      { name: "Home", url: "https://klikklaar.nl/" },
      { name: "Platforms", url: "https://klikklaar.nl/platforms" },
    ],
  };

  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="SEO per Platform | WordPress, Shopify, Wix & Meer | KlikKlaarSEO"
        description={`SEO voor ${platforms.length} platforms: WordPress, Shopify, Wix, Webflow en meer. Wij optimaliseren elk platform voor Google. Vanaf €99/mnd.`}
        canonical="https://klikklaar.nl/platforms"
      />
      <StructuredData schema={breadcrumbSchema} />
      <StructuredData schema={klikklaarOrganizationSchema} />
      <Header />
      <main className="pt-0">
        <PlatformsHero />
        <PlatformsStats />
        <div className="py-16 lg:py-24">
          <div className="container px-4 sm:px-6 max-w-5xl mx-auto">
            {Object.entries(platformCategories).map(([cat, label]) => (
              <PlatformCategorySection key={cat} category={cat} label={label} />
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
