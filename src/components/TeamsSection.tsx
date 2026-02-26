import { motion } from "framer-motion";
import { Users } from "lucide-react";

interface Player {
  name: string;
  role: string;
  ign: string;
}

interface Team {
  game: string;
  tag: string;
  players: Player[];
}

const teamsData: Team[] = [
  {
    game: "BGMI",
    tag: "Battle Royale",
    players: [
      { name: "Player 1", role: "IGL", ign: "ZP_Alpha" },
      { name: "Player 2", role: "Assaulter", ign: "ZP_Blaze" },
      { name: "Player 3", role: "Support", ign: "ZP_Ghost" },
      { name: "Player 4", role: "Sniper", ign: "ZP_Venom" },
    ],
  },
  {
    game: "VALORANT",
    tag: "Tactical Shooter",
    players: [
      { name: "Player 1", role: "Duelist", ign: "ZP_Phantom" },
      { name: "Player 2", role: "Controller", ign: "ZP_Smoke" },
      { name: "Player 3", role: "Sentinel", ign: "ZP_Wall" },
      { name: "Player 4", role: "Initiator", ign: "ZP_Flash" },
      { name: "Player 5", role: "Flex", ign: "ZP_Flex" },
    ],
  },
  {
    game: "FREE FIRE MAX",
    tag: "Battle Royale",
    players: [
      { name: "Player 1", role: "Rusher", ign: "ZP_Storm" },
      { name: "Player 2", role: "Sniper", ign: "ZP_Scope" },
      { name: "Player 3", role: "Support", ign: "ZP_Shield" },
      { name: "Player 4", role: "IGL", ign: "ZP_Mind" },
    ],
  },
  {
    game: "MLBB",
    tag: "MOBA",
    players: [
      { name: "Player 1", role: "Gold Lane", ign: "ZP_Gold" },
      { name: "Player 2", role: "Jungle", ign: "ZP_Hunt" },
      { name: "Player 3", role: "Mid Lane", ign: "ZP_Mage" },
      { name: "Player 4", role: "Roamer", ign: "ZP_Roam" },
      { name: "Player 5", role: "EXP Lane", ign: "ZP_Tank" },
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

        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {teamsData.map((team, i) => (
            <motion.div
              key={team.game}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-card border border-border rounded-lg overflow-hidden hover:border-primary/20 transition-all duration-300 group"
            >
              <div className="p-6">
                <div className="flex items-center justify-between mb-5">
                  <div>
                    <h3 className="text-2xl font-heading font-bold text-primary">
                      {team.game}
                    </h3>
                    <span className="text-xs text-muted-foreground uppercase tracking-widest">
                      {team.tag}
                    </span>
                  </div>
                  <Users className="w-6 h-6 text-muted-foreground/40" />
                </div>
                <div className="space-y-3">
                  {team.players.map((player) => (
                    <div
                      key={player.ign}
                      className="flex items-center justify-between py-2 border-b border-border/50 last:border-0"
                    >
                      <div>
                        <span className="text-sm font-medium text-foreground">
                          {player.ign}
                        </span>
                      </div>
                      <span className="text-xs text-muted-foreground uppercase tracking-wider bg-muted px-3 py-1 rounded-full">
                        {player.role}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamsSection;
