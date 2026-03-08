import { useState } from "react";
import { Input } from "@/components/ui/input";
import { GradientButton } from "@/components/ui/GradientButton";
import { Search, Loader2, CheckCircle2, AlertTriangle, XCircle } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { ResultsGate } from "./ResultsGate";
import { ScannerLoading } from "./ScannerLoading";

export interface CheckResult {
  id: string;
  label: string;
  status: "pass" | "warning" | "fail";
  value: string;
  detail?: string;
}

export interface ScanResult {
  url: string;
  score: number;
  checks: CheckResult[];
}

/**
 * Category-based default checks — every tool in a category gets these unless overridden.
 */
const CATEGORY_CHECK_DEFAULTS: Record<string, { checks: string[]; freeCount: number }> = {
  analyse: {
    checks: ["title", "meta-desc", "h1", "headings", "images", "internal-links", "og-tags", "canonical", "https", "word-count", "structured-data", "page-speed-hints"],
    freeCount: 3,
  },
  technisch: {
    checks: ["title", "meta-desc", "canonical", "robots-meta", "viewport", "charset", "lang", "https", "og-tags", "twitter-cards"],
    freeCount: 3,
  },
  content: {
    checks: ["title", "meta-desc", "h1", "headings", "heading-order", "word-count", "images", "internal-links"],
    freeCount: 3,
  },
  linkbuilding: {
    checks: ["internal-links", "canonical", "og-tags", "https"],
    freeCount: 2,
  },
  lokaal: {
    checks: ["title", "meta-desc", "structured-data", "og-tags", "canonical", "https", "viewport"],
    freeCount: 2,
  },
  monitoring: {
    checks: ["title", "meta-desc", "h1", "canonical", "robots-meta", "https", "structured-data", "page-speed-hints"],
    freeCount: 3,
  },
  snelheid: {
    checks: ["page-speed-hints", "images", "viewport", "https", "charset"],
    freeCount: 2,
  },
  "structured-data": {
    checks: ["structured-data", "title", "meta-desc", "canonical", "og-tags"],
    freeCount: 2,
  },
  keyword: {
    checks: ["title", "meta-desc", "h1", "headings", "word-count", "internal-links"],
    freeCount: 2,
  },
  concurrentie: {
    checks: ["title", "meta-desc", "h1", "headings", "images", "internal-links", "og-tags", "canonical", "https", "word-count", "structured-data"],
    freeCount: 3,
  },
};

/**
 * Per-tool overrides for tools that need specific checks beyond their category default.
 */
