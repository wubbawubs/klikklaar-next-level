import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { GradientButton } from "@/components/ui/GradientButton";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { ContactConnectIllustration } from "@/components/illustrations/ContactConnectIllustration";
import { SEOHead } from "@/components/SEOHead";
import { StructuredData } from "@/components/StructuredData";
import { 
  Phone,
  Mail,
  MapPin,
  Clock,
  CheckCircle
} from "lucide-react";
import { useState, useEffect } from "react";

const contactMethods = [
  {
    icon: Phone,
    title: "Bel ons",
    description: "Ma-Vr 9:00 - 17:00",
    value: "06 28 35 43 33",
    href: "tel:+31628354333",
  },
  {
    icon: Mail,
    title: "E-mail",
    description: "Reactie binnen 24 uur",
    value: "Info@klikklaarseo.nl",
    href: "mailto:Info@klikklaarseo.nl",
  },
  {
    icon: MapPin,
    title: "Adres",
    description: "Op afspraak",
    value: "Olieslagerspoort 1, 1601AW Enkhuizen",
    href: null,
  },
];

const faqs = [
  {
    question: "Hoe snel krijg ik een reactie?",
    answer: "We reageren altijd binnen 24 uur op e-mails. Telefonisch zijn we bereikbaar op werkdagen van 9:00 tot 17:00.",
  },
  {
    question: "Kan ik een gratis gesprek plannen?",
    answer: "Ja! Via de Calendly planner hiernaast kun je direct een vrijblijvend kennismakingsgesprek van 15 minuten plannen.",
  },
  {
    question: "Ik heb een technisch probleem, waar kan ik terecht?",
    answer: "Bestaande klanten kunnen direct contact opnemen met hun accountmanager. Nieuwe vragen kun je via telefoon of e-mail stellen.",
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
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-bl from-kk-orange/[0.03] via-transparent to-transparent" />
      </div>

      <div className="container px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <div className="text-center lg:text-left">
            <span 
              className="inline-block text-xs font-semibold text-kk-orange uppercase tracking-widest mb-4"
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0)' : 'translateY(12px)',
                transition: 'opacity 0.6s ease-out, transform 0.6s ease-out'
              }}
            >
              Contact
            </span>
            
            <h1 
              className="text-3xl sm:text-4xl lg:text-5xl xl:text-display-lg font-bold text-foreground mb-4 lg:mb-6"
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0)' : 'translateY(16px)',
                transition: 'opacity 0.6s ease-out 0.1s, transform 0.6s ease-out 0.1s'
              }}
            >
              Laten we{" "}
              <span className="gradient-text">kennismaken</span>
            </h1>
            
            <p 
              className="text-base sm:text-lg lg:text-xl text-muted-foreground"
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0)' : 'translateY(16px)',
                transition: 'opacity 0.6s ease-out 0.2s, transform 0.6s ease-out 0.2s'
              }}
            >
              Heb je een vraag, wil je samenwerken of gewoon even sparren? 
              We horen graag van je.
            </p>
          </div>

          <div 
            className="mt-8 lg:mt-0"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
              transition: 'opacity 0.7s ease-out 0.2s, transform 0.7s ease-out 0.2s'
            }}
          >
            <ContactConnectIllustration />
          </div>
        </div>
      </div>
    </section>
  );
}

