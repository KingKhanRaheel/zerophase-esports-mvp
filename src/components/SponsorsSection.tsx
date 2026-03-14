import { motion } from "framer-motion";
import { useSponsors } from "@/hooks/use-sponsors";

const tierLabels: Record<string, string> = {
  title: "Title Sponsor",
  Title: "Title Sponsor",
  partner: "Partner",
  Partner: "Partner",
  supporter: "Supporter",
  Supporter: "Supporter",
};

const tierColors: Record<string, string> = {
  title: "border-primary/30 hover:border-primary/60",
  Title: "border-primary/30 hover:border-primary/60",
  partner: "border-accent/30 hover:border-accent/60",
  Partner: "border-accent/30 hover:border-accent/60",
  supporter: "border-border hover:border-muted-foreground/40",
  Supporter: "border-border hover:border-muted-foreground/40",
};

const tierBadgeColors: Record<string, string> = {
  title: "bg-primary/10 text-primary",
  Title: "bg-primary/10 text-primary",
  partner: "bg-accent/10 text-accent",
  Partner: "bg-accent/10 text-accent",
  supporter: "bg-muted text-muted-foreground",
  Supporter: "bg-muted text-muted-foreground",
};

const SponsorsSection = () => {
  const { data: sponsors, isLoading, error } = useSponsors();

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

        {isLoading && (
          <p className="text-center text-muted-foreground">Loading sponsors...</p>
        )}

        {error && (
          <p className="text-center text-destructive">Failed to load sponsors.</p>
        )}

        {sponsors && sponsors.length === 0 && (
          <p className="text-center text-muted-foreground">No sponsors yet.</p>
        )}

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {sponsors?.map((sponsor, i) => {
            const tierKey = sponsor.tier?.toLowerCase() || "supporter";
            return (
              <motion.div
                key={sponsor.id}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className={`game-card border-shimmer flex flex-col items-center p-8 rounded-lg border bg-card transition-all duration-300 ${tierColors[tierKey] || tierColors.supporter}`}
              >
                <img
                  src={
                    sponsor.logo_url ||
                    `https://ui-avatars.com/api/?name=${encodeURIComponent(sponsor.name)}&background=0f0f0f&color=00e5ff&size=80&bold=true`
                  }
                  alt={`${sponsor.name} logo`}
                  className="w-16 h-16 rounded-full mb-4 object-cover"
                />
                <span className="font-heading font-bold text-lg text-center text-foreground">
                  {sponsor.name}
                </span>
                <span
                  className={`text-xs uppercase tracking-widest mt-2 px-3 py-1 rounded-full ${tierBadgeColors[tierKey] || tierBadgeColors.supporter}`}
                >
                  {tierLabels[sponsor.tier] || sponsor.tier}
                </span>
                <div className="mt-4 text-sm text-muted-foreground text-center">
                  <span className="text-xs uppercase tracking-wider">Sponsors: </span>
                  <span className="font-medium text-foreground">
                    {sponsor.team_description}
                  </span>
                </div>
              </motion.div>
            );
          })}
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
