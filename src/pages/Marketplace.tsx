
import { useState, useRef, useEffect } from "react";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search, Filter, Star, Plus, GraduationCap, BookOpen } from "lucide-react";
import { toast } from "sonner";

const Marketplace = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [showSuggestions, setShowSuggestions] = useState(false);
  const suggestionsRef = useRef<HTMLDivElement>(null);
  
  // Sample search suggestions
  const searchSuggestions = [
    "Web Development",
    "Data Science",
    "UI/UX Design",
    "Mobile App Development",
    "Machine Learning",
    "JavaScript",
    "Python",
    "React",
  ];
  
  // Sample marketplace listings
  const listings = [
    {
      id: 1,
      title: "Web Development Fundamentals",
      provider: "Jane Smith",
      rating: 4.8,
      reviews: 124,
      skills: ["HTML", "CSS", "JavaScript"],
      price: "$45",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158"
    },
    {
      id: 2,
      title: "Data Science for Beginners",
      provider: "Alex Johnson",
      rating: 4.6,
      reviews: 98,
      skills: ["Python", "Statistics", "SQL"],
      price: "$50",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085"
    },
    {
      id: 3,
      title: "UI/UX Design Workshop",
      provider: "Maria Rodriguez",
      rating: 4.9,
      reviews: 156,
      skills: ["Figma", "Adobe XD", "Prototyping"],
      price: "$65",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956"
    },
    {
      id: 4,
      title: "Mobile App Development Masterclass",
      provider: "Tyler Chen",
      rating: 4.7,
      reviews: 112,
      skills: ["React Native", "Flutter", "iOS/Android"],
      price: "$55",
      image: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6"
    }
  ];
  
  // Handle click outside to close suggestions
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (suggestionsRef.current && !suggestionsRef.current.contains(event.target as Node)) {
        setShowSuggestions(false);
      }
    };
    
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  
  const handleCreateCourse = () => {
    toast.success("Course creation form opened!", {
      description: "You can now create your new course",
    });
  };
  
  const handleSelectSuggestion = (suggestion: string) => {
    setSearchQuery(suggestion);
    setShowSuggestions(false);
  };
  
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
        <h1 className="text-4xl font-bold text-white">Course Marketplace</h1>
        <Button 
          className="bg-mint hover:bg-mint/90 text-forest flex items-center gap-2 hover-scale" 
          onClick={handleCreateCourse}
        >
          <Plus className="h-4 w-4" />
          Create Course
        </Button>
      </div>
      
      <div className="flex flex-col md:flex-row gap-4 mb-8">
        <div className="relative flex-grow">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white/40" />
          <Input
            className="pl-10 bg-forest-light border-mint/20 text-white"
            placeholder="Search for courses, topics, or educators..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onFocus={() => setShowSuggestions(true)}
          />
          
          {/* Search suggestions */}
          {showSuggestions && (
            <div 
              ref={suggestionsRef}
              className="absolute top-full left-0 right-0 mt-1 bg-forest-light border border-mint/20 rounded-md shadow-lg z-10 max-h-60 overflow-y-auto animate-fade-in"
            >
              {searchSuggestions.map((suggestion, index) => (
                <div 
                  key={index}
                  className="px-4 py-2 hover:bg-mint/10 cursor-pointer text-white transition-colors"
                  onClick={() => handleSelectSuggestion(suggestion)}
                >
                  <div className="flex items-center gap-2">
                    <Search className="h-3 w-3 text-mint" />
                    <span>{suggestion}</span>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
        <Button className="bg-forest-light border border-mint/20 text-white hover:bg-forest-light/80">
          <Filter className="mr-2 h-4 w-4" /> Filters
        </Button>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {listings.map((listing) => (
          <Card key={listing.id} className="bg-forest-light border border-mint/10 overflow-hidden flex flex-col group hover-scale transition-transform">
            <div className="h-48 overflow-hidden">
              <img 
                src={`${listing.image}?w=600&h=400&fit=crop`} 
                alt={listing.title}
                className="w-full h-full object-cover object-center transition-transform group-hover:scale-105 duration-300"
              />
            </div>
            <div className="p-5 flex-grow">
              <div className="flex items-center text-mint mb-2">
                <Star className="fill-mint h-4 w-4" />
                <span className="ml-1 font-bold">{listing.rating}</span>
                <span className="text-white/60 text-sm ml-1">({listing.reviews} reviews)</span>
              </div>
              <h3 className="text-lg font-bold text-white mb-1 group-hover:text-mint transition-colors">{listing.title}</h3>
              <p className="text-white/70 mb-3 flex items-center gap-2">
                <GraduationCap className="h-4 w-4 text-mint" />
                {listing.provider}
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {listing.skills.map((skill, index) => (
                  <span key={index} className="bg-mint/10 text-mint text-xs px-2 py-1 rounded-full">
                    {skill}
                  </span>
                ))}
              </div>
              <div className="flex items-center justify-between mt-auto">
                <span className="text-mint font-bold">{listing.price}</span>
                <Button className="bg-mint hover:bg-mint/90 text-forest text-sm">Enroll Now</Button>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Marketplace;
