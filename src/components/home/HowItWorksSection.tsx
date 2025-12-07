import { MessageCircle, Search, Rocket } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

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
    focal: true,
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
  const { ref, isVisible } = useScrollReveal();

  return (
    <section ref={ref} className="py-12 lg:py-24 haze-gradient-warm relative overflow-hidden">
      <div className="container px-4 sm:px-6 relative z-10">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-8 lg:mb-12">
          <span 
            className="inline-block text-xs font-semibold text-kk-orange uppercase tracking-widest mb-4"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateY(0)' : 'translateY(12px)',
              transition: 'opacity 0.6s ease-out, transform 0.6s ease-out'
            }}
          >
            Hoe we samenwerken
          </span>
          <h2 
            className="text-display-sm lg:text-display text-foreground"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateY(0)' : 'translateY(12px)',
              transition: 'opacity 0.6s ease-out 0.1s, transform 0.6s ease-out 0.1s'
            }}
          >
            Persoonlijk contact,{" "}
            <span className="gradient-text">automatische resultaten</span>
          </h2>
          <p 
            className="text-lg text-muted-foreground mt-4"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateY(0)' : 'translateY(12px)',
              transition: 'opacity 0.6s ease-out 0.2s, transform 0.6s ease-out 0.2s'
            }}
          >
            We kijken altijd even mee. Geen anonieme software — écht contact.
          </p>
        </div>

        {/* Steps - Asymmetric with focal point on step 2 */}
        <div className="grid md:grid-cols-3 gap-4 lg:gap-8 items-end">
          {steps.map((step, index) => {
            const Icon = step.icon;
            const isFocal = step.focal;
            
            // Animation type based on position
            const getAnimation = () => {
              if (index === 0) return 'translateX(-20px)';
              if (index === 2) return 'translateX(20px)';
              return 'translateY(24px) scale(0.98)';
            };

            return (
              <div
                key={step.number}
                className={`relative group ${isFocal ? 'md:-mb-6' : ''}`}
                style={{ 
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible 
                    ? isFocal ? 'translateY(-24px)' : 'translateY(0)' 
                    : getAnimation(),
                  transition: 'opacity 0.7s ease-out, transform 0.7s ease-out',
                  transitionDelay: `${index * 120}ms`
                }}
              >
                {/* Connector line */}
                {index < 2 && (
                  <div className="hidden md:block absolute top-16 lg:top-20 left-[calc(50%+50px)] lg:left-[calc(50%+70px)] w-[calc(100%-50px)] lg:w-[calc(100%-70px)] h-px bg-gradient-to-r from-border to-transparent" />
                )}

                {/* Icon box - smaller on mobile */}
                <div className={`relative mx-auto mb-4 lg:mb-6 rounded-2xl bg-muted/50 border border-border flex items-center justify-center 
                  group-hover:border-kk-orange/30 transition-all duration-300
                  ${isFocal 
                    ? 'w-20 h-20 sm:w-28 sm:h-28 lg:w-40 lg:h-40 shadow-premium-lg group-hover:shadow-glow-orange' 
                    : 'w-16 h-16 sm:w-24 sm:h-24 lg:w-32 lg:h-32 shadow-premium-sm group-hover:shadow-premium'
                  }`}>
                  <Icon className={`text-kk-orange group-hover:scale-110 transition-transform duration-300 ${isFocal ? 'w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12' : 'w-6 h-6 sm:w-8 sm:h-8 lg:w-10 lg:h-10'}`} />
                  <div className={`absolute -top-1.5 -right-1.5 lg:-top-2 lg:-right-2 rounded-full gradient-cta flex items-center justify-center text-white font-bold shadow-glow-orange
                    ${isFocal ? 'w-7 h-7 sm:w-8 sm:h-8 lg:w-10 lg:h-10 text-xs sm:text-sm lg:text-base' : 'w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 text-xs sm:text-sm'}`}>
                    {step.number}
                  </div>
                </div>

                {/* Content */}
                <div className="text-center">
                  <span className={`inline-block px-2 sm:px-3 py-1 rounded-full text-kk-orange text-[10px] sm:text-xs font-semibold mb-2 sm:mb-3
                    ${isFocal ? 'bg-kk-orange/15' : 'bg-kk-orange/10'}`}>
                    {step.highlight}
                  </span>
                  <h3 className={`font-semibold text-foreground mb-2 sm:mb-3 ${isFocal ? 'text-lg sm:text-xl lg:text-2xl' : 'text-base sm:text-lg lg:text-xl'}`}>
                    {step.title}
                  </h3>
                  <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
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
