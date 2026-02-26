import logo from "@/assets/logo.jpg";

const Footer = () => {
  return (
    <footer className="border-t border-border py-12">
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
