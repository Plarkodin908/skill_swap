
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, MessageSquare, BookOpen, Users, Trophy, Award, Target, Zap } from "lucide-react";
import AchievementBadge from "@/components/gamification/AchievementBadge";
import Leaderboard from "@/components/gamification/Leaderboard";
import ProgressTracker from "@/components/gamification/ProgressTracker";
import SocialLinks from "@/components/community/SocialLinks";
import { useState } from "react";

const Dashboard = () => {
  // Sample data for the leaderboard
  const leaderboardUsers = [
    { id: 1, name: "Emma Watson", avatar: "https://i.pravatar.cc/150?img=1", points: 1250, rank: 1 },
    { id: 2, name: "James Smith", avatar: "https://i.pravatar.cc/150?img=2", points: 980, rank: 2 },
    { id: 3, name: "John Doe", avatar: "https://i.pravatar.cc/150?img=3", points: 820, rank: 3 },
    { id: 4, name: "Sarah Connor", avatar: "https://i.pravatar.cc/150?img=4", points: 720, rank: 4 },
    { id: 5, name: "Michael Johnson", avatar: "https://i.pravatar.cc/150?img=5", points: 650, rank: 5 },
  ];
  
  // Sample data for progress tracker
  const progressItems = [
    { id: 1, label: "Complete Profile", currentValue: 80, targetValue: 100 },
    { id: 2, label: "Messages Sent", currentValue: 12, targetValue: 20 },
    { id: 3, label: "Skills Verified", currentValue: 5, targetValue: 10 },
    { id: 4, label: "Tutorials Completed", currentValue: 3, targetValue: 10 },
  ];

  // User subscription state - in real app, this would come from a user auth context
  const [userPlan, setUserPlan] = useState("Free"); // Could be "Free", "Pro Learner", or "Educator"
  const isPremium = userPlan === "Pro Learner" || userPlan === "Educator";
  
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8 text-white">Dashboard</h1>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            <Card className="bg-forest-light border border-mint/10 p-6">
              <div className="flex items-center gap-4 mb-4">
                <div className="bg-mint/10 p-3 rounded-full">
                  <Users className="h-6 w-6 text-mint" />
                </div>
                <h2 className="text-xl font-semibold text-white">Find Matches</h2>
              </div>
              <p className="text-white/70 mb-4">Connect with professionals that match your skills and interests</p>
              <Button className="bg-mint hover:bg-mint/90 text-forest w-full" onClick={() => window.location.href = "/matches"}>Explore Matches</Button>
            </Card>
            
            <Card className="bg-forest-light border border-mint/10 p-6">
              <div className="flex items-center gap-4 mb-4">
                <div className="bg-mint/10 p-3 rounded-full">
                  <MessageSquare className="h-6 w-6 text-mint" />
                </div>
                <h2 className="text-xl font-semibold text-white">Messages</h2>
              </div>
              <p className="text-white/70 mb-4">View and respond to your conversations</p>
              <Button className="bg-mint hover:bg-mint/90 text-forest w-full" onClick={() => window.location.href = "/messages"}>Open Messages</Button>
            </Card>
            
            <Card className="bg-forest-light border border-mint/10 p-6">
              <div className="flex items-center gap-4 mb-4">
                <div className="bg-mint/10 p-3 rounded-full">
                  <Calendar className="h-6 w-6 text-mint" />
                </div>
                <h2 className="text-xl font-semibold text-white">Schedule</h2>
              </div>
              <p className="text-white/70 mb-4">Manage your appointments and sessions</p>
              <Button className="bg-mint hover:bg-mint/90 text-forest w-full" onClick={() => window.location.href = "/calendar"}>View Calendar</Button>
            </Card>
          </div>
          
          {/* Progress Tracker */}
          <Card className="bg-forest-light border border-mint/10 p-6 mb-8">
            <ProgressTracker items={progressItems} />
          </Card>
          
          {/* Social Links */}
          <SocialLinks isPremium={isPremium} maxLinks={isPremium ? 6 : 3} />
          
          {/* Activity Feed - simplified for now */}
          <Card className="bg-forest-light border border-mint/10 p-6 mt-8">
            <h3 className="text-xl font-bold mb-4 text-white">Recent Activity</h3>
            <div className="space-y-4">
              <div className="border-l-2 border-mint pl-4 pb-4">
                <p className="text-white font-medium">You completed the "React Basics" tutorial</p>
                <p className="text-white/60 text-sm">2 hours ago</p>
              </div>
              <div className="border-l-2 border-mint pl-4 pb-4">
                <p className="text-white font-medium">Skill "JavaScript" verified</p>
                <p className="text-white/60 text-sm">Yesterday</p>
              </div>
              <div className="border-l-2 border-mint pl-4 pb-4">
                <p className="text-white font-medium">You received a new message from Emma</p>
                <p className="text-white/60 text-sm">2 days ago</p>
              </div>
            </div>
            <Button variant="outline" className="mt-4 border-mint/20 text-mint hover:bg-mint/10 w-full" onClick={() => window.location.href = "/activity"}>
              View All Activity
            </Button>
          </Card>
        </div>
        
        <div className="space-y-8">
          {/* User Plan Info Card */}
          <Card className="bg-forest-light border border-mint/10 p-6">
            <h3 className="text-xl font-bold mb-4 text-white">Current Plan: <span className="text-mint">{userPlan}</span></h3>
            <div className="space-y-2 mb-4">
              <div className="flex items-center gap-2">
                <div className={`w-2 h-2 rounded-full ${isPremium ? 'bg-mint' : 'bg-white/40'}`}></div>
                <p className={`${isPremium ? 'text-white' : 'text-white/60 line-through'}`}>Unlimited course access</p>
              </div>
              <div className="flex items-center gap-2">
                <div className={`w-2 h-2 rounded-full ${isPremium ? 'bg-mint' : 'bg-white/40'}`}></div>
                <p className={`${isPremium ? 'text-white' : 'text-white/60 line-through'}`}>Priority messaging</p>
              </div>
              <div className="flex items-center gap-2">
                <div className={`w-2 h-2 rounded-full ${isPremium ? 'bg-mint' : 'bg-white/40'}`}></div>
                <p className={`${isPremium ? 'text-white' : 'text-white/60 line-through'}`}>Course certificates</p>
              </div>
            </div>
            <Button 
              className="w-full bg-mint hover:bg-mint/90 text-forest"
              onClick={() => window.location.href = "/pricing"}
            >
              {isPremium ? "Manage Subscription" : "Upgrade Now"}
            </Button>
          </Card>

          {/* User Stats Card */}
          <Card className="bg-forest-light border border-mint/10 p-6">
            <h3 className="text-xl font-bold mb-4 text-white">Your Stats</h3>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-forest p-4 rounded-lg text-center">
                <p className="text-mint text-3xl font-bold">42</p>
                <p className="text-white/70">Connections</p>
              </div>
              <div className="bg-forest p-4 rounded-lg text-center">
                <p className="text-mint text-3xl font-bold">12</p>
                <p className="text-white/70">Sessions</p>
              </div>
              <div className="bg-forest p-4 rounded-lg text-center">
                <p className="text-mint text-3xl font-bold">820</p>
                <p className="text-white/70">Points</p>
              </div>
              <div className="bg-forest p-4 rounded-lg text-center">
                <p className="text-mint text-3xl font-bold">8</p>
                <p className="text-white/70">Badges</p>
              </div>
            </div>
          </Card>
          
          {/* Achievements Card */}
          <Card className="bg-forest-light border border-mint/10 p-6">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-bold text-white">Achievements</h3>
              <Button variant="ghost" className="text-mint hover:text-mint/80 hover:bg-mint/10 p-1 h-auto" onClick={() => window.location.href = "/achievements"}>
                View All
              </Button>
            </div>
            <div className="grid grid-cols-3 gap-2">
              <AchievementBadge 
                type="beginner" 
                title="First Login" 
                description="Logged in for the first time" 
                earned={true} 
              />
              <AchievementBadge 
                type="intermediate" 
                title="Profile Pro" 
                description="Completed your profile 100%" 
                earned={true} 
              />
              <AchievementBadge 
                type="expert" 
                title="Connector" 
                description="Made 10+ connections" 
                earned={true} 
              />
              <AchievementBadge 
                type="master" 
                title="Skill Master" 
                description="Verified 5+ skills" 
                earned={false} 
              />
              <AchievementBadge 
                type="legend" 
                title="Top Mentor" 
                description="Helped 25+ users" 
                earned={false} 
              />
              <AchievementBadge 
                type="beginner" 
                title="Learner" 
                description="Completed 5 tutorials" 
                earned={false} 
              />
            </div>
          </Card>
          
          {/* Leaderboard Card */}
          <Card className="bg-forest-light border border-mint/10 p-6">
            <Leaderboard users={leaderboardUsers} />
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
