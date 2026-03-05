import { useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Check, Phone, ArrowRight, ArrowLeft } from "lucide-react";

interface Props {
  variant: "executive" | "student" | "senior";
}

const Q2_OPTIONS = ["Student", "50+", "Anders"];

export const SalesQualificationFunnel = ({ variant }: Props) => {
  const [step, setStep] = useState(0);
  const [q1, setQ1] = useState(false);
  const [q2, setQ2] = useState("");
  const [q2Anders, setQ2Anders] = useState("");
  const [q3, setQ3] = useState(false);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [done, setDone] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !phone.trim()) return;
    setSubmitting(true);
    setError("");

    const { error: dbError } = await supabase.from("sales_leads" as any).insert({
      name: name.trim(),
      phone: phone.trim(),
      landing_page: variant,
      q1_rekeningnummer: q1,
      q2_doelgroep: q2 === "Anders" ? q2Anders.trim() || "Anders" : q2,
      q3_hoofdinkomen: q3,
    });

    if (dbError) {
      setError("Er ging iets mis. Probeer het opnieuw.");
      setSubmitting(false);
      return;
    }
    setDone(true);
    setSubmitting(false);
  };

  if (done) {
    return (
      <div className="text-center py-12 px-6 space-y-4">
        <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mx-auto">
          <Check className="w-8 h-8 text-accent" />
        </div>
        <h3 className="text-2xl font-bold text-foreground">Bedankt, {name}!</h3>
        <p className="text-muted-foreground text-lg max-w-md mx-auto">
          We bellen je binnen 24 uur op <strong>{phone}</strong> om alles te bespreken.
        </p>
      </div>
    );
  }

  // Step 0: Q1 - Ja/Nee
  if (step === 0) {
    return (
      <FunnelStep step={0} totalSteps={3} onBack={undefined}>
        <h3 className="text-2xl md:text-3xl font-bold text-foreground">
          Heb je een rekeningnummer?
        </h3>
        <div className="flex gap-4 justify-center">
          <Button size="lg" className="text-lg px-10 py-6 bg-accent hover:bg-accent/90 text-accent-foreground" onClick={() => { setQ1(true); setStep(1); }}>Ja</Button>
          <Button size="lg" variant="outline" className="text-lg px-10 py-6" onClick={() => { setQ1(false); setStep(1); }}>Nee</Button>
        </div>
      </FunnelStep>
    );
  }

  // Step 1: Q2 - Multiple choice
  if (step === 1) {
    return (
      <FunnelStep step={1} totalSteps={3} onBack={() => setStep(0)}>
        <h3 className="text-2xl md:text-3xl font-bold text-foreground">
          Wat beschrijft jou het beste?
        </h3>
        <div className="flex flex-col gap-3 max-w-xs mx-auto">
          {Q2_OPTIONS.map((option) => (
            <Button
              key={option}
              size="lg"
              variant={q2 === option ? "default" : "outline"}
              className={`text-lg py-6 ${q2 === option ? "bg-accent hover:bg-accent/90 text-accent-foreground" : ""}`}
              onClick={() => {
                setQ2(option);
                if (option !== "Anders") setStep(2);
              }}
            >
              {option}
            </Button>
          ))}
          {q2 === "Anders" && (
            <div className="space-y-3">
              <Input
                placeholder="Namelijk..."
                value={q2Anders}
                onChange={(e) => setQ2Anders(e.target.value)}
                className="h-12 text-base"
              />
              <Button
                size="lg"
                className="w-full text-lg py-6 bg-accent hover:bg-accent/90 text-accent-foreground"
                onClick={() => setStep(2)}
              >
                Verder <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
          )}
        </div>
      </FunnelStep>
    );
  }

  // Step 2: Q3 - Ja/Nee
  if (step === 2) {
    return (
      <FunnelStep step={2} totalSteps={3} onBack={() => setStep(1)}>
        <h3 className="text-2xl md:text-3xl font-bold text-foreground">
          Wil je van je bijbaan je hoofd-inkomstenbron maken?
        </h3>
        <div className="flex gap-4 justify-center">
          <Button size="lg" className="text-lg px-10 py-6 bg-accent hover:bg-accent/90 text-accent-foreground" onClick={() => { setQ3(true); setStep(3); }}>Ja</Button>
          <Button size="lg" variant="outline" className="text-lg px-10 py-6" onClick={() => { setQ3(false); setStep(3); }}>Nee</Button>
        </div>
      </FunnelStep>
    );
  }

  // Step 3: Contact form
  return (
    <div className="py-10 px-6 max-w-md mx-auto space-y-6">
      <div className="text-center space-y-2">
        <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center mx-auto">
          <Phone className="w-6 h-6 text-accent" />
        </div>
        <h3 className="text-2xl font-bold text-foreground">
          Top! Laat je gegevens achter
        </h3>
        <p className="text-muted-foreground">
          We bellen je binnen 24 uur om alles door te nemen.
        </p>
      </div>
      <form onSubmit={handleSubmit} className="space-y-4">
        <Input placeholder="Je naam" value={name} onChange={(e) => setName(e.target.value)} required className="h-12 text-base" />
        <Input placeholder="Je telefoonnummer" type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} required className="h-12 text-base" />
        <Button type="submit" disabled={submitting} className="w-full h-12 text-base bg-accent hover:bg-accent/90 text-accent-foreground">
          {submitting ? "Verzenden..." : "Bel me terug"}
          {!submitting && <ArrowRight className="w-4 h-4 ml-2" />}
        </Button>
        {error && <p className="text-sm text-destructive text-center">{error}</p>}
      </form>
    </div>
  );
};

// Shared step wrapper
const FunnelStep = ({ step, totalSteps, onBack, children }: { step: number; totalSteps: number; onBack?: () => void; children: React.ReactNode }) => (
  <div className="text-center py-10 px-6 space-y-8">
    <div className="flex gap-2 justify-center">
      {Array.from({ length: totalSteps }).map((_, i) => (
        <div key={i} className={`h-1.5 w-12 rounded-full transition-colors ${i <= step ? "bg-accent" : "bg-border"}`} />
      ))}
    </div>
    <p className="text-sm text-muted-foreground uppercase tracking-wider">
      Vraag {step + 1} van {totalSteps}
    </p>
    {children}
    {onBack && (
      <button onClick={onBack} className="text-sm text-muted-foreground hover:text-foreground flex items-center gap-1 mx-auto">
        <ArrowLeft className="w-3 h-3" /> Vorige vraag
      </button>
    )}
  </div>
);
