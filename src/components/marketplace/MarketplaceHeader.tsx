
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import { useNavigate } from "react-router-dom";

const MarketplaceHeader = () => {
  const navigate = useNavigate();
  
  const handleCreateCourse = () => {
    navigate("/add-course");
  };

  return (
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
  );
};

export default MarketplaceHeader;
