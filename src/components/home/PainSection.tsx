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
        <div className="grid lg:grid-cols-[1fr_1.5fr] gap-12 lg:gap-16 items-start">
          {/* Left - Header content */}
          <div>
            {/* Section label */}
            <span className="inline-block text-xs font-semibold text-kk-orange uppercase tracking-widest mb-6 opacity-0 animate-fade-in">
              Herkenbaar?
            </span>

            {/* Headline */}
            <h2 className="text-display-sm lg:text-display text-foreground mb-6 opacity-0 animate-fade-in animation-delay-100">
              Je runt een bedrijf, niet een{" "}
              <span className="gradient-text">marketingbureau</span>
            </h2>

            {/* Transition text */}
            <p className="text-lg text-muted-foreground opacity-0 animate-fade-in animation-delay-200">
              Daarom nemen wij het over. Zodat jij kunt focussen op wat je écht goed kunt.
            </p>
          </div>

          {/* Right - Pain points grid */}
          <div className="grid sm:grid-cols-2 gap-4">
            {painPoints.map((pain, index) => (
              <div
                key={pain.text}
                className="flex items-start gap-4 p-5 rounded-xl bg-card border border-border text-left opacity-0 animate-fade-in group hover:shadow-premium hover:border-red-200/50 transition-all duration-300"
                style={{ animationDelay: `${150 + index * 75}ms`, animationFillMode: 'forwards' }}
              >
                <div className="w-10 h-10 rounded-lg bg-red-50 flex items-center justify-center flex-shrink-0 group-hover:bg-red-100 group-hover:scale-105 transition-all duration-300">
                  <pain.icon className="w-5 h-5 text-red-500" />
                </div>
                <p className="text-foreground font-medium leading-relaxed">{pain.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
