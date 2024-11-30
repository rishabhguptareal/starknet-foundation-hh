import React, { useState } from 'react';
import { Send } from 'lucide-react';
import { motion } from 'framer-motion';

export default function CreateBasket() {
  const [messages, setMessages] = useState<Array<{ text: string; isUser: boolean }>>([
    { text: "Hi! I'm your AI assistant. Tell me what kind of token basket you'd like to create.", isUser: false }
  ]);
  const [input, setInput] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    setMessages(prev => [...prev, { text: input, isUser: true }]);
    
    setTimeout(() => {
      setMessages(prev => [...prev, {
        text: "I understand you're interested in creating a token basket. Could you tell me more about your investment goals and risk tolerance?",
        isUser: false
      }]);
    }, 1000);

    setInput('');
  };

  return (
    <div className="flex-1 min-h-[calc(100vh-4rem)]">
      <div className="max-w-4xl mx-auto py-8 px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white/5 backdrop-blur-lg rounded-lg border border-white/10 min-h-[600px] flex flex-col"
        >
          <div className="flex-1 p-6 overflow-y-auto">
            {messages.map((message, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: message.isUser ? 20 : -20 }}
                animate={{ opacity: 1, x: 0 }}
                className={`mb-4 ${message.isUser ? 'text-right' : 'text-left'}`}
              >
                <div
                  className={`inline-block p-4 rounded-lg ${
                    message.isUser
                      ? 'bg-gradient-cosmic text-white'
                      : 'bg-white/10 text-white'
                  }`}
                >
                  {message.text}
                </div>
              </motion.div>
            ))}
          </div>

          <form onSubmit={handleSubmit} className="border-t border-white/10 p-4">
            <div className="flex space-x-4">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Describe your ideal token basket..."
                className="flex-1 px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-neon-pink"
              />
              <motion.button
                type="submit"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-4 py-2 bg-gradient-cosmic text-white rounded-lg hover:shadow-lg hover:shadow-neon-pink/20 flex items-center"
              >
                <Send className="h-5 w-5" />
              </motion.button>
            </div>
          </form>
        </motion.div>
      </div>
    </div>
  );
}