import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaCode } from 'react-icons/fa';
import Modal from './Modal';
import fitnessUI from '../assets/fitness UI.png';
import vistaUI from '../assets/vistamart UI.jpeg';
import railUI from '../assets/railease UI.jpeg';

const projectsData = [
    {
        id: 1,
        title: "MyFitness Web App",
        year: "2025",
        category: "Full Stack / Microservices",
        summary: "A comprehensive fitness platform using microservices architecture and AI recommendations.",
        tech: ["Spring Boot", "Microservices", "React.js", "Kafka", "PostgreSQL", "MongoDB", "Gemini API"],
        details: [
            "Microservices architecture using Eureka Server & Spring Cloud Gateway",
            "Hybrid DB setup with PostgreSQL (Relational) + MongoDB (NoSQL)",
            "Kafka for real-time event streaming and notifications",
            "AI fitness recommendations powered by Google Gemini API",
            "Responsive UI with interactive dashboards for user progress tracking"
        ],
        github: "https://github.com/Pranav-49/Fitness-App", // Placeholder
        demo: "#",
        image: fitnessUI
    },
    {
        id: 2,
        title: "E-Commerce Web Application",
        year: "2025",
        category: "Full Stack",
        summary: "A secure and scalable e-commerce platform with real-time inventory management.",
        tech: ["React.js", "Spring Boot", "SQL", "REST API"],
        details: [
            "Full-stack system with secure authentication and authorization",
            "Integrated secure payment flow (Stripe/Razorpay integration ready)",
            "Comprehensive product & order management system for admins",
            "Real-time inventory updates using WebSocket/Polling",
            "Optimized database queries for fast product search and filtering"
        ],
        github: "https://github.com/Pranav-49/VistaMart",
        demo: "#",
        image: vistaUI
    },
    {
        id: 3,
        title: "Train Schedule Management System",
        year: "2025",
        category: "Web Application",
        summary: "A management system for train scheduling and booking operations.",
        tech: ["Spring Boot", "HTML", "CSS", "JavaScript", "MySQL"],
        details: [
            "Complete CRUD operations for train schedules and routes",
            "User booking system with seat availability tracking",
            "Role-based authentication system (Admin vs User)",
            "Admin dashboards for managing trains, stations, and schedules",
            "Report generation for booking statistics"
        ],
        github: "https://github.com/Pranav-49/RailEase",
        demo: "#",
        image: railUI
    }
];

const ProjectCard = ({ project, onClick }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ y: -5 }}
            className="overflow-hidden transition-all duration-300 border cursor-pointer bg-white/5 border-white/10 rounded-2xl hover:bg-white/10 group"
            onClick={() => onClick(project)}
        >
            <div className="relative h-48 overflow-hidden bg-gray-800 group">
                <div className="absolute inset-0 z-10 transition-colors bg-black/20 group-hover:bg-black/0"></div>
                <img
                    src={project.image}
                    alt={project.title}
                    className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
                />
            </div>

            <div className="p-6">
                <div className="flex items-start justify-between mb-4">
                    <div>
                        <span className="text-sm font-medium text-primary">{project.category}</span>
                        <h3 className="mt-1 text-xl font-bold text-white">{project.title}</h3>
                    </div>
                    <span className="px-2 py-1 text-sm text-gray-500 border border-gray-700 rounded">{project.year}</span>
                </div>

                <p className="mb-6 text-sm text-gray-400 line-clamp-2">
                    {project.summary}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.slice(0, 3).map((t, i) => (
                        <span key={i} className="px-2 py-1 text-xs text-gray-300 border rounded-full bg-black/30 border-white/5">
                            {t}
                        </span>
                    ))}
                    {project.tech.length > 3 && (
                        <span className="self-center px-2 py-1 text-xs text-gray-500">+{project.tech.length - 3} more</span>
                    )}
                </div>

                <button className="text-sm font-medium text-primary group-hover:underline">
                    View Details &rarr;
                </button>
            </div>
        </motion.div>
    );
};

const Projects = () => {
    const [selectedProject, setSelectedProject] = useState(null);

    return (
        <section className="min-h-screen px-6 py-20 md:px-12 lg:px-24">
            <div className="mx-auto max-w-7xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="mb-16 text-center"
                >
                    <h2 className="mb-4 text-4xl font-bold text-center md:text-5xl font-heading">
                        Featured <span className="text-primary neon-text">Projects</span>
                    </h2>
                    <p className="max-w-2xl mx-auto text-lg text-gray-400">
                        A selection of my recent work, featuring full-stack applications and microservices.
                    </p>
                </motion.div>

                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {projectsData.map((project) => (
                        <ProjectCard
                            key={project.id}
                            project={project}
                            onClick={setSelectedProject}
                        />
                    ))}
                </div>
            </div>

            <Modal isOpen={!!selectedProject} onClose={() => setSelectedProject(null)}>
                {selectedProject && (
                    <div>
                        <div className="relative w-full h-64 mb-6 overflow-hidden rounded-xl">
                            <img
                                src={selectedProject.image}
                                alt={selectedProject.title}
                                className="object-cover w-full h-full"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                        </div>

                        <div className="flex items-start justify-between mb-6">
                            <div>
                                <span className="font-medium text-primary">{selectedProject.category}</span>
                                <h3 className="mt-2 text-3xl font-bold text-white">{selectedProject.title}</h3>
                            </div>
                            <span className="px-3 py-1 text-gray-400 border rounded-full bg-white/5 border-white/10">
                                {selectedProject.year}
                            </span>
                        </div>

                        <div className="mb-8">
                            <h4 className="mb-3 text-lg font-semibold text-white">Technologies Used</h4>
                            <div className="flex flex-wrap gap-2">
                                {selectedProject.tech.map((t, i) => (
                                    <span key={i} className="px-3 py-1 text-sm border rounded-full bg-primary/10 text-primary border-primary/20">
                                        {t}
                                    </span>
                                ))}
                            </div>
                        </div>

                        <div className="mb-8">
                            <h4 className="mb-3 text-lg font-semibold text-white">Key Features</h4>
                            <ul className="space-y-2">
                                {selectedProject.details.map((detail, i) => (
                                    <li key={i} className="flex items-start text-gray-300">
                                        <span className="mt-1 mr-2 text-primary">•</span>
                                        {detail}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="flex gap-4 pt-6 border-t border-white/10">
                            <a
                                href={selectedProject.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 px-6 py-3 text-white transition-colors border rounded-full bg-white/5 hover:bg-white/10 border-white/10"
                            >
                                <FaGithub /> GitHub
                            </a>
                            <a
                                href={selectedProject.demo}
                                className="flex items-center gap-2 px-6 py-3 transition-colors border rounded-full bg-primary/10 hover:bg-primary/20 text-primary border-primary/20"
                            >
                                <FaExternalLinkAlt /> Live Demo
                            </a>
                        </div>
                    </div>
                )}
            </Modal>
        </section>
    );
};

export default Projects;
