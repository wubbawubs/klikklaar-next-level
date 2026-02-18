import { Link } from "react-router-dom";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { SEOHead } from "@/components/SEOHead";
import { SITE_URL } from "@/lib/site-config";
import { GradientButton } from "@/components/ui/GradientButton";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { serviceVariantsUitbesteden, serviceVariantsAbonnement } from "@/data/service-variants";
import { serviceVariantsBureau, serviceVariantsScan } from "@/data/service-variants-p2";
import { serviceVariantsUitbestedenP3, serviceVariantsAbonnementP3 } from "@/data/service-variants-p3";
import { serviceVariantsBureauP4, serviceVariantsScanP4 } from "@/data/service-variants-p4";
import { ArrowRight, Briefcase, RefreshCw, Building2, Search } from "lucide-react";

const categories = [
  {
    title: "SEO Uitbesteden",
    description: "Laat de SEO volledig uit handen nemen — zonder gedoe, vanaf €99/mnd.",
    icon: Briefcase,
    pillar: "/diensten/seo-uitbesteden",
    items: [...serviceVariantsUitbesteden, ...serviceVariantsUitbestedenP3],
  },
  {
    title: "SEO Abonnement",
    description: "Kies een vast maandelijks abonnement dat bij jouw bedrijf past.",
    icon: RefreshCw,
    pillar: "/diensten/seo-abonnement",
    items: [...serviceVariantsAbonnement, ...serviceVariantsAbonnementP3],
  },
  {
    title: "SEO Bureau",
    description: "Bureaukwaliteit zonder bureaukosten — vergelijk en bespaar.",
    icon: Building2,
    items: [...serviceVariantsBureau, ...serviceVariantsBureauP4],
  },
  {
    title: "SEO Scan",
    description: "Laat je website scannen op specifieke SEO-onderdelen.",
    icon: Search,
    items: [...serviceVariantsScan, ...serviceVariantsScanP4],
  },
];

export default function Diensten() {
  const { ref: heroRef, isVisible: heroVisible } = useScrollReveal();

  return (
    <>
      <SEOHead
        title="Alle SEO Diensten | KlikKlaarSEO"
        description="Ontdek alle SEO diensten van KlikKlaarSEO: uitbesteden, abonnementen, bureau-alternatief en scans. Vanaf €99/mnd, altijd opzegbaar."
        canonical={`${SITE_URL}/diensten`}
      />
      <Header />
      <main className="pt-20 lg:pt-24">
        {/* Hero */}
        <section ref={heroRef} className="py-16 lg:py-24 bg-gradient-to-b from-muted/50 to-background">
          <div
            className="container px-4 sm:px-6 text-center max-w-3xl mx-auto"
            style={{
              opacity: heroVisible ? 1 : 0,
              transform: heroVisible ? "translateY(0)" : "translateY(24px)",
              transition: "opacity 0.6s ease-out, transform 0.6s ease-out",
            }}
          >
            <h1 className="text-3xl sm:text-4xl lg:text-display font-bold text-foreground mb-4">
              Alle SEO Diensten
            </h1>
            <p className="text-lg text-muted-foreground mb-8">
              Van uitbesteden tot scan: ontdek welke SEO-aanpak bij jouw bedrijf past. Altijd transparant, altijd opzegbaar.
            </p>
            <GradientButton size="lg" asChild>
              <Link to="/contact">Plan een gratis gesprek</Link>
            </GradientButton>
          </div>
        </section>

        {/* Categories */}
        {categories.map((cat, catIdx) => (
          <CategorySection key={cat.title} category={cat} index={catIdx} />
        ))}

        {/* Bottom CTA */}
        <section className="py-16 lg:py-24 bg-muted/30">
          <div className="container px-4 sm:px-6 text-center max-w-2xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">
              Niet zeker welke dienst bij je past?
            </h2>
            <p className="text-muted-foreground mb-8">
              Plan een vrijblijvend gesprek en we helpen je de juiste keuze te maken.
            </p>
            <GradientButton size="lg" asChild>
              <Link to="/contact">Gratis adviesgesprek →</Link>
            </GradientButton>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

interface CategorySectionProps {
  category: (typeof categories)[number];
  index: number;
}

function CategorySection({ category, index }: CategorySectionProps) {
  const { ref, isVisible } = useScrollReveal();
  const Icon = category.icon;

  return (
    <section
      ref={ref}
      className={`py-14 lg:py-20 ${index % 2 === 1 ? "bg-muted/20" : ""}`}
    >
      <div className="container px-4 sm:px-6 max-w-5xl mx-auto">
        <div
          className="mb-8"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? "translateY(0)" : "translateY(20px)",
            transition: "opacity 0.5s ease-out, transform 0.5s ease-out",
          }}
        >
          <div className="flex items-center gap-3 mb-2">
            <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
              <Icon className="w-5 h-5 text-primary" />
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-foreground">
              {category.title}
            </h2>
          </div>
          <p className="text-muted-foreground ml-[52px]">{category.description}</p>
          {category.pillar && (
            <Link
              to={category.pillar}
              className="inline-flex items-center gap-1 text-sm font-medium text-primary hover:underline ml-[52px] mt-2"
            >
              Lees meer over {category.title.toLowerCase()} <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          )}
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {category.items.map((item, i) => (
            <Link
              key={item.slug}
              to={`/diensten/${item.slug}`}
              className="group flex items-center justify-between p-5 bg-card rounded-xl border border-border hover:border-primary/30 hover:shadow-premium transition-all duration-300"
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? "translateY(0)" : "translateY(16px)",
                transition: `opacity 0.4s ease-out ${i * 0.06}s, transform 0.4s ease-out ${i * 0.06}s`,
              }}
            >
              <div>
                <p className="font-semibold text-foreground group-hover:text-primary transition-colors">
                  {item.serviceName}
                </p>
                <p className="text-xs text-muted-foreground mt-1">{category.title}</p>
              </div>
              <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
