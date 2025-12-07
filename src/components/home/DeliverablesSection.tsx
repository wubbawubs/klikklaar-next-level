import { Check } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const deliverables = [
  {
    title: "Nieuwe H1 & H2 koppen",
    description: "Krachtige koppen die Google én bezoekers aanspreken",
  },
  {
    title: "Geoptimaliseerde meta-descriptions",
    description: "Teksten die zorgen dat mensen doorklikken in Google",
  },
  {
    title: "Lokale zoekwoorden ingebouwd",
    description: "Gevonden worden door klanten uit jouw regio",
  },
  {
    title: "Snelheidsverbeteringen",
    description: "Snellere website = betere ranking én meer conversie",
  },
  {
    title: "Technische fixes",
    description: "Schema markup, structuur, en alles wat Google verwacht",
  },
  {
    title: "Wekelijks rapport",
    description: "Simpel overzicht in normaal Nederlands — geen jargon",
  },
];

export function DeliverablesSection() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section ref={ref} className="py-12 lg:py-24 haze-gradient-warm relative overflow-hidden">
      <div className="max-w-container-wide mx-auto px-4 sm:px-6 lg:px-10">
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
            Dit krijg je concreet
          </span>
          <h2 
            className="text-display-sm lg:text-display text-foreground mb-4"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateY(0)' : 'translateY(12px)',
              transition: 'opacity 0.6s ease-out 0.1s, transform 0.6s ease-out 0.1s'
            }}
          >
            Geen vage beloftes,{" "}
            <span className="gradient-text">concrete resultaten</span>
          </h2>
          <p 
            className="text-lg text-muted-foreground"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateY(0)' : 'translateY(12px)',
              transition: 'opacity 0.6s ease-out 0.2s, transform 0.6s ease-out 0.2s'
            }}
          >
            Elke week leveren we meetbare verbeteringen aan je website.
          </p>
        </div>

        {/* Deliverables grid - Staggered 3-2-1 layout */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {deliverables.map((item, index) => {
            // Create staggered visual weight
            const isFirstRow = index < 3;
            
            return (
              <div
                key={item.title}
                className={`flex items-start gap-3 lg:gap-4 p-4 lg:p-5 rounded-xl bg-card border border-border group
                  hover:border-kk-orange/20 hover:-translate-y-1
                  transition-all duration-300
                  ${isFirstRow ? 'shadow-premium hover:shadow-premium-lg' : 'shadow-premium-sm hover:shadow-premium'}`}
                style={{ 
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible ? 'translateY(0)' : 'translateY(16px)',
                  transition: 'opacity 0.5s ease-out, transform 0.5s ease-out, box-shadow 0.3s, border-color 0.3s',
                  transitionDelay: `${index * 60}ms`
                }}
              >
                <div className="w-6 h-6 rounded-full gradient-cta flex items-center justify-center flex-shrink-0 mt-0.5 group-hover:shadow-glow-orange transition-shadow">
                  <Check className="w-3.5 h-3.5 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">{item.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
