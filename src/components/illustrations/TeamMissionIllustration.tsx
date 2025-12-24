import { Heart, Target, Users, Lightbulb, Shield, TrendingUp } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import klikklaarLogo from "@/assets/klikklaar-logo.png";

const orbitingIcons = [
  { icon: Heart, label: "Eerlijk", color: "bg-red-100", iconColor: "text-red-500", angle: 0 },
  { icon: Target, label: "Resultaat", color: "bg-blue-100", iconColor: "text-blue-500", angle: 90 },
  { icon: Users, label: "Persoonlijk", color: "bg-purple-100", iconColor: "text-purple-500", angle: 180 },
  { icon: Lightbulb, label: "Simpel", color: "bg-amber-100", iconColor: "text-amber-500", angle: 270 },
];

const stats = [
  { value: "100+", label: "Klanten" },
  { value: "47%", label: "Gem. groei" },
  { value: "4.9", label: "Rating" },
];

export function TeamMissionIllustration() {
  const [isVisible, setIsVisible] = useState(false);
  const [rotation, setRotation] = useState(0);
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
      setRotation((prev) => (prev + 0.5) % 360);
    }, 50);
    return () => clearInterval(interval);
  }, [isVisible]);

  return (
    <div className="relative" ref={containerRef}>
      {/* Main card with orbiting system */}
      <div className="bg-card rounded-2xl shadow-premium-lg border border-border overflow-hidden p-8">
        {/* Central element */}
        <div className="relative w-full aspect-square max-w-[280px] mx-auto">
          {/* Orbit rings */}
          <div 
            className="absolute inset-8 rounded-full border border-border"
            style={{
              opacity: isVisible ? 0.5 : 0,
              transition: 'opacity 0.6s ease-out 0.2s'
            }}
          />
          <div 
            className="absolute inset-0 rounded-full border border-dashed border-kk-orange/30"
            style={{
              opacity: isVisible ? 1 : 0,
              transition: 'opacity 0.6s ease-out 0.3s'
            }}
          />

          {/* Center logo */}
          <div 
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 rounded-2xl gradient-cta flex items-center justify-center shadow-lg"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible 
                ? 'translate(-50%, -50%) scale(1)' 
                : 'translate(-50%, -50%) scale(0.8)',
              transition: 'opacity 0.5s ease-out 0.4s, transform 0.5s cubic-bezier(0.34, 1.56, 0.64, 1) 0.4s'
            }}
          >
            <Shield className="w-10 h-10 text-white" />
          </div>

          {/* Orbiting icons */}
          {orbitingIcons.map((item, i) => {
            const Icon = item.icon;
            const angle = (item.angle + rotation) * (Math.PI / 180);
            const radius = 110;
            const x = Math.cos(angle) * radius;
            const y = Math.sin(angle) * radius;

            return (
              <div
                key={item.label}
                className="absolute top-1/2 left-1/2"
                style={{
                  transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`,
                  opacity: isVisible ? 1 : 0,
                  transition: `opacity 0.5s ease-out ${0.5 + i * 0.1}s`
                }}
              >
                <div className={`w-12 h-12 rounded-xl ${item.color} flex items-center justify-center shadow-md`}>
                  <Icon className={`w-6 h-6 ${item.iconColor}`} />
                </div>
              </div>
            );
          })}

          {/* Pulse effect */}
          <div 
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 rounded-full gradient-cta opacity-20 animate-ping"
            style={{
              animationDuration: '2s',
              display: isVisible ? 'block' : 'none'
            }}
          />
        </div>

        {/* Stats below */}
        <div 
          className="grid grid-cols-3 gap-3 mt-6"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(12px)',
            transition: 'opacity 0.5s ease-out 0.8s, transform 0.5s ease-out 0.8s'
          }}
        >
          {stats.map((stat, i) => (
            <div 
              key={stat.label}
              className="text-center p-3 bg-muted/50 rounded-xl"
            >
              <p className="text-xl font-bold text-foreground">{stat.value}</p>
              <p className="text-xs text-muted-foreground">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Floating mission badge */}
      <div 
        className="absolute -right-2 lg:-right-4 top-4 lg:top-8 bg-card rounded-xl shadow-premium border border-border p-3 max-w-[140px]"
        style={{
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? 'translateX(0)' : 'translateX(12px)',
          transition: 'opacity 0.5s ease-out 0.7s, transform 0.5s ease-out 0.7s'
        }}
      >
        <p className="text-xs font-semibold text-foreground">Onze missie</p>
        <p className="text-[10px] text-muted-foreground">SEO toegankelijk voor iedereen</p>
      </div>

      {/* Floating growth indicator */}
      <div 
        className="hidden lg:flex absolute -left-4 bottom-16 bg-card rounded-xl shadow-premium border border-border p-3 items-center gap-2"
        style={{
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? 'translateX(0)' : 'translateX(-12px)',
          transition: 'opacity 0.5s ease-out 0.9s, transform 0.5s ease-out 0.9s'
        }}
      >
        <div className="w-8 h-8 rounded-lg bg-green-100 flex items-center justify-center">
          <TrendingUp className="w-4 h-4 text-green-600" />
        </div>
        <div>
          <p className="text-xs font-semibold text-foreground">Sinds 2023</p>
          <p className="text-[10px] text-muted-foreground">Actief</p>
        </div>
      </div>

      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-gradient-to-br from-kk-orange/5 to-kk-violet/5 rounded-full blur-3xl -z-10" />
    </div>
  );
}
