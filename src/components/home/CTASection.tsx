import { Check, Phone } from "lucide-react";
import { GradientButton } from "@/components/ui/GradientButton";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const benefits = ["Gratis adviesgesprek", "Persoonlijk contact", "Geen verplichtingen"];

export function CTASection() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section ref={ref} className="py-12 lg:py-24">
      <div className="container px-4 sm:px-6">
        <div className="relative rounded-2xl lg:rounded-3xl overflow-hidden">
          {/* Light premium gradient background */}
          <div className="absolute inset-0 bg-gradient-to-br from-slate-100 via-slate-50 to-white" />
          
          {/* Subtle color accents */}
          <div className="absolute inset-0 bg-gradient-to-tr from-kk-violet/10 via-kk-fuchsia/5 to-kk-orange/10" />

          {/* Decorative soft blur elements */}
          <div className="absolute top-0 right-0 w-64 lg:w-96 h-64 lg:h-96 bg-kk-violet/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/4" />
          <div className="absolute bottom-0 left-0 w-48 lg:w-64 h-48 lg:h-64 bg-kk-orange/15 rounded-full blur-3xl translate-y-1/2 -translate-x-1/4" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-kk-fuchsia/10 rounded-full blur-3xl" />

          {/* Content */}
          <div className="relative px-6 py-10 sm:px-8 sm:py-14 lg:px-16 lg:py-20 text-center">
            <h2 
              className="text-xl sm:text-2xl lg:text-display-lg text-slate-800 font-bold mb-4 lg:mb-6 max-w-2xl mx-auto"
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0)' : 'translateY(16px)',
                transition: 'opacity 0.6s ease-out, transform 0.6s ease-out'
              }}
            >
              Laten we samen kijken wat er mogelijk is
            </h2>
            
            <p 
              className="text-sm sm:text-base lg:text-lg text-slate-600 max-w-xl mx-auto mb-6 lg:mb-8"
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
                <div key={benefit} className="flex items-center justify-center gap-2 text-slate-700">
                  <div className="w-5 h-5 rounded-full bg-kk-orange/20 border border-kk-orange/30 flex items-center justify-center">
                    <Check className="w-3 h-3 text-kk-orange" />
                  </div>
                  <span className="text-sm sm:text-base font-medium">{benefit}</span>
                </div>
              ))}
            </div>

            {/* Single prominent CTA */}
            <div 
              className="flex justify-center"
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0)' : 'translateY(16px)',
                transition: 'opacity 0.6s ease-out 0.3s, transform 0.6s ease-out 0.3s'
              }}
            >
              <GradientButton 
                size="lg" 
                className="bg-gradient-to-r from-kk-orange to-kk-fuchsia hover:from-kk-orange/90 hover:to-kk-fuchsia/90 text-white shadow-xl hover:shadow-2xl hover:shadow-kk-orange/20 transition-all text-sm sm:text-base font-semibold px-8"
              >
                <Phone className="w-4 h-4 sm:w-5 sm:h-5" />
                Plan een vrijblijvend gesprek
              </GradientButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}