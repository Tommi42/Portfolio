import React from 'react';
import { motion } from 'framer-motion';
import WorkflowDiagram from './WorkflowDiagram';

const WorkflowSection: React.FC = () => {
    return (
        <div className="flex flex-col h-full justify-center px-4 md:px-20 max-w-7xl mx-auto w-full relative">

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center h-full">

                {/* Text Side */}
                <div className="lg:col-span-1 flex flex-col justify-center order-2 lg:order-1">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <h3 className="text-4xl md:text-6xl font-black uppercase mb-6 leading-[0.9] tracking-tighter text-onyx">
                            Human Vision,<br />
                            <span className="text-copper">AI Velocity.</span>
                        </h3>

                        <p className="text-gray-600 text-lg mb-6 leading-relaxed font-medium">
                            Using AI to make better and faster products with a full control of app building workflow.
                            <br /><br />
                            AI* is making working <span className="text-black font-bold bg-yellow-200 px-1">faster</span>, <span className="text-black font-bold bg-yellow-200 px-1">cheaper</span>, and <span className="text-black font-bold bg-yellow-200 px-1">more reliable</span>.
                            <span className="block mt-4 text-xs text-gray-400 opacity-80 tracking-wide font-mono italic">
                                *put that way it sounds perfect
                            </span>
                        </p>

                        <div className="flex flex-col gap-2 mt-4 font-mono text-xs text-black font-bold">
                            <div className="flex items-center gap-2">
                                <span className="w-2 h-2 bg-black rounded-full"></span>
                                <span>REDUCED DEV TIME</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <span className="w-2 h-2 bg-black rounded-full"></span>
                                <span>OPTIMIZED ARCHITECTURE</span>
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* Diagram Side */}
                <div className="lg:col-span-2 w-full order-1 lg:order-2">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8 }}
                        className="w-full bg-white border border-black/10 rounded-lg shadow-xl"
                    >
                        <WorkflowDiagram />
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default WorkflowSection;