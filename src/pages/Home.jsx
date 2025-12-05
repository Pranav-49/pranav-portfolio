import React from 'react';
import Hero from '../components/Hero';
import About from '../components/About';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import Experience from '../components/Experience';
import Achievements from '../components/Achievements';
import Contact from '../components/Contact';

const Home = () => {
    return (
        <div className="overflow-hidden relative">
            {/* Global Background Blobs */}
            <div className="fixed top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
                <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary/5 rounded-full blur-[120px] animate-pulse-slow"></div>
                <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-secondary/5 rounded-full blur-[120px] animate-pulse-slow delay-1000"></div>
                <div className="absolute top-[40%] left-[30%] w-[30%] h-[30%] bg-primary/5 rounded-full blur-[100px] animate-spin-slow duration-[20s]"></div>
            </div>

            <section id="home" className="scroll-mt-28">
                <Hero />
            </section>

            <section id="about" className="relative scroll-mt-28">
                <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-transparent to-background/50 pointer-events-none"></div>
                <About />
            </section>

            <section id="skills" className="relative scroll-mt-28">
                <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent"></div>
                <Skills />
            </section>

            <section id="projects" className="relative scroll-mt-28">
                <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-secondary/20 to-transparent"></div>
                <Projects />
            </section>

            <section id="experience" className="relative scroll-mt-28">
                <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent"></div>
                <Experience />
            </section>

            <section id="achievements" className="relative scroll-mt-28">
                <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-secondary/20 to-transparent"></div>
                <Achievements />
            </section>

            <section id="contact" className="relative scroll-mt-28">
                <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent"></div>
                <Contact />
            </section>
        </div>
    );
};

export default Home;
