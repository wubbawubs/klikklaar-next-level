import { Zap, MapPin, BarChart3 } from "lucide-react";

const usps = [
  {
    icon: Zap,
    title: "Alles gebeurt automatisch",
    description: "Wij analyseren je website, passen verbeteringen toe en zorgen dat je elke week beter gevonden wordt. Geen taken, geen instellingen, geen technische rommel.",
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
    <section className="py-section section-alt">
      <div className="container">
        {/* Section header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block text-sm font-semibold text-kk-orange uppercase tracking-wider mb-4 opacity-0 animate-fade-in">
            Waarom KlikKlaar
          </span>
          <h2 className="text-display-sm lg:text-display text-foreground opacity-0 animate-fade-in animation-delay-100">
            Gemaakt voor ondernemers,{" "}
            <span className="gradient-text">niet voor marketeers</span>
          </h2>
          <p className="text-lg text-muted-foreground mt-4 opacity-0 animate-fade-in animation-delay-200">
            Geen lastige termen, geen dashboards met honderd grafieken. KlikKlaar doet alles voor je en laat alleen zien wat écht telt.
          </p>
        </div>

        {/* USP cards - 3 cards */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {usps.map((usp, index) => (
            <div
              key={usp.title}
              className="group relative p-8 rounded-2xl bg-card border border-border shadow-premium hover:shadow-premium-lg transition-all duration-300 opacity-0 animate-fade-in"
              style={{ animationDelay: `${150 + index * 100}ms`, animationFillMode: 'forwards' }}
            >
              {/* Icon */}
              <div className="w-14 h-14 rounded-xl gradient-subtle flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <usp.icon className="w-7 h-7 text-kk-orange" />
              </div>

              {/* Content */}
              <h3 className="text-xl font-semibold text-foreground mb-3">
                {usp.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {usp.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
