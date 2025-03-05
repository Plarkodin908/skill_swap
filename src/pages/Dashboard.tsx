
import { Calendar, MessageSquare, Users } from "lucide-react";
import { useState } from "react";

// Dashboard components
import DashboardLayout from "@/components/dashboard/DashboardLayout";
import StatCard from "@/components/dashboard/StatCard";
import ActivityFeed from "@/components/dashboard/ActivityFeed";
import UserPlanCard from "@/components/dashboard/UserPlanCard";
import UserStatsCard from "@/components/dashboard/UserStatsCard";
import AchievementsCard from "@/components/dashboard/AchievementsCard";

// Shared components
import { Card } from "@/components/ui/card";
import Leaderboard from "@/components/gamification/Leaderboard";
import ProgressTracker from "@/components/gamification/ProgressTracker";
import SocialLinks from "@/components/community/SocialLinks";

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

  // User stats data
  const userStats = [
    { value: 42, label: "Connections" },
    { value: 12, label: "Sessions" },
    { value: 820, label: "Points" },
    { value: 8, label: "Badges" },
  ];

  // User achievements data
  const achievements = [
    { type: "beginner", title: "First Login", description: "Logged in for the first time", earned: true },
    { type: "intermediate", title: "Profile Pro", description: "Completed your profile 100%", earned: true },
    { type: "expert", title: "Connector", description: "Made 10+ connections", earned: true },
    { type: "master", title: "Skill Master", description: "Verified 5+ skills", earned: false },
    { type: "legend", title: "Top Mentor", description: "Helped 25+ users", earned: false },
    { type: "beginner", title: "Learner", description: "Completed 5 tutorials", earned: false },
  ];

  // Activity feed data
  const activityItems = [
    { text: "You completed the \"React Basics\" tutorial", timestamp: "2 hours ago" },
    { text: "Skill \"JavaScript\" verified", timestamp: "Yesterday" },
    { text: "You received a new message from Emma", timestamp: "2 days ago" },
  ];

  // User subscription state - in real app, this would come from a user auth context
  const [userPlan, setUserPlan] = useState("Free"); // Could be "Free", "Pro Learner", or "Educator"
  const isPremium = userPlan === "Pro Learner" || userPlan === "Educator";
  
  const statCards = [
    {
      icon: Users,
      title: "Find Matches",
      description: "Connect with professionals that match your skills and interests",
      buttonText: "Explore Matches",
      href: "/matches"
    },
    {
      icon: MessageSquare,
      title: "Messages",
      description: "View and respond to your conversations",
      buttonText: "Open Messages",
      href: "/messages"
    },
    {
      icon: Calendar,
      title: "Schedule",
      description: "Manage your appointments and sessions",
      buttonText: "View Calendar",
      href: "/calendar"
    }
  ];

  // Main content for the dashboard
  const mainContent = (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        {statCards.map((card, index) => (
          <StatCard
            key={index}
            icon={card.icon}
            title={card.title}
            description={card.description}
            buttonText={card.buttonText}
            href={card.href}
          />
        ))}
      </div>
      
      {/* Progress Tracker */}
      <Card className="bg-forest-light border border-mint/10 p-6 mb-8">
        <ProgressTracker items={progressItems} />
      </Card>
      
      {/* Social Links */}
      <SocialLinks isPremium={isPremium} maxLinks={isPremium ? 6 : 3} />
      
      {/* Activity Feed */}
      <ActivityFeed items={activityItems} />
    </>
  );

  // Sidebar content for the dashboard
  const sidebarContent = (
    <>
      {/* User Plan Info Card */}
      <UserPlanCard plan={userPlan} isPremium={isPremium} />
      
      {/* User Stats Card */}
      <UserStatsCard stats={userStats} />
      
      {/* Achievements Card */}
      <AchievementsCard achievements={achievements} />
      
      {/* Leaderboard Card */}
      <Card className="bg-forest-light border border-mint/10 p-6">
        <Leaderboard users={leaderboardUsers} />
      </Card>
    </>
  );
  
  return (
    <DashboardLayout sidebar={sidebarContent}>
      {mainContent}
    </DashboardLayout>
  );
};

export default Dashboard;
