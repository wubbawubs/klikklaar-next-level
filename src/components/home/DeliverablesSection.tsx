import { FileText, Globe, Gauge, RefreshCw, Search, Shield } from "lucide-react";
import type { LucideIcon } from "lucide-react";

interface Deliverable {
  icon: LucideIcon;
  title: string;
  description: string;
}

const deliverables: Deliverable[] = [
  {
    icon: FileText,
    title: "Verbeterde teksten",
    description: "Titels en beschrijvingen die bezoekers overtuigen.",
  },
  {
    icon: Globe,
    title: "Lokale vindbaarheid",
    description: "Beter gevonden worden in jouw regio.",
  },
  {
    icon: Gauge,
    title: "Snelheidsboost",
    description: "Snellere laadtijden voor meer conversie.",
  },
  {
    icon: RefreshCw,
    title: "Wekelijkse updates",
    description: "Continue verbeteringen automatisch toegepast.",
  },
  {
    icon: Search,
    title: "Technische fixes",
    description: "Alle technische SEO-problemen opgelost.",
  },
  {
    icon: Shield,
    title: "24/7 monitoring",
    description: "Je website altijd in topconditie.",
  },
];

export function DeliverablesSection() {
  return (
    <section className="py-section section-alt">
      <div className="container">
        {/* Section header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block text-sm font-semibold text-kk-orange uppercase tracking-wider mb-4 opacity-0 animate-fade-in">
            Wat je krijgt
          </span>
          <h2 className="text-display-sm lg:text-display text-foreground mb-4 opacity-0 animate-fade-in animation-delay-100">
            Dit verbetert KlikKlaar{" "}
            <span className="gradient-text">voor jou</span>
          </h2>
          <p className="text-lg text-muted-foreground opacity-0 animate-fade-in animation-delay-200">
            Concrete verbeteringen, geen loze beloftes.
          </p>
        </div>

        {/* 6-card grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {deliverables.map((item, index) => (
            <div
              key={item.title}
              className="group p-6 rounded-xl bg-card border border-border shadow-sm hover:shadow-premium transition-all duration-300 opacity-0 animate-fade-in"
              style={{ animationDelay: `${200 + index * 60}ms`, animationFillMode: 'forwards' }}
            >
              <div className="w-12 h-12 rounded-xl gradient-subtle flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <item.icon className="w-6 h-6 text-kk-orange" />
              </div>
              <h3 className="font-semibold text-foreground mb-1.5">{item.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
