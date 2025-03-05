
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import Features from "@/components/Features";
import LearningFacts from "@/components/LearningFacts";
import MobilePreview from "@/components/MobilePreview";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";
import { Helmet } from "react-helmet";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Helmet>
        <title>SkillSwap - Community-Driven Learning Platform</title>
        <meta name="description" content="Share knowledge, build skills, and grow together on our community-driven learning platform. Connect with experts and learn new skills today." />
        <meta name="keywords" content="learning platform, skill sharing, online courses, education, community learning" />
        <link rel="canonical" href="https://skillswap.example.com" />
      </Helmet>
      
      <Navbar />
      <Hero />
      <Stats />
      <Features />
      <LearningFacts />
      <MobilePreview />
      <Testimonials />
      <Footer />
    </main>
  );
};

export default Index;
