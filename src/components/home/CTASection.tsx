import { ArrowRight, CheckCircle2 } from "lucide-react";
import { GradientButton } from "@/components/ui/GradientButton";

const benefits = [
  "Gratis analyse",
  "Binnen 2 minuten resultaat",
  "Geen verplichtingen",
];

export function CTASection() {
  return (
    <section className="py-20 lg:py-28">
      <div className="container">
        <div className="relative rounded-3xl overflow-hidden">
          {/* Background */}
          <div className="absolute inset-0 gradient-cta" />
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMtOS45NDEgMC0xOCA4LjA1OS0xOCAxOHM4LjA1OSAxOCAxOCAxOCAxOC04LjA1OSAxOC0xOC04LjA1OS0xOC0xOC0xOHptMCAzMmMtNy43MzIgMC0xNC02LjI2OC0xNC0xNHM2LjI2OC0xNCAxNC0xNCAxNCA2LjI2OCAxNCAxNC02LjI2OCAxNC0xNCAxNHoiIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iLjA1Ii8+PC9nPjwvc3ZnPg==')] opacity-30" />

          {/* Content */}
          <div className="relative px-6 py-16 lg:px-16 lg:py-24 text-center">
            <h2 className="text-3xl lg:text-5xl font-bold text-white mb-4">
              Klaar om te groeien?
            </h2>
            <p className="text-lg lg:text-xl text-white/90 max-w-2xl mx-auto mb-8">
              Ontdek binnen 2 minuten wat KlikKlaar voor jouw website kan betekenen.
            </p>

            {/* Benefits */}
            <div className="flex flex-wrap justify-center gap-6 mb-10">
              {benefits.map((benefit) => (
                <div key={benefit} className="flex items-center gap-2 text-white/90">
                  <CheckCircle2 className="w-5 h-5" />
                  <span>{benefit}</span>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <GradientButton 
              size="lg" 
              className="bg-white text-kk-orange hover:bg-white/90 hover:shadow-2xl"
            >
              Start je gratis website-check
              <ArrowRight className="w-5 h-5" />
            </GradientButton>
          </div>
        </div>
      </div>
    </section>
  );
}
