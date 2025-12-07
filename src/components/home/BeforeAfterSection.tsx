import { TrendingUp, ArrowRight, Quote } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const metrics = [
  { label: "Google positie", before: "#12", after: "#3", improvement: "+9 posities" },
  { label: "Laadtijd", before: "4.2s", after: "1.8s", improvement: "-57%" },
  { label: "Maandelijkse bezoekers", before: "234", after: "892", improvement: "+281%" },
  { label: "SEO score", before: "47", after: "94", improvement: "+47 punten" },
];

export function BeforeAfterSection() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section ref={ref} className="py-12 lg:py-24 haze-gradient-cool relative overflow-hidden">
      <div className="container px-4 sm:px-6 relative z-10">
        <div className="grid lg:grid-cols-5 gap-8 lg:gap-16 items-start">
          {/* Left - Header & Metrics (narrower container) */}
          <div className="lg:col-span-3">
            {/* Header - Left aligned */}
            <div className="max-w-lg mb-10">
              <span 
                className="inline-block text-xs font-semibold text-kk-orange uppercase tracking-widest mb-4"
                style={{
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible ? 'translateY(0)' : 'translateY(12px)',
                  transition: 'opacity 0.6s ease-out, transform 0.6s ease-out'
                }}
              >
                Bewezen resultaten
              </span>
              <h2 
                className="text-display-sm lg:text-display text-foreground mb-4"
                style={{
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible ? 'translateY(0)' : 'translateY(12px)',
                  transition: 'opacity 0.6s ease-out 0.1s, transform 0.6s ease-out 0.1s'
                }}
              >
                Van onzichtbaar naar{" "}
                <span className="gradient-text">top 3 in Google</span>
              </h2>
              <p 
                className="text-lg text-muted-foreground"
                style={{
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible ? 'translateY(0)' : 'translateY(12px)',
                  transition: 'opacity 0.6s ease-out 0.2s, transform 0.6s ease-out 0.2s'
                }}
              >
                Echte cijfers van een echte klant — binnen 3 maanden.
              </p>
            </div>

            {/* Metrics grid - narrower */}
            <div className="grid grid-cols-2 gap-4 max-w-lg">
              {metrics.map((metric, index) => (
                <div
                  key={metric.label}
                  className="bg-card rounded-xl border border-border p-5 group 
                    hover:border-kk-orange/20 hover:-translate-y-1 
                    shadow-premium-sm hover:shadow-premium
                    transition-all duration-300"
                  style={{ 
                    opacity: isVisible ? 1 : 0,
                    transform: isVisible ? 'translateY(0)' : 'translateY(12px)',
                    transition: 'opacity 0.5s ease-out, transform 0.5s ease-out, box-shadow 0.3s, border-color 0.3s',
                    transitionDelay: `${index * 75}ms`
                  }}
                >
                  <p className="text-xs font-medium text-muted-foreground mb-3 uppercase tracking-wider">{metric.label}</p>
                  
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-muted-foreground/60 line-through">{metric.before}</span>
                    <ArrowRight className="w-4 h-4 text-kk-orange" />
                    <span className="text-lg font-bold text-foreground">{metric.after}</span>
                  </div>

                  <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-green-50 text-green-700 text-sm font-medium">
                    <TrendingUp className="w-3.5 h-3.5" />
                    {metric.improvement}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right - Testimonial (wider, elevated) */}
          <div 
            className="lg:col-span-2"
            style={{ 
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateY(0)' : 'translateX(20px)',
              transition: 'opacity 0.7s ease-out 0.2s, transform 0.7s ease-out 0.2s'
            }}
          >
            <div className="p-8 bg-muted/50 rounded-2xl border border-border shadow-premium-lg hover:shadow-glow-orange/30 transition-shadow duration-300 lg:mt-8">
              <Quote className="w-8 h-8 text-kk-orange/30 mb-4" />
              <p className="text-xl text-foreground mb-6 leading-relaxed italic">
                "Binnen 2 maanden stond ik op plek 3 in Google. Ik krijg nu elke week nieuwe aanvragen via mijn website."
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full gradient-cta flex items-center justify-center text-white font-bold text-lg shadow-glow-orange">
                  M
                </div>
                <div>
                  <p className="font-semibold text-foreground">Marco de Vries</p>
                  <p className="text-sm text-muted-foreground">Loodgieter, Amsterdam</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
