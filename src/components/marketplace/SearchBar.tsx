
import { useState, useRef, useEffect } from "react";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

interface SearchBarProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  searchSuggestions: string[];
}

const SearchBar = ({ searchQuery, setSearchQuery, searchSuggestions }: SearchBarProps) => {
  const [showSuggestions, setShowSuggestions] = useState(false);
  const suggestionsRef = useRef<HTMLDivElement>(null);
  
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
  
  const handleSelectSuggestion = (suggestion: string) => {
    setSearchQuery(suggestion);
    setShowSuggestions(false);
  };

  return (
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
  );
};

export default SearchBar;
