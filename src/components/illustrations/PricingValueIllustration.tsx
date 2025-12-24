import { Check, X, TrendingUp, Sparkles, Euro, Clock } from "lucide-react";
import { useState, useEffect, useRef } from "react";

const comparison = [
  { feature: "Wekelijkse optimalisatie", bureau: false, klikklaar: true },
  { feature: "Transparante prijzen", bureau: false, klikklaar: true },
  { feature: "Geen lange contracten", bureau: false, klikklaar: true },
  { feature: "Persoonlijk contact", bureau: true, klikklaar: true },
];

export function PricingValueIllustration() {
  const [isVisible, setIsVisible] = useState(false);
  const [animatedValue, setAnimatedValue] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setIsVisible(true), 100);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;
    const target = 401;
    const duration = 1500;
    const startTime = Date.now();
    
    const animate = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setAnimatedValue(Math.floor(eased * target));
      
      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };
    
    const timer = setTimeout(animate, 600);
    return () => clearTimeout(timer);
  }, [isVisible]);

  return (
    <div className="relative" ref={containerRef}>
      {/* Main card */}
      <div className="bg-card rounded-2xl shadow-premium-lg border border-border overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between px-5 py-4 border-b border-border bg-muted/30">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl gradient-cta flex items-center justify-center">
              <Euro className="w-5 h-5 text-white" />
            </div>
            <div>
              <p className="text-sm font-semibold text-foreground">Bespaar tot</p>
              <p className="text-xs text-muted-foreground">per maand</p>
            </div>
          </div>
        </div>

        {/* Savings display */}
        <div className="p-6">
          <div 
            className="text-center mb-6 p-4 bg-green-50 dark:bg-green-900/20 rounded-xl"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'scale(1)' : 'scale(0.95)',
              transition: 'opacity 0.5s ease-out 0.3s, transform 0.5s ease-out 0.3s'
            }}
          >
            <p className="text-sm text-green-600 dark:text-green-400 mb-1">Je bespaart</p>
            <p className="text-4xl font-bold text-green-600 dark:text-green-400">
              €{animatedValue}
            </p>
            <p className="text-xs text-green-600/70 dark:text-green-400/70">t.o.v. traditioneel bureau</p>
          </div>

          {/* Price comparison bars */}
          <div className="space-y-4 mb-6">
            <div>
              <div className="flex justify-between text-xs mb-1.5">
                <span className="text-muted-foreground">Traditioneel bureau</span>
                <span className="text-muted-foreground font-medium">€500+/maand</span>
              </div>
              <div className="h-3 bg-muted rounded-full overflow-hidden">
                <div 
                  className="h-full bg-red-400 rounded-full"
                  style={{
                    width: isVisible ? '100%' : '0%',
                    transition: 'width 0.8s cubic-bezier(0.4, 0, 0.2, 1) 0.4s'
                  }}
                />
              </div>
            </div>
            
            <div>
              <div className="flex justify-between text-xs mb-1.5">
                <span className="text-foreground font-medium">KlikKlaar</span>
                <span className="text-kk-orange font-bold">€99/maand</span>
              </div>
              <div className="h-3 bg-muted rounded-full overflow-hidden">
                <div 
                  className="h-full gradient-cta rounded-full"
                  style={{
                    width: isVisible ? '20%' : '0%',
                    transition: 'width 0.8s cubic-bezier(0.4, 0, 0.2, 1) 0.6s'
                  }}
                />
              </div>
            </div>
          </div>

          {/* Feature comparison */}
          <div className="space-y-2">
            <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">
              Vergelijking
            </p>
            {comparison.map((item, i) => (
              <div 
                key={item.feature}
                className="flex items-center gap-3 p-2.5 bg-muted/30 rounded-lg"
                style={{
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible ? 'translateX(0)' : 'translateX(-12px)',
                  transition: `opacity 0.4s ease-out ${0.8 + i * 0.1}s, transform 0.4s ease-out ${0.8 + i * 0.1}s`
                }}
              >
                <span className="text-xs text-foreground flex-1">{item.feature}</span>
                <div className="flex gap-6">
                  {item.bureau ? (
                    <Check className="w-4 h-4 text-muted-foreground" />
                  ) : (
                    <X className="w-4 h-4 text-red-400" />
                  )}
                  <Check className="w-4 h-4 text-green-500" />
                </div>
              </div>
            ))}
            <div className="flex justify-end gap-6 text-[10px] text-muted-foreground pt-1 pr-2">
              <span>Bureau</span>
              <span className="text-kk-orange font-medium">KlikKlaar</span>
            </div>
          </div>
        </div>
      </div>

      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-gradient-to-br from-kk-orange/5 to-kk-violet/5 rounded-full blur-3xl -z-10" />
    </div>
  );
}
