
import { Progress } from "@/components/ui/progress";
import { useEffect, useState } from "react";
import { CheckCircle } from "lucide-react";

interface ProgressItem {
  id: number;
  label: string;
  currentValue: number;
  targetValue: number;
  color?: string;
}

interface ProgressTrackerProps {
  items: ProgressItem[];
  className?: string;
  animated?: boolean;
}

const ProgressTracker = ({ items, className, animated = true }: ProgressTrackerProps) => {
  const [animatedItems, setAnimatedItems] = useState<ProgressItem[]>(
    items.map(item => ({ ...item, currentValue: 0 }))
  );
  
  useEffect(() => {
    if (animated) {
      const timer = setTimeout(() => {
        setAnimatedItems(items);
      }, 300);
      return () => clearTimeout(timer);
    } else {
      setAnimatedItems(items);
    }
  }, [items, animated]);
  
  const getPercentage = (current: number, target: number) => {
    return Math.min(Math.round((current / target) * 100), 100);
  };
  
  const getProgressColor = (item: ProgressItem) => {
    if (item.color) return item.color;
    
    const percentage = getPercentage(item.currentValue, item.targetValue);
    if (percentage < 30) return "bg-red-500";
    if (percentage < 70) return "bg-amber-500"; 
    return "bg-mint";
  };
  
  return (
    <div className={className}>
      <h3 className="text-xl font-bold mb-4 text-white">Your Progress</h3>
      <div className="space-y-4">
        {animatedItems.map((item) => {
          const percentage = getPercentage(item.currentValue, item.targetValue);
          
          return (
            <div key={item.id} className="space-y-2">
              <div className="flex justify-between items-center">
                <span className="text-white/80 text-sm">{item.label}</span>
                <span className="text-white font-medium text-sm">
                  {item.currentValue}/{item.targetValue}
                </span>
              </div>
              <div className="relative pt-1">
                <Progress 
                  value={percentage} 
                  className="h-2.5 bg-forest-light rounded-full"
                  indicatorClassName={`${getProgressColor(item)} transition-all duration-1000 ease-out`}
                />
                {percentage === 100 && (
                  <span className="absolute right-0 top-0 text-xs text-mint flex items-center">
                    <CheckCircle className="h-3 w-3 mr-1" /> Complete!
                  </span>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ProgressTracker;
