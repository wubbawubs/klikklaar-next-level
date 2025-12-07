import { ArrowRight, Check, Phone } from "lucide-react";
import { GradientButton } from "@/components/ui/GradientButton";

const benefits = ["Gratis adviesgesprek", "Persoonlijk contact", "Geen verplichtingen"];

export function CTASection() {
  return (
    <section className="py-20 lg:py-28">
      <div className="container">
        <div className="relative rounded-3xl overflow-hidden">
          {/* Background */}
          <div className="absolute inset-0 gradient-cta" />

          {/* Content */}
          <div className="relative px-8 py-16 lg:px-16 lg:py-24 text-center">
            <h2 className="text-display-sm sm:text-display lg:text-display-lg text-white mb-6 max-w-2xl mx-auto">
              Laten we samen kijken wat er mogelijk is
            </h2>
            
            <p className="text-lg text-white/90 max-w-xl mx-auto mb-10">
              Plan een vrijblijvend gesprek. We bespreken je website en laten zien hoe we kunnen helpen.
            </p>

            {/* Benefits */}
            <div className="flex flex-wrap justify-center gap-x-8 gap-y-3 mb-10">
              {benefits.map((benefit) => (
                <div key={benefit} className="flex items-center gap-2 text-white/90">
                  <Check className="w-5 h-5" />
                  <span className="font-medium">{benefit}</span>
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <GradientButton 
                size="xl" 
                className="bg-white text-kk-orange hover:bg-white/95 shadow-lg"
              >
                <Phone className="w-5 h-5" />
                Plan een vrijblijvend gesprek
              </GradientButton>
              <GradientButton 
                variant="outline" 
                size="lg"
                className="border-white/30 text-white hover:bg-white/10"
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
