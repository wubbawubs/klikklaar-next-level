import { Star, Users, TrendingUp, Clock } from "lucide-react";

const stats = [
  {
    icon: Users,
    value: "100+",
    label: "Tevreden ondernemers",
  },
  {
    icon: TrendingUp,
    value: "47%",
    label: "Gemiddelde groei",
  },
  {
    icon: Clock,
    value: "24/7",
    label: "Automatische monitoring",
  },
  {
    icon: Star,
    value: "4.9/5",
    label: "Klantbeoordeling",
  },
];

export function TrustBar() {
  return (
    <section className="py-12 lg:py-16 border-y border-border bg-muted/30">
      <div className="container">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div 
              key={stat.label} 
              className="flex flex-col items-center text-center opacity-0 animate-fade-in"
              style={{ animationDelay: `${index * 100}ms`, animationFillMode: 'forwards' }}
            >
              <div className="w-12 h-12 rounded-xl bg-background border border-border flex items-center justify-center mb-3">
                <stat.icon className="w-5 h-5 text-kk-orange" />
              </div>
              <p className="text-2xl lg:text-3xl font-bold text-foreground">{stat.value}</p>
              <p className="text-sm text-muted-foreground">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
