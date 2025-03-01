
import { Chat } from "./ChatList";

interface ChatHeaderProps {
  selectedChat: Chat | undefined;
}

const ChatHeader = ({ selectedChat }: ChatHeaderProps) => {
  if (!selectedChat) return null;
  
  return (
    <div className="p-4 border-b border-mint/10 flex items-center gap-3">
      <img 
        src={selectedChat.user.avatar} 
        alt={selectedChat.user.name}
        className="w-10 h-10 rounded-full object-cover"
      />
      <div>
        <h3 className="font-medium text-white">{selectedChat.user.name}</h3>
        <p className="text-white/60 text-xs">
          {selectedChat.user.isOnline ? 'Online' : 'Offline'}
        </p>
      </div>
    </div>
  );
};

export default ChatHeader;
