import { Star, Users, TrendingUp, Zap } from "lucide-react";

const stats = [
  { icon: Users, value: "100+", label: "Tevreden klanten" },
  { icon: TrendingUp, value: "47%", label: "Gem. groei bezoekers" },
  { icon: Zap, value: "24/7", label: "Automatisch actief" },
  { icon: Star, value: "4.9", label: "Beoordeling" },
];

export function TrustBar() {
  return (
    <section className="py-12 border-y border-border bg-muted/40">
      <div className="container">
        <div className="flex flex-wrap justify-center lg:justify-between items-center gap-8 lg:gap-4">
          {stats.map((stat, index) => (
            <div 
              key={stat.label} 
              className="flex items-center gap-4 opacity-0 animate-fade-in"
              style={{ animationDelay: `${index * 80}ms`, animationFillMode: 'forwards' }}
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
    </section>
  );
}
