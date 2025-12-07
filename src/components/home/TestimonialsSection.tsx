import { Star, Quote } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const testimonials = [
  {
    quote: "Binnen 2 maanden stond ik op plek 3 in Google. Ik krijg nu elke week nieuwe aanvragen via mijn website.",
    author: "Marco de Vries",
    role: "Loodgieter, Amsterdam",
    avatar: "M",
  },
  {
    quote: "Eindelijk iemand die het begrijpt. Geen technische praatjes, gewoon resultaat. Mijn agenda zit vol.",
    author: "Sandra Bakker",
    role: "Fysiotherapeut, Rotterdam",
    avatar: "S",
  },
  {
    quote: "Ik had geen idee waar ik moest beginnen met SEO. Nu hoef ik er niet meer over na te denken.",
    author: "Pieter Janssen",
    role: "Aannemer, Eindhoven",
    avatar: "P",
  },
];

export function TestimonialsSection() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section ref={ref} className="py-24 lg:py-32 bg-muted/40">
      <div className="container">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span 
            className={`inline-block text-xs font-semibold text-kk-orange uppercase tracking-widest mb-4 ${
              isVisible ? "animate-fade-in" : "opacity-0"
            }`}
          >
            Wat klanten zeggen
          </span>
          <h2 
            className={`text-display-sm lg:text-display text-foreground ${
              isVisible ? "animate-fade-in" : "opacity-0"
            }`}
            style={{ animationDelay: "100ms" }}
          >
            Ondernemers zoals jij{" "}
            <span className="gradient-text">groeien al met KlikKlaar</span>
          </h2>
        </div>

        {/* Testimonials */}
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.author}
              className={`bg-card rounded-2xl border border-border p-8 group
                hover:shadow-premium hover:border-kk-orange/20 hover:-translate-y-1
                transition-all duration-300 ${isVisible ? "animate-fade-in" : "opacity-0"}`}
              style={{ animationDelay: `${250 + index * 100}ms` }}
            >
              <Quote className="w-8 h-8 text-kk-orange/20 mb-4 group-hover:text-kk-orange/40 transition-colors" />

              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-kk-orange text-kk-orange" />
                ))}
              </div>

              <p className="text-foreground mb-6 leading-relaxed">
                "{testimonial.quote}"
              </p>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full gradient-cta flex items-center justify-center text-white font-bold shadow-sm group-hover:shadow-glow-orange transition-shadow">
                  {testimonial.avatar}
                </div>
                <div>
                  <p className="font-semibold text-foreground text-sm">{testimonial.author}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
