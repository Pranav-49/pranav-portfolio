import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="bg-black py-8 border-t border-white/10">
            <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 flex flex-col md:flex-row justify-between items-center">
                <div className="mb-4 md:mb-0">
                    <p className="text-gray-400 text-sm">
                        © {new Date().getFullYear()} Pranav Raychure. All rights reserved.
                    </p>
                </div>

                <div className="flex space-x-6">
                    <a
                        href="https://github.com/Pranav-49"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-primary transition-colors"
                    >
                        <FaGithub size={20} />
                    </a>
                    <a
                        href="https://www.linkedin.com/in/pranav-raychure-12ba1a263"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-primary transition-colors"
                    >
                        <FaLinkedin size={20} />
                    </a>
                    <a
                        href="mailto:pranavraychure@gmail.com"
                        className="text-gray-400 hover:text-primary transition-colors"
                    >
                        <FaEnvelope size={20} />
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
