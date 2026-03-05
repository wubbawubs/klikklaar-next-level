import { SalesQualificationFunnel } from "@/components/sales/SalesQualificationFunnel";
import { SEOHead } from "@/components/SEOHead";
import klikklaarLogo from "@/assets/klikklaar-logo.png";
import teamHuub from "@/assets/team-huub.jpg";
import teamLuuk from "@/assets/team-luuk.jpg";
import teamGroup from "@/assets/team-group.jpg";
import { Check, Euro, Users, Rocket, Calendar } from "lucide-react";
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
        {/* Nav bar */}
        <div className="border-b border-border px-6 py-4">
          <img src={klikklaarLogo} alt="KlikKlaar" className="h-8" />
        </div>

        {/* Hero */}
        <section className="relative overflow-hidden min-h-[420px] md:min-h-[500px]">
          <img src={teamGroup} alt="" className="absolute inset-0 w-full h-full object-cover object-top" />
          <div className="absolute inset-0 bg-gradient-to-b from-accent/85 via-accent/70 to-accent/90" />
          <div className="relative max-w-5xl mx-auto px-6 py-20 md:py-28 text-center text-primary-foreground space-y-6">
            <p className="text-sm uppercase tracking-widest opacity-80">KlikKlaar × IDEA</p>
            <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
              High Performance<br />Sales Opportunity
            </h1>
            <p className="text-xl md:text-2xl opacity-90 max-w-2xl mx-auto">
              Bouw je eigen inkomstenstroom. Geen plafond. Geen limiet. Alleen performance.
            </p>
            <button
              onClick={() => {
                setShowFunnel(true);
                document.getElementById("funnel")?.scrollIntoView({ behavior: "smooth" });
              }}
              className="inline-flex items-center gap-2 bg-accent text-accent-foreground px-8 py-4 rounded-lg text-lg font-semibold hover:bg-accent/90 transition-colors"
            >
              <Rocket className="w-5 h-5" /> Ik wil meer weten
            </button>
          </div>
        </section>

        {/* What we sell */}
        <section className="max-w-5xl mx-auto px-6 py-16 space-y-8">
          <h2 className="text-3xl font-bold text-foreground text-center">Wat verkopen we?</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-card border border-border rounded-xl p-6 space-y-3">
              <h3 className="text-xl font-semibold text-foreground">KlikklaarWEB</h3>
              <p className="text-muted-foreground">Websites die presteren in Google én AI. SEO-first aanpak die bedrijven laat groeien.</p>
            </div>
            <div className="bg-card border border-border rounded-xl p-6 space-y-3">
              <h3 className="text-xl font-semibold text-foreground">IDEA Digital Equity Firm</h3>
              <p className="text-muted-foreground">Commerciële en digitale systemen die bedrijven schaalbaar maken.</p>
            </div>
          </div>
        </section>

        {/* Commission structure */}
        <section className="bg-secondary py-16">
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
          </div>
        </section>

        {/* Requirements */}
        <section className="max-w-5xl mx-auto px-6 py-16 space-y-8">
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
        </section>

        {/* Onboarding */}
        <section className="bg-secondary py-16">
          <div className="max-w-5xl mx-auto px-6 space-y-8">
            <h2 className="text-3xl font-bold text-foreground text-center flex items-center justify-center gap-2">
              <Calendar className="w-7 h-7 text-accent" /> Verplichte onboarding
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-card border border-border rounded-xl p-6 space-y-2">
                <h3 className="font-semibold text-foreground">1 live trainingsdag</h3>
                <p className="text-muted-foreground">Op kantoor in Nijmegen. Alles wat je moet weten om direct te starten.</p>
              </div>
              <div className="bg-card border border-border rounded-xl p-6 space-y-2">
                <h3 className="font-semibold text-foreground">Elke 2 weken een webinar</h3>
                <p className="text-muted-foreground">Online training van 1 uur om je skills aan te scherpen.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Team */}
        <section className="max-w-5xl mx-auto px-6 py-16">
          <div className="flex items-center justify-center gap-12 flex-wrap">
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

        {/* Funnel */}
        <section id="funnel" className="max-w-2xl mx-auto px-6 py-16">
          <div className="bg-card border border-border rounded-2xl shadow-lg overflow-hidden">
            {showFunnel ? (
              <SalesQualificationFunnel variant="executive" />
            ) : (
              <div className="text-center py-12 space-y-4">
                <h3 className="text-2xl font-bold text-foreground">Klaar om te starten?</h3>
                <p className="text-muted-foreground">Beantwoord 3 korte vragen en we bellen je.</p>
                <button
                  onClick={() => setShowFunnel(true)}
                  className="inline-flex items-center gap-2 bg-accent text-accent-foreground px-8 py-4 rounded-lg text-lg font-semibold hover:bg-accent/90 transition-colors"
                >
                  Start hier
                </button>
              </div>
            )}
          </div>
        </section>
      </div>
    </>
  );
};

export default SalesExecutive;
