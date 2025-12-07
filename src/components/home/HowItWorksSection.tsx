import { MessageCircle, Search, Rocket } from "lucide-react";

const steps = [
  {
    number: "1",
    icon: MessageCircle,
    title: "Laten we kennismaken",
    description: "Plan een kort gesprek van 15 minuten. We bespreken je website, je doelen en kijken of we kunnen helpen.",
    highlight: "Persoonlijk contact",
  },
  {
    number: "2",
    icon: Search,
    title: "We analyseren samen",
    description: "Onze AI bekijkt je website en we bespreken de kansen. Je krijgt direct inzicht in wat er beter kan.",
    highlight: "Gratis inzicht",
  },
  {
    number: "3",
    icon: Rocket,
    title: "Jij focust, wij optimaliseren",
    description: "Elke week verbeteren wij je website automatisch. Je ziet de resultaten, wij doen het werk. Jij hoeft niets te doen.",
    highlight: "Volledig automatisch",
  },
];

export function HowItWorksSection() {
  return (
    <section className="py-section">
      <div className="container">
        {/* Section header */}
        <div className="text-center max-w-2xl mx-auto mb-20">
          <span className="inline-block text-sm font-semibold text-kk-orange uppercase tracking-wider mb-4 opacity-0 animate-fade-in">
            Hoe we samenwerken
          </span>
          <h2 className="text-display-sm lg:text-display text-foreground opacity-0 animate-fade-in animation-delay-100">
            Persoonlijk contact,{" "}
            <span className="gradient-text">automatische resultaten</span>
          </h2>
          <p className="text-lg text-muted-foreground mt-4 opacity-0 animate-fade-in animation-delay-200">
            We kijken altijd even mee. Geen anonieme software — écht contact.
          </p>
        </div>

        {/* Steps - Personal contact flow */}
        <div className="relative max-w-5xl mx-auto">
          {/* Connector line - desktop only */}
          <div className="hidden lg:block absolute top-[80px] left-[20%] right-[20%] h-0.5 bg-gradient-to-r from-kk-orange via-kk-violet to-kk-orange opacity-20" />
          
          <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
            {steps.map((step, index) => (
              <div
                key={step.number}
                className="relative opacity-0 animate-fade-in text-center group"
                style={{ animationDelay: `${150 + index * 100}ms`, animationFillMode: 'forwards' }}
              >
                {/* Step indicator */}
                <div className="relative mx-auto mb-6">
                  <div className="w-[140px] h-[140px] mx-auto rounded-2xl gradient-subtle border border-border flex items-center justify-center relative shadow-premium group-hover:shadow-premium-lg transition-shadow duration-300">
                    <step.icon className="w-12 h-12 text-kk-orange" />
                    
                    {/* Step number badge */}
                    <div className="absolute -top-3 -right-3 w-8 h-8 rounded-full gradient-cta flex items-center justify-center text-white text-sm font-bold shadow-glow-orange">
                      {step.number}
                    </div>
                  </div>
                </div>

                {/* Highlight tag */}
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-kk-orange/10 text-kk-orange text-xs font-semibold mb-3">
                  {step.highlight}
                </div>

                {/* Content */}
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  {step.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
