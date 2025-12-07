import { ArrowRight, CheckCircle2 } from "lucide-react";
import { GradientButton } from "@/components/ui/GradientButton";
import { HeroIllustration } from "./HeroIllustration";

const benefits = [
  "Automatische verbeteringen",
  "Meer lokale klanten",
  "Geen technische kennis nodig",
];

export function HeroSection() {
  return (
    <section className="relative pt-24 lg:pt-32 pb-16 lg:pb-24 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gradient-to-bl from-kk-orange/5 via-kk-violet/5 to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-gradient-to-tr from-kk-violet/5 via-kk-orange/5 to-transparent rounded-full blur-3xl" />
      </div>

      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left content */}
          <div className="space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary border border-border">
              <span className="w-2 h-2 rounded-full bg-kk-orange animate-pulse" />
              <span className="text-sm font-medium text-muted-foreground">
                100+ lokale ondernemers geholpen
              </span>
            </div>

            {/* Headline */}
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
                Jouw website,{" "}
                <span className="gradient-text">automatisch</span>{" "}
                verbeterd
              </h1>
              <p className="text-lg lg:text-xl text-muted-foreground max-w-lg">
                KlikKlaar analyseert en verbetert je website continu. Meer zichtbaarheid, meer klanten — zonder dat jij iets hoeft te doen.
              </p>
            </div>

            {/* Benefits */}
            <ul className="space-y-3">
              {benefits.map((benefit) => (
                <li key={benefit} className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-kk-orange flex-shrink-0" />
                  <span className="text-foreground">{benefit}</span>
                </li>
              ))}
            </ul>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4">
              <GradientButton size="lg">
                Gratis website-check
                <ArrowRight className="w-5 h-5" />
              </GradientButton>
              <GradientButton variant="outline" size="lg">
                Bekijk hoe het werkt
              </GradientButton>
            </div>

            {/* Social proof mini */}
            <p className="text-sm text-muted-foreground">
              Binnen 2 minuten inzicht in jouw website-score
            </p>
          </div>

          {/* Right illustration */}
          <div className="relative lg:h-[500px]">
            <HeroIllustration />
          </div>
        </div>
      </div>
    </section>
  );
}
