
import { Button } from "@/components/ui/button";
import { ArrowRight, BookOpen, Users, GraduationCap } from "lucide-react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="pt-32 pb-20 px-4">
      <div className="container mx-auto grid lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-8">
          <div className="flex items-center gap-2 bg-mint/10 w-fit px-4 py-2 rounded-full border border-mint/20 animate-fade-in">
            <GraduationCap className="w-4 h-4 text-mint" />
            <span className="text-mint text-sm font-medium">Learn. Teach. Grow.</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold leading-tight text-white animate-fade-in" style={{ animationDelay: "200ms" }}>
            Share knowledge
            <br />
            <span className="text-mint">build skills</span>
            <br />
            grow together
          </h1>
          <p className="text-lg text-white/80 max-w-md animate-fade-in" style={{ animationDelay: "400ms" }}>
            Connect with experts, learn new skills, and share your knowledge on our community-driven learning platform.
          </p>
          <div className="flex items-center gap-4 animate-fade-in" style={{ animationDelay: "600ms" }}>
            <Link to="/marketplace">
              <Button className="bg-mint hover:bg-mint/90 text-forest font-medium px-8 py-6 text-lg hover-scale">
                Explore Courses <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link to="/features">
              <Button variant="outline" className="border-mint/20 text-mint hover:bg-mint/10 hover-scale">
                How It Works
              </Button>
            </Link>
          </div>
        </div>
        <div className="relative animate-fade-in" style={{ animationDelay: "800ms" }}>
          <div className="absolute -inset-0.5 bg-mint/20 rounded-2xl blur opacity-30" />
          <img
            src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d"
            alt="Online learning"
            className="relative rounded-2xl shadow-2xl"
          />
          <div className="absolute -bottom-10 -left-10 bg-forest-light p-6 rounded-xl shadow-xl border border-mint/10 animate-fade-in" style={{ animationDelay: "1000ms" }}>
            <div className="flex items-center gap-3">
              <BookOpen className="h-8 w-8 text-mint" />
              <div>
                <p className="text-mint text-3xl font-bold">500+</p>
                <p className="text-white/80">Learning resources</p>
              </div>
            </div>
          </div>
          <div className="absolute -top-10 -right-10 bg-forest-light p-6 rounded-xl shadow-xl border border-mint/10 animate-fade-in" style={{ animationDelay: "1200ms" }}>
            <div className="flex items-center gap-3">
              <Users className="h-8 w-8 text-mint" />
              <div>
                <p className="text-mint text-3xl font-bold">10k+</p>
                <p className="text-white/80">Active learners</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
