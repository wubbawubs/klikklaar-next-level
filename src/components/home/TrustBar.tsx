import { Star, Users, TrendingUp, Zap } from "lucide-react";

const stats = [
  { icon: Users, value: "100+", label: "Tevreden klanten" },
  { icon: TrendingUp, value: "47%", label: "Gem. groei bezoekers" },
  { icon: Zap, value: "24/7", label: "Automatisch actief" },
  { icon: Star, value: "4.9", label: "Beoordeling" },
];

export function TrustBar() {
  return (
    <section className="py-12 bg-background haze-gradient-hero-flow relative overflow-hidden">
      <div className="container relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {stats.map((stat, index) => (
            <div 
              key={stat.label} 
              className="flex items-center gap-4 opacity-0 animate-fade-in group"
              style={{ animationDelay: `${index * 80}ms`, animationFillMode: 'forwards' }}
            >
              <div className="w-12 h-12 rounded-xl bg-card border border-border flex items-center justify-center shadow-premium-sm group-hover:shadow-premium group-hover:border-kk-orange/20 transition-all duration-300">
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
    </section>
  );
}
