import { HelpCircle, TrendingDown, DollarSign, Clock } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const painPoints = [
  { icon: HelpCircle, text: "Je weet dat je website beter moet, maar waar begin je?" },
  { icon: Clock, text: "SEO voelt als een raadsel waar je geen tijd voor hebt" },
  { icon: TrendingDown, text: "Concurrenten staan hoger — en je weet niet waarom" },
  { icon: DollarSign, text: "Dure bureaus beloven veel, maar leveren weinig" },
];

export function PainSection() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section ref={ref} className="py-12 lg:py-16">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left - Header */}
          <div>
            <span 
              className={`inline-block text-xs font-semibold text-kk-orange uppercase tracking-widest mb-4 ${
                isVisible ? "animate-fade-in" : "opacity-0"
              }`}
            >
              Herkenbaar?
            </span>

            <h2 
              className={`text-display-sm lg:text-display text-foreground mb-6 ${
                isVisible ? "animate-fade-in" : "opacity-0"
              }`}
              style={{ animationDelay: "100ms" }}
            >
              Je runt een bedrijf, niet een{" "}
              <span className="gradient-text">marketingbureau</span>
            </h2>

            <p 
              className={`text-lg text-muted-foreground ${
                isVisible ? "animate-fade-in" : "opacity-0"
              }`}
              style={{ animationDelay: "200ms" }}
            >
              Daarom nemen wij het over. Zodat jij kunt focussen op wat je écht goed kunt.
            </p>
          </div>

          {/* Right - Pain points */}
          <div className="grid gap-4">
            {painPoints.map((pain, index) => (
              <div
                key={pain.text}
                className={`flex items-start gap-4 p-5 rounded-xl bg-card border border-border group 
                  hover:shadow-premium hover:border-red-200 hover:-translate-y-0.5 
                  transition-all duration-300 ${isVisible ? "animate-fade-in" : "opacity-0"}`}
                style={{ animationDelay: `${200 + index * 75}ms` }}
              >
                <div className="w-10 h-10 rounded-lg bg-red-50 flex items-center justify-center flex-shrink-0 group-hover:bg-red-100 transition-colors">
                  <pain.icon className="w-5 h-5 text-red-500" />
                </div>
                <p className="text-foreground font-medium leading-relaxed pt-2">{pain.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
