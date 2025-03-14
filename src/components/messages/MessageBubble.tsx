
interface MessageProps {
  id: number;
  senderId: number | string;
  text: string;
  timestamp: string;
}

const MessageBubble = ({ message }: { message: MessageProps }) => {
  const isCurrentUser = message.senderId === "current";
  
  return (
    <div 
      className={`mb-4 flex ${isCurrentUser ? 'justify-end' : 'justify-start'}`}
    >
      <div 
        className={`
          max-w-[80%] rounded-lg px-4 py-2
          ${isCurrentUser 
            ? 'bg-primary-purple text-dark-purple' 
            : 'bg-dark-purple border border-primary-purple/10 text-white'}
        `}
      >
        <p>{message.text}</p>
        <p className={`text-xs mt-1 ${isCurrentUser ? 'text-dark-purple/70' : 'text-white/60'}`}>
          {message.timestamp}
        </p>
      </div>
    </div>
  );
};

export default MessageBubble;
