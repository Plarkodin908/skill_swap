
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, MessageSquare, BookOpen, Users, Trophy } from "lucide-react";

const Dashboard = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8 text-white">Dashboard</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Card className="bg-forest-light border border-mint/10 p-6">
          <div className="flex items-center gap-4 mb-4">
            <div className="bg-mint/10 p-3 rounded-full">
              <Users className="h-6 w-6 text-mint" />
            </div>
            <h2 className="text-xl font-semibold text-white">Find Matches</h2>
          </div>
          <p className="text-white/70 mb-4">Connect with professionals that match your skills and interests</p>
          <Button className="bg-mint hover:bg-mint/90 text-forest w-full">Explore Matches</Button>
        </Card>
        
        <Card className="bg-forest-light border border-mint/10 p-6">
          <div className="flex items-center gap-4 mb-4">
            <div className="bg-mint/10 p-3 rounded-full">
              <MessageSquare className="h-6 w-6 text-mint" />
            </div>
            <h2 className="text-xl font-semibold text-white">Messages</h2>
          </div>
          <p className="text-white/70 mb-4">View and respond to your conversations</p>
          <Button className="bg-mint hover:bg-mint/90 text-forest w-full">Open Messages</Button>
        </Card>
        
        <Card className="bg-forest-light border border-mint/10 p-6">
          <div className="flex items-center gap-4 mb-4">
            <div className="bg-mint/10 p-3 rounded-full">
              <Calendar className="h-6 w-6 text-mint" />
            </div>
            <h2 className="text-xl font-semibold text-white">Schedule</h2>
          </div>
          <p className="text-white/70 mb-4">Manage your appointments and sessions</p>
          <Button className="bg-mint hover:bg-mint/90 text-forest w-full">View Calendar</Button>
        </Card>
        
        <Card className="bg-forest-light border border-mint/10 p-6">
          <div className="flex items-center gap-4 mb-4">
            <div className="bg-mint/10 p-3 rounded-full">
              <BookOpen className="h-6 w-6 text-mint" />
            </div>
            <h2 className="text-xl font-semibold text-white">Tutorials</h2>
          </div>
          <p className="text-white/70 mb-4">Access guides and learning resources</p>
          <Button className="bg-mint hover:bg-mint/90 text-forest w-full">Browse Tutorials</Button>
        </Card>
        
        <Card className="bg-forest-light border border-mint/10 p-6">
          <div className="flex items-center gap-4 mb-4">
            <div className="bg-mint/10 p-3 rounded-full">
              <Trophy className="h-6 w-6 text-mint" />
            </div>
            <h2 className="text-xl font-semibold text-white">Achievements</h2>
          </div>
          <p className="text-white/70 mb-4">View your badges and progress</p>
          <Button className="bg-mint hover:bg-mint/90 text-forest w-full">View Achievements</Button>
        </Card>
      </div>
      
      <div className="mt-12">
        <h2 className="text-2xl font-bold mb-6 text-white">Your Stats</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          <div className="bg-forest-light border border-mint/10 p-6 rounded-lg">
            <p className="text-mint text-3xl font-bold">42</p>
            <p className="text-white/70">Connections</p>
          </div>
          <div className="bg-forest-light border border-mint/10 p-6 rounded-lg">
            <p className="text-mint text-3xl font-bold">12</p>
            <p className="text-white/70">Sessions Completed</p>
          </div>
          <div className="bg-forest-light border border-mint/10 p-6 rounded-lg">
            <p className="text-mint text-3xl font-bold">820</p>
            <p className="text-white/70">Points Earned</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
