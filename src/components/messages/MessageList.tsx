
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
    <div className="flex-grow overflow-y-auto p-4 space-y-4 max-h-[calc(100vh-430px)] scrollbar-thin scrollbar-thumb-mint/10 scrollbar-track-transparent">
      {messages.length === 0 ? (
        <div className="flex flex-col items-center justify-center h-40 text-white/60">
          <p>No messages yet</p>
          <p className="text-sm">Start a conversation!</p>
        </div>
      ) : (
        messages.map((message) => (
          <MessageBubble key={message.id} message={message} />
        ))
      )}
    </div>
  );
};

export default MessageList;
