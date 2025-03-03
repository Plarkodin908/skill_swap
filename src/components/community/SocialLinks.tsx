
import React, { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { 
  Facebook, 
  Instagram, 
  Linkedin, 
  Twitter, 
  Youtube, 
  Globe, 
  Plus, 
  Trash2
} from "lucide-react";
import { toast } from "sonner";

type SocialLink = {
  id: string;
  platform: string;
  url: string;
  icon: React.ReactNode;
};

type SocialLinksProps = {
  isPremium: boolean;
  maxLinks?: number;
};

const platformIcons: Record<string, React.ReactNode> = {
  facebook: <Facebook className="h-5 w-5" />,
  instagram: <Instagram className="h-5 w-5" />,
  linkedin: <Linkedin className="h-5 w-5" />,
  twitter: <Twitter className="h-5 w-5" />,
  youtube: <Youtube className="h-5 w-5" />,
  website: <Globe className="h-5 w-5" />,
};

const SocialLinks = ({ isPremium, maxLinks = 3 }: SocialLinksProps) => {
  const [links, setLinks] = useState<SocialLink[]>([]);
  const [platform, setPlatform] = useState<string>("website");
  const [url, setUrl] = useState<string>("");
  const [isEditing, setIsEditing] = useState<boolean>(false);

  const premiumMaxLinks = isPremium ? 6 : maxLinks;
  
  const handleAddLink = () => {
    if (links.length >= premiumMaxLinks) {
      toast.error(`You can only add up to ${premiumMaxLinks} social links${!isPremium ? " with your current plan" : ""}`);
      return;
    }
    
    if (!url) {
      toast.error("Please enter a valid URL");
      return;
    }
    
    // Basic URL validation
    try {
      // Add https if missing
      const urlToCheck = url.startsWith('http') ? url : `https://${url}`;
      new URL(urlToCheck);
      
      const newLink: SocialLink = {
        id: Math.random().toString(36).substr(2, 9),
        platform,
        url: urlToCheck,
        icon: platformIcons[platform] || <Globe className="h-5 w-5" />,
      };
      
      setLinks([...links, newLink]);
      setUrl("");
      toast.success(`Added ${platform} link`);
      setIsEditing(false);
    } catch (e) {
      toast.error("Please enter a valid URL");
    }
  };
  
  const handleRemoveLink = (id: string) => {
    setLinks(links.filter(link => link.id !== id));
    toast.success("Social link removed");
  };
  
  return (
    <Card className="bg-forest-light border border-mint/10 p-6">
      <h3 className="text-xl font-bold mb-4 text-white">Your Social Links</h3>
      
      {links.length > 0 && (
        <div className="flex flex-wrap gap-3 mb-6">
          {links.map(link => (
            <a 
              key={link.id}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-forest hover:bg-forest/80 text-mint px-3 py-2 rounded-full transition-all hover:scale-105"
            >
              {platformIcons[link.platform] || <Globe className="h-5 w-5" />}
              <span>{link.platform}</span>
              <button 
                onClick={(e) => {
                  e.preventDefault();
                  handleRemoveLink(link.id);
                }} 
                className="ml-2 text-white/60 hover:text-white"
              >
                <Trash2 className="h-4 w-4" />
              </button>
            </a>
          ))}
        </div>
      )}
      
      {!isEditing ? (
        <Button 
          onClick={() => setIsEditing(true)} 
          className="bg-mint hover:bg-mint/90 text-forest flex items-center gap-2"
          disabled={links.length >= premiumMaxLinks}
        >
          <Plus className="h-4 w-4" />
          Add Social Link {links.length > 0 && `(${links.length}/${premiumMaxLinks})`}
        </Button>
      ) : (
        <div className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-white/70 mb-1 text-sm">Platform</label>
              <select 
                value={platform}
                onChange={(e) => setPlatform(e.target.value)}
                className="w-full bg-forest border border-mint/20 rounded-md p-2 text-white"
              >
                <option value="website">Website</option>
                <option value="facebook">Facebook</option>
                <option value="instagram">Instagram</option>
                <option value="linkedin">LinkedIn</option>
                <option value="twitter">Twitter</option>
                <option value="youtube">YouTube</option>
              </select>
            </div>
            <div>
              <label className="block text-white/70 mb-1 text-sm">URL</label>
              <Input 
                value={url}
                onChange={(e) => setUrl(e.target.value)}
                placeholder="https://example.com"
                className="bg-forest border border-mint/20 text-white"
              />
            </div>
          </div>
          <div className="flex gap-3">
            <Button 
              onClick={handleAddLink} 
              className="bg-mint hover:bg-mint/90 text-forest flex-grow"
            >
              Add Link
            </Button>
            <Button 
              onClick={() => {
                setIsEditing(false);
                setUrl("");
              }} 
              variant="outline"
              className="border-mint/20 text-mint hover:bg-mint/10"
            >
              Cancel
            </Button>
          </div>
        </div>
      )}
      
      {!isPremium && links.length >= maxLinks && (
        <div className="mt-4 bg-forest p-3 rounded-md text-white/80 text-sm">
          You've reached the maximum number of social links for your plan. 
          <Button 
            variant="link" 
            className="text-mint p-0 h-auto text-sm ml-1 hover:underline"
            onClick={() => window.location.href = "/pricing"}
          >
            Upgrade to Pro or Educator
          </Button>
        </div>
      )}
    </Card>
  );
};

export default SocialLinks;
