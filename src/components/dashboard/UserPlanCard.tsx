
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface UserPlanCardProps {
  plan: string;
  isPremium: boolean;
}

const UserPlanCard = ({ plan, isPremium }: UserPlanCardProps) => {
  return (
    <Card className="bg-forest-light border border-mint/10 p-6">
      <h3 className="text-xl font-bold mb-4 text-white">
        Current Plan: <span className="text-mint">{plan}</span>
      </h3>
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
  );
};

export default UserPlanCard;
