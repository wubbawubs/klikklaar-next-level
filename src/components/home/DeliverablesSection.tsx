import { Check } from "lucide-react";

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
  return (
    <section className="py-section section-alt">
      <div className="container">
        {/* Section header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block text-sm font-semibold text-kk-orange uppercase tracking-wider mb-4 opacity-0 animate-fade-in">
            Dit krijg je concreet
          </span>
          <h2 className="text-display-sm lg:text-display text-foreground mb-4 opacity-0 animate-fade-in animation-delay-100">
            Geen vage beloftes,{" "}
            <span className="gradient-text">concrete resultaten</span>
          </h2>
          <p className="text-lg text-muted-foreground opacity-0 animate-fade-in animation-delay-200">
            Elke week leveren we meetbare verbeteringen aan je website.
          </p>
        </div>

        {/* Deliverables as checklist grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
          {deliverables.map((item, index) => (
            <div
              key={item.title}
              className="group flex items-start gap-4 p-5 rounded-xl bg-card border border-border hover:border-kk-orange/30 hover:shadow-premium transition-all duration-300 opacity-0 animate-fade-in"
              style={{ animationDelay: `${200 + index * 60}ms`, animationFillMode: 'forwards' }}
            >
              {/* Checkmark */}
              <div className="w-6 h-6 rounded-full gradient-cta flex items-center justify-center flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform">
                <Check className="w-3.5 h-3.5 text-white" />
              </div>
              
              {/* Content */}
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
