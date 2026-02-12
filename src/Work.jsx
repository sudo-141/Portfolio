import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import Navbar from './components/Navbar';

const Work = () => {
    // Removed showHeader state since it's now handled in the Navbar component
    // const [showHeader, setShowHeader] = useState(true);
    // const lastScrollY = useRef(0);

    useEffect(() => {
        // Custom Cursor Logic
        const cursorContainer = document.getElementById('custom-cursor');
        if (!cursorContainer) return;

        const cursorImg = cursorContainer.querySelector('img');
        let mouseX = -100;
        let mouseY = -100;

        const onMouseMove = (e) => {
            mouseX = e.clientX;
            mouseY = e.clientY;
        };

        document.addEventListener('mousemove', onMouseMove);

        let animationFrameId;
        const updateCursor = () => {
            cursorContainer.style.transform = `translate(${mouseX}px, ${mouseY}px)`;
            animationFrameId = requestAnimationFrame(updateCursor);
        };
        updateCursor();

        const onMouseDown = () => {
            if (cursorImg) cursorImg.classList.add('cursor-click');
        };
        const onMouseUp = () => {
            if (cursorImg) cursorImg.classList.remove('cursor-click');
        };

        document.addEventListener('mousedown', onMouseDown);
        document.addEventListener('mouseup', onMouseUp);

        return () => {
            document.removeEventListener('mousemove', onMouseMove);
            document.removeEventListener('mousedown', onMouseDown);
            document.removeEventListener('mouseup', onMouseUp);
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    // Removed the scroll useEffect logic here, as it's now in the Navbar component

    return (
        <div className="bg-background-dark bg-gradient-charcoal font-display text-slate-300 min-h-screen relative overflow-x-hidden">
            <Navbar />
            <style>{`
            /* Base & Typography */
            body {
                -webkit-font-smoothing: antialiased;
                -moz-osx-font-smoothing: grayscale;
            }
    
            /* Glassmorphism Effects */
            .glass {
                backdrop-filter: blur(12px);
                -webkit-backdrop-filter: blur(12px);
                border: 1px solid rgba(255, 255, 255, 0.1);
            }
    
            .glass-pill {
                background: rgba(255, 255, 255, 0.03);
                backdrop-filter: blur(8px);
                -webkit-backdrop-filter: blur(8px);
                border: 1px solid rgba(255, 255, 255, 0.1);
            }
    
            .glass-card {
                background: rgba(34, 27, 39, 0.4);
                backdrop-filter: blur(12px);
                border: 1px solid rgba(158, 31, 249, 0.2);
                transition: all 0.3s ease;
            }
    
            .glass-card:hover {
                border-color: rgba(158, 31, 249, 0.6);
                box-shadow: 0 0 20px rgba(158, 31, 249, 0.15);
            }
    
            /* Neon & Glow Effects */
            .pulse-neon {
                box-shadow: 0 0 0 0 rgba(37, 106, 244, 0.7);
                animation: pulse 2s infinite;
            }
    
            .pulse-green {
                box-shadow: 0 0 0 0 rgba(34, 197, 94, 0.7);
                animation: pulse 2s infinite;
            }
    
            .neon-ring {
                position: relative;
            }
    
            .neon-ring::before {
                content: "";
                position: absolute;
                inset: -4px;
                border-radius: 50%;
                background: linear-gradient(#256af4, #09ba3b, #256af4);
                z-index: -1;
                animation: spin-neon 2s linear infinite;
                filter: blur(10px);
                opacity: 0.5;
            }
    
            .neon-glow {
                text-shadow: 0 0 10px rgba(158, 31, 249, 0.5);
            }
    
            .neon-glow-purple {
                box-shadow: 0 0 15px rgba(168, 85, 247, 0.4);
            }
    
            /* Animations */
            @keyframes spin-neon {
                0% { transform: rotate(0deg); }
                100% { transform: rotate(360deg); }
            }
    
            @keyframes pulse {
                0% {
                    transform: scale(0.95);
                    box-shadow: 0 0 0 0 rgba(37, 106, 244, 0.7);
                }
                70% {
                    transform: scale(1);
                    box-shadow: 0 0 0 10px rgba(37, 106, 244, 0);
                }
                100% {
                    transform: scale(0.95);
                    box-shadow: 0 0 0 0 rgba(37, 106, 244, 0);
                }
            }
    
            .reveal-container {
                position: relative;
                overflow: hidden;
                display: inline-flex;
                line-height: 1.2;
            }
    
            .reveal-text {
                display: block;
                transform: translateY(100%);
                animation: slide-up 1.2s cubic-bezier(0.16, 1, 0.3, 1) forwards;
                animation-delay: 0.2s;
            }
    
            @keyframes slide-up {
                from {
                    transform: translateY(100%);
                    opacity: 0;
                }
                to {
                    transform: translateY(0);
                    opacity: 1;
                }
            }
    
            /* Custom Cursor */
            body, a, button, input, select, textarea, .glass-card {
                cursor: auto; /* Default to normal cursor */
            }
            
            @media (min-width: 768px) and (pointer: fine) {
                body, a, button, input, select, textarea, .glass-card {
                    cursor: none !important; /* Hide default cursor only on desktop/mouse */
                }
                #custom-cursor {
                    display: block !important;
                }
            }
            
            @media (pointer: coarse) {
                #custom-cursor {
                    display: none !important;
                }
            }
    
            @keyframes cyber-glow {
                0% { filter: drop-shadow(0 0 2px rgba(37, 106, 244, 0.9)) drop-shadow(0 0 4px rgba(37, 106, 244, 0.5)); transform: scale(1); }
                50% { filter: drop-shadow(0 0 6px rgba(168, 85, 247, 0.9)) drop-shadow(0 0 12px rgba(168, 85, 247, 0.5)); transform: scale(1.05); }
                100% { filter: drop-shadow(0 0 2px rgba(37, 106, 244, 0.9)) drop-shadow(0 0 4px rgba(37, 106, 244, 0.5)); transform: scale(1); }
            }
    
            .cursor-cyber {
                animation: cyber-glow 3s ease-in-out infinite;
            }
    
            .cursor-click {
                transform: scale(0.85) rotate(-10deg) !important;
                filter: drop-shadow(0 0 10px rgba(59, 130, 246, 1)) !important;
            }
    
            /* Contact Page Specific Interactions */
            .mt-6>div:last-child {
                transition: all 0.50s cubic-bezier(0.22, 1, 0.36, 1);
                border: 1px solid rgba(255, 255, 255, 0.05);
                cursor: pointer;
            }
    
            .mt-6>div:last-child:hover {
                transform: translateY(-8px);
                background-color: rgba(255, 255, 255, 0.1);
                border-color: rgba(255, 255, 255, 0.2);
                box-shadow: 0 25px 50px -12px rgba(168, 85, 247, 0.1);
            }
    
            .mt-6>div:last-child:hover .size-14 {
                transform: scale(1.1) rotate(6deg);
                background-color: rgba(168, 85, 247, 0.2);
                transition: all 0.50s ease-out;
            }
    
            .mt-6>div:last-child .size-14 {
                transition: all 0.50s ease-out;
            }
    
            .mt-6>div:last-child:hover .text-slate-500 {
                color: #a855f7;
                transition: color 0.50s ease;
            }
            `}</style>

            <div id="custom-cursor" className="fixed top-0 left-0 z-[9999] pointer-events-none will-change-transform" style={{ transform: 'translate(-100px, -100px)' }}>
                <img src="https://img.icons8.com/?size=100&id=DzDNJborQlTB&format=png&color=ffffff"
                    className="w-8 h-8 cursor-cyber relative z-10 drop-shadow-[0_0_10px_rgba(37,106,244,0.8)]"
                    alt="custom cursor" />
            </div>
            {/* Ambient Background */}
            <div className="fixed inset-0 z-0 pointer-events-none">
                <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[128px] opacity-50 mix-blend-screen"></div>
                <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-[128px] opacity-50 mix-blend-screen"></div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-slate-900/40 rounded-full blur-3xl"></div>
            </div>

            {/* Top Navigation Bar - Replaced by Navbar component */}
            <main className="max-w-[1400px] mx-auto pt-32 pb-24 px-6">
                <div className="mb-16">
                    <h1 className="text-white text-6xl md:text-8xl font-black tracking-tighter mb-4">My Work Projects</h1>
                    <p className="text-slate-400 text-xl max-w-2xl">A curated collection of digital products and visual experiences
                        crafted with precision and passion.</p>
                </div>

                {/* Library Management System Card */}
                <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
                    <div className="md:col-span-8 glass-card rounded-2xl overflow-hidden group relative flex flex-col">
                        <div className="relative h-[400px] w-full bg-slate-900 flex items-center justify-center p-12">
                            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent"></div>
                            <div
                                className="relative w-full h-full rounded-xl overflow-hidden border border-white/10 shadow-2xl glass">
                                <div className="absolute inset-0 bg-cover bg-center"
                                    style={{ backgroundImage: 'url("/Library.png")' }}>
                                </div>
                            </div>
                        </div>
                        <div className="p-8 flex flex-col md:flex-row justify-between items-end gap-6">
                            <div className="flex-1">
                                <div className="flex flex-wrap gap-2 mb-4">
                                    <span
                                        className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider">HTML</span>
                                    <span
                                        className="px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-400 text-xs font-bold uppercase tracking-wider">Tailwind CSS</span>
                                    <span
                                        className="px-3 py-1 rounded-full bg-purple-500/10 text-purple-400 text-xs font-bold uppercase tracking-wider">React</span>
                                    <span
                                        className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider">Node.js</span>
                                    <span
                                        className="px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-400 text-xs font-bold uppercase tracking-wider">Express.js</span>
                                    <span
                                        className="px-3 py-1 rounded-full bg-purple-500/10 text-purple-400 text-xs font-bold uppercase tracking-wider">MongoDB Atlas</span>

                                </div>
                                <h2 className="text-white text-3xl font-bold mb-2">School Library Management System</h2>
                                <p className="text-slate-400 max-w-lg">A School Level Libray Management System for Efficiently
                                    Managing Books.</p>
                            </div>
                            <a
                                className="bg-primary text-white px-6 py-3 rounded-xl font-bold flex items-center gap-2 hover:translate-y-[-2px] transition-all" href="https://github.com/sudo-141">
                                View Case Study
                                <img src="https://api.iconify.design/flat-color-icons:right.svg" alt="arrow_forward" className="w-6 h-6 object-contain" />
                            </a>
                        </div>
                    </div>

                    {/* SubTracker App Card */}
                    <div className="md:col-span-4 glass-card rounded-2xl overflow-hidden group relative flex flex-col">
                        <div className="relative h-[400px] w-full bg-[#1e1b4b] flex items-center justify-center p-8">
                            <div className="absolute inset-0 bg-gradient-to-t from-purple-900/40 to-transparent"></div>
                            <div
                                className="relative w-full h-full rounded-xl overflow-hidden border border-white/10 shadow-2xl glass transform group-hover:scale-105 transition-transform duration-500 flex items-center justify-center">
                                <img src="/Subs.png" alt="SubTracker" className="w-full h-full object-contain rounded-xl" />
                            </div>
                        </div>
                        <div className="p-8 flex-1 flex flex-col">
                            <div className="flex flex-wrap gap-2 mb-4">
                                <span
                                    className="px-3 py-1 rounded-full bg-orange-500/10 text-orange-400 text-xs font-bold uppercase tracking-wider">Android</span>
                                <span
                                    className="px-3 py-1 rounded-full bg-blue-500/10 text-blue-400 text-xs font-bold uppercase tracking-wider">Kotlin</span>
                                <span
                                    className="px-3 py-1 rounded-full bg-blue-500/10 text-blue-400 text-xs font-bold uppercase tracking-wider">Capacitor</span>
                                <span
                                    className="px-3 py-1 rounded-full bg-blue-500/10 text-blue-400 text-xs font-bold uppercase tracking-wider">Supabase</span>

                            </div>
                            <h2 className="text-white text-2xl font-bold mb-2">SubTracker</h2>
                            <p className="text-slate-400 mb-6">A Subscription Tracker ...In Development</p>
                            <div className="mt-auto">
                                <button
                                    className="w-full neon-glow-hover bg-white/5 border border-white/10 hover:border-accent-cyan/50 hover:bg-accent-cyan/10 text-white px-6 py-4 rounded-xl font-bold transition-all">
                                    Coming Soon...
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Axium Corp Ltd */}
                    <div className="md:col-span-4 glass-card rounded-2xl overflow-hidden group relative flex flex-col">
                        <div className="relative h-[400px] w-full bg-[#1e1b4b] flex items-center justify-center p-8">
                            <div className="absolute inset-0 bg-gradient-to-t from-purple-900/40 to-transparent"></div>
                            <div className="relative w-full h-full rounded-xl overflow-hidden border border-white/10 shadow-2xl glass transform group-hover:scale-105 transition-transform duration-500 flex items-center justify-center">
                                <img src="/Axium.png" alt="Axium Global" className="w-full h-full object-contain rounded-xl" />
                            </div>
                        </div>
                        <div className="p-8 flex-1 flex flex-col">
                            <div className="flex flex-wrap gap-2 mb-4">
                                <span className="px-3 py-1 rounded-full bg-orange-500/10 text-orange-400 text-xs font-bold uppercase tracking-wider">Freelance</span>
                                <span className="px-3 py-1 rounded-full bg-blue-500/10 text-blue-400 text-xs font-bold uppercase tracking-wider">Web Design</span>
                            </div>
                            <h2 className="text-white text-2xl font-bold mb-2">Axium Corp Ltd</h2>
                            <p className="text-slate-400 mb-6">Corporate website development and design.</p>
                            <div className="mt-auto">
                                <button className="w-full neon-glow-hover bg-white/5 border border-white/10 hover:border-accent-cyan/50 hover:bg-accent-cyan/10 text-white px-6 py-4 rounded-xl font-bold transition-all">
                                    Coming Soon...
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Academic Projects Card */}
                    <div className="md:col-span-4 glass-card rounded-2xl overflow-hidden group relative flex flex-col">
                        <div className="relative h-[300px] w-full bg-[#0c0c0c] flex items-center justify-center p-8">
                            <div className="absolute inset-0 bg-gradient-to-tr from-green-500/10 to-transparent"></div>
                            <div
                                className="relative w-full h-full rounded-xl overflow-hidden border border-white/10 shadow-2xl glass">
                                <div className="absolute inset-0 bg-cover bg-center"
                                    style={{ backgroundImage: 'url("/Bike.jpeg")' }}>
                                </div>
                            </div>
                        </div>
                        <div className="p-8 flex flex-col">
                            <div className="flex flex-wrap gap-2 mb-4">
                                <span
                                    className="px-3 py-1 rounded-full bg-yellow-500/10 text-yellow-400 text-xs font-bold uppercase tracking-wider">Python</span>
                                <span
                                    className="px-3 py-1 rounded-full bg-red-500/10 text-red-400 text-xs font-bold uppercase tracking-wider">YOLO</span>
                            </div>
                            <h2 className="text-white text-2xl font-bold mb-2">Helmet and Number Plate Detection System</h2>
                            <p className="text-slate-400 mb-6">An automated system for detecting traffic violations using computer vision.</p>
                            <a href="https://github.com/sudo-141/"
                                className="self-start neon-glow-hover border border-accent-cyan text-accent-cyan hover:bg-accent-cyan hover:text-black px-6 py-3 rounded-xl font-bold transition-all">
                                View Details
                            </a>
                        </div>
                    </div>
                    <div className="md:col-span-4 glass-card rounded-2xl p-8 flex flex-col items-center justify-center text-center min-h-[300px] border-dashed border-2 border-white/10 hover:border-white/20 transition-colors">
                        <div className="rounded-full bg-white/5 p-6 mb-6">
                            <img src="https://img.icons8.com/?size=50&id=4VOj3K4fdVb2&format=png&color=ffffff" alt="SubTracker" className="w-full h-full object-contain rounded-xl" />
                        </div>
                        <h2 className="text-white text-2xl font-bold mb-2">Working on more projects...</h2>
                        <p className="text-slate-400">Stay tuned for upcoming innovative solutions.</p>
                    </div>
                </div>

            </main>
            <footer className="py-12 px-6 border-t border-white/5">
                <div className="max-w-[1200px] mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
                    <p className="text-slate-500 text-sm text-center md:text-left">© 2024 Prasad Portfolio. Designed for the web. All Rights Reserved.</p>
                    <div className="flex gap-6 text-slate-500 text-sm">
                        <a className="hover:text-white transition-colors" href="https://www.linkedin.com/in/prasad-mahamuni-8ab9a1286/">LinkedIn</a>
                        <a className="hover:text-white transition-colors" href="https://github.com/sudo-141/">GitHub</a>
                        <a className="hover:text-white transition-colors"
                            href="https://www.instagram.com/its_jetra?igsh=MWkwOGE2eWxxNXVxZg==">Instagram</a>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Work;
