import React from "react";
import { Button } from "@/components/ui/button";
import { Calendar } from "lucide-react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { ScrollArea } from "@/components/ui/scroll-area";

// Define types for achievements and badges
enum BadgeType {
  Bronze = "bronze",
  Silver = "silver",
  Gold = "gold",
  Platinum = "platinum",
}

interface Achievement {
  id: number;
  title: string;
  description: string;
  progress: number;
  total: number;
  badge?: {
    name: string;
    level: BadgeType;
  };
  date?: string;
}

const Achievements = () => {
  // Mock data for achievements
  const achievementsData: Achievement[] = [
    {
      id: 1,
      title: "First Tutorial Created",
      description: "Create your very first tutorial and share your knowledge.",
      progress: 100,
      total: 100,
      badge: {
        name: "Tutorial Novice",
        level: BadgeType.Bronze,
      },
      date: "2024-07-15",
    },
    {
      id: 2,
      title: "Active Contributor",
      description: "Contribute to the community by creating 5 resources.",
      progress: 60,
      total: 100,
      badge: {
        name: "Resourceful",
        level: BadgeType.Silver,
      },
      date: "2024-07-22",
    },
    {
      id: 3,
      title: "Video Star",
      description: "Create 3 video tutorials to help others learn.",
      progress: 33,
      total: 100,
      badge: {
        name: "Video Vanguard",
        level: BadgeType.Bronze,
      },
      date: "2024-07-29",
    },
    {
      id: 4,
      title: "Master of Articles",
      description: "Write 10 articles and share your insights.",
      progress: 90,
      total: 100,
      badge: {
        name: "Article Ace",
        level: BadgeType.Gold,
      },
      date: "2024-08-05",
    },
    {
      id: 5,
      title: "Community Influencer",
      description: "Receive 50 upvotes on your tutorials and resources.",
      progress: 100,
      total: 100,
      badge: {
        name: "Influencer",
        level: BadgeType.Platinum,
      },
      date: "2024-08-12",
    },
    {
      id: 6,
      title: "Tutorial Titan",
      description: "Create 20 tutorials and become a knowledge leader.",
      progress: 40,
      total: 100,
      badge: {
        name: "Tutorial Titan",
        level: BadgeType.Gold,
      },
      date: "2024-08-19",
    },
    {
      id: 7,
      title: "Resource Guru",
      description: "Contribute 50 resources to help the community.",
      progress: 75,
      total: 100,
      badge: {
        name: "Resource Guru",
        level: BadgeType.Platinum,
      },
      date: "2024-08-26",
    },
    {
      id: 8,
      title: "Video Virtuoso",
      description: "Create 10 video tutorials and inspire learners.",
      progress: 100,
      total: 100,
      badge: {
        name: "Video Virtuoso",
        level: BadgeType.Silver,
      },
      date: "2024-09-02",
    },
    {
      id: 9,
      title: "Article Alchemist",
      description: "Write 20 articles and transform knowledge.",
      progress: 25,
      total: 100,
      badge: {
        name: "Article Alchemist",
        level: BadgeType.Bronze,
      },
      date: "2024-09-09",
    },
    {
      id: 10,
      title: "Community Champion",
      description: "Receive 100 upvotes and become a community favorite.",
      progress: 50,
      total: 100,
      badge: {
        name: "Community Champion",
        level: BadgeType.Gold,
      },
      date: "2024-09-16",
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-white mb-8">Achievements</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {achievementsData.map((achievement) => (
          <Card key={achievement.id} className="bg-forest-light border-mint/20 text-white">
            <CardHeader>
              <CardTitle className="text-lg font-semibold">{achievement.title}</CardTitle>
              <CardDescription className="text-white/70">{achievement.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="mb-4">
                <div className="flex items-center justify-between text-sm text-white/70 mb-1">
                  <span>Progress</span>
                  <span>{achievement.progress}%</span>
                </div>
                <Progress value={achievement.progress} max={100} className="bg-forest border-mint/20" />
              </div>
              {achievement.badge && (
                <div className="flex items-center justify-between">
                  <Badge className={`bg-forest border-mint/20 text-mint`}>
                    {achievement.badge.name}
                  </Badge>
                  <Badge className={`bg-forest border-mint/20 text-mint`}>
                    {achievement.badge.level}
                  </Badge>
                </div>
              )}
            </CardContent>
            <CardFooter className="flex items-center justify-between">
              <div className="text-sm text-white/70">
                <Calendar className="mr-2 h-4 w-4 inline-block" />
                {achievement.date}
              </div>
              <Button variant="outline" size="sm" className="border-mint/20 text-mint hover:bg-mint/10">
                View Details
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Achievements;
