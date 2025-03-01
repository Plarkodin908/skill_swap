
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Send, Search } from "lucide-react";

const Messages = () => {
  const [selectedChat, setSelectedChat] = useState(1);
  const [messageText, setMessageText] = useState("");
  
  // Sample chats data
  const chats = [
    {
      id: 1,
      user: {
        name: "Jane Smith",
        avatar: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=150&h=150&fit=crop",
        isOnline: true
      },
      lastMessage: "Thanks for the feedback on my project! When can we schedule our next session?",
      timestamp: "10:42 AM",
      unread: 2
    },
    {
      id: 2,
      user: {
        name: "Alex Johnson",
        avatar: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=150&h=150&fit=crop",
        isOnline: false
      },
      lastMessage: "I'm interested in collaborating on the data visualization project you mentioned.",
      timestamp: "Yesterday",
      unread: 0
    },
    {
      id: 3,
      user: {
        name: "Maria Rodriguez",
        avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=150&h=150&fit=crop",
        isOnline: true
      },
      lastMessage: "Here's the link to my portfolio with the UI designs.",
      timestamp: "Yesterday",
      unread: 0
    }
  ];
  
  // Sample messages for the selected chat
  const messages = [
    {
      id: 1,
      senderId: 1, // not current user
      text: "Hi there! I saw your profile and I think we could work well together on frontend projects.",
      timestamp: "10:30 AM"
    },
    {
      id: 2,
      senderId: "current", // current user
      text: "Hello! Thanks for reaching out. I'd love to collaborate. What kind of projects are you working on?",
      timestamp: "10:35 AM"
    },
    {
      id: 3,
      senderId: 1,
      text: "I'm currently developing a React dashboard for a healthcare application. I could use your expertise with animations and responsive design.",
      timestamp: "10:38 AM"
    },
    {
      id: 4,
      senderId: "current",
      text: "That sounds interesting! I have experience with Framer Motion for animations and I've worked on several responsive dashboards.",
      timestamp: "10:40 AM"
    },
    {
      id: 5,
      senderId: 1,
      text: "Thanks for the feedback on my project! When can we schedule our next session?",
      timestamp: "10:42 AM"
    }
  ];
  
  const handleSendMessage = () => {
    if (messageText.trim() === "") return;
    // In a real app, we would send the message to the backend
    console.log("Sending message:", messageText);
    setMessageText("");
  };
  
  return (
    <div className="container mx-auto h-full px-4 py-8">
      <h1 className="text-4xl font-bold mb-8 text-white">Messages</h1>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 h-[calc(100vh-220px)]">
        {/* Chat list */}
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
                onClick={() => setSelectedChat(chat.id)}
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
        
        {/* Chat messages */}
        <Card className="bg-forest-light border border-mint/10 p-0 overflow-hidden lg:col-span-2 flex flex-col">
          {selectedChat ? (
            <>
              {/* Chat header */}
              <div className="p-4 border-b border-mint/10 flex items-center gap-3">
                <img 
                  src={chats.find(c => c.id === selectedChat)?.user.avatar} 
                  alt={chats.find(c => c.id === selectedChat)?.user.name}
                  className="w-10 h-10 rounded-full object-cover"
                />
                <div>
                  <h3 className="font-medium text-white">{chats.find(c => c.id === selectedChat)?.user.name}</h3>
                  <p className="text-white/60 text-xs">
                    {chats.find(c => c.id === selectedChat)?.user.isOnline ? 'Online' : 'Offline'}
                  </p>
                </div>
              </div>
              
              {/* Messages */}
              <div className="flex-grow overflow-y-auto p-4 max-h-[calc(100vh-430px)]">
                {messages.map((message) => (
                  <div 
                    key={message.id} 
                    className={`mb-4 flex ${message.senderId === "current" ? 'justify-end' : 'justify-start'}`}
                  >
                    <div 
                      className={`
                        max-w-[80%] rounded-lg px-4 py-2
                        ${message.senderId === "current" 
                          ? 'bg-mint text-forest' 
                          : 'bg-forest border border-mint/10 text-white'}
                      `}
                    >
                      <p>{message.text}</p>
                      <p className={`text-xs mt-1 ${message.senderId === "current" ? 'text-forest/70' : 'text-white/60'}`}>
                        {message.timestamp}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
              
              {/* Message input */}
              <div className="p-4 border-t border-mint/10">
                <div className="flex gap-2">
                  <Input
                    className="bg-forest border-mint/20 text-white"
                    placeholder="Type a message..."
                    value={messageText}
                    onChange={(e) => setMessageText(e.target.value)}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter') handleSendMessage();
                    }}
                  />
                  <Button 
                    className="bg-mint hover:bg-mint/90 text-forest"
                    onClick={handleSendMessage}
                  >
                    <Send className="h-5 w-5" />
                  </Button>
                </div>
              </div>
            </>
          ) : (
            <div className="flex-grow flex items-center justify-center">
              <p className="text-white/60">Select a conversation to start messaging</p>
            </div>
          )}
        </Card>
      </div>
    </div>
  );
};

export default Messages;