function ContactSection() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section ref={ref} className="py-12 lg:py-32 haze-gradient-cool relative overflow-hidden">
      <div className="container px-4 sm:px-6">
        <div className="grid lg:grid-cols-5 gap-8 lg:gap-20">
          {/* Contact methods */}
          <div className="lg:col-span-2">
            <div 
              className="space-y-6"
              style={{ 
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateX(0)' : 'translateX(-20px)',
                transition: 'opacity 0.6s ease-out, transform 0.6s ease-out'
              }}
            >
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-foreground mb-2">Neem contact op</h2>
                <p className="text-muted-foreground">Kies de manier die het beste bij je past.</p>
              </div>

              {contactMethods.map((method, index) => {
                const Icon = method.icon;
                const content = (
                  <div 
                    key={method.title}
                    className="flex items-start gap-4 p-5 bg-card rounded-xl border border-border shadow-premium-sm hover:shadow-premium hover:border-kk-orange/20 transition-all duration-300"
                    style={{ transitionDelay: `${index * 75}ms` }}
                  >
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-kk-orange/10 flex items-center justify-center flex-shrink-0">
                      <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-kk-orange" />
                    </div>
                    <div>
                      <p className="font-semibold text-foreground">{method.title}</p>
                      <p className="text-sm text-muted-foreground mb-1">{method.description}</p>
                      <p className="text-kk-orange font-medium">{method.value}</p>
                    </div>
                  </div>
                );

                return method.href ? (
                  <a key={method.title} href={method.href} className="block">
                    {content}
                  </a>
                ) : (
                  content
                );
              })}

              {/* Quick FAQs */}
              <div className="pt-8 border-t border-border">
                <h3 className="font-semibold text-foreground mb-4">Veelgestelde vragen</h3>
                <div className="space-y-4">
                  {faqs.map((faq) => (
                    <div key={faq.question}>
                      <p className="text-sm font-medium text-foreground">{faq.question}</p>
                      <p className="text-sm text-muted-foreground">{faq.answer}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Calendly Embed */}
          <div 
            className="lg:col-span-3"
            style={{ 
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateX(0)' : 'translateX(20px)',
              transition: 'opacity 0.6s ease-out 0.15s, transform 0.6s ease-out 0.15s'
            }}
          >
            <div className="p-4 sm:p-6 lg:p-8 bg-card rounded-2xl border border-border shadow-premium-lg">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl gradient-cta flex items-center justify-center">
                  <Phone className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">Plan een gesprek</h3>
                  <p className="text-sm text-muted-foreground">Kies een moment dat jou uitkomt</p>
                </div>
              </div>

              {/* Calendly Inline Embed */}
              <div className="rounded-xl overflow-hidden border border-border">
              <iframe
                  src="https://calendly.com/luuk-klikklaar/kennismakingsgesprek?embed_type=inline&embed_domain=klikklaar.nl&hide_gdpr_banner=1"
                  width="100%"
                  height="1100"
                  frameBorder="0"
                  title="Plan een kennismakingsgesprek"
                  className="bg-background"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function CallToAction() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section ref={ref} className="py-12 lg:py-24 haze-gradient-warm relative overflow-hidden">
      <div className="container px-4 sm:px-6 relative z-10">
        <div 
          className="max-w-3xl mx-auto text-center p-12 bg-card rounded-2xl border border-border shadow-premium-lg"
          style={{ 
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(24px)',
            transition: 'opacity 0.6s ease-out, transform 0.6s ease-out'
          }}
        >
          <div className="w-16 h-16 rounded-2xl gradient-cta flex items-center justify-center mx-auto mb-6">
            <Phone className="w-8 h-8 text-white" />
          </div>
          
          <h2 className="text-display-sm lg:text-display font-bold text-foreground mb-4">
            Liever direct bellen?
          </h2>
          
          <p className="text-lg text-muted-foreground mb-8">
            Bel ons op werkdagen tussen 9:00 en 17:00. 
            We kijken samen naar je website en bespreken de mogelijkheden.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <GradientButton size="lg" asChild>
              <a href="tel:+31628354333">
                <Phone className="w-5 h-5" />
                06 28 35 43 33
              </a>
            </GradientButton>
          </div>

          <div className="flex items-center justify-center gap-6 mt-8 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              <span>Ma-Vr 9:00 - 17:00</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-green-500" />
              <span>Gratis advies</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

const Contact = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEOHead 
        title="Gratis Gesprek Plannen | Contact | KlikKlaar"
        description="Plan een vrijblijvend gesprek van 15 minuten. Geen verkooppraatje, gewoon een eerlijk gesprek over jouw online vindbaarheid."
        canonical="https://klikklaar.nl/contact"
      />
      <StructuredData 
        schema={{
          type: "LocalBusiness",
          name: "KlikKlaar",
          description: "Neem contact op met KlikKlaar voor automatische SEO en website optimalisatie.",
          url: "https://klikklaar.nl/contact",
          telephone: "+31628354333",
          email: "Info@klikklaarseo.nl",
          address: {
            streetAddress: "Olieslagerspoort 1",
            addressLocality: "Enkhuizen",
            postalCode: "1601AW",
            addressCountry: "NL",
          },
        }}
      />
      <Header />
      <main>
        <HeroSection />
        <ContactSection />
        <CallToAction />
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
