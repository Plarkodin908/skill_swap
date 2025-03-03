
import React from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check, MessageSquare, BookOpen, Award, Star, Heart, Calendar, Clock } from "lucide-react";

const Activity = () => {
  // In a real app, this would fetch from an API
  const activities = [
    {
      id: 1,
      type: "tutorial",
      title: "Completed 'React Basics' tutorial",
      timestamp: "2 hours ago",
      icon: <BookOpen className="h-5 w-5 text-mint" />,
    },
    {
      id: 2,
      type: "skill",
      title: "Skill 'JavaScript' verified",
      timestamp: "Yesterday",
      icon: <Check className="h-5 w-5 text-mint" />,
    },
    {
      id: 3,
      type: "message",
      title: "Received a message from Emma",
      timestamp: "2 days ago", 
      icon: <MessageSquare className="h-5 w-5 text-mint" />,
    },
    {
      id: 4,
      type: "achievement",
      title: "Earned 'Profile Pro' badge",
      timestamp: "3 days ago",
      icon: <Award className="h-5 w-5 text-mint" />,
    },
    {
      id: 5, 
      type: "rating",
      title: "Received a 5-star rating from James",
      timestamp: "4 days ago",
      icon: <Star className="h-5 w-5 text-mint" />
    },
    {
      id: 6,
      type: "like",
      title: "John liked your tutorial on CSS Grid",
      timestamp: "5 days ago",
      icon: <Heart className="h-5 w-5 text-mint" />
    },
    {
      id: 7,
      type: "appointment",
      title: "Scheduled session with Michael",
      timestamp: "1 week ago",
      icon: <Calendar className="h-5 w-5 text-mint" />
    }
  ];

  const activityTypes = [
    { value: "all", label: "All Activities" },
    { value: "tutorial", label: "Tutorials" },
    { value: "skill", label: "Skills" },
    { value: "message", label: "Messages" },
    { value: "achievement", label: "Achievements" },
    { value: "appointment", label: "Appointments" }
  ];

  const [filter, setFilter] = React.useState("all");
  const [timeRange, setTimeRange] = React.useState("all");

  const filteredActivities = activities.filter(activity => {
    if (filter !== "all" && activity.type !== filter) {
      return false;
    }
    return true;
  });

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-4xl font-bold text-white">Activity History</h1>
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
            <h3 className="text-xl font-bold mb-4 text-white">Filters</h3>
            
            <div className="mb-6">
              <h4 className="font-medium text-white mb-2">Activity Type</h4>
              <div className="space-y-2">
                {activityTypes.map(type => (
                  <div key={type.value} className="flex items-center">
                    <input 
                      type="radio" 
                      id={`type-${type.value}`} 
                      name="activity-type"
                      checked={filter === type.value}
                      onChange={() => setFilter(type.value)}
                      className="mr-2 accent-mint"
                    />
                    <label htmlFor={`type-${type.value}`} className="text-white/80">
                      {type.label}
                    </label>
                  </div>
                ))}
              </div>
            </div>
            
            <div>
              <h4 className="font-medium text-white mb-2">Time Range</h4>
              <div className="space-y-2">
                {[
                  { value: "all", label: "All Time" },
                  { value: "today", label: "Today" },
                  { value: "week", label: "This Week" },
                  { value: "month", label: "This Month" }
                ].map(range => (
                  <div key={range.value} className="flex items-center">
                    <input 
                      type="radio" 
                      id={`range-${range.value}`} 
                      name="time-range"
                      checked={timeRange === range.value}
                      onChange={() => setTimeRange(range.value)}
                      className="mr-2 accent-mint"
                    />
                    <label htmlFor={`range-${range.value}`} className="text-white/80">
                      {range.label}
                    </label>
                  </div>
                ))}
              </div>
            </div>
            
            <Button 
              onClick={() => {
                setFilter("all");
                setTimeRange("all");
              }}
              className="w-full mt-6 bg-mint/10 text-mint hover:bg-mint/20"
            >
              Reset Filters
            </Button>
          </Card>
        </div>
        
        <div className="lg:col-span-3">
          <Card className="bg-forest-light border border-mint/10 p-6">
            <div className="flex items-center gap-2 mb-6">
              <Clock className="h-5 w-5 text-mint" />
              <h3 className="text-xl font-bold text-white">Activity Timeline</h3>
            </div>
            
            {filteredActivities.length > 0 ? (
              <div className="relative">
                <div className="absolute left-2 top-0 bottom-0 w-0.5 bg-mint/30"></div>
                <div className="space-y-6 pl-10 relative">
                  {filteredActivities.map(activity => (
                    <div key={activity.id} className="relative">
                      <div className="absolute -left-10 top-1.5 w-4 h-4 rounded-full bg-mint flex items-center justify-center">
                        <div className="w-2 h-2 rounded-full bg-forest"></div>
                      </div>
                      <Card className="bg-forest border border-mint/10 p-4 hover:border-mint/30 transition-all hover:translate-x-1">
                        <div className="flex items-start gap-3">
                          <div className="bg-forest-light p-2 rounded-full flex-shrink-0">
                            {activity.icon}
                          </div>
                          <div>
                            <p className="text-white font-medium">{activity.title}</p>
                            <p className="text-white/60 text-sm">{activity.timestamp}</p>
                          </div>
                        </div>
                      </Card>
                    </div>
                  ))}
                </div>
              </div>
            ) : (
              <div className="flex flex-col items-center justify-center py-8 text-center">
                <div className="bg-forest-light p-4 rounded-full mb-4">
                  <Clock className="h-8 w-8 text-mint/40" />
                </div>
                <h4 className="text-lg font-medium text-white mb-2">No activities found</h4>
                <p className="text-white/60 mb-4">Try changing your filters to see more activities</p>
                <Button 
                  onClick={() => {
                    setFilter("all");
                    setTimeRange("all");
                  }}
                  variant="outline"
                  className="border-mint/20 text-mint hover:bg-mint/10"
                >
                  Reset Filters
                </Button>
              </div>
            )}
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Activity;
