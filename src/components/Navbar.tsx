
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-nav">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3 hover:opacity-90 transition-opacity">
          <img 
            src="/lovable-uploads/971a0525-9509-4c96-9f90-66e481b188bc.png" 
            alt="SKILL SWAP Logo" 
            className="h-10 w-auto animate-fade-in"
          />
          <span className="text-2xl font-bold text-white">SKILL SWAP</span>
        </Link>
        <div className="hidden md:flex items-center space-x-8">
          <Link to="/features" className="text-white/90 hover:text-mint transition-colors story-link">
            Features
          </Link>
          <Link to="/pricing" className="text-white/90 hover:text-mint transition-colors story-link">
            Pricing
          </Link>
          <Link to="/company" className="text-white/90 hover:text-mint transition-colors story-link">
            Company
          </Link>
          <Link to="/legal" className="text-white/90 hover:text-mint transition-colors story-link">
            Legal
          </Link>
        </div>
        <Link to="/marketplace">
          <Button className="bg-mint hover:bg-mint/90 text-forest font-medium hover-scale">
            Explore Courses
          </Button>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
