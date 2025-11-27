import React from 'react';

const GridBackground: React.FC = () => {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none opacity-20">
      <div 
        className="absolute inset-0" 
        style={{
            backgroundSize: '60px 60px',
            backgroundImage: 'linear-gradient(to right, #333 1px, transparent 1px), linear-gradient(to bottom, #333 1px, transparent 1px)'
        }}
      />
      <div className="absolute top-0 right-0 p-10 font-mono text-xs text-copper opacity-50">
        SYS.GRID.V.1.0
      </div>
      <div className="absolute bottom-0 left-0 p-10 font-mono text-xs text-teal opacity-50">
        COORD: 45.0703° N, 7.6869° E
      </div>
    </div>
  );
};

export default GridBackground;