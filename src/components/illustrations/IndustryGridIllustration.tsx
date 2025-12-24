import { Scissors, Stethoscope, Home, Heart, Wrench, Monitor, TrendingUp, Users, Sparkles } from "lucide-react";
import { useState, useEffect, useRef } from "react";

const industries = [
  { icon: Scissors, label: "Kappers", color: "bg-pink-100", iconColor: "text-pink-600" },
  { icon: Stethoscope, label: "Tandartsen", color: "bg-blue-100", iconColor: "text-blue-600" },
  { icon: Home, label: "Makelaars", color: "bg-green-100", iconColor: "text-green-600" },
  { icon: Heart, label: "Coaches", color: "bg-red-100", iconColor: "text-red-500" },
  { icon: Wrench, label: "Aannemers", color: "bg-amber-100", iconColor: "text-amber-600" },
  { icon: Monitor, label: "IT", color: "bg-purple-100", iconColor: "text-purple-600" },
];

const successStats = [
  { value: "+156%", label: "Bezoekers", icon: TrendingUp },
  { value: "100+", label: "Klanten", icon: Users },
  { value: "4.9★", label: "Rating", icon: Sparkles },
];

export function IndustryGridIllustration() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeIndustry, setActiveIndustry] = useState(0);
  const [activeStat, setActiveStat] = useState(0);
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

  useEffect(() => {
    if (!isVisible) return;
    const interval = setInterval(() => {
      setActiveIndustry((prev) => (prev + 1) % industries.length);
    }, 2000);
    return () => clearInterval(interval);
  }, [isVisible]);

  useEffect(() => {
    if (!isVisible) return;
    const interval = setInterval(() => {
      setActiveStat((prev) => (prev + 1) % successStats.length);
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
            <div className="w-10 h-10 rounded-xl gradient-cta flex items-center justify-center">
              <Users className="w-5 h-5 text-white" />
            </div>
            <div>
              <p className="text-sm font-semibold text-foreground">Branches</p>
              <p className="text-xs text-muted-foreground">Voor elke ondernemer</p>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="p-6">
          {/* Hub and spoke layout */}
          <div className="relative h-56 mb-4">
            {/* Center hub */}
            <div 
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 rounded-2xl gradient-cta flex items-center justify-center shadow-lg z-10"
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible 
                  ? 'translate(-50%, -50%) scale(1)' 
                  : 'translate(-50%, -50%) scale(0.8)',
                transition: 'opacity 0.5s ease-out 0.3s, transform 0.5s cubic-bezier(0.34, 1.56, 0.64, 1) 0.3s'
              }}
            >
              <span className="text-white font-bold text-lg">KK</span>
            </div>

            {/* Industry icons in hexagon pattern */}
            {industries.map((industry, i) => {
              const Icon = industry.icon;
              const angle = (i * 60 - 90) * (Math.PI / 180);
              const radius = 85;
              const x = Math.cos(angle) * radius;
              const y = Math.sin(angle) * radius;
              const isActive = i === activeIndustry;

              return (
                <div
                  key={industry.label}
                  className="absolute top-1/2 left-1/2"
                  style={{
                    transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`,
                    opacity: isVisible ? 1 : 0,
                    transition: `opacity 0.5s ease-out ${0.4 + i * 0.08}s`
                  }}
                >
                  {/* Connection line */}
                  <div 
                    className="absolute top-1/2 left-1/2 h-0.5 origin-left"
                    style={{
                      width: '30px',
                      transform: `translate(-100%, -50%) rotate(${(i * 60 + 90)}deg)`,
                      background: isActive 
                        ? 'linear-gradient(90deg, hsl(var(--kk-orange)), hsl(var(--kk-violet)))' 
                        : 'hsl(var(--border))',
                      transition: 'background 0.3s'
                    }}
                  />
                  
                  {/* Icon */}
                  <div 
                    className={`w-11 h-11 rounded-xl ${industry.color} flex items-center justify-center shadow-md transition-all duration-300 ${
                      isActive ? 'scale-125 ring-2 ring-kk-orange/30' : ''
                    }`}
                  >
                    <Icon className={`w-5 h-5 ${industry.iconColor}`} />
                  </div>
                </div>
              );
            })}

            {/* Pulse effect on center */}
            <div 
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 rounded-full gradient-cta opacity-20"
              style={{
                animation: isVisible ? 'ping 2s cubic-bezier(0, 0, 0.2, 1) infinite' : 'none'
              }}
            />
          </div>

          {/* Active industry label */}
          <div 
            className="text-center mb-4 p-3 bg-muted/50 rounded-xl"
            style={{
              opacity: isVisible ? 1 : 0,
              transition: 'opacity 0.4s ease-out 0.8s'
            }}
          >
            {industries.map((industry, i) => {
              const Icon = industry.icon;
              const isActive = i === activeIndustry;
              
              return (
                <div 
                  key={industry.label}
                  className="flex items-center justify-center gap-2"
                  style={{
                    display: isActive ? 'flex' : 'none',
                  }}
                >
                  <Icon className={`w-4 h-4 ${industry.iconColor}`} />
                  <span className="text-sm font-medium text-foreground">{industry.label}</span>
                  <span className="text-xs text-muted-foreground">• Werkt voor hen</span>
                </div>
              );
            })}
          </div>

          {/* Industry pills */}
          <div 
            className="flex flex-wrap justify-center gap-1.5"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateY(0)' : 'translateY(8px)',
              transition: 'opacity 0.5s ease-out 0.9s, transform 0.5s ease-out 0.9s'
            }}
          >
            {industries.map((industry, i) => (
              <span 
                key={industry.label}
                className={`px-2.5 py-1 rounded-full text-xs font-medium transition-all duration-300 ${
                  i === activeIndustry 
                    ? 'gradient-cta text-white' 
                    : 'bg-muted text-muted-foreground'
                }`}
              >
                {industry.label}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Floating success stat */}
      <div 
        className="absolute -right-2 lg:-right-4 top-8 bg-card rounded-xl shadow-premium border border-border p-3 overflow-hidden"
        style={{
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? 'translateX(0)' : 'translateX(12px)',
          transition: 'opacity 0.5s ease-out 0.7s, transform 0.5s ease-out 0.7s'
        }}
      >
        {successStats.map((stat, i) => {
          const Icon = stat.icon;
          const isActive = i === activeStat;
          
          return (
            <div 
              key={stat.label}
              className="flex items-center gap-2"
              style={{
                position: isActive ? 'relative' : 'absolute',
                opacity: isActive ? 1 : 0,
                transform: isActive ? 'translateY(0)' : 'translateY(8px)',
                transition: 'opacity 0.4s ease-out, transform 0.4s ease-out',
              }}
            >
              <div className="w-8 h-8 rounded-lg bg-green-100 flex items-center justify-center">
                <Icon className="w-4 h-4 text-green-600" />
              </div>
              <div>
                <p className="text-sm font-bold text-foreground">{stat.value}</p>
                <p className="text-[10px] text-muted-foreground">{stat.label}</p>
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
