ALTER TABLE public.players 
ADD COLUMN bio text DEFAULT '' NOT NULL,
ADD COLUMN social_twitter text DEFAULT NULL,
ADD COLUMN social_instagram text DEFAULT NULL,
ADD COLUMN social_youtube text DEFAULT NULL,
ADD COLUMN highlights_embed text DEFAULT NULL,
ADD COLUMN joined_at date DEFAULT NULL;