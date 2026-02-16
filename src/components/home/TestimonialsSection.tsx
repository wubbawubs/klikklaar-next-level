import { Star, Quote, ExternalLink } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const testimonials = [
  {
    quote: "Service is echt on point en ze denken enorm mee in hoe alles beter te maken. Kan ze absoluut aanraden!",
    author: "Desley Baars",
    role: "DYBS Coaching",
    avatar: "D",
    featured: true,
    trustpilotUrl: "https://nl.trustpilot.com/reviews/69344e9ac03ce642a62183da",
  },
  {
    quote: "Super club! Een poosje terug contact gekregen met KlikKlaar. Mooie club en maken hun woorden waar. Veel gezien in de markt maar niet voor deze prijs met deze kwaliteit. Een aanrader als je snel je SEO op orde wilt hebben!",
    author: "Ben Commandeur",
    role: "Nieuw Marketing",
    avatar: "B",
    featured: false,
    trustpilotUrl: "https://nl.trustpilot.com/reviews/6936c48ce8853bf945620333",
  },
  {
    quote: "De naam doet zijn eer aan want alles was zo ingericht en ik hoef er zelf bijna niks meer aan te doen. Zeer tevreden!",
    author: "Dean Droste",
    role: "Droste Consulting",
    avatar: "D",
    featured: false,
    trustpilotUrl: "https://nl.trustpilot.com/reviews/689e0b5c77221b6c6337448c",
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
            <span className="gradient-text">groeien al met KlikKlaarSEO</span>
          </h2>
        </div>

        {/* Testimonials - Variable shadow weights */}
        <div className="grid md:grid-cols-3 gap-4 lg:gap-6">
          {testimonials.map((testimonial, index) => (
            <a
              key={testimonial.author}
              href={testimonial.trustpilotUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={`bg-card rounded-2xl border p-6 lg:p-8 group cursor-pointer block
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
              <div className="flex items-center justify-between mb-4">
                <Quote className="w-8 h-8 text-kk-orange/20 group-hover:text-kk-orange/40 transition-colors" />
                <ExternalLink className="w-4 h-4 text-muted-foreground/40 group-hover:text-kk-orange transition-colors" />
              </div>

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
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
