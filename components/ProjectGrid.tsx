
import React, { useRef, useEffect } from 'react';
import { Project } from '../types';
import { motion, useAnimationFrame, useMotionValue, useTransform, useSpring, useDragControls } from 'framer-motion';

const projects: Project[] = [
  {
    id: 1,
    title: "NEURAL_INTERFACE",
    category: "Web App",
    year: "2023",
    description: "AI data model visualization dashboard."
  },
  {
    id: 2,
    title: "E-COMMERCE_V2",
    category: "Platform",
    year: "2023",
    description: "Headless CMS shopping experience."
  },
  {
    id: 3,
    title: "PORTFOLIO_OLD",
    category: "Design",
    year: "2022",
    description: "Previous personal branding iteration."
  },
  {
    id: 4,
    title: "CRYPTO_HUD",
    category: "Finance",
    year: "2024",
    description: "Real-time trading heads-up display."
  },
  {
    id: 5,
    title: "DATAVIZ_CORE",
    category: "Library",
    year: "2024",
    description: "WebGL based charting library for React."
  }
];

const CARD_WIDTH = 400; // Fixed width for desktop
const GAP = 1; // 1px gap
const TOTAL_WIDTH = (CARD_WIDTH + GAP) * projects.length;

const ProjectCard: React.FC<{ project: Project }> = ({ project }) => {
    return (
        <div 
            className="flex-shrink-0 bg-onyx relative group border-r border-white/10 overflow-hidden interactive"
            style={{ width: CARD_WIDTH, height: CARD_WIDTH }}
        >
            <div className="absolute inset-0 p-8 flex flex-col justify-between h-full z-10 transition-colors duration-500 group-hover:bg-[#151515]">
                {/* Background pattern appearing on hover */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500 pointer-events-none" 
                        style={{ backgroundImage: 'radial-gradient(#BDBF09 1px, transparent 1px)', backgroundSize: '10px 10px' }}>
                </div>

                <div className="flex justify-between items-start">
                    <span className="text-xs font-mono text-teal border border-teal/30 px-2 py-1 rounded-sm">
                        {project.category}
                    </span>
                    <span className="font-mono text-white/30 text-xs">//{project.year}</span>
                </div>

                <div>
                    <h3 className="text-3xl font-bold mb-2 group-hover:text-gold transition-colors">{project.title}</h3>
                    <p className="text-gray-500 text-sm">{project.description}</p>
                </div>

                <div className="absolute bottom-4 right-4 text-gold opacity-0 group-hover:opacity-100 transition-opacity transform group-hover:translate-x-1 duration-300">
                    →
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
    
    // Add logic here if you want velocity to decay after a drag/scroll event
    // For now, we keep it simple: constant slow movement + direct manipulation via x.set

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
    // Allow horizontal scrolling via trackpad or shift+wheel
    // Also allow vertical wheel to drive it for effect if desired, but sticking to horizontal intent
    if (Math.abs(e.deltaX) > 0) {
        // e.preventDefault(); // React synthetic events bubble, handling passive listeners is tricky, usually better to just consume
        const currentX = x.get();
        let newX = currentX - e.deltaX; // Invert delta for natural feel
        
        // Wrap logic manual
        if (newX <= -TOTAL_WIDTH) newX += TOTAL_WIDTH;
        if (newX > 0) newX -= TOTAL_WIDTH;
        
        x.set(newX);
    }
  };

  return (
    <div 
        ref={containerRef}
        className="w-full h-full flex items-center overflow-hidden cursor-grab active:cursor-grabbing border-y border-white/10 bg-white/5"
        onWheel={handleWheel}
    >
        <motion.div 
            className="flex border-l border-white/10"
            style={{ x }}
            drag="x"
            dragConstraints={{ left: -10000, right: 10000 }} // Infinite drag effectively
            onDrag={(e, info) => {
                // Manually update x during drag to keep our wrap logic valid if needed, 
                // but Framer's drag handles visual generic movement. 
                // We sync the motion value to the drag frame.
                const currentX = x.get();
                // Check wrap during drag
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
