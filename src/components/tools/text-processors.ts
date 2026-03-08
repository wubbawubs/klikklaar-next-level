/**
 * Client-side text processing functions for text-based SEO tools.
 * Each processor takes text input and returns structured results.
 */

export interface TextToolResult {
  title: string;
  items: Array<{ label: string; value: string; status?: "pass" | "warning" | "fail" }>;
  output?: string;
  score?: number;
}

// ── Woordenteller ──────────────────────────────────────────────

export function processWordCount(text: string): TextToolResult {
  const trimmed = text.trim();
  if (!trimmed) return { title: "Woordenteller", items: [], score: 0 };

  const words = trimmed.split(/\s+/).filter(Boolean).length;
  const chars = trimmed.length;
  const charsNoSpaces = trimmed.replace(/\s/g, "").length;
  const sentences = trimmed.split(/[.!?]+/).filter(s => s.trim().length > 0).length;
  const paragraphs = trimmed.split(/\n\s*\n/).filter(p => p.trim().length > 0).length;
  const avgWordLength = charsNoSpaces / Math.max(words, 1);
  const avgSentenceLength = words / Math.max(sentences, 1);
  const readingTimeMin = Math.max(1, Math.ceil(words / 200));

  return {
    title: "Woordenteller",
    score: Math.min(100, Math.round((words / 300) * 100)),
    items: [
      { label: "Woorden", value: words.toLocaleString("nl-NL"), status: words >= 300 ? "pass" : words >= 100 ? "warning" : "fail" },
      { label: "Tekens (met spaties)", value: chars.toLocaleString("nl-NL"), status: "pass" },
      { label: "Tekens (zonder spaties)", value: charsNoSpaces.toLocaleString("nl-NL"), status: "pass" },
      { label: "Zinnen", value: sentences.toLocaleString("nl-NL"), status: "pass" },
      { label: "Alinea's", value: paragraphs.toLocaleString("nl-NL"), status: "pass" },
      { label: "Gem. woordlengte", value: `${avgWordLength.toFixed(1)} tekens`, status: "pass" },
      { label: "Gem. zinslengte", value: `${avgSentenceLength.toFixed(1)} woorden`, status: avgSentenceLength <= 20 ? "pass" : "warning" },
      { label: "Leestijd", value: `${readingTimeMin} min`, status: "pass" },
    ],
  };
}

// ── CSS Minifier ───────────────────────────────────────────────

export function processCssMinify(text: string): TextToolResult {
  const trimmed = text.trim();
  if (!trimmed) return { title: "CSS Minifier", items: [], output: "" };

  const original = trimmed.length;

  let minified = trimmed
    // Remove comments
    .replace(/\/\*[\s\S]*?\*\//g, "")
    // Remove newlines and tabs
    .replace(/[\n\r\t]/g, "")
    // Remove spaces around selectors and properties
    .replace(/\s*{\s*/g, "{")
    .replace(/\s*}\s*/g, "}")
    .replace(/\s*;\s*/g, ";")
    .replace(/\s*:\s*/g, ":")
    .replace(/\s*,\s*/g, ",")
    // Remove trailing semicolons before closing brace
    .replace(/;}/g, "}")
    // Collapse multiple spaces
    .replace(/\s{2,}/g, " ")
    .trim();

  const saved = original - minified.length;
  const percentage = original > 0 ? Math.round((saved / original) * 100) : 0;

  return {
    title: "CSS Minifier",
    score: Math.min(100, percentage + 50),
    output: minified,
    items: [
      { label: "Originele grootte", value: `${original.toLocaleString("nl-NL")} tekens`, status: "pass" },
      { label: "Geminificeerde grootte", value: `${minified.length.toLocaleString("nl-NL")} tekens`, status: "pass" },
      { label: "Besparing", value: `${saved.toLocaleString("nl-NL")} tekens (${percentage}%)`, status: percentage > 10 ? "pass" : "warning" },
    ],
  };
}

// ── JavaScript Minifier ────────────────────────────────────────

