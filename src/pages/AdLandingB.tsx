import { Link } from "react-router-dom";
import { GradientButton } from "@/components/ui/GradientButton";
import { Check, Phone, Clock, Users, Star, ArrowRight, Zap, Target, BarChart3 } from "lucide-react";
import { useEffect, useState } from "react";

const AdLandingB = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const usps = [
    {
      icon: Zap,
      title: "Alles automatisch",
      description: "Wij optimaliseren je website. Jij hoeft niets te doen."
    },
    {
      icon: Target,
      title: "Meer lokale klanten",
      description: "Word beter gevonden door mensen in jouw regio."
    },
    {
      icon: BarChart3,
      title: "Duidelijke resultaten",
      description: "Wekelijks rapport in normaal Nederlands."
    }
  ];

  const socialProof = [
    { icon: Users, value: "150+", label: "Tevreden ondernemers" },
    { icon: Star, value: "4.9/5", label: "Gemiddelde beoordeling" },
    { icon: Clock, value: "< 48u", label: "Eerste resultaten" }
  ];

  const testimonials = [
    {
      quote: "Eindelijk iemand die het gewoon voor me regelt. Ik snap niks van websites, maar mijn telefoon gaat vaker over.",
      name: "Sandra",
      role: "Kapsalon De Knip"
    },
    {
      quote: "Binnen een maand meer aanvragen dan het hele jaar daarvoor. En ik hoef er niks voor te doen.",
      name: "Peter",
      role: "Loodgieter"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section - Homepage style */}
      <section className="relative py-16 lg:py-24 overflow-hidden">
        {/* Gradient haze background */}
        <div 
          className="absolute inset-0 pointer-events-none"
          style={{
            background: 'radial-gradient(ellipse at top right, hsl(var(--kk-orange) / 0.08), transparent 60%), radial-gradient(ellipse at bottom left, hsl(var(--kk-violet) / 0.06), transparent 60%)'
          }}
        />
        
        <div className="container mx-auto px-4 relative z-10">
          {/* Price badge - prominent */}
          <div 
            className="flex justify-center mb-8"
            style={{
              opacity: isLoaded ? 1 : 0,
              transform: isLoaded ? 'translateY(0)' : 'translateY(-10px)',
              transition: 'opacity 0.6s ease-out, transform 0.6s ease-out'
            }}
          >
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-kk-orange to-kk-violet text-white px-6 py-2.5 rounded-full text-lg font-bold shadow-lg">
              <span>Vanaf €99/maand</span>
              <span className="text-white/80">•</span>
              <span className="text-white/90 font-normal">Altijd opzegbaar</span>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left: Content */}
            <div>
              <h1 
                className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight"
                style={{
                  opacity: isLoaded ? 1 : 0,
                  transform: isLoaded ? 'translateY(0)' : 'translateY(20px)',
                  transition: 'opacity 0.8s ease-out, transform 0.8s ease-out',
                  transitionDelay: '100ms'
                }}
              >
                Meer klanten.{" "}
                <span className="bg-gradient-to-r from-kk-orange via-kk-fuchsia to-kk-violet bg-clip-text text-transparent">
                  Geen gedoe.
                </span>
              </h1>
              
              <p 
                className="text-xl text-muted-foreground mb-8"
                style={{
                  opacity: isLoaded ? 1 : 0,
                  transform: isLoaded ? 'translateY(0)' : 'translateY(20px)',
                  transition: 'opacity 0.8s ease-out, transform 0.8s ease-out',
                  transitionDelay: '200ms'
                }}
              >
                Wij zorgen dat jouw website beter gevonden wordt. Automatisch. 
                Jij focust op je vak, wij op je online zichtbaarheid.
              </p>

              <div 
                className="flex flex-col sm:flex-row gap-4 mb-8"
                style={{
                  opacity: isLoaded ? 1 : 0,
                  transform: isLoaded ? 'translateY(0)' : 'translateY(20px)',
                  transition: 'opacity 0.8s ease-out, transform 0.8s ease-out',
                  transitionDelay: '300ms'
                }}
              >
                <GradientButton size="lg" className="text-lg px-8 py-6 shadow-glow-orange">
                  <Phone className="w-5 h-5 mr-2" />
                  Plan een vrijblijvend gesprek
                </GradientButton>
              </div>

              <p 
                className="text-sm text-muted-foreground"
                style={{
                  opacity: isLoaded ? 1 : 0,
                  transition: 'opacity 0.6s ease-out',
                  transitionDelay: '400ms'
                }}
              >
                ✓ Geen verplichtingen &nbsp; ✓ 15 minuten &nbsp; ✓ Gratis advies
              </p>
            </div>

            {/* Right: Visual demo */}
            <div 
              className="relative"
              style={{
                opacity: isLoaded ? 1 : 0,
                transform: isLoaded ? 'translateY(0)' : 'translateY(30px)',
                transition: 'opacity 1s ease-out, transform 1s ease-out',
                transitionDelay: '300ms'
              }}
            >
              <div className="bg-card rounded-2xl p-8 shadow-premium-xl border border-border/50">
                <div className="space-y-4">
                  <div className="flex items-center justify-between pb-4 border-b border-border/50">
                    <span className="font-semibold text-foreground">Website Score</span>
                    <div className="flex items-center gap-2">
                      <span className="text-2xl font-bold text-green-500">87</span>
                      <span className="text-sm text-green-500">+23 ↑</span>
                    </div>
                  </div>
                  
                  {[
                    { label: "Nieuwe titels toegevoegd", done: true },
                    { label: "Meta descriptions verbeterd", done: true },
                    { label: "Lokale zoekwoorden ingebouwd", done: true },
                    { label: "Snelheid geoptimaliseerd", done: true }
                  ].map((item, i) => (
                    <div 
                      key={i} 
                      className="flex items-center gap-3"
                      style={{
                        opacity: isLoaded ? 1 : 0,
                        transform: isLoaded ? 'translateX(0)' : 'translateX(-10px)',
                        transition: 'opacity 0.5s ease-out, transform 0.5s ease-out',
                        transitionDelay: `${500 + i * 100}ms`
                      }}
                    >
                      <div className="w-6 h-6 rounded-full bg-green-500/20 flex items-center justify-center">
                        <Check className="w-4 h-4 text-green-500" />
                      </div>
                      <span className="text-foreground">{item.label}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof Strip */}
      <section className="py-8 border-y border-border/50 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-8 lg:gap-16">
            {socialProof.map((item, index) => (
              <div 
                key={index} 
                className="flex items-center gap-3"
                style={{
                  opacity: isLoaded ? 1 : 0,
                  transform: isLoaded ? 'translateY(0)' : 'translateY(10px)',
                  transition: 'opacity 0.6s ease-out, transform 0.6s ease-out',
                  transitionDelay: `${600 + index * 100}ms`
                }}
              >
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-kk-orange/20 to-kk-violet/20 flex items-center justify-center">
                  <item.icon className="w-5 h-5 text-kk-orange" />
                </div>
                <div>
                  <div className="font-bold text-foreground">{item.value}</div>
                  <div className="text-sm text-muted-foreground">{item.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* USP Section */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Waarom ondernemers kiezen voor KlikKlaar
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {usps.map((usp, index) => (
              <div 
                key={index}
                className="bg-card rounded-2xl p-8 shadow-premium-sm border border-border/50 hover:shadow-premium-lg hover:border-kk-orange/20 hover:-translate-y-0.5 transition-all duration-300"
                style={{
                  opacity: isLoaded ? 1 : 0,
                  transform: isLoaded ? 'translateY(0)' : 'translateY(20px)',
                  transition: 'opacity 0.8s ease-out, transform 0.8s ease-out',
                  transitionDelay: `${700 + index * 100}ms`
                }}
              >
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-kk-orange/20 to-kk-violet/20 flex items-center justify-center mb-6">
                  <usp.icon className="w-7 h-7 text-kk-orange" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">{usp.title}</h3>
                <p className="text-muted-foreground">{usp.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Price + CTA Section */}
      <section className="py-16 lg:py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              {/* Testimonials */}
              <div className="space-y-6">
                {testimonials.map((testimonial, index) => (
                  <div 
                    key={index}
                    className="bg-card rounded-xl p-6 shadow-premium-sm border border-border/50"
                    style={{
                      opacity: isLoaded ? 1 : 0,
                      transform: isLoaded ? 'translateX(0)' : 'translateX(-20px)',
                      transition: 'opacity 0.8s ease-out, transform 0.8s ease-out',
                      transitionDelay: `${800 + index * 100}ms`
                    }}
                  >
                    <p className="text-foreground italic mb-4">"{testimonial.quote}"</p>
                    <div className="flex items-center gap-2">
                      <div className="font-semibold text-foreground">{testimonial.name}</div>
                      <span className="text-muted-foreground">•</span>
                      <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Price card */}
              <div 
                className="bg-card rounded-2xl p-8 shadow-premium-lg border border-border/50"
                style={{
                  opacity: isLoaded ? 1 : 0,
                  transform: isLoaded ? 'translateY(0)' : 'translateY(20px)',
                  transition: 'opacity 0.8s ease-out, transform 0.8s ease-out',
                  transitionDelay: '900ms'
                }}
              >
                <div className="text-center">
                  <p className="text-muted-foreground mb-2">Al vanaf</p>
                  <div className="text-5xl font-bold text-foreground mb-1">€99</div>
                  <p className="text-muted-foreground mb-6">per maand</p>
                  <ul className="text-sm text-muted-foreground space-y-2 mb-6 text-left">
                    <li className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-green-500" />
                      Geen opstartkosten
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-green-500" />
                      Altijd opzegbaar
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-green-500" />
                      Resultaat binnen 48 uur
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-green-500" />
                      Wekelijks rapport
                    </li>
                  </ul>
                  <p className="text-sm text-muted-foreground mb-4">
                    Benieuwd wat wij voor jou kunnen doen?
                  </p>
                  <GradientButton className="w-full" size="lg">
                    <Phone className="w-4 h-4 mr-2" />
                    Plan een gesprek
                  </GradientButton>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 lg:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl lg:text-3xl font-bold text-foreground text-center mb-10">
              Veelgestelde vragen
            </h2>
            <div className="space-y-4">
              {[
                {
                  q: "Moet ik iets technisch kunnen?",
                  a: "Nee, wij doen alles. Je hoeft letterlijk niets te doen behalve je website URL met ons delen."
                },
                {
                  q: "Hoe snel zie ik resultaat?",
                  a: "De meeste ondernemers zien binnen 48 uur de eerste verbeteringen. Structurele groei bouw je op over weken."
                },
                {
                  q: "Kan ik maandelijks opzeggen?",
                  a: "Ja, altijd. Geen lange contracten, geen gedoe. Opzeggen kan per direct."
                }
              ].map((faq, index) => (
                <div 
                  key={index} 
                  className="bg-card rounded-xl p-6 shadow-premium-sm border border-border/50"
                  style={{
                    opacity: isLoaded ? 1 : 0,
                    transform: isLoaded ? 'translateY(0)' : 'translateY(10px)',
                    transition: 'opacity 0.6s ease-out, transform 0.6s ease-out',
                    transitionDelay: `${1000 + index * 100}ms`
                  }}
                >
                  <h3 className="font-semibold text-foreground mb-2">{faq.q}</h3>
                  <p className="text-muted-foreground">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 lg:py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Klaar om te groeien?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Plan een vrijblijvend gesprek en ontdek wat wij voor jouw bedrijf kunnen betekenen.
            </p>
            <GradientButton size="lg" className="text-lg px-10 py-6 shadow-glow-orange">
              <Phone className="w-5 h-5 mr-2" />
              Plan je gratis gesprek
              <ArrowRight className="w-5 h-5 ml-2" />
            </GradientButton>
            <p className="text-sm text-muted-foreground mt-4">
              Binnen 24 uur reactie • Geen verplichtingen
            </p>
          </div>
        </div>
      </section>

      {/* Minimal Footer */}
      <footer className="py-8 border-t border-border/50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground">
              © 2024 KlikKlaar. Alle rechten voorbehouden.
            </p>
            <div className="flex gap-6 text-sm text-muted-foreground">
              <Link to="/contact" className="hover:text-foreground transition-colors">Contact</Link>
              <Link to="/prijzen" className="hover:text-foreground transition-colors">Prijzen</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default AdLandingB;
