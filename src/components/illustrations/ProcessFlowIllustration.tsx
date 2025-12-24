import { MessageCircle, Search, Rocket, Calendar, FileText, TrendingUp, ArrowRight } from "lucide-react";
import { useState, useEffect, useRef } from "react";

const steps = [
  { 
    icon: MessageCircle, 
    label: "Kennismaken",
    sublabel: "15 min gesprek",
    color: "bg-blue-100",
    iconColor: "text-blue-600"
  },
  { 
    icon: Search, 
    label: "Analyseren",
    sublabel: "Gratis inzicht",
    color: "bg-purple-100",
    iconColor: "text-purple-600"
  },
  { 
    icon: Rocket, 
    label: "Groeien",
    sublabel: "Automatisch",
    color: "bg-kk-orange/10",
    iconColor: "text-kk-orange"
  },
];

const floatingCards = [
  { icon: Calendar, label: "Gesprek ingepland", sublabel: "Morgen 10:00", delay: 0.6 },
  { icon: FileText, label: "12 verbeterpunten", sublabel: "Gevonden", delay: 1.0 },
  { icon: TrendingUp, label: "+47% bezoekers", sublabel: "Deze maand", delay: 1.4 },
];

export function ProcessFlowIllustration() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeStep, setActiveStep] = useState(0);
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
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % 3);
    }, 2500);
    return () => clearInterval(interval);
  }, [isVisible]);

  return (
    <div className="relative" ref={containerRef}>
      {/* Main card */}
      <div className="bg-card rounded-2xl shadow-premium-lg border border-border overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between px-5 py-4 border-b border-border bg-muted/30">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl gradient-cta flex items-center justify-center">
              <Rocket className="w-5 h-5 text-white" />
            </div>
            <div>
              <p className="text-sm font-semibold text-foreground">Jouw Groeipad</p>
              <p className="text-xs text-muted-foreground">3 simpele stappen</p>
            </div>
          </div>
        </div>

        {/* Steps flow */}
        <div className="p-6">
          <div className="flex items-center justify-between mb-8">
            {steps.map((step, i) => {
              const Icon = step.icon;
              const isActive = i === activeStep;
              const isCompleted = i < activeStep;
              
              return (
                <div key={step.label} className="flex items-center">
                  <div 
                    className="flex flex-col items-center"
                    style={{
                      opacity: isVisible ? 1 : 0,
                      transform: isVisible ? 'translateY(0)' : 'translateY(16px)',
                      transition: `opacity 0.5s ease-out ${0.2 + i * 0.15}s, transform 0.5s ease-out ${0.2 + i * 0.15}s`
                    }}
                  >
                    <div 
                      className={`w-14 h-14 rounded-2xl flex items-center justify-center transition-all duration-500 ${
                        isActive ? 'gradient-cta shadow-lg scale-110' : 
                        isCompleted ? 'bg-green-100' : step.color
                      }`}
                    >
                      <Icon className={`w-6 h-6 transition-colors duration-300 ${
                        isActive ? 'text-white' : 
                        isCompleted ? 'text-green-600' : step.iconColor
                      }`} />
                    </div>
                    <p className={`mt-2 text-xs font-medium transition-colors duration-300 ${
                      isActive ? 'text-foreground' : 'text-muted-foreground'
                    }`}>
                      {step.label}
                    </p>
                    <p className="text-[10px] text-muted-foreground">{step.sublabel}</p>
                  </div>
                  
                  {i < steps.length - 1 && (
                    <div 
                      className="flex-1 mx-3 h-0.5 bg-border relative overflow-hidden"
                      style={{
                        opacity: isVisible ? 1 : 0,
                        transition: `opacity 0.5s ease-out ${0.4 + i * 0.15}s`
                      }}
                    >
                      <div 
                        className="absolute inset-y-0 left-0 gradient-cta"
                        style={{
                          width: isCompleted || (isActive && i === 0) ? '100%' : '0%',
                          transition: 'width 0.6s ease-out'
                        }}
                      />
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Active step detail */}
          <div 
            className="p-4 bg-muted/50 rounded-xl"
            style={{
              opacity: isVisible ? 1 : 0,
              transition: 'opacity 0.4s ease-out 0.6s'
            }}
          >
            {floatingCards.map((card, i) => {
              const Icon = card.icon;
              const isActive = i === activeStep;
              
              return (
                <div 
                  key={card.label}
                  className="flex items-center gap-3"
                  style={{
                    display: isActive ? 'flex' : 'none',
                  }}
                >
                  <div className="w-10 h-10 rounded-lg gradient-cta flex items-center justify-center">
                    <Icon className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-foreground">{card.label}</p>
                    <p className="text-xs text-muted-foreground">{card.sublabel}</p>
                  </div>
                  <ArrowRight className="w-4 h-4 text-muted-foreground ml-auto" />
                </div>
              );
            })}
          </div>

          {/* Progress indicator */}
          <div className="flex justify-center gap-2 mt-6">
            {[0, 1, 2].map((i) => (
              <div 
                key={i}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  i === activeStep ? 'w-6 gradient-cta' : 'w-1.5 bg-border'
                }`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Floating result card */}
      <div 
        className="hidden lg:flex absolute -right-4 top-1/2 -translate-y-1/2 bg-card rounded-xl shadow-premium border border-border p-4 items-center gap-3"
        style={{
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? 'translateX(0)' : 'translateX(12px)',
          transition: 'opacity 0.5s ease-out 1s, transform 0.5s ease-out 1s'
        }}
      >
        <div className="w-10 h-10 rounded-lg bg-green-100 flex items-center justify-center">
          <TrendingUp className="w-5 h-5 text-green-600" />
        </div>
        <div>
          <p className="text-xs text-muted-foreground">Resultaat</p>
          <p className="text-lg font-bold text-foreground">Groei!</p>
        </div>
      </div>

      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-gradient-to-br from-kk-orange/5 to-kk-violet/5 rounded-full blur-3xl -z-10" />
    </div>
  );
}
