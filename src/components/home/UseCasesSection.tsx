import { Link } from "react-router-dom";
import { Scissors, Stethoscope, Building2, ShoppingBag, ArrowRight } from "lucide-react";

const useCases = [
  {
    icon: Scissors,
    title: "Kappers & Salons",
    description: "Meer online boekingen en lokale vindbaarheid voor jouw salon.",
    href: "/use-cases/kappers",
    color: "from-pink-500/20 to-rose-500/20",
    iconColor: "text-pink-500",
  },
  {
    icon: Stethoscope,
    title: "Tandartsen & Zorg",
    description: "Patiënten vinden jouw praktijk sneller met betere online zichtbaarheid.",
    href: "/use-cases/tandartsen",
    color: "from-blue-500/20 to-cyan-500/20",
    iconColor: "text-blue-500",
  },
  {
    icon: Building2,
    title: "IT Bedrijven",
    description: "Meer leads en autoriteit opbouwen in de technische sector.",
    href: "/use-cases/it",
    color: "from-violet-500/20 to-purple-500/20",
    iconColor: "text-violet-500",
  },
  {
    icon: ShoppingBag,
    title: "E-commerce",
    description: "Hogere conversies en meer organisch verkeer naar je webshop.",
    href: "/use-cases/ecommerce",
    color: "from-orange-500/20 to-amber-500/20",
    iconColor: "text-orange-500",
  },
];

export function UseCasesSection() {
  return (
    <section className="py-20 lg:py-28">
      <div className="container">
        {/* Section header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-kk-orange font-semibold text-sm uppercase tracking-wider">
            Branches
          </span>
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mt-3 mb-4">
            Voor elke{" "}
            <span className="gradient-text">ondernemer</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Of je nu kapper, tandarts of IT-bedrijf bent — KlikKlaar werkt voor jouw branche.
          </p>
        </div>

        {/* Use case cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {useCases.map((useCase, index) => (
            <Link
              key={useCase.title}
              to={useCase.href}
              className="group relative p-6 rounded-2xl bg-card border border-border hover:border-transparent transition-all duration-300 hover:shadow-xl opacity-0 animate-fade-in overflow-hidden"
              style={{ animationDelay: `${index * 100}ms`, animationFillMode: 'forwards' }}
            >
              {/* Background gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${useCase.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />

              {/* Content */}
              <div className="relative">
                <div className={`w-12 h-12 rounded-xl bg-background/80 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  <useCase.icon className={`w-6 h-6 ${useCase.iconColor}`} />
                </div>

                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {useCase.title}
                </h3>
                <p className="text-sm text-muted-foreground mb-4">
                  {useCase.description}
                </p>

                <div className="flex items-center gap-2 text-sm font-medium text-kk-orange group-hover:gap-3 transition-all">
                  Bekijk meer
                  <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* View all link */}
        <div className="text-center mt-12">
          <Link
            to="/use-cases"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
          >
            Bekijk alle branches
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
