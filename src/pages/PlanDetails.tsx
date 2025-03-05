
import { useParams, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, ArrowLeft, ArrowRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useState } from "react";
import { PlanType } from "@/components/pricing/types";

const PlanDetails = () => {
  const { planId } = useParams();
  const navigate = useNavigate();
  const [billingPeriod, setBillingPeriod] = useState<"monthly" | "annually">("monthly");
  
  // Plan data - in a real app, this would come from an API or context
  const plans: Record<string, {
    title: PlanType;
    description: string;
    price: { monthly: number; annually: number };
    features: string[];
    bestFor: string;
    color: string;
  }> = {
    free: {
      title: "Free",
      description: "Perfect for beginners and casual learners",
      price: { monthly: 0, annually: 0 },
      features: [
        "Access to basic courses",
        "Community forum access",
        "Limited messaging",
        "Basic progress tracking",
        "3 social links"
      ],
      bestFor: "Casual learners and beginners",
      color: "blue"
    },
    pro: {
      title: "Pro Learner",
      description: "For dedicated learners who want to maximize skills",
      price: { monthly: 12.99, annually: 119.99 },
      features: [
        "All Free features",
        "Unlimited access to premium courses",
        "Priority messaging",
        "Advanced progress tracking",
        "Certificate of completion",
        "Ad-free experience",
        "Unlimited social links",
        "Early access to new features"
      ],
      bestFor: "Dedicated learners looking to build multiple skills",
      color: "mint"
    },
    educator: {
      title: "Educator",
      description: "For teachers and experts who want to share knowledge",
      price: { monthly: 24.99, annually: 239.99 },
      features: [
        "All Pro Learner features",
        "Create and publish courses",
        "Analytics dashboard",
        "Monetize your content",
        "Custom branding options",
        "Dedicated support",
        "Group sessions",
        "Verified educator badge"
      ],
      bestFor: "Teachers, experts, and content creators",
      color: "purple"
    }
  };
  
  const plan = plans[planId as string] || plans.free;
  const discount = Math.round(((plan.price.monthly * 12) - plan.price.annually) / (plan.price.monthly * 12) * 100);
  
  const handleProceedToPayment = () => {
    const price = billingPeriod === "monthly" 
      ? `$${plan.price.monthly}` 
      : `$${plan.price.annually}`;
      
    navigate(`/payment?plan=${plan.title}&price=${price}&period=${billingPeriod}`);
  };
  
  return (
    <main className="min-h-screen">
      <Navbar />
      
      <section className="pt-32 pb-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <button 
            onClick={() => navigate("/pricing")} 
            className="flex items-center text-mint hover:text-mint/80 transition-colors mb-8"
          >
            <ArrowLeft className="h-4 w-4 mr-1" />
            Back to Plans
          </button>
          
          <h1 className="text-4xl md:text-5xl font-bold mb-6">{plan.title} Plan</h1>
          <p className="text-xl text-white/80 mb-12">{plan.description}</p>
          
          <Card className="bg-forest-light border border-mint/10 mb-12">
            <CardHeader>
              <CardTitle className="text-2xl">Choose Billing Period</CardTitle>
              <CardDescription className="text-white/70">Save with annual billing</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col md:flex-row gap-4">
                <div 
                  className={`flex-1 p-6 rounded-lg cursor-pointer transition-all border ${
                    billingPeriod === "monthly" 
                      ? "bg-mint/10 border-mint" 
                      : "bg-forest border-mint/20"
                  }`}
                  onClick={() => setBillingPeriod("monthly")}
                >
                  <h3 className="text-xl font-bold mb-2">Monthly</h3>
                  <p className="text-white/70 mb-4">Pay month-to-month</p>
                  <p className="text-3xl font-bold">
                    ${plan.price.monthly}
                    <span className="text-base font-normal text-white/60">/month</span>
                  </p>
                </div>
                
                <div 
                  className={`flex-1 p-6 rounded-lg cursor-pointer transition-all border ${
                    billingPeriod === "annually" 
                      ? "bg-mint/10 border-mint" 
                      : "bg-forest border-mint/20"
                  }`}
                  onClick={() => setBillingPeriod("annually")}
                >
                  <div className="flex justify-between items-start">
                    <h3 className="text-xl font-bold mb-2">Annual</h3>
                    {discount > 0 && (
                      <span className="bg-mint text-forest text-xs font-bold px-2 py-1 rounded">
                        Save {discount}%
                      </span>
                    )}
                  </div>
                  <p className="text-white/70 mb-4">Pay yearly (best value)</p>
                  <p className="text-3xl font-bold">
                    ${plan.price.annually}
                    <span className="text-base font-normal text-white/60">/year</span>
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-6">Plan Features</h2>
            <div className="space-y-3">
              {plan.features.map((feature, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="bg-mint/10 p-1 rounded-full">
                    <Check className="h-5 w-5 text-mint" />
                  </div>
                  <span className="text-white/90">{feature}</span>
                </div>
              ))}
            </div>
          </div>
          
          <div className="bg-forest-light border border-mint/10 p-6 rounded-lg mb-12">
            <h3 className="text-xl font-bold mb-3">Best For</h3>
            <p className="text-white/80">{plan.bestFor}</p>
          </div>
          
          <Button 
            onClick={handleProceedToPayment}
            className="bg-mint hover:bg-mint/90 text-forest text-lg px-8 py-6 w-full md:w-auto hover-scale"
            disabled={plan.title === "Free"}
          >
            {plan.title === "Free" ? (
              "Free Plan - No Payment Required"
            ) : (
              <>
                Proceed to Payment <ArrowRight className="ml-2 h-5 w-5" />
              </>
            )}
          </Button>
        </div>
      </section>
      
      <Footer />
    </main>
  );
};

export default PlanDetails;
