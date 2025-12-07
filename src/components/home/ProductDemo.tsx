import { TrendingUp, Zap, Check, ArrowUpRight } from "lucide-react";
import { useState, useEffect } from "react";

const improvements = [
  { label: "Meta-tags geoptimaliseerd", done: true },
  { label: "Nieuwe titels toegevoegd", done: true, highlight: true },
  { label: "Lokale zoekwoorden actief", done: true },
  { label: "Schema markup toevoegen", done: false, inProgress: true },
];

export function ProductDemo() {
  const [animatedItems, setAnimatedItems] = useState<boolean[]>([false, false, false, false]);

  useEffect(() => {
    const timers: NodeJS.Timeout[] = [];
    improvements.forEach((_, index) => {
      const timer = setTimeout(() => {
        setAnimatedItems(prev => {
          const newState = [...prev];
          newState[index] = true;
          return newState;
        });
      }, 800 + index * 300);
      timers.push(timer);
    });
    return () => timers.forEach(t => clearTimeout(t));
  }, []);

  return (
    <div className="relative">
      {/* Main card */}
      <div className="bg-card rounded-2xl shadow-premium-lg border border-border overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between px-5 py-4 border-b border-border bg-muted/30">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg gradient-cta flex items-center justify-center">
              <Zap className="w-4 h-4 text-white" />
            </div>
            <div>
              <p className="text-sm font-semibold text-foreground">KlikKlaar Analyse</p>
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
                  strokeDasharray="264" strokeDashoffset="26"
                />
                <defs>
                  <linearGradient id="scoreGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="hsl(var(--kk-orange))" />
                    <stop offset="100%" stopColor="hsl(var(--kk-violet))" />
                  </linearGradient>
                </defs>
              </svg>
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-xl font-bold text-foreground">92</span>
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
            {improvements.map((item, i) => (
              <div 
                key={i} 
                className={`flex items-center gap-3 p-3 rounded-lg transition-all duration-500 ${
                  item.highlight ? 'bg-kk-orange/10' : 'bg-muted/50'
                }`}
                style={{ 
                  opacity: animatedItems[i] ? 1 : 0,
                  transform: animatedItems[i] ? 'translateX(0)' : 'translateX(-10px)',
                  transition: 'opacity 0.5s ease, transform 0.5s ease'
                }}
              >
                {item.done ? (
                  <div className={`w-5 h-5 rounded-full flex items-center justify-center ${
                    item.highlight ? 'bg-kk-orange' : 'bg-green-500'
                  }`}>
                    <Check className="w-3 h-3 text-white" />
                  </div>
                ) : (
                  <div className="w-5 h-5 rounded-full border-2 border-kk-orange border-dashed animate-pulse-subtle" />
                )}
                <span className={`text-sm ${item.done ? 'text-foreground' : 'text-muted-foreground'}`}>
                  {item.label}
                </span>
                {item.inProgress && (
                  <span className="ml-auto text-xs text-kk-orange font-medium">Bezig...</span>
                )}
              </div>
            ))}
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
                  style={{ height: `${height}%`, opacity: 0.4 + (i / 12) * 0.6 }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Floating card */}
      <div className="absolute -right-4 top-8 bg-card rounded-xl shadow-premium border border-border p-4 opacity-0 animate-fade-in animation-delay-500" style={{ animationFillMode: 'forwards' }}>
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-lg bg-green-100 flex items-center justify-center">
            <TrendingUp className="w-5 h-5 text-green-600" />
          </div>
          <div>
            <p className="text-xs text-muted-foreground">Bezoekers</p>
            <p className="text-lg font-bold text-foreground">+281%</p>
          </div>
        </div>
      </div>

      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-gradient-to-br from-kk-orange/5 to-kk-violet/5 rounded-full blur-3xl -z-10" />
    </div>
  );
}
