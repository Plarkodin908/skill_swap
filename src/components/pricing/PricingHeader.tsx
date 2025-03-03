
import { useState } from "react";

type BillingPeriodProps = {
  billingPeriod: "monthly" | "annual";
  setBillingPeriod: (period: "monthly" | "annual") => void;
  currentPlan: string;
};

const PricingHeader = ({ billingPeriod, setBillingPeriod, currentPlan }: BillingPeriodProps) => {
  return (
    <section className="pt-32 pb-16 px-4">
      <div className="container mx-auto text-center max-w-4xl">
        <h1 className="text-5xl font-bold mb-6 animate-fade-in">Simple, <span className="text-mint">Transparent</span> Pricing</h1>
        <p className="text-xl text-white/80 mb-8 animate-fade-in" style={{ animationDelay: "200ms" }}>
          Choose the plan that fits your learning and teaching needs, with no hidden fees.
        </p>
        <div className="inline-flex items-center bg-forest-light rounded-full p-1 mb-8 animate-fade-in" style={{ animationDelay: "300ms" }}>
          <button 
            className={`px-6 py-2 rounded-full ${billingPeriod === "monthly" ? "bg-mint text-forest font-medium" : "text-white/80 hover:text-white transition-colors"}`}
            onClick={() => setBillingPeriod("monthly")}
          >
            Monthly
          </button>
          <button 
            className={`px-6 py-2 rounded-full ${billingPeriod === "annual" ? "bg-mint text-forest font-medium" : "text-white/80 hover:text-white transition-colors"}`}
            onClick={() => setBillingPeriod("annual")}
          >
            Annual (Save 20%)
          </button>
        </div>

        {/* Current plan indicator */}
        {currentPlan !== "Free" && (
          <div className="bg-mint/10 border border-mint/20 rounded-md p-4 text-center max-w-xl mx-auto mb-8">
            <p className="text-white">
              You are currently on the <span className="font-bold text-mint">{currentPlan}</span> plan. 
              {billingPeriod === "monthly" ? 
                " Switch to annual billing to save 20%!" : 
                " You're saving money with annual billing!"}
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default PricingHeader;
