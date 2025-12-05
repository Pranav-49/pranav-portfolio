import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaCode } from 'react-icons/fa';
import Modal from './Modal';

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
        image: "/fitness UI.jpeg"
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
        image: "/vistamart UI.jpeg"
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
        image: "/railease UI.jpeg"
    }
];

const ProjectCard = ({ project, onClick }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ y: -5 }}
            className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:bg-white/10 transition-all duration-300 group cursor-pointer"
            onClick={() => onClick(project)}
        >
            <div className="h-48 bg-gray-800 relative overflow-hidden group">
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors z-10"></div>
                <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
            </div>

            <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                    <div>
                        <span className="text-primary text-sm font-medium">{project.category}</span>
                        <h3 className="text-xl font-bold text-white mt-1">{project.title}</h3>
                    </div>
                    <span className="text-gray-500 text-sm border border-gray-700 px-2 py-1 rounded">{project.year}</span>
                </div>

                <p className="text-gray-400 text-sm mb-6 line-clamp-2">
                    {project.summary}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.slice(0, 3).map((t, i) => (
                        <span key={i} className="text-xs bg-black/30 text-gray-300 px-2 py-1 rounded-full border border-white/5">
                            {t}
                        </span>
                    ))}
                    {project.tech.length > 3 && (
                        <span className="text-xs text-gray-500 px-2 py-1 self-center">+{project.tech.length - 3} more</span>
                    )}
                </div>

                <button className="text-primary text-sm font-medium group-hover:underline">
                    View Details &rarr;
                </button>
            </div>
        </motion.div>
    );
};

const Projects = () => {
    const [selectedProject, setSelectedProject] = useState(null);

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
                        Featured <span className="text-primary neon-text">Projects</span>
                    </h2>
                    <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                        A selection of my recent work, featuring full-stack applications and microservices.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
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
                        <div className="relative h-64 w-full mb-6 rounded-xl overflow-hidden">
                            <img
                                src={selectedProject.image}
                                alt={selectedProject.title}
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                        </div>

                        <div className="flex justify-between items-start mb-6">
                            <div>
                                <span className="text-primary font-medium">{selectedProject.category}</span>
                                <h3 className="text-3xl font-bold text-white mt-2">{selectedProject.title}</h3>
                            </div>
                            <span className="text-gray-400 bg-white/5 px-3 py-1 rounded-full border border-white/10">
                                {selectedProject.year}
                            </span>
                        </div>

                        <div className="mb-8">
                            <h4 className="text-lg font-semibold text-white mb-3">Technologies Used</h4>
                            <div className="flex flex-wrap gap-2">
                                {selectedProject.tech.map((t, i) => (
                                    <span key={i} className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm border border-primary/20">
                                        {t}
                                    </span>
                                ))}
                            </div>
                        </div>

                        <div className="mb-8">
                            <h4 className="text-lg font-semibold text-white mb-3">Key Features</h4>
                            <ul className="space-y-2">
                                {selectedProject.details.map((detail, i) => (
                                    <li key={i} className="flex items-start text-gray-300">
                                        <span className="text-primary mr-2 mt-1">•</span>
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
                                className="flex items-center gap-2 px-6 py-3 bg-white/5 hover:bg-white/10 text-white rounded-full transition-colors border border-white/10"
                            >
                                <FaGithub /> GitHub
                            </a>
                            <a
                                href={selectedProject.demo}
                                className="flex items-center gap-2 px-6 py-3 bg-primary/10 hover:bg-primary/20 text-primary rounded-full transition-colors border border-primary/20"
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
