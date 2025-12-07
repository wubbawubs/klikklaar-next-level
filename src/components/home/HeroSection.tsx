import { ArrowRight } from "lucide-react";
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
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          {/* Left content */}
          <div className="max-w-xl">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-kk-orange/10 border border-kk-orange/20 mb-8 opacity-0 animate-fade-in">
              <span className="w-1.5 h-1.5 rounded-full bg-kk-orange animate-pulse-subtle" />
              <span className="text-sm font-medium text-kk-orange">
                Al 100+ ondernemers geholpen
              </span>
            </div>

            {/* Headline - bigger, punchier */}
            <h1 className="text-display-lg lg:text-display-xl text-foreground mb-6 opacity-0 animate-fade-in animation-delay-100">
              Meer klanten.{" "}
              <span className="gradient-text">Geen gedoe.</span>
            </h1>

            {/* Subheadline - shorter, one line */}
            <p className="text-xl lg:text-2xl text-muted-foreground mb-10 opacity-0 animate-fade-in animation-delay-200">
              Automatische website-verbeteringen die je vindbaarheid boosten.
            </p>

            {/* CTAs - bigger, clearer hierarchy */}
            <div className="flex flex-col sm:flex-row gap-4 mb-8 opacity-0 animate-fade-in animation-delay-300">
              <GradientButton size="xl">
                Gratis website-check
                <ArrowRight className="w-5 h-5" />
              </GradientButton>
              <GradientButton variant="outline" size="lg">
                Bekijk hoe het werkt
              </GradientButton>
            </div>

            {/* Mini proof */}
            <p className="text-sm text-muted-foreground opacity-0 animate-fade-in animation-delay-400">
              ✓ Binnen 2 minuten jouw score · ✓ Geen creditcard nodig
            </p>
          </div>

          {/* Right - Product demo visualization */}
          <div className="relative opacity-0 animate-fade-in animation-delay-200">
            <ProductDemo />
          </div>
        </div>
      </div>
    </section>
  );
}
