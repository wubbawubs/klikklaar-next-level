import { ArrowRight, Check, Phone } from "lucide-react";
import { GradientButton } from "@/components/ui/GradientButton";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const benefits = ["Gratis adviesgesprek", "Persoonlijk contact", "Geen verplichtingen"];

export function CTASection() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section ref={ref} className="py-12 lg:py-16">
      <div className="container">
        <div className="relative rounded-3xl overflow-hidden">
          {/* Background with enhanced gradient */}
          <div className="absolute inset-0 gradient-cta" />
          <div className="absolute inset-0 bg-gradient-to-br from-black/10 to-transparent" />

          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

          {/* Content */}
          <div className="relative px-8 py-16 lg:px-16 lg:py-24 text-center">
            <h2 
              className={`text-display-sm sm:text-display lg:text-display-lg text-white mb-6 max-w-2xl mx-auto ${
                isVisible ? "animate-fade-in" : "opacity-0"
              }`}
            >
              Laten we samen kijken wat er mogelijk is
            </h2>
            
            <p 
              className={`text-lg text-white/90 max-w-xl mx-auto mb-10 ${
                isVisible ? "animate-fade-in" : "opacity-0"
              }`}
              style={{ animationDelay: "100ms" }}
            >
              Plan een vrijblijvend gesprek. We bespreken je website en laten zien hoe we kunnen helpen.
            </p>

            {/* Benefits */}
            <div 
              className={`flex flex-wrap justify-center gap-x-8 gap-y-3 mb-10 ${
                isVisible ? "animate-fade-in" : "opacity-0"
              }`}
              style={{ animationDelay: "200ms" }}
            >
              {benefits.map((benefit) => (
                <div key={benefit} className="flex items-center gap-2 text-white/90">
                  <div className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center">
                    <Check className="w-3 h-3" />
                  </div>
                  <span className="font-medium">{benefit}</span>
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div 
              className={`flex flex-col sm:flex-row gap-4 justify-center ${
                isVisible ? "animate-fade-in" : "opacity-0"
              }`}
              style={{ animationDelay: "300ms" }}
            >
              <GradientButton 
                size="xl" 
                className="bg-white text-kk-orange hover:bg-white/95 shadow-lg hover:shadow-xl transition-shadow"
              >
                <Phone className="w-5 h-5" />
                Plan een vrijblijvend gesprek
              </GradientButton>
              <GradientButton 
                variant="outline" 
                size="lg"
                className="border-white/30 text-white hover:bg-white/10 backdrop-blur-sm"
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
