import React from 'react';
import { Experience } from '../types';
import { motion } from 'framer-motion';

const experiences: Experience[] = [
  {
    id: 1,
    role: "Senior Frontend Developer",
    company: "TECH_CORP_01",
    period: "2022 - PRESENT",
    description: "Developing high-performance user interfaces for industrial dashboards using React and WebGL."
  },
  {
    id: 2,
    role: "Full Stack Engineer",
    company: "STARTUP_LABS",
    period: "2020 - 2022",
    description: "Architected scalable backend systems and integrated them with minimal frontend designs."
  },
  {
    id: 3,
    role: "Junior Developer",
    company: "AGENCY_XY",
    period: "2018 - 2020",
    description: "Collaborated on award-winning creative websites with a focus on motion design."
  }
];

const ExperienceList: React.FC = () => {
  return (
    <div className="flex flex-col gap-0 border border-white/10">
      {experiences.map((exp) => (
        <motion.div 
            key={exp.id}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            whileHover={{ backgroundColor: 'rgba(189, 191, 9, 0.05)' }}
            className="group relative p-8 md:p-12 border-b border-white/10 last:border-b-0 transition-colors duration-300 interactive"
        >
            <div className="flex flex-col md:flex-row md:items-baseline justify-between gap-4 mb-4">
                <h3 className="text-2xl font-bold text-white group-hover:text-gold transition-colors font-mono">
                    {exp.role}
                </h3>
                <span className="text-copper font-mono text-sm">{exp.period}</span>
            </div>
            <div className="flex flex-col md:flex-row gap-8">
                <div className="md:w-1/4">
                    <span className="text-sm text-gray-500 uppercase tracking-wider block mb-1">Company</span>
                    <span className="font-bold text-lg">{exp.company}</span>
                </div>
                <div className="md:w-3/4">
                    <p className="text-gray-400 leading-relaxed max-w-2xl">{exp.description}</p>
                </div>
            </div>
            
            {/* Corner Accent */}
            <div className="absolute top-0 right-0 w-0 h-0 border-t-[20px] border-r-[20px] border-t-transparent border-r-transparent group-hover:border-r-gold transition-all duration-300"></div>
        </motion.div>
      ))}
    </div>
  );
};

export default ExperienceList;