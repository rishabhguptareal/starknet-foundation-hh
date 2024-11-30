import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, Users, Shield } from 'lucide-react';

interface BasketCardProps {
  name: string;
  description: string;
  performance: string;
  investors: number;
  risk: 'Low' | 'Medium' | 'High';
  tokens: string[];
}

export default function BasketCard({ name, description, performance, investors, risk, tokens }: BasketCardProps) {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="bg-white/5 backdrop-blur-lg rounded-lg border border-white/10 p-6 hover:border-neon-pink/50 transition-colors"
    >
      <h3 className="text-xl font-semibold text-white mb-2">{name}</h3>
      <p className="text-white/70 mb-4">{description}</p>
      
      <div className="grid grid-cols-3 gap-4 mb-4">
        <div className="flex items-center">
          <TrendingUp className="h-4 w-4 text-green-400 mr-2" />
          <span className="text-white/90">{performance}</span>
        </div>
        <div className="flex items-center">
          <Users className="h-4 w-4 text-blue-400 mr-2" />
          <span className="text-white/90">{investors}</span>
        </div>
        <div className="flex items-center">
          <Shield className="h-4 w-4 text-yellow-400 mr-2" />
          <span className="text-white/90">{risk}</span>
        </div>
      </div>

      <div className="flex flex-wrap gap-2">
        {tokens.map((token, index) => (
          <span
            key={index}
            className="px-2 py-1 rounded-full bg-white/10 text-white/90 text-sm"
          >
            {token}
          </span>
        ))}
      </div>
    </motion.div>
  );
}