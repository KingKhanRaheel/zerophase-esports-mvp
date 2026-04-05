import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";

export const usePlayer = (id: string | undefined) => {
  return useQuery({
    queryKey: ["player", id],
    enabled: !!id,
    queryFn: async () => {
      const { data: player, error } = await supabase
        .from("players")
        .select("*")
        .eq("id", id!)
        .single();
      if (error) throw error;

      const [{ data: team }, { data: highlights }] = await Promise.all([
        supabase.from("teams").select("*, games(*)").eq("id", player.team_id).single(),
        supabase.from("player_highlights").select("*").eq("player_id", id!).order("display_order"),
      ]);

      return { ...player, team, highlights: highlights || [] };
    },
  });
};
