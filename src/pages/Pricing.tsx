
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check, X, Info } from "lucide-react";
import { toast } from "sonner";

// Define plan types for better type safety
type PlanType = "Free" | "Pro Learner" | "Educator";

type PlanFeature = {
  name: string;
  free: boolean;
  pro: boolean;
  educator: boolean;
  description?: string;
}

const Pricing = () => {
  const navigate = useNavigate();
  const [billingPeriod, setBillingPeriod] = useState<"monthly" | "annual">("monthly");
  const [currentPlan, setCurrentPlan] = useState<PlanType>("Free"); // In real app, this would come from user context
  
  // Define all features with their availability for each plan
  const allFeatures: PlanFeature[] = [
    { name: "Access to free courses", free: true, pro: true, educator: true },
    { name: "Basic community features", free: true, pro: true, educator: true },
    { name: "Limited messaging", free: true, pro: true, educator: true },
    { name: "View public tutorials", free: true, pro: true, educator: true },
    { name: "Unlimited course access", free: false, pro: true, educator: true, description: "Access all courses with no restrictions" },
    { name: "Priority messaging", free: false, pro: true, educator: true, description: "Get faster responses from our community" },
    { name: "Course certificates", free: false, pro: true, educator: true, description: "Receive certificates for completed courses" },
    { name: "Learning path creation", free: false, pro: true, educator: true, description: "Create custom learning paths for your goals" },
    { name: "24/7 support", free: false, pro: true, educator: true, description: "Get help whenever you need it" },
    { name: "Progress tracking", free: false, pro: true, educator: true, description: "Track your learning progress in detail" },
    { name: "Course creation", free: false, pro: false, educator: true, description: "Create and publish your own courses" },
    { name: "Course analytics", free: false, pro: false, educator: true, description: "Get insights about your course performance" },
    { name: "Promotional tools", free: false, pro: false, educator: true, description: "Tools to promote your courses" },
    { name: "Revenue sharing", free: false, pro: false, educator: true, description: "Earn from your courses" },
    { name: "Custom branding", free: false, pro: false, educator: true, description: "Add your own branding to your content" },
    { name: "Premium support", free: false, pro: false, educator: true, description: "Get dedicated support for your educator needs" },
    { name: "Social channels", free: true, pro: true, educator: true, description: "Limited to 3 for Free plan, unlimited for paid plans" },
  ];

  const plans = [
    {
      name: "Free" as PlanType,
      price: billingPeriod === "monthly" ? "$0" : "$0",
      period: "forever",
      description: "Perfect for casual learners",
      features: allFeatures.filter(feature => feature.free),
      limitations: allFeatures.filter(feature => !feature.free),
      cta: currentPlan === "Free" ? "Current Plan" : "Get Started",
      highlighted: false,
      disabled: currentPlan === "Free"
    },
    {
      name: "Pro Learner" as PlanType,
      price: billingPeriod === "monthly" ? "$19" : "$152",
      period: billingPeriod === "monthly" ? "per month" : "per year",
      description: "Ideal for dedicated students",
      features: allFeatures.filter(feature => feature.pro),
      limitations: allFeatures.filter(feature => !feature.pro),
      cta: currentPlan === "Pro Learner" ? "Current Plan" : "Subscribe Now",
      highlighted: true,
      disabled: currentPlan === "Pro Learner"
    },
    {
      name: "Educator" as PlanType,
      price: billingPeriod === "monthly" ? "$39" : "$312",
      period: billingPeriod === "monthly" ? "per month" : "per year",
      description: "For teachers and content creators",
      features: allFeatures.filter(feature => feature.educator),
      limitations: [],
      cta: currentPlan === "Educator" ? "Current Plan" : "Become an Educator",
      highlighted: false,
      disabled: currentPlan === "Educator"
    }
  ];

  const handleSubscribe = (plan: PlanType) => {
    if (plan === currentPlan) {
      toast.info(`You are already subscribed to the ${plan} plan.`);
      return;
    }
    
    if (plan === "Free") {
      toast.success(`You've switched to the ${plan} plan!`);
      setCurrentPlan(plan);
      // In a real app, this would call an API to downgrade the plan
    } else {
      // In a real app, this would redirect to a payment page
      toast.success(`You selected the ${plan} plan!`, {
        description: "Redirecting to payment processing...",
      });
      
      // Simulate payment processing and then update the plan
      setTimeout(() => {
        setCurrentPlan(plan);
        toast.success(`You've successfully subscribed to ${plan}!`);
        navigate("/dashboard");
      }, 2000);
    }
  };

  const getAnnualDiscount = (monthlyPrice: string) => {
    const price = parseInt(monthlyPrice.replace("$", ""));
    return (price * 12 * 0.2).toFixed(0); // 20% discount
  };

  return (
    <main className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
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
      
      {/* Pricing Cards */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {plans.map((plan, index) => (
              <Card 
                key={index} 
                className={`
                  relative overflow-hidden bg-forest-light border 
                  ${plan.name === currentPlan ? 'border-mint' : plan.highlighted ? 'border-mint' : 'border-mint/10'} 
                  flex flex-col animate-fade-in card-hover
                  ${plan.highlighted ? 'transform md:scale-105 z-10' : ''}
                `}
                style={{ animationDelay: `${index * 200}ms` }}
              >
                {plan.highlighted && (
                  <div className="absolute top-0 right-0 bg-mint text-forest px-4 py-1 text-sm font-medium">
                    Most Popular
                  </div>
                )}

                {plan.name === currentPlan && (
                  <div className="absolute top-0 left-0 right-0 bg-mint/20 text-white px-4 py-1 text-sm font-medium text-center">
                    Current Plan
                  </div>
                )}

                <div className="p-6 flex-grow">
                  <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                  <div className="mb-4">
                    <span className="text-4xl font-bold text-mint">{plan.price}</span>
                    <span className="text-white/60 ml-2">{plan.period}</span>
                    {billingPeriod === "annual" && plan.name !== "Free" && (
                      <p className="text-mint/80 text-sm mt-1">
                        Save ${getAnnualDiscount(plans.find(p => p.name === plan.name)?.price.split('$')[1] || "0")} per year
                      </p>
                    )}
                  </div>
                  <p className="text-white/70 mb-6">{plan.description}</p>
                  
                  <div className="mb-6">
                    <p className="font-medium mb-2">What's included:</p>
                    <ul className="space-y-2">
                      {plan.features.map((feature, idx) => (
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
                  
                  {plan.limitations.length > 0 && (
                    <div className="mb-6">
                      <p className="font-medium mb-2">Limitations:</p>
                      <ul className="space-y-2">
                        {plan.limitations.map((limitation, idx) => (
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
                      plan.name === currentPlan 
                        ? 'bg-forest border border-mint/20 text-mint/50 cursor-not-allowed' 
                        : plan.highlighted 
                          ? 'bg-mint hover:bg-mint/90 text-forest' 
                          : 'bg-forest border border-mint/20 text-mint hover:bg-forest/80'
                    }`}
                    onClick={() => handleSubscribe(plan.name)}
                    disabled={plan.disabled}
                  >
                    {plan.cta}
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>
      
      {/* Compare Plans Section */}
      <section className="py-16 px-4 bg-forest/30">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Compare Plan Features</h2>
            <p className="text-white/70">
              See all features side by side to find the perfect plan for your needs.
            </p>
          </div>
          
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr>
                  <th className="text-left p-4 border-b border-mint/10">Feature</th>
                  <th className="text-center p-4 border-b border-mint/10 min-w-[120px]">Free</th>
                  <th className="text-center p-4 border-b border-mint/10 bg-mint/5 min-w-[120px]">Pro Learner</th>
                  <th className="text-center p-4 border-b border-mint/10 min-w-[120px]">Educator</th>
                </tr>
              </thead>
              <tbody>
                {allFeatures.map((feature, idx) => (
                  <tr key={idx} className="hover:bg-forest-light/50">
                    <td className="p-4 border-b border-mint/10 flex items-center gap-2">
                      {feature.name}
                      {feature.description && (
                        <span className="text-white/60 text-xs tooltip-container group relative">
                          <Info className="h-4 w-4 text-white/40 cursor-help" />
                          <span className="tooltip-text absolute bottom-full left-1/2 -translate-x-1/2 mb-2 p-2 bg-forest-light border border-mint/10 rounded text-white w-48 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 text-xs">
                            {feature.description}
                          </span>
                        </span>
                      )}
                    </td>
                    <td className="text-center p-4 border-b border-mint/10">
                      {feature.free ? <Check className="h-5 w-5 text-mint mx-auto" /> : <X className="h-5 w-5 text-white/40 mx-auto" />}
                    </td>
                    <td className="text-center p-4 border-b border-mint/10 bg-mint/5">
                      {feature.pro ? <Check className="h-5 w-5 text-mint mx-auto" /> : <X className="h-5 w-5 text-white/40 mx-auto" />}
                    </td>
                    <td className="text-center p-4 border-b border-mint/10">
                      {feature.educator ? <Check className="h-5 w-5 text-mint mx-auto" /> : <X className="h-5 w-5 text-white/40 mx-auto" />}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
      
      {/* FAQ Section */}
      <section className="py-16 px-4 bg-forest/30">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-white/70">
              Find answers to common questions about our pricing and plans.
            </p>
          </div>
          
          <div className="space-y-6">
            {[
              {
                question: "Can I switch between plans?",
                answer: "Yes, you can upgrade or downgrade your plan at any time. Changes will be applied at the start of your next billing cycle."
              },
              {
                question: "Is there a refund policy?",
                answer: "We offer a 14-day money-back guarantee if you're not satisfied with your subscription."
              },
              {
                question: "Are there any discounts for students or educators?",
                answer: "Yes, we offer special educational discounts. Contact our support team with your academic credentials to learn more."
              },
              {
                question: "Can I try the Pro or Educator features before subscribing?",
                answer: "Yes, we offer a 7-day free trial of both our Pro Learner and Educator plans. No credit card required to start."
              },
              {
                question: "How does revenue sharing work for educators?",
                answer: "Educators receive 70% of the revenue generated from their courses after platform fees."
              }
            ].map((faq, index) => (
              <Card key={index} className="bg-forest-light border border-mint/10 p-6 card-hover">
                <h3 className="text-lg font-bold mb-2">{faq.question}</h3>
                <p className="text-white/70">{faq.answer}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold mb-4">Still have questions?</h2>
          <p className="text-white/70 mb-8 max-w-2xl mx-auto">
            Our support team is ready to help you choose the right plan for your needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              className="bg-mint hover:bg-mint/90 text-forest px-8 py-6 text-lg hover-scale"
              onClick={() => navigate("/company")}
            >
              Contact Support
            </Button>
            <Button 
              variant="outline" 
              className="border-mint/20 text-mint hover:bg-mint/10 px-8 py-6 text-lg hover-scale"
              onClick={() => navigate("/marketplace")}
            >
              Browse Courses
            </Button>
          </div>
        </div>
      </section>
      
      <Footer />
    </main>
  );
};

export default Pricing;
