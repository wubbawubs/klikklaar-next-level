import { Phone, Mail, MapPin, MessageCircle, Send, Clock, CheckCircle } from "lucide-react";
import { useState, useEffect, useRef } from "react";

const contactPoints = [
  { icon: Phone, label: "Bellen", sublabel: "Direct contact", color: "bg-green-100", iconColor: "text-green-600" },
  { icon: Mail, label: "E-mail", sublabel: "24u reactie", color: "bg-blue-100", iconColor: "text-blue-600" },
  { icon: MapPin, label: "Locatie", sublabel: "Amsterdam", color: "bg-purple-100", iconColor: "text-purple-600" },
];

export function ContactConnectIllustration() {
  const [isVisible, setIsVisible] = useState(false);
  const [messageSent, setMessageSent] = useState(false);
  const [activePoint, setActivePoint] = useState(0);
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
      const timer = setTimeout(() => setMessageSent(true), 2000);
      return () => clearTimeout(timer);
    }
  }, [isVisible]);

  useEffect(() => {
    if (!isVisible) return;
    const interval = setInterval(() => {
      setActivePoint((prev) => (prev + 1) % 3);
    }, 2500);
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
              <MessageCircle className="w-5 h-5 text-white" />
            </div>
            <div>
              <p className="text-sm font-semibold text-foreground">Neem Contact Op</p>
              <p className="text-xs text-muted-foreground">We reageren snel</p>
            </div>
          </div>
          <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-green-100 text-green-700 text-xs font-medium">
            <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
            Online
          </div>
        </div>

        {/* Content */}
        <div className="p-6">
          {/* Central connection visual */}
          <div className="relative h-48 mb-6">
            {/* Center hub */}
            <div 
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 rounded-2xl gradient-cta flex items-center justify-center shadow-lg z-10"
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible 
                  ? 'translate(-50%, -50%) scale(1)' 
                  : 'translate(-50%, -50%) scale(0.8)',
                transition: 'opacity 0.5s ease-out 0.3s, transform 0.5s cubic-bezier(0.34, 1.56, 0.64, 1) 0.3s'
              }}
            >
              <Send className="w-7 h-7 text-white" />
            </div>

            {/* Connection lines */}
            {contactPoints.map((point, i) => {
              const angles = [-45, 0, 45];
              const angle = angles[i];
              const isActive = i === activePoint;
              
              return (
                <div
                  key={point.label}
                  className="absolute top-1/2 left-1/2"
                  style={{
                    transform: `translate(-50%, -50%) rotate(${angle}deg)`,
                  }}
                >
                  {/* Connection line */}
                  <div 
                    className="absolute left-8 top-1/2 -translate-y-1/2 h-0.5 bg-border overflow-hidden"
                    style={{
                      width: '60px',
                      opacity: isVisible ? 1 : 0,
                      transition: `opacity 0.4s ease-out ${0.4 + i * 0.1}s`
                    }}
                  >
                    <div 
                      className={`h-full ${isActive ? 'gradient-cta' : 'bg-muted-foreground/30'}`}
                      style={{
                        width: isVisible ? '100%' : '0%',
                        transition: `width 0.6s ease-out ${0.5 + i * 0.1}s, background 0.3s`
                      }}
                    />
                  </div>
                  
                  {/* Contact point */}
                  <div 
                    className="absolute left-[76px] top-1/2 -translate-y-1/2"
                    style={{
                      transform: `translateY(-50%) rotate(${-angle}deg)`,
                      opacity: isVisible ? 1 : 0,
                      transition: `opacity 0.5s ease-out ${0.6 + i * 0.1}s`
                    }}
                  >
                    <div 
                      className={`w-12 h-12 rounded-xl ${point.color} flex items-center justify-center shadow-md transition-all duration-300 ${
                        isActive ? 'scale-110 ring-2 ring-kk-orange/30' : ''
                      }`}
                    >
                      <point.icon className={`w-5 h-5 ${point.iconColor}`} />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Active contact info */}
          <div 
            className="p-4 bg-muted/50 rounded-xl"
            style={{
              opacity: isVisible ? 1 : 0,
              transition: 'opacity 0.4s ease-out 0.8s'
            }}
          >
            {contactPoints.map((point, i) => {
              const Icon = point.icon;
              const isActive = i === activePoint;
              
              return (
                <div 
                  key={point.label}
                  className="flex items-center gap-3"
                  style={{
                    display: isActive ? 'flex' : 'none',
                  }}
                >
                  <div className={`w-10 h-10 rounded-lg ${point.color} flex items-center justify-center`}>
                    <Icon className={`w-5 h-5 ${point.iconColor}`} />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-semibold text-foreground">{point.label}</p>
                    <p className="text-xs text-muted-foreground">{point.sublabel}</p>
                  </div>
                  <div className="flex items-center gap-1 text-green-600 text-xs">
                    <CheckCircle className="w-3.5 h-3.5" />
                    Beschikbaar
                  </div>
                </div>
              );
            })}
          </div>

          {/* Response time */}
          <div 
            className="flex items-center justify-center gap-2 mt-4 text-xs text-muted-foreground"
            style={{
              opacity: isVisible ? 1 : 0,
              transition: 'opacity 0.4s ease-out 1s'
            }}
          >
            <Clock className="w-3.5 h-3.5" />
            <span>Gemiddelde reactietijd: <strong className="text-foreground">2 uur</strong></span>
          </div>
        </div>
      </div>

      {/* Floating notification */}
      <div 
        className="absolute -right-2 lg:-right-4 -top-2 lg:-top-4 bg-card rounded-xl shadow-premium-lg border border-border p-3 flex items-center gap-2"
        style={{
          opacity: messageSent ? 1 : 0,
          transform: messageSent ? 'translateY(0) scale(1)' : 'translateY(-8px) scale(0.95)',
          transition: 'opacity 0.5s ease-out, transform 0.5s cubic-bezier(0.34, 1.56, 0.64, 1)'
        }}
      >
        <div className="w-8 h-8 rounded-lg bg-green-100 flex items-center justify-center">
          <CheckCircle className="w-4 h-4 text-green-600" />
        </div>
        <div>
          <p className="text-xs font-semibold text-foreground">Bericht ontvangen</p>
          <p className="text-[10px] text-muted-foreground">We nemen contact op</p>
        </div>
      </div>

      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-gradient-to-br from-kk-orange/5 to-kk-violet/5 rounded-full blur-3xl -z-10" />
    </div>
  );
}
