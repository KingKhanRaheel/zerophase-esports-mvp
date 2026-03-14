import logo from "@/assets/logo.jpg";

const Footer = () => {
  return (
    <footer className="border-t border-border py-8 sm:py-12 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-t from-primary/[0.02] to-transparent pointer-events-none" />
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-6">
          <div className="flex items-center gap-3">
            <img src={logo} alt="ZeroPhase" className="w-8 h-8 rounded" />
            <span className="font-heading font-bold text-primary tracking-wider text-glow-cyan text-sm sm:text-base">
              ZEROPHASE ESPORTS
            </span>
          </div>
          <p className="text-muted-foreground text-xs sm:text-sm text-center sm:text-right">
            © {new Date().getFullYear()} ZeroPhase Esports. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
