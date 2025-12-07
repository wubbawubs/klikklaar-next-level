import { Link } from "react-router-dom";
import { GradientButton } from "@/components/ui/GradientButton";
import { Check, Phone, Clock, Users, Star, ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";

const AdLandingA = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const benefits = [
    "Automatische website optimalisatie",
    "Meer klanten uit jouw regio",
    "Wekelijks rapport in normaal Nederlands",
    "Geen technische kennis nodig"
  ];

  const socialProof = [
    { icon: Users, value: "150+", label: "Tevreden ondernemers" },
    { icon: Star, value: "4.9/5", label: "Gemiddelde beoordeling" },
    { icon: Clock, value: "< 48u", label: "Eerste resultaten" }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero with VSL */}
      <section className="relative py-12 lg:py-16 overflow-hidden">
        {/* Gradient haze background */}
        <div 
          className="absolute inset-0 pointer-events-none"
          style={{
            background: 'radial-gradient(ellipse at top right, hsl(var(--kk-orange) / 0.08), transparent 60%)'
          }}
        />
        
        <div className="container mx-auto px-4 relative z-10">
          {/* Price badge - prominent */}
          <div 
            className="flex justify-center mb-6"
            style={{
              opacity: isLoaded ? 1 : 0,
              transform: isLoaded ? 'translateY(0)' : 'translateY(-10px)',
              transition: 'opacity 0.6s ease-out, transform 0.6s ease-out'
            }}
          >
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-kk-orange to-kk-violet text-white px-6 py-2 rounded-full text-lg font-bold shadow-lg">
              <span>Vanaf €99/maand</span>
              <span className="text-white/80">•</span>
              <span className="text-white/90 font-normal">Altijd opzegbaar</span>
            </div>
          </div>

          {/* Headline */}
          <div 
            className="text-center max-w-3xl mx-auto mb-8"
            style={{
              opacity: isLoaded ? 1 : 0,
              transform: isLoaded ? 'translateY(0)' : 'translateY(20px)',
              transition: 'opacity 0.8s ease-out, transform 0.8s ease-out',
              transitionDelay: '100ms'
            }}
          >
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 leading-tight">
              Meer klanten uit jouw regio.{" "}
              <span className="bg-gradient-to-r from-kk-orange via-kk-fuchsia to-kk-violet bg-clip-text text-transparent">
                Zonder gedoe.
              </span>
            </h1>
            <p className="text-lg text-muted-foreground">
              Ontdek in 2 minuten hoe wij lokale ondernemers helpen groeien
            </p>
          </div>

          {/* VSL Video Placeholder */}
          <div 
            className="max-w-4xl mx-auto mb-8"
            style={{
              opacity: isLoaded ? 1 : 0,
              transform: isLoaded ? 'translateY(0)' : 'translateY(20px)',
              transition: 'opacity 0.8s ease-out, transform 0.8s ease-out',
              transitionDelay: '200ms'
            }}
          >
            <div className="relative aspect-video bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl overflow-hidden shadow-premium-xl border border-border/50">
              {/* Video placeholder - replace with actual video embed */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-20 h-20 rounded-full bg-gradient-to-r from-kk-orange to-kk-violet flex items-center justify-center mb-4 mx-auto cursor-pointer hover:scale-105 transition-transform shadow-glow-orange">
                    <div className="w-0 h-0 border-t-[12px] border-t-transparent border-l-[20px] border-l-white border-b-[12px] border-b-transparent ml-1" />
                  </div>
                  <p className="text-white/60 text-sm">Klik om video te bekijken</p>
                </div>
              </div>
              {/* Replace this div with actual video iframe when ready */}
              {/* <iframe src="YOUR_VSL_URL" className="w-full h-full" allowFullScreen /> */}
            </div>
          </div>

          {/* CTA Section under video */}
          <div 
            className="text-center max-w-2xl mx-auto"
            style={{
              opacity: isLoaded ? 1 : 0,
              transform: isLoaded ? 'translateY(0)' : 'translateY(20px)',
              transition: 'opacity 0.8s ease-out, transform 0.8s ease-out',
              transitionDelay: '300ms'
            }}
          >
            <p className="text-lg text-muted-foreground mb-6">
              Benieuwd wat wij voor jouw bedrijf kunnen betekenen?
            </p>
            <GradientButton size="lg" className="text-lg px-8 py-6 shadow-glow-orange">
              <Phone className="w-5 h-5 mr-2" />
              Plan een vrijblijvend gesprek
            </GradientButton>
            <p className="text-sm text-muted-foreground mt-3">
              Geen verplichtingen • 15 minuten • Gratis advies
            </p>
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
                  transitionDelay: `${400 + index * 100}ms`
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

      {/* Benefits Section */}
      <section className="py-16 lg:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              {/* Benefits list */}
              <div>
                <h2 className="text-2xl lg:text-3xl font-bold text-foreground mb-6">
                  Wat krijg je bij KlikKlaar?
                </h2>
                <ul className="space-y-4">
                  {benefits.map((benefit, index) => (
                    <li 
                      key={index} 
                      className="flex items-start gap-3"
                      style={{
                        opacity: isLoaded ? 1 : 0,
                        transform: isLoaded ? 'translateX(0)' : 'translateX(-20px)',
                        transition: 'opacity 0.6s ease-out, transform 0.6s ease-out',
                        transitionDelay: `${600 + index * 100}ms`
                      }}
                    >
                      <div className="w-6 h-6 rounded-full bg-green-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <Check className="w-4 h-4 text-green-500" />
                      </div>
                      <span className="text-foreground">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Price card */}
              <div 
                className="bg-card rounded-2xl p-8 shadow-premium-lg border border-border/50"
                style={{
                  opacity: isLoaded ? 1 : 0,
                  transform: isLoaded ? 'translateY(0)' : 'translateY(20px)',
                  transition: 'opacity 0.8s ease-out, transform 0.8s ease-out',
                  transitionDelay: '700ms'
                }}
              >
                <div className="text-center">
                  <p className="text-muted-foreground mb-2">Al vanaf</p>
                  <div className="text-5xl font-bold text-foreground mb-1">€99</div>
                  <p className="text-muted-foreground mb-6">per maand</p>
                  <ul className="text-sm text-muted-foreground space-y-2 mb-6">
                    <li>✓ Geen opstartkosten</li>
                    <li>✓ Altijd opzegbaar</li>
                    <li>✓ Resultaat binnen 48 uur</li>
                  </ul>
                  <GradientButton className="w-full" size="lg">
                    <Phone className="w-4 h-4 mr-2" />
                    Bel ons voor advies
                  </GradientButton>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section - Quick objection handling */}
      <section className="py-16 lg:py-20 bg-muted/30">
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
                },
                {
                  q: "Werkt dit voor mijn branche?",
                  a: "We werken met kappers, tandartsen, coaches, aannemers, en veel meer. Als je lokale klanten wilt, kunnen we helpen."
                }
              ].map((faq, index) => (
                <div 
                  key={index} 
                  className="bg-card rounded-xl p-6 shadow-premium-sm border border-border/50"
                  style={{
                    opacity: isLoaded ? 1 : 0,
                    transform: isLoaded ? 'translateY(0)' : 'translateY(10px)',
                    transition: 'opacity 0.6s ease-out, transform 0.6s ease-out',
                    transitionDelay: `${800 + index * 100}ms`
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
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div 
            className="max-w-3xl mx-auto text-center"
            style={{
              opacity: isLoaded ? 1 : 0,
              transform: isLoaded ? 'translateY(0)' : 'translateY(20px)',
              transition: 'opacity 0.8s ease-out, transform 0.8s ease-out',
              transitionDelay: '200ms'
            }}
          >
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

export default AdLandingA;
