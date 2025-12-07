import { Search, Wand2, Rocket, TrendingUp } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: Search,
    title: "Analyse",
    description: "We scannen je website op verbeterpunten en vergelijken met je concurrenten.",
  },
  {
    number: "02",
    icon: Wand2,
    title: "Optimalisatie",
    description: "Automatische verbeteringen worden toegepast: teksten, snelheid, en vindbaarheid.",
  },
  {
    number: "03",
    icon: Rocket,
    title: "Activatie",
    description: "De verbeteringen gaan live via onze slimme toplayer-technologie.",
  },
  {
    number: "04",
    icon: TrendingUp,
    title: "Groei",
    description: "Je website groeit in zichtbaarheid en trekt meer klanten aan.",
  },
];

export function HowItWorksSection() {
  return (
    <section className="py-20 lg:py-28 section-alt">
      <div className="container">
        {/* Section header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-kk-orange font-semibold text-sm uppercase tracking-wider">
            Hoe het werkt
          </span>
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mt-3 mb-4">
            Van analyse tot groei in{" "}
            <span className="gradient-text">4 stappen</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Een simpel proces dat volledig automatisch werkt. Jij hoeft niets te doen.
          </p>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Connection line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-kk-orange via-kk-violet to-kk-orange -translate-y-1/2" />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div
                key={step.number}
                className="relative opacity-0 animate-fade-in"
                style={{ animationDelay: `${index * 150}ms`, animationFillMode: 'forwards' }}
              >
                {/* Card */}
                <div className="relative bg-card rounded-2xl border border-border p-6 lg:p-8 text-center hover:shadow-xl transition-shadow duration-300">
                  {/* Step number */}
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-8 h-8 rounded-full gradient-cta flex items-center justify-center text-white text-sm font-bold">
                    {index + 1}
                  </div>

                  {/* Icon */}
                  <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-kk-orange/10 to-kk-violet/10 flex items-center justify-center">
                    <step.icon className="w-8 h-8 text-kk-orange" />
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-semibold text-foreground mb-2">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
