import { TrendingUp, Check, ArrowUpRight, Users, MousePointerClick, Eye } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import klikklaarLogo from "@/assets/klikklaar-logo.png";

const improvements = [
  { label: "Meta-tags geoptimaliseerd", done: true },
  { label: "Nieuwe titels toegevoegd", done: true, highlight: true },
  { label: "Lokale zoekwoorden actief", done: true },
  { label: "Schema markup toevoegen", done: false, inProgress: true },
];

const kpiStats = [
  { icon: TrendingUp, label: "Bezoekers", value: "+281%", color: "bg-green-100", iconColor: "text-green-600" },
  { icon: Users, label: "Leads", value: "+156%", color: "bg-blue-100", iconColor: "text-blue-600" },
  { icon: MousePointerClick, label: "Klikken", value: "+312%", color: "bg-purple-100", iconColor: "text-purple-600" },
  { icon: Eye, label: "Impressies", value: "+89%", color: "bg-kk-orange/10", iconColor: "text-kk-orange" },
];

export function ProductDemo() {
  const [isVisible, setIsVisible] = useState(false);
  const [currentKpi, setCurrentKpi] = useState(0);
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

  // KPI rotation
  useEffect(() => {
    if (!isVisible) return;
    const interval = setInterval(() => {
      setCurrentKpi((prev) => (prev + 1) % kpiStats.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [isVisible]);

  return (
    <div className="relative" ref={containerRef}>
      {/* Main card */}
      <div className="bg-card rounded-2xl shadow-premium-lg border border-border overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between px-5 py-4 border-b border-border bg-muted/30">
          <div className="flex items-center gap-3">
            <img src={klikklaarLogo} alt="KlikKlaar" className="h-8 w-auto object-contain" />
            <div>
              <p className="text-sm font-semibold text-foreground">Zichtbaarheids Analyse</p>
              <p className="text-xs text-muted-foreground">jouwwebsite.nl</p>
            </div>
          </div>
          <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-green-100 text-green-700 text-xs font-medium">
            <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse-subtle" />
            Live
          </div>
        </div>

        {/* Content */}
        <div className="p-6">
          {/* Score */}
          <div className="flex items-center gap-6 mb-6">
            <div className="relative w-20 h-20 flex-shrink-0">
              <svg className="w-full h-full -rotate-90" viewBox="0 0 100 100">
                <circle cx="50" cy="50" r="42" fill="none" stroke="hsl(var(--border))" strokeWidth="8" />
                <circle 
                  cx="50" cy="50" r="42" fill="none" 
                  stroke="url(#scoreGradient)" strokeWidth="8" 
                  strokeLinecap="round"
                  strokeDasharray="264" 
                  strokeDashoffset={isVisible ? 26 : 264}
                  style={{ transition: "stroke-dashoffset 1s cubic-bezier(0.4, 0, 0.2, 1) 0.2s" }}
                />
                <defs>
                  <linearGradient id="scoreGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="hsl(var(--kk-orange))" />
                    <stop offset="100%" stopColor="hsl(var(--kk-violet))" />
                  </linearGradient>
                </defs>
              </svg>
              <div className="absolute inset-0 flex items-center justify-center">
                <span 
                  className="text-xl font-bold text-foreground"
                  style={{ 
                    opacity: isVisible ? 1 : 0,
                    transition: 'opacity 0.4s ease-out 0.5s'
                  }}
                >
                  92
                </span>
              </div>
            </div>
            
            <div>
              <p className="text-sm text-muted-foreground mb-1">Huidige score</p>
              <p className="text-lg font-semibold text-foreground mb-1">Uitstekend</p>
              <div className="flex items-center gap-1.5 text-green-600 text-sm font-medium">
                <TrendingUp className="w-4 h-4" />
                +47 punten sinds start
              </div>
            </div>
          </div>

          {/* Improvements */}
          <div className="space-y-2.5">
            <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">
              Verbeteringen toegepast
            </p>
            {improvements.map((item, i) => {
              const delay = 0.3 + i * 0.15;
              return (
                <div 
                  key={i} 
                  className={`flex items-center gap-3 p-3 rounded-lg ${
                    item.highlight ? 'bg-kk-orange/10' : 'bg-muted/50'
                  }`}
                  style={{ 
                    opacity: isVisible ? 1 : 0,
                    transform: isVisible ? 'translateX(0)' : 'translateX(-12px)',
                    transition: `opacity 0.5s ease-out ${delay}s, transform 0.5s ease-out ${delay}s`,
                  }}
                >
                  {item.done ? (
                    <div 
                      className={`w-5 h-5 rounded-full flex items-center justify-center ${
                        item.highlight ? 'bg-kk-orange' : 'bg-green-500'
                      }`}
                      style={{
                        transform: isVisible ? 'scale(1)' : 'scale(0)',
                        transition: `transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1) ${delay + 0.15}s`,
                      }}
                    >
                      <Check className="w-3 h-3 text-white" />
                    </div>
                  ) : (
                    <div 
                      className="w-5 h-5 rounded-full border-2 border-kk-orange border-dashed animate-pulse-subtle"
                      style={{
                        opacity: isVisible ? 1 : 0,
                        transition: `opacity 0.4s ease-out ${delay}s`,
                      }}
                    />
                  )}
                  <span className={`text-sm ${item.done ? 'text-foreground' : 'text-muted-foreground'}`}>
                    {item.label}
                  </span>
                  {item.inProgress && (
                    <span className="ml-auto text-xs text-kk-orange font-medium">Bezig...</span>
                  )}
                </div>
              );
            })}
          </div>

          {/* Growth chart */}
          <div className="mt-6 pt-4 border-t border-border">
            <div className="flex items-center justify-between mb-3">
              <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">Groei deze maand</p>
              <div className="flex items-center gap-1 text-green-600 text-xs font-medium">
                <ArrowUpRight className="w-3 h-3" />
                +23%
              </div>
            </div>
            <div className="flex items-end gap-1 h-10">
              {[35, 42, 38, 55, 48, 62, 58, 72, 68, 85, 78, 92].map((height, i) => (
                <div 
                  key={i} 
                  className="flex-1 rounded-sm gradient-cta"
                  style={{ 
                    height: isVisible ? `${height}%` : '0%',
                    opacity: 0.4 + (i / 12) * 0.6,
                    transition: `height 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) ${1.0 + i * 0.05}s`
                  }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Floating KPI cards - hidden on mobile */}
      <div 
        className="hidden lg:block absolute -right-4 top-8 bg-card rounded-xl shadow-premium border border-border p-4 overflow-hidden"
        style={{
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? 'translateY(0)' : 'translateY(12px)',
          transition: 'opacity 0.5s ease-out 0.6s, transform 0.5s ease-out 0.6s'
        }}
      >
        {kpiStats.map((kpi, index) => {
          const Icon = kpi.icon;
          return (
            <div 
              key={kpi.label}
              className="flex items-center gap-3"
              style={{
                position: index === currentKpi ? 'relative' : 'absolute',
                opacity: index === currentKpi ? 1 : 0,
                transform: index === currentKpi ? 'translateY(0)' : 'translateY(8px)',
                transition: 'opacity 0.4s ease-out, transform 0.4s ease-out',
                pointerEvents: index === currentKpi ? 'auto' : 'none',
              }}
            >
              <div className={`w-10 h-10 rounded-lg ${kpi.color} flex items-center justify-center`}>
                <Icon className={`w-5 h-5 ${kpi.iconColor}`} />
              </div>
              <div>
                <p className="text-xs text-muted-foreground">{kpi.label}</p>
                <p className="text-lg font-bold text-foreground">{kpi.value}</p>
              </div>
            </div>
          );
        })}
      </div>

      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-gradient-to-br from-kk-orange/5 to-kk-violet/5 rounded-full blur-3xl -z-10" />
    </div>
  );
}
