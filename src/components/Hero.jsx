import React from 'react';
import { motion } from 'framer-motion';

import { FaArrowRight, FaDownload } from 'react-icons/fa';

const Hero = () => {
    return (
        <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
            {/* Background Elements */}
            <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-[100px] animate-pulse-slow"></div>
            <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/20 rounded-full blur-[100px] animate-pulse-slow delay-1000"></div>

            <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <h2 className="text-xl md:text-2xl text-primary font-medium mb-4 tracking-wide">
                        Hello, I'm
                    </h2>
                    <h1 className="text-5xl md:text-7xl lg:text-8xl font-heading font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white via-gray-200 to-gray-400">
                        Pranav Raychure
                    </h1>
                    <h3 className="text-2xl md:text-4xl text-gray-300 mb-8 font-light">
                        <span className="text-secondary font-semibold">Full Stack Developer</span>
                        <span className="hidden md:inline"> | </span>
                        <span className="block md:inline mt-2 md:mt-0">Java & React Specialist</span>
                    </h3>

                    <p className="text-gray-400 max-w-2xl mx-auto mb-10 text-lg leading-relaxed">
                        I build modern, scalable web applications with Spring Boot and React.
                        Passionate about microservices, cloud technologies, and creating stunning user experiences.
                    </p>

                    <div className="flex flex-col md:flex-row items-center justify-center gap-6">
                        <a href="#projects" className="btn-primary group flex items-center gap-2">
                            View My Work
                            <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
                        </a>

                        <a
                            href="/Pranav%20CV.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-6 py-3 bg-white/5 text-white border border-white/10 rounded-full 
                         hover:bg-white/10 transition-all duration-300 font-medium flex items-center gap-2"
                        >
                            Download CV
                            <FaDownload />
                        </a>
                    </div>
                </motion.div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
                animate={{ y: [0, 10, 0] }}
                transition={{ repeat: Infinity, duration: 2 }}
            >
                <div className="w-6 h-10 border-2 border-gray-500 rounded-full flex justify-center p-1">
                    <div className="w-1 h-2 bg-primary rounded-full"></div>
                </div>
            </motion.div>
        </section>
    );
};

export default Hero;
