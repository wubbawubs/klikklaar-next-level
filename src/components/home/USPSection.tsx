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
    <section className="py-section section-alt relative overflow-hidden">
      {/* Asymmetric background gradient - right side */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-kk-orange/[0.03] to-transparent -z-10" />
      
      <div className="container">
        {/* Left-aligned header */}
        <div className="max-w-2xl mb-16">
          <span className="inline-block text-xs font-semibold text-kk-orange uppercase tracking-widest mb-6 opacity-0 animate-fade-in">
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

        {/* USP cards - Left-heavy layout: 2 cards stacked left, 1 large right */}
        <div className="grid lg:grid-cols-[1fr_1.2fr] gap-6 lg:gap-8">
          {/* Left column - 2 stacked cards */}
          <div className="space-y-6">
            {usps.slice(0, 2).map((usp, index) => (
              <div
                key={usp.title}
                className="group relative p-6 lg:p-8 rounded-2xl bg-card border border-border shadow-premium hover:shadow-premium-lg transition-all duration-300 opacity-0 animate-fade-in"
                style={{ animationDelay: `${150 + index * 100}ms`, animationFillMode: 'forwards' }}
              >
                {/* Icon - Left aligned */}
                <div className="w-12 h-12 rounded-xl gradient-subtle flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
                  <usp.icon className="w-6 h-6 text-kk-orange" />
                </div>

                <h3 className="text-xl font-semibold text-foreground mb-3">
                  {usp.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {usp.description}
                </p>
              </div>
            ))}
          </div>

          {/* Right column - 1 large featured card */}
          {(() => {
            const featuredUsp = usps[2];
            const FeaturedIcon = featuredUsp.icon;
            return (
              <div
                className="group relative p-8 lg:p-10 rounded-2xl bg-card border border-border shadow-premium-lg hover:shadow-premium-lg transition-all duration-300 opacity-0 animate-fade-in flex flex-col justify-center"
                style={{ animationDelay: '350ms', animationFillMode: 'forwards' }}
              >
                {/* Gradient border on hover */}
                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none gradient-border" />
                
                {/* Icon - Left aligned */}
                <div className="w-16 h-16 rounded-2xl gradient-subtle flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <FeaturedIcon className="w-8 h-8 text-kk-orange" />
                </div>

                <h3 className="text-2xl font-semibold text-foreground mb-4">
                  {featuredUsp.title}
                </h3>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  {featuredUsp.description}
                </p>

                {/* Visual accent */}
                <div className="mt-6 pt-6 border-t border-border">
                  <div className="flex items-center gap-3 text-sm text-kk-orange font-medium">
                    <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse-subtle" />
                    Wekelijks rapport in je inbox
                  </div>
                </div>
              </div>
            );
          })()}
        </div>
      </div>
    </section>
  );
}
