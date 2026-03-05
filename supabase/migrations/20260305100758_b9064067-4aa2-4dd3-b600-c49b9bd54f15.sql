
CREATE TABLE public.tool_leads (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  email text NOT NULL,
  tool_slug text NOT NULL,
  url_checked text NOT NULL,
  created_at timestamptz NOT NULL DEFAULT now()
);

ALTER TABLE public.tool_leads ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can insert leads"
  ON public.tool_leads
  FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);