const TOOL_CHECK_OVERRIDES: Record<string, { checks: string[]; freeCount: number; label: string }> = {
  // ── Full scanners ──
  "seo-checker": {
    checks: ["title", "meta-desc", "h1", "headings", "images", "internal-links", "og-tags", "canonical", "https", "word-count", "structured-data", "page-speed-hints"],
    freeCount: 3, label: "SEO Checker",
  },
  "website-analyse": {
    checks: ["title", "meta-desc", "h1", "headings", "images", "internal-links", "og-tags", "canonical", "https", "viewport", "charset", "word-count", "structured-data", "page-speed-hints"],
    freeCount: 4, label: "Website Analyse",
  },
  "seo-audit-tool": {
    checks: ["title", "meta-desc", "h1", "headings", "images", "internal-links", "og-tags", "canonical", "https", "viewport", "lang", "robots-meta", "charset", "word-count", "structured-data", "page-speed-hints"],
    freeCount: 4, label: "SEO Audit",
  },
  "seo-health-check": {
    checks: ["title", "meta-desc", "h1", "https", "canonical", "robots-meta", "images", "page-speed-hints"],
    freeCount: 3, label: "SEO Health Check",
  },

  // ── Meta / SERP ──
  "meta-tag-checker": {
    checks: ["title", "meta-desc", "og-tags", "canonical", "viewport", "robots-meta", "charset", "twitter-cards", "lang", "favicon"],
    freeCount: 3, label: "Meta Tags",
  },
  "serp-checker": {
    checks: ["title", "meta-desc", "og-tags", "favicon"],
    freeCount: 2, label: "SERP Preview",
  },
  "open-graph-checker": {
    checks: ["og-tags", "title", "meta-desc", "twitter-cards", "favicon"],
    freeCount: 2, label: "Open Graph Check",
  },
  "twitter-card-checker": {
    checks: ["twitter-cards", "og-tags", "title", "meta-desc", "favicon"],
    freeCount: 2, label: "Twitter Card Check",
  },

  // ── Headings ──
  "heading-checker": {
    checks: ["h1", "headings", "heading-order", "h2-content", "h3-content"],
    freeCount: 2, label: "Heading Analyse",
  },
  "heading-generator": {
    checks: ["h1", "headings", "heading-order", "h2-content", "h3-content"],
    freeCount: 2, label: "Heading Check",
  },

  // ── Technical specifics ──
  "canonical-checker": {
    checks: ["canonical", "robots-meta", "lang"],
    freeCount: 2, label: "Canonical Check",
  },
  "ssl-checker": {
    checks: ["https"],
    freeCount: 1, label: "SSL Check",
  },
  "http-header-checker": {
    checks: ["https", "charset", "viewport", "robots-meta"],
    freeCount: 2, label: "HTTP Headers",
  },
  "sitemap-checker": {
    checks: ["canonical", "robots-meta"],
    freeCount: 2, label: "Sitemap Check",
  },
  "robots-txt-checker": {
    checks: ["robots-meta", "canonical"],
    freeCount: 2, label: "Robots.txt Check",
  },
  "indexatie-checker": {
    checks: ["robots-meta", "canonical", "title", "meta-desc"],
    freeCount: 2, label: "Indexatie Check",
  },
  "mixed-content-checker": {
    checks: ["https", "images", "page-speed-hints"],
    freeCount: 2, label: "Mixed Content Check",
  },
  "redirect-checker": {
    checks: ["canonical", "https", "robots-meta"],
    freeCount: 2, label: "Redirect Check",
  },
  "hreflang-checker": {
    checks: ["lang", "canonical", "robots-meta"],
    freeCount: 2, label: "Hreflang Check",
  },
  "dns-checker": {
    checks: ["https", "canonical"],
    freeCount: 1, label: "DNS Check",
  },
  "structured-data-tester": {
    checks: ["structured-data", "canonical", "title", "meta-desc"],
    freeCount: 2, label: "Structured Data Test",
  },
  "wachtwoord-pagina-checker": {
    checks: ["robots-meta", "canonical", "title", "meta-desc"],
    freeCount: 2, label: "Noindex Check",
  },

  // ── Content specifics ──
  "alt-tekst-checker": {
    checks: ["images"],
    freeCount: 1, label: "Alt Tekst Check",
  },
  "keyword-density-checker": {
    checks: ["title", "meta-desc", "h1", "headings", "word-count"],
    freeCount: 2, label: "Keyword Density",
  },
  "leesbaarheid-checker": {
    checks: ["h1", "headings", "word-count", "heading-order"],
    freeCount: 2, label: "Leesbaarheid",
  },
  "content-score-checker": {
    checks: ["title", "meta-desc", "h1", "headings", "word-count", "images", "internal-links", "heading-order"],
    freeCount: 3, label: "Content Score",
  },
  "meta-description-generator": {
    checks: ["meta-desc", "title", "og-tags"],
    freeCount: 2, label: "Meta Description",
  },
  "title-tag-generator": {
    checks: ["title", "meta-desc", "og-tags"],
    freeCount: 2, label: "Title Tag",
  },
  "content-gap-analyse": {
    checks: ["title", "meta-desc", "h1", "headings", "word-count", "internal-links"],
    freeCount: 2, label: "Content Gap",
  },
  "featured-snippet-optimizer": {
    checks: ["h1", "headings", "heading-order", "word-count", "structured-data"],
    freeCount: 2, label: "Featured Snippet",
  },
  "slug-generator": {
    checks: ["canonical", "title", "meta-desc"],
    freeCount: 2, label: "URL Slug Check",
  },
  "internal-link-suggestie": {
    checks: ["internal-links", "h1", "headings", "canonical"],
    freeCount: 2, label: "Interne Link Suggestie",
  },

  // ── Linkbuilding specifics ──
  "interne-link-checker": {
    checks: ["internal-links", "canonical"],
    freeCount: 1, label: "Interne Links",
  },
  "backlink-checker": {
    checks: ["internal-links", "canonical", "og-tags", "https"],
    freeCount: 2, label: "Backlink Check",
  },
  "broken-link-checker": {
    checks: ["internal-links", "canonical", "https"],
    freeCount: 2, label: "Broken Link Check",
  },
  "toxic-link-checker": {
    checks: ["internal-links", "canonical", "https", "robots-meta"],
    freeCount: 2, label: "Toxic Link Check",
  },

  // ── Mobile ──
  "mobile-friendly-test": {
    checks: ["viewport", "charset", "images", "https", "page-speed-hints"],
    freeCount: 2, label: "Mobiel Check",
  },
  "amp-validator": {
    checks: ["viewport", "https", "structured-data", "page-speed-hints"],
    freeCount: 2, label: "AMP Check",
  },

  // ── Snelheid specifics ──
  "pagespeed-test": {
    checks: ["page-speed-hints", "images", "viewport", "https"],
    freeCount: 2, label: "PageSpeed",
  },
  "core-web-vitals-test": {
    checks: ["page-speed-hints", "images", "viewport"],
    freeCount: 2, label: "Core Web Vitals",
  },
  "render-blocking-checker": {
    checks: ["page-speed-hints", "images", "viewport"],
    freeCount: 2, label: "Render Blocking",
  },
  "gzip-checker": {
    checks: ["https", "page-speed-hints"],
    freeCount: 1, label: "GZIP Check",
  },
  "caching-checker": {
    checks: ["https", "page-speed-hints", "images"],
    freeCount: 2, label: "Cache Check",
  },
  "lighthouse-tester": {
    checks: ["page-speed-hints", "images", "viewport", "https", "structured-data"],
    freeCount: 2, label: "Lighthouse",
  },
  "third-party-checker": {
    checks: ["page-speed-hints", "https"],
    freeCount: 1, label: "Third Party Scripts",
  },

  // ── Structured Data specifics ──
  "schema-validator": {
    checks: ["structured-data", "title", "meta-desc", "canonical"],
    freeCount: 2, label: "Schema Validator",
  },
  "rich-snippet-preview": {
    checks: ["structured-data", "title", "meta-desc", "og-tags", "favicon"],
    freeCount: 2, label: "Rich Snippet Preview",
  },
  "json-ld-validator": {
    checks: ["structured-data", "canonical"],
    freeCount: 1, label: "JSON-LD Validator",
  },
  "lokale-schema-checker": {
    checks: ["structured-data", "title", "meta-desc", "canonical"],
    freeCount: 2, label: "Lokale Schema Check",
  },

  // ── Lokaal specifics ──
  "lokale-seo-audit": {
    checks: ["title", "meta-desc", "structured-data", "og-tags", "canonical", "https", "viewport", "images"],
    freeCount: 3, label: "Lokale SEO Audit",
  },

  // ── Concurrentie specifics ──
  "concurrentie-analyse-tool": {
    checks: ["title", "meta-desc", "h1", "headings", "images", "internal-links", "og-tags", "canonical", "https", "word-count", "structured-data", "page-speed-hints"],
    freeCount: 3, label: "Concurrentie Analyse",
  },
  "technische-vergelijking-tool": {
    checks: ["https", "viewport", "charset", "canonical", "robots-meta", "page-speed-hints", "structured-data"],
    freeCount: 3, label: "Technische Vergelijking",
  },

  // ── Analyse extras ──
  "seo-grader": {
    checks: ["title", "meta-desc", "h1", "headings", "images", "internal-links", "og-tags", "canonical", "https", "word-count", "structured-data", "page-speed-hints"],
    freeCount: 3, label: "SEO Grader",
  },
  "404-checker": {
    checks: ["internal-links", "canonical", "robots-meta"],
    freeCount: 2, label: "404 Check",
  },
  "duplicate-content-checker": {
    checks: ["canonical", "title", "meta-desc", "word-count"],
    freeCount: 2, label: "Duplicate Content",
  },
  "seo-spider-tool": {
    checks: ["title", "meta-desc", "h1", "canonical", "robots-meta", "internal-links", "images", "https"],
    freeCount: 3, label: "SEO Spider",
  },
  "url-structuur-checker": {
    checks: ["canonical", "title", "robots-meta"],
    freeCount: 2, label: "URL Structuur",
  },

  // ── Monitoring specifics ──
  "ssl-verloop-monitor": {
    checks: ["https"],
    freeCount: 1, label: "SSL Monitor",
  },
  "indexatie-monitor": {
    checks: ["robots-meta", "canonical", "title", "meta-desc"],
    freeCount: 2, label: "Indexatie Monitor",
  },
};

