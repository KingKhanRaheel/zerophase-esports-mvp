
CREATE TABLE public.management (
  id uuid NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name text NOT NULL,
  title text NOT NULL,
  bio text NOT NULL DEFAULT '',
  photo_url text,
  display_order integer NOT NULL DEFAULT 0,
  created_at timestamp with time zone NOT NULL DEFAULT now(),
  updated_at timestamp with time zone NOT NULL DEFAULT now()
);

ALTER TABLE public.management ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Management is viewable by everyone"
  ON public.management
  FOR SELECT
  TO public
  USING (true);
