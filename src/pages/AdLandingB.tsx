import { GradientButton } from "@/components/ui/GradientButton";
import { Check, Phone, Clock, Users, Star, ArrowRight, Zap, Target, BarChart3, Shield, TrendingUp, Sparkles, Calendar, MessageCircle } from "lucide-react";
import { useEffect, useState } from "react";
import klikklaarLogo from "@/assets/klikklaar-logo.png";
import { ProductDemo } from "@/components/home/ProductDemo";
import { Link } from "react-router-dom";
import { SEOHead } from "@/components/SEOHead";
import { StructuredData } from "@/components/StructuredData";



const AdLandingB = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const usps = [
    {
      icon: Zap,
      title: "Alles automatisch",
      description: "Geen taken, geen instellingen, geen technische complexiteit. Wij doen alles - jij focust op je klanten."
    },
    {
      icon: Target,
      title: "Meer klanten uit je regio",
      description: "Word beter gevonden door mensen die actief zoeken naar wat jij aanbiedt, precies in jouw buurt."
    },
    {
      icon: BarChart3,
      title: "Duidelijke resultaten",
      description: "Wekelijks een helder rapport in normaal Nederlands. Geen jargon, alleen wat er verbeterd is."
    }
  ];

  const socialProof = [
    { icon: Users, value: "150+", label: "Tevreden ondernemers" },
    { icon: Star, value: "4.2/5", label: "Gemiddelde beoordeling" },
    { icon: Clock, value: "< 48u", label: "Eerste resultaten" }
  ];

  const steps = [
    {
      number: "01",
      title: "Laten we kennismaken",
      description: "Plan een kort gesprek. We bespreken je bedrijf, je doelen en bekijken samen je huidige website."
    },
    {
      number: "02", 
      title: "We analyseren samen",
      description: "We laten je zien waar de kansen liggen. Geen technisch gepraat, gewoon helder uitgelegd."
    },
    {
      number: "03",
      title: "Jij focust, wij optimaliseren",
      description: "Vanaf dat moment nemen wij het over. Elke week verbeteringen, elke week een rapport."
    }
  ];

  const deliverables = [
    "Nieuwe H1 & H2 koppen die converteren",
    "Geoptimaliseerde meta-descriptions",
    "Lokale zoekwoorden strategisch ingebouwd",
    "Snelheidsverbeteringen doorgevoerd",
    "Technische fixes (schema, structuur)",
    "Wekelijks helder rapport"
  ];

  const testimonials = [
    {
      quote: "Eindelijk iemand die het gewoon voor me regelt. Ik snap niks van websites, maar mijn telefoon gaat veel vaker over sinds ik met KlikKlaar werk.",
      name: "Sandra van Dam",
      role: "Kapsalon De Knip, Amsterdam",
      result: "+47% meer afspraken"
    },
    {
      quote: "Binnen een maand meer aanvragen dan het hele jaar daarvoor. En ik hoef er letterlijk niks voor te doen. Ze sturen me elke week een update.",
      name: "Peter Janssen",
      role: "Loodgietersbedrijf Janssen, Utrecht",
      result: "+156% meer leads"
    },
    {
      quote: "Ik was sceptisch over online marketing, maar dit werkt gewoon. Simpel, eerlijk, en ik zie direct resultaat in mijn agenda.",
      name: "Maria Bakker",
      role: "Fysiotherapie Centrum, Den Haag",
      result: "+89% meer bezoekers"
    }
  ];

  const faqs = [
    {
      q: "Moet ik iets technisch kunnen?",
      a: "Nee, helemaal niets. Wij doen alles voor je. Je hoeft alleen je website URL te delen en wij regelen de rest."
    },
    {
      q: "Hoe snel zie ik resultaat?",
      a: "De eerste verbeteringen zijn vaak binnen 48 uur zichtbaar. Echte groei bouw je op over weken."
    },
    {
      q: "Kan ik maandelijks opzeggen?",
      a: "Ja, altijd. Geen lange contracten, geen opzegtermijn, geen gedoe."
    },
    {
      q: "Werkt dit voor mijn branche?",
      a: "We werken met coaches, consultants, IT-bedrijven, kappers, aannemers, en nog veel meer ondernemers."
    },
    {
      q: "Wat kost het precies?",
      a: "Vanaf €99 per maand, zonder opstartkosten. Geen verborgen kosten."
    },
    {
      q: "Hoe weet ik dat het werkt?",
      a: "Je krijgt elke week een rapport in normaal Nederlands met concrete resultaten."
    }
  ];

  return (
    <>
      <SEOHead 
        title="Automatische AI SEO | Meer Klanten | KlikKlaarSEO"
        description="Wij zorgen dat jouw website beter gevonden wordt. Automatisch. Jij focust op je vak, wij op je online zichtbaarheid. Vanaf €99/maand."
        canonical="https://klikklaar.nl/ad-b"
      />
      <StructuredData 
        schema={[
          {
            type: "LocalBusiness",
            name: "KlikKlaar",
            description: "Automatische SEO en website optimalisatie voor lokale ondernemers.",
            url: "https://klikklaar.nl",
            priceRange: "€€",
            aggregateRating: { ratingValue: 4.2, reviewCount: 150 },
          },
          {
            type: "FAQPage",
            questions: faqs.map(faq => ({ question: faq.q, answer: faq.a })),
          },
        ]}
      />
      <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="py-4 border-b border-border/30">
        <div className="container mx-auto px-4 flex items-center justify-between">
          <img src={klikklaarLogo} alt="KlikKlaar" className="h-10 lg:h-12 w-auto" />
          <div className="hidden sm:inline-flex items-center gap-2 bg-gradient-to-r from-kk-orange to-kk-violet text-white px-5 py-2 rounded-full text-sm font-bold shadow-md">
            <span>Vanaf €99/maand</span>
            <span className="text-white/60">•</span>
            <span className="text-white/90 font-normal">Altijd opzegbaar</span>
          </div>
          <div className="sm:hidden inline-flex items-center bg-gradient-to-r from-kk-orange to-kk-violet text-white px-3 py-1.5 rounded-full text-xs font-bold shadow-md">
            €99/mnd
          </div>
        </div>
      </header>

      {/* Hero Section - Homepage style with ProductDemo */}
      <section className="relative py-12 lg:py-16 overflow-hidden">
        {/* Gradient haze background */}
        <div 
          className="absolute inset-0 pointer-events-none"
          style={{
            background: 'linear-gradient(to bottom, transparent 0%, hsl(var(--kk-orange) / 0.04) 20%, hsl(var(--kk-orange) / 0.06) 50%, hsl(var(--kk-orange) / 0.04) 80%, transparent 100%)'
          }}
        />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-12 items-center">
            {/* Left: Content */}
            <div>
              <h1 
                className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 leading-tight"
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
                className="text-base sm:text-lg lg:text-xl text-muted-foreground mb-6"
                style={{
                  opacity: isLoaded ? 1 : 0,
                  transform: isLoaded ? 'translateY(0)' : 'translateY(20px)',
                  transition: 'opacity 0.8s ease-out, transform 0.8s ease-out',
                  transitionDelay: '150ms'
                }}
              >
                Wij zorgen dat jouw website beter gevonden wordt. Automatisch. 
                Jij focust op je vak, wij op je online zichtbaarheid.
              </p>

              <div 
                className="flex flex-col sm:flex-row gap-3 mb-4"
                style={{
                  opacity: isLoaded ? 1 : 0,
                  transform: isLoaded ? 'translateY(0)' : 'translateY(20px)',
                  transition: 'opacity 0.8s ease-out, transform 0.8s ease-out',
                  transitionDelay: '200ms'
                }}
              >
                <GradientButton size="lg" className="w-full sm:w-auto text-sm sm:text-base px-4 sm:px-6 py-4 sm:py-5 shadow-glow-orange" asChild>
                  <Link to="/contact">
                    <Phone className="w-5 h-5 mr-2" />
                    Plan een vrijblijvend gesprek
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Link>
                </GradientButton>
              </div>

              <div 
                className="flex flex-wrap gap-4 text-sm text-muted-foreground"
                style={{
                  opacity: isLoaded ? 1 : 0,
                  transition: 'opacity 0.6s ease-out',
                  transitionDelay: '250ms'
                }}
              >
                <span className="flex items-center gap-1"><Check className="w-4 h-4 text-green-500" /> Geen verplichtingen</span>
                <span className="flex items-center gap-1"><Check className="w-4 h-4 text-green-500" /> 15 minuten</span>
                <span className="flex items-center gap-1"><Check className="w-4 h-4 text-green-500" /> Gratis advies</span>
              </div>
            </div>

            {/* Right: ProductDemo */}
            <div 
              style={{
                opacity: isLoaded ? 1 : 0,
                transform: isLoaded ? 'translateY(0)' : 'translateY(20px)',
                transition: 'opacity 1s ease-out, transform 1s ease-out',
                transitionDelay: '200ms'
              }}
            >
              <ProductDemo />
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof Strip */}
      <section className="py-8 border-y border-border/30">
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
                  transitionDelay: `${300 + index * 50}ms`
                }}
              >
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-kk-orange/15 to-kk-violet/15 flex items-center justify-center">
                  <item.icon className="w-5 h-5 text-kk-orange" />
                </div>
                <div>
                  <div className="text-xl font-bold text-foreground">{item.value}</div>
                  <div className="text-sm text-muted-foreground">{item.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pain Section */}
      <section className="py-12 lg:py-16 relative overflow-hidden">
        <div 
          className="absolute inset-0 pointer-events-none"
          style={{
            background: 'linear-gradient(to bottom, transparent 0%, hsl(var(--kk-violet) / 0.03) 20%, hsl(var(--kk-violet) / 0.05) 50%, hsl(var(--kk-violet) / 0.03) 80%, transparent 100%)'
          }}
        />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl lg:text-3xl font-bold text-foreground mb-4">
              Je bent goed in wat je doet.{" "}
              <span className="text-muted-foreground">Maar je website werkt niet mee.</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-10 max-w-3xl mx-auto">
              Je hebt geen tijd om aan je website te sleutelen. Je wilt gewoon dat klanten je vinden. 
              Zonder dure bureaus, zonder ingewikkelde tools, zonder eindeloos gedoe.
            </p>
            
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { title: "Geen tijd", description: "Je runt een bedrijf. Je hebt geen uren om aan je website te besteden." },
                { title: "Geen kennis", description: "SEO, meta-tags, keywords... Het zegt je niets en dat hoeft ook niet." },
                { title: "Geen zin", description: "Je wilt ondernemen, niet achter een computer zitten prutsen." }
              ].map((pain, index) => (
                <div 
                  key={index}
                  className="bg-card rounded-xl p-6 shadow-premium-sm border border-border/30"
                  style={{
                    opacity: isLoaded ? 1 : 0,
                    transform: isLoaded ? 'translateY(0)' : 'translateY(20px)',
                    transition: 'opacity 0.8s ease-out, transform 0.8s ease-out',
                    transitionDelay: `${350 + index * 80}ms`
                  }}
                >
                  <h3 className="text-lg font-bold text-foreground mb-2">{pain.title}</h3>
                  <p className="text-muted-foreground">{pain.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* USP Section */}
      <section className="py-12 lg:py-16 relative overflow-hidden">
        <div 
          className="absolute inset-0 pointer-events-none"
          style={{
            background: 'linear-gradient(to bottom, transparent 0%, hsl(var(--kk-orange) / 0.03) 20%, hsl(var(--kk-orange) / 0.05) 50%, hsl(var(--kk-orange) / 0.03) 80%, transparent 100%)'
          }}
        />
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-2xl lg:text-4xl font-bold text-foreground mb-4">
              Daarom kiezen ondernemers voor{" "}
              <span className="bg-gradient-to-r from-kk-orange via-kk-fuchsia to-kk-violet bg-clip-text text-transparent">
                KlikKlaar
              </span>
            </h2>
            <p className="text-lg text-muted-foreground">
              Wij geloven dat online zichtbaarheid niet ingewikkeld hoeft te zijn
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {usps.map((usp, index) => (
              <div 
                key={index}
                className="bg-card rounded-xl p-6 shadow-premium-sm border border-border/30 hover:shadow-premium hover:border-kk-orange/20 hover:-translate-y-0.5 transition-all duration-300"
                style={{
                  opacity: isLoaded ? 1 : 0,
                  transform: isLoaded ? 'translateY(0)' : 'translateY(20px)',
                  transition: 'opacity 0.8s ease-out, transform 0.8s ease-out',
                  transitionDelay: `${400 + index * 80}ms`
                }}
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-kk-orange/15 to-kk-violet/15 flex items-center justify-center mb-4">
                  <usp.icon className="w-6 h-6 text-kk-orange" />
                </div>
                <h3 className="text-lg font-bold text-foreground mb-2">{usp.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{usp.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-12 lg:py-16 relative overflow-hidden">
        <div 
          className="absolute inset-0 pointer-events-none"
          style={{
            background: 'linear-gradient(to bottom, transparent 0%, hsl(var(--muted) / 0.5) 20%, hsl(var(--muted) / 0.6) 50%, hsl(var(--muted) / 0.5) 80%, transparent 100%)'
          }}
        />
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-2xl lg:text-4xl font-bold text-foreground mb-4">
              Hoe werkt het?
            </h2>
            <p className="text-lg text-muted-foreground">
              In drie simpele stappen naar meer klanten uit jouw regio
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {steps.map((step, index) => (
              <div 
                key={index}
                className="relative"
                style={{
                  opacity: isLoaded ? 1 : 0,
                  transform: isLoaded ? 'translateY(0)' : 'translateY(20px)',
                  transition: 'opacity 0.8s ease-out, transform 0.8s ease-out',
                  transitionDelay: `${450 + index * 80}ms`
                }}
              >
                <div className="bg-card rounded-xl p-6 shadow-premium-sm border border-border/30 h-full">
                  <div className="text-4xl font-bold bg-gradient-to-r from-kk-orange to-kk-violet bg-clip-text text-transparent mb-3">
                    {step.number}
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-2">{step.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{step.description}</p>
                </div>
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-3 w-6 text-muted-foreground/30">
                    <ArrowRight className="w-6 h-6" />
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <GradientButton size="lg" className="text-base px-8 py-5 shadow-glow-orange" asChild>
              <Link to="/contact">
                <Calendar className="w-5 h-5 mr-2" />
                Start met stap 1: Plan een gesprek
              </Link>
            </GradientButton>
          </div>
        </div>
      </section>

      {/* Deliverables Section */}
      <section className="py-12 lg:py-16 relative overflow-hidden">
        <div 
          className="absolute inset-0 pointer-events-none"
          style={{
            background: 'linear-gradient(to bottom, transparent 0%, hsl(var(--kk-violet) / 0.03) 20%, hsl(var(--kk-violet) / 0.05) 50%, hsl(var(--kk-violet) / 0.03) 80%, transparent 100%)'
          }}
        />
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
            <div>
              <h2 className="text-2xl lg:text-3xl font-bold text-foreground mb-4">
                Wat krijg je concreet?
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                Elke week werken we aan je website. Dit zijn de concrete verbeteringen:
              </p>
              <ul className="space-y-3">
                {deliverables.map((item, index) => (
                  <li 
                    key={index} 
                    className="flex items-start gap-3"
                    style={{
                      opacity: isLoaded ? 1 : 0,
                      transform: isLoaded ? 'translateX(0)' : 'translateX(-20px)',
                      transition: 'opacity 0.6s ease-out, transform 0.6s ease-out',
                      transitionDelay: `${500 + index * 60}ms`
                    }}
                  >
                    <div className="w-5 h-5 rounded-full bg-green-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-3 h-3 text-green-500" />
                    </div>
                    <span className="text-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Price card */}
            <div 
              className="bg-card rounded-xl p-8 shadow-premium-lg border border-border/30"
              style={{
                opacity: isLoaded ? 1 : 0,
                transform: isLoaded ? 'translateY(0)' : 'translateY(20px)',
                transition: 'opacity 0.8s ease-out, transform 0.8s ease-out',
                transitionDelay: '550ms'
              }}
            >
              <div className="text-center">
                <div className="inline-flex items-center gap-2 bg-kk-orange/10 text-kk-orange px-3 py-1 rounded-full text-sm font-medium mb-4">
                  <Sparkles className="w-4 h-4" />
                  Meest gekozen
                </div>
                <p className="text-muted-foreground text-sm mb-1">Al vanaf</p>
                <div className="text-5xl font-bold text-foreground mb-1">€99</div>
                <p className="text-muted-foreground text-sm mb-6">per maand</p>
                
                <ul className="text-left space-y-3 mb-6">
                  {[
                    "Geen opstartkosten",
                    "Altijd opzegbaar",
                    "Resultaat binnen 48 uur",
                    "Wekelijks rapport"
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-green-500" />
                      <span className="text-sm text-foreground">{item}</span>
                    </li>
                  ))}
                </ul>

                <p className="text-sm text-muted-foreground mb-3">
                  Benieuwd wat wij voor jou kunnen doen?
                </p>
                <GradientButton className="w-full" size="default" asChild>
                  <Link to="/contact">
                    <Phone className="w-4 h-4 mr-2" />
                    Plan een gesprek
                  </Link>
                </GradientButton>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-12 lg:py-16 relative overflow-hidden">
        <div 
          className="absolute inset-0 pointer-events-none"
          style={{
            background: 'linear-gradient(to bottom, transparent 0%, hsl(var(--muted) / 0.5) 20%, hsl(var(--muted) / 0.6) 50%, hsl(var(--muted) / 0.5) 80%, transparent 100%)'
          }}
        />
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-2xl lg:text-4xl font-bold text-foreground mb-4">
              Wat ondernemers zeggen
            </h2>
            <p className="text-lg text-muted-foreground">
              Ontdek hoe andere lokale ondernemers groeien met KlikKlaar
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index}
                className="bg-card rounded-xl p-6 shadow-premium-sm border border-border/30"
                style={{
                  opacity: isLoaded ? 1 : 0,
                  transform: isLoaded ? 'translateY(0)' : 'translateY(20px)',
                  transition: 'opacity 0.8s ease-out, transform 0.8s ease-out',
                  transitionDelay: `${550 + index * 80}ms`
                }}
              >
                <div className="flex gap-0.5 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-kk-orange text-kk-orange" />
                  ))}
                </div>
                <p className="text-foreground text-sm mb-4 leading-relaxed">"{testimonial.quote}"</p>
                <div className="flex items-center justify-between">
                  <div>
                    <div className="font-semibold text-foreground text-sm">{testimonial.name}</div>
                    <div className="text-xs text-muted-foreground">{testimonial.role}</div>
                  </div>
                  <div className="bg-green-500/10 text-green-600 px-2 py-0.5 rounded-full text-xs font-medium">
                    {testimonial.result}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-12 lg:py-16 relative overflow-hidden">
        <div 
          className="absolute inset-0 pointer-events-none"
          style={{
            background: 'linear-gradient(to bottom, transparent 0%, hsl(var(--kk-orange) / 0.03) 20%, hsl(var(--kk-orange) / 0.04) 50%, hsl(var(--kk-orange) / 0.03) 80%, transparent 100%)'
          }}
        />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl lg:text-3xl font-bold text-foreground text-center mb-10">
              Veelgestelde vragen
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              {faqs.map((faq, index) => (
                <div 
                  key={index} 
                  className="bg-card rounded-lg p-5 shadow-premium-sm border border-border/30"
                  style={{
                    opacity: isLoaded ? 1 : 0,
                    transform: isLoaded ? 'translateY(0)' : 'translateY(10px)',
                    transition: 'opacity 0.6s ease-out, transform 0.6s ease-out',
                    transitionDelay: `${600 + index * 60}ms`
                  }}
                >
                  <h3 className="font-semibold text-foreground text-sm mb-2">{faq.q}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-12 lg:py-16 relative overflow-hidden">
        <div 
          className="absolute inset-0 pointer-events-none"
          style={{
            background: 'linear-gradient(to bottom, transparent 0%, hsl(var(--kk-orange) / 0.06) 30%, hsl(var(--kk-violet) / 0.06) 70%, transparent 100%)'
          }}
        />
        <div className="container mx-auto px-4 relative z-10">
          <div 
            className="max-w-3xl mx-auto text-center"
            style={{
              opacity: isLoaded ? 1 : 0,
              transform: isLoaded ? 'translateY(0)' : 'translateY(20px)',
              transition: 'opacity 0.8s ease-out, transform 0.8s ease-out',
              transitionDelay: '200ms'
            }}
          >
            <div className="inline-flex items-center gap-2 bg-green-500/10 text-green-600 px-3 py-1.5 rounded-full text-sm font-medium mb-4">
              <Shield className="w-4 h-4" />
              Geen verplichtingen
            </div>
            
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Klaar om te groeien?
            </h2>
            <p className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
              Plan een vrijblijvend gesprek en ontdek wat wij voor jouw bedrijf kunnen betekenen.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-4">
              <GradientButton size="lg" className="text-base px-10 py-6 shadow-glow-orange" asChild>
                <Link to="/contact">
                  <Phone className="w-5 h-5 mr-2" />
                  Plan je gratis gesprek
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </GradientButton>
            </div>
            
            <div className="flex flex-wrap justify-center gap-4 text-sm text-muted-foreground">
              <span className="flex items-center gap-1.5"><MessageCircle className="w-4 h-4 text-kk-orange" /> Binnen 24 uur reactie</span>
              <span className="flex items-center gap-1.5"><Clock className="w-4 h-4 text-kk-orange" /> 15 minuten gesprek</span>
              <span className="flex items-center gap-1.5"><TrendingUp className="w-4 h-4 text-kk-orange" /> Direct inzicht</span>
            </div>
          </div>
        </div>
      </section>

      {/* Minimal Footer */}
      <footer className="py-6 border-t border-border/30">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-3">
              <img src={klikklaarLogo} alt="KlikKlaar" className="h-6 w-auto" />
              <p className="text-xs text-muted-foreground">
                © 2024 KlikKlaar
              </p>
            </div>
            <div className="flex gap-6 text-xs text-muted-foreground">
              <Link to="/contact" className="hover:text-foreground transition-colors">Contact</Link>
              <Link to="/prijzen" className="hover:text-foreground transition-colors">Prijzen</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
    </>
  );
};

export default AdLandingB;
