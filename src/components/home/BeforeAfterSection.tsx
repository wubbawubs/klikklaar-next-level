import { TrendingUp, TrendingDown, ArrowRight } from "lucide-react";

const metrics = [
  {
    label: "Google positie",
    before: "#12",
    after: "#3",
    improvement: "+9 posities",
    positive: true,
  },
  {
    label: "Laadtijd",
    before: "4.2s",
    after: "1.8s",
    improvement: "-57%",
    positive: true,
  },
  {
    label: "Maandelijkse bezoekers",
    before: "234",
    after: "892",
    improvement: "+281%",
    positive: true,
  },
  {
    label: "SEO score",
    before: "47/100",
    after: "94/100",
    improvement: "+47 punten",
    positive: true,
  },
];

export function BeforeAfterSection() {
  return (
    <section className="py-20 lg:py-28 section-alt">
      <div className="container">
        {/* Section header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-kk-orange font-semibold text-sm uppercase tracking-wider">
            Resultaten
          </span>
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mt-3 mb-4">
            Voor en na{" "}
            <span className="gradient-text">KlikKlaar</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Echte resultaten van lokale ondernemers die hun website lieten verbeteren.
          </p>
        </div>

        {/* Comparison cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {metrics.map((metric, index) => (
            <div
              key={metric.label}
              className="bg-card rounded-2xl border border-border p-6 opacity-0 animate-fade-in"
              style={{ animationDelay: `${index * 100}ms`, animationFillMode: 'forwards' }}
            >
              <p className="text-sm text-muted-foreground mb-4">{metric.label}</p>
              
              {/* Before/After */}
              <div className="flex items-center gap-3 mb-4">
                <div className="text-center">
                  <p className="text-xs text-muted-foreground mb-1">Voor</p>
                  <p className="text-lg font-semibold text-foreground/60">{metric.before}</p>
                </div>
                <ArrowRight className="w-4 h-4 text-muted-foreground" />
                <div className="text-center">
                  <p className="text-xs text-muted-foreground mb-1">Na</p>
                  <p className="text-lg font-semibold text-foreground">{metric.after}</p>
                </div>
              </div>

              {/* Improvement badge */}
              <div className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-sm font-medium ${
                metric.positive 
                  ? 'bg-green-100 text-green-700' 
                  : 'bg-red-100 text-red-700'
              }`}>
                {metric.positive ? (
                  <TrendingUp className="w-4 h-4" />
                ) : (
                  <TrendingDown className="w-4 h-4" />
                )}
                {metric.improvement}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
