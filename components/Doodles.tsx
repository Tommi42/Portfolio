import React from 'react';
import { motion } from 'framer-motion';

export const RocketDoodle: React.FC<{ className?: string }> = ({ className }) => (
  <svg viewBox="0 0 100 100" className={className} fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
    <motion.path 
        d="M50 20 C 50 20, 30 50, 30 70 C 30 80, 40 90, 50 90 C 60 90, 70 80, 70 70 C 70 50, 50 20, 50 20 Z" 
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 2, ease: "easeInOut" }}
    />
    <motion.path d="M50 40 C 50 40, 50 40, 50 50" strokeWidth="5" />
    <motion.path d="M30 70 L 15 85" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ delay: 0.5, duration: 1 }} />
    <motion.path d="M70 70 L 85 85" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ delay: 0.5, duration: 1 }} />
    <motion.path d="M50 90 L 50 95 L 45 98 L 50 100 L 55 98 L 50 95" fill="currentColor" />
  </svg>
);

export const SparkDoodle: React.FC<{ className?: string }> = ({ className }) => (
  <svg viewBox="0 0 50 50" className={className} fill="currentColor">
     <motion.path 
        d="M25 0 L 30 18 L 48 22 L 32 28 L 35 48 L 20 32 L 2 35 L 18 20 L 10 2 L 22 15 Z"
        initial={{ scale: 0, rotate: -45 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{ type: "spring", bounce: 0.5 }}
     />
  </svg>
);

export const LogoDoodle: React.FC<{ className?: string }> = ({ className }) => (
    <div className={`relative ${className}`}>
        {/* Simulating the "Fuzzy" M logo from the image */}
        <div className="w-full h-full bg-black rounded-sm relative overflow-hidden flex items-center justify-center">
             <div className="text-white font-black text-2xl font-sans">M</div>
             {/* Noise texture simulation */}
             <div className="absolute inset-0 bg-white opacity-20" style={{ backgroundImage: 'radial-gradient(circle, #000 1px, transparent 1px)', backgroundSize: '2px 2px' }}></div>
        </div>
    </div>
);