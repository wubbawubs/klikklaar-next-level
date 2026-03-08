import { useState } from "react";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { GradientButton } from "@/components/ui/GradientButton";
import { CheckCircle2, AlertTriangle, XCircle, Copy, Check } from "lucide-react";
import {
  TextToolType,
  TEXT_TOOL_CONFIG,
  processTextTool,
  type TextToolResult,
} from "./text-processors";

const statusIcon = (status?: "pass" | "warning" | "fail") => {
  switch (status) {
    case "pass":
      return <CheckCircle2 className="w-5 h-5 text-emerald-500 flex-shrink-0" />;
    case "warning":
      return <AlertTriangle className="w-5 h-5 text-amber-500 flex-shrink-0" />;
    case "fail":
      return <XCircle className="w-5 h-5 text-destructive flex-shrink-0" />;
    default:
      return <CheckCircle2 className="w-5 h-5 text-muted-foreground/40 flex-shrink-0" />;
  }
};

function ScoreRing({ score }: { score: number }) {
  const radius = 54;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (score / 100) * circumference;
  const color =
    score >= 80 ? "hsl(var(--accent))" : score >= 50 ? "hsl(35 92% 50%)" : "hsl(var(--destructive))";

  return (
    <div className="relative w-32 h-32 mx-auto">
      <svg className="w-full h-full -rotate-90" viewBox="0 0 120 120">
        <circle cx="60" cy="60" r={radius} fill="none" stroke="hsl(var(--border))" strokeWidth="8" />
        <circle
          cx="60"
          cy="60"
          r={radius}
          fill="none"
          stroke={color}
          strokeWidth="8"
          strokeLinecap="round"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          className="transition-all duration-1000 ease-out"
        />
      </svg>
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <span className="text-3xl font-bold text-foreground">{score}</span>
        <span className="text-xs text-muted-foreground">/100</span>
      </div>
    </div>
  );
}

interface TextToolScannerProps {
  toolSlug: string;
  toolName: string;
  toolType: TextToolType;
}

export function TextToolScanner({ toolSlug, toolName, toolType }: TextToolScannerProps) {
  const [text, setText] = useState("");
  const [keyword, setKeyword] = useState("");
  const [result, setResult] = useState<TextToolResult | null>(null);
  const [copied, setCopied] = useState(false);

  const config = TEXT_TOOL_CONFIG[toolType];

  const handleProcess = (e: React.FormEvent) => {
    e.preventDefault();
    if (!text.trim()) return;
    const processed = processTextTool(toolType, text, keyword || undefined);
    setResult(processed);
  };

  const handleCopy = async (content: string) => {
    await navigator.clipboard.writeText(content);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="py-12 lg:py-16">
      <div className="container px-4 sm:px-6">
        <div className="max-w-3xl mx-auto">
          {/* Input form */}
          <div className="bg-card border border-border rounded-2xl p-6 lg:p-8">
            <h2 className="text-xl sm:text-2xl font-bold text-foreground mb-2 text-center">
              {toolName}
            </h2>
            <p className="text-muted-foreground text-center mb-6 text-sm">
              {config.inputLabel} — direct resultaat, geen account nodig
            </p>
            <form onSubmit={handleProcess} className="space-y-4">
              <Textarea
                placeholder={config.placeholder}
                value={text}
                onChange={(e) => setText(e.target.value)}
                rows={config.rows}
                className="resize-y font-mono text-sm"
              />
              {config.hasKeywordInput && (
                <Input
                  type="text"
                  placeholder="Focus zoekwoord (optioneel)"
                  value={keyword}
                  onChange={(e) => setKeyword(e.target.value)}
                />
              )}
              <GradientButton type="submit" disabled={!text.trim()} className="w-full sm:w-auto">
                {config.buttonLabel}
              </GradientButton>
            </form>
          </div>

          {/* Results */}
          {result && (
            <div className="mt-8 space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
              {/* Score (if applicable) */}
              {result.score !== undefined && (
                <div className="bg-card border border-border rounded-2xl p-6 text-center">
                  <p className="text-sm text-muted-foreground mb-3">{result.title}</p>
                  <ScoreRing score={result.score} />
                </div>
              )}

              {/* Output block (for minifiers, slug generator) */}
              {result.output !== undefined && result.output.length > 0 && (
                <div className="bg-card border border-border rounded-2xl p-6">
                  <div className="flex items-center justify-between mb-3">
                    <p className="text-sm font-medium text-foreground">Output</p>
                    <GradientButton
                      variant="outline"
                      size="sm"
                      onClick={() => handleCopy(result.output!)}
                    >
                      {copied ? (
                        <><Check className="w-3 h-3" /> Gekopieerd</>
                      ) : (
                        <><Copy className="w-3 h-3" /> Kopieer</>
                      )}
                    </GradientButton>
                  </div>
                  <pre className="bg-muted/50 rounded-xl p-4 text-xs font-mono overflow-x-auto max-h-64 whitespace-pre-wrap break-all text-foreground">
                    {result.output}
                  </pre>
                </div>
              )}

              {/* Check items */}
              <div className="space-y-3">
                {result.items.map((item, i) => (
                  <div
                    key={i}
                    className="flex items-start gap-3 p-4 bg-card rounded-xl border border-border"
                  >
                    {statusIcon(item.status)}
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between gap-2">
                        <p className="font-medium text-foreground text-sm">{item.label}</p>
                        <span
                          className={`text-xs font-medium px-2 py-0.5 rounded-full ${
                            item.status === "pass"
                              ? "bg-emerald-500/10 text-emerald-600"
                              : item.status === "warning"
                                ? "bg-amber-500/10 text-amber-600"
                                : item.status === "fail"
                                  ? "bg-destructive/10 text-destructive"
                                  : "bg-muted text-muted-foreground"
                          }`}
                        >
                          {item.value}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* CTA */}
              <div className="bg-card border border-accent/20 rounded-2xl p-6 text-center">
                <p className="text-lg font-semibold text-foreground mb-2">
                  Wil je dit automatisch laten doen?
                </p>
                <p className="text-sm text-muted-foreground mb-4">
                  KlikKlaarSEO optimaliseert je hele website automatisch. Vanaf €99/mnd.
                </p>
                <GradientButton asChild>
                  <a href="/contact">Plan een vrijblijvend gesprek</a>
                </GradientButton>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
