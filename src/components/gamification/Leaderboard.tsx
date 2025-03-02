
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Medal, Trophy, Award } from "lucide-react";

interface LeaderboardUser {
  id: number;
  name: string;
  avatar?: string;
  points: number;
  rank: number;
}

interface LeaderboardProps {
  users: LeaderboardUser[];
  className?: string;
}

const Leaderboard = ({ users, className }: LeaderboardProps) => {
  // Sort users by points in descending order
  const sortedUsers = [...users].sort((a, b) => b.points - a.points);
  
  const getRankIcon = (rank: number) => {
    switch (rank) {
      case 1:
        return <Trophy className="h-5 w-5 text-yellow-400" />;
      case 2:
        return <Medal className="h-5 w-5 text-gray-400" />;
      case 3:
        return <Award className="h-5 w-5 text-amber-600" />;
      default:
        return <span className="text-white/60 text-sm font-medium w-5 text-center">{rank}</span>;
    }
  };
  
  return (
    <div className={className}>
      <h3 className="text-xl font-bold mb-4 text-white">Leaderboard</h3>
      <div className="space-y-2">
        {sortedUsers.map((user) => (
          <div 
            key={user.id}
            className="bg-forest-light border border-mint/10 rounded-lg p-3 flex items-center gap-3"
          >
            <div className="flex-shrink-0">
              {getRankIcon(user.rank)}
            </div>
            <Avatar className="h-8 w-8 border border-mint/20">
              <AvatarImage src={user.avatar} alt={user.name} />
              <AvatarFallback className="bg-mint/10 text-mint">
                {user.name.charAt(0)}
              </AvatarFallback>
            </Avatar>
            <div className="flex-grow">
              <p className="text-white font-medium">{user.name}</p>
            </div>
            <div className="flex items-center gap-1.5 bg-mint/10 px-2 py-1 rounded-full">
              <span className="text-mint font-bold">{user.points}</span>
              <span className="text-mint/70 text-xs">pts</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Leaderboard;
