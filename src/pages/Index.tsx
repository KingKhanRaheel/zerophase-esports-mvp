import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Users, Trophy, ArrowRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const games = [
  { name: "BGMI", image: "/images/games/bgmi.jpg" },
  { name: "FREE FIRE MAX", image: "/images/games/freefire.jpg" },
  { name: "VALORANT", image: "/images/games/valorant.jpg" },
  { name: "MLBB", image: "/images/games/mlbb.jpg" },
];

const duplicated = [...games, ...games, ...games, ...games];

const featuredTeam = {
  teamName: "ZeroPhase Prime",
  game: "VALORANT",
  players: [
    { ign: "ZP_Phantom", role: "Duelist" },
    { ign: "ZP_Smoke", role: "Controller" },
    { ign: "ZP_Wall", role: "Sentinel" },
    { ign: "ZP_Flash", role: "Initiator" },
    { ign: "ZP_Flex", role: "Flex" },
  ],
};

const sponsorOfMonth = {
  name: "TechCorp Gaming",
  logo: "https://ui-avatars.com/api/?name=TC&background=0f0f0f&color=00e5ff&size=80&bold=true",
  tier: "Title Sponsor",
  team: "Org",
};

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-muted" />
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-primary/5 blur-[120px]" />
        <div className="absolute top-1/3 right-1/4 w-[400px] h-[400px] rounded-full bg-accent/5 blur-[100px]" />

        <div className="relative z-10 container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-4xl mx-auto"
          >
            <h1 className="md:text-7xl font-heading font-bold leading-[0.95] mb-6 my-[10px] py-px text-4xl lg:text-6xl">
              <span className="text-foreground px-0 mx-0 my-[5px]">THE GRIND.</span>
              <br />
              <span className="text-foreground">THE RISE.</span>
              <br />
              <span className="text-foreground">THE FALL.</span>
              <br />
              <span className="gradient-text">ZEROPHASE!</span>
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 font-light">
              India's next-generation esports organization — built on discipline,
              structure, and the relentless pursuit of competitive excellence.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="gradient-primary text-primary-foreground font-heading font-semibold text-lg tracking-wider px-8 hover:opacity-90 transition-opacity"
              >
                JOIN COMMUNITY
              </Button>
              <Link to="/contact">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-primary/30 text-primary hover:bg-primary/10 font-heading font-semibold text-lg tracking-wider px-8 w-full"
                >
                  PARTNER WITH US
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Rolling game strip */}
        <div className="relative z-10 w-full mt-20 mb-8">
          <div className="border-y border-border/50 py-6 overflow-hidden">
            <div className="animate-scroll-left flex whitespace-nowrap">
              {duplicated.map((game, i) => (
                <div
                  key={i}
                  className="inline-flex items-center mx-4 flex-shrink-0 select-none"
                >
                  <div className="relative w-[280px] md:w-[360px] h-[160px] md:h-[200px] rounded-lg overflow-hidden group">
                    <img
                      src={game.image}
                      alt={game.name}
                      className="w-full h-full object-cover opacity-40 group-hover:opacity-70 transition-opacity duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent" />
                    <span className="absolute bottom-4 left-4 text-lg md:text-xl font-heading font-bold text-foreground/80 tracking-[0.2em]">
                      {game.name}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Highlights Section */}
      <section className="py-24 md:py-32">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">
              AT A <span className="text-primary">GLANCE</span>
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto text-lg">
              Quick highlights from the ZeroPhase ecosystem.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Featured Team */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-card border border-border rounded-lg p-8 hover:border-primary/30 hover:box-glow-cyan transition-all duration-300"
            >
              <div className="flex items-center gap-3 mb-6">
                <Trophy className="w-6 h-6 text-primary" />
                <h3 className="text-xl font-heading font-bold">FEATURED ROSTER</h3>
              </div>
              <div className="mb-4">
                <span className="text-2xl font-heading font-bold text-primary">
                  {featuredTeam.teamName}
                </span>
                <span className="text-sm text-muted-foreground ml-3">
                  {featuredTeam.game}
                </span>
              </div>
              <div className="space-y-2 mb-6">
                {featuredTeam.players.map((p) => (
                  <div
                    key={p.ign}
                    className="flex items-center justify-between py-1.5 border-b border-border/50 last:border-0"
                  >
                    <span className="text-sm font-medium text-foreground">{p.ign}</span>
                    <span className="text-xs text-muted-foreground uppercase tracking-wider bg-muted px-3 py-1 rounded-full">
                      {p.role}
                    </span>
                  </div>
                ))}
              </div>
              <Link
                to="/teams"
                className="inline-flex items-center gap-2 text-sm text-primary hover:underline font-medium"
              >
                View all teams <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>

            {/* Sponsor of the Month + Quick Links */}
            <div className="flex flex-col gap-8">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="bg-card border border-border rounded-lg p-8 hover:border-accent/30 hover:box-glow-purple transition-all duration-300"
              >
                <div className="flex items-center gap-3 mb-6">
                  <Users className="w-6 h-6 text-accent" />
                  <h3 className="text-xl font-heading font-bold">SPONSOR SPOTLIGHT</h3>
                </div>
                <div className="mb-2">
                  <span className="text-2xl font-heading font-bold text-accent">
                    {sponsorOfMonth.name}
                  </span>
                </div>
                <p className="text-xs text-muted-foreground uppercase tracking-widest mb-6">
                  {sponsorOfMonth.tier}
                </p>
                <Link
                  to="/sponsors"
                  className="inline-flex items-center gap-2 text-sm text-accent hover:underline font-medium"
                >
                  View all sponsors <ArrowRight className="w-4 h-4" />
                </Link>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="bg-card border border-border rounded-lg p-8 hover:border-primary/30 transition-all duration-300"
              >
                <h3 className="text-xl font-heading font-bold mb-4">EXPLORE</h3>
                <div className="space-y-3">
                  {[
                    { label: "About ZeroPhase", to: "/about" },
                    { label: "Our Teams", to: "/teams" },
                    { label: "Partners & Sponsors", to: "/sponsors" },
                    { label: "Get In Touch", to: "/contact" },
                  ].map((link) => (
                    <Link
                      key={link.to}
                      to={link.to}
                      className="flex items-center justify-between py-2 border-b border-border/50 last:border-0 text-muted-foreground hover:text-primary transition-colors group"
                    >
                      <span className="text-sm font-medium">{link.label}</span>
                      <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </Link>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
