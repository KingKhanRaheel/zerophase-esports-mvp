
-- Create updated_at trigger function
CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SET search_path = public;

-- ============ GAMES ============
CREATE TABLE public.games (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  tag TEXT NOT NULL,
  image_url TEXT,
  display_order INT NOT NULL DEFAULT 0,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

ALTER TABLE public.games ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Games are viewable by everyone" ON public.games FOR SELECT USING (true);

CREATE TRIGGER update_games_updated_at BEFORE UPDATE ON public.games
FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();

-- ============ TEAMS ============
CREATE TABLE public.teams (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  game_id UUID NOT NULL REFERENCES public.games(id) ON DELETE CASCADE,
  name TEXT NOT NULL,
  is_active BOOLEAN NOT NULL DEFAULT true,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

ALTER TABLE public.teams ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Active teams are viewable by everyone" ON public.teams FOR SELECT USING (is_active = true);

CREATE TRIGGER update_teams_updated_at BEFORE UPDATE ON public.teams
FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();

-- ============ PLAYERS ============
CREATE TABLE public.players (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  team_id UUID NOT NULL REFERENCES public.teams(id) ON DELETE CASCADE,
  name TEXT NOT NULL,
  ign TEXT NOT NULL,
  role TEXT NOT NULL,
  photo_url TEXT,
  display_order INT NOT NULL DEFAULT 0,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

ALTER TABLE public.players ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Players are viewable by everyone" ON public.players FOR SELECT USING (true);

CREATE TRIGGER update_players_updated_at BEFORE UPDATE ON public.players
FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();

-- ============ SPONSORS ============
CREATE TABLE public.sponsors (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  logo_url TEXT,
  tier TEXT NOT NULL DEFAULT 'Partner',
  team_description TEXT NOT NULL DEFAULT 'Org',
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

ALTER TABLE public.sponsors ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Sponsors are viewable by everyone" ON public.sponsors FOR SELECT USING (true);

CREATE TRIGGER update_sponsors_updated_at BEFORE UPDATE ON public.sponsors
FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();

-- ============ ANNOUNCEMENTS ============
CREATE TABLE public.announcements (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  title TEXT NOT NULL,
  content TEXT,
  published_at TIMESTAMPTZ,
  is_published BOOLEAN NOT NULL DEFAULT false,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

ALTER TABLE public.announcements ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Published announcements are viewable by everyone" ON public.announcements FOR SELECT USING (is_published = true);

CREATE TRIGGER update_announcements_updated_at BEFORE UPDATE ON public.announcements
FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();

-- ============ AT A GLANCE ============
CREATE TABLE public.at_a_glance (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  featured_team_id UUID REFERENCES public.teams(id) ON DELETE SET NULL,
  player_of_month_id UUID REFERENCES public.players(id) ON DELETE SET NULL,
  sponsor_spotlight_id UUID REFERENCES public.sponsors(id) ON DELETE SET NULL,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

ALTER TABLE public.at_a_glance ENABLE ROW LEVEL SECURITY;
CREATE POLICY "At a glance is viewable by everyone" ON public.at_a_glance FOR SELECT USING (true);

CREATE TRIGGER update_at_a_glance_updated_at BEFORE UPDATE ON public.at_a_glance
FOR EACH ROW EXECUTE FUNCTION public.update_updated_at_column();

-- Insert singleton row for at_a_glance
INSERT INTO public.at_a_glance (id) VALUES (gen_random_uuid());
