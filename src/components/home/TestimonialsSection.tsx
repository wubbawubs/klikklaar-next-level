import { Star, Quote } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

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
  const { ref, isVisible } = useScrollReveal();

  return (
    <section ref={ref} className="py-12 lg:py-24 haze-gradient-bottom-left relative overflow-hidden">
      <div className="container px-4 sm:px-6 relative z-10">
        {/* Header - Left aligned for asymmetry */}
        <div className="max-w-2xl mb-8 lg:mb-12">
          <span 
            className="inline-block text-xs font-semibold text-kk-orange uppercase tracking-widest mb-4"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateY(0)' : 'translateY(12px)',
              transition: 'opacity 0.6s ease-out, transform 0.6s ease-out'
            }}
          >
            Wat klanten zeggen
          </span>
          <h2 
            className="text-display-sm lg:text-display text-foreground"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateY(0)' : 'translateY(12px)',
              transition: 'opacity 0.6s ease-out 0.1s, transform 0.6s ease-out 0.1s'
            }}
          >
            Ondernemers zoals jij{" "}
            <span className="gradient-text">groeien al met KlikKlaar</span>
          </h2>
        </div>

        {/* Testimonials - Variable shadow weights */}
        <div className="grid md:grid-cols-3 gap-4 lg:gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.author}
              className={`bg-card rounded-2xl border p-6 lg:p-8 group
                hover:border-kk-orange/20 hover:-translate-y-1
                transition-all duration-300
                ${testimonial.featured 
                  ? 'border-kk-orange/20 shadow-premium-lg hover:shadow-glow-orange' 
                  : 'border-border shadow-premium-sm hover:shadow-premium'
                }`}
              style={{ 
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0)' : 'translateY(16px)',
                transition: 'opacity 0.6s ease-out, transform 0.6s ease-out, box-shadow 0.3s, border-color 0.3s',
                transitionDelay: `${index * 100}ms`
              }}
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
                <div className={`w-10 h-10 rounded-full gradient-cta flex items-center justify-center text-white font-bold transition-shadow
                  ${testimonial.featured ? 'shadow-glow-orange' : 'shadow-sm group-hover:shadow-glow-orange'}`}>
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
