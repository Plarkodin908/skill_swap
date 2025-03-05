
import { Button } from "@/components/ui/button";
import { BookOpen, PlusCircle, Upload } from "lucide-react";
import { useNavigate } from "react-router-dom";

const EmptyCoursesState = () => {
  const navigate = useNavigate();
  
  const handleCreateCourse = () => {
    navigate("/add-course");
  };
  
  const handleImportContent = () => {
    navigate("/import-content");
  };

  return (
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
  );
};

export default EmptyCoursesState;
