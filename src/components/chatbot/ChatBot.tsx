
import React, { useState } from 'react';
import { MessageCircle, Send, X } from 'lucide-react';
import { Sheet, SheetContent, SheetHeader, SheetTitle } from '@/components/ui/sheet';
import ChatBubble from './ChatBubble';
import { useLanguage } from '../../contexts/LanguageContext';
import { Input } from '../ui/input';
import { Button } from '../ui/button';
import { useChat } from '../../hooks/useChat';

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { language, t } = useLanguage();
  const { messages, sendMessage, isTyping } = useChat();
  const [inputValue, setInputValue] = useState('');

  const handleOpen = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (inputValue.trim()) {
      sendMessage(inputValue);
      setInputValue('');
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage(e);
    }
  };

  return (
    <>
      {/* Floating Chat Button */}
      {!isOpen && (
        <button
          onClick={handleOpen}
          className="fixed bottom-6 right-6 z-50 bg-[#0D503C] text-[#F5F5E9] rounded-full w-14 h-14 flex items-center justify-center shadow-lg hover:shadow-xl hover:bg-[#0A4231] transition-all duration-300 animate-scale-up"
          aria-label={language === 'en' ? 'Open chat' : 'Chat openen'}
        >
          <MessageCircle size={24} />
        </button>
      )}

      {/* Chat Sheet */}
      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <SheetContent 
          className="w-full sm:max-w-md rounded-t-2xl sm:rounded-l-2xl bg-[#F5F5E9] border-[#0D503C] border-2 p-0" 
          side="right"
        >
          {/* Chat Header */}
          <SheetHeader className="bg-[#0D503C] text-[#F5F5E9] p-4 rounded-t-xl flex flex-row items-center justify-between">
            <SheetTitle className="text-[#F5F5E9] flex items-center gap-2">
              <MessageCircle size={20} />
              {language === 'en' ? 'Chat with us' : 'Chat met ons'}
            </SheetTitle>
            <button 
              onClick={handleClose} 
              className="rounded-full hover:bg-[#F5F5E9]/10 p-1 transition-colors"
            >
              <X size={20} />
              <span className="sr-only">{language === 'en' ? 'Close' : 'Sluiten'}</span>
            </button>
          </SheetHeader>

          {/* Chat Messages */}
          <div className="h-[calc(100vh-160px)] sm:h-[500px] overflow-y-auto p-4 bg-[#F5F5E9]/80">
            <div className="flex flex-col gap-4">
              {messages.map((message, index) => (
                <ChatBubble
                  key={index}
                  message={message.content}
                  isUser={message.isUser}
                />
              ))}
              
              {isTyping && (
                <div className="ml-2 text-[#0D503C]/60 text-sm italic">
                  {language === 'en' ? 'Typing...' : 'Aan het typen...'}
                </div>
              )}
            </div>
          </div>

          {/* Chat Input */}
          <form 
            onSubmit={handleSendMessage}
            className="border-t border-[#0D503C]/20 p-4 flex gap-2 bg-[#F5F5E9]"
          >
            <Input
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder={language === 'en' ? 'Type your message...' : 'Typ je bericht...'}
              className="flex-1 border-[#0D503C]/30 focus:border-[#0D503C] focus-visible:ring-1 focus-visible:ring-[#0D503C]/30"
            />
            <Button 
              type="submit"
              className="bg-[#0D503C] hover:bg-[#0A4231] text-[#F5F5E9]"
              disabled={!inputValue.trim()}
            >
              <Send size={18} />
              <span className="sr-only">{language === 'en' ? 'Send' : 'Versturen'}</span>
            </Button>
          </form>
        </SheetContent>
      </Sheet>
    </>
  );
};

export default ChatBot;
