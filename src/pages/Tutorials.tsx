
import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { PlusCircle, BookText, FileText, Video, Bookmark, Plus } from "lucide-react";
import { toast } from "sonner";

const Tutorials = () => {
  const [searchQuery, setSearchQuery] = useState("");
  
  const handleAddResource = (type: string) => {
    toast.success(`New ${type} form opened!`, {
      description: `You can now create your new ${type.toLowerCase()}`,
    });
  };
  
  // Empty states for different resource types
  const emptyStates = {
    tutorials: {
      icon: <BookText className="h-16 w-16 text-mint mx-auto mb-4 opacity-80" />,
      title: "No Tutorials Available Yet",
      description: "Be the first to share your knowledge with step-by-step tutorials."
    },
    articles: {
      icon: <FileText className="h-16 w-16 text-mint mx-auto mb-4 opacity-80" />,
      title: "No Articles Available Yet",
      description: "Share your expertise by writing insightful articles on your favorite topics."
    },
    videos: {
      icon: <Video className="h-16 w-16 text-mint mx-auto mb-4 opacity-80" />,
      title: "No Video Tutorials Yet",
      description: "Create engaging video content to help others learn more effectively."
    }
  };
  
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
        <h1 className="text-4xl font-bold text-white">Tutorials & Resources</h1>
        <div className="flex gap-2">
          <Button 
            className="bg-mint hover:bg-mint/90 text-forest flex items-center gap-2 hover-scale transition-transform" 
            onClick={() => handleAddResource("Tutorial")}
          >
            <Plus className="h-4 w-4" />
            Add Tutorial
          </Button>
          <Button 
            variant="outline"
            className="border-mint/20 text-mint hover:bg-mint/10 flex items-center gap-2" 
            onClick={() => handleAddResource("Resource")}
          >
            <PlusCircle className="h-4 w-4" />
            Upload Resource
          </Button>
        </div>
      </div>
      
      <div className="mb-8">
        <Input
          className="max-w-md bg-forest-light border-mint/20 text-white"
          placeholder="Search tutorials and resources..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>
      
      <Tabs defaultValue="tutorials" className="w-full">
        <TabsList className="bg-forest border border-mint/10 mb-6">
          <TabsTrigger value="tutorials" className="data-[state=active]:bg-mint data-[state=active]:text-forest">
            Tutorials
          </TabsTrigger>
          <TabsTrigger value="articles" className="data-[state=active]:bg-mint data-[state=active]:text-forest">
            Articles
          </TabsTrigger>
          <TabsTrigger value="videos" className="data-[state=active]:bg-mint data-[state=active]:text-forest">
            Video Tutorials
          </TabsTrigger>
          <TabsTrigger value="bookmarks" className="data-[state=active]:bg-mint data-[state=active]:text-forest">
            Bookmarked
          </TabsTrigger>
        </TabsList>
        
        {['tutorials', 'articles', 'videos'].map(tab => (
          <TabsContent key={tab} value={tab} className="mt-0">
            <div className="col-span-full flex flex-col items-center justify-center py-10 text-center">
              <div className="bg-forest-light p-8 rounded-lg border border-mint/20 max-w-lg w-full">
                {emptyStates[tab as keyof typeof emptyStates].icon}
                <h2 className="text-2xl font-bold text-white mb-2">
                  {emptyStates[tab as keyof typeof emptyStates].title}
                </h2>
                <p className="text-white/70 mb-6">
                  {emptyStates[tab as keyof typeof emptyStates].description}
                </p>
                <div className="flex gap-4 justify-center">
                  <Button 
                    className="bg-mint hover:bg-mint/90 text-forest flex items-center gap-2 hover-scale" 
                    onClick={() => handleAddResource(tab.slice(0, -1))}
                  >
                    <PlusCircle className="h-4 w-4" />
                    Add {tab.slice(0, -1)}
                  </Button>
                </div>
              </div>
            </div>
          </TabsContent>
        ))}
        
        <TabsContent value="bookmarks">
          <div className="col-span-full flex flex-col items-center justify-center py-10 text-center">
            <div className="bg-forest-light p-8 rounded-lg border border-mint/20 max-w-lg w-full">
              <Bookmark className="h-16 w-16 text-mint mx-auto mb-4 opacity-80" />
              <h2 className="text-2xl font-bold text-white mb-2">No Bookmarks Yet</h2>
              <p className="text-white/70 mb-6">
                Save tutorials, articles, and videos for quick access later.
              </p>
              <Button 
                variant="outline" 
                className="border-mint/20 text-mint hover:bg-mint/10"
              >
                Browse Content
              </Button>
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Tutorials;
