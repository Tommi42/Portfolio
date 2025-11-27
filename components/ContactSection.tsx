import React from 'react';
import { motion } from 'framer-motion';

const ContactSection: React.FC = () => {
  return (
    <section className="relative h-screen w-full shrink-0 flex flex-col bg-onyx border-t border-white/10 overflow-hidden">
         <div className="container mx-auto px-6 h-full flex flex-col justify-center items-center text-center relative z-10">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
            >
                <span className="font-mono text-gold text-sm tracking-widest mb-4 block">Let's initialize a connection</span>
                <motion.h2 
                    className="text-5xl md:text-8xl font-black uppercase tracking-tighter mb-10 interactive hover:text-gold transition-colors cursor-none"
                    whileHover={{ scale: 1.05 }}
                >
                    Let's Build<br/>The Future
                </motion.h2>
            </motion.div>
            
            <div className="flex flex-col md:flex-row justify-center gap-8 mb-20 font-mono text-sm md:text-base text-copper">
                <a href="mailto:email@example.com" className="border border-white/10 px-8 py-4 hover:bg-white/5 hover:text-white transition-all interactive">
                    SEND_EMAIL
                </a>
                <a href="#" className="border border-white/10 px-8 py-4 hover:bg-white/5 hover:text-white transition-all interactive">
                    LINKEDIN_PROFILE
                </a>
                <a href="#" className="border border-white/10 px-8 py-4 hover:bg-white/5 hover:text-white transition-all interactive">
                    GITHUB_REPO
                </a>
            </div>

            <div className="absolute bottom-10 left-0 w-full flex justify-between items-end px-10 pt-6 text-xs font-mono text-gray-600 border-t border-white/10">
                <span>© 2024 TOMMASO CAMBURSANO</span>
                <span className="flex items-center gap-2">
                    SYSTEM STATUS: 
                    <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                    NORMAL
                </span>
            </div>
         </div>
         
         {/* Decorative huge footer text */}
         <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[20vw] font-bold text-white/5 pointer-events-none whitespace-nowrap z-0">
            CONTACT
         </div>
    </section>
  );
};

export default ContactSection;