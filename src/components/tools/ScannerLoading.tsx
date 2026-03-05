import { useEffect, useState } from "react";
import { Globe, Code2, FileBarChart, CheckCircle2, Loader2 } from "lucide-react";
import { Progress } from "@/components/ui/progress";

const STEPS = [
  { label: "Pagina ophalen…", icon: Globe, duration: 1800 },
  { label: "HTML analyseren…", icon: Code2, duration: 2200 },
  { label: "SEO-checks uitvoeren…", icon: FileBarChart, duration: 2000 },
  { label: "Rapport genereren…", icon: CheckCircle2, duration: 1500 },
];

export function ScannerLoading() {
  const [activeStep, setActiveStep] = useState(0);
  const totalDuration = STEPS.reduce((s, step) => s + step.duration, 0);
  const [elapsed, setElapsed] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setElapsed((prev) => Math.min(prev + 50, totalDuration));
    }, 50);
    return () => clearInterval(interval);
  }, [totalDuration]);

  useEffect(() => {
    if (activeStep >= STEPS.length - 1) return;
    const timeout = setTimeout(() => {
      setActiveStep((prev) => prev + 1);
    }, STEPS[activeStep].duration);
    return () => clearTimeout(timeout);
  }, [activeStep]);

  const progress = Math.round((elapsed / totalDuration) * 100);

  return (
    <div className="mt-8 bg-card border border-border rounded-2xl p-6 lg:p-8 animate-in fade-in duration-300">
      <div className="max-w-sm mx-auto space-y-6">
        <Progress value={progress} className="h-2" />

        <div className="space-y-3">
          {STEPS.map((step, i) => {
            const Icon = step.icon;
            const isDone = i < activeStep;
            const isActive = i === activeStep;

            return (
              <div
                key={step.label}
                className={`flex items-center gap-3 text-sm transition-all duration-300 ${
                  isDone
                    ? "text-emerald-500"
                    : isActive
                      ? "text-foreground font-medium"
                      : "text-muted-foreground/40"
                }`}
              >
                {isDone ? (
                  <CheckCircle2 className="w-4 h-4 flex-shrink-0" />
                ) : isActive ? (
                  <Loader2 className="w-4 h-4 flex-shrink-0 animate-spin" />
                ) : (
                  <Icon className="w-4 h-4 flex-shrink-0" />
                )}
                <span>{step.label}</span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
