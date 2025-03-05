
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { TrendingUp, Clock, BrainCircuit } from "lucide-react";

const CourseTabsSection = () => {
  return (
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
  );
};

export default CourseTabsSection;
