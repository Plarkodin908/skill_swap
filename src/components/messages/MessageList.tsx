
import MessageBubble from "./MessageBubble";

interface Message {
  id: number;
  senderId: number | string;
  text: string;
  timestamp: string;
}

interface MessageListProps {
  messages: Message[];
}

const MessageList = ({ messages }: MessageListProps) => {
  return (
    <div className="flex-grow overflow-y-auto p-4 max-h-[calc(100vh-430px)]">
      {messages.map((message) => (
        <MessageBubble key={message.id} message={message} />
      ))}
    </div>
  );
};

export default MessageList;
