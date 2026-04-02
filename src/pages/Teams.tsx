import Navbar from "@/components/Navbar";
import TeamsSection from "@/components/TeamsSection";
import Footer from "@/components/Footer";
import PageTransition from "@/components/PageTransition";

const Teams = () => {
  return (
    <PageTransition>
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="pt-20">
        <TeamsSection />
      </div>
      <Footer />
    </div>
    </PageTransition>
  );
};

export default Teams;
