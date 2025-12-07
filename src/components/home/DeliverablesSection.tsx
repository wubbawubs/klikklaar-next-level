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
    <section ref={ref} className="py-12 lg:py-16 bg-muted/40">
      <div className="container">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span 
            className={`inline-block text-xs font-semibold text-kk-orange uppercase tracking-widest mb-4 ${
              isVisible ? "animate-fade-in" : "opacity-0"
            }`}
          >
            Dit krijg je concreet
          </span>
          <h2 
            className={`text-display-sm lg:text-display text-foreground mb-4 ${
              isVisible ? "animate-fade-in" : "opacity-0"
            }`}
            style={{ animationDelay: "100ms" }}
          >
            Geen vage beloftes,{" "}
            <span className="gradient-text">concrete resultaten</span>
          </h2>
          <p 
            className={`text-lg text-muted-foreground ${
              isVisible ? "animate-fade-in" : "opacity-0"
            }`}
            style={{ animationDelay: "200ms" }}
          >
            Elke week leveren we meetbare verbeteringen aan je website.
          </p>
        </div>

        {/* Deliverables grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {deliverables.map((item, index) => (
            <div
              key={item.title}
              className="flex items-start gap-4 p-5 rounded-xl bg-card border border-border group
                hover:shadow-premium hover:border-kk-orange/20 hover:-translate-y-0.5
                transition-all duration-300"
              style={{ 
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0)' : 'translateY(12px)',
                transition: 'opacity 0.5s ease-out, transform 0.5s ease-out, box-shadow 0.3s, border-color 0.3s',
                transitionDelay: `${index * 50}ms`
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
          ))}
        </div>
      </div>
    </section>
  );
}
