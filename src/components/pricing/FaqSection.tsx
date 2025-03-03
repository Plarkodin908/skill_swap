
import { Card } from "@/components/ui/card";

type Faq = {
  question: string;
  answer: string;
};

type FaqSectionProps = {
  faqs: Faq[];
};

const FaqSection = ({ faqs }: FaqSectionProps) => {
  return (
    <section className="py-16 px-4 bg-forest/30">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
          <p className="text-white/70">
            Find answers to common questions about our pricing and plans.
          </p>
        </div>
        
        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <Card key={index} className="bg-forest-light border border-mint/10 p-6 card-hover">
              <h3 className="text-lg font-bold mb-2">{faq.question}</h3>
              <p className="text-white/70">{faq.answer}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
