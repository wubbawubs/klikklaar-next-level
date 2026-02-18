import { Link } from "react-router-dom";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { serviceVariantsUitbesteden, serviceVariantsAbonnement } from "@/data/service-variants";
import { ArrowRight } from "lucide-react";

interface DienstLinksSectionProps {
  variant: "uitbesteden" | "abonnement";
}

export function DienstLinksSection({ variant }: DienstLinksSectionProps) {
  const { ref, isVisible } = useScrollReveal();
  const items = variant === "uitbesteden" ? serviceVariantsUitbesteden : serviceVariantsAbonnement;
  const title = variant === "uitbesteden" ? "SEO uitbesteden per dienst" : "SEO abonnementen per dienst";
  const subtitle = variant === "uitbesteden"
    ? "Bekijk per dienst hoe uitbesteden werkt en wat het kost"
    : "Bekijk per dienst welk abonnement bij je past";

  return (
    <section ref={ref} className="py-16 lg:py-24">
      <div className="container px-4 sm:px-6">
        <div
          className="max-w-4xl mx-auto"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? "translateY(0)" : "translateY(24px)",
            transition: "opacity 0.6s ease-out, transform 0.6s ease-out",
          }}
        >
          <div className="text-center mb-10">
            <h2 className="text-2xl sm:text-3xl lg:text-display font-bold text-foreground mb-4">
              {title}
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">{subtitle}</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {items.map((item, index) => (
              <Link
                key={item.slug}
                to={`/diensten/${item.slug}`}
                className="group flex items-center justify-between p-5 bg-card rounded-xl border border-border hover:border-kk-orange/30 hover:shadow-premium transition-all duration-300"
                style={{
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible ? "translateY(0)" : "translateY(16px)",
                  transition: `opacity 0.5s ease-out ${index * 0.06}s, transform 0.5s ease-out ${index * 0.06}s`,
                }}
              >
                <div>
                  <p className="font-semibold text-foreground group-hover:text-kk-orange transition-colors">
                    {item.serviceName}
                  </p>
                  <p className="text-xs text-muted-foreground mt-1">
                    {variant === "uitbesteden" ? "Vergelijk & bespaar" : "Vanaf €99/mnd"}
                  </p>
                </div>
                <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-kk-orange group-hover:translate-x-1 transition-all" />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
