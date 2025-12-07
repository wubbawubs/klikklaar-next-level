import { Star, Quote } from "lucide-react";

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
  return (
    <section className="py-section section-alt">
      <div className="container">
        {/* Section header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block text-sm font-semibold text-kk-orange uppercase tracking-wider mb-4 opacity-0 animate-fade-in">
            Wat klanten zeggen
          </span>
          <h2 className="text-display-sm lg:text-display text-foreground opacity-0 animate-fade-in animation-delay-100">
            Ondernemers zoals jij{" "}
            <span className="gradient-text">groeien al met KlikKlaar</span>
          </h2>
        </div>

        {/* Testimonials grid */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.author}
              className="group relative bg-card rounded-2xl border border-border p-8 shadow-sm hover:shadow-premium transition-all duration-300 opacity-0 animate-fade-in"
              style={{ animationDelay: `${200 + index * 100}ms`, animationFillMode: 'forwards' }}
            >
              {/* Quote icon */}
              <Quote className="w-8 h-8 text-kk-orange/20 mb-4" />

              {/* Stars */}
              <div className="flex gap-1 mb-5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-kk-orange text-kk-orange" />
                ))}
              </div>

              {/* Quote */}
              <p className="text-foreground mb-6 leading-relaxed italic">
                "{testimonial.quote}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full gradient-subtle flex items-center justify-center text-kk-orange font-bold text-lg">
                  {testimonial.avatar}
                </div>
                <div>
                  <p className="font-semibold text-foreground">{testimonial.author}</p>
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
