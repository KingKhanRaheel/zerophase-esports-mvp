import { motion } from "framer-motion";
import { ChevronDown, Users } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface Player {
  name: string;
  role: string;
  ign: string;
}

interface Lineup {
  name: string;
  players: Player[];
}

interface GameSection {
  game: string;
  tag: string;
  lineups: Lineup[];
}

const teamsData: GameSection[] = [
  {
    game: "BGMI",
    tag: "Battle Royale",
    lineups: [
      {
        name: "ZeroPhase Main",
        players: [
          { name: "Player 1", role: "IGL", ign: "ZP_Alpha" },
          { name: "Player 2", role: "Assaulter", ign: "ZP_Blaze" },
          { name: "Player 3", role: "Support", ign: "ZP_Ghost" },
          { name: "Player 4", role: "Sniper", ign: "ZP_Venom" },
        ],
      },
      {
        name: "ZeroPhase Academy",
        players: [
          { name: "Player 1", role: "IGL", ign: "ZPA_Lead" },
          { name: "Player 2", role: "Assaulter", ign: "ZPA_Rush" },
          { name: "Player 3", role: "Support", ign: "ZPA_Aid" },
          { name: "Player 4", role: "Sniper", ign: "ZPA_Hawk" },
        ],
      },
    ],
  },
  {
    game: "VALORANT",
    tag: "Tactical Shooter",
    lineups: [
      {
        name: "ZeroPhase Prime",
        players: [
          { name: "Player 1", role: "Duelist", ign: "ZP_Phantom" },
          { name: "Player 2", role: "Controller", ign: "ZP_Smoke" },
          { name: "Player 3", role: "Sentinel", ign: "ZP_Wall" },
          { name: "Player 4", role: "Initiator", ign: "ZP_Flash" },
          { name: "Player 5", role: "Flex", ign: "ZP_Flex" },
        ],
      },
    ],
  },
  {
    game: "FREE FIRE MAX",
    tag: "Battle Royale",
    lineups: [
      {
        name: "ZeroPhase Alpha",
        players: [
          { name: "Player 1", role: "Rusher", ign: "ZP_Storm" },
          { name: "Player 2", role: "Sniper", ign: "ZP_Scope" },
          { name: "Player 3", role: "Support", ign: "ZP_Shield" },
          { name: "Player 4", role: "IGL", ign: "ZP_Mind" },
        ],
      },
      {
        name: "ZeroPhase Beta",
        players: [
          { name: "Player 1", role: "Rusher", ign: "ZPB_Fury" },
          { name: "Player 2", role: "Sniper", ign: "ZPB_Aim" },
          { name: "Player 3", role: "Support", ign: "ZPB_Guard" },
          { name: "Player 4", role: "IGL", ign: "ZPB_Brain" },
        ],
      },
      {
        name: "ZeroPhase Gamma",
        players: [
          { name: "Player 1", role: "Rusher", ign: "ZPG_Bolt" },
          { name: "Player 2", role: "Sniper", ign: "ZPG_Eye" },
          { name: "Player 3", role: "Support", ign: "ZPG_Back" },
          { name: "Player 4", role: "IGL", ign: "ZPG_Tact" },
        ],
      },
    ],
  },
  {
    game: "MLBB",
    tag: "MOBA",
    lineups: [
      {
        name: "ZeroPhase Main",
        players: [
          { name: "Player 1", role: "Gold Lane", ign: "ZP_Gold" },
          { name: "Player 2", role: "Jungle", ign: "ZP_Hunt" },
          { name: "Player 3", role: "Mid Lane", ign: "ZP_Mage" },
          { name: "Player 4", role: "Roamer", ign: "ZP_Roam" },
          { name: "Player 5", role: "EXP Lane", ign: "ZP_Tank" },
        ],
      },
    ],
  },
];

const TeamsSection = () => {
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

        <div className="max-w-4xl mx-auto space-y-10">
          {teamsData.map((section, i) => (
            <motion.div
              key={section.game}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              {/* Game Title */}
              <div className="flex items-center gap-3 mb-4">
                <h3 className="text-3xl font-heading font-bold text-primary">
                  {section.game}
                </h3>
                <span className="text-xs text-muted-foreground uppercase tracking-widest mt-1">
                  {section.tag}
                </span>
              </div>

              {/* Lineups as Accordion */}
              <Accordion type="multiple" className="space-y-3">
                {section.lineups.map((lineup) => (
                  <AccordionItem
                    key={lineup.name}
                    value={lineup.name}
                    className="bg-card border border-border rounded-lg overflow-hidden hover:border-primary/20 transition-all duration-300 px-0"
                  >
                    <AccordionTrigger className="px-6 py-4 hover:no-underline">
                      <div className="flex items-center gap-3">
                        <Users className="w-5 h-5 text-muted-foreground/50" />
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
                        {lineup.players.map((player) => (
                          <div
                            key={player.ign}
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
