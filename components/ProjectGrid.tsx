import React, { useRef, useState, useEffect } from 'react';
import { projects } from '../app/data';
import { Project } from '../types';
import { motion, useAnimationFrame, useMotionValue } from 'framer-motion';
import Link from 'next/link';



const ProjectCard: React.FC<{ project: Project; width: number }> = ({ project, width }) => {
  return (
    <Link href={`/work/${project.id}`} className="block">
      <div
        className="flex-shrink-0 bg-white relative group overflow-hidden interactive rounded-[2.5rem] border border-black/10 mr-8 shadow-sm"
        style={{ width: width, height: width }}
      >
        <div className="absolute inset-0 p-6 md:p-10 flex flex-col justify-between h-full z-10 transition-colors duration-500 hover:bg-black hover:text-white">
          {/* Background pattern appearing on hover */}
          <div className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500 pointer-events-none"
            style={{ backgroundImage: 'radial-gradient(#fff 1px, transparent 1px)', backgroundSize: '10px 10px' }}>
          </div>

          <div className="flex justify-between items-start">
            <span className="text-xs font-semibold text-black group-hover:text-white border border-black/10 group-hover:border-white/50 px-3 py-1 rounded-full">
              {project.category}
            </span>
            <span className="font-medium text-black/40 group-hover:text-white/40 text-xs">{project.year}</span>
          </div>

          <div>
            <h3 className="text-2xl md:text-4xl font-black mb-3 tracking-tight">{project.title}</h3>
            <p className="text-gray-500 text-sm md:text-base group-hover:text-gray-400 font-medium">{project.description}</p>
          </div>

          <div className="flex justify-end">
            <div className="w-10 h-10 md:w-12 md:h-12 rounded-full border border-black/10 group-hover:border-white/20 flex items-center justify-center group-hover:bg-white/10 transition-colors">
              <span className="text-black group-hover:text-white text-xl font-bold">↗</span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

const ProjectGrid: React.FC = () => {
  const x = useMotionValue(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const [cardWidth, setCardWidth] = useState(450);
  const GAP = 32;

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setCardWidth(window.innerWidth - 64); // Full width minus padding
      } else {
        setCardWidth(450);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const totalWidth = (cardWidth + GAP) * projects.length;

  // We duplicate the array 3 times to ensure smooth infinite looping coverage
  const displayProjects = [...projects, ...projects, ...projects];

  // Auto-scroll logic
  useAnimationFrame((t, delta) => {
    // Base speed (pixels per millisecond)
    let moveBy = -0.05 * delta;

    const currentX = x.get();
    let newX = currentX + moveBy;

    // Wrap logic: When we've scrolled past the first set of items, snap back
    if (newX <= -totalWidth) {
      newX += totalWidth;
    } else if (newX > 0) {
      newX -= totalWidth;
    }

    x.set(newX);
  });

  const handleWheel = (e: React.WheelEvent) => {
    if (Math.abs(e.deltaX) > 0) {
      const currentX = x.get();
      let newX = currentX - e.deltaX;

      if (newX <= -totalWidth) newX += totalWidth;
      if (newX > 0) newX -= totalWidth;

      x.set(newX);
    }
  };

  return (
    <div
      ref={containerRef}
      className="w-full h-full flex items-center overflow-hidden cursor-grab active:cursor-grabbing border-y border-black/5 bg-gray-50/50"
      onWheel={handleWheel}
    >
      <motion.div
        className="flex items-center pl-8" // Padding left for start
        style={{ x }}
        drag="x"
        dragConstraints={{ left: -10000, right: 10000 }} // Infinite drag effectively
        onDrag={(e, info) => {
          const currentX = x.get();
          if (currentX <= -totalWidth) x.set(currentX + totalWidth);
          if (currentX > 0) x.set(currentX - totalWidth);
        }}
      >
        {displayProjects.map((project, i) => (
          <ProjectCard key={`${project.id}-${i}`} project={project} width={cardWidth} />
        ))}
      </motion.div>
    </div>
  );
};

export default ProjectGrid;