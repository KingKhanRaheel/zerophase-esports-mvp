import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, Twitter, Instagram, Youtube, Calendar, Gamepad2, Shield } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageTransition from "@/components/PageTransition";
import { usePlayer } from "@/hooks/use-player";
import { format } from "date-fns";

const PlayerProfile = () => {
  const { id } = useParams<{ id: string }>();
  const { data: player, isLoading, error } = usePlayer(id);

  return (
    <PageTransition>
      <div className="min-h-screen bg-background">
        <Navbar />
        <div className="pt-24 pb-16">
          <div className="container mx-auto px-4 sm:px-6 max-w-4xl">
            <Link
              to="/teams"
              className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors mb-8"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Teams
            </Link>

            {isLoading && (
              <p className="text-center text-muted-foreground py-20">Loading player...</p>
            )}

            {error && (
              <p className="text-center text-destructive py-20">Player not found.</p>
            )}

            {player && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                {/* Hero card */}
                <div className="bg-card border border-border rounded-2xl overflow-hidden">
                  <div className="flex flex-col md:flex-row">
                    {/* Photo */}
                    <div className="md:w-72 lg:w-80 flex-shrink-0">
                      <div className="aspect-square md:aspect-auto md:h-full bg-muted relative overflow-hidden">
                        {player.photo_url ? (
                          <img
                            src={player.photo_url}
                            alt={player.ign}
                            className="w-full h-full object-cover"
                          />
                        ) : (
                          <div className="w-full h-full flex items-center justify-center">
                            <Shield className="w-16 h-16 text-muted-foreground/30" />
                          </div>
                        )}
                        <div className="absolute inset-0 bg-gradient-to-t from-card/80 via-transparent to-transparent md:bg-gradient-to-r md:from-transparent md:to-card/40" />
                      </div>
                    </div>

                    {/* Info */}
                    <div className="flex-1 p-6 sm:p-8 flex flex-col justify-center">
                      <span className="text-xs uppercase tracking-widest text-primary font-semibold mb-1">
                        {player.role}
                      </span>
                      <h1 className="text-3xl sm:text-4xl font-heading font-bold text-foreground mb-1">
                        {player.ign}
                      </h1>
                      <p className="text-muted-foreground text-sm mb-5">{player.name}</p>

                      {/* Meta pills */}
                      <div className="flex flex-wrap gap-2 mb-6">
                        {player.team && (
                          <span className="inline-flex items-center gap-1.5 text-xs bg-muted px-3 py-1.5 rounded-full text-foreground/80">
                            <Gamepad2 className="w-3.5 h-3.5 text-primary" />
                            {(player.team as any).games?.name} — {(player.team as any).name}
                          </span>
                        )}
                        {player.joined_at && (
                          <span className="inline-flex items-center gap-1.5 text-xs bg-muted px-3 py-1.5 rounded-full text-foreground/80">
                            <Calendar className="w-3.5 h-3.5 text-primary" />
                            Joined {format(new Date(player.joined_at), "MMM yyyy")}
                          </span>
                        )}
                      </div>

                      {/* Socials */}
                      <div className="flex items-center gap-3">
                        {player.social_twitter && (
                          <a
                            href={player.social_twitter}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2 rounded-lg bg-muted hover:bg-primary/10 hover:text-primary transition-colors"
                          >
                            <Twitter className="w-4 h-4" />
                          </a>
                        )}
                        {player.social_instagram && (
                          <a
                            href={player.social_instagram}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2 rounded-lg bg-muted hover:bg-primary/10 hover:text-primary transition-colors"
                          >
                            <Instagram className="w-4 h-4" />
                          </a>
                        )}
                        {player.social_youtube && (
                          <a
                            href={player.social_youtube}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2 rounded-lg bg-muted hover:bg-primary/10 hover:text-primary transition-colors"
                          >
                            <Youtube className="w-4 h-4" />
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Bio */}
                {player.bio && (
                  <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.15 }}
                    className="mt-8 bg-card border border-border rounded-xl p-6 sm:p-8"
                  >
                    <h2 className="text-lg font-heading font-bold text-foreground mb-3">About</h2>
                    <p className="text-muted-foreground leading-relaxed whitespace-pre-line">
                      {player.bio}
                    </p>
                  </motion.div>
                )}

                {/* Highlights embed */}
                {player.highlights_embed && (
                  <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.25 }}
                    className="mt-8 bg-card border border-border rounded-xl p-6 sm:p-8"
                  >
                    <h2 className="text-lg font-heading font-bold text-foreground mb-4">Highlights</h2>
                    <div
                      className="w-full flex justify-center"
                      dangerouslySetInnerHTML={{ __html: player.highlights_embed }}
                    />
                  </motion.div>
                )}
              </motion.div>
            )}
          </div>
        </div>
        <Footer />
      </div>
    </PageTransition>
  );
};

export default PlayerProfile;
