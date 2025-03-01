
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { GraduationCap, Users, MessageSquare, BookOpen, Calendar, Award, Zap, BarChart } from "lucide-react";
import { Link } from "react-router-dom";

const Features = () => {
  const features = [
    {
      icon: GraduationCap,
      title: "Interactive Learning",
      description: "Engage with courses that combine video lectures, quizzes, and hands-on projects for effective skill building.",
      color: "bg-mint/10",
      iconColor: "text-mint"
    },
    {
      icon: Users,
      title: "Expert Community",
      description: "Connect with industry experts and fellow learners to get feedback, share insights, and grow together.",
      color: "bg-mint/10",
      iconColor: "text-mint"
    },
    {
      icon: MessageSquare,
      title: "Real-time Messaging",
      description: "Communicate directly with instructors and peers through our integrated messaging system.",
      color: "bg-mint/10",
      iconColor: "text-mint"
    },
    {
      icon: BookOpen,
      title: "Comprehensive Resources",
      description: "Access a vast library of tutorials, guides, and supplementary materials to enhance your learning.",
      color: "bg-mint/10",
      iconColor: "text-mint"
    },
    {
      icon: Calendar,
      title: "Flexible Scheduling",
      description: "Book sessions with instructors at times that work for you with our integrated calendar system.",
      color: "bg-mint/10",
      iconColor: "text-mint"
    },
    {
      icon: Award,
      title: "Skill Certification",
      description: "Earn certificates upon course completion to showcase your newly acquired skills to employers.",
      color: "bg-mint/10", 
      iconColor: "text-mint"
    },
    {
      icon: Zap,
      title: "AI-Powered Matching",
      description: "Our intelligent algorithm connects you with the perfect courses and mentors based on your goals.",
      color: "bg-mint/10",
      iconColor: "text-mint"
    },
    {
      icon: BarChart,
      title: "Progress Tracking",
      description: "Monitor your learning journey with detailed analytics and achievement badges.",
      color: "bg-mint/10",
      iconColor: "text-mint"
    }
  ];

  return (
    <main className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4">
        <div className="container mx-auto text-center max-w-4xl">
          <h1 className="text-5xl font-bold mb-6 animate-fade-in">Powerful Features for <span className="text-mint">Learning & Teaching</span></h1>
          <p className="text-xl text-white/80 mb-8 animate-fade-in" style={{ animationDelay: "200ms" }}>
            SKILL SWAP offers everything you need to learn, teach, and collaborate on your educational journey.
          </p>
          <div className="flex justify-center gap-4 animate-fade-in" style={{ animationDelay: "300ms" }}>
            <Link to="/marketplace">
              <Button className="bg-mint hover:bg-mint/90 text-forest px-8 py-6 text-lg hover-scale">
                Browse Courses
              </Button>
            </Link>
            <Link to="/pricing">
              <Button variant="outline" className="border-mint/20 text-mint hover:bg-mint/10 px-8 py-6 text-lg hover-scale">
                View Pricing
              </Button>
            </Link>
          </div>
        </div>
      </section>
      
      {/* Features Grid */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card 
                key={index} 
                className="bg-forest-light border border-mint/10 p-6 card-hover animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className={`${feature.color} p-3 w-12 h-12 rounded-lg flex items-center justify-center mb-4`}>
                  {<feature.icon className={`h-6 w-6 ${feature.iconColor}`} />}
                </div>
                <h3 className="text-xl font-bold mb-3 text-white">{feature.title}</h3>
                <p className="text-white/70">{feature.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>
      
      {/* Testimonial Section */}
      <section className="py-16 px-4 bg-forest/30">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">What Our Users Say</h2>
            <p className="text-white/70 max-w-2xl mx-auto">
              Join thousands of satisfied learners and educators who have transformed their learning experience with SKILL SWAP.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                quote: "SKILL SWAP transformed my teaching experience. The platform's features make it easy to connect with students and deliver high-quality content.",
                author: "Sarah J.",
                role: "Web Development Instructor"
              },
              {
                quote: "The interactive learning experience and supportive community helped me gain the skills I needed to switch careers. Best educational investment I've made!",
                author: "Michael T.",
                role: "Data Science Student"
              },
              {
                quote: "As both a learner and teacher on the platform, I appreciate how SKILL SWAP balances simplicity with powerful features that enhance the educational experience.",
                author: "Priya K.",
                role: "UX Designer & Mentor"
              }
            ].map((testimonial, index) => (
              <Card key={index} className="bg-forest-light border border-mint/10 p-6 flex flex-col card-hover">
                <p className="text-white/80 mb-4 flex-grow">"{testimonial.quote}"</p>
                <div>
                  <p className="font-semibold text-white">{testimonial.author}</p>
                  <p className="text-mint text-sm">{testimonial.role}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to start your learning journey?</h2>
          <p className="text-white/70 mb-8 max-w-2xl mx-auto">
            Join SKILL SWAP today and connect with a community of learners and educators ready to help you grow.
          </p>
          <Link to="/marketplace">
            <Button className="bg-mint hover:bg-mint/90 text-forest px-8 py-6 text-lg hover-scale">
              Get Started Now
            </Button>
          </Link>
        </div>
      </section>
      
      <Footer />
    </main>
  );
};

export default Features;
