import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { FaEnvelope, FaMapMarkerAlt, FaPhone, FaPaperPlane, FaDownload } from 'react-icons/fa';
import cv from '../assets/Pranav CV.pdf';

const Contact = () => {
    const formRef = useRef();
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState(false);
    const [configError, setConfigError] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);

        // Validate environment variables
        const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
        const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
        const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

        if (!serviceId || !templateId || !publicKey) {
            console.error("EmailJS environment variables are missing!");
            setLoading(false);
            setConfigError(true);
            setTimeout(() => setConfigError(false), 5000);
            return;
        }

        emailjs
            .sendForm(
                serviceId,
                templateId,
                formRef.current,
                publicKey
            )
            .then(
                () => {
                    setLoading(false);
                    setSuccess(true);
                    formRef.current.reset();
                    setTimeout(() => setSuccess(false), 5000);
                },
                (error) => {
                    console.error("EmailJS Error:", error);
                    setLoading(false);
                    setError(true);
                    setTimeout(() => setError(false), 3000);
                }
            );
    };

    return (
        <section className="flex items-center min-h-screen px-6 py-20 md:px-12 lg:px-24">
            <div className="w-full mx-auto max-w-7xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="mb-16 text-center"
                >
                    <h2 className="mb-4 text-4xl font-bold text-center md:text-5xl font-heading">
                        Get in <span className="text-primary neon-text">Touch</span>
                    </h2>
                    <p className="max-w-2xl mx-auto text-lg text-gray-400">
                        Have a project in mind or want to discuss new opportunities? I'd love to hear from you.
                    </p>
                </motion.div>

                <div className="grid gap-12 md:grid-cols-2">
                    {/* Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        viewport={{ once: true }}
                        className="space-y-8"
                    >
                        <div className="p-8 border bg-white/5 border-white/10 rounded-2xl">
                            <h3 className="mb-6 text-2xl font-bold text-white">Contact Information</h3>
                            <div className="space-y-6">
                                <div className="flex items-start gap-4">
                                    <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary shrink-0">
                                        <FaEnvelope size={20} />
                                    </div>
                                    <div>
                                        <h4 className="mb-1 font-medium text-white">Email Me</h4>
                                        <a href="mailto:pranavraychure@gmail.com" className="text-gray-400 transition-colors hover:text-primary">
                                            pranavraychure@gmail.com
                                        </a>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary shrink-0">
                                        <FaMapMarkerAlt size={20} />
                                    </div>
                                    <div>
                                        <h4 className="mb-1 font-medium text-white">Location</h4>
                                        <p className="text-gray-400">India</p>
                                    </div>
                                </div>
                            </div>

                            <div className="pt-8 mt-8 border-t border-white/10">
                                <h4 className="mb-4 font-medium text-white">Connect with me</h4>
                                <div className="flex gap-4">
                                    {/* Social Links are already in Footer/Navbar, but good to have here too */}
                                </div>
                                <a
                                    href= {cv}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 px-6 py-3 mt-4 font-medium text-black transition-colors rounded-full bg-primary hover:bg-white"
                                >
                                    <FaDownload /> Download CV
                                </a>
                            </div>
                        </div>
                    </motion.div>

                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        viewport={{ once: true }}
                    >
                        <form ref={formRef} onSubmit={handleSubmit} className="p-8 space-y-6 border bg-white/5 border-white/10 rounded-2xl">
                            <input type="hidden" name="time" value={new Date().toLocaleString()} />
                            <div>
                                <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-400">Your Name</label>
                                <input
                                    type="text"
                                    name="from_name"
                                    id="name"
                                    required
                                    className="w-full px-4 py-3 text-white transition-colors border rounded-lg bg-black/30 border-white/10 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary"
                                    placeholder="John Doe"
                                />
                            </div>

                            <div>
                                <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-400">Your Email</label>
                                <input
                                    type="email"
                                    name="from_email"
                                    id="email"
                                    required
                                    className="w-full px-4 py-3 text-white transition-colors border rounded-lg bg-black/30 border-white/10 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary"
                                    placeholder="john@example.com"
                                />
                            </div>

                            <div>
                                <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-400">Message</label>
                                <textarea
                                    name="message"
                                    id="message"
                                    required
                                    rows="4"
                                    className="w-full px-4 py-3 text-white transition-colors border rounded-lg resize-none bg-black/30 border-white/10 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary"
                                    placeholder="How can I help you?"
                                ></textarea>
                            </div>

                            <button
                                type="submit"
                                disabled={loading}
                                className="flex items-center justify-center w-full gap-2 btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                                {loading ? (
                                    <span className="w-5 h-5 border-2 rounded-full border-white/40 border-t-primary animate-spin"></span>
                                ) : (
                                    <>
                                        Send Message <FaPaperPlane />
                                    </>
                                )}
                            </button>

                            {success && (
                                <p className="mt-4 text-sm text-center text-green-400 animate-pulse">
                                    Message sent successfully!
                                </p>
                            )}
                            {error && (
                                <p className="mt-4 text-sm text-center text-red-400 animate-pulse">
                                    Something went wrong. Please try again.
                                </p>
                            )}
                            {configError && (
                                <p className="mt-4 text-sm text-center text-yellow-400 animate-pulse">
                                    Configuration missing! Check .env file.
                                </p>
                            )}
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
