import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { GradientButton } from "@/components/ui/GradientButton";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { 
  Phone,
  Mail,
  MapPin,
  Clock,
  MessageCircle,
  Send,
  CheckCircle
} from "lucide-react";
import { useState, useEffect } from "react";
import { useToast } from "@/hooks/use-toast";

const CALENDLY_URL = "https://calendly.com/luuk-klikklaar/kennismakingsgesprek?month=2025-12";

const contactMethods = [
  {
    icon: Phone,
    title: "Bel ons",
    description: "Ma-Vr 9:00 - 17:00",
    value: "+31 (0)20 123 4567",
    href: "tel:+31201234567",
  },
  {
    icon: Mail,
    title: "E-mail",
    description: "Reactie binnen 24 uur",
    value: "info@klikklaar.nl",
    href: "mailto:info@klikklaar.nl",
  },
  {
    icon: MapPin,
    title: "Adres",
    description: "Op afspraak",
    value: "Amsterdam, Nederland",
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
    answer: "Ja! Via het formulier of telefonisch kun je een vrijblijvend kennismakingsgesprek van 15 minuten plannen.",
  },
  {
    question: "Ik heb een technisch probleem, waar kan ik terecht?",
    answer: "Bestaande klanten kunnen direct contact opnemen met hun accountmanager. Nieuwe vragen kun je via dit formulier stellen.",
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

      <div className="container px-4 sm:px-6 text-center">
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
          className="text-2xl sm:text-3xl lg:text-display-xl font-bold text-foreground mb-4 lg:mb-6 max-w-3xl mx-auto"
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
          className="text-base sm:text-lg lg:text-xl text-muted-foreground max-w-2xl mx-auto"
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
    </section>
  );
}

function ContactForm() {
  const { ref, isVisible } = useScrollReveal();
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    toast({
      title: "Bericht verzonden!",
      description: "We nemen zo snel mogelijk contact met je op.",
    });
    
    setFormData({ name: "", email: "", phone: "", company: "", message: "" });
    setIsSubmitting(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

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

          {/* Form */}
          <div 
            className="lg:col-span-3"
            style={{ 
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateX(0)' : 'translateX(20px)',
              transition: 'opacity 0.6s ease-out 0.15s, transform 0.6s ease-out 0.15s'
            }}
          >
            <div className="p-8 bg-card rounded-2xl border border-border shadow-premium-lg">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl gradient-cta flex items-center justify-center">
                  <MessageCircle className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">Stuur een bericht</h3>
                  <p className="text-sm text-muted-foreground">We reageren binnen 24 uur</p>
                </div>
              </div>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                      Naam *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-kk-orange/20 focus:border-kk-orange transition-colors"
                      placeholder="Je naam"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                      E-mail *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-kk-orange/20 focus:border-kk-orange transition-colors"
                      placeholder="je@email.nl"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                      Telefoon
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-kk-orange/20 focus:border-kk-orange transition-colors"
                      placeholder="06 1234 5678"
                    />
                  </div>
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-foreground mb-2">
                      Bedrijf
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-kk-orange/20 focus:border-kk-orange transition-colors"
                      placeholder="Je bedrijfsnaam"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                    Bericht *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-kk-orange/20 focus:border-kk-orange transition-colors resize-none"
                    placeholder="Vertel ons waar we je mee kunnen helpen..."
                  />
                </div>

                <GradientButton type="submit" size="lg" className="w-full" disabled={isSubmitting}>
                  {isSubmitting ? (
                    <>Verzenden...</>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      Verstuur bericht
                    </>
                  )}
                </GradientButton>

                <p className="text-xs text-muted-foreground text-center">
                  Door dit formulier te versturen ga je akkoord met ons privacybeleid.
                </p>
              </form>
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
            Plan direct een vrijblijvend kennismakingsgesprek van 15 minuten. 
            We kijken samen naar je website en bespreken de mogelijkheden.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <GradientButton size="lg" asChild>
              <a href={CALENDLY_URL} target="_blank" rel="noopener noreferrer">
                <Phone className="w-5 h-5" />
                Plan een vrijblijvend gesprek
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
      <Header />
      <main>
        <HeroSection />
        <ContactForm />
        <CallToAction />
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
