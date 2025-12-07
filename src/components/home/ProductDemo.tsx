import { TrendingUp, Zap, Check, ArrowRight } from "lucide-react";

export function ProductDemo() {
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
            <span className="w-1.5 h-1.5 rounded-full bg-green-500" />
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

          {/* Improvements list */}
          <div className="space-y-3">
            <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">Verbeteringen toegepast</p>
            {[
              { label: "Meta-tags geoptimaliseerd", done: true },
              { label: "Lokale zoekwoorden actief", done: true },
              { label: "Laadsnelheid verbeterd", done: true },
              { label: "Schema markup toegevoegd", done: false, inProgress: true },
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-3 p-3 rounded-lg bg-muted/50">
                {item.done ? (
                  <div className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center">
                    <Check className="w-3 h-3 text-green-600" />
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
        </div>
      </div>

      {/* Floating result cards */}
      <div className="absolute -right-4 lg:-right-8 top-8 bg-card rounded-xl shadow-premium border border-border p-4 animate-float">
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

      <div className="absolute -left-4 lg:-left-8 bottom-24 bg-card rounded-xl shadow-premium border border-border p-4 animate-float animation-delay-300">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-lg bg-kk-orange/10 flex items-center justify-center">
            <ArrowRight className="w-5 h-5 text-kk-orange" />
          </div>
          <div>
            <p className="text-xs text-muted-foreground">Google positie</p>
            <p className="text-lg font-bold text-foreground">#12 → #3</p>
          </div>
        </div>
      </div>

      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-gradient-to-br from-kk-orange/10 to-kk-violet/10 rounded-full blur-3xl -z-10" />
    </div>
  );
}
