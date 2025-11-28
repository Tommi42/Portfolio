import React from 'react';
import { motion } from 'framer-motion';
import { SparkDoodle } from './Doodles';

const ContactSection: React.FC = () => {
    return (
        <section className="relative h-screen w-full shrink-0 flex flex-col bg-white overflow-hidden">
            <div className="container mx-auto px-6 h-full flex flex-col justify-center items-center text-center relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="relative"
                >
                    <span className="text-gray-400 text-sm tracking-wide mb-4 block font-medium">Get in touch</span>
                    <motion.h2
                        className="text-4xl md:text-9xl font-black uppercase tracking-tighter mb-10 interactive hover:text-copper transition-colors cursor-none text-black relative z-10"
                        whileHover={{ scale: 1.05 }}
                    >
                        Let's Build<br />The Future
                    </motion.h2>

                    {/* Decoration */}
                    <div className="absolute -top-10 -right-10 text-black opacity-20">
                        <SparkDoodle className="w-32 h-32" />
                    </div>
                </motion.div>

                <div className="flex flex-col md:flex-row justify-center gap-6 mb-20 font-sans text-sm md:text-base text-black font-semibold">
                    <a href="mailto:t.cambursano@gmail.com" className="bg-white border border-gray-200 px-10 py-4 rounded-full hover:bg-black hover:text-white transition-all interactive shadow-sm hover:shadow-xl hover:-translate-y-1">
                        Email
                    </a>
                    <a href="https://www.linkedin.com/in/tommaso-cambursano-4084972b8/" className="bg-white border border-gray-200 px-10 py-4 rounded-full hover:bg-black hover:text-white transition-all interactive shadow-sm hover:shadow-xl hover:-translate-y-1">
                        LinkedIn
                    </a>
                    <a href="https://github.com/Tommi42" className="bg-white border border-gray-200 px-10 py-4 rounded-full hover:bg-black hover:text-white transition-all interactive shadow-sm hover:shadow-xl hover:-translate-y-1">
                        GitHub
                    </a>
                </div>

                <div className="absolute bottom-10 left-0 w-full flex justify-center items-end px-10 pt-6 text-xs text-gray-400">
                    <span>© 2024 TOMMASO CAMBURSANO</span>
                </div>
            </div>

            {/* Decorative huge footer text */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[15vw] md:text-[20vw] font-bold text-black/5 pointer-events-none whitespace-nowrap z-0">
                CONTACT
            </div>
        </section>
    );
};

export default ContactSection;