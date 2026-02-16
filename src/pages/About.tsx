import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { GradientButton } from "@/components/ui/GradientButton";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { CTASection } from "@/components/home/CTASection";
import { SEOHead } from "@/components/SEOHead";
import { StructuredData } from "@/components/StructuredData";
import { 
  Phone,
  Heart,
  Target,
  Users,
  Lightbulb,
  Shield,
  Linkedin,
  ExternalLink
} from "lucide-react";

import teamLuuk from "@/assets/team-luuk.jpg";
import teamRobin from "@/assets/team-robin.jpg";
import teamJuliette from "@/assets/team-juliette.jpg";
import teamHuub from "@/assets/team-huub.jpg";
import teamErik from "@/assets/team-erik.jpg";

const teamMembers = [
  {
    name: "Luuk Wubs",
    role: "Founder & CTO",
    tag: "Builds",
    image: teamLuuk,
    description: "Jonge, gedreven tech leider. Gepassioneerd over het bouwen van schaalbare oplossingen die ondernemers beter vindbaar maken.",
    linkedin: "https://www.linkedin.com/in/luuk-wubs-32a451252/",
  },
  {
    name: "Robin Dennie",
    role: "CMO",
    tag: "Creates",
    image: teamRobin,
    description: "Creatief strateeg met een scherp oog voor marketing. Verantwoordelijk voor merk, groei en klantbeleving.",
    linkedin: "https://www.linkedin.com/in/robindennie024/",
  },
  {
    name: "Juliëtte Welten",
    role: "COO",
    tag: "Directs",
    image: teamJuliette,
    description: "Bureau manager en BI specialist. Het financiële en operationele geweten van KlikKlaarSEO.",
    linkedin: "https://www.linkedin.com/in/juliette-welten-ab566061/",
  },
  {
    name: "Huub Rood",
    role: "Client Manager",
    tag: "Connects",
    image: teamHuub,
    description: "5 jaar ervaring in client management. Jong, ambitieus en altijd bereikbaar voor onze klanten.",
    linkedin: "https://www.linkedin.com/in/huub-rood-199aa82a4/",
  },
  {
    name: "Erik Dijkshoorn",
    role: "Managing Partner",
    tag: "Advises",
    image: teamErik,
    description: "Uitgebreide ervaring in meerdere C-level rollen en algemeen management. Strategisch denker en leadership coach.",
    linkedin: "https://www.linkedin.com/in/erik-dijkshoorn-1a72aa17/",
  },
];

const values = [
  {
    icon: Heart,
    title: "Eerlijk ondernemen",
    description: "Geen verborgen kosten, geen kleine lettertjes. Wat we beloven, maken we waar.",
  },
  {
    icon: Target,
    title: "Resultaatgericht",
    description: "We focussen op wat telt: meer klanten. Geen metrics voor de show.",
  },
  {
    icon: Users,
    title: "Persoonlijk contact",
    description: "Je hebt altijd een vast aanspreekpunt. Geen anonieme support-tickets.",
  },
  {
    icon: Lightbulb,
    title: "Simpel houden",
    description: "Geen jargon, geen ingewikkelde dashboards. Wij maken SEO begrijpelijk.",
  },
];

const stats = [
  { value: "100+", label: "Tevreden klanten" },
  { value: "47%", label: "Gem. groei bezoekers" },
  { value: "4.2", label: "Beoordeling" },
  { value: "2023", label: "Opgericht" },
];

/* ─── Hero ─── */
function HeroSection() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 50);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative pt-32 lg:pt-48 pb-16 lg:pb-28 overflow-hidden bg-[hsl(var(--kk-navy))]">
      <div className="absolute inset-0 -z-0">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] rounded-full bg-[hsl(var(--kk-orange)/0.06)] blur-[120px]" />
      </div>

      <div className="container px-4 sm:px-6 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <span
            className="inline-block text-xs font-semibold text-[hsl(var(--kk-orange))] uppercase tracking-widest mb-4"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? "translateY(0)" : "translateY(12px)",
              transition: "opacity 0.6s ease-out, transform 0.6s ease-out",
            }}
          >
            Over ons
          </span>

          <h1
            className="text-3xl sm:text-4xl lg:text-5xl xl:text-display-lg font-bold text-white mb-4 lg:mb-6"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? "translateY(0)" : "translateY(16px)",
              transition: "opacity 0.6s ease-out 0.1s, transform 0.6s ease-out 0.1s",
            }}
          >
            Wij geloven in{" "}
            <span className="gradient-text">resultaat</span> dat het verschil maakt
          </h1>

          <p
            className="text-base sm:text-lg lg:text-xl text-white/60 mb-8"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? "translateY(0)" : "translateY(16px)",
              transition: "opacity 0.6s ease-out 0.2s, transform 0.6s ease-out 0.2s",
            }}
          >
            KlikKlaarSEO is gebouwd door ondernemers, voor ondernemers. Wij maken SEO
            toegankelijk, begrijpelijk en betaalbaar.
          </p>
        </div>
      </div>
    </section>
  );
}

