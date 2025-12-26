import { ArrowRight, Phone } from "lucide-react";
import { GradientButton } from "@/components/ui/GradientButton";
import { ProductDemo } from "./ProductDemo";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const CALENDLY_URL = "https://calendly.com/luuk-klikklaar/kennismakingsgesprek";

export function HeroSection() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Trigger animation after mount
    const timer = setTimeout(() => setIsVisible(true), 50);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative pt-24 lg:pt-32 pb-8 lg:pb-16 overflow-hidden">
      {/* Subtle background gradient */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-bl from-kk-orange/[0.03] via-transparent to-transparent" />
      </div>

      <div className="container px-4 sm:px-6">
        {/* Mobile: stacked layout, Desktop: side by side */}
        <div className="flex flex-col lg:grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Left content - Text */}
          <div className="order-1 lg:order-1">

            {/* Headline */}
            <h1 
              className="text-3xl sm:text-4xl lg:text-5xl xl:text-display-lg font-bold text-foreground mb-4 lg:mb-6 leading-[1.15]"
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0)' : 'translateY(16px)',
                transition: 'opacity 0.6s ease-out 0.1s, transform 0.6s ease-out 0.1s'
              }}
            >
              <span className="block">Je website verbetert zichzelf,</span>
              <span className="gradient-text">jij houdt tijd over.</span>
            </h1>

            {/* Subheadline */}
            <p 
              className="text-base sm:text-lg lg:text-xl text-muted-foreground mb-4 lg:mb-6 max-w-lg"
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0)' : 'translateY(16px)',
                transition: 'opacity 0.6s ease-out 0.2s, transform 0.6s ease-out 0.2s'
              }}
            >
              Wij zorgen dat je online groeit. Jij focust op je klanten.
            </p>

            {/* Mini proof - Desktop only */}
            <p 
              className="hidden lg:block text-sm text-muted-foreground"
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0)' : 'translateY(12px)',
                transition: 'opacity 0.6s ease-out 0.3s, transform 0.6s ease-out 0.3s'
              }}
            >
              ✓ Gratis adviesgesprek · ✓ Persoonlijk contact · ✓ Geen verplichtingen
            </p>
          </div>

          {/* Right - Product demo */}
          <div 
            className="relative order-2 lg:order-2"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
              transition: 'opacity 0.7s ease-out 0.2s, transform 0.7s ease-out 0.2s'
            }}
          >
            <ProductDemo />
          </div>

          {/* CTAs - Below illustration on mobile, in left column on desktop */}
          <div 
            className="order-3 lg:hidden"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateY(0)' : 'translateY(16px)',
              transition: 'opacity 0.6s ease-out 0.4s, transform 0.6s ease-out 0.4s'
            }}
          >
            <div className="flex flex-col gap-3 mb-4">
              <GradientButton size="lg" className="w-full text-sm sm:text-base" asChild>
                <a href={CALENDLY_URL} target="_blank" rel="noopener noreferrer">
                  <Phone className="w-4 h-4 sm:w-5 sm:h-5" />
                  Plan een vrijblijvend gesprek
                </a>
              </GradientButton>
              <GradientButton variant="outline" size="lg" className="w-full text-sm sm:text-base" asChild>
                <Link to="/hoe-het-werkt">
                  Bekijk hoe het werkt
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </GradientButton>
            </div>
            <p className="text-xs sm:text-sm text-muted-foreground text-center">
              ✓ Gratis adviesgesprek · ✓ Geen verplichtingen
            </p>
          </div>
        </div>

        {/* Desktop CTAs - In the left column area */}
        <div 
          className="hidden lg:flex flex-row gap-4 mt-8"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(16px)',
            transition: 'opacity 0.6s ease-out 0.4s, transform 0.6s ease-out 0.4s'
          }}
        >
          <GradientButton size="lg" asChild>
            <a href={CALENDLY_URL} target="_blank" rel="noopener noreferrer">
              <Phone className="w-5 h-5" />
              Plan een vrijblijvend gesprek
            </a>
          </GradientButton>
          <GradientButton variant="outline" size="lg" asChild>
            <Link to="/hoe-het-werkt">
              Bekijk hoe het werkt
              <ArrowRight className="w-4 h-4" />
            </Link>
          </GradientButton>
        </div>
      </div>
    </section>
  );
}
