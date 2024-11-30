import React from 'react';
import { motion } from 'framer-motion';

const ParticleComponent = ({ className }: { className?: string }) => {
  return (
    <motion.div
      className={`absolute rounded-full bg-white/10 backdrop-blur-md ${className}`}
      animate={{
        y: [0, -30, 0],
        opacity: [0.2, 0.5, 0.2],
      }}
      transition={{
        duration: Math.random() * 3 + 2,
        repeat: Infinity,
        ease: "easeInOut"
      }}
    />
  );
};

export default function Particles() {
  return (
    <div className="absolute inset-0 overflow-hidden">
      <ParticleComponent className="h-4 w-4 left-[10%] top-[20%]" />
      <ParticleComponent className="h-6 w-6 left-[20%] top-[60%]" />
      <ParticleComponent className="h-3 w-3 left-[60%] top-[30%]" />
      <ParticleComponent className="h-5 w-5 left-[80%] top-[70%]" />
      <ParticleComponent className="h-4 w-4 left-[45%] top-[45%]" />
    </div>
  );
}