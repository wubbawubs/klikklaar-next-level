import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";

export function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookie-consent");
    if (!consent) {
      const timer = setTimeout(() => setIsVisible(true), 1000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("cookie-consent", "accepted");
    setIsVisible(false);
  };

  const handleDecline = () => {
    localStorage.setItem("cookie-consent", "declined");
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div 
      className="fixed bottom-0 left-0 right-0 z-50 p-4 animate-in slide-in-from-bottom-5 duration-300"
    >
      <div className="container max-w-4xl mx-auto">
        <div className="bg-card border border-border rounded-2xl shadow-premium-lg p-4 sm:p-6 flex flex-col sm:flex-row items-start sm:items-center gap-4">
          <div className="flex-1">
            <p className="text-sm text-foreground font-medium mb-1">
              🍪 Cookies
            </p>
            <p className="text-sm text-muted-foreground">
              Wij gebruiken cookies om je ervaring te verbeteren en onze website te analyseren.{" "}
              <a href="/privacy" className="text-kk-orange hover:underline">
                Meer informatie
              </a>
            </p>
          </div>
          <div className="flex items-center gap-2 w-full sm:w-auto">
            <Button 
              variant="outline" 
              size="sm" 
              onClick={handleDecline}
              className="flex-1 sm:flex-none"
            >
              Weigeren
            </Button>
            <Button 
              size="sm" 
              onClick={handleAccept}
              className="flex-1 sm:flex-none bg-kk-orange hover:bg-kk-orange/90 text-white"
            >
              Accepteren
            </Button>
          </div>
          <button 
            onClick={handleDecline}
            className="absolute top-2 right-2 sm:static p-1 text-muted-foreground hover:text-foreground transition-colors"
            aria-label="Sluiten"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
