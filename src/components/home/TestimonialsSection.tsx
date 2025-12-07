import { Star, Quote, Award } from "lucide-react";

const testimonials = [
  {
    quote: "Binnen 2 maanden stond ik op plek 3 in Google. Ik krijg nu elke week nieuwe aanvragen via mijn website.",
    author: "Marco de Vries",
    role: "Loodgieter, Amsterdam",
    avatar: "M",
    featured: true,
  },
  {
    quote: "Eindelijk iemand die het begrijpt. Geen technische praatjes, gewoon resultaat. Mijn agenda zit vol.",
    author: "Sandra Bakker",
    role: "Fysiotherapeut, Rotterdam",
    avatar: "S",
    featured: false,
  },
  {
    quote: "Ik had geen idee waar ik moest beginnen met SEO. Nu hoef ik er niet meer over na te denken.",
    author: "Pieter Janssen",
    role: "Aannemer, Eindhoven",
    avatar: "P",
    featured: false,
  },
];

export function TestimonialsSection() {
  return (
    <section className="py-section section-alt overflow-hidden">
      <div className="container">
        {/* Left-aligned header */}
        <div className="max-w-2xl mb-16">
          <span className="inline-block text-xs font-semibold text-kk-orange uppercase tracking-widest mb-6 opacity-0 animate-fade-in">
            Wat klanten zeggen
          </span>
          <h2 className="text-display-sm lg:text-display text-foreground opacity-0 animate-fade-in animation-delay-100">
            Ondernemers zoals jij{" "}
            <span className="gradient-text">groeien al met KlikKlaar</span>
          </h2>
        </div>

        {/* Testimonials - Featured card larger + horizontal scroll on mobile */}
        <div className="flex gap-6 lg:gap-8 overflow-x-auto pb-4 -mx-6 px-6 lg:mx-0 lg:px-0 lg:overflow-visible scrollbar-hide">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.author}
              className={`group relative bg-card rounded-2xl border border-border shadow-sm hover:shadow-premium transition-all duration-300 opacity-0 animate-fade-in flex-shrink-0 ${
                testimonial.featured 
                  ? 'p-8 lg:p-10 w-[320px] lg:w-[400px]' 
                  : 'p-6 lg:p-8 w-[280px] lg:w-[320px]'
              }`}
              style={{ animationDelay: `${200 + index * 100}ms`, animationFillMode: 'forwards' }}
            >
              {/* Featured badge */}
              {testimonial.featured && (
                <div className="absolute -top-3 left-6 flex items-center gap-1.5 px-3 py-1 rounded-full bg-kk-orange text-white text-xs font-semibold">
                  <Award className="w-3 h-3" />
                  Uitgelicht
                </div>
              )}

              {/* Quote icon */}
              <Quote className={`text-kk-orange/20 mb-4 ${
                testimonial.featured ? 'w-10 h-10' : 'w-8 h-8'
              }`} />

              {/* Stars */}
              <div className="flex gap-1 mb-5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className={`fill-kk-orange text-kk-orange ${
                    testimonial.featured ? 'w-5 h-5' : 'w-4 h-4'
                  }`} />
                ))}
              </div>

              {/* Quote */}
              <p className={`text-foreground mb-6 leading-relaxed italic ${
                testimonial.featured ? 'text-lg' : ''
              }`}>
                "{testimonial.quote}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-3 mt-auto">
                <div className={`rounded-full gradient-subtle flex items-center justify-center text-kk-orange font-bold ${
                  testimonial.featured ? 'w-14 h-14 text-xl' : 'w-12 h-12 text-lg'
                }`}>
                  {testimonial.avatar}
                </div>
                <div>
                  <p className={`font-semibold text-foreground ${
                    testimonial.featured ? 'text-lg' : ''
                  }`}>{testimonial.author}</p>
                  <p className={`text-muted-foreground ${
                    testimonial.featured ? 'text-sm' : 'text-sm'
                  }`}>{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
