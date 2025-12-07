import { Star } from "lucide-react";

const testimonials = [
  {
    quote: "Eindelijk begrijp ik niet hoe het werkt, maar ik zie wel dat het werkt! Mijn website staat nu bovenaan bij Google.",
    author: "Lisa de Vries",
    role: "Eigenaar Kapsalon Stijl",
    avatar: "L",
    rating: 5,
  },
  {
    quote: "In 3 maanden tijd 40% meer patiënten via onze website. KlikKlaar doet precies wat ze beloven.",
    author: "Dr. Mark Jansen",
    role: "Tandarts",
    avatar: "M",
    rating: 5,
  },
  {
    quote: "Als IT-bedrijf weten we hoe complex SEO kan zijn. KlikKlaar maakt het simpel en effectief.",
    author: "Sophie van den Berg",
    role: "CEO TechStart BV",
    avatar: "S",
    rating: 5,
  },
];

export function TestimonialsSection() {
  return (
    <section className="py-20 lg:py-28 section-alt">
      <div className="container">
        {/* Section header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-kk-orange font-semibold text-sm uppercase tracking-wider">
            Reviews
          </span>
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mt-3 mb-4">
            Wat ondernemers{" "}
            <span className="gradient-text">zeggen</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Ontdek waarom lokale ondernemers kiezen voor KlikKlaar.
          </p>
        </div>

        {/* Testimonials grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.author}
              className="bg-card rounded-2xl border border-border p-8 opacity-0 animate-fade-in"
              style={{ animationDelay: `${index * 100}ms`, animationFillMode: 'forwards' }}
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              {/* Quote */}
              <p className="text-foreground mb-6 leading-relaxed">
                "{testimonial.quote}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full gradient-cta flex items-center justify-center text-white font-semibold">
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
