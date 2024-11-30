import React from 'react';
import { motion } from 'framer-motion';

export default function GridPattern() {
  return (
    <div className="absolute inset-0 overflow-hidden opacity-20">
      <motion.div 
        className="absolute inset-0"
        style={{
          backgroundImage: `linear-gradient(to right, #ffffff10 1px, transparent 1px),
                           linear-gradient(to bottom, #ffffff10 1px, transparent 1px)`,
          backgroundSize: '4rem 4rem',
        }}
        animate={{
          y: [0, 100],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "linear"
        }}
      />
    </div>
  );
}