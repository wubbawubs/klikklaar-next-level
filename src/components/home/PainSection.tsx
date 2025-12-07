import { X, Clock, HelpCircle, TrendingDown } from "lucide-react";

const painPoints = [
  { icon: Clock, text: "Geen tijd voor technische website-dingen" },
  { icon: HelpCircle, text: "Geen idee waar te beginnen met SEO" },
  { icon: TrendingDown, text: "Concurrent staat hoger in Google" },
  { icon: X, text: "Dure bureaus met weinig resultaat" },
];

export function PainSection() {
  return (
    <section className="py-section">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center">
          {/* Section label */}
          <span className="inline-block text-sm font-semibold text-kk-orange uppercase tracking-wider mb-4 opacity-0 animate-fade-in">
            Herkenbaar?
          </span>

          {/* Headline */}
          <h2 className="text-display-sm lg:text-display text-foreground mb-6 opacity-0 animate-fade-in animation-delay-100">
            Lokale ondernemers hebben geen tijd voor{" "}
            <span className="gradient-text">online gedoe</span>
          </h2>

          {/* Pain points */}
          <div className="grid sm:grid-cols-2 gap-4 mt-12">
            {painPoints.map((pain, index) => (
              <div
                key={pain.text}
                className="flex items-center gap-4 p-5 rounded-xl bg-card border border-border text-left opacity-0 animate-fade-in"
                style={{ animationDelay: `${150 + index * 75}ms`, animationFillMode: 'forwards' }}
              >
                <div className="w-10 h-10 rounded-lg bg-red-50 flex items-center justify-center flex-shrink-0">
                  <pain.icon className="w-5 h-5 text-red-500" />
                </div>
                <p className="text-foreground font-medium">{pain.text}</p>
              </div>
            ))}
          </div>

          {/* Transition text */}
          <p className="text-lg text-muted-foreground mt-12 opacity-0 animate-fade-in animation-delay-500">
            Daarom hebben we KlikKlaar gebouwd — zodat jij je kunt focussen op je klanten.
          </p>
        </div>
      </div>
    </section>
  );
}
