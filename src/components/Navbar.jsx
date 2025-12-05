import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FaBars, FaTimes, FaGithub, FaLinkedin } from 'react-icons/fa';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const location = useLocation();
    const navigate = useNavigate();

    const links = [
        { name: 'Home', id: 'home' },
        { name: 'About', id: 'about' },
        { name: 'Skills', id: 'skills' },
        { name: 'Projects', id: 'projects' },
        { name: 'Experience', id: 'experience' },
        { name: 'Achievements', id: 'achievements' },
        { name: 'Contact', id: 'contact' },
    ];

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleNavClick = (id) => {
        setIsOpen(false);
        // If we are not on the home page (though in SPA we mostly are), navigate there first
        if (location.pathname !== '/') {
            navigate('/');
            setTimeout(() => {
                const element = document.getElementById(id);
                if (element) element.scrollIntoView({ behavior: 'smooth' });
            }, 100);
        } else {
            const element = document.getElementById(id);
            if (element) element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <nav
            className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-background/80 backdrop-blur-md border-b border-white/10' : 'bg-transparent'
                }`}
        >
            <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
                <div className="flex justify-between items-center h-20">
                    {/* Logo */}
                    <button
                        onClick={() => handleNavClick('home')}
                        className="text-2xl font-heading font-bold text-white focus:outline-none"
                    >
                        Pranav<span className="text-primary">.</span>
                    </button>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center space-x-8">
                        {links.map((link) => (
                            <motion.button
                                key={link.name}
                                onClick={() => handleNavClick(link.id)}
                                className="text-sm font-medium text-gray-300 hover:text-white hover:text-primary transition-colors duration-300 focus:outline-none cursor-pointer"
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                {link.name}
                            </motion.button>
                        ))}
                        <a
                            href="https://github.com/Pranav-49"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-300 hover:text-white transition-colors"
                        >
                            <FaGithub size={20} />
                        </a>
                        <a
                            href="https://www.linkedin.com/in/pranav-raychure-12ba1a263"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-300 hover:text-white transition-colors"
                        >
                            <FaLinkedin size={20} />
                        </a>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden text-white focus:outline-none"
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="md:hidden absolute top-20 left-0 w-full bg-background/95 backdrop-blur-lg border-b border-white/10 p-6"
                    >
                        <div className="flex flex-col space-y-4">
                            {links.map((link) => (
                                <motion.button
                                    key={link.name}
                                    onClick={() => handleNavClick(link.id)}
                                    className="text-lg font-medium text-gray-300 hover:text-primary text-left focus:outline-none cursor-pointer"
                                    whileHover={{ x: 10 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    {link.name}
                                </motion.button>
                            ))}
                            <div className="flex space-x-4 pt-4 border-t border-white/10">
                                <a
                                    href="https://github.com/Pranav-49"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-gray-300 hover:text-white"
                                >
                                    <FaGithub size={24} />
                                </a>
                                <a
                                    href="https://www.linkedin.com/in/pranav-raychure-12ba1a263"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-gray-300 hover:text-white"
                                >
                                    <FaLinkedin size={24} />
                                </a>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
