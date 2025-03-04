
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { ArrowLeft, CreditCard, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card } from "@/components/ui/card";
import { toast } from "sonner";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { PlanType } from "@/components/pricing/types";

const PaymentPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [completed, setCompleted] = useState(false);
  const [formData, setFormData] = useState({
    cardName: "",
    cardNumber: "",
    expiry: "",
    cvv: ""
  });

  // Extract plan information from URL params
  const searchParams = new URLSearchParams(location.search);
  const plan = searchParams.get("plan") as PlanType || "Free";
  const price = searchParams.get("price") || "$0";
  const period = searchParams.get("period") || "month";
  const isAnnual = period.includes("year");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.cardName || !formData.cardNumber || !formData.expiry || !formData.cvv) {
      toast.error("Please fill in all payment details");
      return;
    }
    
    if (formData.cardNumber.length < 16) {
      toast.error("Please enter a valid card number");
      return;
    }
    
    setLoading(true);
    
    // Simulate payment processing
    setTimeout(() => {
      setLoading(false);
      setCompleted(true);
      toast.success("Payment successful!");
      
      // After another delay, redirect to dashboard
      setTimeout(() => {
        navigate("/dashboard");
      }, 2000);
    }, 1500);
  };

  if (completed) {
    return (
      <main className="min-h-screen">
        <Navbar />
        <div className="py-32 px-4">
          <div className="max-w-md mx-auto text-center">
            <div className="mb-6">
              <CheckCircle className="h-20 w-20 text-mint mx-auto" />
            </div>
            <h1 className="text-3xl font-bold mb-4">Payment Successful!</h1>
            <p className="text-white/70 mb-8">
              Thank you for subscribing to the {plan} plan. Your account has been upgraded.
            </p>
            <Button 
              className="bg-mint text-forest hover:bg-mint/90"
              onClick={() => navigate("/dashboard")}
            >
              Go to Dashboard
            </Button>
          </div>
        </div>
        <Footer />
      </main>
    );
  }

  return (
    <main className="min-h-screen">
      <Navbar />
      <div className="py-32 px-4">
        <Card className="max-w-md mx-auto bg-forest-light border border-mint/10 p-6">
          <div className="mb-6">
            <button 
              onClick={() => navigate(-1)} 
              className="flex items-center text-mint hover:text-mint/80 transition-colors"
            >
              <ArrowLeft className="h-4 w-4 mr-1" />
              Back to Plans
            </button>
          </div>
          
          <h1 className="text-2xl font-bold mb-6">
            Subscribe to {plan}
          </h1>
          
          <div className="bg-forest/50 rounded-md p-4 mb-6">
            <div className="flex justify-between mb-2">
              <span>Plan:</span>
              <span className="font-medium text-mint">{plan}</span>
            </div>
            <div className="flex justify-between mb-2">
              <span>Billing:</span>
              <span>{isAnnual ? "Annual" : "Monthly"}</span>
            </div>
            <div className="flex justify-between font-bold">
              <span>Total:</span>
              <span className="text-mint">{price}</span>
            </div>
          </div>
          
          <form onSubmit={handleSubmit}>
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="cardName">Cardholder Name</Label>
                <Input
                  id="cardName"
                  name="cardName"
                  placeholder="Name on card"
                  value={formData.cardName}
                  onChange={handleInputChange}
                  className="bg-forest border-mint/20"
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="cardNumber">Card Number</Label>
                <Input
                  id="cardNumber"
                  name="cardNumber"
                  placeholder="1234 5678 9012 3456"
                  maxLength={16}
                  value={formData.cardNumber}
                  onChange={handleInputChange}
                  className="bg-forest border-mint/20"
                />
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="expiry">Expiry Date</Label>
                  <Input
                    id="expiry"
                    name="expiry"
                    placeholder="MM/YY"
                    maxLength={5}
                    value={formData.expiry}
                    onChange={handleInputChange}
                    className="bg-forest border-mint/20"
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="cvv">CVV</Label>
                  <Input
                    id="cvv"
                    name="cvv"
                    type="password"
                    placeholder="***"
                    maxLength={3}
                    value={formData.cvv}
                    onChange={handleInputChange}
                    className="bg-forest border-mint/20"
                  />
                </div>
              </div>
              
              <Button 
                type="submit" 
                className="w-full bg-mint hover:bg-mint/90 text-forest mt-6"
                disabled={loading}
              >
                {loading ? (
                  <div className="flex items-center">
                    <div className="animate-spin mr-2 h-4 w-4 border-2 border-forest border-t-transparent rounded-full"></div>
                    Processing...
                  </div>
                ) : (
                  <div className="flex items-center">
                    <CreditCard className="mr-2 h-4 w-4" />
                    Complete Payment
                  </div>
                )}
              </Button>
            </div>
          </form>
        </Card>
      </div>
      <Footer />
    </main>
  );
};

export default PaymentPage;
