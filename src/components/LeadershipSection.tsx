import { motion } from "framer-motion";
import { useManagement } from "@/hooks/use-management";
import { Skeleton } from "@/components/ui/skeleton";

const LeadershipSection = () => {
  const { data: members, isLoading } = useManagement();

  return (
    <section className="py-16 sm:py-24 relative">
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold mb-3">
            THE <span className="text-primary">PEOPLE</span> BEHIND IT
          </h2>
          <div className="w-16 h-0.5 bg-primary mx-auto mt-4 opacity-60" />
        </motion.div>

        {isLoading ? (
          <div className="flex flex-col sm:flex-row gap-8 justify-center max-w-3xl mx-auto">
            {[0, 1].map((i) => (
              <div key={i} className="flex-1 flex flex-col items-center gap-4">
                <Skeleton className="w-36 h-36 rounded-lg" />
                <Skeleton className="h-5 w-32" />
                <Skeleton className="h-4 w-24" />
                <Skeleton className="h-16 w-full" />
              </div>
            ))}
          </div>
        ) : !members?.length ? (
          <p className="text-center text-muted-foreground text-sm">
            Leadership info coming soon.
          </p>
        ) : (
          <div className="flex flex-col sm:flex-row gap-8 sm:gap-12 justify-center max-w-3xl mx-auto">
            {members.map((member, i) => (
              <motion.div
                key={member.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                className="flex-1 game-card bg-card border border-border rounded-lg p-6 sm:p-8 flex flex-col items-center text-center hover:border-primary/30 transition-all duration-300"
              >
                {/* Photo */}
                <div className="w-32 h-32 sm:w-36 sm:h-36 rounded-lg overflow-hidden mb-5 border border-border bg-muted">
                  {member.photo_url ? (
                    <img
                      src={member.photo_url}
                      alt={member.name}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-muted-foreground text-3xl font-heading font-bold">
                      {member.name.charAt(0)}
                    </div>
                  )}
                </div>

                {/* Info */}
                <h3 className="text-lg sm:text-xl font-heading font-bold text-foreground">
                  {member.name}
                </h3>
                <span className="text-primary text-xs sm:text-sm font-medium tracking-wide uppercase mt-1 mb-3">
                  {member.title}
                </span>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {member.bio}
                </p>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default LeadershipSection;
