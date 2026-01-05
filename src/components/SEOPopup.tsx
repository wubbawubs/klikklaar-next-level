import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Calendar, Sparkles } from "lucide-react";

const SEOPopup = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    // Don't show popup on contact page (they're already there)
    if (location.pathname === "/contact") return;

    // Check if user has already seen the popup in this session
    const hasSeenPopup = sessionStorage.getItem("seo-popup-seen");
    if (hasSeenPopup) return;

    const timer = setTimeout(() => {
      setIsOpen(true);
      sessionStorage.setItem("seo-popup-seen", "true");
    }, 5000);

    return () => clearTimeout(timer);
  }, [location.pathname]);

  const handleCTA = () => {
    setIsOpen(false);
    navigate("/contact");
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="sm:max-w-lg p-0 overflow-hidden border-0 shadow-2xl">
        {/* Gradient header accent */}
        <div className="h-1.5 w-full bg-gradient-to-r from-primary via-secondary to-accent" />
        
        <div className="p-6 pt-5">
          <DialogHeader className="text-left space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium w-fit">
              <Sparkles className="h-4 w-4" />
              Gratis SEO analyse
            </div>
            <DialogTitle className="text-2xl font-bold text-foreground">
              Wil je weten waar je SEO nu staat?
            </DialogTitle>
            <DialogDescription className="text-muted-foreground text-base leading-relaxed">
              Ontdek hoe je website presteert en wat je kunt verbeteren. 
              Plan een <span className="text-foreground font-medium">gratis SEO Plan gesprek</span> in en krijg direct inzicht in jouw groeikansen.
            </DialogDescription>
          </DialogHeader>
          
          <div className="flex flex-col gap-3 mt-6">
            <Button 
              onClick={handleCTA}
              size="lg"
              className="w-full bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-white font-semibold py-6 text-base shadow-lg shadow-primary/25 transition-all duration-300 hover:shadow-xl hover:shadow-primary/30 hover:-translate-y-0.5"
            >
              <Calendar className="mr-2 h-5 w-5" />
              Plan gratis SEO Plan call
            </Button>
            <Button 
              variant="ghost" 
              onClick={() => setIsOpen(false)}
              className="text-muted-foreground hover:text-foreground hover:bg-muted/50"
            >
              Misschien later
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default SEOPopup;
