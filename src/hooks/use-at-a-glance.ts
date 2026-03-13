import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";

export const useAtAGlance = () => {
  return useQuery({
    queryKey: ["at-a-glance"],
    queryFn: async () => {
      // Get the singleton config row
      const { data: config, error: configError } = await supabase
        .from("at_a_glance")
        .select("*")
        .limit(1)
        .single();
      if (configError) throw configError;

      // Fetch related data in parallel
      const [teamResult, playerResult, sponsorResult] = await Promise.all([
        config.featured_team_id
          ? supabase
              .from("teams")
              .select("*, games(*), players(*)")
              .eq("id", config.featured_team_id)
              .single()
          : Promise.resolve({ data: null, error: null }),
        config.player_of_month_id
          ? supabase
              .from("players")
              .select("*, teams(name, games(name))")
              .eq("id", config.player_of_month_id)
              .single()
          : Promise.resolve({ data: null, error: null }),
        config.sponsor_spotlight_id
          ? supabase
              .from("sponsors")
              .select("*")
              .eq("id", config.sponsor_spotlight_id)
              .single()
          : Promise.resolve({ data: null, error: null }),
      ]);

      return {
        featuredTeam: teamResult.data,
        playerOfMonth: playerResult.data,
        sponsorSpotlight: sponsorResult.data,
      };
    },
  });
};
