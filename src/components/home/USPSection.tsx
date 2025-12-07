import { Zap, MapPin, BarChart3 } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const usps = [
  {
    icon: Zap,
    title: "Alles gebeurt automatisch",
    description: "Wij analyseren je website, passen verbeteringen toe en zorgen dat je elke week beter gevonden wordt. Geen taken, geen instellingen.",
    featured: false,
  },
  {
    icon: MapPin,
    title: "Meer klanten uit je eigen regio",
    description: "We optimaliseren je website specifiek op jouw plaats, beroep en doelgroep. Zodat je wordt gevonden door mensen die écht in de buurt zoeken.",
    featured: true,
  },
  {
    icon: BarChart3,
    title: "Duidelijke resultaten, elke week",
    description: "Je krijgt een helder rapport: wat we verbeterden, hoe je zichtbaarheid stijgt en welke kansen eraan komen. Simpel, in normaal Nederlands.",
    featured: false,
  },
];

export function USPSection() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section ref={ref} className="py-12 lg:py-16 haze-gradient-top-right relative overflow-hidden">
      <div className="container relative z-10">
        {/* Header - Left aligned for asymmetry */}
        <div className="max-w-2xl mb-16">
          <span 
            className={`inline-block text-xs font-semibold text-kk-orange uppercase tracking-widest mb-4 ${
              isVisible ? "animate-fade-in" : "opacity-0"
            }`}
          >
            Waarom KlikKlaar
          </span>
          <h2 
            className={`text-display-sm lg:text-display text-foreground ${
              isVisible ? "animate-fade-in" : "opacity-0"
            }`}
            style={{ animationDelay: "100ms" }}
          >
            Gemaakt voor ondernemers,{" "}
            <span className="gradient-text">niet voor marketeers</span>
          </h2>
          <p 
            className={`text-lg text-muted-foreground mt-4 ${
              isVisible ? "animate-fade-in" : "opacity-0"
            }`}
            style={{ animationDelay: "200ms" }}
          >
            Geen lastige termen, geen dashboards met honderd grafieken. KlikKlaar doet alles voor je.
          </p>
        </div>

        {/* USP cards - Asymmetric grid with featured card elevated */}
        <div className="grid md:grid-cols-3 gap-6 items-start">
          {usps.map((usp, index) => {
            const Icon = usp.icon;
            return (
              <div
                key={usp.title}
                className={`relative p-8 rounded-2xl border transition-all duration-500
                  ${usp.featured 
                    ? 'bg-card border-kk-orange/30 shadow-premium-lg hover:shadow-glow-orange md:-translate-y-4' 
                    : 'bg-card border-border shadow-premium-sm hover:shadow-premium hover:-translate-y-1.5'
                  }`}
                style={{ 
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible 
                    ? usp.featured ? 'translateY(-16px)' : 'translateY(0)' 
                    : 'translateY(24px)',
                  transitionDelay: `${index * 100}ms`
                }}
              >

                <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-6 transition-colors
                  ${usp.featured ? 'gradient-cta' : 'bg-kk-orange/10 group-hover:bg-kk-orange/20'}`}>
                  <Icon className={`w-6 h-6 ${usp.featured ? 'text-white' : 'text-kk-orange'}`} />
                </div>

                <h3 className="text-xl font-semibold text-foreground mb-3">
                  {usp.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {usp.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
