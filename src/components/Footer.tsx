import logo from "@/assets/logo.jpg";

const Footer = () => {
  return (
    <footer className="border-t border-border py-12 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-t from-primary/[0.02] to-transparent pointer-events-none" />
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <img src={logo} alt="ZeroPhase" className="w-8 h-8 rounded" />
            <span className="font-heading font-bold text-primary tracking-wider">
              ZEROPHASE ESPORTS
            </span>
          </div>
          <p className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} ZeroPhase Esports. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
