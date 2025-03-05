
import { useState, useEffect } from 'react';
import { Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { toast } from 'sonner';

interface WishlistButtonProps {
  itemId: number | string;
  className?: string;
}

interface WishlistItem {
  id: number | string;
  dateAdded: string;
}

const WishlistButton = ({ itemId, className = '' }: WishlistButtonProps) => {
  const [isInWishlist, setIsInWishlist] = useState(false);
  
  // Load wishlist from localStorage on component mount
  useEffect(() => {
    const wishlist = getWishlistFromStorage();
    const itemExists = wishlist.some(item => item.id === itemId);
    setIsInWishlist(itemExists);
  }, [itemId]);
  
  // Helper function to get wishlist from localStorage
  const getWishlistFromStorage = (): WishlistItem[] => {
    const storedWishlist = localStorage.getItem('wishlist');
    return storedWishlist ? JSON.parse(storedWishlist) : [];
  };
  
  // Helper function to save wishlist to localStorage
  const saveWishlistToStorage = (wishlist: WishlistItem[]) => {
    localStorage.setItem('wishlist', JSON.stringify(wishlist));
  };
  
  const toggleWishlist = () => {
    const wishlist = getWishlistFromStorage();
    
    if (isInWishlist) {
      // Remove from wishlist
      const updatedWishlist = wishlist.filter(item => item.id !== itemId);
      saveWishlistToStorage(updatedWishlist);
      setIsInWishlist(false);
      toast.success('Removed from wishlist');
    } else {
      // Add to wishlist
      const newWishlistItem: WishlistItem = {
        id: itemId,
        dateAdded: new Date().toISOString()
      };
      const updatedWishlist = [...wishlist, newWishlistItem];
      saveWishlistToStorage(updatedWishlist);
      setIsInWishlist(true);
      toast.success('Added to wishlist');
    }
  };
  
  return (
    <Button
      variant="ghost"
      size="icon"
      className={`transition-all duration-300 ${isInWishlist ? 'text-red-500 hover:text-red-600' : 'text-white/60 hover:text-white'} ${className}`}
      onClick={toggleWishlist}
      aria-label={isInWishlist ? "Remove from wishlist" : "Add to wishlist"}
    >
      <Heart className={`h-5 w-5 ${isInWishlist ? 'fill-current' : ''}`} />
    </Button>
  );
};

export default WishlistButton;
