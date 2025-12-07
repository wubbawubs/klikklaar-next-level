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
    description: "Elke week verbeteren wij je website automatisch. Je ziet de resultaten, wij doen het werk.",
    highlight: "Volledig automatisch",
  },
];

export function HowItWorksSection() {
  return (
    <section className="py-20 lg:py-28">
      <div className="container">
        {/* Header */}
        <div className="max-w-2xl mb-16">
          <span className="inline-block text-xs font-semibold text-kk-orange uppercase tracking-widest mb-4 opacity-0 animate-fade-in">
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

        {/* Steps */}
        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div
                key={step.number}
                className="relative opacity-0 animate-fade-in"
                style={{ animationDelay: `${250 + index * 100}ms`, animationFillMode: 'forwards' }}
              >
                {/* Connector line */}
                {index < 2 && (
                  <div className="hidden md:block absolute top-16 left-[calc(50%+60px)] w-[calc(100%-60px)] h-px bg-border" />
                )}

                {/* Icon box */}
                <div className="relative w-32 h-32 mx-auto mb-6 rounded-2xl bg-muted/50 border border-border flex items-center justify-center">
                  <Icon className="w-10 h-10 text-kk-orange" />
                  <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full gradient-cta flex items-center justify-center text-white text-sm font-bold">
                    {step.number}
                  </div>
                </div>

                {/* Content */}
                <div className="text-center">
                  <span className="inline-block px-3 py-1 rounded-full bg-kk-orange/10 text-kk-orange text-xs font-semibold mb-3">
                    {step.highlight}
                  </span>
                  <h3 className="text-xl font-semibold text-foreground mb-3">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
