import React from 'react';
import { motion } from 'framer-motion';

const RunningText: React.FC<{ text: string; direction?: 'left' | 'right' }> = ({ text, direction = 'left' }) => {
  return (
    <div className="relative flex overflow-hidden py-10 border-y border-black/10 bg-gray-50">
      <div className="absolute inset-0 bg-gradient-to-r from-white via-transparent to-white z-10 pointer-events-none opacity-50"></div>
      <motion.div
        className="flex whitespace-nowrap"
        animate={{ x: direction === 'left' ? ["0%", "-50%"] : ["-50%", "0%"] }}
        transition={{ repeat: Infinity, ease: "linear", duration: 15 }}
      >
        {[...Array(4)].map((_, i) => (
          <span key={i} className="text-6xl md:text-9xl font-black uppercase text-black/5 px-10 font-sans tracking-tight">
            {text}
          </span>
        ))}
      </motion.div>
    </div>
  );
};

export default RunningText;