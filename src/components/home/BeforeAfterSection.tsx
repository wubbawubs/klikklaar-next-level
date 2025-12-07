import { TrendingUp, ArrowRight, Quote } from "lucide-react";

const metrics = [
  { label: "Google positie", before: "#12", after: "#3", improvement: "+9 posities" },
  { label: "Laadtijd", before: "4.2s", after: "1.8s", improvement: "-57%" },
  { label: "Maandelijkse bezoekers", before: "234", after: "892", improvement: "+281%" },
  { label: "SEO score", before: "47", after: "94", improvement: "+47 punten" },
];

export function BeforeAfterSection() {
  return (
    <section className="py-20 lg:py-28">
      <div className="container">
        {/* Header */}
        <div className="max-w-2xl mb-16">
          <span className="inline-block text-xs font-semibold text-kk-orange uppercase tracking-widest mb-4 opacity-0 animate-fade-in">
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

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left - Metrics */}
          <div className="grid grid-cols-2 gap-4 opacity-0 animate-fade-in animation-delay-200" style={{ animationFillMode: 'forwards' }}>
            {metrics.map((metric, index) => (
              <div
                key={metric.label}
                className="bg-card rounded-xl border border-border p-5 hover:shadow-sm transition-shadow"
              >
                <p className="text-xs font-medium text-muted-foreground mb-3 uppercase tracking-wider">{metric.label}</p>
                
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-muted-foreground/60">{metric.before}</span>
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

          {/* Right - Testimonial */}
          <div className="opacity-0 animate-fade-in animation-delay-300" style={{ animationFillMode: 'forwards' }}>
            <div className="p-8 bg-muted/50 rounded-2xl border border-border">
              <Quote className="w-8 h-8 text-kk-orange/30 mb-4" />
              <p className="text-xl text-foreground mb-6 leading-relaxed italic">
                "Binnen 2 maanden stond ik op plek 3 in Google. Ik krijg nu elke week nieuwe aanvragen via mijn website."
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-kk-orange/10 flex items-center justify-center text-kk-orange font-bold text-lg">
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
