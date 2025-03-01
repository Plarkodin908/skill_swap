
import { Link } from "react-router-dom";
import { GraduationCap, BookOpen, Users, MessageSquare, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-20 px-4 border-t border-mint/10">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-4 gap-12">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <img 
                src="/lovable-uploads/971a0525-9509-4c96-9f90-66e481b188bc.png" 
                alt="SKILL SWAP Logo" 
                className="h-10 w-auto"
              />
              <h3 className="text-2xl font-bold">SKILL SWAP</h3>
            </div>
            <p className="text-white/60 max-w-xs">
              Connecting learners and educators through a collaborative platform for knowledge exchange and skill development.
            </p>
            <div className="flex gap-4 pt-2">
              <GraduationCap className="h-5 w-5 text-mint" />
              <BookOpen className="h-5 w-5 text-mint" />
              <Users className="h-5 w-5 text-mint" />
              <MessageSquare className="h-5 w-5 text-mint" />
            </div>
          </div>
          <div>
            <h4 className="font-medium mb-4">Platform</h4>
            <ul className="space-y-2">
              <li><Link to="/features" className="text-white/60 hover:text-mint transition-colors">Features</Link></li>
              <li><Link to="/pricing" className="text-white/60 hover:text-mint transition-colors">Pricing</Link></li>
              <li><Link to="/marketplace" className="text-white/60 hover:text-mint transition-colors">Course Marketplace</Link></li>
              <li><Link to="/dashboard" className="text-white/60 hover:text-mint transition-colors">My Learning</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-medium mb-4">Company</h4>
            <ul className="space-y-2">
              <li><Link to="/company" className="text-white/60 hover:text-mint transition-colors">About Us</Link></li>
              <li><Link to="/company" className="text-white/60 hover:text-mint transition-colors">Team</Link></li>
              <li><Link to="/company" className="text-white/60 hover:text-mint transition-colors">Careers</Link></li>
              <li><Link to="/company" className="text-white/60 hover:text-mint transition-colors">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-medium mb-4">Legal</h4>
            <ul className="space-y-2">
              <li><Link to="/legal" className="text-white/60 hover:text-mint transition-colors">Terms of Service</Link></li>
              <li><Link to="/legal" className="text-white/60 hover:text-mint transition-colors">Privacy Policy</Link></li>
              <li><Link to="/legal" className="text-white/60 hover:text-mint transition-colors">Cookie Policy</Link></li>
              <li><Link to="/legal" className="text-white/60 hover:text-mint transition-colors">FAQ</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-mint/10 mt-16 pt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="flex items-center gap-2 text-white/60">
            <Mail className="h-4 w-4 text-mint" />
            <span>contact@skillswap.com</span>
          </div>
          <div className="flex items-center gap-2 text-white/60">
            <Phone className="h-4 w-4 text-mint" />
            <span>+1 (555) 123-4567</span>
          </div>
          <div className="flex items-center gap-2 text-white/60">
            <MapPin className="h-4 w-4 text-mint" />
            <span>123 Education Lane, San Francisco, CA</span>
          </div>
          <div className="md:col-span-3 text-center text-white/60 pt-4">
            <p>&copy; {new Date().getFullYear()} SKILL SWAP. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
