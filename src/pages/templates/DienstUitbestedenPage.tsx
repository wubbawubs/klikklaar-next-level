import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { CTASection } from "@/components/home/CTASection";
import { SEOHead } from "@/components/SEOHead";
import { StructuredData } from "@/components/StructuredData";
import { GradientButton } from "@/components/ui/GradientButton";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { KennisbankLinks } from "@/components/KennisbankLinks";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { Phone, Check, ChevronRight, Star, HelpCircle, Building2, User, Cpu, Calendar, FileCheck, Clock } from "lucide-react";
import * as LucideIcons from "lucide-react";
import { getTestimonialForSlug, getCtaForSlug } from "@/data/testimonials";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { ServiceVariantData, serviceVariantsUitbesteden } from "@/data/service-variants";

interface Props {
  data: ServiceVariantData;
}

function HeroSection({ data }: Props) {
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
            style={{ opacity: isVisible ? 1 : 0, transform: isVisible ? 'translateY(0)' : 'translateY(12px)', transition: 'opacity 0.5s ease-out, transform 0.5s ease-out' }}
          >
            <Link to="/" className="hover:text-foreground transition-colors">Home</Link>
            <ChevronRight className="w-4 h-4" />
            <Link to="/diensten/seo-uitbesteden" className="hover:text-foreground transition-colors">SEO Uitbesteden</Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-foreground">{data.serviceName}</span>
          </nav>

          <h1
            className="text-3xl sm:text-4xl lg:text-5xl xl:text-display-xl font-bold text-foreground mb-6"
            style={{ opacity: isVisible ? 1 : 0, transform: isVisible ? 'translateY(0)' : 'translateY(16px)', transition: 'opacity 0.6s ease-out 0.1s, transform 0.6s ease-out 0.1s' }}
          >
            {data.headline.replace("?", "")}{" "}
            <span className="gradient-text">Slim & Betaalbaar</span>
          </h1>

          <p
            className="text-base sm:text-lg lg:text-xl text-muted-foreground mb-4 max-w-2xl mx-auto"
            style={{ opacity: isVisible ? 1 : 0, transform: isVisible ? 'translateY(0)' : 'translateY(16px)', transition: 'opacity 0.6s ease-out 0.15s, transform 0.6s ease-out 0.15s' }}
          >
            {data.subheadline}
          </p>

          <p
            className="text-xs sm:text-sm text-muted-foreground mb-8"
            style={{ opacity: isVisible ? 1 : 0, transform: isVisible ? 'translateY(0)' : 'translateY(12px)', transition: 'opacity 0.6s ease-out 0.2s, transform 0.6s ease-out 0.2s' }}
          >
            {data.subtitlePoints.map((p, i) => (
              <span key={i}>{i > 0 ? " · " : ""}✓ {p}</span>
            ))}
          </p>

          <div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            style={{ opacity: isVisible ? 1 : 0, transform: isVisible ? 'translateY(0)' : 'translateY(16px)', transition: 'opacity 0.6s ease-out 0.25s, transform 0.6s ease-out 0.25s' }}
          >
            <GradientButton size="lg" asChild>
              <Link to="/contact"><Phone className="w-4 h-4" />Gratis adviesgesprek</Link>
            </GradientButton>
            <GradientButton variant="outline" size="lg" asChild>
              <Link to={`/diensten/${data.slug.replace("-uitbesteden", "-abonnement")}`}>Bekijk abonnementen</Link>
            </GradientButton>
          </div>
        </div>
      </div>
    </section>
  );
}

