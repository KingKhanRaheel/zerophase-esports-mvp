import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const games = ["BGMI", "FREE FIRE MAX", "VALORANT", "MLBB"];
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
          className="max-w-4xl mx-auto"
        >
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-heading font-bold leading-[0.95] mb-6">
            <span className="text-foreground">COMPETE.</span>
            <br />
            <span className="gradient-text">DOMINATE.</span>
            <br />
            <span className="text-foreground">EVOLVE.</span>
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
            <Button
              size="lg"
              variant="outline"
              className="border-primary/30 text-primary hover:bg-primary/10 font-heading font-semibold text-lg tracking-wider px-8"
            >
              PARTNER WITH US
            </Button>
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
                className="inline-flex items-center mx-12 text-2xl md:text-3xl font-heading font-bold text-muted-foreground/30 hover:text-primary/60 transition-colors duration-500 cursor-default select-none tracking-[0.3em]"
              >
                {game}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
