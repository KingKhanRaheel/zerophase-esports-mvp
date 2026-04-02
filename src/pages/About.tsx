import Navbar from "@/components/Navbar";
import AboutSection from "@/components/AboutSection";
import LeadershipSection from "@/components/LeadershipSection";
import Footer from "@/components/Footer";
import PageTransition from "@/components/PageTransition";

const About = () => {
  return (
    <PageTransition>
      <div className="min-h-screen bg-background">
        <Navbar />
        <div className="pt-20">
          <AboutSection />
          <LeadershipSection />
        </div>
        <Footer />
      </div>
    </PageTransition>
  );
};

export default About;
