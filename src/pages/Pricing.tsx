
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check, X } from "lucide-react";
import { Link } from "react-router-dom";
import { toast } from "sonner";

const Pricing = () => {
  const handleSubscribe = (plan: string) => {
    toast.success(`You selected the ${plan} plan!`, {
      description: "This would normally redirect to payment processing.",
    });
  };

  const plans = [
    {
      name: "Free",
      price: "$0",
      period: "forever",
      description: "Perfect for casual learners",
      features: [
        "Access to free courses",
        "Basic community features",
        "Limited messaging",
        "View public tutorials",
      ],
      limitations: [
        "No course creation",
        "No certifications",
        "Limited support",
        "No advanced analytics",
      ],
      cta: "Get Started",
      highlighted: false
    },
    {
      name: "Pro Learner",
      price: "$19",
      period: "per month",
      description: "Ideal for dedicated students",
      features: [
        "Unlimited course access",
        "Priority messaging",
        "Course certificates",
        "Learning path creation",
        "24/7 support",
        "Progress tracking",
      ],
      limitations: [
        "Limited course creation",
      ],
      cta: "Subscribe Now",
      highlighted: true
    },
    {
      name: "Educator",
      price: "$39",
      period: "per month",
      description: "For teachers and content creators",
      features: [
        "Everything in Pro Learner",
        "Unlimited course creation",
        "Course analytics",
        "Promotional tools",
        "Revenue sharing",
        "Custom branding",
        "Premium support",
      ],
      limitations: [],
      cta: "Become an Educator",
      highlighted: false
    }
  ];

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
            <button className="px-6 py-2 rounded-full bg-mint text-forest font-medium">Monthly</button>
            <button className="px-6 py-2 rounded-full text-white/80 hover:text-white transition-colors">Annual (Save 20%)</button>
          </div>
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
                  relative overflow-hidden bg-forest-light border ${plan.highlighted ? 'border-mint' : 'border-mint/10'} 
                  flex flex-col animate-fade-in card-hover
                `}
                style={{ animationDelay: `${index * 200}ms` }}
              >
                {plan.highlighted && (
                  <div className="absolute top-0 right-0 bg-mint text-forest px-4 py-1 text-sm font-medium">
                    Most Popular
                  </div>
                )}
                <div className="p-6 flex-grow">
                  <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                  <div className="mb-4">
                    <span className="text-4xl font-bold text-mint">{plan.price}</span>
                    <span className="text-white/60 ml-2">{plan.period}</span>
                  </div>
                  <p className="text-white/70 mb-6">{plan.description}</p>
                  
                  <div className="mb-6">
                    <p className="font-medium mb-2">What's included:</p>
                    <ul className="space-y-2">
                      {plan.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center gap-2">
                          <Check className="h-5 w-5 text-mint flex-shrink-0" />
                          <span className="text-white/80">{feature}</span>
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
                            <span className="text-white/60">{limitation}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
                
                <div className="p-6 border-t border-mint/10">
                  <Button 
                    className={`w-full ${plan.highlighted ? 'bg-mint hover:bg-mint/90 text-forest' : 'bg-forest border border-mint/20 text-mint hover:bg-forest/80'}`}
                    onClick={() => handleSubscribe(plan.name)}
                  >
                    {plan.cta}
                  </Button>
                </div>
              </Card>
            ))}
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
            <Link to="/company">
              <Button className="bg-mint hover:bg-mint/90 text-forest px-8 py-6 text-lg hover-scale">
                Contact Support
              </Button>
            </Link>
            <Link to="/marketplace">
              <Button variant="outline" className="border-mint/20 text-mint hover:bg-mint/10 px-8 py-6 text-lg hover-scale">
                Browse Courses
              </Button>
            </Link>
          </div>
        </div>
      </section>
      
      <Footer />
    </main>
  );
};

export default Pricing;
