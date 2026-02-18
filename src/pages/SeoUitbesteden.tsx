import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { CTASection } from "@/components/home/CTASection";
import { SEOHead } from "@/components/SEOHead";
import { StructuredData } from "@/components/StructuredData";
import { GradientButton } from "@/components/ui/GradientButton";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { KennisbankLinks } from "@/components/KennisbankLinks";
import { DienstLinksSection } from "@/components/DienstLinksSection";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import {
  Phone, Check, X, ChevronRight, HelpCircle,
  Building2, User, Cpu, ArrowRight, Shield, Clock, TrendingUp
} from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const comparisonData = [
  { feature: "Maandelijkse kosten", bureau: "€500 - €2.000+", freelancer: "€300 - €1.000", klikklaar: "€99 - €249" },
  { feature: "Contractduur", bureau: "6-12 maanden", freelancer: "Variabel", klikklaar: "Maandelijks opzegbaar" },
  { feature: "Opstart doorlooptijd", bureau: "2-4 weken", freelancer: "1-2 weken", klikklaar: "Binnen 1 week" },
  { feature: "Rapportage", bureau: "Maandelijks", freelancer: "Wisselend", klikklaar: "Wekelijks" },
  { feature: "AI-vindbaarheid (ChatGPT, Perplexity)", bureau: "Soms", freelancer: "Zelden", klikklaar: "Standaard inbegrepen" },
  { feature: "Persoonlijk contact", bureau: "Account manager", freelancer: "Direct", klikklaar: "Direct (Pro+)" },
  { feature: "Technische SEO fixes", bureau: "✓", freelancer: "Beperkt", klikklaar: "✓ Automatisch" },
  { feature: "Transparante prijzen", bureau: "Vaak niet", freelancer: "Wisselend", klikklaar: "✓ Altijd" },
];

const processSteps = [
  {
    step: 1,
    title: "Gratis kennismakingsgesprek",
    description: "We bespreken je doelen, website en huidige situatie. Geen verplichtingen, puur advies.",
  },
  {
    step: 2,
    title: "Website analyse & plan",
    description: "We analyseren je website op techniek, content en vindbaarheid. Je krijgt een helder plan met concrete verbeterpunten.",
  },
  {
    step: 3,
    title: "Automatische optimalisatie start",
    description: "Wij gaan aan de slag. Technische fixes, content verbeteringen en AI-vindbaarheid — volledig automatisch.",
  },
  {
    step: 4,
    title: "Wekelijkse rapportages",
    description: "Elke week ontvang je een rapport in normaal Nederlands. Je ziet precies wat er verbeterd is en hoeveel je groeit.",
  },
];

const guarantees = [
  {
    icon: Shield,
    title: "Maandelijks opzegbaar",
    description: "Geen langlopende contracten. Opzeggen kan elke maand, zonder extra kosten.",
  },
  {
    icon: Clock,
    title: "Resultaat binnen weken",
    description: "De eerste verbeteringen zijn binnen 4-6 weken zichtbaar. Geen maanden wachten.",
  },
  {
    icon: TrendingUp,
    title: "Transparante rapportage",
    description: "Wekelijkse updates in normaal Nederlands. Je weet altijd precies waar je aan toe bent.",
  },
];

