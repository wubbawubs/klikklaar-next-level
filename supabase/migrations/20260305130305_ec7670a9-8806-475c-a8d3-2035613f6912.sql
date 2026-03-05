ALTER TABLE public.sales_leads ALTER COLUMN q2_doelgroep TYPE text USING CASE WHEN q2_doelgroep THEN 'student' ELSE '' END;
ALTER TABLE public.sales_leads ALTER COLUMN q2_doelgroep SET DEFAULT '';