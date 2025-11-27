import React from 'react';

const GridBackground: React.FC = () => {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none opacity-40">
      <div 
        className="absolute inset-0" 
        style={{
            backgroundSize: '60px 60px',
            backgroundImage: 'linear-gradient(to right, #000 1px, transparent 1px), linear-gradient(to bottom, #000 1px, transparent 1px)',
            opacity: 0.05
        }}
      />
    </div>
  );
};

export default GridBackground;