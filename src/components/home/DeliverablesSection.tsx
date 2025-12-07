import { Check } from "lucide-react";

const deliverables = [
  {
    title: "Nieuwe H1 & H2 koppen",
    description: "Krachtige koppen die Google én bezoekers aanspreken",
    featured: true,
  },
  {
    title: "Geoptimaliseerde meta-descriptions",
    description: "Teksten die zorgen dat mensen doorklikken in Google",
    featured: false,
  },
  {
    title: "Lokale zoekwoorden ingebouwd",
    description: "Gevonden worden door klanten uit jouw regio",
    featured: false,
  },
  {
    title: "Snelheidsverbeteringen",
    description: "Snellere website = betere ranking én meer conversie",
    featured: true,
  },
  {
    title: "Technische fixes",
    description: "Schema markup, structuur, en alles wat Google verwacht",
    featured: false,
  },
  {
    title: "Wekelijks rapport",
    description: "Simpel overzicht in normaal Nederlands — geen jargon",
    featured: false,
  },
];

export function DeliverablesSection() {
  return (
    <section className="py-section section-alt">
      <div className="container">
        {/* Left-aligned header */}
        <div className="max-w-2xl mb-16">
          <span className="inline-block text-xs font-semibold text-kk-orange uppercase tracking-widest mb-6 opacity-0 animate-fade-in">
            Dit krijg je concreet
          </span>
          <h2 className="text-display-sm lg:text-display text-foreground mb-4 opacity-0 animate-fade-in animation-delay-100">
            Geen vage beloftes,{" "}
            <span className="gradient-text">concrete resultaten</span>
          </h2>
          <p className="text-lg text-muted-foreground opacity-0 animate-fade-in animation-delay-200">
            Elke week leveren we meetbare verbeteringen aan je website.
          </p>
        </div>

        {/* Deliverables - Broken grid with featured cards larger */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-5 max-w-5xl">
          {deliverables.map((item, index) => (
            <div
              key={item.title}
              className={`group flex items-start gap-4 rounded-xl bg-card border border-border hover:border-kk-orange/30 hover:shadow-premium transition-all duration-300 opacity-0 animate-fade-in ${
                item.featured ? 'p-6 lg:p-7' : 'p-5'
              }`}
              style={{ animationDelay: `${200 + index * 60}ms`, animationFillMode: 'forwards' }}
            >
              {/* Checkmark - Left aligned */}
              <div className={`rounded-full gradient-cta flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform ${
                item.featured ? 'w-8 h-8 mt-0.5' : 'w-6 h-6 mt-0.5'
              }`}>
                <Check className={`text-white ${item.featured ? 'w-4 h-4' : 'w-3.5 h-3.5'}`} />
              </div>
              
              {/* Content */}
              <div>
                <h3 className={`font-semibold text-foreground mb-1 ${
                  item.featured ? 'text-lg' : ''
                }`}>{item.title}</h3>
                <p className={`text-muted-foreground leading-relaxed ${
                  item.featured ? 'text-base' : 'text-sm'
                }`}>{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
