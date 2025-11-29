'use client';

import React from 'react';
import { useParams, useRouter } from 'next/navigation';
import { projects } from '../../data';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function WorkDetail() {
    const params = useParams();
    const router = useRouter();
    const id = Number(params.id);
    const project = projects.find(p => p.id === id);

    if (!project) {
        return (
            <div className="h-screen w-screen flex items-center justify-center bg-paper text-onyx">
                <div className="text-center">
                    <h1 className="text-4xl font-black mb-4">Project Not Found</h1>
                    <Link href="/" className="text-blue-600 hover:underline">Return Home</Link>
                </div>
            </div>
        );
    }

    return (
        <main className="bg-paper min-h-screen w-full text-onyx selection:bg-black selection:text-white font-sans">
            <div className="max-w-7xl mx-auto px-4 md:px-20 py-12 md:py-24">
                <Link href="/?section=3" className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-widest mb-12 hover:text-gray-500 transition-colors">
                    <span>← Back to Works</span>
                </Link>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <div className="flex flex-col md:flex-row gap-8 items-start mb-16">
                        <div className="flex-1">
                            <span className="inline-block px-4 py-1 rounded-full border border-black/10 text-sm font-semibold mb-6">
                                {project.category}
                            </span>
                            <h1 className="text-5xl md:text-7xl font-black tracking-tight mb-6 leading-tight">
                                {project.title}
                            </h1>
                            <p className="text-xl md:text-2xl text-gray-600 font-medium max-w-2xl leading-relaxed">
                                {project.description}
                            </p>
                        </div>
                        <div className="md:text-right">
                            <span className="block text-sm font-bold uppercase tracking-widest text-gray-400 mb-2">Year</span>
                            <span className="text-2xl font-bold">{project.year}</span>
                        </div>
                    </div>

                    <div className="w-full aspect-video bg-gray-100 rounded-3xl mb-16 flex items-center justify-center border border-black/5 overflow-hidden relative">
                        {project.image ? (
                            <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
                        ) : (
                            <>
                                <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-gray-200" />
                                <span className="relative text-gray-400 font-medium">Project Image Placeholder</span>
                            </>
                        )}
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                        <div className="md:col-span-2">
                            <h2 className="text-2xl font-bold mb-6">About the Project</h2>
                            <div className="prose prose-lg text-gray-600 leading-relaxed">
                                <p>{project.details || "No additional details available for this project."}</p>

                            </div>
                        </div>
                        <div>
                            <h2 className="text-2xl font-bold mb-6">Technologies</h2>
                            <ul className="space-y-3">
                                {project.skills?.map((skill, index) => (
                                    <li key={index} className="flex items-center gap-3 text-gray-600 font-medium">
                                        <span className="w-2 h-2 bg-black rounded-full"></span>
                                        {skill}
                                    </li>
                                ))}
                                {!project.skills && (
                                    <li className="text-gray-400 italic">No technologies listed.</li>
                                )}
                            </ul>

                            {project.link && (
                                <div className="mt-10">
                                    <a
                                        href={project.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-block bg-black text-white px-8 py-4 rounded-full font-bold uppercase tracking-wider hover:bg-gray-800 transition-colors"
                                    >
                                        Visit Project
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
