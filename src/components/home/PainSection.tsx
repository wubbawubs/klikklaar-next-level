import { HelpCircle, TrendingDown, DollarSign, Clock } from "lucide-react";

const painPoints = [
  { icon: HelpCircle, text: "Je weet dat je website beter moet, maar waar begin je?" },
  { icon: Clock, text: "SEO voelt als een raadsel waar je geen tijd voor hebt" },
  { icon: TrendingDown, text: "Concurrenten staan hoger — en je weet niet waarom" },
  { icon: DollarSign, text: "Dure bureaus beloven veel, maar leveren weinig" },
];

export function PainSection() {
  return (
    <section className="py-section">
      <div className="container">
        {/* Left-aligned header for asymmetry */}
        <div className="max-w-3xl mb-12">
          {/* Section label - smaller with more spacing */}
          <span className="inline-block text-xs font-semibold text-kk-orange uppercase tracking-widest mb-6 opacity-0 animate-fade-in">
            Herkenbaar?
          </span>

          {/* Headline - Left aligned */}
          <h2 className="text-display-sm lg:text-display text-foreground opacity-0 animate-fade-in animation-delay-100">
            Je runt een bedrijf, niet een{" "}
            <span className="gradient-text">marketingbureau</span>
          </h2>
        </div>

        {/* Pain points - Staggered 2x2 grid */}
        <div className="grid sm:grid-cols-2 gap-4 lg:gap-6 max-w-4xl">
          {painPoints.map((pain, index) => (
            <div
              key={pain.text}
              className={`flex items-start gap-4 p-5 rounded-xl bg-card border border-border text-left opacity-0 animate-fade-in group hover:shadow-premium hover:border-red-200/50 transition-all duration-300 ${
                index === 0 ? 'sm:-mt-4' : ''
              } ${index === 3 ? 'sm:mt-4' : ''}`}
              style={{ animationDelay: `${150 + index * 75}ms`, animationFillMode: 'forwards' }}
            >
              <div className="w-10 h-10 rounded-lg bg-red-50 flex items-center justify-center flex-shrink-0 group-hover:bg-red-100 group-hover:scale-105 transition-all duration-300">
                <pain.icon className="w-5 h-5 text-red-500" />
              </div>
              <p className="text-foreground font-medium leading-relaxed">{pain.text}</p>
            </div>
          ))}
        </div>

        {/* Transition text - Left aligned */}
        <p className="text-lg text-muted-foreground mt-12 max-w-xl opacity-0 animate-fade-in animation-delay-500">
          Daarom nemen wij het over. Zodat jij kunt focussen op wat je écht goed kunt.
        </p>
      </div>
    </section>
  );
}
