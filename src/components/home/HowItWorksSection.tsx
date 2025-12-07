import { UserPlus, Search, TrendingUp } from "lucide-react";

const steps = [
  {
    number: "1",
    icon: UserPlus,
    title: "Maak een account aan",
    description: "Vul je website en bedrijfsgegevens in. Duur: 60 seconden.",
  },
  {
    number: "2",
    icon: Search,
    title: "Wij analyseren je website",
    description: "Onze AI bekijkt je content, structuur en vindbaarheid. Je krijgt meteen een overzicht met kansen.",
  },
  {
    number: "3",
    icon: TrendingUp,
    title: "Elke week automatisch beter zichtbaar",
    description: "Je website wordt geoptimaliseerd. Teksten worden verbeterd. Je vindbaarheid stijgt. Jij hoeft niets te doen.",
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
            Simpel opzetten,{" "}
            <span className="gradient-text">daarna niks doen</span>
          </h2>
        </div>

        {/* Steps - 3 steps now */}
        <div className="relative max-w-4xl mx-auto">
          {/* Connector line - desktop only */}
          <div className="hidden lg:block absolute top-[60px] left-[15%] right-[15%] h-0.5 bg-gradient-to-r from-kk-orange via-kk-violet to-kk-orange opacity-20" />
          
          <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
            {steps.map((step, index) => (
              <div
                key={step.number}
                className="relative opacity-0 animate-fade-in text-center"
                style={{ animationDelay: `${150 + index * 100}ms`, animationFillMode: 'forwards' }}
              >
                {/* Step indicator */}
                <div className="relative mx-auto mb-6">
                  <div className="w-[120px] h-[120px] mx-auto rounded-2xl gradient-subtle border border-border flex items-center justify-center relative shadow-premium">
                    <step.icon className="w-10 h-10 text-kk-orange" />
                    
                    {/* Step number badge */}
                    <div className="absolute -top-3 -right-3 w-8 h-8 rounded-full gradient-cta flex items-center justify-center text-white text-sm font-bold shadow-glow-orange">
                      {step.number}
                    </div>
                  </div>
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
