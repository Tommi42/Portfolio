import React from 'react';
import { Experience } from '../types';
import { motion } from 'framer-motion';

const experiences: Experience[] = [
  {
    id: 1,
    role: "Freelancing developer",
    company: "Now",
    period: "2025 - Present",
    description: "Developing and helping with a wide range digital application"
  },
  {
    id: 2,
    role: "Junior Deveoper",
    company: "Company - FiTec",
    period: "2024- 2025",
    description: "Junior developer part-time. Working on full chatbot system."
  },
  {
    id: 3,
    role: "Politecnico di Torino",
    company: "Bachelor - Computer Engineer",
    period: "2022 - 2025",
    description: "Studing computer engineering at the 16th ranked university (Times Higher Education rank)"
  }
];

const ExperienceList: React.FC = () => {
  return (
    <div className="flex flex-col gap-0 w-full border-t border-black/5">
      {experiences.map((exp) => (
        <motion.div 
            key={exp.id}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            whileHover={{ backgroundColor: '#F9FAFB' }} // Very light gray on hover
            className="group relative w-full border-b border-black/5 transition-colors duration-300 interactive"
        >
            {/* Inner container to constrain content but allow full-width background */}
            <div className="max-w-7xl mx-auto px-4 md:px-20 py-12">
                <div className="flex flex-col md:flex-row md:items-baseline justify-between gap-4 mb-4">
                    <h3 className="text-3xl font-bold text-black group-hover:text-copper transition-colors font-sans tracking-tight">
                        {exp.role}
                    </h3>
                    <span className="text-gray-500 font-medium text-sm bg-gray-100 px-3 py-1 rounded-full">{exp.period}</span>
                </div>
                <div className="flex flex-col md:flex-row gap-8">
                    <div className="md:w-1/4">
                        <span className="text-xs text-gray-400 uppercase tracking-widest block mb-1 font-bold"></span>
                        <span className="font-bold text-lg text-black">{exp.company}</span>
                    </div>
                    <div className="md:w-3/4">
                        <p className="text-gray-600 leading-relaxed max-w-2xl font-medium text-lg">{exp.description}</p>
                    </div>
                </div>
            </div>
        </motion.div>
      ))}
    </div>
  );
};

export default ExperienceList;