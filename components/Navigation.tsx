import React from 'react';
import { motion } from 'framer-motion';

interface NavigationProps {
  currentSection: number;
  totalSections: number;
  onSelect: (index: number) => void;
}

const labels = ["INIT", "OVERVIEW", "METHOD", "WORKS", "EXP", "CONTACT"];

const Navigation: React.FC<NavigationProps> = ({ currentSection, totalSections, onSelect }) => {
  return (
    <div className="fixed right-8 top-1/2 -translate-y-1/2 z-40 hidden md:flex flex-col gap-6 mix-blend-difference">
      {Array.from({ length: totalSections }).map((_, index) => (
        <button
            key={index}
            onClick={() => onSelect(index)}
            className="group flex items-center gap-4 justify-end interactive focus:outline-none"
        >
            {/* Label only visible on hover or active */}
            <motion.span 
                initial={{ opacity: 0, x: 10 }}
                animate={{ 
                    opacity: currentSection === index ? 1 : 0, 
                    x: currentSection === index ? 0 : 10 
                }}
                className="font-mono text-xs text-gold tracking-widest hidden lg:block"
            >
                {labels[index]}
            </motion.span>
            
            {/* Indicator Box */}
            <motion.div 
                className={`w-3 h-3 border border-current transition-colors duration-300 ${
                    currentSection === index ? 'bg-gold border-gold' : 'border-gray-500 group-hover:border-white'
                }`}
                animate={{ rotate: currentSection === index ? 45 : 0 }}
            />
        </button>
      ))}
      
      {/* Progress Line */}
      <div className="absolute right-[5px] top-0 bottom-0 w-[1px] bg-gray-700 -z-10 h-full opacity-30">
        <motion.div 
            className="w-full bg-gold"
            initial={{ height: "0%" }}
            animate={{ height: `${(currentSection / (totalSections - 1)) * 100}%` }}
            transition={{ duration: 0.5 }}
        />
      </div>
    </div>
  );
};

export default Navigation;