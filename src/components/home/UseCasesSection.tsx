import { Link } from "react-router-dom";
import { Scissors, Stethoscope, Building2, ShoppingBag, ArrowRight } from "lucide-react";
import type { LucideIcon } from "lucide-react";

interface UseCase {
  icon: LucideIcon;
  title: string;
  description: string;
  href: string;
  gradient: string;
}

const useCases: UseCase[] = [
  {
    icon: Scissors,
    title: "Kappers & Salons",
    description: "Meer boekingen via Google",
    href: "/use-cases/kappers",
    gradient: "from-pink-500/10 to-rose-500/10",
  },
  {
    icon: Stethoscope,
    title: "Tandartsen & Zorg",
    description: "Meer patiënten uit de regio",
    href: "/use-cases/tandartsen",
    gradient: "from-blue-500/10 to-cyan-500/10",
  },
  {
    icon: Building2,
    title: "IT Bedrijven",
    description: "Meer leads, meer autoriteit",
    href: "/use-cases/it",
    gradient: "from-violet-500/10 to-purple-500/10",
  },
  {
    icon: ShoppingBag,
    title: "E-commerce",
    description: "Meer organisch verkeer",
    href: "/use-cases/ecommerce",
    gradient: "from-orange-500/10 to-amber-500/10",
  },
];

export function UseCasesSection() {
  return (
    <section className="py-section section-alt">
      <div className="container">
        {/* Section header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block text-sm font-semibold text-kk-orange uppercase tracking-wider mb-4 opacity-0 animate-fade-in">
            Branches
          </span>
          <h2 className="text-display-sm lg:text-display text-foreground mb-4 opacity-0 animate-fade-in animation-delay-100">
            Voor elke{" "}
            <span className="gradient-text">ondernemer</span>
          </h2>
        </div>

        {/* Use case cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {useCases.map((useCase, index) => (
            <Link
              key={useCase.title}
              to={useCase.href}
              className="group relative p-6 rounded-xl bg-card border border-border shadow-sm hover:shadow-premium hover:border-kk-orange/20 transition-all duration-300 opacity-0 animate-fade-in"
              style={{ animationDelay: `${200 + index * 80}ms`, animationFillMode: 'forwards' }}
            >
              {/* Background gradient on hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${useCase.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl`} />

              <div className="relative">
                <div className="w-12 h-12 rounded-xl bg-background border border-border flex items-center justify-center mb-4 group-hover:scale-105 transition-transform duration-300 shadow-sm">
                  <useCase.icon className="w-6 h-6 text-kk-orange" />
                </div>

                <h3 className="font-semibold text-foreground mb-1">
                  {useCase.title}
                </h3>
                <p className="text-sm text-muted-foreground mb-4">
                  {useCase.description}
                </p>

                <div className="flex items-center gap-2 text-sm font-medium text-kk-orange group-hover:gap-3 transition-all">
                  Meer info
                  <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
