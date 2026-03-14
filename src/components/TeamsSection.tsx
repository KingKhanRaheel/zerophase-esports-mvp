import { motion } from "framer-motion";
import { Users } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useTeamsWithPlayers } from "@/hooks/use-teams-with-players";

const TeamsSection = () => {
  const { data: sections, isLoading, error } = useTeamsWithPlayers();

  return (
    <section id="teams" className="py-24 md:py-32 bg-muted/30 relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">
            OUR <span className="text-primary">TEAMS</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto text-lg">
            Active rosters across India's biggest competitive titles.
          </p>
        </motion.div>

        {isLoading && (
          <p className="text-center text-muted-foreground">Loading teams...</p>
        )}

        {error && (
          <p className="text-center text-destructive">Failed to load teams.</p>
        )}

        {sections && sections.length === 0 && (
          <p className="text-center text-muted-foreground">No active teams found.</p>
        )}

        <div className="max-w-4xl mx-auto space-y-10">
          {sections?.map((section, i) => (
            <motion.div
              key={section.game}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <div className="flex items-center gap-3 mb-4">
                <h3 className="text-3xl font-heading font-bold text-primary text-glow-cyan">
                  {section.game}
                </h3>
                <span className="text-xs text-muted-foreground uppercase tracking-widest mt-1">
                  {section.tag}
                </span>
              </div>

              <Accordion type="multiple" className="space-y-3">
                {section.lineups.map((lineup) => (
                  <AccordionItem
                    key={lineup.id}
                    value={lineup.id}
                    className="game-card bg-card border border-border rounded-lg overflow-hidden hover:border-primary/20 transition-all duration-300 px-0"
                  >
                    <AccordionTrigger className="px-6 py-4 hover:no-underline">
                      <div className="flex items-center gap-3">
                        <Users className="w-5 h-5 text-muted-foreground/50 icon-glow" />
                        <span className="text-lg font-heading font-semibold text-foreground">
                          {lineup.name}
                        </span>
                        <span className="text-xs text-muted-foreground bg-muted px-2 py-0.5 rounded-full">
                          {lineup.players.length} players
                        </span>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="px-6 pb-4">
                      <div className="space-y-2 pt-2">
                        {lineup.players.length === 0 && (
                          <p className="text-sm text-muted-foreground italic">No players added yet.</p>
                        )}
                        {lineup.players.map((player) => (
                          <div
                            key={player.id}
                            className="flex items-center justify-between py-2 border-b border-border/50 last:border-0"
                          >
                            <span className="text-sm font-medium text-foreground">
                              {player.ign}
                            </span>
                            <span className="text-xs text-muted-foreground uppercase tracking-wider bg-muted px-3 py-1 rounded-full">
                              {player.role}
                            </span>
                          </div>
                        ))}
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamsSection;
