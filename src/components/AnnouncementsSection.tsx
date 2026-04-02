import { motion } from "framer-motion";
import { Megaphone } from "lucide-react";
import { useAnnouncements } from "@/hooks/use-announcements";
import { format } from "date-fns";

const AnnouncementsSection = () => {
  const { data: announcements, isLoading } = useAnnouncements();

  if (isLoading || !announcements?.length) return null;

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
            LATEST <span className="text-primary">UPDATES</span>
          </h2>
          <div className="w-16 h-0.5 bg-primary mx-auto mt-4 opacity-60" />
        </motion.div>

        <div className="max-w-3xl mx-auto space-y-4">
          {announcements.map((a, i) => (
            <motion.div
              key={a.id}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="bg-card border border-border rounded-lg overflow-hidden hover:border-primary/30 transition-all duration-300"
            >
              {a.image_url && (
                <div className="w-full h-40 sm:h-52 overflow-hidden">
                  <img
                    src={a.image_url}
                    alt={a.title}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
              )}
              <div className="p-5 sm:p-6">
                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="mt-0.5 flex-shrink-0">
                    <Megaphone className="w-5 h-5 text-primary" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="flex items-center justify-between gap-3 mb-1">
                      <h3 className="text-base sm:text-lg font-heading font-bold text-foreground truncate">
                        {a.title}
                      </h3>
                      {a.published_at && (
                        <span className="text-xs text-muted-foreground flex-shrink-0">
                          {format(new Date(a.published_at), "MMM d, yyyy")}
                        </span>
                      )}
                    </div>
                    {a.content && (
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {a.content}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AnnouncementsSection;
