
import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search, Filter, Star } from "lucide-react";

const Marketplace = () => {
  const [searchQuery, setSearchQuery] = useState("");
  
  // Sample marketplace listings
  const listings = [
    {
      id: 1,
      title: "Web Development Mentorship",
      provider: "Jane Smith",
      rating: 4.8,
      reviews: 124,
      skills: ["React", "JavaScript", "CSS"],
      price: "$45/hour",
      image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e"
    },
    {
      id: 2,
      title: "Data Science Collaboration",
      provider: "Alex Johnson",
      rating: 4.6,
      reviews: 98,
      skills: ["Python", "Machine Learning", "SQL"],
      price: "$50/hour",
      image: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5"
    },
    {
      id: 3,
      title: "UI/UX Design Workshop",
      provider: "Maria Rodriguez",
      rating: 4.9,
      reviews: 156,
      skills: ["Figma", "Adobe XD", "Prototyping"],
      price: "$65/session",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956"
    },
    {
      id: 4,
      title: "Mobile App Development",
      provider: "Tyler Chen",
      rating: 4.7,
      reviews: 112,
      skills: ["React Native", "Flutter", "iOS/Android"],
      price: "$55/hour",
      image: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6"
    }
  ];
  
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8 text-white">Marketplace</h1>
      
      <div className="flex flex-col md:flex-row gap-4 mb-8">
        <div className="relative flex-grow">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white/40" />
          <Input
            className="pl-10 bg-forest-light border-mint/20 text-white"
            placeholder="Search for skills, topics, or mentors..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        <Button className="bg-forest-light border border-mint/20 text-white hover:bg-forest-light/80">
          <Filter className="mr-2 h-4 w-4" /> Filters
        </Button>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {listings.map((listing) => (
          <Card key={listing.id} className="bg-forest-light border border-mint/10 overflow-hidden flex flex-col">
            <div className="h-48 overflow-hidden">
              <img 
                src={`${listing.image}?w=600&h=400&fit=crop`} 
                alt={listing.title}
                className="w-full h-full object-cover object-center transition-transform hover:scale-105 duration-300"
              />
            </div>
            <div className="p-5 flex-grow">
              <div className="flex items-center text-mint mb-2">
                <Star className="fill-mint h-4 w-4" />
                <span className="ml-1 font-bold">{listing.rating}</span>
                <span className="text-white/60 text-sm ml-1">({listing.reviews} reviews)</span>
              </div>
              <h3 className="text-lg font-bold text-white mb-1">{listing.title}</h3>
              <p className="text-white/70 mb-3">{listing.provider}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {listing.skills.map((skill, index) => (
                  <span key={index} className="bg-mint/10 text-mint text-xs px-2 py-1 rounded-full">
                    {skill}
                  </span>
                ))}
              </div>
              <div className="flex items-center justify-between mt-auto">
                <span className="text-mint font-bold">{listing.price}</span>
                <Button className="bg-mint hover:bg-mint/90 text-forest text-sm">View Details</Button>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Marketplace;
