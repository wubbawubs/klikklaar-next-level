import { SalesQualificationFunnel } from "@/components/sales/SalesQualificationFunnel";
import { SEOHead } from "@/components/SEOHead";
import klikklaarLogo from "@/assets/klikklaar-logo.png";
import teamHuub from "@/assets/team-huub.jpg";
import teamLuuk from "@/assets/team-luuk.jpg";
import teamGroup from "@/assets/team-group.jpg";
import { Check, Euro, GraduationCap, Rocket, Calendar, Users, X, TrendingUp, Search, BarChart3, Zap } from "lucide-react";
import { useState } from "react";

const StudentsLanding = () => {
  const [showFunnel, setShowFunnel] = useState(false);

  return (
    <>
      <SEOHead
        title="Verdien meer dan je bijbaan | KlikKlaar × IDEA"
        description="Als student je eigen inkomstenstroom opbouwen op commissiebasis. Geen plafond, op jouw tempo."
        canonical="/STUDENTSwhoMAKEtheirOWNliving"
        robots="noindex,follow"
      />

      <div className="min-h-screen bg-background">
        <div className="border-b border-border px-6 py-4">
          <img src={klikklaarLogo} alt="KlikKlaar" className="h-8" />
        </div>

        {/* Hero */}
        <section className="relative overflow-hidden min-h-[420px] md:min-h-[500px]">
          <img src={teamGroup} alt="" className="absolute inset-0 w-full h-full object-cover object-top" />
          <div className="absolute inset-0 bg-gradient-to-b from-accent/70 via-accent/60 to-accent/75" />
          <div className="relative max-w-5xl mx-auto px-6 py-20 md:py-28 text-center text-accent-foreground space-y-6">
            <div className="flex items-center justify-center gap-2">
              <GraduationCap className="w-6 h-6" />
              <p className="text-sm uppercase tracking-widest opacity-90">KlikKlaar × IDEA | Voor studenten</p>
            </div>
            <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
              Verdien meer dan<br />je bijbaan
            </h1>
            <p className="text-xl md:text-2xl opacity-90 max-w-2xl mx-auto">
              Op jouw tempo. Naast je studie. Bouw aan een echt commercieel track record.
            </p>
            <button
              onClick={() => setShowFunnel(true)}
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-lg text-lg font-semibold hover:bg-primary/90 transition-colors"
            >
              <Rocket className="w-5 h-5" /> Ik wil meer weten
            </button>
          </div>
        </section>

        {/* Wat is KlikKlaarSEO? */}
        <section className="max-w-5xl mx-auto px-6 py-16 space-y-8">
          <h2 className="text-3xl font-bold text-foreground text-center">Wat verkoop je eigenlijk?</h2>
          <p className="text-lg text-muted-foreground text-center max-w-3xl mx-auto">
            KlikKlaarSEO helpt MKB-bedrijven automatisch gevonden worden in Google en AI-zoekmachines. Geen technische kennis nodig, wij regelen alles. Bedrijven betalen €99 tot €249 per maand en krijgen elke week zichtbaar resultaat.
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { icon: Search, title: "Automatische SEO", desc: "Websites die zichzelf optimaliseren voor Google en AI-zoekmachines zoals ChatGPT." },
              { icon: BarChart3, title: "Wekelijkse rapportages", desc: "Klanten zien elke week hoe hun vindbaarheid verbetert. Concrete resultaten, geen vage beloftes." },
              { icon: Zap, title: "Product verkoopt zichzelf", desc: "Als je het uitlegt, snappen bedrijven direct de waarde. Jij hoeft geen SEO-expert te zijn." },
            ].map((item) => (
              <div key={item.title} className="bg-card border border-border rounded-xl p-6 space-y-3">
                <item.icon className="w-8 h-8 text-accent" />
                <h3 className="text-lg font-semibold text-foreground">{item.title}</h3>
                <p className="text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Why students */}
        <section className="bg-secondary py-16">
          <div className="max-w-5xl mx-auto px-6 space-y-8">
            <h2 className="text-3xl font-bold text-foreground text-center">Waarom dit perfect is als student</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { title: "Flexibel", desc: "Werk wanneer het jou uitkomt. Geen roosters, geen shifts. Combineer het moeiteloos met je studie." },
                { title: "Echt CV-materiaal", desc: "Commerciële ervaring die opvalt bij elke werkgever. Sales, ondernemerschap en klantcontact in één." },
                { title: "Geen plafond", desc: "Hoe meer je verkoopt, hoe meer je verdient. Simpel. Geen uurtje-factuurtje maar echte groei." },
              ].map((item) => (
                <div key={item.title} className="bg-card border border-border rounded-xl p-6 space-y-2">
                  <h3 className="text-lg font-semibold text-foreground">{item.title}</h3>
                  <p className="text-muted-foreground">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Commission + rekenvoorbeeld */}
        <section className="py-16">
          <div className="max-w-5xl mx-auto px-6 space-y-8">
            <h2 className="text-3xl font-bold text-foreground text-center flex items-center justify-center gap-2">
              <Euro className="w-7 h-7 text-accent" /> Wat verdien jij?
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                "€100 per nieuwe klant uit de opstartfee",
                "25% van de recurring fee over de eerste 3 maanden",
                "Uitbetaling zodra klant 3 maanden actief is",
                "Geen vast salaris, wél serieuze upside",
              ].map((item) => (
                <div key={item} className="flex items-start gap-3 bg-card border border-border rounded-lg p-4">
                  <Check className="w-5 h-5 text-accent mt-0.5 shrink-0" />
                  <span className="text-foreground">{item}</span>
                </div>
              ))}
            </div>

            {/* Rekenvoorbeeld */}
            <div className="bg-card border-2 border-accent/30 rounded-xl p-8 space-y-4 max-w-2xl mx-auto">
              <div className="flex items-center gap-2">
                <TrendingUp className="w-6 h-6 text-accent" />
                <h3 className="text-xl font-bold text-foreground">Rekenvoorbeeld</h3>
              </div>
              <div className="space-y-3 text-muted-foreground">
                <p>Stel je sluit <strong className="text-foreground">5 klanten per maand</strong> af op het €149/mnd abonnement:</p>
                <ul className="space-y-2 ml-4">
                  <li className="flex items-start gap-2"><Check className="w-4 h-4 text-accent mt-1 shrink-0" /> <span>5 × €100 opstartfee = <strong className="text-foreground">€500 direct</strong></span></li>
                  <li className="flex items-start gap-2"><Check className="w-4 h-4 text-accent mt-1 shrink-0" /> <span>5 × 25% × €149 × 3 maanden = <strong className="text-foreground">€559 recurring</strong></span></li>
                </ul>
                <p className="text-foreground font-semibold text-lg pt-2">
                  Dat is €1.059 per maand. Na 6 maanden heb je 30 klanten en draai je structureel €2.800+/mnd aan recurring commissie.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Onboarding */}
        <section className="bg-secondary py-16">
          <div className="max-w-5xl mx-auto px-6 space-y-8">
            <h2 className="text-3xl font-bold text-foreground text-center flex items-center justify-center gap-2">
              <Calendar className="w-7 h-7 text-accent" /> Hoe start je?
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-card border border-border rounded-xl p-6 space-y-2">
                <h3 className="font-semibold text-foreground">1 live trainingsdag in Nijmegen of Enkhuizen</h3>
                <p className="text-muted-foreground">Alles wat je moet weten om direct te starten. Product, pitch, tools en je eerste klantgesprek oefenen.</p>
              </div>
              <div className="bg-card border border-border rounded-xl p-6 space-y-2">
                <h3 className="font-semibold text-foreground">Elke 2 weken een online webinar</h3>
                <p className="text-muted-foreground">1 uur training om je skills te verbeteren, vragen te stellen en van anderen te leren.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Waarom KlikKlaar */}
        <section className="py-16">
          <div className="max-w-5xl mx-auto px-6 space-y-8">
            <h2 className="text-3xl font-bold text-foreground text-center">Waarom bedrijven KlikKlaar kiezen</h2>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                "90% van de MKB-bedrijven is slecht vindbaar in Google",
                "AI-zoekmachines worden steeds belangrijker, maar niemand is er klaar voor",
                "Wij lossen dat op voor €99-249/mnd, alles inbegrepen",
                "Klanten krijgen wekelijks bewijs dat het werkt",
                "Geen lange contracten, maandelijks opzegbaar",
                "Jij verkoopt iets wat bedrijven echt nodig hebben",
              ].map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-accent mt-0.5 shrink-0" />
                  <span className="text-muted-foreground">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Team */}
        <section className="bg-secondary py-12">
          <div className="max-w-5xl mx-auto px-6 flex items-center justify-center gap-12 flex-wrap">
            <div className="text-center space-y-2">
              <img src={teamHuub} alt="Huub" className="w-28 h-28 rounded-full object-cover mx-auto border-4 border-background shadow-lg" />
              <p className="font-semibold text-foreground">Huub</p>
            </div>
            <div className="text-center space-y-2">
              <img src={teamLuuk} alt="Luuk" className="w-28 h-28 rounded-full object-cover object-[center_20%] mx-auto border-4 border-background shadow-lg" />
              <p className="font-semibold text-foreground">Luuk</p>
            </div>
            <div className="text-center space-y-2">
              <div className="w-28 h-28 rounded-full border-4 border-dashed border-accent/40 flex items-center justify-center mx-auto">
                <Users className="w-8 h-8 text-accent/60" />
              </div>
              <p className="font-semibold text-muted-foreground">+ jij?</p>
            </div>
          </div>
        </section>

        {/* Sticky CTA */}
        <div className="fixed bottom-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-t border-border px-6 py-3 flex items-center justify-center">
          <button
            onClick={() => setShowFunnel(true)}
            className="inline-flex items-center gap-2 bg-accent text-accent-foreground px-8 py-3 rounded-lg font-semibold hover:bg-accent/90 transition-colors"
          >
            <Rocket className="w-5 h-5" /> Ik wil meer weten
          </button>
        </div>

        <div className="h-16" />

        {/* Popup Funnel */}
        {showFunnel && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/50 backdrop-blur-sm p-4" onClick={() => setShowFunnel(false)}>
            <div className="relative bg-card border border-border rounded-2xl shadow-xl w-full max-w-md overflow-hidden max-h-[90vh] overflow-y-auto" onClick={(e) => e.stopPropagation()}>
              <button onClick={() => setShowFunnel(false)} className="absolute top-3 right-3 z-10 p-1 rounded-full hover:bg-muted transition-colors">
                <X className="w-5 h-5 text-muted-foreground" />
              </button>
              <SalesQualificationFunnel variant="student" />
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default StudentsLanding;
