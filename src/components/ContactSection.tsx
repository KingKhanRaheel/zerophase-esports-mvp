import { motion } from "framer-motion";
import { Mail, MapPin, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const ContactSection = () => {
  return (
    <section id="contact" className="py-24 md:py-32 bg-muted/30 relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16">

          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">
            GET IN <span className="text-primary">TOUCH</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto text-lg">
            For partnerships, sponsorships, player trials, or general inquiries.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          {/* Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-8">

            <div className="flex items-start gap-4">
              <Mail className="w-5 h-5 text-primary mt-1 shrink-0" />
              <div>
                <h4 className="font-heading font-semibold mb-1">Email</h4>
                <p className="text-muted-foreground text-sm">zerophaseesports@gmail.com
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <MessageSquare className="w-5 h-5 text-primary mt-1 shrink-0" />
              <div>
                <h4 className="font-heading font-semibold mb-1">Discord</h4>
                <p className="text-muted-foreground text-sm">discord.gg/zerophase</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <MapPin className="w-5 h-5 text-primary mt-1 shrink-0" />
              <div>
                <h4 className="font-heading font-semibold mb-1">Location</h4>
                <p className="text-muted-foreground text-sm">India</p>
              </div>
            </div>
          </motion.div>

          {/* Form */}
          <motion.form initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="space-y-4"
          onSubmit={(e) => e.preventDefault()}>

            <Input
              placeholder="Your Name"
              className="bg-card border-border focus:border-primary" />

            <Input
              type="email"
              placeholder="Your Email"
              className="bg-card border-border focus:border-primary" />

            <Input
              placeholder="Subject"
              className="bg-card border-border focus:border-primary" />

            <Textarea
              placeholder="Your Message"
              rows={5}
              className="bg-card border-border focus:border-primary resize-none" />

            <Button
              type="submit"
              className="w-full gradient-primary text-primary-foreground font-heading font-semibold tracking-wider hover:opacity-90 transition-opacity">

              SEND MESSAGE
            </Button>
          </motion.form>
        </div>
      </div>
    </section>);

};

export default ContactSection;