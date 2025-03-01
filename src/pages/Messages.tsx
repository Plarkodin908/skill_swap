
import { useState } from "react";
import ChatList from "@/components/messages/ChatList";
import ChatContainer from "@/components/messages/ChatContainer";
import { getSampleChats, getSampleMessages, Chat, Message } from "@/services/messageService";

const Messages = () => {
  const [selectedChatId, setSelectedChatId] = useState(1);
  const [chats, setChats] = useState<Chat[]>(getSampleChats());
  const [messages, setMessages] = useState<Message[]>(getSampleMessages());
  
  const selectedChat = chats.find(chat => chat.id === selectedChatId);
  
  const handleSendMessage = (text: string) => {
    // In a real app, we would send the message to the backend
    console.log("Sending message:", text);
    
    // For demo purposes, add the message to the state
    const newMessage: Message = {
      id: messages.length + 1,
      senderId: "current",
      text,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };
    
    setMessages([...messages, newMessage]);
  };
  
  return (
    <div className="container mx-auto h-full px-4 py-8">
      <h1 className="text-4xl font-bold mb-8 text-white">Messages</h1>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 h-[calc(100vh-220px)]">
        <ChatList 
          chats={chats} 
          selectedChat={selectedChatId} 
          onSelectChat={setSelectedChatId} 
        />
        
        <ChatContainer 
          selectedChat={selectedChat} 
          messages={messages} 
          onSendMessage={handleSendMessage} 
        />
      </div>
    </div>
  );
};

export default Messages;
