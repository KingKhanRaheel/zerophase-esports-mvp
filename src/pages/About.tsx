import Navbar from "@/components/Navbar";
import AboutSection from "@/components/AboutSection";
import LeadershipSection from "@/components/LeadershipSection";
import Footer from "@/components/Footer";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="pt-20">
        <AboutSection />
        <LeadershipSection />
      </div>
      <Footer />
    </div>
  );
};

export default About;
