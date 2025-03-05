
import { useState } from "react";
import SearchBar from "@/components/marketplace/SearchBar";
import FilterToggle from "@/components/marketplace/FilterToggle";
import FilterPanel from "@/components/marketplace/FilterPanel";
import CourseTabsSection from "@/components/marketplace/CourseTabsSection";
import EmptyCoursesState from "@/components/marketplace/EmptyCoursesState";
import MarketplaceHeader from "@/components/marketplace/MarketplaceHeader";

const Marketplace = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [showFilters, setShowFilters] = useState(false);
  
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
  
  const toggleFilters = () => {
    setShowFilters(!showFilters);
  };
  
  return (
    <div className="container mx-auto px-4 py-8">
      <MarketplaceHeader />
      
      <div className="flex flex-col md:flex-row gap-4 mb-8">
        <SearchBar 
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          searchSuggestions={searchSuggestions}
        />
        <FilterToggle 
          showFilters={showFilters}
          toggleFilters={toggleFilters}
        />
      </div>
      
      <FilterPanel showFilters={showFilters} />
      
      <CourseTabsSection />
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        <EmptyCoursesState />
      </div>
    </div>
  );
};

export default Marketplace;
