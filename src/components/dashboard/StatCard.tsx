
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { LucideIcon } from "lucide-react";

interface StatCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  buttonText: string;
  href: string;
}

const StatCard = ({ icon: Icon, title, description, buttonText, href }: StatCardProps) => {
  return (
    <Card className="bg-forest-light border border-mint/10 p-6">
      <div className="flex items-center gap-4 mb-4">
        <div className="bg-mint/10 p-3 rounded-full">
          <Icon className="h-6 w-6 text-mint" />
        </div>
        <h2 className="text-xl font-semibold text-white">{title}</h2>
      </div>
      <p className="text-white/70 mb-4">{description}</p>
      <Button 
        className="bg-mint hover:bg-mint/90 text-forest w-full" 
        onClick={() => window.location.href = href}
      >
        {buttonText}
      </Button>
    </Card>
  );
};

export default StatCard;
