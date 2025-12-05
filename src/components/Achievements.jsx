import React from 'react';
import { motion } from 'framer-motion';
import { FaCertificate, FaAward, FaHandsHelping } from 'react-icons/fa';

const AchievementCard = ({ title, subtitle, icon, delay }) => {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay }}
            viewport={{ once: true }}
            whileHover={{ y: -5 }}
            className="bg-white/5 border border-white/10 p-6 rounded-2xl hover:bg-white/10 transition-all duration-300 flex flex-col items-center text-center group"
        >
            <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <div className="text-3xl text-primary">{icon}</div>
            </div>
            <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
            <p className="text-gray-400 text-sm">{subtitle}</p>
        </motion.div>
    );
};

const Achievements = () => {
    const achievements = [
        {
            title: "NSS Volunteer",
            subtitle: "Active volunteer contributing to social service and community development.",
            icon: <FaHandsHelping />
        },
        {
            title: "Java Full Stack",
            subtitle: "Certification in Full Stack Development with Java.",
            icon: <FaCertificate />
        },
        {
            title: "Core Java",
            subtitle: "Certified in Core Java Programming.",
            icon: <FaAward />
        },
        {
            title: "C Programming",
            subtitle: "Certified in C Programming Language.",
            icon: <FaCertificate />
        },
        {
            title: "DSA using C",
            subtitle: "Certification in Data Structures and Algorithms using C.",
            icon: <FaAward />
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
                        Achievements & <span className="text-primary neon-text">Certifications</span>
                    </h2>
                    <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                        Recognitions and certifications I've earned throughout my learning journey.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {achievements.map((item, index) => (
                        <AchievementCard
                            key={index}
                            title={item.title}
                            subtitle={item.subtitle}
                            icon={item.icon}
                            delay={index * 0.1}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Achievements;
