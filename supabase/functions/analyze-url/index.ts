const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version',
};

interface CheckResult {
  id: string;
  label: string;
  status: 'pass' | 'warning' | 'fail';
  value: string;
  detail?: string;
}

type CheckId = 'title' | 'meta-desc' | 'h1' | 'headings' | 'images' | 'internal-links' | 'og-tags' | 'canonical' | 'https' | 'viewport' | 'lang' | 'robots-meta' | 'charset' | 'favicon' | 'twitter-cards' | 'heading-order' | 'h2-content' | 'h3-content';

function runCheck(id: CheckId, html: string, url: string): CheckResult | null {
  switch (id) {
    case 'title': {
      const titleMatch = html.match(/<title[^>]*>([\s\S]*?)<\/title>/i);
      const title = titleMatch ? titleMatch[1].trim() : '';
      if (!title) return { id, label: 'Title tag', status: 'fail', value: 'Ontbreekt', detail: 'Voeg een unieke title tag toe van 30-60 tekens.' };
      if (title.length < 30) return { id, label: 'Title tag', status: 'warning', value: `${title.length} tekens (te kort)`, detail: `"${title}" — Maak je title langer (30-60 tekens).` };
      if (title.length > 60) return { id, label: 'Title tag', status: 'warning', value: `${title.length} tekens (te lang)`, detail: `"${title.substring(0, 60)}..." — Google kapt af na ~60 tekens.` };
      return { id, label: 'Title tag', status: 'pass', value: `${title.length} tekens ✓`, detail: `"${title}"` };
    }

    case 'meta-desc': {
      const descMatch = html.match(/<meta[^>]+name=["']description["'][^>]+content=["']([\s\S]*?)["']/i)
        || html.match(/<meta[^>]+content=["']([\s\S]*?)["'][^>]+name=["']description["']/i);
      const desc = descMatch ? descMatch[1].trim() : '';
      if (!desc) return { id, label: 'Meta description', status: 'fail', value: 'Ontbreekt', detail: 'Schrijf een unieke meta description van 120-160 tekens.' };
      if (desc.length < 120) return { id, label: 'Meta description', status: 'warning', value: `${desc.length} tekens (kort)`, detail: 'Gebruik 120-160 tekens voor maximale CTR.' };
      if (desc.length > 160) return { id, label: 'Meta description', status: 'warning', value: `${desc.length} tekens (te lang)`, detail: 'Google toont max ~160 tekens. Verkort je description.' };
      return { id, label: 'Meta description', status: 'pass', value: `${desc.length} tekens ✓` };
    }

    case 'h1': {
      const h1Matches = html.match(/<h1[^>]*>[\s\S]*?<\/h1>/gi) || [];
      if (h1Matches.length === 0) return { id, label: 'H1 heading', status: 'fail', value: 'Geen H1 gevonden', detail: 'Elke pagina heeft precies één H1 nodig.' };
      if (h1Matches.length > 1) return { id, label: 'H1 heading', status: 'warning', value: `${h1Matches.length} H1 tags`, detail: 'Gebruik slechts één H1 per pagina.' };
      const h1Text = h1Matches[0].replace(/<[^>]+>/g, '').trim();
      return { id, label: 'H1 heading', status: 'pass', value: 'Aanwezig ✓', detail: `"${h1Text.substring(0, 80)}"` };
    }

    case 'headings': {
      const h2Count = (html.match(/<h2[^>]*>/gi) || []).length;
      const h3Count = (html.match(/<h3[^>]*>/gi) || []).length;
      if (h2Count === 0) return { id, label: 'Heading structuur', status: 'warning', value: 'Geen H2 tags', detail: 'Gebruik H2 subheadings om je content te structureren.' };
      return { id, label: 'Heading structuur', status: 'pass', value: `${h2Count} H2, ${h3Count} H3 ✓` };
    }

    case 'heading-order': {
      const headingTags = html.match(/<(h[1-6])[^>]*>/gi) || [];
      const levels = headingTags.map(t => parseInt(t.match(/h([1-6])/i)?.[1] || '0'));
      let hasSkip = false;
      for (let i = 1; i < levels.length; i++) {
        if (levels[i] > levels[i - 1] + 1) { hasSkip = true; break; }
      }
      if (levels.length === 0) return { id, label: 'Heading volgorde', status: 'warning', value: 'Geen headings', detail: 'Voeg headings toe (H1 → H2 → H3).' };
      if (hasSkip) return { id, label: 'Heading volgorde', status: 'warning', value: 'Levels overgeslagen', detail: 'Sla geen heading-niveaus over (bijv. H1 → H3). Gebruik H1 → H2 → H3.' };
      return { id, label: 'Heading volgorde', status: 'pass', value: 'Correct ✓', detail: 'Headings volgen de juiste hiërarchie.' };
    }

    case 'h2-content': {
      const h2Tags = html.match(/<h2[^>]*>([\s\S]*?)<\/h2>/gi) || [];
      const h2Texts = h2Tags.map(t => t.replace(/<[^>]+>/g, '').trim()).filter(Boolean);
      if (h2Texts.length === 0) return { id, label: 'H2 subheadings', status: 'warning', value: 'Geen H2 gevonden', detail: 'Gebruik H2 tags om je content in secties te verdelen.' };
      const tooShort = h2Texts.filter(t => t.length < 10);
      if (tooShort.length > 0) return { id, label: 'H2 subheadings', status: 'warning', value: `${tooShort.length} te kort`, detail: `${h2Texts.length} H2 tags gevonden. Maak korte H2's beschrijvender.` };
      return { id, label: 'H2 subheadings', status: 'pass', value: `${h2Texts.length} H2 tags ✓`, detail: `Eerste: "${h2Texts[0].substring(0, 60)}"` };
    }

    case 'h3-content': {
      const h3Tags = html.match(/<h3[^>]*>([\s\S]*?)<\/h3>/gi) || [];
      const h3Texts = h3Tags.map(t => t.replace(/<[^>]+>/g, '').trim()).filter(Boolean);
      if (h3Texts.length === 0) return { id, label: 'H3 subheadings', status: 'pass', value: 'Geen H3 (optioneel)' };
      return { id, label: 'H3 subheadings', status: 'pass', value: `${h3Texts.length} H3 tags ✓` };
    }

    case 'images': {
      const imgTags = html.match(/<img[^>]*>/gi) || [];
      const imgNoAlt = imgTags.filter(img => !img.match(/alt=["'][^"']+["']/i));
      if (imgTags.length === 0) return { id, label: 'Afbeeldingen', status: 'pass', value: 'Geen afbeeldingen' };
      if (imgNoAlt.length > 0) return { id, label: 'Alt-teksten', status: imgNoAlt.length > 3 ? 'fail' : 'warning', value: `${imgNoAlt.length}/${imgTags.length} zonder alt`, detail: 'Voeg beschrijvende alt-teksten toe aan alle afbeeldingen.' };
      return { id, label: 'Alt-teksten', status: 'pass', value: `Alle ${imgTags.length} hebben alt ✓` };
    }

    case 'internal-links': {
      const linkTags = html.match(/<a[^>]+href=["'][^"']*["'][^>]*>/gi) || [];
      const internalLinks = linkTags.filter(l => {
        const hrefMatch = l.match(/href=["']([^"']*)["']/i);
        if (!hrefMatch) return false;
        const href = hrefMatch[1];
        return href.startsWith('/') || href.startsWith(url);
      });
      if (internalLinks.length < 3) return { id, label: 'Interne links', status: 'warning', value: `${internalLinks.length} links`, detail: 'Voeg meer interne links toe (minimaal 3-5 per pagina).' };
      return { id, label: 'Interne links', status: 'pass', value: `${internalLinks.length} links ✓` };
    }

    case 'og-tags': {
      const ogTitle = html.match(/<meta[^>]+property=["']og:title["']/i);
      const ogDesc = html.match(/<meta[^>]+property=["']og:description["']/i);
      const ogImage = html.match(/<meta[^>]+property=["']og:image["']/i);
      const ogCount = [ogTitle, ogDesc, ogImage].filter(Boolean).length;
      if (ogCount === 0) return { id, label: 'Open Graph tags', status: 'fail', value: 'Ontbreken', detail: 'Voeg og:title, og:description en og:image toe voor social sharing.' };
      if (ogCount < 3) return { id, label: 'Open Graph tags', status: 'warning', value: `${ogCount}/3 aanwezig`, detail: 'Voeg de ontbrekende OG tags toe.' };
      return { id, label: 'Open Graph tags', status: 'pass', value: 'Compleet ✓' };
    }

    case 'canonical': {
      const canonical = html.match(/<link[^>]+rel=["']canonical["']/i);
      return { id, label: 'Canonical tag', status: canonical ? 'pass' : 'warning', value: canonical ? 'Aanwezig ✓' : 'Ontbreekt', detail: canonical ? undefined : 'Voeg een canonical tag toe om duplicate content te voorkomen.' };
    }

    case 'https': {
      const isHttps = url.startsWith('https://');
      return { id, label: 'HTTPS/SSL', status: isHttps ? 'pass' : 'fail', value: isHttps ? 'Beveiligd ✓' : 'Niet beveiligd', detail: isHttps ? undefined : 'Installeer een SSL-certificaat voor je website.' };
    }

    case 'viewport': {
      const viewport = html.match(/<meta[^>]+name=["']viewport["']/i);
      return { id, label: 'Viewport meta tag', status: viewport ? 'pass' : 'fail', value: viewport ? 'Aanwezig ✓' : 'Ontbreekt', detail: viewport ? undefined : 'Voeg <meta name="viewport"> toe voor mobiele weergave.' };
    }

    case 'lang': {
      const langMatch = html.match(/<html[^>]+lang=["']([^"']*)["']/i);
      if (!langMatch) return { id, label: 'Taal attribuut', status: 'warning', value: 'Ontbreekt', detail: 'Voeg lang="nl" toe aan je <html> tag.' };
      return { id, label: 'Taal attribuut', status: 'pass', value: `"${langMatch[1]}" ✓` };
    }

    case 'robots-meta': {
      const robotsMeta = html.match(/<meta[^>]+name=["']robots["'][^>]+content=["']([\s\S]*?)["']/i);
      if (!robotsMeta) return { id, label: 'Robots meta tag', status: 'pass', value: 'Niet ingesteld (standaard index)' };
      const content = robotsMeta[1].toLowerCase();
      if (content.includes('noindex')) return { id, label: 'Robots meta tag', status: 'fail', value: 'noindex!', detail: 'Deze pagina wordt NIET geïndexeerd door Google. Verwijder noindex als dit niet gewenst is.' };
      return { id, label: 'Robots meta tag', status: 'pass', value: content, detail: 'Robots tag is ingesteld.' };
    }

    case 'charset': {
      const charset = html.match(/<meta[^>]+charset=["']?([^"'\s>]+)/i);
      if (!charset) return { id, label: 'Charset', status: 'warning', value: 'Ontbreekt', detail: 'Voeg <meta charset="UTF-8"> toe.' };
      return { id, label: 'Charset', status: 'pass', value: charset[1].toUpperCase() + ' ✓' };
    }

    case 'favicon': {
      const favicon = html.match(/<link[^>]+rel=["'](icon|shortcut icon)["']/i);
      return { id, label: 'Favicon', status: favicon ? 'pass' : 'warning', value: favicon ? 'Aanwezig ✓' : 'Ontbreekt', detail: favicon ? undefined : 'Voeg een favicon toe voor herkenning in browser tabs.' };
    }

    case 'twitter-cards': {
      const twCard = html.match(/<meta[^>]+name=["']twitter:card["']/i);
      const twTitle = html.match(/<meta[^>]+name=["']twitter:title["']/i);
      const count = [twCard, twTitle].filter(Boolean).length;
      if (count === 0) return { id, label: 'Twitter Card tags', status: 'warning', value: 'Ontbreken', detail: 'Voeg twitter:card en twitter:title toe voor betere social sharing op X.' };
      return { id, label: 'Twitter Card tags', status: 'pass', value: 'Aanwezig ✓' };
    }

    default:
      return null;
  }
}

// Default checks for tools without a specific mapping
const ALL_CHECKS: CheckId[] = ['title', 'meta-desc', 'h1', 'headings', 'images', 'internal-links', 'og-tags', 'canonical', 'https'];

Deno.serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const body = await req.json();
    const { url, checks: requestedChecks } = body;

    if (!url) {
      return new Response(
        JSON.stringify({ success: false, error: 'URL is verplicht' }),
        { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    let formattedUrl = url.trim();
    if (!formattedUrl.startsWith('http://') && !formattedUrl.startsWith('https://')) {
      formattedUrl = `https://${formattedUrl}`;
    }

    try {
      new URL(formattedUrl);
    } catch {
      return new Response(
        JSON.stringify({ success: false, error: 'Ongeldige URL' }),
        { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    console.log('Analyzing URL:', formattedUrl, 'checks:', requestedChecks || 'all');

    const response = await fetch(formattedUrl, {
      headers: {
        'User-Agent': 'KlikKlaarSEO-Bot/1.0 (+https://klikklaar.nl)',
        'Accept': 'text/html',
      },
      redirect: 'follow',
    });

    if (!response.ok) {
      return new Response(
        JSON.stringify({ success: false, error: `Website gaf status ${response.status}` }),
        { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    const html = await response.text();

    // Use requested checks or fall back to all
    const checksToRun: CheckId[] = (requestedChecks && Array.isArray(requestedChecks) && requestedChecks.length > 0)
      ? requestedChecks as CheckId[]
      : ALL_CHECKS;

    const results: CheckResult[] = [];
    for (const checkId of checksToRun) {
      const result = runCheck(checkId, html, formattedUrl);
      if (result) results.push(result);
    }

    // Calculate score
    const maxScore = results.length * 10;
    const earned = results.reduce((sum, c) => {
      if (c.status === 'pass') return sum + 10;
      if (c.status === 'warning') return sum + 5;
      return sum;
    }, 0);
    const finalScore = maxScore > 0 ? Math.round((earned / maxScore) * 100) : 0;

    return new Response(
      JSON.stringify({
        success: true,
        url: formattedUrl,
        score: finalScore,
        checks: results,
      }),
      { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );
  } catch (error) {
    console.error('Error analyzing URL:', error);
    const message = error instanceof Error ? error.message : 'Analyse mislukt';
    return new Response(
      JSON.stringify({ success: false, error: message }),
      { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );
  }
});
