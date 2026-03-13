import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";

export interface PlayerData {
  id: string;
  name: string;
  ign: string;
  role: string;
  photo_url: string | null;
  display_order: number;
}

export interface TeamData {
  id: string;
  name: string;
  is_active: boolean;
  game: {
    id: string;
    name: string;
    tag: string;
    image_url: string | null;
  };
  players: PlayerData[];
}

export interface GameSection {
  game: string;
  tag: string;
  image_url: string | null;
  lineups: {
    id: string;
    name: string;
    players: PlayerData[];
  }[];
}

export const useTeamsWithPlayers = () => {
  return useQuery({
    queryKey: ["teams-with-players"],
    queryFn: async () => {
      // Fetch games
      const { data: games, error: gamesError } = await supabase
        .from("games")
        .select("*")
        .order("display_order");
      if (gamesError) throw gamesError;

      // Fetch active teams (RLS already filters is_active=true)
      const { data: teams, error: teamsError } = await supabase
        .from("teams")
        .select("*");
      if (teamsError) throw teamsError;

      // Fetch players
      const { data: players, error: playersError } = await supabase
        .from("players")
        .select("*")
        .order("display_order");
      if (playersError) throw playersError;

      // Group into GameSection structure
      const sections: GameSection[] = games
        .map((game) => {
          const gameTeams = teams.filter((t) => t.game_id === game.id);
          if (gameTeams.length === 0) return null;
          return {
            game: game.name,
            tag: game.tag,
            image_url: game.image_url,
            lineups: gameTeams.map((team) => ({
              id: team.id,
              name: team.name,
              players: players.filter((p) => p.team_id === team.id),
            })),
          };
        })
        .filter(Boolean) as GameSection[];

      return sections;
    },
  });
};
