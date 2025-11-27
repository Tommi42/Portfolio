
import React, { useState, useEffect, useCallback, useRef } from 'react';
import GridBackground from './components/GridBackground';
import CustomCursor from './components/CustomCursor';
import Hero from './components/Hero';
import Section from './components/Section';
import ExperienceList from './components/ExperienceList';
import ProjectGrid from './components/ProjectGrid';
import RunningText from './components/RunningText';
import ContactSection from './components/ContactSection';
import WorkflowSection from './components/WorkflowSection';
import Navigation from './components/Navigation';
import { motion, AnimatePresence } from 'framer-motion';

const App: React.FC = () => {
  const [currentSection, setCurrentSection] = useState(0);
  const totalSections = 6;
  const isScrolling = useRef(false);
  const lastScrollTime = useRef(0);

  // Constants for scroll debounce
  const SCROLL_COOLDOWN = 800; // ms between section switches

  const changeSection = useCallback((direction: 'next' | 'prev') => {
    const now = Date.now();
    if (now - lastScrollTime.current < SCROLL_COOLDOWN) return;
    
    setCurrentSection(prev => {
      if (direction === 'next') {
        return Math.min(prev + 1, totalSections - 1);
      } else {
        return Math.max(prev - 1, 0);
      }
    });
    
    lastScrollTime.current = now;
  }, [totalSections]);

  const handleWheel = useCallback((e: WheelEvent) => {
    // Prevent default slightly aggressive to stop jitter, 
    // but check if we are scrolling inside a container
    // For this specific logic, we assume the page is locked to viewport
    // and internal scrollbars handle their own overflow if needed.
    // However, simplest is to just capture the major page movement.
    
    if (Math.abs(e.deltaY) > 20) {
        if (e.deltaY > 0) {
            changeSection('next');
        } else {
            changeSection('prev');
        }
    }
  }, [changeSection]);

  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    if (e.key === 'ArrowDown' || e.key === 'PageDown') {
      e.preventDefault();
      changeSection('next');
    } else if (e.key === 'ArrowUp' || e.key === 'PageUp') {
      e.preventDefault();
      changeSection('prev');
    }
  }, [changeSection]);

  useEffect(() => {
    window.addEventListener('wheel', handleWheel, { passive: false });
    window.addEventListener('keydown', handleKeyDown);
    
    return () => {
      window.removeEventListener('wheel', handleWheel);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [handleWheel, handleKeyDown]);

  return (
    <main className="bg-onyx text-gray-200 h-screen w-screen overflow-hidden relative selection:bg-gold selection:text-onyx font-sans">
      <CustomCursor />
      <GridBackground />
      
      {/* Fixed Header */}
      <header className="fixed top-0 left-0 w-full z-40 pointer-events-none p-6 md:p-8 flex justify-between items-start font-mono text-xs uppercase mix-blend-difference text-white">
        <motion.div 
            className="flex flex-col gap-1"
            initial={{ opacity: 1, y: 0 }}
            animate={{ 
                opacity: currentSection === 0 ? 1 : 0,
                y: currentSection === 0 ? 0 : -20
            }}
            transition={{ duration: 0.5 }}
        >
            <span className="font-bold tracking-widest">Tommaso Cambursano</span>
            <span className="opacity-50">Software Developer</span>
        </motion.div>
        
        <div className="flex flex-col items-end gap-1 text-right">
            <span className="flex items-center gap-2">
                <span className="w-2 h-2 bg-gold rounded-full animate-pulse"></span>
                ONLINE
            </span>
            <span className="opacity-50">Everywhere, Earth</span>
        </div>
      </header>

      {/* Side Navigation */}
      <Navigation 
        currentSection={currentSection} 
        totalSections={totalSections} 
        onSelect={(index) => setCurrentSection(index)} 
      />

      {/* Main Sliding Container */}
      <motion.div
        className="h-full w-full"
        animate={{ y: `-${currentSection * 100}%` }}
        transition={{ 
            duration: 0.8, 
            ease: [0.6, 0.05, -0.01, 0.9] // Custom bezier for "inertial" feel
        }}
      >
          {/* 01: HERO */}
          <Hero onNext={() => setCurrentSection(1)} />

          {/* 02: OVERVIEW */}
          <Section id="about" title="Overview" number="01">
            <div className="flex flex-col h-full justify-center pb-20 px-4 md:px-20 max-w-7xl mx-auto w-full">
                <div className="mb-8">
                    <RunningText text="DESIGN • CODE • DEPLOY •" direction="left" />
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-lg leading-relaxed text-gray-400">
                    <p>
                        <span className="text-white font-bold">Hello.</span> I am a software developer freelancer :)
                        <br></br>I always try to do the best that i can in the most fun way possible.
                    </p>
                    <div className="md:col-span-2 pt-8">
                        <h3 className="text-copper font-mono text-sm mb-4">CORE_STACK:</h3>
                        <ul className="grid grid-cols-2 md:grid-cols-4 gap-4 font-mono text-sm text-teal">
                            <li className="border border-white/10 p-3 text-center hover:bg-white/5 transition-colors">Python</li>
                            <li className="border border-white/10 p-3 text-center hover:bg-white/5 transition-colors">Docker</li>
                            <li className="border border-white/10 p-3 text-center hover:bg-white/5 transition-colors">SQL / SQLAlchemy</li>
                            <li className="border border-white/10 p-3 text-center hover:bg-white/5 transition-colors">Next.js</li>
                        </ul>
                    </div>
                </div>
            </div>
          </Section>

          {/* 03: WORKFLOW (New) */}
          <Section id="workflow" title="How I Work" number="02">
             <WorkflowSection />
          </Section>

          {/* 04: WORKS */}
          <Section id="projects" title="Selected Works" number="03">
             <div className="h-full flex flex-col justify-center">
                <ProjectGrid />
             </div>
          </Section>

          {/* 05: EXPERIENCE */}
          <Section id="experience" title="Experience" number="04">
             <div className="flex flex-col h-full justify-center pb-20 px-4 md:px-20 max-w-7xl mx-auto w-full">
                <ExperienceList />
                <div className="mt-8">
                    <RunningText text="INNOVATION • SYSTEM • LOGIC •" direction="right" />
                </div>
             </div>
          </Section>

          {/* 06: CONTACT */}
          <ContactSection />

      </motion.div>
    </main>
  );
};

export default App;