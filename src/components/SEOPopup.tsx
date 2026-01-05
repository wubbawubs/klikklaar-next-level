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
import { X, Calendar, TrendingUp } from "lucide-react";

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
      <DialogContent className="sm:max-w-md border-primary/20 bg-background">
        <DialogHeader className="text-left">
          <div className="flex items-center gap-2 mb-2">
            <div className="p-2 rounded-full bg-gradient-to-r from-primary/20 to-secondary/20">
              <TrendingUp className="h-5 w-5 text-primary" />
            </div>
          </div>
          <DialogTitle className="text-xl font-bold">
            Wil je weten waar je SEO nu staat?
          </DialogTitle>
          <DialogDescription className="text-muted-foreground text-base mt-2">
            Ontdek hoe je website presteert en wat je kunt verbeteren. 
            Plan een gratis SEO Plan gesprek in en krijg direct inzicht in jouw groeikansen.
          </DialogDescription>
        </DialogHeader>
        
        <div className="flex flex-col gap-3 mt-4">
          <Button 
            onClick={handleCTA}
            className="w-full bg-gradient-to-r from-primary via-secondary to-accent hover:opacity-90 text-white font-semibold py-6"
          >
            <Calendar className="mr-2 h-5 w-5" />
            Plan gratis SEO Plan call
          </Button>
          <Button 
            variant="ghost" 
            onClick={() => setIsOpen(false)}
            className="text-muted-foreground hover:text-foreground"
          >
            Misschien later
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default SEOPopup;
