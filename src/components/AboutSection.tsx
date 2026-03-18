import { motion } from "framer-motion";

const AboutSection = () => {
  return (
    <section id="about" className="py-16 sm:py-24 md:py-32 relative">
      <div className="container mx-auto px-4 sm:px-6 max-w-4xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-20"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold mb-3 sm:mb-4">
            ABOUT <span className="text-primary">ZEROPHASE</span>
          </h2>
          <div className="w-16 h-0.5 bg-primary mx-auto mt-4 opacity-60" />
        </motion.div>

        {/* Narrative blocks */}
        <div className="space-y-10 sm:space-y-14">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-lg sm:text-xl text-foreground font-heading font-semibold leading-relaxed">
              ZeroPhase Esports isn't just an organisation.{" "}
              <span className="text-primary">It's a shift in how gaming is approached.</span>
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="space-y-5 text-muted-foreground text-sm sm:text-base leading-relaxed"
          >
            <p>
              We started with a simple observation — thousands of talented players grind every day,
              but very few understand how to turn that effort into something meaningful. No structure.
              No direction. No system.
            </p>
            <p className="text-foreground font-medium">ZeroPhase exists to change that.</p>
            <p>
              We are building a space where discipline meets creativity, where raw players become
              professionals, and where passion is backed by process. From competitive teams and
              structured scrims to content and community — everything we do is designed to move
              players from casual to competitive.
            </p>
          </motion.div>

          {/* Accent block */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="border-l-2 border-primary/50 pl-5 sm:pl-8 py-2"
          >
            <p className="text-foreground text-base sm:text-lg font-heading font-semibold mb-3">
              But ZeroPhase is bigger than just winning matches.
            </p>
            <p className="text-primary text-lg sm:text-xl font-heading font-bold">
              We believe in building people.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-5 text-muted-foreground text-sm sm:text-base leading-relaxed"
          >
            <p>
              Our players learn how to show up, perform under pressure, communicate as a team, and
              grow consistently. Our creators learn how to build an audience, tell stories, and turn
              attention into opportunity. Our community learns what esports actually looks like beyond
              just playing the game.
            </p>
          </motion.div>

          {/* Mindset callout */}
          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: 0.25 }}
            className="game-card bg-card border border-border rounded-lg p-6 sm:p-10 text-center"
          >
            <p className="text-muted-foreground text-sm sm:text-base mb-3">
              Because at the end of the day, esports isn't just about skill.
            </p>
            <p className="text-2xl sm:text-3xl font-heading font-bold gradient-text">
              It's about mindset.
            </p>
          </motion.div>

          {/* Manifesto lines */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="space-y-3 text-sm sm:text-base"
          >
            <p className="text-muted-foreground">
              We're here for the players who want more than just rank.
            </p>
            <p className="text-muted-foreground">
              For the creators who want more than just views.
            </p>
            <p className="text-muted-foreground">
              For the people who believe gaming can actually become something real.
            </p>
            <p className="text-primary font-heading font-bold text-lg sm:text-xl mt-6">
              This is ZeroPhase.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
