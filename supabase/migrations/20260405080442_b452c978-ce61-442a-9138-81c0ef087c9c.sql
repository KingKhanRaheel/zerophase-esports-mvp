CREATE TABLE public.player_highlights (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  player_id UUID NOT NULL REFERENCES public.players(id) ON DELETE CASCADE,
  url TEXT NOT NULL,
  title TEXT,
  display_order INTEGER NOT NULL DEFAULT 0,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

ALTER TABLE public.player_highlights ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Highlights are viewable by everyone"
ON public.player_highlights
FOR SELECT
USING (true);

CREATE INDEX idx_player_highlights_player_id ON public.player_highlights(player_id);