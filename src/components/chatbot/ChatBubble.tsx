
import React from 'react';

interface ChatBubbleProps {
  message: string;
  isUser: boolean;
}

const ChatBubble: React.FC<ChatBubbleProps> = ({ message, isUser }) => {
  return (
    <div
      className={`max-w-[80%] p-3 rounded-lg ${
        isUser
          ? 'bg-[#0D503C] text-[#F5F5E9] ml-auto rounded-tr-none'
          : 'bg-white text-[#0D503C] mr-auto rounded-tl-none border border-[#0D503C]/10'
      }`}
    >
      <p className="text-sm">{message}</p>
    </div>
  );
};

export default ChatBubble;
