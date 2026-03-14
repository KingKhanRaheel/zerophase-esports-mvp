import { motion } from "framer-motion";
import { Target, Shield, TrendingUp } from "lucide-react";

const pillars = [
  {
    icon: Target,
    title: "Our Mission",
    description:
      "To build a world-class esports ecosystem in India through structured competition, player development, and strategic partnerships.",
  },
  {
    icon: Shield,
    title: "Discipline First",
    description:
      "We believe in discipline over talent. Every player, every strategy, every decision is built on a foundation of structure and accountability.",
  },
  {
    icon: TrendingUp,
    title: "Long-Term Vision",
    description:
      "ZeroPhase isn't chasing trends. We're building for the next decade — scalable teams, sustainable partnerships, and real competitive growth.",
  },
];

const AboutSection = () => {
  return (
    <section id="about" className="py-24 md:py-32 relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">
            ABOUT <span className="text-primary">ZEROPHASE</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            A competitive esports organization focused on building a disciplined, structured, 
            and scalable brand in India.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {pillars.map((pillar, i) => (
            <motion.div
              key={pillar.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="game-card bg-card border border-border rounded-lg p-8 hover:border-primary/30 transition-all duration-300 group"
            >
              <pillar.icon className="w-10 h-10 text-primary mb-5 icon-glow transition-all" />
              <h3 className="text-xl font-heading font-bold mb-3">{pillar.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {pillar.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
