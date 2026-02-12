import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import Navbar from './components/Navbar';

const Home = () => {
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

    return (
        <div className="bg-background-light dark:bg-background-dark font-display text-slate-900 dark:text-white min-h-screen relative overflow-x-hidden">
            <Navbar />
            {/* Style tag content would typically go into a CSS file or styled-components. 
            For this conversion, I'm keeping it as a style tag but ideally it should be moved.
        */}
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
            background: linear-gradient(orange, white, blue);
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
            0% {
                transform: rotate(0deg);
            }

            100% {
                transform: rotate(360deg);
            }
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
        body,
        a,
        button,
        input,
        select,
        textarea,
        .glass-card {
            cursor: auto;
            /* Default to normal cursor */
        }

        @media (min-width: 768px) and (pointer: fine) {

            body,
            a,
            button,
            input,
            select,
            textarea,
            .glass-card {
                cursor: none !important;
                /* Hide default cursor only on desktop/mouse */
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
            0% {
                filter: drop-shadow(0 0 2px rgba(37, 106, 244, 0.9)) drop-shadow(0 0 4px rgba(37, 106, 244, 0.5));
                transform: scale(1);
            }

            50% {
                filter: drop-shadow(0 0 6px rgba(168, 85, 247, 0.9)) drop-shadow(0 0 12px rgba(168, 85, 247, 0.5));
                transform: scale(1.05);
            }

            100% {
                filter: drop-shadow(0 0 2px rgba(37, 106, 244, 0.9)) drop-shadow(0 0 4px rgba(37, 106, 244, 0.5));
                transform: scale(1);
            }
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

            <div id="custom-cursor" className="fixed top-0 left-0 z-[9999] pointer-events-none will-change-transform"
                style={{ transform: 'translate(-100px, -100px)' }}>
                <img src="https://img.icons8.com/?size=100&id=DzDNJborQlTB&format=png&color=ffffff"
                    className="w-8 h-8 cursor-cyber relative z-10 drop-shadow-[0_0_10px_rgba(37,106,244,0.8)]"
                    alt="custom cursor" />
            </div>
            {/* Ambient Background */}
            <div className="fixed inset-0 z-0 pointer-events-none">
                <div
                    className="absolute top-0 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[128px] opacity-50 mix-blend-screen">
                </div>
                <div
                    className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-[128px] opacity-50 mix-blend-screen">
                </div>
                <div
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-slate-900/40 rounded-full blur-3xl">
                </div>
            </div>

            {/* Top Navigation Bar */}
            <header className="hidden">
                {/* Replaced by Navbar component */}
            </header>
            <main className="max-w-[1200px] mx-auto pt-32 pb-20 px-6">

                {/* Bento Grid Container */}
                <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-6 gap-6">

                    {/* Hero Card (Main) */}
                    <div
                        className="md:col-span-4 lg:col-span-4 glass-card rounded-xl p-8 flex flex-col md:flex-row items-center gap-8 overflow-hidden relative group">
                        {/* Background Glow */}
                        <div className="absolute -top-24 -left-24 size-64 bg-primary/20 blur-[100px] rounded-full"></div>
                        <div className="absolute -bottom-24 -right-24 size-64 bg-purple-500/10 blur-[100px] rounded-full"></div>
                        <div
                            className="neon-ring relative z-10 size-48 md:size-56 shrink-0 rounded-full glass-card bg-gradient-to-br from-primary/30 to-purple-500/30 flex items-center justify-center border-2 border-white/20 hover:translate-y-[1px] transition-all">
                            <div className="size-40 md:size-48 rounded-full bg-cover bg-center"
                                data-alt="3D style glassmorphism portrait avatar" style={{ backgroundImage: 'url("/Me.jpeg")' }}>
                            </div>
                        </div>
                        <div className="relative z-10 flex flex-col gap-4 text-center md:text-left">
                            <div>
                                <span className="text-primary font-bold tracking-widest text-xs uppercase">Welcome to my
                                    space</span>
                                <h1 className="text-white text-5xl md:text-6xl font-black leading-tight tracking-tighter mt-2"><span
                                    className="reveal-container"><span className="reveal-text">Hi I'm Prasad.</span></span></h1>
                            </div>
                            <p className="text-slate-400 text-lg max-w-md">
                                Hi! I'm a <span className="text-white font-semibold">Student Developer</span> at ICEM Pune,
                                crafting functional code and exploring the intersection of design and <span className="text-white font-semibold">full-stack engineering.</span>
                            </p>
                            <div className="flex flex-wrap gap-3 mt-2 justify-center md:justify-start">
                                <Link className="bg-primary text-white px-6 py-3 rounded-xl font-bold flex items-center gap-2 hover:translate-y-[-2px] transition-all"
                                    to="/work">
                                    View My Work
                                    <img src="https://img.icons8.com/?size=100&id=cjZ5daEtmKUc&format=png&color=000000"
                                        alt="arrow_forward" className="w-6 h-6 object-contain" />
                                </Link>
                            </div>
                        </div>
                    </div>
                    {/* Current Status Card */}
                    <div
                        className="md:col-span-2 lg:col-span-2 glass-card rounded-xl p-6 flex flex-col justify-between items-center text-center relative overflow-hidden group">
                        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-transparent"></div>
                        <div className="relative z-10 flex flex-col items-center gap-4 py-4">
                            <div className="size-3 bg-primary rounded-full pulse-neon mb-2"></div>
                            <h3 className="text-white text-xl font-bold">Current Status</h3>
                            <p className="text-slate-400 text-sm">Working On SubTracker Application.</p>
                            <h2 className="text-white text-accent-cyan"> Tech Used : </h2>
                            <h2 className="text-slate-400 text-sm"> Frontend - HTML, Tailwind CSS & Capacitor</h2>
                            <h2 className="text-slate-400 text-sm"> Backend - Node.js, Express.js, Supabase</h2>
                        </div>
                    </div>
                    {/* Tech Stack Card */}
                    <div className="md:col-span-2 lg:col-span-2 glass-card rounded-xl p-6 flex flex-col gap-6">
                        <div className="flex justify-between items-center">
                            <h3 className="text-white font-bold text-lg">Languages & Frameworks</h3>
                            <img src="https://img.icons8.com/?size=100&id=46847&format=png&color=000000" alt="grid_view"
                                className="w-7 h-7 object-contain" />
                        </div>
                        <div className="grid grid-cols-2 gap-3">
                            <div
                                className="flex items-center gap-3 p-3 rounded-lg bg-white/5 border border-white/5 hover:border-primary/50 hover:shadow-[0_0_20px_rgba(37,106,244,0.6)] hover:-translate-y-1 transition-all duration-300">
                                <img src="https://img.icons8.com/?size=100&id=20909&format=png&color=000000" alt="terminal"
                                    className="w-6 h-6" />
                                <span className="text-sm font-medium text-slate-300">HTML</span>
                            </div>
                            <div
                                className="flex items-center gap-3 p-3 rounded-lg bg-white/5 border border-white/5 hover:border-primary/50 hover:shadow-[0_0_20px_rgba(37,106,244,0.6)] hover:-translate-y-1 transition-all duration-300 group">
                                <img src="https://api.iconify.design/logos:react.svg" alt="code" className="w-6 h-6" />
                                <span className="text-sm font-medium text-slate-300">React</span>
                            </div>
                            <div
                                className="flex items-center gap-3 p-3 rounded-lg bg-white/5 border border-white/5 hover:border-primary/50 hover:shadow-[0_0_20px_rgba(37,106,244,0.6)] hover:-translate-y-1 transition-all duration-300">
                                <img src="https://img.icons8.com/?size=100&id=21278&format=png&color=000000" alt="palette"
                                    className="w-6 h-6" />
                                <span className="text-sm font-medium text-slate-300">CSS</span>
                            </div>
                            <div
                                className="flex items-center gap-3 p-3 rounded-lg bg-white/5 border border-white/5 hover:border-primary/50 hover:shadow-[0_0_20px_rgba(37,106,244,0.6)] hover:-translate-y-1 transition-all duration-300">
                                <img src="https://img.icons8.com/?size=100&id=x7XMNGh2vdqA&format=png&color=000000"
                                    alt="category" className="w-6 h-6 object-contain" />
                                <span className="text-sm font-medium text-slate-300">Tailwind CSS</span>
                            </div>
                            <div
                                className="flex items-center gap-3 p-3 rounded-lg bg-white/5 border border-white/5 hover:border-primary/50 hover:shadow-[0_0_20px_rgba(37,106,244,0.6)] hover:-translate-y-1 transition-all duration-300">
                                <img src="https://img.icons8.com/?size=100&id=108784&format=png&color=000000" alt="category"
                                    className="w-6 h-6 object-contain" />
                                <span className="text-sm font-medium text-slate-300">JavaScript</span>
                            </div>

                            <div
                                className="flex items-center gap-3 p-3 rounded-lg bg-white/5 border border-white/5 hover:border-primary/50 hover:shadow-[0_0_20px_rgba(37,106,244,0.6)] hover:-translate-y-1 transition-all duration-300">
                                <img src="https://img.icons8.com/?size=100&id=13441&format=png&color=000000" alt="category"
                                    className="w-6 h-6 object-contain" />
                                <span className="text-sm font-medium text-slate-300">Python</span>
                            </div>
                            <div
                                className="flex items-center gap-3 p-3 rounded-lg bg-white/5 border border-white/5 hover:border-primary/50 hover:shadow-[0_0_20px_rgba(37,106,244,0.6)] hover:-translate-y-1 transition-all duration-300">
                                <img src="https://img.icons8.com/?size=100&id=12109&format=png&color=000000" alt="category"
                                    className="w-6 h-6 object-contain" />
                                <span className="text-sm font-medium text-slate-300">Prompt <br /> Engineering</span>
                            </div>
                            <div
                                className="flex items-center gap-3 p-3 rounded-lg bg-white/5 border border-white/5 hover:border-primary/50 hover:shadow-[0_0_20px_rgba(37,106,244,0.6)] hover:-translate-y-1 transition-all duration-300">
                                <img src="https://img.icons8.com/?size=100&id=TpULddJc4gTh&format=png&color=000000" alt="category"
                                    className="w-6 h-6 object-contain" />
                                <span className="text-sm font-medium text-slate-300">C++</span>
                            </div>
                        </div>
                    </div>
                    {/* Recent Projects Card (Wide) */}
                    <div
                        className="md:col-span-4 lg:col-span-4 glass-card rounded-xl p-6 flex flex-col gap-6 relative overflow-hidden group">
                        <div className="flex justify-between items-center">
                            <div>
                                <h3 className="text-white font-bold text-xl">Recent Projects</h3>
                                <p className="text-slate-500 text-sm">Crafting digital excellence</p>
                            </div>
                            <Link className="text-primary text-sm font-bold flex items-center gap-1 hover:gap-2 transition-all"
                                to="/work">
                                All Projects <img src="https://api.iconify.design/flat-color-icons:cursor.svg" alt="north_east"
                                    className="w-6 h-6 object-contain" />
                            </Link>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="relative group/item rounded-lg overflow-hidden border border-white/10 aspect-video">
                                <div className="absolute inset-0 bg-cover bg-center"
                                    data-alt="Screenshot of a sleek web dashboard project"
                                    style={{ backgroundImage: "url('/Library.png')" }}>
                                </div>
                                <div
                                    className="absolute inset-0 bg-black/60 opacity-0 group-hover/item:opacity-100 transition-opacity flex flex-col justify-end p-4">
                                    <p className="text-white font-bold">Library Management System</p>
                                    <p className="text-slate-300 text-xs">School Library Management Platform</p>
                                </div>
                            </div>
                            <div className="relative group/item rounded-lg overflow-hidden border border-white/10 aspect-video">
                                <div className="absolute inset-0 bg-cover bg-center"
                                    data-alt="Screenshot of a sleek web dashboard project"
                                    style={{ backgroundImage: "url('/Subs.png')" }}>
                                </div>
                                <div
                                    className="absolute inset-0 bg-black/60 opacity-0 group-hover/item:opacity-100 transition-opacity flex flex-col justify-end p-4">
                                    <p className="text-white font-bold">SubTracker</p>
                                    <p className="text-slate-300 text-xs">A Subscription Tracker Application</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Social Links Card */}
                    <div className="md:col-span-2 lg:col-span-2 glass-card rounded-xl p-6 flex flex-col gap-4">
                        <h3 className="text-white font-bold text-lg">Connect</h3>
                        <div className="flex flex-col gap-2">
                            <a className="flex items-center justify-between p-4 rounded-xl bg-white/5 hover:bg-white/10 border border-white/5 hover:shadow-[0_0_20px_rgba(37,106,244,0.6)] hover:-translate-y-1 transition-all duration-300"
                                href="https://www.instagram.com/its_jetra?igsh=MWkwOGE2eWxxNXVxZg==">
                                <div className="flex items-center gap-3">
                                    <img src="https://api.iconify.design/skill-icons:instagram.svg" alt="alternate_email"
                                        className="w-6 h-6" />
                                    <span className="text-slate-200 font-medium">Instagram</span>
                                </div>
                                <img src="https://img.icons8.com/?size=100&id=CCznd7l86jtr&format=png&color=ffffff"
                                    alt="open_in_new" className="w-6 h-6 object-contain" />
                            </a>
                            <a className="flex items-center justify-between p-4 rounded-xl bg-white/5 hover:bg-white/10 border border-white/5 hover:shadow-[0_0_20px_rgba(37,106,244,0.6)] hover:-translate-y-1 transition-all duration-300"
                                href="https://www.linkedin.com/in/prasad-mahamuni-8ab9a1286/">
                                <div className="flex items-center gap-3">
                                    <img src="https://api.iconify.design/skill-icons:linkedin.svg" alt="language"
                                        className="w-6 h-6" />
                                    <span className="text-slate-200 font-medium">LinkedIn</span>
                                </div>
                                <img src="https://img.icons8.com/?size=100&id=CCznd7l86jtr&format=png&color=ffffff"
                                    alt="open_in_new" className="w-6 h-6 object-contain" />
                            </a>
                            <a className="flex items-center justify-between p-4 rounded-xl bg-white/5 hover:bg-white/10 border border-white/5 hover:shadow-[0_0_20px_rgba(37,106,244,0.6)] hover:-translate-y-1 transition-all duration-300"
                                href="https://github.com/sudo-141/">
                                <div className="flex items-center gap-3">
                                    <img src="https://api.iconify.design/skill-icons:github-dark.svg" alt="code_blocks"
                                        className="w-6 h-6" />
                                    <span className="text-slate-200 font-medium">GitHub</span>
                                </div>
                                <img src="https://img.icons8.com/?size=100&id=CCznd7l86jtr&format=png&color=ffffff"
                                    alt="open_in_new" className="w-6 h-6 object-contain" />
                            </a>
                        </div>
                    </div>

                    {/* Contact Card */}
                    <div
                        className="md:col-span-4 lg:col-span-4 glass-card bg-gradient-to-br from-primary/20 to-purple-600/20 rounded-xl p-8 flex flex-col md:flex-row items-center justify-between gap-6">
                        <div className="text-center md:text-left">
                            <h3 className="text-white text-3xl font-black mb-2">Have a project idea?</h3>
                            <p className="text-slate-300">Let's build something exceptional together.</p>
                        </div>
                        <Link className="bg-white text-black px-10 py-4 rounded-xl font-black text-lg hover:scale-105 transition-transform"
                            to="/contact">
                            GET IN TOUCH
                        </Link>
                    </div>
                </div>
            </main>
            <footer className="py-12 px-6 border-t border-white/5">
                <div className="max-w-[1200px] mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
                    <p className="text-slate-500 text-sm text-center md:text-left">© 2024 Prasad Portfolio. Designed for the web. All Rights Reserved.</p>
                    <div className="flex gap-6 text-slate-500 text-sm">
                        <a className="hover:text-white transition-colors"
                            href="https://www.linkedin.com/in/prasad-mahamuni-8ab9a1286/">LinkedIn</a>
                        <a className="hover:text-white transition-colors" href="https://github.com/sudo-141/">GitHub</a>
                        <a className="hover:text-white transition-colors"
                            href="https://www.instagram.com/its_jetra?igsh=MWkwOGE2eWxxNXVxZg==">Instagram</a>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Home;
