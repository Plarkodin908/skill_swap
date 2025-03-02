
import { Trophy, Award, Medal, Star, Zap } from "lucide-react";
import { cn } from "@/lib/utils";

export type BadgeType = "beginner" | "intermediate" | "expert" | "master" | "legend";

interface AchievementBadgeProps {
  type: BadgeType;
  title: string;
  description?: string;
  earned?: boolean;
  className?: string;
}

const badgeIcons = {
  beginner: Star,
  intermediate: Medal,
  expert: Award,
  master: Trophy,
  legend: Zap,
};

const badgeColors = {
  beginner: "from-blue-500 to-cyan-400",
  intermediate: "from-emerald-500 to-mint",
  expert: "from-amber-500 to-yellow-400",
  master: "from-purple-500 to-pink-400",
  legend: "from-mint to-divine",
};

const AchievementBadge = ({
  type,
  title,
  description,
  earned = false,
  className,
}: AchievementBadgeProps) => {
  const Icon = badgeIcons[type];

  return (
    <div
      className={cn(
        "relative group flex flex-col items-center p-4",
        className
      )}
    >
      <div
        className={cn(
          "relative w-16 h-16 rounded-full flex items-center justify-center mb-3 transition-all duration-300",
          earned
            ? `bg-gradient-to-br ${badgeColors[type]} shadow-lg`
            : "bg-forest-light border border-mint/10",
          earned ? "scale-100" : "grayscale opacity-50 scale-90"
        )}
      >
        <Icon
          className={cn(
            "w-8 h-8",
            earned ? "text-white" : "text-mint/50"
          )}
        />
        {earned && (
          <div className="absolute inset-0 rounded-full bg-gradient-to-br opacity-30 animate-pulse"></div>
        )}
      </div>
      <h4 className={cn("text-sm font-medium text-center", earned ? "text-white" : "text-white/60")}>
        {title}
      </h4>
      {description && (
        <div className="absolute opacity-0 group-hover:opacity-100 bottom-full left-1/2 -translate-x-1/2 mb-2 p-2 bg-forest-light border border-mint/10 rounded text-xs text-white/80 w-32 text-center transition-opacity duration-200">
          {description}
          <div className="absolute top-full left-1/2 -translate-x-1/2 border-8 border-transparent border-t-forest-light"></div>
        </div>
      )}
    </div>
  );
};

export default AchievementBadge;
