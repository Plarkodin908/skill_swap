
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Send } from "lucide-react";

interface MessageInputProps {
  onSendMessage: (text: string) => void;
}

const MessageInput = ({ onSendMessage }: MessageInputProps) => {
  const [messageText, setMessageText] = useState("");
  
  const handleSendMessage = () => {
    if (messageText.trim() === "") return;
    onSendMessage(messageText);
    setMessageText("");
  };
  
  return (
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
  );
};

export default MessageInput;
