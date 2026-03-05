import { SalesQualificationFunnel } from "@/components/sales/SalesQualificationFunnel";
import { SEOHead } from "@/components/SEOHead";
import klikklaarLogo from "@/assets/klikklaar-logo.png";
import teamHuub from "@/assets/team-huub.jpg";
import teamLuuk from "@/assets/team-luuk.jpg";
import teamGroup from "@/assets/team-group.jpg";
import { Check, Euro, GraduationCap, Rocket, Calendar, Users } from "lucide-react";
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
              onClick={() => {
                setShowFunnel(true);
                document.getElementById("funnel")?.scrollIntoView({ behavior: "smooth" });
              }}
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-lg text-lg font-semibold hover:bg-primary/90 transition-colors"
            >
              <Rocket className="w-5 h-5" /> Ik wil meer weten
            </button>
          </div>
        </section>

        {/* Why students */}
        <section className="max-w-5xl mx-auto px-6 py-16 space-y-8">
          <h2 className="text-3xl font-bold text-foreground text-center">Waarom dit perfect is als student</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: "Flexibel", desc: "Werk wanneer het jou uitkomt. Geen roosters, geen shifts." },
              { title: "Echt CV-materiaal", desc: "Commerciële ervaring die opvalt bij elke werkgever." },
              { title: "Geen plafond", desc: "Hoe meer je verkoopt, hoe meer je verdient. Simpel." },
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
            <Calendar className="w-7 h-7 text-accent" /> Hoe start je?
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-card border border-border rounded-xl p-6 space-y-2">
              <h3 className="font-semibold text-foreground">1 live trainingsdag in Nijmegen</h3>
              <p className="text-muted-foreground">Alles wat je moet weten om direct te starten.</p>
            </div>
            <div className="bg-card border border-border rounded-xl p-6 space-y-2">
              <h3 className="font-semibold text-foreground">Elke 2 weken een online webinar</h3>
              <p className="text-muted-foreground">1 uur training om je skills te verbeteren.</p>
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
              <SalesQualificationFunnel variant="student" />
            ) : (
              <div className="text-center py-12 space-y-4">
                <h3 className="text-2xl font-bold text-foreground">Klaar om te beginnen?</h3>
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
        {/* Sticky CTA */}
        <div className="fixed bottom-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-t border-border px-6 py-3 flex items-center justify-center">
          <button
            onClick={() => {
              setShowFunnel(true);
              document.getElementById("funnel")?.scrollIntoView({ behavior: "smooth" });
            }}
            className="inline-flex items-center gap-2 bg-accent text-accent-foreground px-8 py-3 rounded-lg font-semibold hover:bg-accent/90 transition-colors"
          >
            <Rocket className="w-5 h-5" /> Ik wil meer weten
          </button>
        </div>

        {/* Bottom spacer for sticky CTA */}
        <div className="h-16" />
      </div>
    </>
  );
};

export default StudentsLanding;
