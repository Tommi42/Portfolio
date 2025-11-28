'use client';

import React, { useEffect, useState } from 'react';
import { motion, useSpring, useMotionValue } from 'framer-motion';

const CustomCursor: React.FC = () => {
  const [isHovered, setIsHovered] = useState(false);

  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  const springConfig = { damping: 25, stiffness: 150 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX - 16); // Center offset
      cursorY.set(e.clientY - 16);

      // Check if hovering over clickable elements
      const target = e.target as HTMLElement;
      setIsHovered(!!target.closest('a, button, .interactive'));
    };

    window.addEventListener('mousemove', moveCursor);
    return () => {
      window.removeEventListener('mousemove', moveCursor);
    };
  }, [cursorX, cursorY]);

  return (
    <>
      {/* The large glow bubble (The "Bolla Gialla") - Kept yellow but adjusted for White BG */}
      <motion.div
        className="hidden md:block fixed top-0 left-0 w-32 h-32 bg-yellow-400/30 rounded-full blur-3xl pointer-events-none z-40 mix-blend-multiply"
        style={{
          x: cursorXSpring,
          y: cursorYSpring,
          translateX: '-1.5rem',
          translateY: '-1.5rem',
        }}
      />

      {/* The solid dot cursor - Black on white */}
      <motion.div
        className={`hidden md:flex fixed top-0 left-0 bg-black rounded-full pointer-events-none z-50 items-center justify-center`}
        style={{
          x: cursorX,
          y: cursorY,
          width: isHovered ? 48 : 12,
          height: isHovered ? 48 : 12,
          translateX: isHovered ? -8 : 10,
          translateY: isHovered ? -8 : 10,
        }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
      >
        {isHovered && (
          <span className="text-white text-[10px] font-bold">OPEN</span>
        )}
      </motion.div>
    </>
  );
};

export default CustomCursor;