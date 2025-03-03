
import { ReactNode } from "react";
import { Button } from "@/components/ui/button";
import { PlusCircle } from "lucide-react";

interface EmptyStateProps {
  icon: ReactNode;
  title: string;
  description: string;
  actionLabel?: string;
  onAction?: () => void;
  showActionButton?: boolean;
}

const EmptyState = ({ 
  icon, 
  title, 
  description, 
  actionLabel = "Add", 
  onAction,
  showActionButton = true
}: EmptyStateProps) => {
  return (
    <div className="col-span-full flex flex-col items-center justify-center py-10 text-center">
      <div className="bg-forest-light p-8 rounded-lg border border-mint/20 max-w-lg w-full">
        {icon}
        <h2 className="text-2xl font-bold text-white mb-2">{title}</h2>
        <p className="text-white/70 mb-6">{description}</p>
        {showActionButton && onAction && (
          <div className="flex gap-4 justify-center">
            <Button 
              className="bg-mint hover:bg-mint/90 text-forest flex items-center gap-2 hover-scale" 
              onClick={onAction}
            >
              <PlusCircle className="h-4 w-4" />
              {actionLabel}
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default EmptyState;
