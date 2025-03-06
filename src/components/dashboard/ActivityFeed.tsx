
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface Activity {
  id: number;
  type: string;
  title: string;
  time: string;
}

interface ActivityFeedProps {
  activities: Activity[];
}

const ActivityFeed = ({ activities }: ActivityFeedProps) => {
  return (
    <Card className="bg-forest-light border border-mint/10 p-6">
      <div className="space-y-4">
        {activities.map((activity) => (
          <div key={activity.id} className="border-l-2 border-mint pl-4 pb-4">
            <p className="text-white font-medium">{activity.title}</p>
            <p className="text-white/60 text-sm">{activity.time}</p>
          </div>
        ))}
      </div>
      <Button 
        variant="outline" 
        className="mt-4 border-mint/20 text-mint hover:bg-mint/10 w-full" 
        onClick={() => window.location.href = "/activity"}
      >
        View All Activity
      </Button>
    </Card>
  );
};

export default ActivityFeed;
