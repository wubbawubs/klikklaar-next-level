import { Search, Wand2, Rocket, TrendingUp } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: Search,
    title: "Analyse",
    description: "We scannen je website op alle verbeterpunten.",
  },
  {
    number: "02",
    icon: Wand2,
    title: "Optimalisatie",
    description: "Automatische verbeteringen worden toegepast.",
  },
  {
    number: "03",
    icon: Rocket,
    title: "Activatie",
    description: "Verbeteringen gaan direct live op je website.",
  },
  {
    number: "04",
    icon: TrendingUp,
    title: "Groei",
    description: "Je ziet resultaat in meer bezoekers en klanten.",
  },
];

export function HowItWorksSection() {
  return (
    <section className="py-section">
      <div className="container">
        {/* Section header */}
        <div className="text-center max-w-2xl mx-auto mb-20">
          <span className="inline-block text-sm font-semibold text-kk-orange uppercase tracking-wider mb-4 opacity-0 animate-fade-in">
            Hoe het werkt
          </span>
          <h2 className="text-display-sm lg:text-display text-foreground opacity-0 animate-fade-in animation-delay-100">
            Van analyse tot groei in{" "}
            <span className="gradient-text">4 stappen</span>
          </h2>
        </div>

        {/* Steps with connector line */}
        <div className="relative">
          {/* Connector line - desktop only */}
          <div className="hidden lg:block absolute top-[60px] left-[10%] right-[10%] h-0.5 bg-gradient-to-r from-kk-orange via-kk-violet to-kk-orange opacity-20" />
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
            {steps.map((step, index) => (
              <div
                key={step.number}
                className="relative opacity-0 animate-fade-in text-center"
                style={{ animationDelay: `${150 + index * 100}ms`, animationFillMode: 'forwards' }}
              >
                {/* Step indicator */}
                <div className="relative mx-auto mb-6">
                  <div className="w-[120px] h-[120px] mx-auto rounded-2xl gradient-subtle border border-border flex items-center justify-center relative">
                    <step.icon className="w-10 h-10 text-kk-orange" />
                    
                    {/* Step number badge */}
                    <div className="absolute -top-3 -right-3 w-8 h-8 rounded-full gradient-cta flex items-center justify-center text-white text-sm font-bold shadow-glow-orange">
                      {index + 1}
                    </div>
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  {step.title}
                </h3>
                <p className="text-muted-foreground">
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