function WhatIsSection({ data }: Props) {
  const { ref, isVisible } = useScrollReveal();
  return (
    <section ref={ref} className="py-16 lg:py-24 haze-gradient-warm">
      <div className="container px-4 sm:px-6">
        <div className="max-w-3xl mx-auto text-center" style={{ opacity: isVisible ? 1 : 0, transform: isVisible ? 'translateY(0)' : 'translateY(24px)', transition: 'opacity 0.6s ease-out, transform 0.6s ease-out' }}>
          <h2 className="text-2xl sm:text-3xl lg:text-display font-bold text-foreground mb-6">{data.whatIsTitle}</h2>
          {data.whatIsText.map((text, i) => (
            <p key={i} className="text-muted-foreground text-lg leading-relaxed mb-6">{text}</p>
          ))}
        </div>
      </div>
    </section>
  );
}

function ComparisonSection({ data }: Props) {
  const { ref, isVisible } = useScrollReveal();
  if (!data.comparisonData) return null;

  return (
    <section ref={ref} className="py-16 lg:py-24">
      <div className="container px-4 sm:px-6">
        <div className="text-center mb-12" style={{ opacity: isVisible ? 1 : 0, transform: isVisible ? 'translateY(0)' : 'translateY(24px)', transition: 'opacity 0.6s ease-out, transform 0.6s ease-out' }}>
          <h2 className="text-2xl sm:text-3xl lg:text-display font-bold text-foreground mb-4">
            Bureau vs. Freelancer vs. <span className="gradient-text">KlikKlaarSEO</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">Een eerlijke vergelijking voor {data.serviceName.toLowerCase()}</p>
        </div>
        <div className="max-w-5xl mx-auto overflow-x-auto">
          <table className="w-full min-w-[600px]">
            <thead>
              <tr>
                <th className="text-left py-4 px-4 text-sm font-medium text-muted-foreground"></th>
                <th className="py-4 px-4 text-center">
                  <div className="flex flex-col items-center gap-2">
                    <div className="w-10 h-10 rounded-xl bg-muted flex items-center justify-center"><Building2 className="w-5 h-5 text-muted-foreground" /></div>
                    <span className="text-sm font-semibold text-foreground">SEO Bureau</span>
                  </div>
                </th>
                <th className="py-4 px-4 text-center">
                  <div className="flex flex-col items-center gap-2">
                    <div className="w-10 h-10 rounded-xl bg-muted flex items-center justify-center"><User className="w-5 h-5 text-muted-foreground" /></div>
                    <span className="text-sm font-semibold text-foreground">Freelancer</span>
                  </div>
                </th>
                <th className="py-4 px-4 text-center">
                  <div className="flex flex-col items-center gap-2">
                    <div className="w-10 h-10 rounded-xl bg-kk-orange/10 flex items-center justify-center ring-2 ring-kk-orange/20"><Cpu className="w-5 h-5 text-kk-orange" /></div>
                    <span className="text-sm font-bold text-kk-orange">KlikKlaarSEO</span>
                  </div>
                </th>
              </tr>
            </thead>
            <tbody>
              {data.comparisonData.map((row, index) => (
                <tr key={index} className="border-t border-border" style={{ opacity: isVisible ? 1 : 0, transform: isVisible ? 'translateY(0)' : 'translateY(12px)', transition: `opacity 0.4s ease-out ${index * 0.05}s, transform 0.4s ease-out ${index * 0.05}s` }}>
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

function BenefitsSection({ data }: Props) {
  const { ref, isVisible } = useScrollReveal();
  return (
    <section ref={ref} className="py-16 lg:py-24 haze-gradient-cool">
      <div className="container px-4 sm:px-6">
        <div className="text-center mb-12" style={{ opacity: isVisible ? 1 : 0, transform: isVisible ? 'translateY(0)' : 'translateY(24px)', transition: 'opacity 0.6s ease-out, transform 0.6s ease-out' }}>
          <h2 className="text-2xl sm:text-3xl lg:text-display font-bold text-foreground mb-4">Waarom {data.serviceName.toLowerCase()} uitbesteden?</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">Dit krijg je met onze aanpak</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {data.benefits.map((benefit, index) => {
            const Icon = LucideIcons[benefit.icon as keyof typeof LucideIcons] as React.ElementType;
            return (
              <div key={index} className="p-6 bg-card rounded-xl border border-border hover:border-kk-orange/20 hover:shadow-premium transition-all duration-300" style={{ opacity: isVisible ? 1 : 0, transform: isVisible ? 'translateY(0)' : 'translateY(20px)', transition: `opacity 0.5s ease-out ${index * 0.08}s, transform 0.5s ease-out ${index * 0.08}s` }}>
                <div className="w-10 h-10 rounded-xl bg-kk-orange/10 flex items-center justify-center mb-4">
                  {Icon && <Icon className="w-5 h-5 text-kk-orange" />}
                </div>
                <h3 className="font-semibold text-foreground mb-2">{benefit.title}</h3>
                <p className="text-sm text-muted-foreground">{benefit.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function ProcessSection({ data }: Props) {
  const { ref, isVisible } = useScrollReveal();
  return (
    <section ref={ref} className="py-16 lg:py-24">
      <div className="container px-4 sm:px-6">
        <div className="text-center mb-12" style={{ opacity: isVisible ? 1 : 0, transform: isVisible ? 'translateY(0)' : 'translateY(24px)', transition: 'opacity 0.6s ease-out, transform 0.6s ease-out' }}>
          <h2 className="text-2xl sm:text-3xl lg:text-display font-bold text-foreground mb-4">Hoe werkt {data.serviceName.toLowerCase()} uitbesteden?</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">Van kennismaking tot resultaat</p>
        </div>
        <div className="max-w-3xl mx-auto space-y-4">
          {data.processSteps.map((step, index) => (
            <div key={index} className="flex items-start gap-4 p-6 bg-card rounded-xl border border-border hover:border-kk-orange/20 hover:shadow-premium transition-all duration-300" style={{ opacity: isVisible ? 1 : 0, transform: isVisible ? 'translateX(0)' : 'translateX(20px)', transition: `opacity 0.5s ease-out ${index * 0.1}s, transform 0.5s ease-out ${index * 0.1}s` }}>
              <div className="w-10 h-10 rounded-full gradient-cta flex items-center justify-center flex-shrink-0 text-white font-bold">{step.step}</div>
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

function GuaranteesSection({ data }: Props) {
  const { ref, isVisible } = useScrollReveal();
  if (!data.guarantees) return null;

  return (
    <section ref={ref} className="py-16 lg:py-24 haze-gradient-warm">
      <div className="container px-4 sm:px-6">
        <div className="text-center mb-12" style={{ opacity: isVisible ? 1 : 0, transform: isVisible ? 'translateY(0)' : 'translateY(24px)', transition: 'opacity 0.6s ease-out, transform 0.6s ease-out' }}>
          <h2 className="text-2xl sm:text-3xl lg:text-display font-bold text-foreground mb-4">Onze garanties</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">Wij geloven in resultaat, niet in kleine lettertjes</p>
        </div>
        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {data.guarantees.map((guarantee, index) => {
            const Icon = LucideIcons[guarantee.icon as keyof typeof LucideIcons] as React.ElementType;
            return (
              <div key={index} className="p-6 bg-card rounded-xl border border-border text-center hover:shadow-premium transition-all duration-300" style={{ opacity: isVisible ? 1 : 0, transform: isVisible ? 'translateY(0)' : 'translateY(20px)', transition: `opacity 0.5s ease-out ${index * 0.1}s, transform 0.5s ease-out ${index * 0.1}s` }}>
                <div className="w-12 h-12 rounded-xl bg-kk-orange/10 flex items-center justify-center mx-auto mb-4">
                  {Icon && <Icon className="w-6 h-6 text-kk-orange" />}
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

function SlaSection({ data }: Props) {
  const { ref, isVisible } = useScrollReveal();
  const slaItems = [
    { icon: Calendar, label: "Wekelijkse optimalisatiecyclus", detail: "Elke week worden verbeteringen doorgevoerd" },
    { icon: FileCheck, label: "Wekelijks voortgangsrapport", detail: "Heldere update over rankings, verkeer en acties" },
    { icon: Clock, label: "Reactietijd < 24 uur", detail: "Vragen of wijzigingen? Binnen een werkdag reactie" },
    { icon: Check, label: "Maandelijks strategiegesprek", detail: "15 minuten call over resultaten en volgende stappen" },
  ];

  return (
    <section ref={ref} className="py-16 lg:py-24">
      <div className="container px-4 sm:px-6">
        <div className="text-center mb-12" style={{ opacity: isVisible ? 1 : 0, transform: isVisible ? 'translateY(0)' : 'translateY(24px)', transition: 'opacity 0.6s ease-out, transform 0.6s ease-out' }}>
          <h2 className="text-2xl sm:text-3xl lg:text-display font-bold text-foreground mb-4">
            Onze SLA & maandplanning
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Duidelijke afspraken zodat je weet wat je kunt verwachten
          </p>
        </div>
        <div className="max-w-3xl mx-auto space-y-4">
          {slaItems.map((item, index) => (
            <div 
              key={index}
              className="flex items-start gap-4 p-5 bg-card rounded-xl border border-border hover:border-kk-orange/20 hover:shadow-premium transition-all duration-300"
              style={{ opacity: isVisible ? 1 : 0, transform: isVisible ? 'translateX(0)' : 'translateX(20px)', transition: `opacity 0.5s ease-out ${index * 0.1}s, transform 0.5s ease-out ${index * 0.1}s` }}
            >
              <div className="w-10 h-10 rounded-xl bg-kk-orange/10 flex items-center justify-center flex-shrink-0">
                <item.icon className="w-5 h-5 text-kk-orange" />
              </div>
              <div>
                <p className="font-semibold text-foreground">{item.label}</p>
                <p className="text-sm text-muted-foreground mt-1">{item.detail}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="max-w-3xl mx-auto mt-8 p-6 bg-muted/30 rounded-xl border border-border">
          <h3 className="font-semibold text-foreground mb-3">Typische maandplanning voor {data.serviceName.toLowerCase()}</h3>
          <div className="grid sm:grid-cols-4 gap-4 text-sm">
            <div className="p-3 bg-card rounded-lg border border-border">
              <p className="font-medium text-kk-orange mb-1">Week 1</p>
              <p className="text-muted-foreground">Technische scan & quick wins</p>
            </div>
            <div className="p-3 bg-card rounded-lg border border-border">
              <p className="font-medium text-kk-orange mb-1">Week 2</p>
              <p className="text-muted-foreground">Content & on-page optimalisatie</p>
            </div>
            <div className="p-3 bg-card rounded-lg border border-border">
              <p className="font-medium text-kk-orange mb-1">Week 3</p>
              <p className="text-muted-foreground">Linkbuilding & autoriteit</p>
            </div>
            <div className="p-3 bg-card rounded-lg border border-border">
              <p className="font-medium text-kk-orange mb-1">Week 4</p>
              <p className="text-muted-foreground">Rapportage & strategiegesprek</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function TestimonialSection({ slug }: { slug: string }) {
  const { ref, isVisible } = useScrollReveal();
  const testimonial = getTestimonialForSlug(slug);
  return (
    <section ref={ref} className="py-16 lg:py-24">
      <div className="container px-4 sm:px-6">
        <div className="max-w-3xl mx-auto" style={{ opacity: isVisible ? 1 : 0, transform: isVisible ? 'translateY(0)' : 'translateY(24px)', transition: 'opacity 0.6s ease-out, transform 0.6s ease-out' }}>
          <div className="p-8 bg-card rounded-2xl border border-border shadow-premium-lg">
            <div className="flex gap-1 mb-4">
              {[...Array(5)].map((_, i) => (<Star key={i} className="w-5 h-5 text-kk-orange fill-kk-orange" />))}
            </div>
            <p className="text-lg text-foreground mb-6 italic leading-relaxed">
              "{testimonial.quote}"
            </p>
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full gradient-cta flex items-center justify-center text-white font-bold">{testimonial.initial}</div>
              <div>
                <p className="font-semibold text-foreground">{testimonial.name}</p>
                <p className="text-sm text-muted-foreground">{testimonial.company}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function FAQSection({ data }: Props) {
  const { ref, isVisible } = useScrollReveal();
  return (
    <section ref={ref} className="py-16 lg:py-24 haze-gradient-cool">
      <div className="container px-4 sm:px-6 max-w-3xl">
        <div className="text-center mb-12" style={{ opacity: isVisible ? 1 : 0, transform: isVisible ? 'translateY(0)' : 'translateY(20px)', transition: 'opacity 0.6s ease-out, transform 0.6s ease-out' }}>
          <h2 className="text-2xl sm:text-3xl lg:text-display font-bold text-foreground mb-4">
            Veelgestelde vragen over <span className="gradient-text">{data.serviceName.toLowerCase()} uitbesteden</span>
          </h2>
        </div>
        <Accordion type="single" collapsible className="space-y-3">
          {data.faqs.map((faq, index) => (
            <AccordionItem key={index} value={`faq-${index}`} className="bg-card border border-border rounded-xl px-6 shadow-sm hover:shadow-premium hover:border-kk-orange/20 transition-all duration-300">
              <AccordionTrigger className="text-left text-foreground font-semibold hover:no-underline py-5">
                <div className="flex items-center gap-3">
                  <HelpCircle className="w-5 h-5 text-kk-orange flex-shrink-0" />
                  {faq.question}
                </div>
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground pb-5 pl-8">{faq.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}

function RelatedVariants({ currentSlug }: { currentSlug: string }) {
  const { ref, isVisible } = useScrollReveal();
  const others = serviceVariantsUitbesteden.filter(v => v.slug !== currentSlug);

  return (
    <section ref={ref} className="py-16 lg:py-24">
      <div className="container px-4 sm:px-6">
        <div className="max-w-4xl mx-auto text-center" style={{ opacity: isVisible ? 1 : 0, transform: isVisible ? 'translateY(0)' : 'translateY(24px)', transition: 'opacity 0.6s ease-out, transform 0.6s ease-out' }}>
          <h2 className="text-xl sm:text-2xl font-bold text-foreground mb-6">Meer diensten uitbesteden</h2>
          <div className="flex flex-wrap justify-center gap-3">
            {others.map(v => (
              <Link key={v.slug} to={`/diensten/${v.slug}`} className="px-4 py-2 bg-card border border-border rounded-full text-sm text-foreground hover:border-kk-orange/30 hover:shadow-premium-sm transition-all duration-300">
                {v.serviceName} uitbesteden
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export function DienstUitbestedenPage({ data }: Props) {
  const faqSchema = {
    type: "FAQPage" as const,
    questions: data.faqs.map(faq => ({ question: faq.question, answer: faq.answer }))
  };
  const serviceSchema = {
    type: "Service" as const,
    name: `${data.serviceName} Uitbesteden`,
    description: data.subheadline,
    provider: "KlikKlaarSEO"
  };

  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title={data.metaTitle}
        description={data.metaDescription}
        canonical={`https://klikklaar.nl/diensten/${data.slug}`}
      />
      <StructuredData schema={faqSchema} />
      <StructuredData schema={serviceSchema} />
      <Header />
      <main>
        <HeroSection data={data} />
        <WhatIsSection data={data} />
        <ComparisonSection data={data} />
        <BenefitsSection data={data} />
        <ProcessSection data={data} />
        <SlaSection data={data} />
        <GuaranteesSection data={data} />
        <TestimonialSection slug={data.slug} />
        <FAQSection data={data} />
        <KennisbankLinks context="general" title="Meer leren over SEO?" />
        <RelatedVariants currentSlug={data.slug} />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}

export default DienstUitbestedenPage;
