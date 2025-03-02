
import { Button } from "@/components/ui/button";
import { Download, Clock } from "lucide-react";

const MobilePreview = () => {
  return (
    <section className="py-20 px-4">
      <div className="container mx-auto grid lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-8">
          <div className="inline-flex items-center gap-2 bg-mint/10 px-4 py-2 rounded-full">
            <Clock className="h-4 w-4 text-mint animate-pulse" />
            <span className="text-mint text-sm font-medium">Coming Soon</span>
          </div>
          <h2 className="text-4xl font-bold">Mobile App Available Soon</h2>
          <p className="text-white/80 max-w-md">
            We're working hard on our mobile app to take your learning experience to the next level. 
            Stay tuned for updates on the launch date. Join our waitlist to be notified first!
          </p>
          <div className="flex gap-4">
            <Button className="bg-mint hover:bg-mint/90 text-forest font-medium">
              Join Waitlist
            </Button>
            <Button className="bg-transparent border border-mint/20 text-white hover:bg-mint/10">
              Get Early Access
            </Button>
          </div>
        </div>
        <div className="relative">
          <div className="absolute -inset-0.5 rounded-2xl bg-gradient-to-r from-mint to-divine opacity-30 blur-lg"></div>
          <img
            src="https://images.unsplash.com/photo-1581092795360-fd1ca04f0952"
            alt="Mobile app preview"
            className="rounded-2xl shadow-2xl mx-auto max-w-sm relative"
          />
          <div className="absolute top-0 left-0 right-0 bottom-0 bg-black/40 rounded-2xl flex items-center justify-center">
            <div className="bg-forest-light/90 px-6 py-3 rounded-full text-mint font-bold">
              Coming Soon
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MobilePreview;
