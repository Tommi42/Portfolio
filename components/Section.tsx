
import React, { ReactNode } from 'react';

interface SectionProps {
  children: ReactNode;
  id?: string;
  title: string;
  number: string;
  className?: string;
}

const Section: React.FC<SectionProps> = ({ children, id, title, number, className = "" }) => {
  return (
    <section id={id} className={`relative h-screen w-full shrink-0 flex flex-col border-b border-white/10 overflow-hidden ${className}`}>
      {/* Industrial Header for Section */}
      <div className="flex justify-between items-center py-6 px-8 border-b border-white/10 bg-onyx/95 backdrop-blur-sm z-20 shrink-0">
        <div className="flex items-center gap-4">
            <span className="text-copper font-mono text-sm tracking-widest">({number})</span>
            <h2 className="text-xl md:text-2xl font-bold uppercase tracking-tighter">{title}</h2>
        </div>
        <div className="hidden md:block w-32 h-[1px] bg-copper/50"></div>
      </div>
      
      {/* Content - Flex grow to fill remaining height, centered */}
      <div className="flex-grow relative flex flex-col justify-center overflow-hidden">
         {/* Vertical Decorative Lines - Only visible if we have padding, but for carousel we might want full width. 
             We'll keep them but z-index them behind content. */}
         <div className="absolute left-8 top-0 bottom-0 w-[1px] bg-white/5 hidden md:block pointer-events-none z-0"></div>
         <div className="absolute right-8 top-0 bottom-0 w-[1px] bg-white/5 hidden md:block pointer-events-none z-0"></div>
         
         {/* Updated container: Removing default padding constraints for children to allow full-width components (like carousel) */}
         <div className="w-full h-full flex flex-col justify-center overflow-y-auto custom-scrollbar relative z-10">
             {children}
         </div>
      </div>
    </section>
  );
};

export default Section;
