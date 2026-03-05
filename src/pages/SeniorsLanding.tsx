import { SalesQualificationFunnel } from "@/components/sales/SalesQualificationFunnel";
import { SEOHead } from "@/components/SEOHead";
import klikklaarLogo from "@/assets/klikklaar-logo.png";
import teamHuub from "@/assets/team-huub.jpg";
import teamLuuk from "@/assets/team-luuk.jpg";
import teamGroup from "@/assets/team-group.jpg";
import { Check, Euro, Award, Rocket, Calendar, Users } from "lucide-react";
import { useState } from "react";

const SeniorsLanding = () => {
  const [showFunnel, setShowFunnel] = useState(false);

  return (
    <>
      <SEOHead
        title="Ervaring is je grootste asset | KlikKlaar × IDEA"
        description="50+? Zet je ervaring in als sales executive. Bouw een extra inkomstenstroom op commissiebasis."
        canonical="/SENIORSwhoMAKEtheirOWNliving"
        robots="noindex,follow"
      />

      <div className="min-h-screen bg-background">
        <div className="border-b border-border px-6 py-4">
          <img src={klikklaarLogo} alt="KlikKlaar" className="h-8" />
        </div>

        {/* Hero */}
        <section className="relative overflow-hidden min-h-[420px] md:min-h-[500px]">
          <img src={teamGroup} alt="" className="absolute inset-0 w-full h-full object-cover object-top" />
          <div className="absolute inset-0 bg-gradient-to-b from-primary/85 via-primary/75 to-primary/90" />
          <div className="relative max-w-5xl mx-auto px-6 py-20 md:py-28 text-center text-primary-foreground space-y-6">
            <div className="flex items-center justify-center gap-2">
              <Award className="w-6 h-6" />
              <p className="text-sm uppercase tracking-widest opacity-90">KlikKlaar × IDEA | Voor 50+</p>
            </div>
            <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
              Ervaring is je<br />grootste asset
            </h1>
            <p className="text-xl md:text-2xl opacity-90 max-w-2xl mx-auto">
              Zet het in. Bouw een extra inkomstenstroom op jouw manier en jouw tempo.
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

        {/* Why seniors */}
        <section className="max-w-5xl mx-auto px-6 py-16 space-y-8">
          <h2 className="text-3xl font-bold text-foreground text-center">Waarom dit perfect past bij jouw ervaring</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: "Netwerk benutten", desc: "Jouw jarenlange contacten zijn goud waard in sales." },
              { title: "Eigen tempo", desc: "Geen baas, geen targets van bovenaf. Jij bepaalt het ritme." },
              { title: "Serieuze verdiensten", desc: "Geen plafond. Je ervaring vertaalt zich direct naar resultaat." },
            ].map((item) => (
              <div key={item.title} className="bg-card border border-border rounded-xl p-6 space-y-2">
                <h3 className="text-lg font-semibold text-foreground">{item.title}</h3>
                <p className="text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Commission */}
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

        {/* Onboarding */}
        <section className="max-w-5xl mx-auto px-6 py-16 space-y-8">
          <h2 className="text-3xl font-bold text-foreground text-center flex items-center justify-center gap-2">
            <Calendar className="w-7 h-7 text-accent" /> Verplichte onboarding
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-card border border-border rounded-xl p-6 space-y-2">
              <h3 className="font-semibold text-foreground">1 live trainingsdag in Nijmegen</h3>
              <p className="text-muted-foreground">Persoonlijke kennismaking en alles wat je moet weten.</p>
            </div>
            <div className="bg-card border border-border rounded-xl p-6 space-y-2">
              <h3 className="font-semibold text-foreground">Elke 2 weken een online webinar</h3>
              <p className="text-muted-foreground">1 uur training om scherp te blijven.</p>
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

        {/* Funnel */}
        <section id="funnel" className="max-w-2xl mx-auto px-6 py-16">
          <div className="bg-card border border-border rounded-2xl shadow-lg overflow-hidden">
            {showFunnel ? (
              <SalesQualificationFunnel variant="senior" />
            ) : (
              <div className="text-center py-12 space-y-4">
                <h3 className="text-2xl font-bold text-foreground">Klaar om je ervaring in te zetten?</h3>
                <p className="text-muted-foreground">3 korte vragen, dan bellen wij jou.</p>
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

export default SeniorsLanding;
