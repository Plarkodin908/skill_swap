
import { Button } from "@/components/ui/button";
import { Filter } from "lucide-react";

interface FilterToggleProps {
  showFilters: boolean;
  toggleFilters: () => void;
}

const FilterToggle = ({ showFilters, toggleFilters }: FilterToggleProps) => {
  return (
    <Button 
      className={`bg-forest-light border border-mint/20 text-white hover:bg-forest-light/80 ${showFilters ? 'bg-mint/10' : ''}`}
      onClick={toggleFilters}
    >
      <Filter className="mr-2 h-4 w-4" /> Filters
    </Button>
  );
};

export default FilterToggle;
