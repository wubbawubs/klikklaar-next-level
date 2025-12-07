import { Link } from "react-router-dom";
import { Scissors, Stethoscope, Building2, ShoppingBag, ArrowRight } from "lucide-react";
import type { LucideIcon } from "lucide-react";

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
  return (
    <section className="py-20 lg:py-28 bg-muted/30">
      <div className="container">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block text-xs font-semibold text-kk-orange uppercase tracking-widest mb-4 opacity-0 animate-fade-in">
            Branches
          </span>
          <h2 className="text-display-sm lg:text-display text-foreground opacity-0 animate-fade-in animation-delay-100">
            Voor elke{" "}
            <span className="gradient-text">ondernemer</span>
          </h2>
        </div>

        {/* Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {useCases.map((useCase, index) => {
            const Icon = useCase.icon;
            return (
              <Link
                key={useCase.title}
                to={useCase.href}
                className="group p-6 rounded-xl bg-card border border-border hover:shadow-premium hover:border-kk-orange/20 transition-all opacity-0 animate-fade-in"
                style={{ animationDelay: `${250 + index * 80}ms`, animationFillMode: 'forwards' }}
              >
                <div className="w-12 h-12 rounded-xl bg-muted flex items-center justify-center mb-4 group-hover:bg-kk-orange/10 transition-colors">
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
