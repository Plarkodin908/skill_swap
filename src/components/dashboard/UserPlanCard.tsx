
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface UserPlan {
  name: string;
  expires: string;
  features: string[];
}

interface UserPlanCardProps {
  plan: UserPlan;
}

const UserPlanCard = ({ plan }: UserPlanCardProps) => {
  const isPremium = plan.name.toLowerCase().includes('pro');
  
  return (
    <Card className="bg-forest-light border border-mint/10 p-6">
      <h3 className="text-xl font-bold mb-4 text-white">
        Current Plan: <span className="text-mint">{plan.name}</span>
      </h3>
      <div className="space-y-2 mb-4">
        {plan.features.map((feature, index) => (
          <div key={index} className="flex items-center gap-2">
            <div className={`w-2 h-2 rounded-full ${isPremium ? 'bg-mint' : 'bg-white/40'}`}></div>
            <p className={`${isPremium ? 'text-white' : 'text-white/60 line-through'}`}>{feature}</p>
          </div>
        ))}
      </div>
      <div className="text-sm text-white/60 mb-4">
        Expires: {plan.expires}
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
