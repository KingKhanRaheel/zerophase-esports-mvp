import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const games = [
{ name: "BGMI", image: "/images/games/bgmi.jpg" },
{ name: "FREE FIRE MAX", image: "/images/games/freefire.jpg" },
{ name: "VALORANT", image: "/images/games/valorant.jpg" },
{ name: "MLBB", image: "/images/games/mlbb.jpg" }];

const duplicated = [...games, ...games, ...games, ...games];

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-muted" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-primary/5 blur-[120px]" />
      <div className="absolute top-1/3 right-1/4 w-[400px] h-[400px] rounded-full bg-accent/5 blur-[100px]" />

      <div className="relative z-10 container mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-4xl mx-auto">

          <h1 className="md:text-7xl lg:text-8xl font-heading font-bold leading-[0.95] mb-6 my-[10px] py-px text-4xl">
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
              className="gradient-primary text-primary-foreground font-heading font-semibold text-lg tracking-wider px-8 hover:opacity-90 transition-opacity">

              JOIN COMMUNITY
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-primary/30 text-primary hover:bg-primary/10 font-heading font-semibold text-lg tracking-wider px-8">

              PARTNER WITH US
            </Button>
          </div>
        </motion.div>
      </div>

      {/* Rolling game strip */}
      <div className="relative z-10 w-full mt-20 mb-8">
        <div className="border-y border-border/50 py-6 overflow-hidden">
          <div className="animate-scroll-left flex whitespace-nowrap">
            {duplicated.map((game, i) =>
            <div
              key={i}
              className="inline-flex items-center mx-4 flex-shrink-0 select-none">

                <div className="relative w-[280px] md:w-[360px] h-[160px] md:h-[200px] rounded-lg overflow-hidden group">
                  <img
                  src={game.image}
                  alt={game.name}
                  className="w-full h-full object-cover opacity-40 group-hover:opacity-70 transition-opacity duration-500" />

                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent" />
                  <span className="absolute bottom-4 left-4 text-lg md:text-xl font-heading font-bold text-foreground/80 tracking-[0.2em]">
                    {game.name}
                  </span>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>);

};

export default HeroSection;