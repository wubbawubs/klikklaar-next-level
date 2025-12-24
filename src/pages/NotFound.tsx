import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Home, ArrowLeft } from "lucide-react";
import { GradientButton } from "@/components/ui/GradientButton";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background">
      <div className="text-center px-6">
        <h1 className="mb-4 text-8xl font-bold text-primary">404</h1>
        <h2 className="mb-2 text-2xl font-semibold text-foreground">Pagina niet gevonden</h2>
        <p className="mb-8 text-lg text-muted-foreground max-w-md mx-auto">
          Oeps! De pagina die je zoekt bestaat niet of is verplaatst.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <GradientButton asChild>
            <Link to="/">
              <Home className="w-5 h-5" />
              Terug naar home
            </Link>
          </GradientButton>
          <button 
            onClick={() => window.history.back()} 
            className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg border border-border text-foreground hover:bg-muted transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            Ga terug
          </button>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
