import { Zap, Globe, BarChart3 } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const usps = [
  {
    icon: Zap,
    title: "Alles gebeurt automatisch",
    description: "Wij analyseren je website, passen verbeteringen toe en zorgen dat je elke week beter gevonden wordt. Geen taken, geen instellingen.",
    featured: false,
  },
  {
    icon: Globe,
    title: "Gevonden worden door de juiste klanten",
    description: "Of je nu lokaal, nationaal of internationaal werkt — wij zorgen dat jouw ideale klant jou vindt. In Google, in AI-zoekmachines en overal online.",
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
    <section ref={ref} className="py-12 lg:py-24 haze-gradient-top-right relative overflow-hidden">
      <div className="container px-4 sm:px-6 relative z-10">
        {/* Header - Left aligned for asymmetry */}
        <div className="max-w-2xl mb-8 lg:mb-12">
          <span 
            className="inline-block text-xs font-semibold text-kk-orange uppercase tracking-widest mb-4"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateY(0)' : 'translateY(12px)',
              transition: 'opacity 0.6s ease-out, transform 0.6s ease-out'
            }}
          >
            Waarom KlikKlaar
          </span>
          <h2 
            className="text-display-sm lg:text-display text-foreground"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateY(0)' : 'translateY(12px)',
              transition: 'opacity 0.6s ease-out 0.1s, transform 0.6s ease-out 0.1s'
            }}
          >
            Gemaakt voor ondernemers,{" "}
            <span className="gradient-text">niet voor marketeers</span>
          </h2>
          <p 
            className="text-lg text-muted-foreground mt-4"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateY(0)' : 'translateY(12px)',
              transition: 'opacity 0.6s ease-out 0.2s, transform 0.6s ease-out 0.2s'
            }}
          >
            Geen lastige termen, geen dashboards met honderd grafieken. KlikKlaar doet alles voor je.
          </p>
        </div>

        {/* USP cards - Asymmetric grid with featured card elevated */}
        <div className="grid md:grid-cols-3 gap-4 lg:gap-6 items-stretch">
          {usps.map((usp, index) => {
            const Icon = usp.icon;
            return (
              <div
                key={usp.title}
                className={`relative p-6 lg:p-8 rounded-2xl border transition-all duration-500
                  ${usp.featured 
                    ? 'bg-card border-kk-orange/30 shadow-premium-lg hover:shadow-glow-orange' 
                    : 'bg-card border-border shadow-premium-sm hover:shadow-premium hover:-translate-y-1'
                  }`}
                style={{ 
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible ? 'translateY(0)' : 'translateY(24px)',
                  transitionDelay: `${index * 100}ms`
                }}
              >

                <div className={`w-10 h-10 lg:w-12 lg:h-12 rounded-xl flex items-center justify-center mb-4 lg:mb-6 transition-colors
                  ${usp.featured ? 'gradient-cta' : 'bg-kk-orange/10 group-hover:bg-kk-orange/20'}`}>
                  <Icon className={`w-5 h-5 lg:w-6 lg:h-6 ${usp.featured ? 'text-white' : 'text-kk-orange'}`} />
                </div>

                <h3 className="text-lg lg:text-xl font-semibold text-foreground mb-2 lg:mb-3">
                  {usp.title}
                </h3>
                <p className="text-sm lg:text-base text-muted-foreground leading-relaxed">
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
