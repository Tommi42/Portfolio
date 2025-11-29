import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowDown } from 'lucide-react';
import { RocketDoodle, SparkDoodle } from './Doodles';

interface HeroProps {
  onNext: () => void;
  onContact: () => void;
}

const Hero: React.FC<HeroProps> = ({ onNext, onContact }) => {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 200]);
  const y2 = useTransform(scrollY, [0, 500], [0, -100]);

  return (
    <section id="hero" className="relative h-[100svh] flex flex-col justify-center items-center overflow-hidden border-b border-black/5 shrink-0 w-full bg-paper">
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <motion.div
          style={{ y: y1 }}
          className="absolute top-[15%] md:top-[5%] -left-4 md:-left-10 text-[6rem] md:text-[20rem] font-bold text-black/5 whitespace-nowrap select-none font-sans tracking-tighter"
        >
          TOMMASO
        </motion.div>
        <motion.div
          style={{ y: y2 }}
          className="absolute bottom-[15%] md:bottom-[5%] -right-4 md:-right-10 text-[6rem] md:text-[20rem] font-bold text-black/5 whitespace-nowrap select-none font-sans tracking-tighter"
        >
          BUILDER
        </motion.div>
      </div>

      <div className="z-10 text-center relative pointer-events-none w-full max-w-7xl mx-auto px-4">
        <div className="relative inline-block">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="mb-8 relative z-20"
          >
            <span className="inline-block px-6 py-2 border border-black/5 text-black font-sans text-sm tracking-widest bg-white font-semibold shadow-sm rounded-full">
              Available for work
            </span>
          </motion.div>

          {/* Spark Doodle Absolute */}
          <motion.div className="absolute -top-12 -left-16 w-12 h-12 text-black z-10 hidden md:block"
            initial={{ opacity: 0, scale: 0 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.8 }}
          >
            <SparkDoodle className="w-full h-full" />
          </motion.div>
        </div>

        <motion.h1
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="text-6xl md:text-9xl font-black uppercase tracking-tighter mb-4 font-sans text-onyx leading-[0.85]"
        >
          Tommi.<br />
          <span className="relative inline-block">
            Engineer
            {/* Rocket Doodle Absolute */}
            <motion.div className="absolute -right-24 bottom-4 w-24 h-24 text-black hidden md:block"
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 1, duration: 1 }}
            >
              <RocketDoodle className="w-full h-full rotate-45" />
            </motion.div>
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-lg md:text-2xl text-gray-500 max-w-2xl mx-auto leading-relaxed mt-8 font-medium"
        >
          Building
          <span className="text-black font-bold"> fun </span>
          digital stuff for
          <span className="text-black font-bold"> people </span>
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="mt-10"
        >
          <button
            onClick={onContact}
            className="inline-block bg-black text-white px-8 py-4 rounded-full font-bold uppercase tracking-wider hover:bg-gray-800 transition-colors pointer-events-auto cursor-pointer"
          >
            Contact Me
          </button>
        </motion.div>
      </div>

      <motion.button
        onClick={onNext}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-12 flex flex-col items-center gap-4 z-20 group interactive cursor-none"
      >
        <span className="text-sm text-black/50 font-medium group-hover:text-black transition-colors">Scroll Down</span>
        <div className="p-3 bg-white border border-black/10 rounded-full group-hover:scale-110 group-hover:shadow-md transition-all">
          <ArrowDown className="w-5 h-5 text-black" />
        </div>
      </motion.button>
    </section>
  );
};

export default Hero;