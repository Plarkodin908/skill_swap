
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const ContactCta = () => {
  const navigate = useNavigate();
  
  return (
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
  );
};

export default ContactCta;
