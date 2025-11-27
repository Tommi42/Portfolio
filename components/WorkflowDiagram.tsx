
import React from 'react';
import { motion } from 'framer-motion';

const WorkflowDiagram: React.FC = () => {
  return (
    <div className="w-full max-w-4xl mx-auto aspect-[16/9] relative p-4 select-none">
      <svg className="w-full h-full" viewBox="0 0 800 400" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto">
            <polygon points="0 0, 10 3.5, 0 7" fill="#689689" />
          </marker>
          <filter id="glow">
            <feGaussianBlur stdDeviation="2.5" result="coloredBlur"/>
            <feMerge>
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
        </defs>

        {/* --- PATHS --- */}
        
        {/* Top Path (Direct Human Control - No AI) */}
        {/* Arcs directly from ME to PRODUCT over the AI boxes */}
        <path
          d="M 200 200 C 300 50, 600 50, 710 200"
          stroke="rgba(219, 90, 66, 0.4)" 
          strokeWidth="2"
          strokeDasharray="5 5"
          fill="none"
          id="path-top"
        />

        {/* Middle Path (AI Assisted) */}
        <path
          d="M 200 200 L 450 200 L 710 200"
          stroke="rgba(255,255,255,0.1)"
          strokeWidth="2"
          strokeDasharray="5 5"
          fill="none"
          id="path-mid"
        />

        {/* Bottom Path (AI Assisted) */}
        <path
          d="M 200 200 C 250 200, 300 320, 450 320 L 590 320 C 650 320, 680 250, 710 200"
          stroke="rgba(255,255,255,0.1)"
          strokeWidth="2"
          strokeDasharray="5 5"
          fill="none"
          id="path-bot"
        />

        {/* --- NODES --- */}

        {/* Start Node: ME */}
        <g transform="translate(150, 200)">
          <circle cx="0" cy="0" r="50" stroke="#BDBF09" strokeWidth="2" fill="#0F0E0E" />
          <text x="0" y="5" textAnchor="middle" fill="#BDBF09" fontSize="20" fontFamily="JetBrains Mono" fontWeight="bold">ME</text>
          <text x="0" y="-60" textAnchor="middle" fill="#689689" fontSize="10" fontFamily="JetBrains Mono">VISION</text>
        </g>

        {/* AI Node 1 (Middle) */}
        <g transform="translate(520, 200)">
          <rect x="-70" y="-30" width="140" height="60" stroke="#689689" strokeWidth="1" fill="#0F0E0E" />
          <text x="0" y="5" textAnchor="middle" fill="#689689" fontSize="16" fontFamily="JetBrains Mono" letterSpacing="2">AI</text>
          
          {/* Decorative tech lines on box */}
          <line x1="-70" y1="-10" x2="-60" y2="-10" stroke="#689689" strokeWidth="1" />
          <line x1="-70" y1="10" x2="-60" y2="10" stroke="#689689" strokeWidth="1" />
          <line x1="70" y1="-10" x2="60" y2="-10" stroke="#689689" strokeWidth="1" />
          <line x1="70" y1="10" x2="60" y2="10" stroke="#689689" strokeWidth="1" />
        </g>

        {/* AI Node 2 (Bottom) */}
        <g transform="translate(520, 320)">
          <rect x="-70" y="-30" width="140" height="60" stroke="#689689" strokeWidth="1" fill="#0F0E0E" />
          <text x="0" y="5" textAnchor="middle" fill="#689689" fontSize="16" fontFamily="JetBrains Mono" letterSpacing="2">AI</text>
           
          {/* Decorative tech lines on box */}
          <line x1="-70" y1="-10" x2="-60" y2="-10" stroke="#689689" strokeWidth="1" />
          <line x1="-70" y1="10" x2="-60" y2="10" stroke="#689689" strokeWidth="1" />
          <line x1="70" y1="-10" x2="60" y2="-10" stroke="#689689" strokeWidth="1" />
          <line x1="70" y1="10" x2="60" y2="10" stroke="#689689" strokeWidth="1" />
        </g>

        {/* End Node: PRODUCT */}
        <g transform="translate(750, 200)">
          <polygon points="-40,0 0,-40 40,0 0,40" stroke="#FFFFFF" strokeWidth="2" fill="#0F0E0E" />
          <rect x="-15" y="-15" width="30" height="30" fill="#FFFFFF" />
          <text x="0" y="60" textAnchor="middle" fill="#FFFFFF" fontSize="12" fontFamily="JetBrains Mono" opacity="0.5">PRODUCT</text>
        </g>


        {/* --- PARTICLES (Motion) --- */}
        
        {/* Top Particle (Direct Human) - Copper Color */}
        <circle r="4" fill="#DB5A42" filter="url(#glow)">
          <animateMotion dur="6s" repeatCount="indefinite" rotate="auto" keyPoints="0;1" keyTimes="0;1" calcMode="linear">
            <mpath href="#path-top" />
          </animateMotion>
        </circle>

        {/* Mid Particle (AI) - Gold Color */}
        <circle r="4" fill="#BDBF09" filter="url(#glow)">
          <animateMotion dur="3s" repeatCount="indefinite" rotate="auto">
            <mpath href="#path-mid" />
          </animateMotion>
        </circle>
        
        {/* Bot Particle (AI) - Gold Color */}
        <circle r="4" fill="#BDBF09" filter="url(#glow)">
          <animateMotion dur="4s" begin="0.5s" repeatCount="indefinite" rotate="auto">
            <mpath href="#path-bot" />
          </animateMotion>
        </circle>

      </svg>
      
      {/* Legend / Context */}
      <div className="absolute top-4 right-4 text-right pointer-events-none">
        <div className="flex items-center justify-end gap-2 mb-1">
            <span className="text-[10px] font-mono text-copper uppercase">Direct Control</span>
            <div className="w-8 h-[2px] bg-copper/50 border-b border-dashed border-copper"></div>
        </div>
        <div className="flex items-center justify-end gap-2 mb-1">
            <span className="text-[10px] font-mono text-teal uppercase">AI Acceleration</span>
            <div className="w-8 h-[2px] bg-teal/50"></div>
        </div>
      </div>
    </div>
  );
};

export default WorkflowDiagram;
