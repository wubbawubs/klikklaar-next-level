import { useState, useEffect, useRef } from "react";
import { MapPin, TrendingUp, Star, Building, Users, ArrowUp } from "lucide-react";
import * as LucideIcons from "lucide-react";
import { IndustryData } from "@/data/industries";
import { LocationData } from "@/data/locations";

interface ComboHeroIllustrationProps {
  industry: IndustryData;
  location: LocationData;
}

// Province-specific visual elements for uniqueness
const provinceVisuals: Record<string, { 
  primaryColor: string; 
  secondaryColor: string;
  landmark: string;
}> = {
  "Noord-Holland": { primaryColor: "from-orange-500", secondaryColor: "to-red-500", landmark: "canal" },
  "Zuid-Holland": { primaryColor: "from-blue-500", secondaryColor: "to-cyan-500", landmark: "windmill" },
  "Utrecht": { primaryColor: "from-red-500", secondaryColor: "to-orange-500", landmark: "tower" },
  "Noord-Brabant": { primaryColor: "from-green-500", secondaryColor: "to-emerald-500", landmark: "forest" },
  "Gelderland": { primaryColor: "from-emerald-500", secondaryColor: "to-teal-500", landmark: "hills" },
  "Overijssel": { primaryColor: "from-teal-500", secondaryColor: "to-cyan-500", landmark: "river" },
  "Limburg": { primaryColor: "from-purple-500", secondaryColor: "to-pink-500", landmark: "hills" },
  "Flevoland": { primaryColor: "from-sky-500", secondaryColor: "to-blue-500", landmark: "modern" },
  "Friesland": { primaryColor: "from-blue-600", secondaryColor: "to-indigo-500", landmark: "lakes" },
  "Groningen": { primaryColor: "from-green-600", secondaryColor: "to-lime-500", landmark: "fields" },
  "Drenthe": { primaryColor: "from-amber-500", secondaryColor: "to-yellow-500", landmark: "dolmen" },
  "Zeeland": { primaryColor: "from-cyan-500", secondaryColor: "to-blue-600", landmark: "delta" },
};

// Tier-based stats
const tierStats: Record<1 | 2 | 3, { visitors: string; ranking: string; growth: string }> = {
  1: { visitors: "5.2K", ranking: "Top 5", growth: "+145%" },
  2: { visitors: "2.8K", ranking: "Top 3", growth: "+178%" },
  3: { visitors: "890", ranking: "Top 2", growth: "+215%" },
};

