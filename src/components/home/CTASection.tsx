import { ArrowRight, Check, Phone } from "lucide-react";
import { GradientButton } from "@/components/ui/GradientButton";

const benefits = ["Gratis adviesgesprek", "Persoonlijk contact", "Geen verplichtingen"];

export function CTASection() {
  return (
    <section className="py-section-lg">
      <div className="container">
        <div className="relative rounded-3xl overflow-hidden">
          {/* Background - solid gradient */}
          <div className="absolute inset-0 gradient-cta" />
          
          {/* Subtle pattern overlay */}
          <div className="absolute inset-0 opacity-10" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }} />

          {/* Content */}
          <div className="relative px-8 py-20 lg:px-16 lg:py-28 text-center">
            <h2 className="text-display-sm sm:text-display lg:text-display-lg text-white mb-6 max-w-3xl mx-auto">
              Laten we samen kijken wat er mogelijk is
            </h2>
            
            <p className="text-xl text-white/90 max-w-xl mx-auto mb-10">
              Plan een vrijblijvend gesprek. We bespreken je website en laten zien hoe we kunnen helpen.
            </p>

            {/* Benefits */}
            <div className="flex flex-wrap justify-center gap-x-8 gap-y-3 mb-12">
              {benefits.map((benefit) => (
                <div key={benefit} className="flex items-center gap-2 text-white/90">
                  <Check className="w-5 h-5" />
                  <span className="font-medium">{benefit}</span>
                </div>
              ))}
            </div>

            {/* CTA Buttons - Contact-first */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <GradientButton 
                size="xl" 
                className="bg-white text-kk-orange hover:bg-white/95 shadow-premium-lg"
              >
                <Phone className="w-5 h-5" />
                Plan een vrijblijvend gesprek
              </GradientButton>
              <GradientButton 
                variant="outline" 
                size="lg"
                className="border-white/30 text-white hover:bg-white/10 hover:border-white/50"
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
