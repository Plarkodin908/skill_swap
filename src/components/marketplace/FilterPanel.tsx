
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Slider } from "@/components/ui/slider";
import { Check, X } from "lucide-react";

interface FilterPanelProps {
  showFilters: boolean;
}

const FilterPanel = ({ showFilters }: FilterPanelProps) => {
  if (!showFilters) return null;
  
  return (
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
  );
};

export default FilterPanel;
