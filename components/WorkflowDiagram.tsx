import React from 'react';
import { motion } from 'framer-motion';

const WorkflowDiagram: React.FC = () => {
  return (
    <div className="w-full max-w-4xl mx-auto aspect-[16/9] relative p-4 select-none">
      <svg className="w-full h-full" viewBox="0 0 800 400" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <filter id="glow">
            <feGaussianBlur stdDeviation="1" result="coloredBlur"/>
            <feMerge>
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
        </defs>

        {/* --- PATHS --- */}
        
        {/* Top Path (Direct Human Control - No AI) */}
        <path
          d="M 200 200 C 300 50, 600 50, 710 200"
          stroke="#000000" 
          strokeWidth="2"
          strokeDasharray="5 5"
          fill="none"
          id="path-top"
          className="opacity-20"
        />

        {/* Middle Path (AI Assisted) */}
        <path
          d="M 200 200 L 450 200 L 710 200"
          stroke="#000000"
          strokeWidth="2"
          strokeDasharray="5 5"
          fill="none"
          id="path-mid"
           className="opacity-20"
        />

        {/* Bottom Path (AI Assisted) */}
        <path
          d="M 200 200 C 250 200, 300 320, 450 320 L 590 320 C 650 320, 680 250, 710 200"
          stroke="#000000"
          strokeWidth="2"
          strokeDasharray="5 5"
          fill="none"
          id="path-bot"
           className="opacity-20"
        />

        {/* --- NODES --- */}

        {/* Start Node: ME */}
        <g transform="translate(150, 200)">
          <circle cx="0" cy="0" r="50" stroke="#000000" strokeWidth="3" fill="#FFFFFF" />
          <text x="0" y="5" textAnchor="middle" fill="#000000" fontSize="20" fontFamily="JetBrains Mono" fontWeight="bold">ME</text>
          <text x="0" y="-60" textAnchor="middle" fill="#000000" fontSize="10" fontFamily="JetBrains Mono" opacity="0.6">VISION</text>
        </g>

        {/* AI Node 1 (Middle) */}
        <g transform="translate(520, 200)">
          <rect x="-70" y="-30" width="140" height="60" stroke="#000000" strokeWidth="2" fill="#FFFFFF" />
          <text x="0" y="5" textAnchor="middle" fill="#000000" fontSize="16" fontFamily="JetBrains Mono" letterSpacing="2" fontWeight="bold">AI</text>
          
          <line x1="-70" y1="-10" x2="-60" y2="-10" stroke="#000000" strokeWidth="1" />
          <line x1="-70" y1="10" x2="-60" y2="10" stroke="#000000" strokeWidth="1" />
          <line x1="70" y1="-10" x2="60" y2="-10" stroke="#000000" strokeWidth="1" />
          <line x1="70" y1="10" x2="60" y2="10" stroke="#000000" strokeWidth="1" />
        </g>

        {/* AI Node 2 (Bottom) */}
        <g transform="translate(520, 320)">
          <rect x="-70" y="-30" width="140" height="60" stroke="#000000" strokeWidth="2" fill="#FFFFFF" />
          <text x="0" y="5" textAnchor="middle" fill="#000000" fontSize="16" fontFamily="JetBrains Mono" letterSpacing="2" fontWeight="bold">AI</text>
           
          <line x1="-70" y1="-10" x2="-60" y2="-10" stroke="#000000" strokeWidth="1" />
          <line x1="-70" y1="10" x2="-60" y2="10" stroke="#000000" strokeWidth="1" />
          <line x1="70" y1="-10" x2="60" y2="-10" stroke="#000000" strokeWidth="1" />
          <line x1="70" y1="10" x2="60" y2="10" stroke="#000000" strokeWidth="1" />
        </g>

        {/* End Node: PRODUCT */}
        <g transform="translate(750, 200)">
          <polygon points="-40,0 0,-40 40,0 0,40" stroke="#000000" strokeWidth="3" fill="#FFFFFF" />
          <rect x="-15" y="-15" width="30" height="30" fill="#000000" />
          <text x="0" y="60" textAnchor="middle" fill="#000000" fontSize="12" fontFamily="JetBrains Mono" opacity="0.5">PRODUCT</text>
        </g>


        {/* --- PARTICLES (Motion) --- */}
        
        {/* Top Particle - Black */}
        <circle r="5" fill="#000000">
          <animateMotion dur="6s" repeatCount="indefinite" rotate="auto" keyPoints="0;1" keyTimes="0;1" calcMode="linear">
            <mpath href="#path-top" />
          </animateMotion>
        </circle>

        {/* Mid Particle - Copper */}
        <circle r="4" fill="#DB5A42" filter="url(#glow)">
          <animateMotion dur="3s" repeatCount="indefinite" rotate="auto">
            <mpath href="#path-mid" />
          </animateMotion>
        </circle>
        
        {/* Bot Particle - Copper */}
        <circle r="4" fill="#DB5A42" filter="url(#glow)">
          <animateMotion dur="4s" begin="0.5s" repeatCount="indefinite" rotate="auto">
            <mpath href="#path-bot" />
          </animateMotion>
        </circle>

      </svg>
      
      {/* Legend / Context */}
      <div className="absolute top-4 right-4 text-right pointer-events-none">
        <div className="flex items-center justify-end gap-2 mb-1">
            <span className="text-[10px] font-mono text-black font-bold uppercase">Direct Control</span>
            <div className="w-8 h-[2px] bg-black border-b border-dashed border-black"></div>
        </div>
        <div className="flex items-center justify-end gap-2 mb-1">
            <span className="text-[10px] font-mono text-copper font-bold uppercase">AI Acceleration</span>
            <div className="w-8 h-[2px] bg-copper"></div>
        </div>
      </div>
    </div>
  );
};

export default WorkflowDiagram;