export function processJsMinify(text: string): TextToolResult {
  const trimmed = text.trim();
  if (!trimmed) return { title: "JavaScript Minifier", items: [], output: "" };

  const original = trimmed.length;

  let minified = trimmed
    // Remove single-line comments (but not URLs like http://)
    .replace(/(?<![:"'])\/\/[^\n]*/g, "")
    // Remove multi-line comments
    .replace(/\/\*[\s\S]*?\*\//g, "")
    // Remove newlines and tabs
    .replace(/[\n\r\t]/g, " ")
    // Remove spaces around operators
    .replace(/\s*([{}()=;,:<>+\-*/&|!?])\s*/g, "$1")
    // Collapse multiple spaces
    .replace(/\s{2,}/g, " ")
    .trim();

  const saved = original - minified.length;
  const percentage = original > 0 ? Math.round((saved / original) * 100) : 0;

  return {
    title: "JavaScript Minifier",
    score: Math.min(100, percentage + 50),
    output: minified,
    items: [
      { label: "Originele grootte", value: `${original.toLocaleString("nl-NL")} tekens`, status: "pass" },
      { label: "Geminificeerde grootte", value: `${minified.length.toLocaleString("nl-NL")} tekens`, status: "pass" },
      { label: "Besparing", value: `${saved.toLocaleString("nl-NL")} tekens (${percentage}%)`, status: percentage > 10 ? "pass" : "warning" },
    ],
  };
}

// ── Leesbaarheid Checker ───────────────────────────────────────

export function processReadability(text: string): TextToolResult {
  const trimmed = text.trim();
  if (!trimmed) return { title: "Leesbaarheid", items: [], score: 0 };

  const words = trimmed.split(/\s+/).filter(Boolean);
  const wordCount = words.length;
  const sentences = trimmed.split(/[.!?]+/).filter(s => s.trim().length > 0);
  const sentenceCount = Math.max(sentences.length, 1);
  const syllables = words.reduce((sum, w) => sum + countSyllablesDutch(w), 0);

  // Flesch-Douma (Dutch adaptation)
  const avgSentenceLength = wordCount / sentenceCount;
  const avgSyllablesPerWord = syllables / Math.max(wordCount, 1);
  const flesch = 206.835 - 1.015 * avgSentenceLength - 84.6 * avgSyllablesPerWord;
  const fleschClamped = Math.max(0, Math.min(100, Math.round(flesch)));

  const longSentences = sentences.filter(s => s.trim().split(/\s+/).length > 20).length;
  const longSentencePerc = Math.round((longSentences / sentenceCount) * 100);

  let level = "Moeilijk";
  let levelStatus: "pass" | "warning" | "fail" = "fail";
  if (fleschClamped >= 70) { level = "Makkelijk leesbaar"; levelStatus = "pass"; }
  else if (fleschClamped >= 50) { level = "Redelijk leesbaar"; levelStatus = "warning"; }
  else if (fleschClamped >= 30) { level = "Moeilijk leesbaar"; levelStatus = "warning"; }

  return {
    title: "Leesbaarheid Analyse",
    score: fleschClamped,
    items: [
      { label: "Flesch-Douma score", value: `${fleschClamped}/100`, status: levelStatus },
      { label: "Leesniveau", value: level, status: levelStatus },
      { label: "Gem. zinslengte", value: `${avgSentenceLength.toFixed(1)} woorden`, status: avgSentenceLength <= 15 ? "pass" : avgSentenceLength <= 20 ? "warning" : "fail" },
      { label: "Gem. lettergrepen per woord", value: avgSyllablesPerWord.toFixed(1), status: avgSyllablesPerWord <= 1.8 ? "pass" : "warning" },
      { label: "Lange zinnen (>20 woorden)", value: `${longSentences} (${longSentencePerc}%)`, status: longSentencePerc <= 20 ? "pass" : "warning" },
      { label: "Woorden", value: wordCount.toLocaleString("nl-NL"), status: "pass" },
      { label: "Zinnen", value: sentenceCount.toLocaleString("nl-NL"), status: "pass" },
    ],
  };
}

function countSyllablesDutch(word: string): number {
  const w = word.toLowerCase().replace(/[^a-zàáâãäèéêëìíîïòóôõöùúûü]/g, "");
  if (w.length <= 2) return 1;
  const vowels = w.match(/[aeiouyàáâãäèéêëìíîïòóôõöùúûü]+/g);
  return Math.max(1, vowels ? vowels.length : 1);
}

// ── JSON-LD Validator ──────────────────────────────────────────

export function processJsonLdValidation(text: string): TextToolResult {
  const trimmed = text.trim();
  if (!trimmed) return { title: "JSON-LD Validator", items: [], score: 0 };

  try {
    const parsed = JSON.parse(trimmed);
    const issues: TextToolResult["items"] = [];

    // Check @context
    if (!parsed["@context"]) {
      issues.push({ label: "@context", value: "Ontbreekt", status: "fail" });
    } else if (!String(parsed["@context"]).includes("schema.org")) {
      issues.push({ label: "@context", value: "Geen schema.org", status: "warning" });
    } else {
      issues.push({ label: "@context", value: "schema.org ✓", status: "pass" });
    }

    // Check @type
    if (!parsed["@type"]) {
      issues.push({ label: "@type", value: "Ontbreekt", status: "fail" });
    } else {
      issues.push({ label: "@type", value: parsed["@type"], status: "pass" });
    }

    // Check common properties based on type
    const type = parsed["@type"] || "";
    if (type === "LocalBusiness" || type === "Organization") {
      issues.push({ label: "name", value: parsed.name ? "Aanwezig ✓" : "Ontbreekt", status: parsed.name ? "pass" : "fail" });
      issues.push({ label: "url", value: parsed.url ? "Aanwezig ✓" : "Ontbreekt", status: parsed.url ? "pass" : "warning" });
    }
    if (type === "Article" || type === "BlogPosting") {
      issues.push({ label: "headline", value: parsed.headline ? "Aanwezig ✓" : "Ontbreekt", status: parsed.headline ? "pass" : "fail" });
      issues.push({ label: "datePublished", value: parsed.datePublished ? "Aanwezig ✓" : "Ontbreekt", status: parsed.datePublished ? "pass" : "warning" });
    }
    if (type === "FAQPage") {
      const entities = parsed.mainEntity;
      issues.push({ label: "mainEntity", value: Array.isArray(entities) ? `${entities.length} vragen` : "Ontbreekt/ongeldig", status: Array.isArray(entities) && entities.length > 0 ? "pass" : "fail" });
    }
    if (type === "Product") {
      issues.push({ label: "name", value: parsed.name ? "Aanwezig ✓" : "Ontbreekt", status: parsed.name ? "pass" : "fail" });
      issues.push({ label: "offers", value: parsed.offers ? "Aanwezig ✓" : "Ontbreekt", status: parsed.offers ? "pass" : "warning" });
    }

    // Syntax valid
    issues.unshift({ label: "JSON syntax", value: "Geldig ✓", status: "pass" });

    const failCount = issues.filter(i => i.status === "fail").length;
    const score = Math.max(0, 100 - failCount * 25);

    return { title: "JSON-LD Validator", items: issues, score };
  } catch (e) {
    const msg = e instanceof Error ? e.message : "Ongeldige JSON";
    return {
      title: "JSON-LD Validator",
      score: 0,
      items: [
        { label: "JSON syntax", value: "Ongeldig ✗", status: "fail" },
        { label: "Foutmelding", value: msg.slice(0, 120), status: "fail" },
      ],
    };
  }
}

// ── Slug Generator ─────────────────────────────────────────────

export function processSlugGenerator(text: string): TextToolResult {
  const trimmed = text.trim();
  if (!trimmed) return { title: "URL Slug Generator", items: [], output: "" };

  const slug = trimmed
    .toLowerCase()
    .normalize("NFD").replace(/[\u0300-\u036f]/g, "") // remove diacritics
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-")
    .replace(/^-|-$/g, "")
    .slice(0, 75);

  const isGoodLength = slug.length <= 60;
  const hasNoDoubleHyphens = !slug.includes("--");

  return {
    title: "URL Slug Generator",
    score: isGoodLength && hasNoDoubleHyphens ? 100 : 70,
    output: slug,
    items: [
      { label: "Gegenereerde slug", value: `/${slug}`, status: "pass" },
      { label: "Lengte", value: `${slug.length} tekens`, status: isGoodLength ? "pass" : "warning" },
      { label: "Leesbaar", value: hasNoDoubleHyphens ? "Ja ✓" : "Dubbele streepjes gevonden", status: hasNoDoubleHyphens ? "pass" : "warning" },
      { label: "Kleine letters", value: "Ja ✓", status: "pass" },
      { label: "Geen speciale tekens", value: "Ja ✓", status: "pass" },
    ],
  };
}

// ── Keyword Density Checker (text mode) ────────────────────────

export function processKeywordDensity(text: string, keyword?: string): TextToolResult {
  const trimmed = text.trim();
  if (!trimmed) return { title: "Keyword Density", items: [], score: 0 };

  const words = trimmed.toLowerCase().split(/\s+/).filter(Boolean);
  const wordCount = words.length;

  // Count word frequencies
  const freq: Record<string, number> = {};
  for (const w of words) {
    const clean = w.replace(/[^a-zàáâãäèéêëìíîïòóôõöùúûü0-9-]/g, "");
    if (clean.length > 2) freq[clean] = (freq[clean] || 0) + 1;
  }

  const sorted = Object.entries(freq).sort((a, b) => b[1] - a[1]).slice(0, 10);

  const items: TextToolResult["items"] = [
    { label: "Totaal woorden", value: wordCount.toLocaleString("nl-NL"), status: "pass" },
  ];

  if (keyword) {
    const kw = keyword.toLowerCase().trim();
    const kwCount = words.filter(w => w.includes(kw)).length;
    const density = ((kwCount / wordCount) * 100).toFixed(1);
    const densityNum = parseFloat(density);
    items.push({
      label: `"${keyword}" dichtheid`,
      value: `${density}% (${kwCount}×)`,
      status: densityNum >= 0.5 && densityNum <= 3 ? "pass" : densityNum > 3 ? "fail" : "warning",
    });
  }

  sorted.forEach(([word, count], i) => {
    const density = ((count / wordCount) * 100).toFixed(1);
    items.push({
      label: `#${i + 1}: "${word}"`,
      value: `${count}× (${density}%)`,
      status: "pass",
    });
  });

  return { title: "Keyword Density", items, score: 75 };
}

// ── Registry mapping slugs to processors ───────────────────────

export type TextToolType =
  | "woordenteller"
  | "css-minifier"
  | "javascript-minifier"
  | "leesbaarheid-checker"
  | "json-ld-validator"
  | "slug-generator"
  | "keyword-density-checker";

export const TEXT_TOOL_SLUGS: Record<string, TextToolType> = {
  "woordenteller": "woordenteller",
  "css-minifier": "css-minifier",
  "javascript-minifier": "javascript-minifier",
  "leesbaarheid-checker": "leesbaarheid-checker",
  "json-ld-validator": "json-ld-validator",
  "slug-generator": "slug-generator",
  "keyword-density-checker": "keyword-density-checker",
};

export const TEXT_TOOL_CONFIG: Record<TextToolType, {
  placeholder: string;
  inputLabel: string;
  buttonLabel: string;
  rows: number;
  hasKeywordInput?: boolean;
}> = {
  "woordenteller": {
    placeholder: "Plak hier je tekst om woorden, zinnen en meer te tellen...",
    inputLabel: "Je tekst",
    buttonLabel: "Tel woorden",
    rows: 8,
  },
  "css-minifier": {
    placeholder: "/* Plak hier je CSS code */\nbody {\n  margin: 0;\n  padding: 0;\n}",
    inputLabel: "Je CSS code",
    buttonLabel: "Minify CSS",
    rows: 10,
  },
  "javascript-minifier": {
    placeholder: "// Plak hier je JavaScript code\nfunction hello() {\n  console.log('Hello');\n}",
    inputLabel: "Je JavaScript code",
    buttonLabel: "Minify JavaScript",
    rows: 10,
  },
  "leesbaarheid-checker": {
    placeholder: "Plak hier je tekst om de leesbaarheid te analyseren...",
    inputLabel: "Je tekst",
    buttonLabel: "Analyseer leesbaarheid",
    rows: 8,
  },
  "json-ld-validator": {
    placeholder: '{\n  "@context": "https://schema.org",\n  "@type": "LocalBusiness",\n  "name": "Mijn Bedrijf"\n}',
    inputLabel: "Je JSON-LD code",
    buttonLabel: "Valideer JSON-LD",
    rows: 10,
  },
  "slug-generator": {
    placeholder: "Voer je paginatitel of zoekwoord in...",
    inputLabel: "Paginatitel of zoekwoord",
    buttonLabel: "Genereer slug",
    rows: 2,
  },
  "keyword-density-checker": {
    placeholder: "Plak hier je tekst om de zoekwoorddichtheid te analyseren...",
    inputLabel: "Je tekst",
    buttonLabel: "Analyseer dichtheid",
    rows: 8,
    hasKeywordInput: true,
  },
};

export function processTextTool(type: TextToolType, text: string, keyword?: string): TextToolResult {
  switch (type) {
    case "woordenteller": return processWordCount(text);
    case "css-minifier": return processCssMinify(text);
    case "javascript-minifier": return processJsMinify(text);
    case "leesbaarheid-checker": return processReadability(text);
    case "json-ld-validator": return processJsonLdValidation(text);
    case "slug-generator": return processSlugGenerator(text);
    case "keyword-density-checker": return processKeywordDensity(text, keyword);
  }
}