const faqs = [
  {
    question: "Waarom zou ik mijn SEO uitbesteden?",
    answer: "SEO kost tijd, technische kennis en continue aandacht. Door het uit te besteden kun jij je focussen op je vak, terwijl experts je vindbaarheid structureel verbeteren. Vooral met de opkomst van AI-zoekmachines wordt SEO steeds complexer.",
  },
  {
    question: "Wat is het verschil tussen een SEO bureau en KlikKlaarSEO?",
    answer: "Traditionele SEO bureaus werken vaak met lange contracten (6-12 maanden), hoge kosten (€500-€2.000/mnd) en maandelijkse rapportages. Bij KlikKlaarSEO krijg je automatische optimalisatie vanaf €99/mnd, wekelijkse rapportages en maandelijkse opzegbaarheid. Plus: AI-vindbaarheid zit standaard inbegrepen.",
  },
  {
    question: "Is een freelancer niet goedkoper?",
    answer: "Een goede SEO freelancer kost al snel €300-€1.000 per maand. Bovendien ben je afhankelijk van één persoon: bij ziekte of vakantie ligt alles stil. Met ons automatische systeem draait de optimalisatie altijd door, tegen een lagere prijs.",
  },
  {
    question: "Kan ik SEO niet zelf doen?",
    answer: "Technisch gezien wel, maar het kost gemiddeld 10-20 uur per maand als je het goed wilt doen. Plus je hebt kennis nodig van technische SEO, content strategie, structured data en nu ook AI-optimalisatie. De meeste ondernemers besteden die tijd liever aan hun klanten.",
  },
  {
    question: "Hoe weet ik of het werkt?",
    answer: "Je ontvangt wekelijkse rapportages met concrete cijfers: positieverbeteringen, verkeergroei en technische verbeteringen. Alles in normaal Nederlands, geen vakjargon.",
  },
  {
    question: "Wat als ik al een SEO bureau heb?",
    answer: "We kunnen naast een bestaand bureau werken, of je kunt overstappen. Veel klanten besparen 50-70% door over te stappen naar onze automatische aanpak. We helpen je graag met de transitie.",
  },
  {
    question: "Voor welke bedrijven is SEO uitbesteden geschikt?",
    answer: "Voor elke ondernemer die online gevonden wil worden: van lokale dienstverleners en MKB tot consultants, IT-bedrijven en e-commerce. Of je nu 5 of 500 pagina's hebt, wij passen de aanpak aan.",
  },
  {
    question: "Hoe snel kan ik starten?",
    answer: "Na het kennismakingsgesprek kunnen we binnen een week live gaan. De analyse en eerste optimalisaties starten direct.",
  },
];

function HeroSection() {
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 50);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative pt-24 lg:pt-40 pb-12 lg:pb-24 overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-0 w-1/2 h-full bg-gradient-to-br from-kk-violet/[0.03] via-transparent to-transparent" />
        <div className="absolute bottom-0 right-0 w-1/3 h-1/2 bg-gradient-to-tl from-kk-orange/[0.03] via-transparent to-transparent" />
      </div>

      <div className="container px-4 sm:px-6">
        <div className="max-w-4xl mx-auto text-center">
          <nav
            className="flex items-center justify-center gap-2 text-sm text-muted-foreground mb-6"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? "translateY(0)" : "translateY(12px)",
              transition: "opacity 0.5s ease-out, transform 0.5s ease-out",
            }}
          >
            <Link to="/" className="hover:text-foreground transition-colors">Home</Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-foreground">SEO Uitbesteden</span>
          </nav>

          <h1
            className="text-3xl sm:text-4xl lg:text-5xl xl:text-display-xl font-bold text-foreground mb-6"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? "translateY(0)" : "translateY(16px)",
              transition: "opacity 0.6s ease-out 0.1s, transform 0.6s ease-out 0.1s",
            }}
          >
            SEO Uitbesteden?{" "}
            <span className="gradient-text">Slim, Betaalbaar & Zonder Gedoe</span>
          </h1>

          <p
            className="text-base sm:text-lg lg:text-xl text-muted-foreground mb-4 max-w-2xl mx-auto"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? "translateY(0)" : "translateY(16px)",
              transition: "opacity 0.6s ease-out 0.15s, transform 0.6s ease-out 0.15s",
            }}
          >
            Vergelijk bureau, freelancer en automatische SEO. Ontdek welke optie 
            het beste bij jouw bedrijf en budget past.
          </p>

          <p
            className="text-xs sm:text-sm text-muted-foreground mb-8"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? "translateY(0)" : "translateY(12px)",
              transition: "opacity 0.6s ease-out 0.2s, transform 0.6s ease-out 0.2s",
            }}
          >
            ✓ Eerlijke vergelijking · ✓ Geen verborgen kosten · ✓ Altijd opzegbaar
          </p>

          <div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? "translateY(0)" : "translateY(16px)",
              transition: "opacity 0.6s ease-out 0.25s, transform 0.6s ease-out 0.25s",
            }}
          >
            <GradientButton size="lg" asChild>
              <Link to="/contact">
                <Phone className="w-4 h-4" />
                Gratis adviesgesprek
              </Link>
            </GradientButton>
            <GradientButton variant="outline" size="lg" asChild>
              <Link to="/diensten/seo-abonnement">Bekijk SEO abonnementen</Link>
            </GradientButton>
          </div>
        </div>
      </div>
    </section>
  );
}

