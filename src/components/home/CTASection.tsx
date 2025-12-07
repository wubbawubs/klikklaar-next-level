import { ArrowRight, Check, Phone } from "lucide-react";
import { GradientButton } from "@/components/ui/GradientButton";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const benefits = ["Gratis adviesgesprek", "Persoonlijk contact", "Geen verplichtingen"];

export function CTASection() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section ref={ref} className="py-12 lg:py-24">
      <div className="container px-4 sm:px-6">
        <div className="relative rounded-2xl lg:rounded-3xl overflow-hidden">
          {/* Softer, more premium gradient background */}
          <div className="absolute inset-0 bg-gradient-to-br from-kk-orange via-kk-fuchsia/80 to-kk-violet opacity-90" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-white/5" />

          {/* Decorative soft blur elements */}
          <div className="absolute top-0 right-0 w-64 lg:w-96 h-64 lg:h-96 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-48 lg:w-64 h-48 lg:h-64 bg-kk-violet/30 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-kk-fuchsia/10 rounded-full blur-3xl" />

          {/* Content */}
          <div className="relative px-6 py-10 sm:px-8 sm:py-14 lg:px-16 lg:py-20 text-center">
            <h2 
              className="text-xl sm:text-2xl lg:text-display-lg text-white font-bold mb-4 lg:mb-6 max-w-2xl mx-auto"
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0)' : 'translateY(16px)',
                transition: 'opacity 0.6s ease-out, transform 0.6s ease-out'
              }}
            >
              Laten we samen kijken wat er mogelijk is
            </h2>
            
            <p 
              className="text-sm sm:text-base lg:text-lg text-white/90 max-w-xl mx-auto mb-6 lg:mb-8"
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0)' : 'translateY(16px)',
                transition: 'opacity 0.6s ease-out 0.1s, transform 0.6s ease-out 0.1s'
              }}
            >
              Plan een vrijblijvend gesprek. We bespreken je website en laten zien hoe we kunnen helpen.
            </p>

            {/* Benefits */}
            <div 
              className="flex flex-col sm:flex-row flex-wrap justify-center gap-3 sm:gap-x-6 lg:gap-x-8 mb-6 lg:mb-8"
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0)' : 'translateY(16px)',
                transition: 'opacity 0.6s ease-out 0.2s, transform 0.6s ease-out 0.2s'
              }}
            >
              {benefits.map((benefit) => (
                <div key={benefit} className="flex items-center justify-center gap-2 text-white/95">
                  <div className="w-5 h-5 rounded-full bg-white/25 backdrop-blur-sm flex items-center justify-center">
                    <Check className="w-3 h-3" />
                  </div>
                  <span className="text-sm sm:text-base font-medium">{benefit}</span>
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div 
              className="flex flex-col sm:flex-row gap-3 justify-center"
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0)' : 'translateY(16px)',
                transition: 'opacity 0.6s ease-out 0.3s, transform 0.6s ease-out 0.3s'
              }}
            >
              <GradientButton 
                size="lg" 
                className="bg-white text-kk-orange hover:bg-white/95 shadow-xl hover:shadow-2xl transition-all text-sm sm:text-base font-semibold"
              >
                <Phone className="w-4 h-4 sm:w-5 sm:h-5" />
                Plan een vrijblijvend gesprek
              </GradientButton>
              <GradientButton 
                variant="outline" 
                size="lg"
                className="border-white/40 text-white hover:bg-white/15 backdrop-blur-sm text-sm sm:text-base"
              >
                Of doe eerst de gratis check
                <ArrowRight className="w-4 h-4" />
              </GradientButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
