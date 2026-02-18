/**
 * Indexation Governance System
 * 
 * Calculates a quality score (0-100) per page to determine index-readiness.
 * Pages scoring < 80 get noindex,follow automatically.
 * 
 * Score breakdown per cluster:
 * - Tools: uniqueIntro (20) + whatThisToolChecks (20) + uniqueFaqs≥2 (20) + commonIssuesAndFixes (20) + relatedPillars/Services (20)
 * - Combos: localStats (25) + localTestimonial (25) + marketInsight (25) + tier≤2 (25)
 * - Locations: tier bonus (30) + localFacts≥3 (20) + localStats (25) + localTestimonial (25)
 */

import type { ToolData } from "@/data/tools";
import type { LocationData } from "@/data/locations";
import type { IndustryData } from "@/data/industries";

export const INDEX_THRESHOLD = 80;

// ─── Tool Score ───────────────────────────────────────────────
export function getToolScore(tool: ToolData): number {
  let score = 0;
  if (tool.uniqueIntro && tool.uniqueIntro.length > 50) score += 20;
  if (tool.whatThisToolChecks && tool.whatThisToolChecks.length >= 3) score += 20;
  if (tool.uniqueFaqs && tool.uniqueFaqs.length >= 2) score += 20;
  if (tool.commonIssuesAndFixes && tool.commonIssuesAndFixes.length >= 2) score += 20;
  if ((tool.relatedPillars && tool.relatedPillars.length > 0) || (tool.relatedServices && tool.relatedServices.length > 0)) score += 20;
  return score;
}

export function isToolIndexReady(tool: ToolData): boolean {
  return getToolScore(tool) >= INDEX_THRESHOLD;
}

// ─── Combo Score ──────────────────────────────────────────────
export function getComboScore(industry: IndustryData, location: LocationData): number {
  let score = 0;
  if (location.localStats) score += 25;
  if (location.localTestimonial) score += 25;
  if (location.marketInsight) score += 25;
  if (location.tier <= 2) score += 25;
  return score;
}

export function isComboIndexReady(industry: IndustryData, location: LocationData): boolean {
  return getComboScore(industry, location) >= INDEX_THRESHOLD;
}

// ─── Location Score ───────────────────────────────────────────
export function getLocationScore(location: LocationData): number {
  let score = 0;
  // Tier bonus: T1=30, T2=20, T3=0
  if (location.tier === 1) score += 30;
  else if (location.tier === 2) score += 20;
  if (location.localFacts && location.localFacts.length >= 3) score += 20;
  if (location.localStats) score += 25;
  if (location.localTestimonial) score += 25;
  return score;
}

export function isLocationIndexReady(location: LocationData): boolean {
  return getLocationScore(location) >= INDEX_THRESHOLD;
}

// ─── Governance Report ────────────────────────────────────────
export interface GovernanceEntry {
  url: string;
  cluster: "tool" | "combo" | "location";
  score: number;
  indexReady: boolean;
  missing: string[];
}

export function getToolGovernanceEntry(tool: ToolData): GovernanceEntry {
  const missing: string[] = [];
  if (!tool.uniqueIntro || tool.uniqueIntro.length < 50) missing.push("uniqueIntro (≥50 chars)");
  if (!tool.whatThisToolChecks || tool.whatThisToolChecks.length < 3) missing.push("whatThisToolChecks (≥3 items)");
  if (!tool.uniqueFaqs || tool.uniqueFaqs.length < 2) missing.push("uniqueFaqs (≥2)");
  if (!tool.commonIssuesAndFixes || tool.commonIssuesAndFixes.length < 2) missing.push("commonIssuesAndFixes (≥2)");
  if ((!tool.relatedPillars || tool.relatedPillars.length === 0) && (!tool.relatedServices || tool.relatedServices.length === 0)) missing.push("relatedPillars or relatedServices");

  return {
    url: `/tools/${tool.slug}`,
    cluster: "tool",
    score: getToolScore(tool),
    indexReady: isToolIndexReady(tool),
    missing,
  };
}

export function getComboGovernanceEntry(industry: IndustryData, location: LocationData): GovernanceEntry {
  const missing: string[] = [];
  if (!location.localStats) missing.push("location.localStats");
  if (!location.localTestimonial) missing.push("location.localTestimonial");
  if (!location.marketInsight) missing.push("location.marketInsight");
  if (location.tier > 2) missing.push("tier ≤ 2");

  return {
    url: `/seo-${industry.slug}-${location.slug}`,
    cluster: "combo",
    score: getComboScore(industry, location),
    indexReady: isComboIndexReady(industry, location),
    missing,
  };
}
