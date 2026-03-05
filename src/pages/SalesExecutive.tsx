import { SalesQualificationFunnel } from "@/components/sales/SalesQualificationFunnel";
import { SEOHead } from "@/components/SEOHead";
import klikklaarLogo from "@/assets/klikklaar-logo.png";
import teamHuub from "@/assets/team-huub.jpg";
import teamLuuk from "@/assets/team-luuk.jpg";
import teamGroup from "@/assets/team-group.jpg";
import { Check, Euro, Users, Rocket, Calendar, X, Search, BarChart3, Zap, TrendingUp } from "lucide-react";
import { useState } from "react";

const SalesExecutive = () => {
  const [showFunnel, setShowFunnel] = useState(false);

  return (
    <>
      <SEOHead
        title="High Performance Sales Opportunity | KlikKlaar × IDEA"
        description="Bouw je eigen inkomstenstroom als sales executive. Geen plafond, geen limiet. Commissiebasis met serieuze upside."
        canonical="/salesexecutive"
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
          <div className="relative max-w-5xl mx-auto px-6 py-20 md:py-28 text-center text-primary-foreground space-y-6">
            <p className="text-sm uppercase tracking-widest opacity-80">KlikKlaar × IDEA</p>
            <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
              High Performance<br />Sales Opportunity
            </h1>
            <p className="text-xl md:text-2xl opacity-90 max-w-2xl mx-auto">
              Bouw je eigen inkomstenstroom. Geen plafond. Geen limiet. Alleen performance.
            </p>
            <button
              onClick={() => setShowFunnel(true)}
              className="inline-flex items-center gap-2 bg-accent text-accent-foreground px-8 py-4 rounded-lg text-lg font-semibold hover:bg-accent/90 transition-colors"
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

        {/* What we sell */}
        <section className="bg-secondary py-16">
          <div className="max-w-5xl mx-auto px-6 space-y-8">
            <h2 className="text-3xl font-bold text-foreground text-center">De producten die je verkoopt</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-card border border-border rounded-xl p-6 space-y-3">
                <h3 className="text-xl font-semibold text-foreground">KlikklaarWEB</h3>
                <p className="text-muted-foreground">Websites die presteren in Google én AI. SEO-first aanpak die bedrijven laat groeien zonder marketinggedoe.</p>
              </div>
              <div className="bg-card border border-border rounded-xl p-6 space-y-3">
                <h3 className="text-xl font-semibold text-foreground">IDEA Digital Equity Firm</h3>
                <p className="text-muted-foreground">Commerciële en digitale systemen die bedrijven schaalbaar maken. Compleet pakket van strategie tot uitvoering.</p>
              </div>
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
                "25% van de recurring fee over de eerste 4 maanden",
                "Uitbetaling zodra klant 4 maanden actief is",
                "Geen vast salaris, wél serieuze upside",
              ].map((item) => (
                <div key={item} className="flex items-start gap-3 bg-card border border-border rounded-lg p-4">
                  <Check className="w-5 h-5 text-accent mt-0.5 shrink-0" />
                  <span className="text-foreground">{item}</span>
                </div>
              ))}
            </div>

            <div className="bg-card border-2 border-accent/30 rounded-xl p-8 space-y-4 max-w-2xl mx-auto">
              <div className="flex items-center gap-2">
                <TrendingUp className="w-6 h-6 text-accent" />
                <h3 className="text-xl font-bold text-foreground">Rekenvoorbeeld</h3>
              </div>
              <div className="space-y-3 text-muted-foreground">
                <p>Stel je sluit <strong className="text-foreground">5 klanten per maand</strong> af (€149/mnd abonnement):</p>
                <ul className="space-y-2 ml-4">
                  <li className="flex items-start gap-2"><Check className="w-4 h-4 text-accent mt-1 shrink-0" /> <span>Per klant: €100 + 4 × €37 recurring = <strong className="text-foreground">€249 totaal</strong></span></li>
                  <li className="flex items-start gap-2"><Check className="w-4 h-4 text-accent mt-1 shrink-0" /> <span>5 klanten/mnd = <strong className="text-foreground">€1.245 per maand</strong></span></li>
                </ul>
                <p className="text-foreground font-medium text-sm bg-accent/5 border border-accent/20 rounded-lg p-3 mt-2">
                  💡 5 klanten is minder dan 2 per week. Eén gesprek per dag met een lokale ondernemer is genoeg. Vrijwel elk MKB-bedrijf herkent het probleem: "ik word niet gevonden in Google."
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Requirements */}
        <section className="bg-secondary py-16">
          <div className="max-w-5xl mx-auto px-6 space-y-8">
            <h2 className="text-3xl font-bold text-foreground text-center">Wat verwachten wij?</h2>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                "Sterke communicatieve vaardigheden",
                "Commerciële drive en resultaatgerichtheid",
                "Zelfstandig kunnen werken",
                "Nederlands en Engels spreken en schrijven",
                "Bereidheid om op commissiebasis te werken",
              ].map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-accent mt-0.5 shrink-0" />
                  <span className="text-muted-foreground">{item}</span>
                </div>
              ))}
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

        {/* Onboarding */}
        <section className="bg-secondary py-16">
          <div className="max-w-5xl mx-auto px-6 space-y-8">
            <h2 className="text-3xl font-bold text-foreground text-center flex items-center justify-center gap-2">
              <Calendar className="w-7 h-7 text-accent" /> Verplichte onboarding
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-card border border-border rounded-xl p-6 space-y-2">
                <h3 className="font-semibold text-foreground">1 live trainingsdag in Nijmegen of Enkhuizen</h3>
                <p className="text-muted-foreground">Alles wat je moet weten om direct te starten. Product, pitch, tools en je eerste klantgesprek oefenen.</p>
              </div>
              <div className="bg-card border border-border rounded-xl p-6 space-y-2">
                <h3 className="font-semibold text-foreground">Elke 2 weken een webinar</h3>
                <p className="text-muted-foreground">Online training van 1 uur om je skills aan te scherpen en van anderen te leren.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Team */}
        <section className="py-16">
          <div className="max-w-5xl mx-auto px-6 space-y-6">
            <h2 className="text-2xl font-bold text-foreground text-center">Je team</h2>
            <div className="flex items-center justify-center gap-12 flex-wrap">
              <div className="text-center space-y-2">
                <img src={teamHuub} alt="Huub" className="w-28 h-28 rounded-full object-cover mx-auto border-4 border-background shadow-lg" />
                <p className="font-semibold text-foreground">Huub</p>
                <p className="text-sm text-muted-foreground">Co-founder, Sales</p>
              </div>
              <div className="text-center space-y-2">
                <img src={teamLuuk} alt="Luuk" className="w-28 h-28 rounded-full object-cover object-[center_20%] mx-auto border-4 border-background shadow-lg" />
                <p className="font-semibold text-foreground">Luuk</p>
                <p className="text-sm text-muted-foreground">Co-founder, Strategie</p>
              </div>
              <div className="text-center space-y-2">
                <div className="w-28 h-28 rounded-full border-4 border-dashed border-accent/40 flex items-center justify-center mx-auto">
                  <Users className="w-8 h-8 text-accent/60" />
                </div>
                <p className="font-semibold text-muted-foreground">+ jij?</p>
                <p className="text-sm text-muted-foreground">Jouw plek in het team</p>
              </div>
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
              <SalesQualificationFunnel variant="executive" />
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default SalesExecutive;
