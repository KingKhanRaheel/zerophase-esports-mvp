import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Users, Trophy, ArrowRight, Star } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useGames } from "@/hooks/use-games";
import { useAtAGlance } from "@/hooks/use-at-a-glance";

const Index = () => {
  const { data: games } = useGames();
  const { data: glance } = useAtAGlance();

  const gameCards = games?.map((g) => ({
    name: g.name,
    image: g.image_url || "/placeholder.svg",
  })) || [
    { name: "BGMI", image: "/images/games/bgmi.jpg" },
    { name: "FREE FIRE MAX", image: "/images/games/freefire.jpg" },
    { name: "VALORANT", image: "/images/games/valorant.jpg" },
    { name: "MLBB", image: "/images/games/mlbb.jpg" },
  ];

  const duplicated = [...gameCards, ...gameCards, ...gameCards, ...gameCards];

  const featuredTeam = glance?.featuredTeam;
  const playerOfMonth = glance?.playerOfMonth;
  const sponsorSpotlight = glance?.sponsorSpotlight;

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden px-4">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-muted" />
        <div className="absolute inset-0 scanlines" />
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] md:w-[600px] h-[400px] md:h-[600px] rounded-full bg-primary/5 blur-[120px] will-change-transform" />
        <div className="absolute top-1/3 right-1/4 w-[250px] md:w-[400px] h-[250px] md:h-[400px] rounded-full bg-accent/5 blur-[100px]" />

        <div className="relative z-10 w-full max-w-4xl mx-auto text-center pt-20 sm:pt-0">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-heading font-bold leading-[0.95] mb-4 sm:mb-6">
              <span className="text-foreground">THE GRIND.</span>
              <br />
              <span className="text-foreground">THE RISE.</span>
              <br />
              <span className="text-foreground">THE FALL.</span>
              <br />
              <span className="gradient-text text-glow-cyan">ZEROPHASE!</span>
            </h1>

            <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-6 sm:mb-10 font-light px-2">
              India's next-generation esports organization — built on discipline,
              structure, and the relentless pursuit of competitive excellence.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
              <Button
                size="lg"
                className="gradient-primary text-primary-foreground font-heading font-semibold text-base sm:text-lg tracking-wider px-6 sm:px-8 hover:opacity-90 transition-opacity"
              >
                JOIN COMMUNITY
              </Button>
              <Link to="/contact">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-primary/30 text-primary hover:bg-primary/10 font-heading font-semibold text-base sm:text-lg tracking-wider px-6 sm:px-8 w-full"
                >
                  PARTNER WITH US
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Rolling game strip */}
        <div className="relative z-10 w-full mt-12 sm:mt-20 mb-4 sm:mb-8">
          <div className="border-y border-border/50 py-4 sm:py-6 overflow-hidden">
            <div className="animate-scroll-left flex whitespace-nowrap">
              {duplicated.map((game, i) => (
                <div
                  key={i}
                  className="inline-flex items-center mx-2 sm:mx-4 flex-shrink-0 select-none"
                >
                  <div className="relative w-[200px] sm:w-[280px] md:w-[360px] h-[120px] sm:h-[160px] md:h-[200px] rounded-lg overflow-hidden group">
                    <img
                      src={game.image}
                      alt={game.name}
                      className="w-full h-full object-cover opacity-40 group-hover:opacity-70 transition-opacity duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent" />
                    <span className="absolute bottom-3 left-3 sm:bottom-4 sm:left-4 text-sm sm:text-lg md:text-xl font-heading font-bold text-foreground/80 tracking-[0.2em]">
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
      <section className="py-16 sm:py-24 md:py-32">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="text-center mb-10 sm:mb-16"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold mb-3 sm:mb-4">
              AT A <span className="text-primary">GLANCE</span>
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto text-base sm:text-lg">
              Quick highlights from the ZeroPhase ecosystem.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-5 sm:gap-8 max-w-6xl mx-auto">
            {/* Featured Team */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="game-card bg-card border border-border rounded-lg p-5 sm:p-8 hover:border-primary/30 transition-all duration-300"
            >
              <div className="flex items-center gap-3 mb-4 sm:mb-6">
                <Trophy className="w-5 h-5 sm:w-6 sm:h-6 text-primary icon-glow" />
                <h3 className="text-lg sm:text-xl font-heading font-bold">FEATURED ROSTER</h3>
              </div>
              {featuredTeam ? (
                <>
                  <div className="mb-4">
                    <span className="text-xl sm:text-2xl font-heading font-bold text-primary">
                      {featuredTeam.name}
                    </span>
                    <span className="text-sm text-muted-foreground ml-3">
                      {(featuredTeam as any).games?.name}
                    </span>
                  </div>
                  <div className="space-y-2 mb-4 sm:mb-6">
                    {((featuredTeam as any).players || []).map((p: any) => (
                      <div
                        key={p.id}
                        className="flex items-center justify-between py-1.5 border-b border-border/50 last:border-0"
                      >
                        <span className="text-sm font-medium text-foreground">{p.ign}</span>
                        <span className="text-xs text-muted-foreground uppercase tracking-wider bg-muted px-2 sm:px-3 py-1 rounded-full">
                          {p.role}
                        </span>
                      </div>
                    ))}
                  </div>
                </>
              ) : (
                <p className="text-sm text-muted-foreground italic">No featured team set.</p>
              )}
              <Link
                to="/teams"
                className="inline-flex items-center gap-2 text-sm text-primary hover:underline font-medium"
              >
                View all teams <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>

            {/* Best Player of the Month */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="game-card bg-card border border-border rounded-lg p-5 sm:p-8 hover:border-primary/30 transition-all duration-300"
            >
              <div className="flex items-center gap-3 mb-4 sm:mb-6">
                <Star className="w-5 h-5 sm:w-6 sm:h-6 text-primary icon-glow" />
                <h3 className="text-lg sm:text-xl font-heading font-bold">PLAYER OF THE MONTH</h3>
              </div>
              {playerOfMonth ? (
                <>
                  <div className="flex items-center gap-3 sm:gap-4 mb-4">
                    <img
                      src={
                        playerOfMonth.photo_url ||
                        `https://ui-avatars.com/api/?name=${encodeURIComponent(playerOfMonth.name)}&background=0f0f0f&color=00e5ff&size=200&bold=true`
                      }
                      alt={playerOfMonth.name}
                      className="w-12 h-12 sm:w-16 sm:h-16 rounded-full object-cover"
                    />
                    <div>
                      <span className="text-xl sm:text-2xl font-heading font-bold text-primary block">
                        {playerOfMonth.ign}
                      </span>
                      <span className="text-sm text-muted-foreground">
                        {playerOfMonth.name}
                      </span>
                    </div>
                  </div>
                  <div className="space-y-2 mt-4">
                    <div className="flex items-center justify-between py-1.5 border-b border-border/50">
                      <span className="text-xs text-muted-foreground uppercase tracking-wider">Role</span>
                      <span className="text-sm font-medium text-foreground">{playerOfMonth.role}</span>
                    </div>
                    <div className="flex items-center justify-between py-1.5 border-b border-border/50">
                      <span className="text-xs text-muted-foreground uppercase tracking-wider">Team</span>
                      <span className="text-sm font-medium text-foreground">
                        {(playerOfMonth as any).teams?.name}
                      </span>
                    </div>
                    <div className="flex items-center justify-between py-1.5">
                      <span className="text-xs text-muted-foreground uppercase tracking-wider">Game</span>
                      <span className="text-sm font-medium text-foreground">
                        {(playerOfMonth as any).teams?.games?.name}
                      </span>
                    </div>
                  </div>
                </>
              ) : (
                <p className="text-sm text-muted-foreground italic">No player of the month set.</p>
              )}
            </motion.div>

            {/* Sponsor of the Month + Quick Links */}
            <div className="flex flex-col gap-5 sm:gap-8">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.15 }}
                className="game-card game-card-purple bg-card border border-border rounded-lg p-5 sm:p-8 hover:border-accent/30 transition-all duration-300"
              >
                <div className="flex items-center gap-3 mb-4 sm:mb-6">
                  <Users className="w-5 h-5 sm:w-6 sm:h-6 text-accent icon-glow-purple" />
                  <h3 className="text-lg sm:text-xl font-heading font-bold">SPONSOR SPOTLIGHT</h3>
                </div>
                {sponsorSpotlight ? (
                  <>
                    <div className="flex items-center gap-3 sm:gap-4 mb-4">
                      <img
                        src={
                          sponsorSpotlight.logo_url ||
                          `https://ui-avatars.com/api/?name=${encodeURIComponent(sponsorSpotlight.name)}&background=0f0f0f&color=00e5ff&size=80&bold=true`
                        }
                        alt={`${sponsorSpotlight.name} logo`}
                        className="w-10 h-10 sm:w-12 sm:h-12 rounded-full object-cover"
                      />
                      <div>
                        <span className="text-xl sm:text-2xl font-heading font-bold text-accent block">
                          {sponsorSpotlight.name}
                        </span>
                        <span className="text-xs text-muted-foreground uppercase tracking-widest">
                          {sponsorSpotlight.tier}
                        </span>
                      </div>
                    </div>
                    <div className="text-sm text-muted-foreground mb-4 sm:mb-6">
                      <span className="text-xs uppercase tracking-wider">Sponsors: </span>
                      <span className="font-medium text-foreground">{sponsorSpotlight.team_description}</span>
                    </div>
                  </>
                ) : (
                  <p className="text-sm text-muted-foreground italic mb-4 sm:mb-6">No sponsor spotlight set.</p>
                )}
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
                className="bg-card border border-border rounded-lg p-5 sm:p-8 hover:border-primary/30 transition-all duration-300"
              >
                <h3 className="text-lg sm:text-xl font-heading font-bold mb-3 sm:mb-4">EXPLORE</h3>
                <div className="space-y-2 sm:space-y-3">
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
