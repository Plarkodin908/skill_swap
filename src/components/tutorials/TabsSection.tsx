
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BookText, Bookmark, FileText, Video } from "lucide-react";
import EmptyState from "./EmptyState";

interface TabsSectionProps {
  onResourceAdd: (type: string) => void;
}

const TabsSection = ({ onResourceAdd }: TabsSectionProps) => {
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
    },
    bookmarks: {
      icon: <Bookmark className="h-16 w-16 text-mint mx-auto mb-4 opacity-80" />,
      title: "No Bookmarks Yet", 
      description: "Save tutorials, articles, and videos for quick access later."
    }
  };

  return (
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
          <EmptyState
            icon={emptyStates[tab as keyof typeof emptyStates].icon}
            title={emptyStates[tab as keyof typeof emptyStates].title}
            description={emptyStates[tab as keyof typeof emptyStates].description}
            actionLabel={`Add ${tab.slice(0, -1)}`}
            onAction={() => onResourceAdd(tab)}
          />
        </TabsContent>
      ))}
      
      <TabsContent value="bookmarks">
        <EmptyState
          icon={emptyStates.bookmarks.icon}
          title={emptyStates.bookmarks.title}
          description={emptyStates.bookmarks.description}
          actionLabel="Browse Content"
          onAction={() => {}} // No specific action for now
        />
      </TabsContent>
    </Tabs>
  );
};

export default TabsSection;
