import { TrendingUp, Zap, Search, BarChart3 } from "lucide-react";

export function HeroIllustration() {
  return (
    <div className="relative w-full h-full min-h-[400px] flex items-center justify-center">
      {/* Main browser mockup */}
      <div className="relative w-full max-w-md bg-card rounded-2xl shadow-2xl border border-border overflow-hidden animate-fade-in">
        {/* Browser header */}
        <div className="flex items-center gap-2 px-4 py-3 bg-muted border-b border-border">
          <div className="flex gap-1.5">
            <div className="w-3 h-3 rounded-full bg-red-400" />
            <div className="w-3 h-3 rounded-full bg-yellow-400" />
            <div className="w-3 h-3 rounded-full bg-green-400" />
          </div>
          <div className="flex-1 mx-4">
            <div className="bg-background rounded-md px-3 py-1.5 text-xs text-muted-foreground">
              jouwwebsite.nl
            </div>
          </div>
        </div>

        {/* Browser content - Website preview */}
        <div className="p-4 space-y-4">
          {/* Fake website header */}
          <div className="flex items-center justify-between">
            <div className="w-24 h-6 bg-muted rounded" />
            <div className="flex gap-2">
              <div className="w-12 h-4 bg-muted rounded" />
              <div className="w-12 h-4 bg-muted rounded" />
              <div className="w-12 h-4 bg-muted rounded" />
            </div>
          </div>

          {/* Fake hero */}
          <div className="space-y-2">
            <div className="w-3/4 h-4 bg-muted rounded" />
            <div className="w-1/2 h-4 bg-muted rounded" />
          </div>

          {/* Improvement overlay */}
          <div className="relative bg-gradient-to-r from-kk-orange/10 to-kk-violet/10 rounded-lg p-3 border border-kk-orange/20">
            <div className="flex items-center gap-2 mb-2">
              <Zap className="w-4 h-4 text-kk-orange" />
              <span className="text-xs font-medium text-foreground">Verbeteringen actief</span>
            </div>
            <div className="space-y-1.5">
              <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-kk-orange" />
                <span className="text-xs text-muted-foreground">Meta-tags geoptimaliseerd</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-kk-violet" />
                <span className="text-xs text-muted-foreground">Lokale zoekwoorden toegevoegd</span>
              </div>
            </div>
          </div>

          {/* Fake content blocks */}
          <div className="grid grid-cols-3 gap-2">
            <div className="h-16 bg-muted rounded" />
            <div className="h-16 bg-muted rounded" />
            <div className="h-16 bg-muted rounded" />
          </div>
        </div>
      </div>

      {/* Floating cards */}
      <div className="absolute -right-4 top-8 bg-card rounded-xl shadow-xl border border-border p-3 animate-float animation-delay-200">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-green-100 flex items-center justify-center">
            <TrendingUp className="w-4 h-4 text-green-600" />
          </div>
          <div>
            <p className="text-xs text-muted-foreground">Bezoekers</p>
            <p className="text-sm font-semibold text-foreground">+47%</p>
          </div>
        </div>
      </div>

      <div className="absolute -left-4 top-24 bg-card rounded-xl shadow-xl border border-border p-3 animate-float animation-delay-400">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-kk-orange/10 flex items-center justify-center">
            <Search className="w-4 h-4 text-kk-orange" />
          </div>
          <div>
            <p className="text-xs text-muted-foreground">Google ranking</p>
            <p className="text-sm font-semibold text-foreground">#3 → #1</p>
          </div>
        </div>
      </div>

      <div className="absolute -right-8 bottom-16 bg-card rounded-xl shadow-xl border border-border p-3 animate-float animation-delay-300">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-kk-violet/10 flex items-center justify-center">
            <BarChart3 className="w-4 h-4 text-kk-violet" />
          </div>
          <div>
            <p className="text-xs text-muted-foreground">Score</p>
            <p className="text-sm font-semibold text-foreground">92/100</p>
          </div>
        </div>
      </div>

      {/* Background glow */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-kk-orange/20 rounded-full blur-3xl" />
        <div className="absolute top-1/3 right-1/4 w-48 h-48 bg-kk-violet/20 rounded-full blur-3xl" />
      </div>
    </div>
  );
}
