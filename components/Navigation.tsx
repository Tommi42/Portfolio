import React from 'react';
import { motion } from 'framer-motion';

interface NavigationProps {
  currentSection: number;
  totalSections: number;
  onSelect: (index: number) => void;
}

const labels = ["Home", "About", "Method", "Work", "Exp", "Contact"];

const Navigation: React.FC<NavigationProps> = ({ currentSection, totalSections, onSelect }) => {
  return (
    <div className="fixed right-8 top-1/2 -translate-y-1/2 z-40 hidden md:flex flex-col gap-4 bg-white/50 backdrop-blur-md p-3 rounded-full border border-black/5 shadow-sm">
      {Array.from({ length: totalSections }).map((_, index) => (
        <button
            key={index}
            onClick={() => onSelect(index)}
            className="group flex items-center justify-center relative interactive focus:outline-none w-3 h-3"
            aria-label={`Go to ${labels[index]}`}
        >
             {/* Tooltip Label */}
             <motion.span 
                initial={{ opacity: 0, x: 20 }}
                animate={{ 
                    opacity: 0,
                    x: 20
                }}
                whileHover={{ opacity: 1, x: -30 }}
                className="absolute right-0 bg-black text-white text-[10px] px-2 py-1 rounded-md font-bold tracking-wide pointer-events-none whitespace-nowrap"
            >
                {labels[index]}
            </motion.span>

            {/* Dot */}
            <motion.div 
                className={`rounded-full transition-all duration-300 ${
                    currentSection === index ? 'bg-black w-3 h-3' : 'bg-gray-300 w-2 h-2 group-hover:bg-gray-400'
                }`}
                layoutId="nav-dot"
            />
        </button>
      ))}
    </div>
  );
};

export default Navigation;