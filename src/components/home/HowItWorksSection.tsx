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
        {/* Left-aligned header */}
        <div className="max-w-2xl mb-20">
          <span className="inline-block text-xs font-semibold text-kk-orange uppercase tracking-widest mb-6 opacity-0 animate-fade-in">
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

        {/* Steps - Asymmetric layout with focal point on step 2 */}
        <div className="relative max-w-6xl">
          {/* Connector line - animated gradient */}
          <div className="hidden lg:block absolute top-[100px] left-[15%] right-[15%] h-0.5 bg-gradient-to-r from-kk-orange/20 via-kk-violet/40 to-kk-orange/20" />
          <div className="hidden lg:block absolute top-[100px] left-[15%] h-0.5 w-24 bg-gradient-to-r from-kk-orange to-kk-violet animate-pulse-subtle" />
          
          <div className="grid md:grid-cols-3 gap-8 lg:gap-12 items-start">
            {steps.map((step, index) => {
              const isFocal = index === 1;
              return (
                <div
                  key={step.number}
                  className={`relative opacity-0 animate-fade-in group ${
                    index === 0 ? 'lg:mt-8' : ''
                  } ${index === 2 ? 'lg:mt-8' : ''}`}
                  style={{ animationDelay: `${150 + index * 100}ms`, animationFillMode: 'forwards' }}
                >
                  {/* Step indicator */}
                  <div className="relative mb-6">
                    <div className={`mx-auto rounded-2xl gradient-subtle border border-border flex items-center justify-center relative shadow-premium group-hover:shadow-premium-lg transition-shadow duration-300 ${
                      isFocal ? 'w-[160px] h-[160px]' : 'w-[140px] h-[140px]'
                    }`}>
                      <step.icon className={`text-kk-orange ${isFocal ? 'w-14 h-14' : 'w-12 h-12'}`} />
                      
                      {/* Step number badge */}
                      <div className={`absolute -top-3 -right-3 rounded-full gradient-cta flex items-center justify-center text-white font-bold shadow-glow-orange ${
                        isFocal ? 'w-10 h-10 text-base' : 'w-8 h-8 text-sm'
                      }`}>
                        {step.number}
                      </div>
                    </div>
                  </div>

                  {/* Text content - centered */}
                  <div className="text-center">
                    {/* Highlight tag */}
                    <div className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-kk-orange/10 text-kk-orange font-semibold mb-3 ${
                      isFocal ? 'text-sm' : 'text-xs'
                    }`}>
                      {step.highlight}
                    </div>

                    {/* Content */}
                    <h3 className={`font-semibold text-foreground mb-3 ${
                      isFocal ? 'text-2xl' : 'text-xl'
                    }`}>
                      {step.title}
                    </h3>
                    <p className={`text-muted-foreground leading-relaxed ${
                      isFocal ? 'text-base' : ''
                    }`}>
                      {step.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
