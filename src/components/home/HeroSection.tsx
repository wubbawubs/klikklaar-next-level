import { ArrowRight } from "lucide-react";
import { GradientButton } from "@/components/ui/GradientButton";
import { ProductDemo } from "./ProductDemo";
import { useEffect, useState } from "react";

export function HeroSection() {
  const [optimizationCount, setOptimizationCount] = useState(9678);

  useEffect(() => {
    const interval = setInterval(() => {
      // Random increment between 1-3 for realism
      setOptimizationCount(prev => prev + Math.floor(Math.random() * 3) + 1);
    }, 15000); // Every 15 seconds

    return () => clearInterval(interval);
  }, []);

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
            {/* Badge - now GREEN */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-green-50 border border-green-200 mb-8 opacity-0 animate-fade-in">
              <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse-subtle" />
              <span className="text-sm font-medium text-green-700">
                <span className="font-bold">{optimizationCount.toLocaleString()}</span> optimalisaties actief
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
