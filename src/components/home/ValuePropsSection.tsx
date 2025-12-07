import { Sparkles, Target, Gauge, Shield } from "lucide-react";

const valueProps = [
  {
    icon: Sparkles,
    title: "Automatische optimalisaties",
    description: "Je website wordt continu verbeterd, zonder dat jij er iets voor hoeft te doen.",
    color: "kk-orange",
  },
  {
    icon: Target,
    title: "Meer lokale klanten",
    description: "Word beter gevonden door klanten in jouw regio die actief zoeken naar jouw diensten.",
    color: "kk-violet",
  },
  {
    icon: Gauge,
    title: "Snellere website",
    description: "Een snelle website zorgt voor betere resultaten en tevreden bezoekers.",
    color: "kk-orange",
  },
  {
    icon: Shield,
    title: "Altijd up-to-date",
    description: "Wij houden je website in topconditie met wekelijkse checks en verbeteringen.",
    color: "kk-violet",
  },
];

export function ValuePropsSection() {
  return (
    <section className="py-20 lg:py-28">
      <div className="container">
        {/* Section header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Alles wat je nodig hebt voor{" "}
            <span className="gradient-text">online groei</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Geen technische kennis nodig. Wij regelen alles, zodat jij je kunt focussen op je klanten.
          </p>
        </div>

        {/* Cards grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {valueProps.map((prop, index) => (
            <div
              key={prop.title}
              className="group relative p-6 rounded-2xl bg-card border border-border hover:border-kk-orange/30 transition-all duration-300 hover:shadow-xl hover:shadow-kk-orange/5 opacity-0 animate-fade-in"
              style={{ animationDelay: `${index * 100}ms`, animationFillMode: 'forwards' }}
            >
              {/* Icon */}
              <div className={`w-12 h-12 rounded-xl mb-4 flex items-center justify-center transition-transform duration-300 group-hover:scale-110 ${
                prop.color === 'kk-orange' ? 'bg-kk-orange/10' : 'bg-kk-violet/10'
              }`}>
                <prop.icon className={`w-6 h-6 ${
                  prop.color === 'kk-orange' ? 'text-kk-orange' : 'text-kk-violet'
                }`} />
              </div>

              {/* Content */}
              <h3 className="text-lg font-semibold text-foreground mb-2">
                {prop.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {prop.description}
              </p>

              {/* Hover gradient */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-kk-orange/5 to-kk-violet/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