function ComparisonSection() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section ref={ref} className="py-16 lg:py-24 haze-gradient-warm">
      <div className="container px-4 sm:px-6">
        <div
          className="text-center mb-12"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? "translateY(0)" : "translateY(24px)",
            transition: "opacity 0.6s ease-out, transform 0.6s ease-out",
          }}
        >
          <h2 className="text-2xl sm:text-3xl lg:text-display font-bold text-foreground mb-4">
            Bureau vs. Freelancer vs.{" "}
            <span className="gradient-text">KlikKlaarSEO</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Een eerlijke vergelijking zodat je de beste keuze kunt maken
          </p>
        </div>

        <div className="max-w-5xl mx-auto overflow-x-auto">
          <table className="w-full min-w-[600px]">
            <thead>
              <tr>
                <th className="text-left py-4 px-4 text-sm font-medium text-muted-foreground"></th>
                <th className="py-4 px-4 text-center">
                  <div className="flex flex-col items-center gap-2">
                    <div className="w-10 h-10 rounded-xl bg-muted flex items-center justify-center">
                      <Building2 className="w-5 h-5 text-muted-foreground" />
                    </div>
                    <span className="text-sm font-semibold text-foreground">SEO Bureau</span>
                  </div>
                </th>
                <th className="py-4 px-4 text-center">
                  <div className="flex flex-col items-center gap-2">
                    <div className="w-10 h-10 rounded-xl bg-muted flex items-center justify-center">
                      <User className="w-5 h-5 text-muted-foreground" />
                    </div>
                    <span className="text-sm font-semibold text-foreground">Freelancer</span>
                  </div>
                </th>
                <th className="py-4 px-4 text-center">
                  <div className="flex flex-col items-center gap-2">
                    <div className="w-10 h-10 rounded-xl bg-kk-orange/10 flex items-center justify-center ring-2 ring-kk-orange/20">
                      <Cpu className="w-5 h-5 text-kk-orange" />
                    </div>
                    <span className="text-sm font-bold text-kk-orange">KlikKlaarSEO</span>
                  </div>
                </th>
              </tr>
            </thead>
            <tbody>
              {comparisonData.map((row, index) => (
                <tr
                  key={index}
                  className="border-t border-border"
                  style={{
                    opacity: isVisible ? 1 : 0,
                    transform: isVisible ? "translateY(0)" : "translateY(12px)",
                    transition: `opacity 0.4s ease-out ${index * 0.05}s, transform 0.4s ease-out ${index * 0.05}s`,
                  }}
                >
                  <td className="py-4 px-4 text-sm font-medium text-foreground">{row.feature}</td>
                  <td className="py-4 px-4 text-center text-sm text-muted-foreground">{row.bureau}</td>
                  <td className="py-4 px-4 text-center text-sm text-muted-foreground">{row.freelancer}</td>
                  <td className="py-4 px-4 text-center text-sm font-medium text-foreground">{row.klikklaar}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}

function ProcessSection() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section ref={ref} className="py-16 lg:py-24">
      <div className="container px-4 sm:px-6">
        <div
          className="text-center mb-12"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? "translateY(0)" : "translateY(24px)",
            transition: "opacity 0.6s ease-out, transform 0.6s ease-out",
          }}
        >
          <h2 className="text-2xl sm:text-3xl lg:text-display font-bold text-foreground mb-4">
            Hoe werkt SEO uitbesteden bij ons?
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Van kennismaking tot resultaat in 4 stappen
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-4">
          {processSteps.map((step, index) => (
            <div
              key={index}
              className="flex items-start gap-4 p-6 bg-card rounded-xl border border-border hover:border-kk-orange/20 hover:shadow-premium transition-all duration-300"
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? "translateX(0)" : "translateX(20px)",
                transition: `opacity 0.5s ease-out ${index * 0.1}s, transform 0.5s ease-out ${index * 0.1}s`,
              }}
            >
              <div className="w-10 h-10 rounded-full gradient-cta flex items-center justify-center flex-shrink-0 text-white font-bold">
                {step.step}
              </div>
              <div>
                <h3 className="font-semibold text-foreground mb-1">{step.title}</h3>
                <p className="text-sm text-muted-foreground">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function GuaranteesSection() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section ref={ref} className="py-16 lg:py-24 haze-gradient-cool">
      <div className="container px-4 sm:px-6">
        <div
          className="text-center mb-12"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? "translateY(0)" : "translateY(24px)",
            transition: "opacity 0.6s ease-out, transform 0.6s ease-out",
          }}
        >
          <h2 className="text-2xl sm:text-3xl lg:text-display font-bold text-foreground mb-4">
            Onze garanties
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Wij geloven in resultaat, niet in kleine lettertjes
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {guarantees.map((guarantee, index) => {
            const Icon = guarantee.icon;
            return (
              <div
                key={index}
                className="p-6 bg-card rounded-xl border border-border text-center hover:shadow-premium transition-all duration-300"
                style={{
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible ? "translateY(0)" : "translateY(20px)",
                  transition: `opacity 0.5s ease-out ${index * 0.1}s, transform 0.5s ease-out ${index * 0.1}s`,
                }}
              >
                <div className="w-12 h-12 rounded-xl bg-kk-orange/10 flex items-center justify-center mx-auto mb-4">
                  <Icon className="w-6 h-6 text-kk-orange" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">{guarantee.title}</h3>
                <p className="text-sm text-muted-foreground">{guarantee.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function FAQSection() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section ref={ref} className="py-16 lg:py-24">
      <div className="container px-4 sm:px-6 max-w-3xl">
        <div
          className="text-center mb-12"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? "translateY(0)" : "translateY(20px)",
            transition: "opacity 0.6s ease-out, transform 0.6s ease-out",
          }}
        >
          <h2 className="text-2xl sm:text-3xl lg:text-display font-bold text-foreground mb-4">
            Veelgestelde vragen over{" "}
            <span className="gradient-text">SEO uitbesteden</span>
          </h2>
        </div>

        <Accordion type="single" collapsible className="space-y-3">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`faq-${index}`}
              className="bg-card border border-border rounded-xl px-6 shadow-sm hover:shadow-premium hover:border-kk-orange/20 transition-all duration-300"
            >
              <AccordionTrigger className="text-left text-foreground font-semibold hover:no-underline py-5">
                <div className="flex items-center gap-3">
                  <HelpCircle className="w-5 h-5 text-kk-orange flex-shrink-0" />
                  {faq.question}
                </div>
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground pb-5 pl-8">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}

const SeoUitbesteden = () => {
  const faqSchema = {
    type: "FAQPage" as const,
    questions: faqs.map((faq) => ({ question: faq.question, answer: faq.answer })),
  };

  const serviceSchema = {
    type: "Service" as const,
    name: "SEO Uitbesteden",
    description: "Besteed je SEO uit aan KlikKlaarSEO. Automatische optimalisatie voor Google en AI-zoekmachines. Vanaf €99/mnd.",
    provider: "KlikKlaarSEO",
    areaServed: "Nederland",
  };

  const breadcrumbSchema = {
    type: "BreadcrumbList" as const,
    items: [
      { name: "Home", url: "https://klikklaar.nl/" },
      { name: "Diensten", url: "https://klikklaar.nl/diensten/seo-uitbesteden" },
      { name: "SEO Uitbesteden", url: "https://klikklaar.nl/diensten/seo-uitbesteden" },
    ],
  };

  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="SEO Uitbesteden? | Bureau vs Freelancer vs Automatisch | KlikKlaarSEO"
        description="SEO uitbesteden aan een bureau, freelancer of automatisch? Vergelijk kosten, resultaten en contracten. Automatische SEO vanaf €99/mnd bij KlikKlaarSEO."
        canonical="https://klikklaar.nl/diensten/seo-uitbesteden"
      />
      <StructuredData schema={[faqSchema, serviceSchema, breadcrumbSchema]} />
      <Header />
      <main>
        <HeroSection />
        <ComparisonSection />
        <ProcessSection />
        <GuaranteesSection />
        <DienstLinksSection variant="uitbesteden" />
        <FAQSection />
        <KennisbankLinks context="general" title="Meer leren over SEO?" />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default SeoUitbesteden;
