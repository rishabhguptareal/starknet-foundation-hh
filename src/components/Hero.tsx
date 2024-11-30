import React from 'react';
import { Bot } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <div className="relative min-h-screen overflow-hidden">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32">
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <motion.h1 
            className="text-5xl md:text-7xl font-bold tracking-tight text-white"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <span className="block">AI-Powered</span>
            <span className="block bg-gradient-cosmic text-transparent bg-clip-text">
              Token Baskets
            </span>
          </motion.h1>
          
          <motion.p 
            className="mt-6 text-xl text-white/70 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            Turn your investment ideas into ready-to-trade crypto portfolios. Let AI build your perfect strategy while you focus on your goals.
          </motion.p>

          <motion.div 
            className="mt-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            <motion.button 
              className="group inline-flex items-center px-8 py-4 rounded-lg bg-gradient-cosmic text-white font-medium shadow-xl shadow-neon-pink/20 hover:shadow-neon-pink/30 transition-shadow backdrop-blur-lg"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Bot className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform" />
              Create Your Basket
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}