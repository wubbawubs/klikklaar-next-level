import { HelpCircle, TrendingDown, DollarSign, Clock } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const painPoints = [
  { icon: HelpCircle, text: "Je weet dat je website beter moet, maar waar begin je?" },
  { icon: Clock, text: "SEO voelt als een raadsel waar je geen tijd voor hebt" },
  { icon: TrendingDown, text: "Concurrenten staan hoger — en je weet niet waarom" },
  { icon: DollarSign, text: "Dure bureaus beloven veel, maar leveren weinig" },
];

export function PainSection() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section ref={ref} className="py-12 lg:py-24 haze-gradient-warm relative overflow-hidden">
      <div className="container px-4 sm:px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Left - Header */}
          <div>
            <span 
              className="inline-block text-xs font-semibold text-kk-orange uppercase tracking-widest mb-4"
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0)' : 'translateY(12px)',
                transition: 'opacity 0.6s ease-out, transform 0.6s ease-out'
              }}
            >
              Herkenbaar?
            </span>

            <h2 
              className="text-display-sm lg:text-display text-foreground mb-6"
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0)' : 'translateY(12px)',
                transition: 'opacity 0.6s ease-out 0.1s, transform 0.6s ease-out 0.1s'
              }}
            >
              Je runt een bedrijf, niet een{" "}
              <span className="gradient-text">marketingbureau</span>
            </h2>

            <p 
              className="text-lg text-muted-foreground"
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0)' : 'translateY(12px)',
                transition: 'opacity 0.6s ease-out 0.2s, transform 0.6s ease-out 0.2s'
              }}
            >
              Daarom nemen wij het over. Zodat jij kunt focussen op wat je écht goed kunt.
            </p>
          </div>

          {/* Right - Pain points with first card elevated */}
          <div className="grid gap-4">
            {painPoints.map((pain, index) => {
              const isFirst = index === 0;
              
              return (
                <div
                  key={pain.text}
                  className={`flex items-start gap-4 p-5 rounded-xl bg-card border border-border group 
                    hover:border-red-200 hover:-translate-y-1 
                    transition-all duration-300
                    ${isFirst ? 'shadow-premium hover:shadow-premium-lg' : 'shadow-premium-sm hover:shadow-premium'}`}
                  style={{ 
                    opacity: isVisible ? 1 : 0,
                    transform: isVisible ? 'translateY(0)' : 'translateX(16px)',
                    transition: 'opacity 0.5s ease-out, transform 0.5s ease-out, box-shadow 0.3s, border-color 0.3s',
                    transitionDelay: `${index * 75}ms`
                  }}
                >
                  <div className="w-10 h-10 rounded-lg bg-red-50 flex items-center justify-center flex-shrink-0 group-hover:bg-red-100 transition-colors">
                    <pain.icon className="w-5 h-5 text-red-500" />
                  </div>
                  <p className="text-foreground font-medium leading-relaxed pt-2">{pain.text}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
