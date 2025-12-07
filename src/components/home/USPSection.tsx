import { Zap, Target, Shield } from "lucide-react";

const usps = [
  {
    icon: Zap,
    title: "100% automatisch",
    description: "Geen handleiding. Geen technische kennis. Je website wordt continu verbeterd terwijl jij ondernemer bent.",
  },
  {
    icon: Target,
    title: "Resultaat-gedreven",
    description: "Geen loze beloftes. Je ziet precies welke verbeteringen worden toegepast en wat het oplevert.",
  },
  {
    icon: Shield,
    title: "Altijd in controle",
    description: "Transparante rapportages, maandelijks opzegbaar. Je website blijft van jou.",
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
            Dit maakt ons{" "}
            <span className="gradient-text">anders</span>
          </h2>
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
