
import React from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import AchievementBadge from "@/components/gamification/AchievementBadge";
import { Award, Filter, ArrowUp, ArrowDown } from "lucide-react";

const Achievements = () => {
  // In a real app, this would come from an API
  const achievements = [
    {
      id: 1,
      type: "beginner",
      title: "First Login",
      description: "Logged in for the first time",
      earned: true,
      date: "2023-09-15"
    },
    {
      id: 2,
      type: "intermediate",
      title: "Profile Pro",
      description: "Completed your profile 100%",
      earned: true,
      date: "2023-09-20"
    },
    {
      id: 3,
      type: "expert",
      title: "Connector",
      description: "Made 10+ connections",
      earned: true,
      date: "2023-10-05"
    },
    {
      id: 4,
      type: "master",
      title: "Skill Master",
      description: "Verified 5+ skills",
      earned: false,
      progress: 60
    },
    {
      id: 5,
      type: "legend",
      title: "Top Mentor",
      description: "Helped 25+ users",
      earned: false,
      progress: 20
    },
    {
      id: 6,
      type: "beginner",
      title: "Learner",
      description: "Completed 5 tutorials",
      earned: false,
      progress: 40
    },
    {
      id: 7,
      type: "intermediate",
      title: "Course Creator",
      description: "Created your first course",
      earned: false,
      progress: 0
    },
    {
      id: 8,
      type: "expert",
      title: "Review Maven",
      description: "Left 10+ thoughtful reviews",
      earned: false,
      progress: 30
    },
    {
      id: 9,
      type: "master",
      title: "Top Contributor",
      description: "Ranked in the top 10 on the leaderboard",
      earned: false,
      progress: 15
    },
    {
      id: 10,
      type: "legend",
      title: "Community Pillar",
      description: "Active member for 1 year",
      earned: false,
      progress: 5
    },
    {
      id: 11,
      type: "beginner",
      title: "Message Maven",
      description: "Sent 50 messages",
      earned: true,
      date: "2023-11-12"
    },
    {
      id: 12,
      type: "intermediate",
      title: "Session Star",
      description: "Hosted 5 successful sessions",
      earned: false,
      progress: 80
    }
  ];

  const [filter, setFilter] = React.useState("all"); // all, earned, locked
  const [sortBy, setSortBy] = React.useState("default"); // default, progress
  const [sortDirection, setSortDirection] = React.useState("asc"); // asc, desc

  const toggleSortDirection = () => {
    setSortDirection(sortDirection === "asc" ? "desc" : "asc");
  };

  const filteredAchievements = achievements.filter(achievement => {
    if (filter === "earned" && !achievement.earned) return false;
    if (filter === "locked" && achievement.earned) return false;
    return true;
  });

  const sortedAchievements = [...filteredAchievements].sort((a, b) => {
    if (sortBy === "progress") {
      const aProgress = a.earned ? 100 : (a.progress || 0);
      const bProgress = b.earned ? 100 : (b.progress || 0);
      return sortDirection === "asc" ? aProgress - bProgress : bProgress - aProgress;
    }
    // Default sort - by earned status then by id
    if (a.earned && !b.earned) return sortDirection === "asc" ? -1 : 1;
    if (!a.earned && b.earned) return sortDirection === "asc" ? 1 : -1;
    return sortDirection === "asc" ? a.id - b.id : b.id - a.id;
  });

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-8">
        <div className="flex items-center gap-3">
          <Award className="h-8 w-8 text-mint" />
          <h1 className="text-4xl font-bold text-white">Achievements</h1>
        </div>
        <Button 
          onClick={() => window.location.href = "/dashboard"} 
          variant="outline"
          className="border-mint/20 text-mint hover:bg-mint/10"
        >
          Back to Dashboard
        </Button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        <div className="lg:col-span-1">
          <Card className="bg-forest-light border border-mint/10 p-6 sticky top-8">
            <div className="flex items-center gap-2 mb-4">
              <Filter className="h-5 w-5 text-mint" />
              <h3 className="text-xl font-bold text-white">Filters</h3>
            </div>
            
            <div className="mb-6">
              <h4 className="font-medium text-white mb-2">Achievement Status</h4>
              <div className="space-y-2">
                {[
                  { value: "all", label: "All Achievements" },
                  { value: "earned", label: "Earned" },
                  { value: "locked", label: "In Progress" }
                ].map(option => (
                  <div key={option.value} className="flex items-center">
                    <input 
                      type="radio" 
                      id={`filter-${option.value}`} 
                      name="achievement-filter"
                      checked={filter === option.value}
                      onChange={() => setFilter(option.value)}
                      className="mr-2 accent-mint"
                    />
                    <label htmlFor={`filter-${option.value}`} className="text-white/80">
                      {option.label}
                    </label>
                  </div>
                ))}
              </div>
            </div>
            
            <div>
              <h4 className="font-medium text-white mb-2">Sort By</h4>
              <div className="space-y-2">
                {[
                  { value: "default", label: "Default" },
                  { value: "progress", label: "Progress" }
                ].map(option => (
                  <div key={option.value} className="flex items-center">
                    <input 
                      type="radio" 
                      id={`sort-${option.value}`} 
                      name="achievement-sort"
                      checked={sortBy === option.value}
                      onChange={() => setSortBy(option.value)}
                      className="mr-2 accent-mint"
                    />
                    <label htmlFor={`sort-${option.value}`} className="text-white/80 flex items-center">
                      {option.label}
                      {sortBy === option.value && (
                        <Button
                          variant="ghost"
                          size="icon"
                          className="h-6 w-6 ml-1 p-0"
                          onClick={toggleSortDirection}
                        >
                          {sortDirection === "asc" ? (
                            <ArrowUp className="h-4 w-4 text-mint" />
                          ) : (
                            <ArrowDown className="h-4 w-4 text-mint" />
                          )}
                        </Button>
                      )}
                    </label>
                  </div>
                ))}
              </div>
            </div>
            
            <Button 
              onClick={() => {
                setFilter("all");
                setSortBy("default");
                setSortDirection("asc");
              }}
              className="w-full mt-6 bg-mint/10 text-mint hover:bg-mint/20"
            >
              Reset Filters
            </Button>
          </Card>
        </div>
        
        <div className="lg:col-span-3">
          <Card className="bg-forest-light border border-mint/10 p-6">
            <h3 className="text-xl font-bold mb-6 text-white">
              {filter === "earned" ? "Earned Badges" : 
               filter === "locked" ? "Badges In Progress" : 
               "All Achievements"}
              <span className="text-white/60 text-base ml-2">({sortedAchievements.length})</span>
            </h3>
            
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
              {sortedAchievements.map(achievement => (
                <div key={achievement.id} className="flex flex-col items-center">
                  <AchievementBadge 
                    type={achievement.type}
                    title={achievement.title}
                    description={achievement.description}
                    earned={achievement.earned}
                    progress={!achievement.earned ? achievement.progress : undefined}
                  />
                  {achievement.earned && achievement.date && (
                    <p className="text-white/60 text-xs mt-2">
                      Earned on {new Date(achievement.date).toLocaleDateString()}
                    </p>
                  )}
                </div>
              ))}
            </div>
            
            {sortedAchievements.length === 0 && (
              <div className="flex flex-col items-center justify-center py-8 text-center">
                <div className="bg-forest-light p-4 rounded-full mb-4">
                  <Award className="h-8 w-8 text-mint/40" />
                </div>
                <h4 className="text-lg font-medium text-white mb-2">No achievements found</h4>
                <p className="text-white/60 mb-4">Try changing your filters to see more achievements</p>
                <Button 
                  onClick={() => setFilter("all")}
                  variant="outline"
                  className="border-mint/20 text-mint hover:bg-mint/10"
                >
                  Show All Achievements
                </Button>
              </div>
            )}
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Achievements;
