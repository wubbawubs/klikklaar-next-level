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

function parseChecks(html: string, url: string): { checks: CheckResult[]; score: number } {
  const checks: CheckResult[] = [];

  // 1. Title tag
  const titleMatch = html.match(/<title[^>]*>([\s\S]*?)<\/title>/i);
  const title = titleMatch ? titleMatch[1].trim() : '';
  if (!title) {
    checks.push({ id: 'title', label: 'Title tag', status: 'fail', value: 'Ontbreekt', detail: 'Voeg een unieke title tag toe van 30-60 tekens.' });
  } else if (title.length < 30) {
    checks.push({ id: 'title', label: 'Title tag', status: 'warning', value: `${title.length} tekens (te kort)`, detail: `"${title}" — Maak je title langer (30-60 tekens).` });
  } else if (title.length > 60) {
    checks.push({ id: 'title', label: 'Title tag', status: 'warning', value: `${title.length} tekens (te lang)`, detail: `"${title.substring(0, 60)}..." — Google kapt af na ~60 tekens.` });
  } else {
    checks.push({ id: 'title', label: 'Title tag', status: 'pass', value: `${title.length} tekens ✓`, detail: `"${title}"` });
  }

  // 2. Meta description
  const descMatch = html.match(/<meta[^>]+name=["']description["'][^>]+content=["']([\s\S]*?)["']/i)
    || html.match(/<meta[^>]+content=["']([\s\S]*?)["'][^>]+name=["']description["']/i);
  const desc = descMatch ? descMatch[1].trim() : '';
  if (!desc) {
    checks.push({ id: 'meta-desc', label: 'Meta description', status: 'fail', value: 'Ontbreekt', detail: 'Schrijf een unieke meta description van 120-160 tekens.' });
  } else if (desc.length < 120) {
    checks.push({ id: 'meta-desc', label: 'Meta description', status: 'warning', value: `${desc.length} tekens (kort)`, detail: 'Gebruik 120-160 tekens voor maximale CTR.' });
  } else if (desc.length > 160) {
    checks.push({ id: 'meta-desc', label: 'Meta description', status: 'warning', value: `${desc.length} tekens (te lang)`, detail: 'Google toont max ~160 tekens. Verkort je description.' });
  } else {
    checks.push({ id: 'meta-desc', label: 'Meta description', status: 'pass', value: `${desc.length} tekens ✓` });
  }

  // 3. H1
  const h1Matches = html.match(/<h1[^>]*>[\s\S]*?<\/h1>/gi) || [];
  if (h1Matches.length === 0) {
    checks.push({ id: 'h1', label: 'H1 heading', status: 'fail', value: 'Geen H1 gevonden', detail: 'Elke pagina heeft precies één H1 nodig.' });
  } else if (h1Matches.length > 1) {
    checks.push({ id: 'h1', label: 'H1 heading', status: 'warning', value: `${h1Matches.length} H1 tags`, detail: 'Gebruik slechts één H1 per pagina.' });
  } else {
    const h1Text = h1Matches[0].replace(/<[^>]+>/g, '').trim();
    checks.push({ id: 'h1', label: 'H1 heading', status: 'pass', value: 'Aanwezig ✓', detail: `"${h1Text.substring(0, 80)}"` });
  }

  // 4. Heading hierarchy
  const h2Count = (html.match(/<h2[^>]*>/gi) || []).length;
  const h3Count = (html.match(/<h3[^>]*>/gi) || []).length;
  if (h2Count === 0) {
    checks.push({ id: 'headings', label: 'Heading structuur', status: 'warning', value: 'Geen H2 tags', detail: 'Gebruik H2 subheadings om je content te structureren.' });
  } else {
    checks.push({ id: 'headings', label: 'Heading structuur', status: 'pass', value: `${h2Count} H2, ${h3Count} H3 ✓` });
  }

  // 5. Images without alt
  const imgTags = html.match(/<img[^>]*>/gi) || [];
  const imgNoAlt = imgTags.filter(img => !img.match(/alt=["'][^"']+["']/i));
  if (imgTags.length === 0) {
    checks.push({ id: 'images', label: 'Afbeeldingen', status: 'pass', value: 'Geen afbeeldingen' });
  } else if (imgNoAlt.length > 0) {
    checks.push({ id: 'images', label: 'Alt-teksten', status: imgNoAlt.length > 3 ? 'fail' : 'warning', value: `${imgNoAlt.length}/${imgTags.length} zonder alt`, detail: 'Voeg beschrijvende alt-teksten toe aan alle afbeeldingen.' });
  } else {
    checks.push({ id: 'images', label: 'Alt-teksten', status: 'pass', value: `Alle ${imgTags.length} hebben alt ✓` });
  }

  // 6. Internal links
  const linkTags = html.match(/<a[^>]+href=["'][^"']*["'][^>]*>/gi) || [];
  const internalLinks = linkTags.filter(l => {
    const hrefMatch = l.match(/href=["']([^"']*)["']/i);
    if (!hrefMatch) return false;
    const href = hrefMatch[1];
    return href.startsWith('/') || href.startsWith(url);
  });
  if (internalLinks.length < 3) {
    checks.push({ id: 'internal-links', label: 'Interne links', status: 'warning', value: `${internalLinks.length} links`, detail: 'Voeg meer interne links toe (minimaal 3-5 per pagina).' });
  } else {
    checks.push({ id: 'internal-links', label: 'Interne links', status: 'pass', value: `${internalLinks.length} links ✓` });
  }

  // 7. Open Graph tags
  const ogTitle = html.match(/<meta[^>]+property=["']og:title["']/i);
  const ogDesc = html.match(/<meta[^>]+property=["']og:description["']/i);
  const ogImage = html.match(/<meta[^>]+property=["']og:image["']/i);
  const ogCount = [ogTitle, ogDesc, ogImage].filter(Boolean).length;
  if (ogCount === 0) {
    checks.push({ id: 'og-tags', label: 'Open Graph tags', status: 'fail', value: 'Ontbreken', detail: 'Voeg og:title, og:description en og:image toe voor social sharing.' });
  } else if (ogCount < 3) {
    checks.push({ id: 'og-tags', label: 'Open Graph tags', status: 'warning', value: `${ogCount}/3 aanwezig`, detail: 'Voeg de ontbrekende OG tags toe.' });
  } else {
    checks.push({ id: 'og-tags', label: 'Open Graph tags', status: 'pass', value: 'Compleet ✓' });
  }

  // 8. Canonical
  const canonical = html.match(/<link[^>]+rel=["']canonical["']/i);
  checks.push({
    id: 'canonical',
    label: 'Canonical tag',
    status: canonical ? 'pass' : 'warning',
    value: canonical ? 'Aanwezig ✓' : 'Ontbreekt',
    detail: canonical ? undefined : 'Voeg een canonical tag toe om duplicate content te voorkomen.',
  });

  // Calculate score
  const maxScore = checks.length * 10;
  const earned = checks.reduce((sum, c) => {
    if (c.status === 'pass') return sum + 10;
    if (c.status === 'warning') return sum + 5;
    return sum;
  }, 0);
  const score = Math.round((earned / maxScore) * 100);

  return { checks, score };
}

Deno.serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { url } = await req.json();

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

    // Validate URL
    try {
      new URL(formattedUrl);
    } catch {
      return new Response(
        JSON.stringify({ success: false, error: 'Ongeldige URL' }),
        { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    console.log('Analyzing URL:', formattedUrl);

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
    const { checks, score } = parseChecks(html, formattedUrl);

    // Check HTTPS
    const isHttps = formattedUrl.startsWith('https://');
    checks.push({
      id: 'https',
      label: 'HTTPS/SSL',
      status: isHttps ? 'pass' : 'fail',
      value: isHttps ? 'Beveiligd ✓' : 'Niet beveiligd',
      detail: isHttps ? undefined : 'Installeer een SSL-certificaat voor je website.',
    });

    // Recalculate score with HTTPS
    const maxScore = checks.length * 10;
    const earned = checks.reduce((sum, c) => {
      if (c.status === 'pass') return sum + 10;
      if (c.status === 'warning') return sum + 5;
      return sum;
    }, 0);
    const finalScore = Math.round((earned / maxScore) * 100);

    return new Response(
      JSON.stringify({
        success: true,
        url: formattedUrl,
        score: finalScore,
        checks,
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
