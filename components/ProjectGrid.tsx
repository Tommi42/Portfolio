import React, { useRef } from 'react';
import { Project } from '../types';
import { motion, useAnimationFrame, useMotionValue } from 'framer-motion';

const projects: Project[] = [
  {
    id: 1,
    title: "ChatBot System",
    category: "Web App",
    year: "2023",
    description: "AI data model visualization dashboard."
  },
  {
    id: 2,
    title: "Stock Portfolio Optimization",
    category: "AI",
    year: "2023",
    description: "Headless CMS shopping experience."
  },
  {
    id: 3,
    title: "Natalino",
    category: "Web app",
    year: "2022",
    description: "Previous personal branding iteration."
  },
  {
    id: 4,
    title: "Spotify Redesign",
    category: "Design",
    year: "2024",
    description: "Real-time trading heads-up display."
  },
  {
    id: 5,
    title: "DataViz Core",
    category: "Library",
    year: "2024",
    description: "WebGL based charting library for React."
  }
];

const CARD_WIDTH = 450; // Slightly wider for card look
const GAP = 32; // 32px gap between cards
const TOTAL_WIDTH = (CARD_WIDTH + GAP) * projects.length;

const ProjectCard: React.FC<{ project: Project }> = ({ project }) => {
    return (
        <div 
            className="flex-shrink-0 bg-white relative group overflow-hidden interactive rounded-[2.5rem] border border-black/10 mr-8 shadow-sm"
            style={{ width: CARD_WIDTH, height: CARD_WIDTH }}
        >
            <div className="absolute inset-0 p-10 flex flex-col justify-between h-full z-10 transition-colors duration-500 hover:bg-black hover:text-white">
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
                    <h3 className="text-4xl font-black mb-3 tracking-tight">{project.title}</h3>
                    <p className="text-gray-500 text-base group-hover:text-gray-400 font-medium">{project.description}</p>
                </div>

                <div className="flex justify-end">
                    <div className="w-12 h-12 rounded-full border border-black/10 group-hover:border-white/20 flex items-center justify-center group-hover:bg-white/10 transition-colors">
                         <span className="text-black group-hover:text-white text-xl font-bold">↗</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

const ProjectGrid: React.FC = () => {
  const x = useMotionValue(0);
  const containerRef = useRef<HTMLDivElement>(null);
  
  // We duplicate the array 3 times to ensure smooth infinite looping coverage
  const displayProjects = [...projects, ...projects, ...projects];

  // Auto-scroll logic
  useAnimationFrame((t, delta) => {
    // Base speed (pixels per millisecond)
    let moveBy = -0.05 * delta; 
    
    const currentX = x.get();
    let newX = currentX + moveBy;

    // Wrap logic: When we've scrolled past the first set of items, snap back
    if (newX <= -TOTAL_WIDTH) {
        newX += TOTAL_WIDTH;
    } else if (newX > 0) {
        newX -= TOTAL_WIDTH;
    }

    x.set(newX);
  });

  const handleWheel = (e: React.WheelEvent) => {
    if (Math.abs(e.deltaX) > 0) {
        const currentX = x.get();
        let newX = currentX - e.deltaX; 
        
        if (newX <= -TOTAL_WIDTH) newX += TOTAL_WIDTH;
        if (newX > 0) newX -= TOTAL_WIDTH;
        
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
                if (currentX <= -TOTAL_WIDTH) x.set(currentX + TOTAL_WIDTH);
                if (currentX > 0) x.set(currentX - TOTAL_WIDTH);
            }}
        >
            {displayProjects.map((project, i) => (
                <ProjectCard key={`${project.id}-${i}`} project={project} />
            ))}
        </motion.div>
    </div>
  );
};

export default ProjectGrid;