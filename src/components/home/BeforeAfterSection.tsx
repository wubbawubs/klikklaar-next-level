import { TrendingUp, ArrowRight } from "lucide-react";

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
  return (
    <section className="py-section">
      <div className="container">
        {/* Section header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block text-sm font-semibold text-kk-orange uppercase tracking-wider mb-4 opacity-0 animate-fade-in">
            Resultaten
          </span>
          <h2 className="text-display-sm lg:text-display text-foreground mb-4 opacity-0 animate-fade-in animation-delay-100">
            Echte cijfers van{" "}
            <span className="gradient-text">echte klanten</span>
          </h2>
          <p className="text-lg text-muted-foreground opacity-0 animate-fade-in animation-delay-200">
            Gemiddelde resultaten binnen 3 maanden.
          </p>
        </div>

        {/* Metrics grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {metrics.map((metric, index) => (
            <div
              key={metric.label}
              className="bg-card rounded-2xl border border-border p-6 text-center shadow-premium opacity-0 animate-fade-in"
              style={{ animationDelay: `${200 + index * 80}ms`, animationFillMode: 'forwards' }}
            >
              <p className="text-sm font-medium text-muted-foreground mb-5">{metric.label}</p>
              
              {/* Before/After comparison */}
              <div className="flex items-center justify-center gap-4 mb-5">
                <div>
                  <p className="text-xs text-muted-foreground mb-1">Voor</p>
                  <p className="text-xl font-semibold text-muted-foreground/60">{metric.before}</p>
                </div>
                <ArrowRight className="w-5 h-5 text-kk-orange" />
                <div>
                  <p className="text-xs text-muted-foreground mb-1">Na</p>
                  <p className="text-xl font-bold text-foreground">{metric.after}</p>
                </div>
              </div>

              {/* Improvement badge */}
              <div className="inline-flex items-center gap-1.5 px-3 py-2 rounded-lg bg-green-50 text-green-700 text-sm font-semibold">
                <TrendingUp className="w-4 h-4" />
                {metric.improvement}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
