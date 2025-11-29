'use client';

import React from 'react';
import { useParams } from 'next/navigation';
import { experiences } from '../../data';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function ExperienceDetail() {
    const params = useParams();
    const id = Number(params.id);
    const experience = experiences.find(e => e.id === id);

    if (!experience) {
        return (
            <div className="h-screen w-screen flex items-center justify-center bg-paper text-onyx">
                <div className="text-center">
                    <h1 className="text-4xl font-black mb-4">Experience Not Found</h1>
                    <Link href="/" className="text-blue-600 hover:underline">Return Home</Link>
                </div>
            </div>
        );
    }

    return (
        <main className="bg-paper min-h-screen w-full text-onyx selection:bg-black selection:text-white font-sans">
            <div className="max-w-5xl mx-auto px-4 md:px-20 py-12 md:py-24">
                <Link href="/?section=4" className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-widest mb-12 hover:text-gray-500 transition-colors">
                    <span>← Back to Experience</span>
                </Link>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <div className="border-b border-black/10 pb-12 mb-12">
                        <div className="flex flex-col md:flex-row justify-between items-start gap-6 mb-6">
                            <div>
                                <h1 className="text-4xl md:text-6xl font-black tracking-tight mb-4">
                                    {experience.role}
                                </h1>
                                <div className="text-2xl font-bold text-gray-500">
                                    {experience.company}
                                </div>
                            </div>
                            <span className="inline-block bg-black text-white px-6 py-2 rounded-full font-bold text-sm">
                                {experience.period}
                            </span>
                        </div>
                        <p className="text-xl text-gray-600 font-medium max-w-3xl leading-relaxed">
                            {experience.description}
                        </p>
                    </div>

                    <div className="w-full aspect-[21/9] bg-gray-100 rounded-3xl mb-12 flex items-center justify-center border border-black/5 overflow-hidden relative">
                        {experience.image ? (
                            <img src={experience.image} alt={experience.company} className="w-full h-full object-cover" />
                        ) : (
                            <>
                                <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-gray-200" />
                                <span className="relative text-gray-400 font-medium">Company/Role Image Placeholder</span>
                            </>
                        )}
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                        <div className="md:col-span-2">
                            <h2 className="text-2xl font-bold mb-6">Role Overview</h2>
                            <div className="prose prose-lg text-gray-600 leading-relaxed">
                                <p>{experience.details || "No additional details available for this role."}</p>
                                <p className="mt-4">
                                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                                </p>
                                <ul className="list-disc pl-5 mt-4 space-y-2">
                                    <li>Led development of key features</li>
                                    <li>Collaborated with cross-functional teams</li>
                                    <li>Optimized application performance</li>
                                </ul>
                            </div>
                        </div>

                        <div className="bg-gray-50 p-8 rounded-3xl h-fit">
                            <h3 className="font-bold text-lg mb-4">Key Skills</h3>
                            <div className="flex flex-wrap gap-2">
                                {experience.skills?.map((skill) => (
                                    <span key={skill} className="bg-white border border-black/5 px-3 py-1 rounded-lg text-sm font-medium text-gray-600">
                                        {skill}
                                    </span>
                                ))}
                                {!experience.skills && (
                                    <span className="text-gray-400 italic text-sm">No skills listed.</span>
                                )}
                            </div>

                            {experience.link && (
                                <div className="mt-8">
                                    <a
                                        href={experience.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-block bg-black text-white px-8 py-4 rounded-full font-bold uppercase tracking-wider hover:bg-gray-800 transition-colors text-sm"
                                    >
                                        Visit Website
                                    </a>
                                </div>
                            )}
                        </div>
                    </div>
                </motion.div>
            </div>
        </main>
    );
}
