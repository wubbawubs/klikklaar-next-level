import { Link } from "react-router-dom";
import { ArrowRight, Wrench, BookOpen, Briefcase } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { tools, ToolCategory } from "@/data/tools";
import { allPillars } from "@/data/kennisbank";
import { services } from "@/data/services";

// ── Category mappings ──────────────────────────────────────────────

const toolCategoryToKennisbank: Partial<Record<ToolCategory, string[]>> = {
  analyse: ["technische-seo", "content-optimalisatie"],
  technisch: ["technische-seo"],
  content: ["content-optimalisatie"],
  linkbuilding: ["linkbuilding"],
  lokaal: ["lokale-seo"],
  snelheid: ["technische-seo"],
  "structured-data": ["technische-seo"],
  keyword: ["content-optimalisatie", "keyword-research"],
  monitoring: ["analytics-en-data"],
  concurrentie: ["concurrentie-analyse"],
};

const toolCategoryToServices: Partial<Record<ToolCategory, string[]>> = {
  analyse: ["technische-seo", "seo-audit"],
  technisch: ["technische-seo"],
  content: ["content-seo", "seo-copywriting"],
  linkbuilding: ["linkbuilding"],
  lokaal: ["lokale-seo"],
  snelheid: ["technische-seo"],
  "structured-data": ["technische-seo"],
  keyword: ["content-seo"],
  monitoring: ["seo-audit"],
  concurrentie: ["seo-strategie"],
};

const kennisbankToToolCategories: Record<string, ToolCategory[]> = {
  "lokale-seo": ["lokaal", "analyse"],
  "technische-seo": ["technisch", "snelheid", "structured-data"],
  "content-optimalisatie": ["content", "keyword"],
  linkbuilding: ["linkbuilding", "concurrentie"],
  "ai-en-seo": ["content", "analyse"],
  "e-commerce-seo": ["analyse", "structured-data"],
  "analytics-en-data": ["monitoring", "analyse"],
  "keyword-research": ["keyword", "concurrentie"],
  "seo-strategie": ["analyse", "concurrentie"],
  "mobile-seo": ["snelheid", "technisch"],
  "internationale-seo": ["technisch"],
  "video-en-visual-seo": ["content"],
  "seo-voor-starters": ["analyse", "content"],
  "concurrentie-analyse": ["concurrentie", "analyse"],
};

// ── Shared link card ───────────────────────────────────────────────

function LinkCard({ to, label, sublabel, index, isVisible }: {
  to: string; label: string; sublabel: string; index: number; isVisible: boolean;
}) {
  return (
    <Link
      to={to}
      className="group flex items-center justify-between p-4 bg-card rounded-xl border border-border hover:border-kk-orange/30 hover:shadow-premium-sm transition-all duration-300"
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "translateY(0)" : "translateY(12px)",
        transition: `opacity 0.4s ease-out ${index * 0.06}s, transform 0.4s ease-out ${index * 0.06}s`,
      }}
    >
      <div className="min-w-0">
        <p className="text-sm font-medium text-foreground group-hover:text-kk-orange transition-colors truncate">
          {label}
        </p>
        <p className="text-xs text-muted-foreground mt-0.5">{sublabel}</p>
      </div>
      <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-kk-orange group-hover:translate-x-0.5 transition-all flex-shrink-0 ml-2" />
    </Link>
  );
}

// ── Related Tools (for Kennisbank & Diensten pages) ────────────────

interface RelatedToolsProps {
  pillarSlug?: string;
  serviceSlug?: string;
  max?: number;
}

