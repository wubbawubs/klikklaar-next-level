import { Link } from "react-router-dom";
import { Scissors, Stethoscope, Building2, ShoppingBag, ArrowRight } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

interface UseCase {
  icon: LucideIcon;
  title: string;
  description: string;
  href: string;
}

const useCases: UseCase[] = [
  { icon: Scissors, title: "Kappers & Salons", description: "Meer boekingen via Google", href: "/use-cases/kappers" },
  { icon: Stethoscope, title: "Tandartsen & Zorg", description: "Meer patiënten uit de regio", href: "/use-cases/tandartsen" },
  { icon: Building2, title: "IT Bedrijven", description: "Meer leads, meer autoriteit", href: "/use-cases/it" },
  { icon: ShoppingBag, title: "E-commerce", description: "Meer organisch verkeer", href: "/use-cases/ecommerce" },
];

export function UseCasesSection() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section ref={ref} className="py-12 lg:py-20 haze-gradient-cool relative overflow-hidden">
      <div className="container px-4 sm:px-6 relative z-10">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 lg:mb-16">
          <span 
            className={`inline-block text-xs font-semibold text-kk-orange uppercase tracking-widest mb-4 ${
              isVisible ? "animate-fade-in" : "opacity-0"
            }`}
          >
            Branches
          </span>
          <h2 
            className={`text-display-sm lg:text-display text-foreground ${
              isVisible ? "animate-fade-in" : "opacity-0"
            }`}
            style={{ animationDelay: "100ms" }}
          >
            Voor elke{" "}
            <span className="gradient-text">ondernemer</span>
          </h2>
        </div>

        {/* Cards - Variable shadow weights */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {useCases.map((useCase, index) => {
            const Icon = useCase.icon;
            // First card gets more visual weight
            const isPriority = index === 0;
            
            return (
              <Link
                key={useCase.title}
                to={useCase.href}
                className={`group p-6 rounded-xl bg-card border border-border 
                  hover:border-kk-orange/20 hover:-translate-y-1.5
                  transition-all duration-300
                  ${isPriority ? 'shadow-premium hover:shadow-premium-lg' : 'shadow-premium-sm hover:shadow-premium'}`}
                style={{ 
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible ? 'translateY(0)' : 'translateY(16px)',
                  transition: 'opacity 0.5s ease-out, transform 0.5s ease-out, box-shadow 0.3s, border-color 0.3s',
                  transitionDelay: `${index * 80}ms`
                }}
              >
                <div className="w-12 h-12 rounded-xl bg-muted flex items-center justify-center mb-4 group-hover:bg-kk-orange/10 group-hover:scale-110 transition-all duration-300">
                  <Icon className="w-6 h-6 text-kk-orange" />
                </div>

                <h3 className="font-semibold text-foreground mb-1">{useCase.title}</h3>
                <p className="text-sm text-muted-foreground mb-4">{useCase.description}</p>

                <div className="flex items-center gap-2 text-sm font-medium text-kk-orange group-hover:gap-3 transition-all">
                  Meer info
                  <ArrowRight className="w-4 h-4" />
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
