import { motion } from "framer-motion";

interface Sponsor {
  name: string;
  logo: string;
  tier: "title" | "partner" | "supporter";
  team: string; // team name or "Org"
}

const sponsors: Sponsor[] = [
  {
    name: "TechCorp Gaming",
    logo: "https://ui-avatars.com/api/?name=TC&background=0f0f0f&color=00e5ff&size=80&bold=true",
    tier: "title",
    team: "Org",
  },
  {
    name: "HyperX",
    logo: "https://ui-avatars.com/api/?name=HX&background=0f0f0f&color=00e5ff&size=80&bold=true",
    tier: "title",
    team: "ZeroPhase Prime",
  },
  {
    name: "GameFuel Energy",
    logo: "https://ui-avatars.com/api/?name=GF&background=0f0f0f&color=a855f7&size=80&bold=true",
    tier: "partner",
    team: "Org",
  },
  {
    name: "StreamPro",
    logo: "https://ui-avatars.com/api/?name=SP&background=0f0f0f&color=a855f7&size=80&bold=true",
    tier: "partner",
    team: "ZeroPhase Alpha",
  },
  {
    name: "PixelGear",
    logo: "https://ui-avatars.com/api/?name=PG&background=0f0f0f&color=888&size=80&bold=true",
    tier: "supporter",
    team: "Org",
  },
  {
    name: "CloudHost",
    logo: "https://ui-avatars.com/api/?name=CH&background=0f0f0f&color=888&size=80&bold=true",
    tier: "supporter",
    team: "ZeroPhase Beta",
  },
];

const tierLabels: Record<string, string> = {
  title: "Title Sponsor",
  partner: "Partner",
  supporter: "Supporter",
};

const tierColors: Record<string, string> = {
  title: "border-primary/30 hover:border-primary/60",
  partner: "border-accent/30 hover:border-accent/60",
  supporter: "border-border hover:border-muted-foreground/40",
};

const tierBadgeColors: Record<string, string> = {
  title: "bg-primary/10 text-primary",
  partner: "bg-accent/10 text-accent",
  supporter: "bg-muted text-muted-foreground",
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

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {sponsors.map((sponsor, i) => (
            <motion.div
              key={sponsor.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className={`flex flex-col items-center p-8 rounded-lg border bg-card transition-all duration-300 ${tierColors[sponsor.tier]}`}
            >
              <img
                src={sponsor.logo}
                alt={`${sponsor.name} logo`}
                className="w-16 h-16 rounded-full mb-4 object-cover"
              />
              <span className="font-heading font-bold text-lg text-center text-foreground">
                {sponsor.name}
              </span>
              <span
                className={`text-xs uppercase tracking-widest mt-2 px-3 py-1 rounded-full ${tierBadgeColors[sponsor.tier]}`}
              >
                {tierLabels[sponsor.tier]}
              </span>
              <div className="mt-4 text-sm text-muted-foreground text-center">
                <span className="text-xs uppercase tracking-wider">Sponsors: </span>
                <span className="font-medium text-foreground">
                  {sponsor.team}
                </span>
              </div>
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
            href="/contact"
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
