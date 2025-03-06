
import React from "react";

export interface LoadingProps {
  size?: "small" | "medium" | "large";
  text?: string;
  className?: string;
}

const Loading = ({ size = "medium", text, className = "" }: LoadingProps) => {
  const getSizeClass = () => {
    switch (size) {
      case "small":
        return "w-8 h-16";
      case "large":
        return "w-16 h-32";
      default:
        return "w-12 h-24";
    }
  };

  return (
    <div className={`loading-wrapper ${className}`}>
      <div className="flex flex-col items-center">
        <div className={`lava-lamp ${getSizeClass()}`}>
          <div className="bubble"></div>
          <div className="bubble1"></div>
          <div className="bubble2"></div>
          <div className="bubble3"></div>
        </div>
        {text && <p className="mt-4 text-white/70 text-sm">{text}</p>}
      </div>
    </div>
  );
};

export default Loading;
