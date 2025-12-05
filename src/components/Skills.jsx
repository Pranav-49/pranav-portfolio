import React from 'react';
import { motion } from 'framer-motion';
import {
    FaJava, FaPython, FaJs, FaHtml5, FaCss3, FaReact, FaServer, FaGitAlt, FaGithub, FaDatabase
} from 'react-icons/fa';
import {
    SiSpringboot, SiApachekafka, SiMysql, SiMongodb, SiPostgresql,
    SiApachemaven, SiPostman, SiIntellijidea, SiCplusplus
} from 'react-icons/si';
import { VscVscode } from 'react-icons/vsc';

const SkillCategory = ({ title, skills, delay }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay }}
            viewport={{ once: true }}
            className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-colors"
        >
            <h3 className="text-xl font-bold text-white mb-6 border-b border-white/10 pb-2">{title}</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {skills.map((skill, index) => (
                    <div key={index} className="flex flex-col items-center justify-center p-3 bg-black/20 rounded-xl hover:scale-105 transition-transform group">
                        <div className="text-3xl mb-2 text-gray-400 group-hover:text-primary transition-colors">
                            {skill.icon}
                        </div>
                        <span className="text-sm text-gray-300 font-medium">{skill.name}</span>
                    </div>
                ))}
            </div>
        </motion.div>
    );
};

const Skills = () => {
    const skillCategories = [
        {
            title: "Programming Languages",
            skills: [
                { name: "Java", icon: <FaJava /> },
                { name: "Python", icon: <FaPython /> },
                { name: "JavaScript", icon: <FaJs /> },
                { name: "C", icon: <span className="font-bold font-mono">C</span> }, // Custom icon for C
                { name: "C++", icon: <SiCplusplus /> },
            ]
        },
        {
            title: "Web Technologies",
            skills: [
                { name: "Spring Boot", icon: <SiSpringboot /> },
                { name: "React.js", icon: <FaReact /> },
                { name: "HTML5", icon: <FaHtml5 /> },
                { name: "CSS3", icon: <FaCss3 /> },
                { name: "Microservices", icon: <FaServer /> },
                { name: "Kafka", icon: <SiApachekafka /> },
            ]
        },
        {
            title: "Databases",
            skills: [
                { name: "MySQL", icon: <SiMysql /> },
                { name: "PostgreSQL", icon: <SiPostgresql /> },
                { name: "MongoDB", icon: <SiMongodb /> },
            ]
        },
        {
            title: "Tools & Platforms",
            skills: [
                { name: "Git", icon: <FaGitAlt /> },
                { name: "GitHub", icon: <FaGithub /> },
                { name: "Maven", icon: <SiApachemaven /> },
                { name: "Postman", icon: <SiPostman /> },
                { name: "VS Code", icon: <VscVscode /> },
                { name: "IntelliJ", icon: <SiIntellijidea /> },
            ]
        },
        {
            title: "Core Concepts",
            skills: [
                { name: "OOP", icon: <FaServer /> }, // Generic icon
                { name: "DBMS", icon: <FaDatabase /> },
            ]
        }
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
                        My <span className="text-primary neon-text">Skills</span>
                    </h2>
                    <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                        A comprehensive overview of my technical expertise and the tools I use to build software.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {skillCategories.map((category, index) => (
                        <SkillCategory
                            key={index}
                            title={category.title}
                            skills={category.skills}
                            delay={index * 0.1}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
