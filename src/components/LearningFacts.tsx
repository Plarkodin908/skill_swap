
import { Book, Brain, Lightbulb, GraduationCap } from "lucide-react";

const LearningFacts = () => {
  return (
    <section className="py-20 px-4 bg-forest-light">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center mb-16 text-white">The Power of Learning</h2>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <div className="space-y-8">
            <h3 className="text-3xl font-bold text-mint">Collaborative Learning</h3>
            <p className="text-white/80 text-lg leading-relaxed">
              Students who participate in collaborative learning environments show 
              improvements in academic achievement, self-esteem, and social skills. 
              Working together helps develop critical thinking and enhances knowledge retention.
            </p>
            
            <div className="grid grid-cols-2 gap-6 mt-6">
              <div className="flex items-center gap-3 bg-forest p-4 rounded-lg">
                <Lightbulb className="text-mint h-8 w-8" />
                <div>
                  <p className="text-mint font-bold">70%</p>
                  <p className="text-white/80 text-sm">Better problem-solving</p>
                </div>
              </div>
              <div className="flex items-center gap-3 bg-forest p-4 rounded-lg">
                <Brain className="text-mint h-8 w-8" />
                <div>
                  <p className="text-mint font-bold">50%</p>
                  <p className="text-white/80 text-sm">Improved retention</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="absolute -inset-2 bg-mint/20 rounded-2xl blur-lg opacity-50"></div>
            <img 
              src="/lovable-uploads/44320338-928a-4f87-80c5-b108d09edc5e.png" 
              alt="Students collaborating in a study group" 
              className="rounded-xl relative z-10 w-full h-auto shadow-xl"
              loading="lazy"
            />
          </div>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center mt-20">
          <div className="relative order-2 lg:order-1">
            <div className="absolute -inset-2 bg-mint/20 rounded-2xl blur-lg opacity-50"></div>
            <img 
              src="/lovable-uploads/54ffc2eb-8b8d-4893-beca-68661a996ce4.png" 
              alt="Student studying intently" 
              className="rounded-xl relative z-10 w-full h-auto shadow-xl"
              loading="lazy"
            />
          </div>
          
          <div className="space-y-8 order-1 lg:order-2">
            <h3 className="text-3xl font-bold text-mint">Focused Individual Study</h3>
            <p className="text-white/80 text-lg leading-relaxed">
              Deep focused study sessions are critical for mastering complex concepts. 
              Research shows that dedicated study time with minimal distractions leads to 
              better understanding and long-term knowledge retention.
            </p>
            
            <div className="grid grid-cols-2 gap-6 mt-6">
              <div className="flex items-center gap-3 bg-forest p-4 rounded-lg">
                <Book className="text-mint h-8 w-8" />
                <div>
                  <p className="text-mint font-bold">90%</p>
                  <p className="text-white/80 text-sm">Concept mastery</p>
                </div>
              </div>
              <div className="flex items-center gap-3 bg-forest p-4 rounded-lg">
                <GraduationCap className="text-mint h-8 w-8" />
                <div>
                  <p className="text-mint font-bold">3x</p>
                  <p className="text-white/80 text-sm">Academic success</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LearningFacts;
