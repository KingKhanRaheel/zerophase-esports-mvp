import { motion } from "framer-motion";
import { useManagement } from "@/hooks/use-management";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const HomepageLeadership = () => {
  const { data: members, isLoading } = useManagement();

  if (isLoading || !members?.length) return null;

  return (
    <section className="py-16 sm:py-24">
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 sm:mb-14"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold mb-3">
            THE <span className="text-primary">PEOPLE</span> BEHIND IT
          </h2>
          <div className="w-16 h-0.5 bg-primary mx-auto mt-4 opacity-60" />
        </motion.div>

        <div className="flex flex-col sm:flex-row gap-6 sm:gap-10 justify-center max-w-3xl mx-auto">
          {members.map((member, i) => (
            <motion.div
              key={member.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="flex items-center gap-4 sm:gap-5 bg-card border border-border rounded-lg p-4 sm:p-5 hover:border-primary/30 transition-all duration-300 flex-1"
            >
              {/* Compact photo */}
              <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-lg overflow-hidden border border-border bg-muted flex-shrink-0">
                {member.photo_url ? (
                  <img
                    src={member.photo_url}
                    alt={member.name}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-muted-foreground text-xl font-heading font-bold">
                    {member.name.charAt(0)}
                  </div>
                )}
              </div>

              {/* Info */}
              <div className="min-w-0">
                <h3 className="text-base sm:text-lg font-heading font-bold text-foreground truncate">
                  {member.name}
                </h3>
                <span className="text-primary text-xs font-medium tracking-wide uppercase">
                  {member.title}
                </span>
                <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed mt-1 line-clamp-2">
                  {member.bio}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.3 }}
          className="text-center mt-8"
        >
          <Link
            to="/about"
            className="inline-flex items-center gap-2 text-sm text-primary hover:underline font-medium"
          >
            Learn more about ZeroPhase <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default HomepageLeadership;
