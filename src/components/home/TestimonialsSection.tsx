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
    <section className="py-20 lg:py-28">
      <div className="container">
        {/* Header */}
        <div className="max-w-2xl mb-16">
          <span className="inline-block text-xs font-semibold text-kk-orange uppercase tracking-widest mb-4 opacity-0 animate-fade-in">
            Wat klanten zeggen
          </span>
          <h2 className="text-display-sm lg:text-display text-foreground opacity-0 animate-fade-in animation-delay-100">
            Ondernemers zoals jij{" "}
            <span className="gradient-text">groeien al met KlikKlaar</span>
          </h2>
        </div>

        {/* Testimonials */}
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.author}
              className="bg-card rounded-2xl border border-border p-8 hover:shadow-sm transition-shadow opacity-0 animate-fade-in"
              style={{ animationDelay: `${250 + index * 100}ms`, animationFillMode: 'forwards' }}
            >
              <Quote className="w-8 h-8 text-kk-orange/20 mb-4" />

              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-kk-orange text-kk-orange" />
                ))}
              </div>

              <p className="text-foreground mb-6 leading-relaxed">
                "{testimonial.quote}"
              </p>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-kk-orange/10 flex items-center justify-center text-kk-orange font-bold">
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
