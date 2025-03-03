
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Check, X } from "lucide-react";
import { PlanFeature } from "./types";

type PlanCardProps = {
  name: string;
  price: string;
  period: string;
  description: string;
  features: PlanFeature[];
  limitations: PlanFeature[];
  cta: string;
  highlighted: boolean;
  disabled: boolean;
  getAnnualDiscount?: (price: string) => string;
  billingPeriod: "monthly" | "annual";
  onSubscribe: (plan: string) => void;
  currentPlan: string;
};

const PlanCard = ({
  name,
  price,
  period,
  description,
  features,
  limitations,
  cta,
  highlighted,
  disabled,
  getAnnualDiscount,
  billingPeriod,
  onSubscribe,
  currentPlan
}: PlanCardProps) => {
  return (
    <Card 
      className={`
        relative overflow-hidden bg-forest-light border 
        ${name === currentPlan ? 'border-mint' : highlighted ? 'border-mint' : 'border-mint/10'} 
        flex flex-col animate-fade-in card-hover
        ${highlighted ? 'transform md:scale-105 z-10' : ''}
      `}
    >
      {highlighted && (
        <div className="absolute top-0 right-0 bg-mint text-forest px-4 py-1 text-sm font-medium">
          Most Popular
        </div>
      )}

      {name === currentPlan && (
        <div className="absolute top-0 left-0 right-0 bg-mint/20 text-white px-4 py-1 text-sm font-medium text-center">
          Current Plan
        </div>
      )}

      <div className="p-6 flex-grow">
        <h3 className="text-2xl font-bold mb-2">{name}</h3>
        <div className="mb-4">
          <span className="text-4xl font-bold text-mint">{price}</span>
          <span className="text-white/60 ml-2">{period}</span>
          {billingPeriod === "annual" && name !== "Free" && getAnnualDiscount && (
            <p className="text-mint/80 text-sm mt-1">
              Save ${getAnnualDiscount(price.split('$')[1] || "0")} per year
            </p>
          )}
        </div>
        <p className="text-white/70 mb-6">{description}</p>
        
        <div className="mb-6">
          <p className="font-medium mb-2">What's included:</p>
          <ul className="space-y-2">
            {features.map((feature, idx) => (
              <li key={idx} className="flex items-start gap-2">
                <Check className="h-5 w-5 text-mint flex-shrink-0 mt-0.5" />
                <div>
                  <span className="text-white/80">{feature.name}</span>
                  {feature.description && (
                    <div className="text-white/50 text-xs mt-0.5">{feature.description}</div>
                  )}
                </div>
              </li>
            ))}
          </ul>
        </div>
        
        {limitations.length > 0 && (
          <div className="mb-6">
            <p className="font-medium mb-2">Limitations:</p>
            <ul className="space-y-2">
              {limitations.map((limitation, idx) => (
                <li key={idx} className="flex items-center gap-2">
                  <X className="h-5 w-5 text-white/40 flex-shrink-0" />
                  <span className="text-white/60">{limitation.name}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
      
      <div className="p-6 border-t border-mint/10">
        <Button 
          className={`w-full ${
            name === currentPlan 
              ? 'bg-forest border border-mint/20 text-mint/50 cursor-not-allowed' 
              : highlighted 
                ? 'bg-mint hover:bg-mint/90 text-forest' 
                : 'bg-forest border border-mint/20 text-mint hover:bg-forest/80'
          }`}
          onClick={() => onSubscribe(name)}
          disabled={disabled}
        >
          {cta}
        </Button>
      </div>
    </Card>
  );
};

export default PlanCard;
