import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { FaEnvelope, FaMapMarkerAlt, FaPhone, FaPaperPlane, FaDownload } from 'react-icons/fa';

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
        <section className="min-h-screen py-20 px-6 md:px-12 lg:px-24 flex items-center">
            <div className="max-w-7xl mx-auto w-full">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4 text-center">
                        Get in <span className="text-primary neon-text">Touch</span>
                    </h2>
                    <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                        Have a project in mind or want to discuss new opportunities? I'd love to hear from you.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-12">
                    {/* Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        viewport={{ once: true }}
                        className="space-y-8"
                    >
                        <div className="bg-white/5 border border-white/10 p-8 rounded-2xl">
                            <h3 className="text-2xl font-bold text-white mb-6">Contact Information</h3>
                            <div className="space-y-6">
                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
                                        <FaEnvelope size={20} />
                                    </div>
                                    <div>
                                        <h4 className="text-white font-medium mb-1">Email Me</h4>
                                        <a href="mailto:pranavraychure@gmail.com" className="text-gray-400 hover:text-primary transition-colors">
                                            pranavraychure@gmail.com
                                        </a>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
                                        <FaMapMarkerAlt size={20} />
                                    </div>
                                    <div>
                                        <h4 className="text-white font-medium mb-1">Location</h4>
                                        <p className="text-gray-400">India</p>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-8 pt-8 border-t border-white/10">
                                <h4 className="text-white font-medium mb-4">Connect with me</h4>
                                <div className="flex gap-4">
                                    {/* Social Links are already in Footer/Navbar, but good to have here too */}
                                </div>
                                <a
                                    href="/Pranav%20CV.pdf"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-black rounded-full font-medium hover:bg-white transition-colors mt-4"
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
                        <form ref={formRef} onSubmit={handleSubmit} className="bg-white/5 border border-white/10 p-8 rounded-2xl space-y-6">
                            <input type="hidden" name="time" value={new Date().toLocaleString()} />
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-2">Your Name</label>
                                <input
                                    type="text"
                                    name="from_name"
                                    id="name"
                                    required
                                    className="w-full bg-black/30 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
                                    placeholder="John Doe"
                                />
                            </div>

                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-2">Your Email</label>
                                <input
                                    type="email"
                                    name="from_email"
                                    id="email"
                                    required
                                    className="w-full bg-black/30 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
                                    placeholder="john@example.com"
                                />
                            </div>

                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-2">Message</label>
                                <textarea
                                    name="message"
                                    id="message"
                                    required
                                    rows="4"
                                    className="w-full bg-black/30 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors resize-none"
                                    placeholder="How can I help you?"
                                ></textarea>
                            </div>

                            <button
                                type="submit"
                                disabled={loading}
                                className="w-full btn-primary flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                                {loading ? (
                                    <span className="w-5 h-5 border-2 border-white/40 border-t-primary rounded-full animate-spin"></span>
                                ) : (
                                    <>
                                        Send Message <FaPaperPlane />
                                    </>
                                )}
                            </button>

                            {success && (
                                <p className="text-green-400 text-sm text-center mt-4 animate-pulse">
                                    Message sent successfully!
                                </p>
                            )}
                            {error && (
                                <p className="text-red-400 text-sm text-center mt-4 animate-pulse">
                                    Something went wrong. Please try again.
                                </p>
                            )}
                            {configError && (
                                <p className="text-yellow-400 text-sm text-center mt-4 animate-pulse">
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
