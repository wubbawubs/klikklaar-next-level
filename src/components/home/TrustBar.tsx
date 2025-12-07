import { Star, Users, TrendingUp, Zap } from "lucide-react";

const stats = [
  { icon: Users, value: "100+", label: "Tevreden klanten", featured: true },
  { icon: TrendingUp, value: "47%", label: "Gem. groei bezoekers", featured: false },
  { icon: Zap, value: "24/7", label: "Automatisch actief", featured: false },
  { icon: Star, value: "4.9", label: "Beoordeling", featured: false },
];

export function TrustBar() {
  return (
    <section className="py-12 border-y border-border bg-muted/40">
      <div className="container">
        {/* Asymmetric grid: 1 large stat left + 3 smaller stats right */}
        <div className="grid lg:grid-cols-[1fr_2fr] gap-8 items-center">
          {/* Featured large stat - Left */}
          <div 
            className="flex items-center gap-5 p-6 rounded-2xl bg-card border border-border shadow-premium opacity-0 animate-fade-in"
            style={{ animationFillMode: 'forwards' }}
          >
            <div className="w-14 h-14 rounded-xl gradient-subtle border border-kk-orange/20 flex items-center justify-center shadow-sm">
              <Users className="w-7 h-7 text-kk-orange" />
            </div>
            <div>
              <p className="text-4xl font-bold text-foreground">100+</p>
              <p className="text-muted-foreground">Tevreden klanten</p>
            </div>
          </div>

          {/* Smaller stats - Right */}
          <div className="flex flex-wrap justify-center lg:justify-end items-center gap-6 lg:gap-8">
            {stats.slice(1).map((stat, index) => (
              <div 
                key={stat.label} 
                className="flex items-center gap-4 opacity-0 animate-fade-in"
                style={{ animationDelay: `${100 + index * 80}ms`, animationFillMode: 'forwards' }}
              >
                <div className="w-11 h-11 rounded-xl bg-background border border-border flex items-center justify-center shadow-sm">
                  <stat.icon className="w-5 h-5 text-kk-orange" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-foreground">{stat.value}</p>
                  <p className="text-sm text-muted-foreground">{stat.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