/* ─── Mission + Stats + Photo ─── */
function MissionSection() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section ref={ref} className="py-24 lg:py-32 bg-background relative overflow-hidden">
      <div className="container px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Content */}
          <div
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? "translateX(0)" : "translateX(-20px)",
              transition: "opacity 0.7s ease-out, transform 0.7s ease-out",
            }}
          >
            <span className="inline-block text-xs font-semibold text-[hsl(var(--kk-orange))] uppercase tracking-widest mb-4">
              Onze missie
            </span>
            <h2 className="text-display-sm lg:text-display font-bold text-foreground mb-6">
              De nieuwe standaard voor{" "}
              <span className="gradient-text">online groei</span>
            </h2>

            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Wij helpen ondernemers beter gevonden te worden. Niet via ingewikkelde
                dashboards of technisch jargon, maar door het werk gewoon goed te doen.
              </p>
              <p>
                Onze aanpak combineert bewezen SEO-strategieën met slimme technologie en
                persoonlijk contact. Het resultaat: meer bezoekers, meer klanten, meer groei.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-8">
              {stats.map((stat, i) => (
                <div
                  key={stat.label}
                  className="text-center lg:text-left"
                  style={{
                    opacity: isVisible ? 1 : 0,
                    transform: isVisible ? "translateY(0)" : "translateY(12px)",
                    transition: `opacity 0.5s ease-out ${0.2 + i * 0.08}s, transform 0.5s ease-out ${0.2 + i * 0.08}s`,
                  }}
                >
                  <div className="text-2xl lg:text-3xl font-bold gradient-text">{stat.value}</div>
                  <div className="text-xs sm:text-sm text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Photo */}
          <div
            className="order-first lg:order-last"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? "translateX(0)" : "translateX(20px)",
              transition: "opacity 0.7s ease-out 0.15s, transform 0.7s ease-out 0.15s",
            }}
          >
            <div className="aspect-[3/4] rounded-2xl overflow-hidden border border-border shadow-premium-lg">
              <img
                src={teamLuuk}
                alt="Luuk Wubs - Founder & CTO KlikKlaarSEO"
                className="w-full h-full object-cover object-top"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── Values ─── */
function ValuesSection() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section ref={ref} className="py-24 lg:py-32 haze-gradient-cool relative overflow-hidden">
      <div className="container px-4 sm:px-6 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-8 lg:mb-16">
          <span
            className="inline-block text-xs font-semibold text-[hsl(var(--kk-orange))] uppercase tracking-widest mb-4"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? "translateY(0)" : "translateY(12px)",
              transition: "opacity 0.6s ease-out, transform 0.6s ease-out",
            }}
          >
            Onze waarden
          </span>
          <h2
            className="text-xl sm:text-2xl lg:text-display font-bold text-foreground"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? "translateY(0)" : "translateY(12px)",
              transition: "opacity 0.6s ease-out 0.1s, transform 0.6s ease-out 0.1s",
            }}
          >
            Waar wij voor{" "}
            <span className="gradient-text">staan</span>
          </h2>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-6">
          {values.map((value, index) => {
            const Icon = value.icon;
            return (
              <div
                key={value.title}
                className="p-4 sm:p-5 lg:p-6 bg-card rounded-xl border border-border shadow-premium-sm hover:shadow-premium hover:border-[hsl(var(--kk-orange)/0.2)] hover:-translate-y-1 transition-all duration-300 text-center"
                style={{
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible ? "translateY(0)" : "translateY(16px)",
                  transition:
                    "opacity 0.5s ease-out, transform 0.5s ease-out, box-shadow 0.3s, border-color 0.3s",
                  transitionDelay: `${index * 75}ms`,
                }}
              >
                <div className="w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 rounded-lg lg:rounded-xl bg-[hsl(var(--kk-orange)/0.1)] flex items-center justify-center mx-auto mb-3 lg:mb-4">
                  <Icon className="w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7 text-[hsl(var(--kk-orange))]" />
                </div>
                <h3 className="font-semibold text-foreground mb-1 lg:mb-2 text-sm sm:text-base">
                  {value.title}
                </h3>
                <p className="text-xs sm:text-sm text-muted-foreground">{value.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ─── Team ─── */
function TeamSection() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section ref={ref} className="py-24 lg:py-32 bg-background relative overflow-hidden">
      <div className="container px-4 sm:px-6">
        <div className="text-center max-w-2xl mx-auto mb-8 lg:mb-16">
          <span
            className="inline-block text-xs font-semibold text-[hsl(var(--kk-orange))] uppercase tracking-widest mb-4"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? "translateY(0)" : "translateY(12px)",
              transition: "opacity 0.6s ease-out, transform 0.6s ease-out",
            }}
          >
            Ons team
          </span>
          <h2
            className="text-xl sm:text-2xl lg:text-display font-bold text-foreground mb-4"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? "translateY(0)" : "translateY(12px)",
              transition: "opacity 0.6s ease-out 0.1s, transform 0.6s ease-out 0.1s",
            }}
          >
            De mensen achter{" "}
            <span className="gradient-text">KlikKlaarSEO</span>
          </h2>
          <p
            className="text-muted-foreground"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? "translateY(0)" : "translateY(12px)",
              transition: "opacity 0.6s ease-out 0.15s, transform 0.6s ease-out 0.15s",
            }}
          >
            KlikKlaarSEO is niet gebouwd door marketeers die gokten op problemen. Het is gebouwd
            door ondernemers die ze jarenlang hebben geleefd.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {teamMembers.map((member, index) => (
            <div
              key={member.name}
              className="group relative bg-card rounded-2xl border border-border shadow-premium-sm hover:shadow-premium-lg hover:border-[hsl(var(--kk-orange)/0.2)] transition-all duration-300 overflow-hidden"
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? "translateY(0)" : "translateY(20px)",
                transition: "opacity 0.6s ease-out, transform 0.6s ease-out, box-shadow 0.3s, border-color 0.3s",
                transitionDelay: `${index * 100}ms`,
              }}
            >
              {/* Photo */}
              <div className="relative aspect-[4/5] overflow-hidden">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover object-top group-hover:scale-[1.03] transition-transform duration-500"
                />
                {/* Tag overlay */}
                <span className="absolute top-4 left-4 px-3 py-1 text-xs font-semibold uppercase tracking-wider bg-[hsl(var(--kk-orange))] text-white rounded-full">
                  {member.tag}
                </span>
                {/* LinkedIn overlay */}
                <a
                  href={member.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute top-4 right-4 w-9 h-9 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-white"
                  aria-label={`${member.name} op LinkedIn`}
                >
                  <Linkedin className="w-4 h-4 text-[hsl(var(--kk-navy))]" />
                </a>
              </div>

              {/* Info */}
              <div className="p-5 lg:p-6">
                <h3 className="text-lg font-bold text-foreground">{member.name}</h3>
                <p className="text-sm font-medium text-[hsl(var(--kk-orange))] mb-2">{member.role}</p>
                <p className="text-sm text-muted-foreground leading-relaxed">{member.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="Over KlikKlaarSEO | SEO voor Ondernemers, door Ondernemers"
        description="Wij snappen ondernemers. Daarom maken we SEO toegankelijk, begrijpelijk en betaalbaar. Geen gedoe, gewoon resultaat. Ontdek ons verhaal."
        canonical="https://klikklaar.nl/over-ons"
      />
      <StructuredData
        schema={{
          type: "LocalBusiness",
          name: "KlikKlaarSEO",
          description: "Automatische SEO en website optimalisatie voor ondernemers. Meer klanten, zonder gedoe.",
          url: "https://klikklaar.nl/over-ons",
          priceRange: "€€",
          aggregateRating: { ratingValue: 4.2, reviewCount: 150 },
        }}
      />
      <Header />
      <main>
        <HeroSection />
        <MissionSection />
        <ValuesSection />
        <TeamSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default About;
