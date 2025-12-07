import { Zap, MapPin, BarChart3 } from "lucide-react";

const usps = [
  {
    icon: Zap,
    title: "Alles gebeurt automatisch",
    description: "Wij analyseren je website, passen verbeteringen toe en zorgen dat je elke week beter gevonden wordt. Geen taken, geen instellingen.",
  },
  {
    icon: MapPin,
    title: "Meer klanten uit je eigen regio",
    description: "We optimaliseren je website specifiek op jouw plaats, beroep en doelgroep. Zodat je wordt gevonden door mensen die écht in de buurt zoeken.",
  },
  {
    icon: BarChart3,
    title: "Duidelijke resultaten, elke week",
    description: "Je krijgt een helder rapport: wat we verbeterden, hoe je zichtbaarheid stijgt en welke kansen eraan komen. Simpel, in normaal Nederlands.",
  },
];

export function USPSection() {
  return (
    <section className="py-20 lg:py-28 bg-muted/30">
      <div className="container">
        {/* Header */}
        <div className="max-w-2xl mb-16">
          <span className="inline-block text-xs font-semibold text-kk-orange uppercase tracking-widest mb-4 opacity-0 animate-fade-in">
            Waarom KlikKlaar
          </span>
          <h2 className="text-display-sm lg:text-display text-foreground opacity-0 animate-fade-in animation-delay-100">
            Gemaakt voor ondernemers,{" "}
            <span className="gradient-text">niet voor marketeers</span>
          </h2>
          <p className="text-lg text-muted-foreground mt-4 opacity-0 animate-fade-in animation-delay-200">
            Geen lastige termen, geen dashboards met honderd grafieken. KlikKlaar doet alles voor je.
          </p>
        </div>

        {/* USP cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {usps.map((usp, index) => {
            const Icon = usp.icon;
            return (
              <div
                key={usp.title}
                className="p-8 rounded-2xl bg-card border border-border shadow-sm hover:shadow-premium transition-shadow opacity-0 animate-fade-in"
                style={{ animationDelay: `${250 + index * 100}ms`, animationFillMode: 'forwards' }}
              >
                <div className="w-12 h-12 rounded-xl bg-kk-orange/10 flex items-center justify-center mb-6">
                  <Icon className="w-6 h-6 text-kk-orange" />
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
