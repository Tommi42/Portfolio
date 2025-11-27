import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowDown } from 'lucide-react';

interface HeroProps {
  onNext: () => void;
}

const Hero: React.FC<HeroProps> = ({ onNext }) => {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 200]);
  const y2 = useTransform(scrollY, [0, 500], [0, -100]);
  
  return (
    <section className="relative h-screen flex flex-col justify-center items-center overflow-hidden border-b border-white/10 shrink-0 w-full">
      <div className="absolute inset-0 z-0 pointer-events-none">
        <motion.div 
            style={{ y: y1 }}
            className="absolute top-[20%] -left-10 text-[12rem] md:text-[20rem] font-bold text-white/5 whitespace-nowrap select-none font-mono"
        >
            TOMMASO
        </motion.div>
        <motion.div 
            style={{ y: y2 }}
            className="absolute bottom-[20%] -right-10 text-[12rem] md:text-[20rem] font-bold text-white/5 whitespace-nowrap select-none font-mono"
        >
            DEV.OPS
        </motion.div>
      </div>

      <div className="z-10 text-center relative mix-blend-difference pointer-events-none">
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="mb-4"
        >
            <span className="inline-block px-3 py-1 border border-copper text-copper font-mono text-xs uppercase tracking-[0.2em] bg-onyx">
                Available for hire
            </span>
        </motion.div>

        <motion.h1 
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="text-5xl md:text-8xl font-black uppercase tracking-tighter mb-6 font-sans"
        >
          Tommaso<br/>
          <span className="text-stroke text-transparent" style={{ WebkitTextStroke: '2px #E5E5E5' }}>Cambursano</span>
        </motion.h1>

        <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-lg md:text-xl font-mono text-teal max-w-lg mx-auto leading-relaxed"
        >
          // SOFTWARE DEVELOPER<br/>
          Building fun digital stuff 
        </motion.p>
      </div>

      <motion.button 
        onClick={onNext}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-12 flex flex-col items-center gap-4 z-20 group interactive cursor-none"
      >
        <span className="text-xs font-mono text-gold/80 animate-pulse group-hover:text-gold">INITIALIZE SYSTEM</span>
        <div className="p-2 border border-white/10 rounded-full group-hover:border-gold/50 transition-colors">
            <ArrowDown className="text-gold w-6 h-6" />
        </div>
      </motion.button>
    </section>
  );
};

export default Hero;