
import { useState } from "react";
import { toast } from "sonner";
import HeaderSection from "@/components/tutorials/HeaderSection";
import TabsSection from "@/components/tutorials/TabsSection";
import ResourceDialog from "@/components/tutorials/ResourceDialog";

const Tutorials = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeDialog, setActiveDialog] = useState<string | null>(null);
  
  const handleAddResource = (type: string) => {
    setActiveDialog(type);
  };
  
  const handleSubmitResource = (type: string) => {
    toast.success(`New ${type} added!`, {
      description: `Your ${type.toLowerCase()} has been created successfully.`,
    });
    setActiveDialog(null);
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };
  
  return (
    <div className="container mx-auto px-4 py-8">
      <HeaderSection 
        onAddResource={handleAddResource}
        searchQuery={searchQuery}
        onSearchChange={handleSearchChange}
      />
      
      <TabsSection onResourceAdd={handleAddResource} />
      
      {/* Resource Dialog for Tutorial */}
      <ResourceDialog
        type="Tutorial"
        isOpen={activeDialog === "Tutorial"}
        onOpenChange={(open) => !open && setActiveDialog(null)}
        onSubmit={handleSubmitResource}
      />
      
      {/* Resource Dialog for Resource */}
      <ResourceDialog
        type="Resource"
        isOpen={activeDialog === "Resource"}
        onOpenChange={(open) => !open && setActiveDialog(null)}
        onSubmit={handleSubmitResource}
      />
      
      {/* Resource Dialog for tutorials tab */}
      <ResourceDialog
        type="tutorials"
        isOpen={activeDialog === "tutorials"}
        onOpenChange={(open) => !open && setActiveDialog(null)}
        onSubmit={handleSubmitResource}
      />
      
      {/* Resource Dialog for articles tab */}
      <ResourceDialog
        type="articles"
        isOpen={activeDialog === "articles"}
        onOpenChange={(open) => !open && setActiveDialog(null)}
        onSubmit={handleSubmitResource}
      />
      
      {/* Resource Dialog for videos tab */}
      <ResourceDialog
        type="videos"
        isOpen={activeDialog === "videos"}
        onOpenChange={(open) => !open && setActiveDialog(null)}
        onSubmit={handleSubmitResource}
      />
    </div>
  );
};

export default Tutorials;
