import React from 'react';
import { motion } from 'framer-motion';

import { FaArrowRight, FaDownload } from 'react-icons/fa';
import cv from '../assets/Pranav CV.pdf';

const Hero = () => {
    return (
        <section className="relative flex items-center justify-center min-h-screen pt-20 overflow-hidden">
            {/* Background Elements */}
            <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-[100px] animate-pulse-slow"></div>
            <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/20 rounded-full blur-[100px] animate-pulse-slow delay-1000"></div>

            <div className="z-10 px-6 mx-auto text-center max-w-7xl md:px-12 lg:px-24">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <h2 className="mb-4 text-xl font-medium tracking-wide md:text-2xl text-primary">
                        Hello, I'm
                    </h2>
                    <h1 className="mb-6 text-5xl font-bold text-transparent md:text-7xl lg:text-8xl font-heading bg-clip-text bg-gradient-to-r from-white via-gray-200 to-gray-400">
                        Pranav Raychure
                    </h1>
                    <h3 className="mb-8 text-2xl font-light text-gray-300 md:text-4xl">
                        <span className="font-semibold text-secondary">Full Stack Developer</span>
                        <span className="hidden md:inline"> | </span>
                        <span className="block mt-2 md:inline md:mt-0">Java & React Specialist</span>
                    </h3>

                    <p className="max-w-2xl mx-auto mb-10 text-lg leading-relaxed text-gray-400">
                        I build modern, scalable web applications with Spring Boot and React.
                        Passionate about microservices, cloud technologies, and creating stunning user experiences.
                    </p>

                    <div className="flex flex-col items-center justify-center gap-6 md:flex-row">
                        <a href="#projects" className="flex items-center gap-2 btn-primary group">
                            View My Work
                            <FaArrowRight className="transition-transform group-hover:translate-x-1" />
                        </a>

                        <a
                            href= "#"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 px-6 py-3 font-medium text-white transition-all duration-300 border rounded-full bg-white/5 border-white/10 hover:bg-white/10"
                        >
                            Download CV
                            <FaDownload />
                        </a>
                    </div>
                </motion.div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                className="absolute transform -translate-x-1/2 bottom-10 left-1/2"
                animate={{ y: [0, 10, 0] }}
                transition={{ repeat: Infinity, duration: 2 }}
            >
                <div className="flex justify-center w-6 h-10 p-1 border-2 border-gray-500 rounded-full">
                    <div className="w-1 h-2 rounded-full bg-primary"></div>
                </div>
            </motion.div>
        </section>
    );
};

export default Hero;