export function ComboHeroIllustration({ industry, location }: ComboHeroIllustrationProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [activeMetric, setActiveMetric] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  const IconComponent = LucideIcons[industry.icon as keyof typeof LucideIcons] as React.ElementType;
  const visuals = provinceVisuals[location.province] || provinceVisuals["Noord-Holland"];
  const stats = tierStats[location.tier];

  const metrics = [
    { value: stats.visitors, label: "Bezoekers/mnd", icon: Users },
    { value: stats.ranking, label: "Google ranking", icon: TrendingUp },
    { value: stats.growth, label: "Groei", icon: ArrowUp },
  ];

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
      setActiveMetric((prev) => (prev + 1) % metrics.length);
    }, 2500);
    return () => clearInterval(interval);
  }, [isVisible, metrics.length]);

  return (
    <div 
      ref={containerRef}
      className="relative max-w-sm mx-auto lg:mx-0"
      role="img"
      aria-label={`SEO resultaten illustratie voor ${industry.namePlural} in ${location.name}, ${location.province}`}
    >
      {/* Main card */}
      <div 
        className="bg-card rounded-2xl shadow-premium-lg border border-border overflow-hidden"
        style={{
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
          transition: 'opacity 0.6s ease-out, transform 0.6s ease-out'
        }}
      >
        {/* Header with location gradient */}
        <div className={`bg-gradient-to-r ${visuals.primaryColor} ${visuals.secondaryColor} p-4`}>
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center">
              <MapPin className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
            </div>
            <div className="text-white">
              <p className="text-sm sm:text-base font-semibold">{location.name}</p>
              <p className="text-xs opacity-80">{location.province}</p>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="p-5">
          {/* Industry focus */}
          <div 
            className="flex items-center gap-3 p-3 bg-muted/50 rounded-xl mb-4"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateX(0)' : 'translateX(-10px)',
              transition: 'opacity 0.5s ease-out 0.2s, transform 0.5s ease-out 0.2s'
            }}
          >
            <div className="w-10 h-10 rounded-xl bg-kk-orange/10 flex items-center justify-center">
              {IconComponent && <IconComponent className="w-5 h-5 text-kk-orange" />}
            </div>
            <div>
              <p className="text-sm font-semibold text-foreground">{industry.namePlural}</p>
              <p className="text-xs text-muted-foreground">Branche focus</p>
            </div>
          </div>

          {/* Stats grid */}
          <div className="grid grid-cols-3 gap-2 mb-4">
            {metrics.map((metric, i) => {
              const Icon = metric.icon;
              return (
                <div 
                  key={metric.label}
                  className={`p-3 rounded-xl text-center transition-all duration-300 ${
                    i === activeMetric 
                      ? 'bg-kk-orange/10 ring-1 ring-kk-orange/20' 
                      : 'bg-muted/30'
                  }`}
                  style={{
                    opacity: isVisible ? 1 : 0,
                    transform: isVisible ? 'scale(1)' : 'scale(0.9)',
                    transition: `opacity 0.4s ease-out ${0.3 + i * 0.1}s, transform 0.4s ease-out ${0.3 + i * 0.1}s`
                  }}
                >
                  <Icon className={`w-4 h-4 mx-auto mb-1 ${
                    i === activeMetric ? 'text-kk-orange' : 'text-muted-foreground'
                  }`} />
                  <p className={`text-sm font-bold ${
                    i === activeMetric ? 'text-kk-orange' : 'text-foreground'
                  }`}>{metric.value}</p>
                  <p className="text-[10px] text-muted-foreground">{metric.label}</p>
                </div>
              );
            })}
          </div>

          {/* Progress indicator */}
          <div 
            className="space-y-2"
            style={{
              opacity: isVisible ? 1 : 0,
              transition: 'opacity 0.5s ease-out 0.6s'
            }}
          >
            <div className="flex justify-between text-xs">
              <span className="text-muted-foreground">SEO Score</span>
              <span className="font-semibold text-kk-orange">92/100</span>
            </div>
            <div className="h-2 bg-muted rounded-full overflow-hidden">
              <div 
                className="h-full bg-gradient-to-r from-kk-orange to-kk-fuchsia rounded-full"
                style={{
                  width: isVisible ? '92%' : '0%',
                  transition: 'width 1s ease-out 0.8s'
                }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Floating rating badge */}
      <div 
        className="absolute -right-2 lg:-right-4 top-16 bg-card rounded-xl shadow-premium border border-border p-2.5"
        style={{
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? 'translateX(0) rotate(3deg)' : 'translateX(12px) rotate(3deg)',
          transition: 'opacity 0.5s ease-out 0.5s, transform 0.5s ease-out 0.5s'
        }}
      >
        <div className="flex items-center gap-1.5">
          <Star className="w-4 h-4 text-kk-orange fill-kk-orange" />
          <span className="text-sm font-bold text-foreground">4.2</span>
        </div>
        <p className="text-[9px] text-muted-foreground">Trustpilot</p>
      </div>

      {/* Floating local marker */}
      <div 
        className="absolute -left-2 lg:-left-4 bottom-20 bg-card rounded-xl shadow-premium border border-border p-2.5"
        style={{
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? 'translateX(0) rotate(-2deg)' : 'translateX(-12px) rotate(-2deg)',
          transition: 'opacity 0.5s ease-out 0.6s, transform 0.5s ease-out 0.6s'
        }}
      >
        <div className="flex items-center gap-1.5">
          <Building className="w-4 h-4 text-kk-violet" />
          <span className="text-xs font-medium text-foreground">{location.population}</span>
        </div>
        <p className="text-[9px] text-muted-foreground">Inwoners</p>
      </div>

      {/* Background glow based on province */}
      <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] bg-gradient-to-br ${visuals.primaryColor}/10 ${visuals.secondaryColor}/10 rounded-full blur-3xl -z-10`} />
    </div>
  );
}

export default ComboHeroIllustration;