export function RelatedToolsSection({ pillarSlug, serviceSlug, max = 4 }: RelatedToolsProps) {
  const { ref, isVisible } = useScrollReveal();

  let categories: ToolCategory[] = [];
  if (pillarSlug && kennisbankToToolCategories[pillarSlug]) {
    categories = kennisbankToToolCategories[pillarSlug];
  } else if (serviceSlug) {
    // Map service to tool categories
    const service = services.find(s => s.slug === serviceSlug);
    if (service) {
      const mapping: Record<string, ToolCategory[]> = {
        "lokale-seo": ["lokaal", "analyse"],
        "technische-seo": ["technisch", "snelheid"],
        "content-seo": ["content", "keyword"],
        "linkbuilding": ["linkbuilding"],
        "seo-audit": ["analyse", "monitoring"],
        "seo-copywriting": ["content"],
        "seo-strategie": ["concurrentie", "analyse"],
      };
      categories = mapping[service.slug] || ["analyse"];
    }
  }

  const relevantTools = tools
    .filter(t => categories.includes(t.category))
    .slice(0, max);

  if (relevantTools.length === 0) return null;

  return (
    <section ref={ref} className="py-12 lg:py-16">
      <div className="container px-4 sm:px-6">
        <div
          className="max-w-3xl mx-auto"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? "translateY(0)" : "translateY(24px)",
            transition: "opacity 0.6s ease-out, transform 0.6s ease-out",
          }}
        >
          <div className="p-6 bg-muted/30 rounded-xl border border-border">
            <div className="flex items-center gap-2 mb-4">
              <Wrench className="w-5 h-5 text-kk-orange" />
              <h3 className="text-base font-semibold text-foreground">
                Gratis tools om zelf te checken
              </h3>
            </div>
            <div className="grid sm:grid-cols-2 gap-3">
              {relevantTools.map((tool, i) => (
                <LinkCard
                  key={tool.slug}
                  to={`/tools/${tool.slug}`}
                  label={tool.name}
                  sublabel="Gratis tool"
                  index={i}
                  isVisible={isVisible}
                />
              ))}
            </div>
            <Link
              to="/tools"
              className="inline-flex items-center gap-2 mt-4 text-sm font-medium text-kk-orange hover:gap-3 transition-all"
            >
              Bekijk alle {tools.length} gratis tools
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

// ── Related Diensten (for Kennisbank & Tool pages) ─────────────────

interface RelatedDienstenProps {
  toolCategory?: ToolCategory;
  pillarSlug?: string;
  max?: number;
}

export function RelatedDienstenSection({ toolCategory, pillarSlug, max = 3 }: RelatedDienstenProps) {
  const { ref, isVisible } = useScrollReveal();

  let serviceSlugs: string[] = [];
  if (toolCategory && toolCategoryToServices[toolCategory]) {
    serviceSlugs = toolCategoryToServices[toolCategory]!;
  } else if (pillarSlug) {
    const mapping: Record<string, string[]> = {
      "lokale-seo": ["lokale-seo"],
      "technische-seo": ["technische-seo"],
      "content-optimalisatie": ["content-seo", "seo-copywriting"],
      linkbuilding: ["linkbuilding"],
      "seo-strategie": ["seo-strategie"],
      "analytics-en-data": ["seo-audit"],
      "keyword-research": ["content-seo"],
      "e-commerce-seo": ["technische-seo", "content-seo"],
      "ai-en-seo": ["content-seo"],
    };
    serviceSlugs = mapping[pillarSlug] || [];
  }

  const relevantServices = services.filter(s => serviceSlugs.includes(s.slug)).slice(0, max);
  if (relevantServices.length === 0) return null;

  return (
    <section ref={ref} className="py-12 lg:py-16">
      <div className="container px-4 sm:px-6">
        <div
          className="max-w-3xl mx-auto"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? "translateY(0)" : "translateY(24px)",
            transition: "opacity 0.6s ease-out, transform 0.6s ease-out",
          }}
        >
          <div className="p-6 bg-muted/30 rounded-xl border border-border">
            <div className="flex items-center gap-2 mb-4">
              <Briefcase className="w-5 h-5 text-kk-orange" />
              <h3 className="text-base font-semibold text-foreground">
                Liever laten doen? Bekijk onze diensten
              </h3>
            </div>
            <div className="space-y-3">
              {relevantServices.map((service, i) => (
                <LinkCard
                  key={service.slug}
                  to={`/${service.slug}`}
                  label={service.name}
                  sublabel="Vanaf €99/mnd"
                  index={i}
                  isVisible={isVisible}
                />
              ))}
            </div>
            <Link
              to="/diensten"
              className="inline-flex items-center gap-2 mt-4 text-sm font-medium text-kk-orange hover:gap-3 transition-all"
            >
              Alle diensten bekijken
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

// ── Tool → Kennisbank context mapping ──────────────────────────────

export function getKennisbankContextForTool(category: ToolCategory): "lokale-seo" | "technische-seo" | "content" | "general" {
  const map: Partial<Record<ToolCategory, "lokale-seo" | "technische-seo" | "content" | "general">> = {
    lokaal: "lokale-seo",
    technisch: "technische-seo",
    snelheid: "technische-seo",
    "structured-data": "technische-seo",
    content: "content",
    keyword: "content",
  };
  return map[category] || "general";
}
