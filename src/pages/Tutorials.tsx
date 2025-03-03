
import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { PlusCircle, BookText, FileText, Video, Bookmark, Plus, Upload, FileVideo } from "lucide-react";
import { toast } from "sonner";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

const Tutorials = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeDialog, setActiveDialog] = useState<string | null>(null);
  const [videoFile, setVideoFile] = useState<File | null>(null);
  
  const handleAddResource = (type: string) => {
    setActiveDialog(type);
    setVideoFile(null); // Reset video file when opening a new dialog
  };
  
  const handleSubmitResource = (type: string) => {
    if ((type === "Tutorial" || type === "videos") && !videoFile && document.getElementById('video-upload')) {
      toast.error(`Please upload a video file for your ${type.toLowerCase()}.`);
      return;
    }
    
    toast.success(`New ${type} added!`, {
      description: `Your ${type.toLowerCase()} has been created successfully.`,
    });
    setActiveDialog(null);
    setVideoFile(null);
  };

  const handleVideoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      
      // Check if file is a video
      if (!file.type.startsWith('video/')) {
        toast.error('Please upload a video file');
        return;
      }
      
      // Check file size (limit to 100MB for example)
      if (file.size > 100 * 1024 * 1024) {
        toast.error('Video file is too large. Maximum size is 100MB.');
        return;
      }
      
      setVideoFile(file);
      toast.info('Video selected successfully!');
    }
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
          <Dialog open={activeDialog === "Tutorial"} onOpenChange={(open) => !open && setActiveDialog(null)}>
            <DialogTrigger asChild>
              <Button 
                className="bg-mint hover:bg-mint/90 text-forest flex items-center gap-2 hover-scale transition-transform" 
                onClick={() => handleAddResource("Tutorial")}
              >
                <Plus className="h-4 w-4" />
                Add Tutorial
              </Button>
            </DialogTrigger>
            <DialogContent className="bg-forest-light border-mint/20 text-white sm:max-w-[500px]">
              <DialogHeader>
                <DialogTitle>Create New Tutorial</DialogTitle>
                <DialogDescription className="text-white/70">
                  Share your knowledge with the community through a step-by-step tutorial.
                </DialogDescription>
              </DialogHeader>
              <div className="space-y-4 py-4">
                <div className="space-y-2">
                  <Label htmlFor="title">Title</Label>
                  <Input id="title" placeholder="Enter tutorial title..." className="bg-forest border-mint/20 text-white" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="category">Category</Label>
                  <Input id="category" placeholder="Programming, Design, etc..." className="bg-forest border-mint/20 text-white" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="description">Description</Label>
                  <Textarea id="description" placeholder="Provide a brief description..." className="bg-forest border-mint/20 text-white min-h-[120px]" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="video-upload">Tutorial Video</Label>
                  <div className="flex items-center gap-2">
                    <Input 
                      type="file" 
                      id="video-upload" 
                      className="bg-forest border-mint/20 text-white hidden" 
                      accept="video/*"
                      onChange={handleVideoUpload}
                    />
                    <Button 
                      type="button" 
                      variant="outline" 
                      className="w-full border-mint/20 text-mint hover:bg-mint/10 flex items-center justify-center gap-2"
                      onClick={() => document.getElementById('video-upload')?.click()}
                    >
                      <Upload className="h-4 w-4" />
                      {videoFile ? 'Change Video' : 'Upload Video'}
                    </Button>
                  </div>
                  {videoFile && (
                    <div className="flex items-center gap-2 mt-2 p-2 bg-mint/10 rounded-md">
                      <FileVideo className="h-4 w-4 text-mint" />
                      <span className="text-sm text-white/80 truncate">{videoFile.name}</span>
                      <span className="text-xs text-white/60 ml-auto">
                        {(videoFile.size / (1024 * 1024)).toFixed(2)} MB
                      </span>
                    </div>
                  )}
                </div>
              </div>
              <DialogFooter>
                <Button variant="outline" onClick={() => setActiveDialog(null)}>Cancel</Button>
                <Button className="bg-mint text-forest" onClick={() => handleSubmitResource("Tutorial")}>Create Tutorial</Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
          
          <Dialog open={activeDialog === "Resource"} onOpenChange={(open) => !open && setActiveDialog(null)}>
            <DialogTrigger asChild>
              <Button 
                variant="outline"
                className="border-mint/20 text-mint hover:bg-mint/10 flex items-center gap-2" 
                onClick={() => handleAddResource("Resource")}
              >
                <PlusCircle className="h-4 w-4" />
                Upload Resource
              </Button>
            </DialogTrigger>
            <DialogContent className="bg-forest-light border-mint/20 text-white sm:max-w-[500px]">
              <DialogHeader>
                <DialogTitle>Upload New Resource</DialogTitle>
                <DialogDescription className="text-white/70">
                  Share helpful resources with the SKILL SWAP community.
                </DialogDescription>
              </DialogHeader>
              <div className="space-y-4 py-4">
                <div className="space-y-2">
                  <Label htmlFor="resource-title">Resource Title</Label>
                  <Input id="resource-title" placeholder="Enter a title..." className="bg-forest border-mint/20 text-white" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="resource-type">Resource Type</Label>
                  <Input id="resource-type" placeholder="PDF, Link, Cheatsheet, etc..." className="bg-forest border-mint/20 text-white" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="resource-link">URL or File</Label>
                  <Input id="resource-link" placeholder="https://..." className="bg-forest border-mint/20 text-white" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="resource-notes">Notes</Label>
                  <Textarea id="resource-notes" placeholder="Add some notes about this resource..." className="bg-forest border-mint/20 text-white" />
                </div>
              </div>
              <DialogFooter>
                <Button variant="outline" onClick={() => setActiveDialog(null)}>Cancel</Button>
                <Button className="bg-mint text-forest" onClick={() => handleSubmitResource("Resource")}>Upload Resource</Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
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
                  <Dialog open={activeDialog === tab} onOpenChange={(open) => !open && setActiveDialog(null)}>
                    <DialogTrigger asChild>
                      <Button 
                        className="bg-mint hover:bg-mint/90 text-forest flex items-center gap-2 hover-scale" 
                        onClick={() => handleAddResource(tab)}
                      >
                        <PlusCircle className="h-4 w-4" />
                        Add {tab.slice(0, -1)}
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="bg-forest-light border-mint/20 text-white sm:max-w-[500px]">
                      <DialogHeader>
                        <DialogTitle>Create New {tab.slice(0, -1)}</DialogTitle>
                        <DialogDescription className="text-white/70">
                          Share your knowledge with the SKILL SWAP community.
                        </DialogDescription>
                      </DialogHeader>
                      <div className="space-y-4 py-4">
                        <div className="space-y-2">
                          <Label htmlFor={`${tab}-title`}>Title</Label>
                          <Input id={`${tab}-title`} placeholder="Enter a title..." className="bg-forest border-mint/20 text-white" />
                        </div>
                        {tab === 'videos' && (
                          <div className="space-y-2">
                            <Label htmlFor={`${tab}-upload`}>Video File</Label>
                            <div className="flex items-center gap-2">
                              <Input 
                                type="file" 
                                id={`${tab}-upload`} 
                                className="bg-forest border-mint/20 text-white hidden" 
                                accept="video/*"
                                onChange={handleVideoUpload}
                              />
                              <Button 
                                type="button" 
                                variant="outline" 
                                className="w-full border-mint/20 text-mint hover:bg-mint/10 flex items-center justify-center gap-2"
                                onClick={() => document.getElementById(`${tab}-upload`)?.click()}
                              >
                                <Upload className="h-4 w-4" />
                                {videoFile ? 'Change Video' : 'Upload Video'}
                              </Button>
                            </div>
                            {videoFile && (
                              <div className="flex items-center gap-2 mt-2 p-2 bg-mint/10 rounded-md">
                                <FileVideo className="h-4 w-4 text-mint" />
                                <span className="text-sm text-white/80 truncate">{videoFile.name}</span>
                                <span className="text-xs text-white/60 ml-auto">
                                  {(videoFile.size / (1024 * 1024)).toFixed(2)} MB
                                </span>
                              </div>
                            )}
                          </div>
                        )}
                        <div className="space-y-2">
                          <Label htmlFor={`${tab}-content`}>Content</Label>
                          <Textarea id={`${tab}-content`} placeholder="Write your content..." className="bg-forest border-mint/20 text-white min-h-[150px]" />
                        </div>
                      </div>
                      <DialogFooter>
                        <Button variant="outline" onClick={() => setActiveDialog(null)}>Cancel</Button>
                        <Button className="bg-mint text-forest" onClick={() => handleSubmitResource(tab)}>Create {tab.slice(0, -1)}</Button>
                      </DialogFooter>
                    </DialogContent>
                  </Dialog>
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
