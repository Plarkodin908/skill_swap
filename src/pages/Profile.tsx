
import { useState } from "react";
import { Avatar } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import SocialLinks from "@/components/community/SocialLinks";
import Stats from "@/components/Stats";
import ProfileCard from "@/components/profile/ProfileCard";
import SocialLinksBadges from "@/components/profile/SocialLinksBadges";
import CourseCard from "@/components/profile/CourseCard";
import RatingButtons from "@/components/profile/RatingButtons";

const Profile = () => {
  const [isPremium, setIsPremium] = useState(true);
  const [courses, setCourses] = useState([
    {
      id: 1,
      title: "CSS Theme Switch",
      author: "Praashoo7",
      likes: 22,
      comments: 12,
      views: 332,
    },
    {
      id: 2,
      title: "Responsive Design",
      author: "WebDeveloper",
      likes: 47,
      comments: 8,
      views: 215,
    },
    {
      id: 3,
      title: "React Fundamentals",
      author: "ReactMaster",
      likes: 89,
      comments: 24,
      views: 562,
    }
  ]);

  return (
    <div className="container mx-auto px-4 py-10">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Left Column - Profile Info */}
        <div className="md:col-span-1 space-y-6">
          <ProfileCard 
            name="George Johnson"
            role="Support Specialist"
            avatarUrl="/placeholder.svg"
          />
          
          <Card className="p-6 bg-dark-purple border border-primary-purple/20">
            <h2 className="text-xl font-bold mb-4 text-white">Social Links</h2>
            <SocialLinksBadges />
          </Card>
          
          <Card className="p-6 bg-dark-purple border border-primary-purple/20">
            <h2 className="text-xl font-bold mb-4 text-white">Stats</h2>
            <div className="grid grid-cols-2 gap-4">
              <div className="text-center p-3 bg-dark-purple border border-primary-purple/20 rounded-lg">
                <p className="text-3xl font-bold text-primary-purple">42</p>
                <p className="text-sm text-white/70">Courses</p>
              </div>
              <div className="text-center p-3 bg-dark-purple border border-primary-purple/20 rounded-lg">
                <p className="text-3xl font-bold text-primary-purple">128</p>
                <p className="text-sm text-white/70">Followers</p>
              </div>
              <div className="text-center p-3 bg-dark-purple border border-primary-purple/20 rounded-lg">
                <p className="text-3xl font-bold text-primary-purple">86</p>
                <p className="text-sm text-white/70">Following</p>
              </div>
              <div className="text-center p-3 bg-dark-purple border border-primary-purple/20 rounded-lg">
                <p className="text-3xl font-bold text-primary-purple">4.8</p>
                <p className="text-sm text-white/70">Rating</p>
              </div>
            </div>
          </Card>
          
          <RatingButtons />
        </div>
        
        {/* Right Column - Content */}
        <div className="md:col-span-2 space-y-6">
          <Card className="p-6 bg-dark-purple border border-primary-purple/20">
            <h2 className="text-xl font-bold mb-4 text-white">About Me</h2>
            <p className="text-white/80">
              I'm a passionate Support Specialist with over 5 years of experience in customer service. 
              I specialize in helping users navigate complex applications and resolving technical issues efficiently.
              My expertise includes troubleshooting, documentation, and user training.
            </p>
          </Card>
          
          <Card className="p-6 bg-dark-purple border border-primary-purple/20">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-bold text-white">My Courses</h2>
              <Button variant="outline" className="border-primary-purple/30 text-primary-purple hover:bg-primary-purple/10">
                View All
              </Button>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {courses.map(course => (
                <CourseCard 
                  key={course.id}
                  title={course.title}
                  author={course.author}
                  likes={course.likes}
                  comments={course.comments}
                  views={course.views}
                />
              ))}
            </div>
          </Card>
          
          <SocialLinks isPremium={isPremium} maxLinks={5} />
        </div>
      </div>
    </div>
  );
};

export default Profile;
