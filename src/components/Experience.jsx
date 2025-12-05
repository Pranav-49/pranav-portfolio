import React from 'react';
import { motion } from 'framer-motion';
import { FaBriefcase, FaCalendarAlt } from 'react-icons/fa';

const ExperienceCard = ({ experience, index }) => {
    return (
        <motion.div
            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true }}
            className="relative pl-8 md:pl-0"
        >
            {/* Timeline Line */}
            <div className="md:hidden absolute left-0 top-0 bottom-0 w-0.5 bg-white/10"></div>
            <div className="md:hidden absolute left-[-4px] top-0 w-2.5 h-2.5 rounded-full bg-primary"></div>

            <div className={`md:flex items-center justify-between ${index % 2 === 0 ? 'md:flex-row-reverse' : ''} gap-8`}>
                <div className="hidden md:block w-5/12"></div>

                <div className="hidden md:flex flex-col items-center w-2/12">
                    <div className="w-4 h-4 rounded-full bg-primary shadow-[0_0_10px_rgba(0,243,255,0.6)] z-10"></div>
                    <div className="h-full w-0.5 bg-white/10 absolute top-4 bottom-[-4rem]"></div>
                </div>

                <div className="md:w-5/12 bg-white/5 border border-white/10 p-6 rounded-2xl hover:bg-white/10 transition-colors">
                    <div className="flex items-center gap-2 text-primary mb-2">
                        <FaBriefcase />
                        <span className="font-medium">{experience.role}</span>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-1">{experience.company}</h3>
                    <div className="flex items-center gap-2 text-gray-400 text-sm mb-4">
                        <FaCalendarAlt />
                        <span>{experience.period}</span>
                    </div>
                    <p className="text-gray-300 text-sm leading-relaxed mb-4">
                        {experience.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                        {experience.tech.map((t, i) => (
                            <span key={i} className="text-xs bg-black/30 text-gray-400 px-2 py-1 rounded border border-white/5">
                                {t}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

const Experience = () => {
    const experiences = [
        {
            role: "Trainee",
            company: "Zensar / RPG Foundation",
            period: "Dec 2024",
            description: "Completed intensive training in Core Java, Python, MySQL, and PL/SQL. Developed a comprehensive GST Management System using Python and PL/SQL, demonstrating strong backend development skills.",
            tech: ["Core Java", "Python", "MySQL", "PL/SQL"]
        },
        // Add more experience here
    ];

    return (
        <section className="min-h-screen py-20 px-6 md:px-12 lg:px-24">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4 text-center">
                        Work <span className="text-primary neon-text">Experience</span>
                    </h2>
                    <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                        My professional journey and the organizations I've contributed to.
                    </p>
                </motion.div>

                <div className="relative space-y-12 md:space-y-0">
                    {experiences.map((exp, index) => (
                        <ExperienceCard key={index} experience={exp} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;
