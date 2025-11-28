import React, { ReactNode } from 'react';

interface SectionProps {
  children: ReactNode;
  id?: string;
  title: string;
  number: string; // Kept for logic if needed, but not displayed in industrial way
  className?: string;
}

const Section: React.FC<SectionProps> = ({ children, id, title, number, className = "" }) => {
  return (
    <section id={id} className={`relative md:h-screen min-h-screen w-full shrink-0 flex flex-col overflow-hidden bg-white pt-24 md:pt-0 ${className}`}>
      {/* Clean Header */}
      <div className="relative md:absolute top-0 left-0 w-full px-6 md:p-12 z-20 pointer-events-none">
        <h2 className="text-xl md:text-2xl font-black uppercase tracking-tight text-black/10">{title}</h2>
      </div>

      {/* Content */}
      <div className="w-full h-full flex flex-col justify-center md:overflow-y-auto overflow-visible custom-scrollbar relative z-10">
        {children}
      </div>
    </section>
  );
};

export default Section;