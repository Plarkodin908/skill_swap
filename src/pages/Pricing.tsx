import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { toast } from "sonner";
import { PlanFeature, PlanType } from "@/components/pricing/types";
import PricingHeader from "@/components/pricing/PricingHeader";
import PlansGrid from "@/components/pricing/PlansGrid";
import FeatureComparison from "@/components/pricing/FeatureComparison";
import FaqSection from "@/components/pricing/FaqSection";
import ContactCta from "@/components/pricing/ContactCta";

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

  const faqs = [
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
      <PricingHeader 
        billingPeriod={billingPeriod}
        setBillingPeriod={setBillingPeriod}
        currentPlan={currentPlan}
      />
      
      {/* Pricing Cards */}
      <PlansGrid 
        plans={plans}
        getAnnualDiscount={getAnnualDiscount}
        billingPeriod={billingPeriod}
        currentPlan={currentPlan}
        onSubscribe={handleSubscribe}
      />
      
      {/* Compare Plans Section */}
      <FeatureComparison features={allFeatures} />
      
      {/* FAQ Section */}
      <FaqSection faqs={faqs} />
      
      {/* CTA Section */}
      <ContactCta />
      
      <Footer />
    </main>
  );
};

export default Pricing;
