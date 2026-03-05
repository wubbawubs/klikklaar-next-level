import { useState } from "react";
import { Input } from "@/components/ui/input";
import { GradientButton } from "@/components/ui/GradientButton";
import { Lock, Mail, Phone } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { Link } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";

interface ResultsGateProps {
  toolSlug: string;
  urlChecked: string;
  remainingChecks: number;
  onUnlock: () => void;
}

export function ResultsGate({ toolSlug, urlChecked, remainingChecks, onUnlock }: ResultsGateProps) {
  const [email, setEmail] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const trimmed = email.trim();
    if (!trimmed || !trimmed.includes("@")) return;

    setSubmitting(true);
    try {
      const { error } = await supabase.from("tool_leads" as any).insert({
        email: trimmed,
        tool_slug: toolSlug,
        url_checked: urlChecked,
      } as any);

      if (error) throw error;

      toast({
        title: "Rapport ontgrendeld!",
        description: "Je volledige rapport is nu zichtbaar.",
      });
      onUnlock();
    } catch {
      toast({
        title: "Er ging iets mis",
        description: "Probeer het opnieuw.",
        variant: "destructive",
      });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="bg-card border-2 border-accent/30 rounded-2xl p-6 lg:p-8 text-center">
      <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-4">
        <Lock className="w-6 h-6 text-accent" />
      </div>
      <h3 className="text-lg font-bold text-foreground mb-2">
        Nog {remainingChecks} checks beschikbaar
      </h3>
      <p className="text-sm text-muted-foreground mb-6 max-w-md mx-auto">
        Vul je e-mail in om het volledige rapport te zien, of plan direct een gesprek met onze SEO-experts.
      </p>

      <form onSubmit={handleSubmit} className="flex gap-3 max-w-sm mx-auto mb-4">
        <div className="relative flex-1">
          <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <Input
            type="email"
            placeholder="je@email.nl"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="pl-9"
            disabled={submitting}
            required
          />
        </div>
        <GradientButton type="submit" disabled={submitting || !email.trim()}>
          Ontgrendel
        </GradientButton>
      </form>

      <div className="flex items-center gap-3 justify-center text-sm text-muted-foreground">
        <span>of</span>
      </div>

      <GradientButton variant="outline" className="mt-4" asChild>
        <Link to="/contact">
          <Phone className="w-4 h-4" />
          Laat een expert kijken
        </Link>
      </GradientButton>
    </div>
  );
}
