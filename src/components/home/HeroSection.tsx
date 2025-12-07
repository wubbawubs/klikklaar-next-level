import { ArrowRight, Phone } from "lucide-react";
import { GradientButton } from "@/components/ui/GradientButton";
import { ProductDemo } from "./ProductDemo";
import { useState, useEffect } from "react";

function LiveCounter() {
  const [count, setCount] = useState(146);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Trigger animation after mount
    const timer = setTimeout(() => setIsVisible(true), 50);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount(prev => prev + 1);
    }, 15000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div 
      className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-green-50 border border-green-200 mb-8"
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0)' : 'translateY(12px)',
        transition: 'opacity 0.6s ease-out, transform 0.6s ease-out'
      }}
    >
      <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse-subtle" />
      <span className="text-sm font-medium text-green-700">
        <span className="font-bold">{count.toLocaleString('nl-NL')}</span> websites in optimalisatie
      </span>
    </div>
  );
}

export function HeroSection() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Trigger animation after mount
    const timer = setTimeout(() => setIsVisible(true), 50);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative pt-24 lg:pt-40 pb-12 lg:pb-24 overflow-hidden">
      {/* Subtle background gradient */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-bl from-kk-orange/[0.03] via-transparent to-transparent" />
      </div>

      <div className="container px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-20 items-center">
          {/* Left content */}
          <div>
            {/* Badge */}
            <LiveCounter />

            {/* Headline */}
            <h1 
              className="text-3xl sm:text-4xl lg:text-display-xl text-foreground mb-4 lg:mb-6 leading-tight"
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0)' : 'translateY(16px)',
                transition: 'opacity 0.6s ease-out 0.1s, transform 0.6s ease-out 0.1s'
              }}
            >
              Je website verbetert zichzelf, <span className="gradient-text">jij houdt tijd over.</span>
            </h1>

            {/* Subheadline */}
            <p 
              className="text-base sm:text-lg lg:text-xl text-muted-foreground mb-6 lg:mb-10 max-w-lg"
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0)' : 'translateY(16px)',
                transition: 'opacity 0.6s ease-out 0.2s, transform 0.6s ease-out 0.2s'
              }}
            >
              Wij zorgen dat je online groeit. Jij focust op je klanten.
            </p>

            {/* CTAs */}
            <div 
              className="flex flex-col sm:flex-row gap-3 mb-6 lg:mb-8"
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0)' : 'translateY(16px)',
                transition: 'opacity 0.6s ease-out 0.3s, transform 0.6s ease-out 0.3s'
              }}
            >
              <GradientButton size="lg" className="w-full sm:w-auto text-sm sm:text-base">
                <Phone className="w-4 h-4 sm:w-5 sm:h-5" />
                Plan een vrijblijvend gesprek
              </GradientButton>
              <GradientButton variant="outline" size="lg" className="w-full sm:w-auto text-sm sm:text-base">
                Bekijk hoe het werkt
                <ArrowRight className="w-4 h-4" />
              </GradientButton>
            </div>

            {/* Mini proof */}
            <p 
              className="text-sm text-muted-foreground"
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0)' : 'translateY(12px)',
                transition: 'opacity 0.6s ease-out 0.4s, transform 0.6s ease-out 0.4s'
              }}
            >
              ✓ Gratis adviesgesprek · ✓ Persoonlijk contact · ✓ Geen verplichtingen
            </p>
          </div>

          {/* Right - Product demo */}
          <div 
            className="relative"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
              transition: 'opacity 0.7s ease-out 0.2s, transform 0.7s ease-out 0.2s'
            }}
          >
            <ProductDemo />
          </div>
        </div>
      </div>
    </section>
  );
}
