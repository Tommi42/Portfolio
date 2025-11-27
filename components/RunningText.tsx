import React from 'react';
import { motion } from 'framer-motion';

const RunningText: React.FC<{ text: string; direction?: 'left' | 'right' }> = ({ text, direction = 'left' }) => {
  return (
    <div className="relative flex overflow-hidden py-10 border-y border-white/5 bg-onyx">
      <div className="absolute inset-0 bg-gradient-to-r from-onyx via-transparent to-onyx z-10 pointer-events-none"></div>
      <motion.div
        className="flex whitespace-nowrap"
        animate={{ x: direction === 'left' ? ["0%", "-50%"] : ["-50%", "0%"] }}
        transition={{ repeat: Infinity, ease: "linear", duration: 15 }}
      >
        {[...Array(4)].map((_, i) => (
          <span key={i} className="text-6xl md:text-9xl font-bold uppercase text-white/5 px-10 font-mono">
            {text}
          </span>
        ))}
      </motion.div>
    </div>
  );
};

export default RunningText;