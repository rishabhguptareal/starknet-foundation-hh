import React from 'react';
import { motion } from 'framer-motion';
import BasketCard from './BasketCard';

const popularBaskets = [
  {
    name: "DeFi Titans",
    description: "A collection of leading DeFi protocols with proven track records.",
    performance: "+24.5%",
    investors: 1234,
    risk: "Medium" as const,
    tokens: ["UNI", "AAVE", "MKR", "SNX"]
  },
  {
    name: "Web3 Gaming",
    description: "Exposure to the fastest growing gaming tokens in the ecosystem.",
    performance: "+32.1%",
    investors: 892,
    risk: "High" as const,
    tokens: ["AXS", "SAND", "MANA", "ENJ"]
  },
  {
    name: "Blue Chip Crypto",
    description: "A stable portfolio of established cryptocurrencies.",
    performance: "+18.7%",
    investors: 2156,
    risk: "Low" as const,
    tokens: ["BTC", "ETH", "BNB", "SOL"]
  },
  {
    name: "AI & Data",
    description: "Tokens powering the future of artificial intelligence.",
    performance: "+45.2%",
    investors: 567,
    risk: "High" as const,
    tokens: ["OCEAN", "FET", "AGIX", "NMR"]
  },
  {
    name: "Yield Maximizer",
    description: "Optimized for generating consistent yield returns.",
    performance: "+15.3%",
    investors: 1543,
    risk: "Medium" as const,
    tokens: ["CAKE", "CRV", "CVX", "COMP"]
  },
  {
    name: "Layer 2 Growth",
    description: "Focused on scaling solutions and Layer 2 protocols.",
    performance: "+28.9%",
    investors: 789,
    risk: "Medium" as const,
    tokens: ["OP", "ARB", "MATIC", "IMX"]
  }
];

export default function ExploreBaskets() {
  return (
    <div className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold text-white mb-4">
            Explore Popular Baskets
          </h1>
          <p className="text-xl text-white/70">
            Discover community-curated token baskets with proven track records
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {popularBaskets.map((basket, index) => (
            <BasketCard key={index} {...basket} />
          ))}
        </motion.div>
      </div>
    </div>
  );
}