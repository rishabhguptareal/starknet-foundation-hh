import React from 'react';
import { motion } from 'framer-motion';

export default function GradientOrbs() {
  return (
    <div className="absolute inset-0 overflow-hidden">
      <motion.div
        className="absolute -left-20 -top-20 h-[40rem] w-[40rem] rounded-full bg-gradient-to-r from-purple-600/30 to-pink-600/30 blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          rotate: [0, 90, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear"
        }}
      />
      <motion.div
        className="absolute -right-20 -bottom-20 h-[35rem] w-[35rem] rounded-full bg-gradient-to-l from-blue-600/30 to-indigo-600/30 blur-3xl"
        animate={{
          scale: [1.2, 1, 1.2],
          rotate: [0, -90, 0],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "linear"
        }}
      />
    </div>
  );
}