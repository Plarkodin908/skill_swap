
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Search } from "lucide-react";

interface ChatUser {
  name: string;
  avatar: string;
  isOnline: boolean;
}

export interface Chat {
  id: number;
  user: ChatUser;
  lastMessage: string;
  timestamp: string;
  unread: number;
}

interface ChatListProps {
  chats: Chat[];
  selectedChat: number;
  onSelectChat: (id: number) => void;
}

const ChatList = ({ chats, selectedChat, onSelectChat }: ChatListProps) => {
  return (
    <Card className="bg-forest-light border border-mint/10 p-0 overflow-hidden">
      <div className="p-4">
        <div className="relative mb-4">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white/40" />
          <Input
            className="pl-10 bg-forest border-mint/20 text-white"
            placeholder="Search conversations..."
          />
        </div>
      </div>
      
      <Separator className="bg-mint/10" />
      
      <div className="overflow-y-auto max-h-[calc(100vh-330px)]">
        {chats.map((chat) => (
          <div 
            key={chat.id}
            className={`
              p-4 cursor-pointer transition-colors flex gap-3
              ${selectedChat === chat.id ? 'bg-mint/10' : 'hover:bg-forest'}
            `}
            onClick={() => onSelectChat(chat.id)}
          >
            <div className="relative">
              <img 
                src={chat.user.avatar} 
                alt={chat.user.name}
                className="w-12 h-12 rounded-full object-cover"
              />
              {chat.user.isOnline && (
                <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-forest-light"></span>
              )}
            </div>
            
            <div className="flex-grow min-w-0">
              <div className="flex justify-between items-center mb-1">
                <h3 className="font-medium text-white truncate">{chat.user.name}</h3>
                <span className="text-white/60 text-xs">{chat.timestamp}</span>
              </div>
              <div className="flex justify-between items-center">
                <p className="text-white/70 text-sm truncate">{chat.lastMessage}</p>
                {chat.unread > 0 && (
                  <span className="bg-mint text-forest text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                    {chat.unread}
                  </span>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
};

export default ChatList;
