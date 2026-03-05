
CREATE TABLE public.sales_leads (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  created_at timestamp with time zone NOT NULL DEFAULT now(),
  name text NOT NULL,
  phone text NOT NULL,
  landing_page text NOT NULL,
  q1_rekeningnummer boolean NOT NULL DEFAULT false,
  q2_doelgroep boolean NOT NULL DEFAULT false,
  q3_hoofdinkomen boolean NOT NULL DEFAULT false
);

ALTER TABLE public.sales_leads ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can insert sales leads"
ON public.sales_leads
FOR INSERT
WITH CHECK (true);
