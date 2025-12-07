import { TrendingUp, Zap, Check, ArrowUpRight } from "lucide-react";
import { useState, useEffect } from "react";

// Rotating stats for the floating cards
const floatingStats = [
  [
    { label: "Bezoekers", value: "+281%", icon: TrendingUp },
    { label: "Conversie", value: "+34%", icon: TrendingUp },
    { label: "Leads", value: "+156%", icon: TrendingUp },
  ],
  [
    { label: "Google positie", value: "#12 → #3", icon: TrendingUp },
    { label: "Laadtijd", value: "4.2s → 1.8s", icon: TrendingUp },
    { label: "SEO Score", value: "47 → 94", icon: TrendingUp },
  ],
];

// Improvements list with staggered check-in
const improvements = [
  { label: "Meta-tags geoptimaliseerd", done: true, isOrange: false },
  { label: "Nieuwe titels toegevoegd", done: true, isOrange: true }, // Orange highlight
  { label: "Lokale zoekwoorden actief", done: true, isOrange: false },
  { label: "Schema markup toevoegen", done: false, inProgress: true, isOrange: false },
];

export function ProductDemo() {
  const [visibleCard, setVisibleCard] = useState<'left' | 'right' | null>('right');
  const [statIndex, setStatIndex] = useState([0, 0]);
  const [checkedItems, setCheckedItems] = useState<boolean[]>([false, false, false, false]);

  // Staggered check-in animation on mount
  useEffect(() => {
    const timers: NodeJS.Timeout[] = [];
    improvements.forEach((_, index) => {
      const timer = setTimeout(() => {
        setCheckedItems(prev => {
          const newState = [...prev];
          newState[index] = true;
          return newState;
        });
      }, 400 + index * 300); // Staggered: 400ms, 700ms, 1000ms, 1300ms
      timers.push(timer);
    });
    return () => timers.forEach(t => clearTimeout(t));
  }, []);

  // Rotate cards visibility and stats
  useEffect(() => {
    const interval = setInterval(() => {
      setVisibleCard(prev => {
        if (prev === 'right') {
          setStatIndex(curr => [curr[0], (curr[1] + 1) % floatingStats[1].length]);
          return 'left';
        } else if (prev === 'left') {
          setStatIndex(curr => [(curr[0] + 1) % floatingStats[0].length, curr[1]]);
          return null;
        } else {
          return 'right';
        }
      });
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const rightStat = floatingStats[0][statIndex[0]];
  const leftStat = floatingStats[1][statIndex[1]];

  return (
    <div className="relative">
      {/* Main audit card */}
      <div className="relative bg-card rounded-2xl shadow-premium-lg border border-border overflow-hidden">
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

        {/* Score section */}
        <div className="p-6">
          <div className="flex items-center gap-6 mb-6">
            {/* Score circle */}
            <div className="relative w-24 h-24 flex-shrink-0">
              <svg className="w-full h-full -rotate-90" viewBox="0 0 100 100">
                <circle cx="50" cy="50" r="42" fill="none" stroke="hsl(var(--border))" strokeWidth="8" />
                <circle 
                  cx="50" cy="50" r="42" fill="none" 
                  stroke="url(#scoreGradient)" strokeWidth="8" 
                  strokeLinecap="round"
                  strokeDasharray="264" strokeDashoffset="26"
                  className="transition-all duration-1000"
                />
                <defs>
                  <linearGradient id="scoreGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="hsl(var(--kk-orange))" />
                    <stop offset="100%" stopColor="hsl(var(--kk-violet))" />
                  </linearGradient>
                </defs>
              </svg>
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-2xl font-bold text-foreground">92</span>
              </div>
            </div>
            
            <div className="flex-1">
              <p className="text-sm text-muted-foreground mb-1">Huidige score</p>
              <p className="text-lg font-semibold text-foreground mb-2">Uitstekend</p>
              <div className="flex items-center gap-1.5 text-green-600 text-sm font-medium">
                <TrendingUp className="w-4 h-4" />
                +47 punten sinds start
              </div>
            </div>
          </div>

          {/* Improvements list with staggered animation */}
          <div className="space-y-3">
            <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">Verbeteringen toegepast</p>
            {improvements.map((item, i) => (
              <div 
                key={i} 
                className={`flex items-center gap-3 p-3 rounded-lg transition-all duration-500 ${
                  checkedItems[i] ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'
                } ${item.isOrange ? 'bg-kk-orange/10 border border-kk-orange/20' : 'bg-muted/50'}`}
              >
                {item.done ? (
                  <div className={`w-5 h-5 rounded-full flex items-center justify-center transition-all duration-300 ${
                    item.isOrange ? 'bg-kk-orange' : 'bg-green-100'
                  }`}>
                    <Check className={`w-3 h-3 ${item.isOrange ? 'text-white' : 'text-green-600'}`} />
                  </div>
                ) : (
                  <div className="w-5 h-5 rounded-full border-2 border-kk-orange border-dashed animate-pulse-subtle" />
                )}
                <span className={`text-sm ${item.done ? 'text-foreground' : 'text-muted-foreground'} ${item.isOrange ? 'font-medium' : ''}`}>
                  {item.label}
                </span>
                {item.inProgress && (
                  <span className="ml-auto text-xs text-kk-orange font-medium">Bezig...</span>
                )}
              </div>
            ))}
          </div>

          {/* Mini growth chart */}
          <div className="mt-6 pt-4 border-t border-border">
            <div className="flex items-center justify-between mb-3">
              <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">Groei deze maand</p>
              <div className="flex items-center gap-1 text-green-600 text-xs font-medium">
                <ArrowUpRight className="w-3 h-3" />
                +23%
              </div>
            </div>
            <div className="flex items-end gap-1 h-12">
              {[35, 42, 38, 55, 48, 62, 58, 72, 68, 85, 78, 92].map((height, i) => (
                <div 
                  key={i} 
                  className="flex-1 rounded-sm transition-all duration-500 gradient-cta"
                  style={{ 
                    height: `${height}%`,
                    opacity: 0.4 + (i / 12) * 0.6,
                    transitionDelay: `${i * 50}ms`
                  }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Floating result card - RIGHT */}
      <div 
        className={`absolute -right-4 lg:-right-8 top-8 bg-card rounded-xl shadow-premium border border-border p-4 transition-all duration-700 ease-in-out ${
          visibleCard === 'right' 
            ? 'opacity-100 translate-y-0' 
            : 'opacity-0 translate-y-4 pointer-events-none'
        }`}
      >
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-lg bg-green-100 flex items-center justify-center">
            <rightStat.icon className="w-5 h-5 text-green-600" />
          </div>
          <div>
            <p className="text-xs text-muted-foreground">{rightStat.label}</p>
            <p className="text-lg font-bold text-foreground">{rightStat.value}</p>
          </div>
        </div>
      </div>

      {/* Floating result card - LEFT */}
      <div 
        className={`absolute -left-4 lg:-left-8 bottom-32 bg-card rounded-xl shadow-premium border border-border p-4 transition-all duration-700 ease-in-out ${
          visibleCard === 'left' 
            ? 'opacity-100 translate-y-0' 
            : 'opacity-0 -translate-y-4 pointer-events-none'
        }`}
      >
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-lg bg-kk-orange/10 flex items-center justify-center">
            <leftStat.icon className="w-5 h-5 text-kk-orange" />
          </div>
          <div>
            <p className="text-xs text-muted-foreground">{leftStat.label}</p>
            <p className="text-lg font-bold text-foreground">{leftStat.value}</p>
          </div>
        </div>
      </div>

      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-gradient-to-br from-kk-orange/10 to-kk-violet/10 rounded-full blur-3xl -z-10" />
    </div>
  );
}
