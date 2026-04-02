import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import Stripe from "https://esm.sh/stripe@18.5.0";
import { createClient } from "npm:@supabase/supabase-js@2.57.2";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version",
};

const logStep = (step: string, details?: any) => {
  const detailsStr = details ? ` - ${JSON.stringify(details)}` : "";
  console.log(`[CREATE-CHECKOUT] ${step}${detailsStr}`);
};

// Promo code definitions
const PROMO_CODES: Record<string, { skipSetupFee: boolean; stripeCouponId?: string }> = {
  GEENSTARTKOSTEN: { skipSetupFee: true },
  VIP15: { skipSetupFee: true, stripeCouponId: "IblOAeeT" },
};

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    logStep("Function started");

    const { priceId, setupFeePriceId, promoCode } = await req.json();
    if (!priceId) throw new Error("priceId is required");
    logStep("Request parsed", { priceId, setupFeePriceId, promoCode });

    const stripeKey = Deno.env.get("STRIPE_SECRET_KEY");
    if (!stripeKey) throw new Error("STRIPE_SECRET_KEY is not set");

    const stripe = new Stripe(stripeKey, { apiVersion: "2025-08-27.basil" });

    // Validate promo code
    const normalizedCode = promoCode?.trim()?.toUpperCase();
    const promoConfig = normalizedCode ? PROMO_CODES[normalizedCode] : undefined;
    if (normalizedCode && !promoConfig) {
      return new Response(JSON.stringify({ error: "Ongeldige kortingscode" }), {
        headers: { ...corsHeaders, "Content-Type": "application/json" },
        status: 400,
      });
    }
    logStep("Promo code resolved", { normalizedCode, promoConfig });

    // Try to get authenticated user (optional - supports guest checkout)
    let customerEmail: string | undefined;
    let customerId: string | undefined;

    const authHeader = req.headers.get("Authorization");
    if (authHeader) {
      const supabaseClient = createClient(
        Deno.env.get("SUPABASE_URL") ?? "",
        Deno.env.get("SUPABASE_ANON_KEY") ?? ""
      );
      const token = authHeader.replace("Bearer ", "");
      const { data } = await supabaseClient.auth.getUser(token);
      if (data?.user?.email) {
        customerEmail = data.user.email;
        logStep("Authenticated user", { email: customerEmail });

        const customers = await stripe.customers.list({
          email: customerEmail,
          limit: 1,
        });
        if (customers.data.length > 0) {
          customerId = customers.data[0].id;
          logStep("Existing Stripe customer found", { customerId });
        }
      }
    }

    logStep("Creating embedded checkout session (subscription)");

    const origin = req.headers.get("origin") || "https://klikklaar-next-level.lovable.app";

    // Build line items - conditionally include setup fee
    const lineItems: Array<{ price: string; quantity: number }> = [
      { price: priceId, quantity: 1 },
    ];
    if (setupFeePriceId && !promoConfig?.skipSetupFee) {
      lineItems.push({ price: setupFeePriceId, quantity: 1 });
    }

    // Build session params
    const sessionParams: any = {
      customer: customerId,
      customer_email: customerId ? undefined : customerEmail,
      line_items: lineItems,
      mode: "subscription",
      ui_mode: "embedded",
      return_url: `${origin}/betaling-geslaagd?session_id={CHECKOUT_SESSION_ID}`,
      locale: "nl",
    };

    // Apply Stripe coupon if promo code has one (forever 15% discount)
    if (promoConfig?.stripeCouponId) {
      sessionParams.discounts = [{ coupon: promoConfig.stripeCouponId }];
    }

    const session = await stripe.checkout.sessions.create(sessionParams);

    logStep("Embedded checkout session created", { sessionId: session.id });

    return new Response(JSON.stringify({ clientSecret: session.client_secret }), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
      status: 200,
    });
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : String(error);
    logStep("ERROR", { message: errorMessage });
    return new Response(JSON.stringify({ error: errorMessage }), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
      status: 500,
    });
  }
});
