import { motion, useInView, useSpring, useTransform } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { Users, Gamepad2, Trophy, Handshake } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { useQuery } from "@tanstack/react-query";

const useStats = () => {
  return useQuery({
    queryKey: ["homepage-stats"],
    queryFn: async () => {
      const [players, teams, games, sponsors] = await Promise.all([
        supabase.from("players").select("id", { count: "exact", head: true }),
        supabase.from("teams").select("id", { count: "exact", head: true }),
        supabase.from("games").select("id", { count: "exact", head: true }),
        supabase.from("sponsors").select("id", { count: "exact", head: true }),
      ]);
      return {
        players: players.count ?? 0,
        teams: teams.count ?? 0,
        games: games.count ?? 0,
        sponsors: sponsors.count ?? 0,
      };
    },
  });
};

const AnimatedNumber = ({ value }: { value: number }) => {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const spring = useSpring(0, { duration: 1500, bounce: 0 });
  const display = useTransform(spring, (v) => Math.round(v));

  useEffect(() => {
    if (isInView) spring.set(value);
  }, [isInView, value, spring]);

  useEffect(() => {
    const unsubscribe = display.on("change", (v) => {
      if (ref.current) ref.current.textContent = String(v) + "+";
    });
    return unsubscribe;
  }, [display]);

  return <span ref={ref}>0+</span>;
};

const stats = [
  { key: "players" as const, label: "Players", icon: Users },
  { key: "teams" as const, label: "Teams", icon: Trophy },
  { key: "games" as const, label: "Games", icon: Gamepad2 },
  { key: "sponsors" as const, label: "Partners", icon: Handshake },
];

const StatsCounter = () => {
  const { data } = useStats();

  if (!data) return null;

  return (
    <section className="py-12 sm:py-16 border-y border-border/40">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 max-w-4xl mx-auto">
          {stats.map((stat, i) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.key}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="text-center"
              >
                <Icon className="w-6 h-6 text-primary mx-auto mb-2 opacity-70" />
                <div className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold text-foreground">
                  <AnimatedNumber value={data[stat.key]} />
                </div>
                <span className="text-xs sm:text-sm text-muted-foreground uppercase tracking-widest mt-1 block">
                  {stat.label}
                </span>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default StatsCounter;
