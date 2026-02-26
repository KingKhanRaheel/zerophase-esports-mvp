import { motion } from "framer-motion";

interface Sponsor {
  name: string;
  tier: "title" | "partner" | "supporter";
}

const sponsors: Sponsor[] = [
  { name: "TechCorp Gaming", tier: "title" },
  { name: "HyperX", tier: "title" },
  { name: "GameFuel Energy", tier: "partner" },
  { name: "StreamPro", tier: "partner" },
  { name: "PixelGear", tier: "supporter" },
  { name: "CloudHost", tier: "supporter" },
];

const tierColors: Record<string, string> = {
  title: "text-primary border-primary/30",
  partner: "text-accent border-accent/30",
  supporter: "text-muted-foreground border-border",
};

const SponsorsSection = () => {
  return (
    <section id="sponsors" className="py-24 md:py-32 relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">
            PARTNERS & <span className="text-primary">SPONSORS</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto text-lg">
            Backed by organizations that believe in the future of Indian esports.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {sponsors.map((sponsor, i) => (
            <motion.div
              key={sponsor.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className={`flex flex-col items-center justify-center p-8 rounded-lg border bg-card hover:bg-surface-elevated transition-all duration-300 ${tierColors[sponsor.tier]}`}
            >
              <span className="font-heading font-bold text-lg text-center">
                {sponsor.name}
              </span>
              <span className="text-xs uppercase tracking-widest mt-2 text-muted-foreground">
                {sponsor.tier} sponsor
              </span>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="text-center mt-12"
        >
          <p className="text-muted-foreground mb-4">Interested in partnering with ZeroPhase?</p>
          <a
            href="#contact"
            className="inline-block gradient-primary text-primary-foreground px-6 py-3 rounded-md font-heading font-semibold tracking-wider hover:opacity-90 transition-opacity"
          >
            BECOME A PARTNER
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default SponsorsSection;
