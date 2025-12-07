import { TrendingUp, ArrowRight, Quote } from "lucide-react";
import { useState, useEffect } from "react";

const metrics = [
  {
    label: "Google positie",
    before: "#12",
    after: "#3",
    improvement: "+9 posities",
  },
  {
    label: "Laadtijd",
    before: "4.2s",
    after: "1.8s",
    improvement: "-57%",
  },
  {
    label: "Maandelijkse bezoekers",
    before: "234",
    after: "892",
    improvement: "+281%",
  },
  {
    label: "SEO score",
    before: "47",
    after: "94",
    improvement: "+47 punten",
  },
];

export function BeforeAfterSection() {
  const [animatedMetrics, setAnimatedMetrics] = useState<boolean[]>([false, false, false, false]);

  // Staggered animation on mount
  useEffect(() => {
    const timers: NodeJS.Timeout[] = [];
    metrics.forEach((_, index) => {
      const timer = setTimeout(() => {
        setAnimatedMetrics(prev => {
          const newState = [...prev];
          newState[index] = true;
          return newState;
        });
      }, 300 + index * 150);
      timers.push(timer);
    });
    return () => timers.forEach(t => clearTimeout(t));
  }, []);

  return (
    <section className="py-section">
      <div className="container">
        {/* Section header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block text-sm font-semibold text-kk-orange uppercase tracking-wider mb-4 opacity-0 animate-fade-in">
            Bewezen resultaten
          </span>
          <h2 className="text-display-sm lg:text-display text-foreground mb-4 opacity-0 animate-fade-in animation-delay-100">
            Van onzichtbaar naar{" "}
            <span className="gradient-text">top 3 in Google</span>
          </h2>
          <p className="text-lg text-muted-foreground opacity-0 animate-fade-in animation-delay-200">
            Echte cijfers van een echte klant — binnen 3 maanden.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
          {/* Left - Visual comparison mockup */}
          <div className="relative opacity-0 animate-fade-in animation-delay-200">
            <div className="grid grid-cols-2 gap-4">
              {/* Before mockup */}
              <div className="relative">
                <div className="absolute -top-3 left-4 px-3 py-1 rounded-full bg-red-100 text-red-700 text-xs font-semibold">
                  Voor
                </div>
                <div className="bg-card rounded-xl border border-border p-4 shadow-sm">
                  <div className="w-full h-4 bg-muted rounded mb-3" />
                  <div className="w-3/4 h-3 bg-muted rounded mb-2" />
                  <div className="w-full h-3 bg-muted rounded mb-2" />
                  <div className="w-2/3 h-3 bg-muted rounded mb-4" />
                  <div className="flex items-center gap-2 text-red-500 text-sm">
                    <span className="w-2 h-2 rounded-full bg-red-500" />
                    Score: 47
                  </div>
                </div>
              </div>

              {/* After mockup */}
              <div className="relative">
                <div className="absolute -top-3 left-4 px-3 py-1 rounded-full bg-green-100 text-green-700 text-xs font-semibold">
                  Na
                </div>
                <div className="bg-card rounded-xl border-2 border-green-200 p-4 shadow-premium">
                  <div className="w-full h-4 bg-gradient-to-r from-kk-orange/20 to-kk-violet/20 rounded mb-3" />
                  <div className="w-3/4 h-3 bg-muted rounded mb-2" />
                  <div className="w-full h-3 bg-muted rounded mb-2" />
                  <div className="w-2/3 h-3 bg-muted rounded mb-4" />
                  <div className="flex items-center gap-2 text-green-600 text-sm font-medium">
                    <span className="w-2 h-2 rounded-full bg-green-500" />
                    Score: 94
                  </div>
                </div>
              </div>
            </div>

            {/* Testimonial quote */}
            <div className="mt-6 p-5 bg-muted/50 rounded-xl border border-border">
              <Quote className="w-6 h-6 text-kk-orange/40 mb-2" />
              <p className="text-foreground italic mb-3">
                "Binnen 2 maanden stond ik op plek 3 in Google. Ik krijg nu elke week nieuwe aanvragen."
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full gradient-subtle flex items-center justify-center text-kk-orange font-semibold">
                  M
                </div>
                <div>
                  <p className="text-sm font-medium text-foreground">Marco de Vries</p>
                  <p className="text-xs text-muted-foreground">Loodgieter, Amsterdam</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right - Metrics grid */}
          <div className="grid grid-cols-2 gap-4">
            {metrics.map((metric, index) => (
              <div
                key={metric.label}
                className={`bg-card rounded-2xl border border-border p-5 text-center shadow-sm hover:shadow-premium transition-all duration-500 ${
                  animatedMetrics[index] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                }`}
              >
                <p className="text-xs font-medium text-muted-foreground mb-4 uppercase tracking-wider">{metric.label}</p>
                
                {/* Before/After comparison */}
                <div className="flex items-center justify-center gap-3 mb-4">
                  <div>
                    <p className="text-xs text-muted-foreground mb-1">Voor</p>
                    <p className="text-lg font-medium text-muted-foreground/60">{metric.before}</p>
                  </div>
                  <ArrowRight className="w-4 h-4 text-kk-orange" />
                  <div>
                    <p className="text-xs text-muted-foreground mb-1">Na</p>
                    <p className="text-lg font-bold text-foreground">{metric.after}</p>
                  </div>
                </div>

                {/* Improvement badge */}
                <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-green-50 text-green-700 text-sm font-semibold">
                  <TrendingUp className="w-3.5 h-3.5" />
                  {metric.improvement}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
