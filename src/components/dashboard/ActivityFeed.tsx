
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface ActivityItem {
  text: string;
  timestamp: string;
}

interface ActivityFeedProps {
  items: ActivityItem[];
}

const ActivityFeed = ({ items }: ActivityFeedProps) => {
  return (
    <Card className="bg-forest-light border border-mint/10 p-6">
      <h3 className="text-xl font-bold mb-4 text-white">Recent Activity</h3>
      <div className="space-y-4">
        {items.map((item, index) => (
          <div key={index} className="border-l-2 border-mint pl-4 pb-4">
            <p className="text-white font-medium">{item.text}</p>
            <p className="text-white/60 text-sm">{item.timestamp}</p>
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
