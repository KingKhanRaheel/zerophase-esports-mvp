import Navbar from "@/components/Navbar";
import SponsorsSection from "@/components/SponsorsSection";
import Footer from "@/components/Footer";
import PageTransition from "@/components/PageTransition";

const Sponsors = () => {
  return (
    <PageTransition>
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="pt-20">
        <SponsorsSection />
      </div>
      <Footer />
    </div>
  );
};

export default Sponsors;
