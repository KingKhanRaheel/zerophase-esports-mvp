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

      // Fetch team + game info
      const { data: team } = await supabase
        .from("teams")
        .select("*, games(*)")
        .eq("id", player.team_id)
        .single();

      return { ...player, team };
    },
  });
};
