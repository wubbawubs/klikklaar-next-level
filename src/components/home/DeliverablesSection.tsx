import { Search, Wand2, MapPin, Code2, FileText } from "lucide-react";
import type { LucideIcon } from "lucide-react";

interface Deliverable {
  icon: LucideIcon;
  title: string;
  description: string;
}

const deliverables: Deliverable[] = [
  {
    icon: Search,
    title: "Automatische website-analyse",
    description: "Onze software checkt je website zoals een expert: teksten, structuur, techniek, snelheid, lokale vindbaarheid.",
  },
  {
    icon: Wand2,
    title: "Slimme verbeteringen",
    description: "Wij herschrijven je titels, koppen, teksten en metadata. Alles blijft in jouw stijl en past bij je bedrijf.",
  },
  {
    icon: MapPin,
    title: "Lokale zichtbaarheid",
    description: "Je wordt beter vindbaar in Google voor mensen in jouw stad of regio, precies waar jouw klanten zitten.",
  },
  {
    icon: Code2,
    title: "Automatische snippet-technologie",
    description: "Verbeteringen worden meteen zichtbaar op je website. Eénmalig een snippet plaatsen en klaar.",
  },
  {
    icon: FileText,
    title: "Wekelijks rapport",
    description: "Geen lange rapporten. Gewoon een simpel overzicht: wat is verbeterd, hoe zichtbaar je bent, welke kansen er zijn.",
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
            Alles wat je nodig hebt,{" "}
            <span className="gradient-text">automatisch geregeld</span>
          </h2>
          <p className="text-lg text-muted-foreground opacity-0 animate-fade-in animation-delay-200">
            Geen gedoe. Wij regelen het zodat jij kunt focussen op je klanten.
          </p>
        </div>

        {/* Feature grid - 5 items in 2 rows */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {deliverables.map((item, index) => (
            <div
              key={item.title}
              className={`group p-6 rounded-xl bg-card border border-border shadow-sm hover:shadow-premium transition-all duration-300 opacity-0 animate-fade-in ${
                index === 4 ? 'lg:col-start-2' : ''
              }`}
              style={{ animationDelay: `${200 + index * 60}ms`, animationFillMode: 'forwards' }}
            >
              <div className="w-12 h-12 rounded-xl gradient-subtle flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <item.icon className="w-6 h-6 text-kk-orange" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">{item.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
