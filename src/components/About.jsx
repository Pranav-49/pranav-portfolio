import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
    return (
        <section className="min-h-screen py-20 px-6 md:px-12 lg:px-24 flex items-center">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-4xl md:text-5xl font-heading font-bold mb-12 text-center">
                        About <span className="text-primary">Me</span>
                    </h2>

                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div className="space-y-6 text-gray-300 text-lg leading-relaxed">
                            <p>
                                Hi! I'm <span className="text-white font-semibold">Pranav Raychure</span>, a passionate Full Stack Developer.
                                I specialize in building robust, scalable web applications using <span className="text-primary">Java Spring Boot</span> and <span className="text-primary">React.js</span>.
                            </p>
                            <p>
                                My journey in tech began with a deep curiosity for how things work under the hood, which led me to master Core Java and Data Structures.
                                Over time, I expanded my skill set to include modern web technologies, microservices architecture, and cloud solutions.
                            </p>
                            <p>
                                I recently completed a trainee role at <span className="text-secondary">Zensar / RPG Foundation</span>, where I worked on a GST Management System,
                                honing my skills in Python and PL/SQL. I'm always eager to learn new technologies and solve complex problems.
                            </p>

                            <div className="pt-6">
                                <h3 className="text-xl font-semibold text-white mb-6">Education</h3>
                                <ul className="space-y-8 border-l-2 border-primary/30 pl-6">
                                    <motion.li
                                        className="relative"
                                        initial={{ opacity: 0, x: -20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        transition={{ duration: 0.5, delay: 0.2 }}
                                        viewport={{ once: true }}
                                    >
                                        <span className="absolute -left-[31px] top-1 w-4 h-4 rounded-full bg-primary shadow-[0_0_10px_rgba(0,243,255,0.6)]"></span>
                                        <h4 className="text-white font-medium text-lg">Amrutvahini College of Engineering, Sangamner</h4>
                                        <p className="text-gray-300">B.E. in Computer Engineering <span className="text-sm text-gray-500 ml-2">(2022–2026)</span></p>
                                        <p className="text-sm text-primary mt-1 font-medium">CGPA: 7.46</p>
                                    </motion.li>

                                    <motion.li
                                        className="relative"
                                        initial={{ opacity: 0, x: -20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        transition={{ duration: 0.5, delay: 0.3 }}
                                        viewport={{ once: true }}
                                    >
                                        <span className="absolute -left-[31px] top-1 w-4 h-4 rounded-full bg-primary shadow-[0_0_10px_rgba(0,243,255,0.6)]"></span>
                                        <h4 className="text-white font-medium text-lg">S. M. P. School and Jr. College, Akluj</h4>
                                        <p className="text-gray-300">Higher Secondary Certificate (HSC), Science <span className="text-sm text-gray-500 ml-2">(2021–2022)</span></p>
                                        <p className="text-sm text-primary mt-1 font-medium">Percentage: 81%</p>
                                    </motion.li>

                                    <motion.li
                                        className="relative"
                                        initial={{ opacity: 0, x: -20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        transition={{ duration: 0.5, delay: 0.4 }}
                                        viewport={{ once: true }}
                                    >
                                        <span className="absolute -left-[31px] top-1 w-4 h-4 rounded-full bg-primary shadow-[0_0_10px_rgba(0,243,255,0.6)]"></span>
                                        <h4 className="text-white font-medium text-lg">Shree Uttreshwar High School, Kem</h4>
                                        <p className="text-gray-300">Secondary School Certificate (SSC) <span className="text-sm text-gray-500 ml-2">(2019–2020)</span></p>
                                        <p className="text-sm text-primary mt-1 font-medium">Percentage: 89.80%</p>
                                    </motion.li>
                                </ul>
                            </div>
                        </div>

                        <div className="relative">
                            <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary rounded-2xl blur-2xl opacity-20"></div>
                            <div className="relative bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur-sm">
                                <h3 className="text-2xl font-bold text-white mb-6">Quick Highlights</h3>
                                <div className="grid grid-cols-2 gap-4">
                                    <div className="p-4 bg-white/5 rounded-xl text-center hover:bg-white/10 transition-colors">
                                        <span className="block text-3xl font-bold text-primary mb-1">5+</span>
                                        <span className="text-sm text-gray-400">Projects Completed</span>
                                    </div>
                                    <div className="p-4 bg-white/5 rounded-xl text-center hover:bg-white/10 transition-colors">
                                        <span className="block text-3xl font-bold text-secondary mb-1">1+</span>
                                        <span className="text-sm text-gray-400">Years Coding</span>
                                    </div>
                                    <div className="p-4 bg-white/5 rounded-xl text-center hover:bg-white/10 transition-colors">
                                        <span className="block text-3xl font-bold text-primary mb-1">3+</span>
                                        <span className="text-sm text-gray-400">Certifications</span>
                                    </div>
                                    <div className="p-4 bg-white/5 rounded-xl text-center hover:bg-white/10 transition-colors">
                                        <span className="block text-3xl font-bold text-secondary mb-1">100%</span>
                                        <span className="text-sm text-gray-400">Commitment</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default About;
