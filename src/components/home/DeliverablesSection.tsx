import { FileText, Globe, Gauge, RefreshCw, Search, Shield } from "lucide-react";

const deliverables = [
  {
    icon: FileText,
    title: "Verbeterde teksten",
    description: "Automatisch geoptimaliseerde titels en beschrijvingen die bezoekers overtuigen.",
  },
  {
    icon: Globe,
    title: "Lokale vindbaarheid",
    description: "Beter gevonden worden door klanten in jouw regio.",
  },
  {
    icon: Gauge,
    title: "Snelheidsboost",
    description: "Snellere laadtijden voor een betere bezoekerservaring.",
  },
  {
    icon: RefreshCw,
    title: "Wekelijkse updates",
    description: "Continue verbeteringen op basis van de laatste inzichten.",
  },
  {
    icon: Search,
    title: "Technische fixes",
    description: "Automatische oplossing van technische problemen die je vindbaarheid beïnvloeden.",
  },
  {
    icon: Shield,
    title: "24/7 monitoring",
    description: "Je website wordt continu in de gaten gehouden voor optimale prestaties.",
  },
];

export function DeliverablesSection() {
  return (
    <section className="py-20 lg:py-28">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left content */}
          <div>
            <span className="text-kk-orange font-semibold text-sm uppercase tracking-wider">
              Wat je krijgt
            </span>
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mt-3 mb-4">
              Dit verbetert KlikKlaar{" "}
              <span className="gradient-text">voor jou</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Alles wat je nodig hebt om online te groeien, automatisch geregeld. Geen technische kennis vereist.
            </p>

            {/* CTA */}
            <a 
              href="/deliverables" 
              className="inline-flex items-center gap-2 text-kk-orange font-semibold hover:gap-3 transition-all"
            >
              Bekijk alle verbeteringen
              <span>→</span>
            </a>
          </div>

          {/* Right grid */}
          <div className="grid sm:grid-cols-2 gap-4">
            {deliverables.map((item, index) => (
              <div
                key={item.title}
                className="group p-5 rounded-xl bg-card border border-border hover:border-kk-orange/30 transition-all duration-300 opacity-0 animate-fade-in"
                style={{ animationDelay: `${index * 75}ms`, animationFillMode: 'forwards' }}
              >
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-kk-orange/10 to-kk-violet/10 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                  <item.icon className="w-5 h-5 text-kk-orange" />
                </div>
                <h3 className="font-semibold text-foreground mb-1">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
