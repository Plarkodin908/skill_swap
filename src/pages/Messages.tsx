
import { useState } from "react";
import ChatList from "@/components/messages/ChatList";
import ChatContainer from "@/components/messages/ChatContainer";
import { getSampleChats, getSampleMessages, Chat, Message } from "@/services/messageService";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { PlusCircle, Search } from "lucide-react";
import { toast } from "sonner";

const Messages = () => {
  const [selectedChatId, setSelectedChatId] = useState<number | null>(null);
  const [chats, setChats] = useState<Chat[]>(getSampleChats());
  const [messages, setMessages] = useState<Message[]>(getSampleMessages());
  const [searchTerm, setSearchTerm] = useState("");
  const [showAddContact, setShowAddContact] = useState(false);
  const [newContactName, setNewContactName] = useState("");
  
  const selectedChat = selectedChatId ? chats.find(chat => chat.id === selectedChatId) : undefined;
  
  const handleSendMessage = (text: string) => {
    if (!selectedChatId) return;
    
    // For demo purposes, add the message to the state
    const newMessage: Message = {
      id: messages.length + 1,
      senderId: "current",
      text,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };
    
    setMessages([...messages, newMessage]);
  };

  const handleAddContact = () => {
    if (newContactName.trim() === "") {
      toast.error("Please enter a name");
      return;
    }

    const newContact: Chat = {
      id: chats.length + 1,
      user: {
        name: newContactName,
        avatar: `https://ui-avatars.com/api/?name=${encodeURIComponent(newContactName)}&background=0D8ABC&color=fff`,
        isOnline: false
      },
      lastMessage: "No messages yet",
      timestamp: "Just now",
      unread: 0
    };

    setChats([...chats, newContact]);
    setNewContactName("");
    setShowAddContact(false);
    toast.success("Contact added successfully");
  };

  const filteredChats = chats.filter(chat => 
    chat.user.name.toLowerCase().includes(searchTerm.toLowerCase())
  );
  
  return (
    <div className="container mx-auto h-full px-4 py-8">
      <h1 className="text-4xl font-bold mb-8 text-white">Messages</h1>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 h-[calc(100vh-220px)]">
        <div className="flex flex-col">
          <div className="bg-forest-light border border-mint/10 p-4 rounded-t-lg">
            <div className="flex gap-2 mb-4">
              <div className="relative flex-grow">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white/40 h-4 w-4" />
                <Input
                  className="pl-10 bg-forest border-mint/20 text-white w-full"
                  placeholder="Search contacts..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
              <Button 
                variant="outline" 
                className="border-mint/20 text-mint hover:bg-mint/10"
                onClick={() => setShowAddContact(!showAddContact)}
              >
                <PlusCircle className="h-4 w-4" />
              </Button>
            </div>

            {showAddContact && (
              <div className="mb-4 p-3 bg-forest rounded-lg border border-mint/10">
                <h3 className="text-sm font-medium text-white mb-2">Add New Contact</h3>
                <Input 
                  placeholder="Contact name"
                  value={newContactName}
                  onChange={(e) => setNewContactName(e.target.value)}
                  className="bg-forest-light border-mint/20 text-white w-full mb-2"
                />
                <Button 
                  className="bg-mint hover:bg-mint/90 text-forest w-full"
                  onClick={handleAddContact}
                >
                  Add Contact
                </Button>
              </div>
            )}
          </div>

          <div className="flex-grow overflow-hidden rounded-b-lg">
            <ChatList 
              chats={filteredChats} 
              selectedChat={selectedChatId} 
              onSelectChat={setSelectedChatId} 
            />
          </div>
        </div>
        
        <ChatContainer 
          selectedChat={selectedChat} 
          messages={selectedChatId ? messages.filter(msg => msg.chatId === selectedChatId) : []} 
          onSendMessage={handleSendMessage} 
        />
      </div>
    </div>
  );
};

export default Messages;
