import { ArrowRight, Phone } from "lucide-react";
import { GradientButton } from "@/components/ui/GradientButton";
import { ProductDemo } from "./ProductDemo";

export function HeroSection() {
  return (
    <section className="relative pt-28 lg:pt-36 pb-20 lg:pb-28 overflow-hidden">
      {/* Subtle background gradient */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 right-0 w-[60%] h-[80%] bg-gradient-to-bl from-kk-orange/[0.04] via-kk-violet/[0.03] to-transparent" />
      </div>

      <div className="container">
        <div className="grid lg:grid-cols-[1.2fr_1fr] gap-12 lg:gap-16 items-start">
          {/* Left content */}
          <div className="lg:pt-8">
            {/* Badge - GREEN with website count - animated bounce */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-green-50 border border-green-200 mb-8 opacity-0 animate-fade-in">
              <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse-subtle" />
              <span className="text-sm font-medium text-green-700">
                <span className="font-bold">157</span> websites in optimalisatie
              </span>
            </div>

            {/* Headline - Emotional punch */}
            <h1 className="text-display-lg lg:text-display-xl text-foreground mb-6 opacity-0 animate-fade-in animation-delay-100">
              Je website verbetert zichzelf, <span className="gradient-text">jij houdt tijd over.</span>
            </h1>

            {/* Subheadline - Outcome focused */}
            <p className="text-xl lg:text-2xl text-muted-foreground mb-10 opacity-0 animate-fade-in animation-delay-200">
              Wij zorgen dat je online groeit. Jij focust op je klanten.
            </p>

            {/* CTAs - Contact-first flow */}
            <div className="flex flex-col sm:flex-row gap-4 mb-8 opacity-0 animate-fade-in animation-delay-300">
              <GradientButton size="xl">
                <Phone className="w-5 h-5" />
                Plan een vrijblijvend gesprek
              </GradientButton>
              <GradientButton variant="outline" size="lg">
                Bekijk hoe het werkt
                <ArrowRight className="w-4 h-4" />
              </GradientButton>
            </div>

            {/* Mini proof - Personal */}
            <p className="text-sm text-muted-foreground opacity-0 animate-fade-in animation-delay-400">
              ✓ Gratis adviesgesprek · ✓ Persoonlijk contact · ✓ Geen verplichtingen
            </p>
          </div>

          {/* Right - Product demo - Extended beyond container */}
          <div className="relative opacity-0 animate-fade-in animation-delay-200 lg:mt-12 lg:-mr-12 xl:-mr-20">
            <ProductDemo />
          </div>
        </div>
      </div>
    </section>
  );
}
