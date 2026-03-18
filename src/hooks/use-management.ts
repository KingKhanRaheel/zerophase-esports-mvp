import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";

export const useManagement = () => {
  return useQuery({
    queryKey: ["management"],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("management")
        .select("*")
        .order("display_order", { ascending: true });
      if (error) throw error;
      return data;
    },
  });
};