/**
 * Resolves the check config for a given tool: override > category default > fallback.
 */
function getToolCheckConfig(toolSlug: string, toolCategory?: string): { checks: string[]; freeCount: number; label?: string } {
  if (TOOL_CHECK_OVERRIDES[toolSlug]) return TOOL_CHECK_OVERRIDES[toolSlug];
  if (toolCategory && CATEGORY_CHECK_DEFAULTS[toolCategory]) return CATEGORY_CHECK_DEFAULTS[toolCategory];
  return { checks: ["title", "meta-desc", "h1", "headings", "images", "internal-links", "og-tags", "canonical", "https", "word-count"], freeCount: 3 };
}

const statusIcon = (status: CheckResult["status"]) => {
  switch (status) {
    case "pass":
      return <CheckCircle2 className="w-5 h-5 text-emerald-500 flex-shrink-0" />;
    case "warning":
      return <AlertTriangle className="w-5 h-5 text-amber-500 flex-shrink-0" />;
    case "fail":
      return <XCircle className="w-5 h-5 text-destructive flex-shrink-0" />;
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

function CheckCard({ check }: { check: CheckResult }) {
  return (
    <div className="flex items-start gap-3 p-4 bg-card rounded-xl border border-border">
      {statusIcon(check.status)}
      <div className="flex-1 min-w-0">
        <div className="flex items-center justify-between gap-2">
          <p className="font-medium text-foreground text-sm">{check.label}</p>
          <span
            className={`text-xs font-medium px-2 py-0.5 rounded-full ${
              check.status === "pass"
                ? "bg-emerald-500/10 text-emerald-600"
                : check.status === "warning"
                  ? "bg-amber-500/10 text-amber-600"
                  : "bg-destructive/10 text-destructive"
            }`}
          >
            {check.value}
          </span>
        </div>
        {check.detail && (
          <p className="text-xs text-muted-foreground mt-1">{check.detail}</p>
        )}
      </div>
    </div>
  );
}

interface ToolScannerProps {
  toolSlug: string;
  toolName: string;
  toolCategory?: string;
}

export function ToolScanner({ toolSlug, toolName, toolCategory }: ToolScannerProps) {
  const [url, setUrl] = useState("");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<ScanResult | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [unlocked, setUnlocked] = useState(false);

  const toolConfig = getToolCheckConfig(toolSlug, toolCategory);
  const checksToRequest = toolConfig.checks;
  const freeCount = toolConfig.freeCount;

  const handleScan = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!url.trim()) return;

    setLoading(true);
    setError(null);
    setResult(null);

    try {
      const { data, error: fnError } = await supabase.functions.invoke("analyze-url", {
        body: {
          url: url.trim(),
          ...(checksToRequest ? { checks: checksToRequest } : {}),
        },
      });

      if (fnError) throw new Error(fnError.message);
      if (!data?.success) throw new Error(data?.error || "Analyse mislukt");

      setResult({
        url: data.url,
        score: data.score,
        checks: data.checks,
      });
    } catch (err) {
      setError(err instanceof Error ? err.message : "Er ging iets mis");
    } finally {
      setLoading(false);
    }
  };

  const hasGatedChecks = result && result.checks.length > freeCount;

  return (
    <section className="py-12 lg:py-16">
      <div className="container px-4 sm:px-6">
        <div className="max-w-3xl mx-auto">
          {/* Input form */}
          <div className="bg-card border border-border rounded-2xl p-6 lg:p-8">
            <h2 className="text-xl sm:text-2xl font-bold text-foreground mb-2 text-center">
              Check je website nu
            </h2>
            <p className="text-muted-foreground text-center mb-6 text-sm">
              Voer je URL in en ontvang direct je {toolName} rapport
            </p>
            <form onSubmit={handleScan} className="flex gap-3">
              <Input
                type="text"
                placeholder="https://jouwwebsite.nl"
                value={url}
                onChange={(e) => setUrl(e.target.value)}
                className="flex-1"
                disabled={loading}
              />
              <GradientButton type="submit" disabled={loading || !url.trim()}>
                {loading ? (
                  <Loader2 className="w-4 h-4 animate-spin" />
                ) : (
                  <>
                    <Search className="w-4 h-4" />
                    Check
                  </>
                )}
              </GradientButton>
            </form>

            {error && (
              <div className="mt-4 p-3 bg-destructive/10 border border-destructive/20 rounded-lg text-sm text-destructive">
                {error}
              </div>
            )}
          </div>

          {/* Loading animation */}
          {loading && <ScannerLoading />}

          {/* Results */}
          {result && (
            <div className="mt-8 space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
              {/* Score */}
              <div className="bg-card border border-border rounded-2xl p-6 text-center">
                <p className="text-sm text-muted-foreground mb-3">
                  {toolConfig?.label || toolName} score voor{" "}
                  <span className="font-medium text-foreground">{result.url}</span>
                </p>
                <ScoreRing score={result.score} />
                <p className="text-sm text-muted-foreground mt-3">
                  {result.score >= 80
                    ? "Goed bezig! Er zijn nog kleine verbeterpunten."
                    : result.score >= 50
                      ? "Redelijk, maar er is ruimte voor verbetering."
                      : "Er zijn belangrijke problemen gevonden."}
                </p>
              </div>

              {/* Free checks */}
              <div className="space-y-3">
                {result.checks.slice(0, freeCount).map((check) => (
                  <CheckCard key={check.id} check={check} />
                ))}
              </div>

              {/* Gated checks */}
              {!unlocked && hasGatedChecks && (
                <>
                  <div className="relative">
                    <div className="space-y-3 blur-sm pointer-events-none select-none" aria-hidden>
                      {result.checks.slice(freeCount, freeCount + 2).map((check) => (
                        <div
                          key={check.id}
                          className="flex items-start gap-3 p-4 bg-card rounded-xl border border-border"
                        >
                          {statusIcon(check.status)}
                          <div className="flex-1">
                            <p className="font-medium text-foreground text-sm">{check.label}</p>
                            <span className="text-xs">{check.value}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/60 to-background" />
                  </div>

                  <ResultsGate
                    toolSlug={toolSlug}
                    urlChecked={result.url}
                    remainingChecks={result.checks.length - freeCount}
                    onUnlock={() => setUnlocked(true)}
                  />
                </>
              )}

              {/* Unlocked checks */}
              {unlocked && hasGatedChecks && (
                <div className="space-y-3 animate-in fade-in slide-in-from-bottom-4 duration-500">
                  {result.checks.slice(freeCount).map((check) => (
                    <CheckCard key={check.id} check={check} />
                  ))}
                </div>
              )}

              {/* Contextual CTA after results */}
              {result.score < 80 && (
                <div className="bg-card border border-accent/20 rounded-2xl p-6 text-center">
                  <p className="text-lg font-semibold text-foreground mb-2">
                    Je scoort {result.score}/100 — wij maken er 90+ van
                  </p>
                  <p className="text-sm text-muted-foreground mb-4">
                    KlikKlaarSEO lost alle gevonden problemen automatisch op. Vanaf €99/mnd.
                  </p>
                  <GradientButton asChild>
                    <a href="/contact">Plan een vrijblijvend gesprek</a>
                  </GradientButton>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
