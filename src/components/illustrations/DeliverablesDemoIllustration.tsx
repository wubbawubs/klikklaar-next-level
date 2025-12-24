import { Check, FileText, Send, BarChart3, TrendingUp, Clock } from "lucide-react";
import { useState, useEffect, useRef } from "react";

const weeklyTasks = [
  { label: "Meta-titles verbeterd", done: true },
  { label: "Nieuwe H1 koppen", done: true },
  { label: "Lokale keywords toegevoegd", done: true },
  { label: "Schema markup", done: false, inProgress: true },
];

const stats = [
  { label: "Verbeteringen", value: "12", suffix: "deze week" },
  { label: "Groei", value: "+47%", suffix: "bezoekers" },
];

export function DeliverablesDemoIllustration() {
  const [isVisible, setIsVisible] = useState(false);
  const [showNotification, setShowNotification] = useState(false);
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
    if (isVisible) {
      const timer = setTimeout(() => setShowNotification(true), 1500);
      return () => clearTimeout(timer);
    }
  }, [isVisible]);

  return (
    <div className="relative" ref={containerRef}>
      {/* Main Report Card */}
      <div className="bg-card rounded-2xl shadow-premium-lg border border-border overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between px-5 py-4 border-b border-border bg-muted/30">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl gradient-cta flex items-center justify-center">
              <FileText className="w-5 h-5 text-white" />
            </div>
            <div>
              <p className="text-sm font-semibold text-foreground">Wekelijks Rapport</p>
              <p className="text-xs text-muted-foreground">Week 51 - December 2024</p>
            </div>
          </div>
          <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-green-100 text-green-700 text-xs font-medium">
            <Check className="w-3 h-3" />
            Verzonden
          </div>
        </div>

        {/* Content */}
        <div className="p-6">
          {/* Stats row */}
          <div className="grid grid-cols-2 gap-4 mb-6">
            {stats.map((stat, i) => (
              <div 
                key={stat.label}
                className="p-4 bg-muted/50 rounded-xl text-center"
                style={{
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible ? 'translateY(0)' : 'translateY(12px)',
                  transition: `opacity 0.5s ease-out ${0.2 + i * 0.1}s, transform 0.5s ease-out ${0.2 + i * 0.1}s`
                }}
              >
                <p className="text-2xl font-bold text-foreground">{stat.value}</p>
                <p className="text-xs text-muted-foreground">{stat.suffix}</p>
              </div>
            ))}
          </div>

          {/* Checklist */}
          <div className="space-y-2.5">
            <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">
              Afgerond deze week
            </p>
            {weeklyTasks.map((item, i) => {
              const delay = 0.4 + i * 0.12;
              return (
                <div 
                  key={i} 
                  className={`flex items-center gap-3 p-3 rounded-lg ${
                    item.inProgress ? 'bg-kk-orange/10' : 'bg-muted/50'
                  }`}
                  style={{ 
                    opacity: isVisible ? 1 : 0,
                    transform: isVisible ? 'translateX(0)' : 'translateX(-12px)',
                    transition: `opacity 0.5s ease-out ${delay}s, transform 0.5s ease-out ${delay}s`,
                  }}
                >
                  {item.done ? (
                    <div 
                      className="w-5 h-5 rounded-full bg-green-500 flex items-center justify-center"
                      style={{
                        transform: isVisible ? 'scale(1)' : 'scale(0)',
                        transition: `transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1) ${delay + 0.15}s`,
                      }}
                    >
                      <Check className="w-3 h-3 text-white" />
                    </div>
                  ) : (
                    <div 
                      className="w-5 h-5 rounded-full border-2 border-kk-orange border-dashed animate-pulse-subtle"
                      style={{
                        opacity: isVisible ? 1 : 0,
                        transition: `opacity 0.4s ease-out ${delay}s`,
                      }}
                    />
                  )}
                  <span className={`text-sm ${item.done ? 'text-foreground' : 'text-muted-foreground'}`}>
                    {item.label}
                  </span>
                  {item.inProgress && (
                    <span className="ml-auto text-xs text-kk-orange font-medium">Bezig...</span>
                  )}
                </div>
              );
            })}
          </div>

          {/* Timeline preview */}
          <div className="mt-6 pt-4 border-t border-border">
            <div className="flex items-center gap-2 text-xs text-muted-foreground mb-3">
              <Clock className="w-3.5 h-3.5" />
              <span>Volgende rapport: vrijdag 10:00</span>
            </div>
            <div className="flex gap-1">
              {['Ma', 'Di', 'Wo', 'Do', 'Vr'].map((day, i) => (
                <div 
                  key={day} 
                  className={`flex-1 py-2 text-center text-xs rounded-lg ${
                    i === 4 ? 'gradient-cta text-white font-medium' : 'bg-muted/50 text-muted-foreground'
                  }`}
                  style={{
                    opacity: isVisible ? 1 : 0,
                    transform: isVisible ? 'translateY(0)' : 'translateY(8px)',
                    transition: `opacity 0.4s ease-out ${1 + i * 0.08}s, transform 0.4s ease-out ${1 + i * 0.08}s`
                  }}
                >
                  {day}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Floating notification */}
      <div 
        className="absolute -right-2 lg:-right-4 -top-2 lg:-top-4 bg-card rounded-xl shadow-premium-lg border border-border p-3 lg:p-4 flex items-center gap-3"
        style={{
          opacity: showNotification ? 1 : 0,
          transform: showNotification ? 'translateY(0) scale(1)' : 'translateY(-8px) scale(0.95)',
          transition: 'opacity 0.5s ease-out, transform 0.5s cubic-bezier(0.34, 1.56, 0.64, 1)'
        }}
      >
        <div className="w-8 h-8 lg:w-10 lg:h-10 rounded-lg bg-green-100 flex items-center justify-center">
          <Send className="w-4 h-4 lg:w-5 lg:h-5 text-green-600" />
        </div>
        <div>
          <p className="text-xs lg:text-sm font-semibold text-foreground">Rapport verzonden!</p>
          <p className="text-[10px] lg:text-xs text-muted-foreground">Zojuist naar je inbox</p>
        </div>
      </div>

      {/* Floating stats card */}
      <div 
        className="hidden lg:flex absolute -left-4 bottom-8 bg-card rounded-xl shadow-premium border border-border p-4 items-center gap-3"
        style={{
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? 'translateX(0)' : 'translateX(-12px)',
          transition: 'opacity 0.5s ease-out 0.8s, transform 0.5s ease-out 0.8s'
        }}
      >
        <div className="w-10 h-10 rounded-lg bg-kk-orange/10 flex items-center justify-center">
          <TrendingUp className="w-5 h-5 text-kk-orange" />
        </div>
        <div>
          <p className="text-xs text-muted-foreground">Resultaat</p>
          <p className="text-lg font-bold text-foreground">+47%</p>
        </div>
      </div>

      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-gradient-to-br from-kk-orange/5 to-kk-violet/5 rounded-full blur-3xl -z-10" />
    </div>
  );
}
