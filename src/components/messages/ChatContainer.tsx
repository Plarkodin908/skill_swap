
import { Card } from "@/components/ui/card";
import ChatHeader from "./ChatHeader";
import MessageList from "./MessageList";
import MessageInput from "./MessageInput";
import { Chat } from "./ChatList";
import { MessageSquare } from "lucide-react";

interface Message {
  id: number;
  senderId: number | string;
  text: string;
  timestamp: string;
}

interface ChatContainerProps {
  selectedChat: Chat | undefined;
  messages: Message[];
  onSendMessage: (text: string) => void;
}

const ChatContainer = ({ selectedChat, messages, onSendMessage }: ChatContainerProps) => {
  return (
    <Card className="bg-forest-light border border-mint/10 p-0 overflow-hidden lg:col-span-2 flex flex-col">
      {selectedChat ? (
        <>
          <ChatHeader selectedChat={selectedChat} />
          <MessageList messages={messages} />
          <MessageInput onSendMessage={onSendMessage} />
        </>
      ) : (
        <div className="flex-grow flex flex-col items-center justify-center p-8">
          <MessageSquare className="h-16 w-16 text-mint/40 mb-4" />
          <p className="text-white/60 text-lg mb-2">No conversation selected</p>
          <p className="text-white/40 text-center max-w-md">
            Select a contact from the list or add a new contact to start messaging
          </p>
        </div>
      )}
    </Card>
  );
};

export default ChatContainer;
