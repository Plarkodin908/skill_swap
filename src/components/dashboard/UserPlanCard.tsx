
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
    <Card className="bg-dark-purple border border-primary-purple/10 p-6">
      <h3 className="text-xl font-bold mb-4 text-white">
        Current Plan: <span className="text-primary-purple">{plan.name}</span>
      </h3>
      <div className="space-y-2 mb-4">
        {plan.features.map((feature, index) => (
          <div key={index} className="flex items-center gap-2">
            <div className={`w-2 h-2 rounded-full ${isPremium ? 'bg-primary-purple' : 'bg-white/40'}`}></div>
            <p className={`${isPremium ? 'text-white' : 'text-white/60 line-through'}`}>{feature}</p>
          </div>
        ))}
      </div>
      <div className="text-sm text-white/60 mb-4">
        Expires: {plan.expires}
      </div>
      <Button 
        className="w-full bg-primary-purple hover:bg-primary-purple/90 text-dark-purple"
        onClick={() => window.location.href = "/pricing"}
      >
        {isPremium ? "Manage Subscription" : "Upgrade Now"}
      </Button>
    </Card>
  );
};

export default UserPlanCard;
