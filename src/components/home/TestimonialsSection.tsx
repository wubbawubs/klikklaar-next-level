import { Star } from "lucide-react";

const testimonials = [
  {
    quote: "Ik snap niet hoe het werkt, maar ik zie wél dat het werkt. Mijn website staat nu op plek 1!",
    author: "Lisa de Vries",
    role: "Kapsalon Stijl",
    avatar: "L",
  },
  {
    quote: "In 3 maanden tijd 40% meer patiënten via onze website. Precies wat ze beloven.",
    author: "Dr. Mark Jansen",
    role: "Tandartspraktijk Centrum",
    avatar: "M",
  },
  {
    quote: "Als IT-bedrijf weten we hoe complex SEO kan zijn. KlikKlaar maakt het simpel én effectief.",
    author: "Sophie van den Berg",
    role: "TechStart BV",
    avatar: "S",
  },
];

export function TestimonialsSection() {
  return (
    <section className="py-section">
      <div className="container">
        {/* Section header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block text-sm font-semibold text-kk-orange uppercase tracking-wider mb-4 opacity-0 animate-fade-in">
            Reviews
          </span>
          <h2 className="text-display-sm lg:text-display text-foreground opacity-0 animate-fade-in animation-delay-100">
            Wat klanten{" "}
            <span className="gradient-text">zeggen</span>
          </h2>
        </div>

        {/* Testimonials */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.author}
              className="bg-card rounded-2xl border border-border p-8 shadow-premium opacity-0 animate-fade-in"
              style={{ animationDelay: `${200 + index * 100}ms`, animationFillMode: 'forwards' }}
            >
              {/* Stars */}
              <div className="flex gap-1 mb-5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
                ))}
              </div>

              {/* Quote */}
              <p className="text-foreground text-lg leading-relaxed mb-8">
                "{testimonial.quote}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full gradient-cta flex items-center justify-center text-white font-semibold text-lg">
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
