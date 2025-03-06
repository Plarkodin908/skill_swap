
import React from "react";
import { cn } from "@/lib/utils";

interface FloatingCardProps {
  children: React.ReactNode;
  className?: string;
  innerClassName?: string;
}

const FloatingCard = ({ children, className, innerClassName }: FloatingCardProps) => {
  return (
    <div className={cn("floating-card-outer p-[2px] rounded-xl", className)}>
      <div className={cn("floating-card-inner p-6 rounded-xl", innerClassName)}>
        {children}
      </div>
    </div>
  );
};

export default FloatingCard;
