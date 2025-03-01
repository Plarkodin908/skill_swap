
import { Card } from "@/components/ui/card";
import ChatHeader from "./ChatHeader";
import MessageList from "./MessageList";
import MessageInput from "./MessageInput";
import { Chat } from "./ChatList";

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
        <div className="flex-grow flex items-center justify-center">
          <p className="text-white/60">Select a conversation to start messaging</p>
        </div>
      )}
    </Card>
  );
};

export default ChatContainer;
