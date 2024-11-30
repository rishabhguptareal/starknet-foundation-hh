import React from 'react';
import { MessageSquare, Target, RefreshCw, Users } from 'lucide-react';
import { motion } from 'framer-motion';

const features = [
  {
    name: 'Chat-Based Creation',
    description: 'Simply tell our AI what you want in plain English and watch as it creates your perfect portfolio.',
    icon: MessageSquare
  },
  {
    name: 'Goal-Based Investing',
    description: 'Share your financial goals and let our AI match you with the perfect investment strategy.',
    icon: Target
  },
  {
    name: 'Universal Token Swapping',
    description: 'Buy baskets using any token you own and sell them for any token you want.',
    icon: RefreshCw
  },
  {
    name: 'Community Rewards',
    description: 'Create innovative baskets and earn when others invest in your strategies.',
    icon: Users
  }
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
};

export default function Features() {
  return (
    <div className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold text-white sm:text-4xl">
            Why Choose StarkBasket?
          </h2>
          <p className="mt-4 text-xl text-white/70">
            Experience the future of crypto investing with our innovative features.
          </p>
        </motion.div>

        <motion.div 
          className="mt-20 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {features.map((feature) => (
            <motion.div 
              key={feature.name}
              variants={item}
              className="relative"
            >
              <motion.div 
                className="flex flex-col items-center p-6 bg-white/5 backdrop-blur-lg rounded-xl border border-white/10 hover:border-neon-pink/50 transition-colors"
                whileHover={{ y: -5 }}
              >
                <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-gradient-cosmic">
                  <feature.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="mt-4 text-lg font-medium text-white">{feature.name}</h3>
                <p className="mt-2 text-base text-white/70 text-center">{feature.description}</p>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}