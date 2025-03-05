
import { useState, useEffect } from 'react';
import { Bookmark } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { toast } from 'sonner';

interface BookmarkButtonProps {
  itemId: number | string;
  itemType: 'tutorial' | 'article' | 'course';
  className?: string;
}

interface BookmarkedItem {
  id: number | string;
  type: string;
  dateAdded: string;
}

const BookmarkButton = ({ itemId, itemType, className = '' }: BookmarkButtonProps) => {
  const [isBookmarked, setIsBookmarked] = useState(false);
  
  // Load bookmarks from localStorage on component mount
  useEffect(() => {
    const bookmarks = getBookmarksFromStorage();
    const itemExists = bookmarks.some(item => item.id === itemId && item.type === itemType);
    setIsBookmarked(itemExists);
  }, [itemId, itemType]);
  
  // Helper function to get bookmarks from localStorage
  const getBookmarksFromStorage = (): BookmarkedItem[] => {
    const storedBookmarks = localStorage.getItem('bookmarks');
    return storedBookmarks ? JSON.parse(storedBookmarks) : [];
  };
  
  // Helper function to save bookmarks to localStorage
  const saveBookmarksToStorage = (bookmarks: BookmarkedItem[]) => {
    localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
  };
  
  const toggleBookmark = () => {
    const bookmarks = getBookmarksFromStorage();
    
    if (isBookmarked) {
      // Remove from bookmarks
      const updatedBookmarks = bookmarks.filter(
        item => !(item.id === itemId && item.type === itemType)
      );
      saveBookmarksToStorage(updatedBookmarks);
      setIsBookmarked(false);
      toast.success('Removed from backpack');
    } else {
      // Add to bookmarks
      const newBookmarkedItem: BookmarkedItem = {
        id: itemId,
        type: itemType,
        dateAdded: new Date().toISOString()
      };
      const updatedBookmarks = [...bookmarks, newBookmarkedItem];
      saveBookmarksToStorage(updatedBookmarks);
      setIsBookmarked(true);
      toast.success('Added to backpack');
    }
  };
  
  return (
    <Button
      variant="ghost"
      size="icon"
      className={`transition-all duration-300 ${isBookmarked ? 'text-mint hover:text-mint/80' : 'text-white/60 hover:text-white'} ${className}`}
      onClick={toggleBookmark}
      aria-label={isBookmarked ? "Remove from backpack" : "Add to backpack"}
    >
      <Bookmark className={`h-5 w-5 ${isBookmarked ? 'fill-current' : ''} animate-bounce-once`} />
    </Button>
  );
};

export default BookmarkButton;
