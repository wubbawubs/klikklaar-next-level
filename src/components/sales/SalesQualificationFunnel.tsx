import { useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Check, Phone, ArrowRight, ArrowLeft } from "lucide-react";

interface Props {
  variant: "executive" | "student" | "senior";
}

const questions = [
  { key: "q1", label: "Heb je een rekeningnummer?" },
  { key: "q2", label: "Ben je student, 50+ of anders?" },
  { key: "q3", label: "Wil je van je bijbaan je hoofd-inkomstenbron maken?" },
];

export const SalesQualificationFunnel = ({ variant }: Props) => {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState({ q1: false, q2: false, q3: false });
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [done, setDone] = useState(false);
  const [error, setError] = useState("");

  const handleAnswer = (answer: boolean) => {
    const key = questions[step].key as "q1" | "q2" | "q3";
    setAnswers((prev) => ({ ...prev, [key]: answer }));
    setStep((s) => s + 1);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !phone.trim()) return;
    setSubmitting(true);
    setError("");

    const { error: dbError } = await supabase.from("sales_leads" as any).insert({
      name: name.trim(),
      phone: phone.trim(),
      landing_page: variant,
      q1_rekeningnummer: answers.q1,
      q2_doelgroep: answers.q2,
      q3_hoofdinkomen: answers.q3,
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
        <div className="w-16 h-16 rounded-full bg-green-500/10 flex items-center justify-center mx-auto">
          <Check className="w-8 h-8 text-green-500" />
        </div>
        <h3 className="text-2xl font-bold text-foreground">Bedankt, {name}!</h3>
        <p className="text-muted-foreground text-lg max-w-md mx-auto">
          We bellen je binnen 24 uur op <strong>{phone}</strong> om alles te bespreken.
        </p>
      </div>
    );
  }

  // Questions (step 0-2)
  if (step < 3) {
    return (
      <div className="text-center py-10 px-6 space-y-8">
        <div className="flex gap-2 justify-center">
          {questions.map((_, i) => (
            <div
              key={i}
              className={`h-1.5 w-12 rounded-full transition-colors ${
                i <= step ? "bg-accent" : "bg-border"
              }`}
            />
          ))}
        </div>
        <p className="text-sm text-muted-foreground uppercase tracking-wider">
          Vraag {step + 1} van 3
        </p>
        <h3 className="text-2xl md:text-3xl font-bold text-foreground">
          {questions[step].label}
        </h3>
        <div className="flex gap-4 justify-center">
          <Button
            size="lg"
            className="text-lg px-10 py-6 bg-accent hover:bg-accent/90 text-accent-foreground"
            onClick={() => handleAnswer(true)}
          >
            Ja
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="text-lg px-10 py-6"
            onClick={() => handleAnswer(false)}
          >
            Nee
          </Button>
        </div>
        {step > 0 && (
          <button
            onClick={() => setStep((s) => s - 1)}
            className="text-sm text-muted-foreground hover:text-foreground flex items-center gap-1 mx-auto"
          >
            <ArrowLeft className="w-3 h-3" /> Vorige vraag
          </button>
        )}
      </div>
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
        <Input
          placeholder="Je naam"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          className="h-12 text-base"
        />
        <Input
          placeholder="Je telefoonnummer"
          type="tel"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          required
          className="h-12 text-base"
        />
        <Button
          type="submit"
          disabled={submitting}
          className="w-full h-12 text-base bg-accent hover:bg-accent/90 text-accent-foreground"
        >
          {submitting ? "Verzenden..." : "Bel me terug"}
          {!submitting && <ArrowRight className="w-4 h-4 ml-2" />}
        </Button>
        {error && <p className="text-sm text-destructive text-center">{error}</p>}
      </form>
    </div>
  );
};
