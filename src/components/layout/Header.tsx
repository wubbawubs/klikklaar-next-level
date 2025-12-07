import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { GradientButton } from "@/components/ui/GradientButton";
import { cn } from "@/lib/utils";
import klikklaarLogo from "@/assets/klikklaar-logo.png";

const navigation = [
  { name: "Wat je krijgt", href: "/wat-je-krijgt" },
  { name: "Hoe het werkt", href: "/hoe-het-werkt" },
  { name: "Prijzen", href: "/prijzen" },
  { name: "Voorbeelden", href: "/voorbeelden" },
  { name: "Over ons", href: "/over-ons" },
];

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-lg border-b border-border/50">
      <nav className="container px-4 sm:px-6 flex items-center justify-between h-16 lg:h-20">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <img src={klikklaarLogo} alt="KlikKlaar SEO" className="h-10 sm:h-12 lg:h-[74px] w-auto" />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-8">
          {navigation.map((item) => (
            <Link
              key={item.name}
              to={item.href}
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              {item.name}
            </Link>
          ))}
        </div>

        {/* Desktop CTA */}
        <div className="hidden lg:flex items-center gap-4">
          <Link to="/contact" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
            Contact
          </Link>
          <GradientButton size="sm">
            Gratis website-check
          </GradientButton>
        </div>

        {/* Mobile menu button */}
        <button
          type="button"
          className="lg:hidden p-2 text-foreground"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </nav>

      {/* Mobile Navigation */}
      <div
        className={cn(
          "lg:hidden fixed inset-x-0 top-16 bg-background/98 backdrop-blur-lg border-b border-border transition-all duration-300 max-h-[calc(100vh-4rem)] overflow-y-auto",
          mobileMenuOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4 pointer-events-none"
        )}
      >
        <div className="container px-4 py-6 space-y-1">
          {navigation.map((item) => (
            <Link
              key={item.name}
              to={item.href}
              className="block py-3 px-4 text-base font-medium text-foreground hover:bg-muted rounded-lg transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              {item.name}
            </Link>
          ))}
          <Link
            to="/contact"
            className="block py-3 px-4 text-base font-medium text-foreground hover:bg-muted rounded-lg transition-colors"
            onClick={() => setMobileMenuOpen(false)}
          >
            Contact
          </Link>
          <div className="pt-4 mt-2 border-t border-border">
            <GradientButton className="w-full" size="lg">
              Gratis website-check
            </GradientButton>
          </div>
        </div>
      </div>
    </header>
  );
}
