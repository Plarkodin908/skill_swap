
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { 
  Home, 
  ShoppingBag, 
  MessageSquare, 
  Calendar, 
  BookOpen, 
  Users,
  User,
  Settings,
  Menu,
  X
} from "lucide-react";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true);
  const location = useLocation();
  
  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };
  
  const menuItems = [
    { path: "/", label: "Home", icon: Home },
    { path: "/marketplace", label: "Marketplace", icon: ShoppingBag },
    { path: "/messages", label: "Messages", icon: MessageSquare },
    { path: "/calendar", label: "Calendar", icon: Calendar },
    { path: "/tutorials", label: "Tutorials", icon: BookOpen },
    { path: "/community", label: "Community", icon: Users },
    { path: "/dashboard", label: "Dashboard", icon: User },
  ];
  
  return (
    <>
      {/* Mobile menu button */}
      <Button
        variant="outline"
        size="icon"
        className="fixed top-4 left-4 z-50 lg:hidden border-mint/20 text-mint hover:bg-mint/10"
        onClick={toggleSidebar}
      >
        {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
      </Button>
      
      {/* Sidebar */}
      <div 
        className={`
          fixed inset-y-0 left-0 z-40 w-64 bg-forest-light border-r border-mint/10 transform transition-transform duration-300 ease-in-out
          ${isOpen ? 'translate-x-0' : '-translate-x-full'}
          lg:translate-x-0 lg:static lg:h-screen
        `}
      >
        <div className="flex flex-col h-full p-5">
          <div className="flex items-center justify-center mb-8">
            <h1 className="text-2xl font-bold text-mint">SKILL SWAP</h1>
          </div>
          
          <nav className="flex-grow">
            <ul className="space-y-2">
              {menuItems.map((item) => {
                const isActive = location.pathname === item.path;
                return (
                  <li key={item.path}>
                    <Link 
                      to={item.path} 
                      className={`
                        flex items-center gap-3 px-3 py-2 rounded-lg transition-colors
                        ${isActive 
                          ? 'bg-mint text-forest font-medium' 
                          : 'text-white/80 hover:bg-mint/10 hover:text-mint'}
                      `}
                    >
                      <item.icon className="h-5 w-5" />
                      <span>{item.label}</span>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>
          
          <Separator className="bg-mint/10 my-4" />
          
          <Link 
            to="/settings" 
            className="flex items-center gap-3 px-3 py-2 rounded-lg text-white/80 hover:bg-mint/10 hover:text-mint transition-colors"
          >
            <Settings className="h-5 w-5" />
            <span>Settings</span>
          </Link>
          
          <div className="mt-4 bg-forest p-4 rounded-lg border border-mint/10">
            <div className="flex flex-col items-center text-center">
              <div className="w-12 h-12 rounded-full bg-mint/20 flex items-center justify-center mb-2">
                <User className="h-6 w-6 text-mint" />
              </div>
              <p className="text-white font-medium">John Doe</p>
              <p className="text-white/60 text-sm">Professional</p>
              <Button 
                variant="outline" 
                size="sm" 
                className="mt-2 border-mint/20 text-mint hover:bg-mint/10 text-xs"
              >
                View Profile
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
