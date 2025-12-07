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
    <section className="py-20 lg:py-28 bg-muted/30">
      <div className="container">
        {/* Header */}
        <div className="max-w-2xl mb-16">
          <span className="inline-block text-xs font-semibold text-kk-orange uppercase tracking-widest mb-4 opacity-0 animate-fade-in">
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

        {/* Deliverables grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {deliverables.map((item, index) => (
            <div
              key={item.title}
              className="flex items-start gap-4 p-5 rounded-xl bg-card border border-border hover:shadow-sm transition-shadow opacity-0 animate-fade-in"
              style={{ animationDelay: `${250 + index * 60}ms`, animationFillMode: 'forwards' }}
            >
              <div className="w-6 h-6 rounded-full gradient-cta flex items-center justify-center flex-shrink-0 mt-0.5">
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
