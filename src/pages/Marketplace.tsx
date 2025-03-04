
import { useState, useRef, useEffect } from "react";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { 
  Search, 
  Filter, 
  Plus, 
  BookOpen, 
  Upload, 
  PlusCircle, 
  Check, 
  Star,
  Clock,
  TrendingUp,
  BrainCircuit,
  X,
  Bookmark
} from "lucide-react";
import { toast } from "sonner";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Checkbox } from "@/components/ui/checkbox";
import { Slider } from "@/components/ui/slider";
import { Badge } from "@/components/ui/badge";
import { Link, useNavigate } from "react-router-dom";

const Marketplace = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [showFilters, setShowFilters] = useState(false);
  const suggestionsRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();
  
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
    navigate("/add-course");
  };
  
  const handleImportContent = () => {
    navigate("/import-content");
  };
  
  const handleSelectSuggestion = (suggestion: string) => {
    setSearchQuery(suggestion);
    setShowSuggestions(false);
  };

  const toggleFilters = () => {
    setShowFilters(!showFilters);
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
        <Button 
          className={`bg-forest-light border border-mint/20 text-white hover:bg-forest-light/80 ${showFilters ? 'bg-mint/10' : ''}`}
          onClick={toggleFilters}
        >
          <Filter className="mr-2 h-4 w-4" /> Filters
        </Button>
      </div>
      
      {showFilters && (
        <Card className="bg-forest-light border-mint/20 text-white mb-8 p-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="space-y-3">
              <h3 className="font-medium mb-2">Category</h3>
              <div className="space-y-2">
                {["Programming", "Design", "Business", "Marketing", "Data Science"].map((category) => (
                  <div key={category} className="flex items-center space-x-2">
                    <Checkbox id={`category-${category}`} />
                    <label htmlFor={`category-${category}`} className="text-sm text-white/80">{category}</label>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="space-y-3">
              <h3 className="font-medium mb-2">Skill Level</h3>
              <div className="space-y-2">
                {["Beginner", "Intermediate", "Advanced", "All Levels"].map((level) => (
                  <div key={level} className="flex items-center space-x-2">
                    <Checkbox id={`level-${level}`} />
                    <label htmlFor={`level-${level}`} className="text-sm text-white/80">{level}</label>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="space-y-3">
              <h3 className="font-medium mb-2">Price</h3>
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <Checkbox id="price-free" />
                  <label htmlFor="price-free" className="text-sm text-white/80">Free</label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="price-paid" />
                  <label htmlFor="price-paid" className="text-sm text-white/80">Paid</label>
                </div>
                <div className="pt-2">
                  <label className="text-sm text-white/80 mb-1 block">Price Range</label>
                  <Slider defaultValue={[50]} max={200} step={1} className="mt-2" />
                  <div className="flex justify-between mt-1">
                    <span className="text-xs text-white/60">$0</span>
                    <span className="text-xs text-white/60">$200+</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="space-y-3">
              <h3 className="font-medium mb-2">Duration</h3>
              <div className="space-y-2">
                {["0-2 hours", "3-6 hours", "7-16 hours", "17+ hours"].map((duration) => (
                  <div key={duration} className="flex items-center space-x-2">
                    <Checkbox id={`duration-${duration}`} />
                    <label htmlFor={`duration-${duration}`} className="text-sm text-white/80">{duration}</label>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          <div className="flex justify-end gap-2 mt-5">
            <Button variant="outline" className="border-mint/20 text-white/80 hover:bg-mint/10">
              <X className="mr-2 h-4 w-4" /> Reset
            </Button>
            <Button className="bg-mint hover:bg-mint/90 text-forest">
              <Check className="mr-2 h-4 w-4" /> Apply Filters
            </Button>
          </div>
        </Card>
      )}
      
      <Tabs defaultValue="all" className="mb-8">
        <TabsList className="bg-forest border border-mint/10">
          <TabsTrigger value="all" className="data-[state=active]:bg-mint data-[state=active]:text-forest">
            All Courses
          </TabsTrigger>
          <TabsTrigger value="trending" className="data-[state=active]:bg-mint data-[state=active]:text-forest">
            <TrendingUp className="mr-1 h-4 w-4" /> Trending
          </TabsTrigger>
          <TabsTrigger value="new" className="data-[state=active]:bg-mint data-[state=active]:text-forest">
            <Clock className="mr-1 h-4 w-4" /> Newest
          </TabsTrigger>
          <TabsTrigger value="ai" className="data-[state=active]:bg-mint data-[state=active]:text-forest">
            <BrainCircuit className="mr-1 h-4 w-4" /> AI-Generated
          </TabsTrigger>
        </TabsList>
      </Tabs>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        <div className="col-span-full flex flex-col items-center justify-center py-20 text-center">
          <div className="bg-forest-light p-8 rounded-lg border border-mint/20 max-w-lg w-full">
            <BookOpen className="h-16 w-16 text-mint mx-auto mb-4 opacity-80" />
            <h2 className="text-2xl font-bold text-white mb-2">No Courses Available Yet</h2>
            <p className="text-white/70 mb-6">Be the first to share your knowledge with our community by creating an engaging course.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                className="bg-mint hover:bg-mint/90 text-forest flex items-center gap-2 hover-scale" 
                onClick={handleCreateCourse}
              >
                <PlusCircle className="h-4 w-4" />
                Create a Course
              </Button>
              <Button 
                variant="outline" 
                className="border-mint/20 text-mint hover:bg-mint/10 flex items-center gap-2"
                onClick={handleImportContent}
              >
                <Upload className="h-4 w-4" />
                Import Content
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Marketplace;
